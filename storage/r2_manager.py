from pathlib import Path
from typing import Optional, Dict, Any
import httpx
from loguru import logger

from config.settings import settings

class CloudflareR2Manager:
    """
    Manages asset uploads (e.g., application PDF forms, citizen charter documents)
    to Cloudflare R2 object storage using standard S3 compatibility or direct uploads.
    """
    def __init__(self):
        self.bucket_name = settings.CLOUDFLARE_R2_BUCKET_NAME
        self.endpoint = settings.CLOUDFLARE_R2_ENDPOINT
        self.access_key = settings.CLOUDFLARE_R2_ACCESS_KEY_ID
        self.secret_key = settings.CLOUDFLARE_R2_SECRET_ACCESS_KEY
        self._s3_client = None

    def _get_client(self):
        if not self._s3_client and self.access_key and self.secret_key and self.endpoint:
            try:
                import boto3
                self._s3_client = boto3.client(
                    "s3",
                    endpoint_url=self.endpoint,
                    aws_access_key_id=self.access_key,
                    aws_secret_access_key=self.secret_key,
                    region_name="auto"
                )
            except Exception as e:
                logger.warning(f"Could not initialize boto3 client for Cloudflare R2: {e}")
        return self._s3_client

    def download_form(self, url: str, service_id: str, filename: str) -> Optional[Path]:
        """
        Downloads a government form PDF or document locally.
        """
        target_dir = settings.LOCAL_DATA_DIR / "forms" / service_id
        target_dir.mkdir(parents=True, exist_ok=True)
        local_path = target_dir / filename

        try:
            with httpx.Client(timeout=30, follow_redirects=True) as client:
                res = client.get(url)
                if res.status_code == 200:
                    local_path.write_bytes(res.content)
                    logger.info(f"Downloaded form: {local_path}")
                    return local_path
                else:
                    logger.warning(f"Failed downloading form {url}: status {res.status_code}")
                    return None
        except Exception as e:
            logger.error(f"Error downloading form from {url}: {e}")
            return None

    def upload_to_r2(self, local_path: Path, r2_key: str) -> Optional[str]:
        """
        Uploads local file to Cloudflare R2 bucket.
        """
        client = self._get_client()
        if not client:
            logger.info(f"[Mock R2 Upload] Credentials not configured yet. Would upload {local_path} to R2 key '{r2_key}'.")
            return f"https://assets.sohokari.gov.bd/{r2_key}"

        try:
            client.upload_file(str(local_path), self.bucket_name, r2_key)
            logger.success(f"Uploaded {local_path} to R2 bucket '{self.bucket_name}' key '{r2_key}'")
            return f"{self.endpoint}/{self.bucket_name}/{r2_key}"
        except Exception as e:
            logger.error(f"Failed to upload to R2: {e}")
            return None
