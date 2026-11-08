import sys
import json
import time
from pathlib import Path
from typing import List, Dict, Any, Optional
import httpx
from loguru import logger
from rich.console import Console
from rich.panel import Panel

BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BASE_DIR))

if sys.platform.startswith("win"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

from config.settings import settings

console = Console(force_terminal=True, legacy_windows=False)

class CloudflareVectorizeClient:
    """
    Manages embedding generation via Cloudflare Workers AI and vector indexing/querying
    on Cloudflare Vectorize.
    """
    EMBEDDING_MODEL = "@cf/baai/bge-m3"

    def __init__(self):
        self.account_id = settings.CLOUDFLARE_ACCOUNT_ID
        self.api_token = settings.CLOUDFLARE_API_TOKEN
        self.index_name = settings.CLOUDFLARE_VECTORIZE_INDEX
        self.headers = {
            "Authorization": f"Bearer {self.api_token}",
            "Content-Type": "application/json"
        }
        self.ai_url = f"https://api.cloudflare.com/client/v4/accounts/{self.account_id}/ai/run/{self.EMBEDDING_MODEL}"
        self.vectorize_base = f"https://api.cloudflare.com/client/v4/accounts/{self.account_id}/vectorize/v2/indexes/{self.index_name}"

    def get_embeddings(self, texts: List[str]) -> List[List[float]]:
        """
        Generates 768-dimensional normalized vector embeddings using Cloudflare Workers AI.
        """
        # Workers AI accepts a list of texts
        payload = {"text": texts}
        try:
            with httpx.Client(timeout=45) as client:
                res = client.post(self.ai_url, headers=self.headers, json=payload)
                if res.status_code == 200:
                    data = res.json()
                    vectors = data.get("result", {}).get("data", [])
                    return vectors
                else:
                    logger.error(f"Workers AI embedding error ({res.status_code}): {res.text}")
                    return []
        except Exception as e:
            logger.error(f"Error calling Workers AI: {e}")
            return []

    def sync_all_chunks(self, chunks_path: Optional[Path] = None, batch_size: int = 15):
        """
        Reads generated chunks, generates embeddings in batches using Workers AI,
        and uploads all vectors in a single combined Vectorize mutation.
        """
        file_path = chunks_path or (settings.LOCAL_DATA_DIR / "vectors" / "cloudflare_vectorize_chunks.json")
        if not file_path.exists():
            logger.error(f"Chunks file not found at: {file_path}")
            return

        with open(file_path, "r", encoding="utf-8") as f:
            chunks: List[Dict[str, Any]] = json.load(f)

        logger.info(f"Loaded {len(chunks)} semantic chunks. Generating embeddings via {self.EMBEDDING_MODEL}...")

        total_batches = (len(chunks) + batch_size - 1) // batch_size
        all_records = []

        for b_idx in range(total_batches):
            start = b_idx * batch_size
            end = min(start + batch_size, len(chunks))
            batch_chunks = chunks[start:end]

            texts = [c["text"] for c in batch_chunks]
            vectors = self.get_embeddings(texts)

            if not vectors or len(vectors) != len(batch_chunks):
                logger.error(f"Batch {b_idx + 1}/{total_batches} failed to generate embeddings.")
                continue

            for chunk, vec in zip(batch_chunks, vectors):
                record = {
                    "id": chunk["id"],
                    "values": vec,
                    "metadata": {
                        "service_id": chunk["service_id"],
                        "chunk_type": chunk["chunk_type"],
                        "title_bn": chunk.get("metadata", {}).get("title_bn", ""),
                        "preview": chunk["text"][:300].replace("\n", " ")
                    }
                }
                all_records.append(record)

            logger.info(f"Generated embeddings: {len(all_records)}/{len(chunks)}")
            time.sleep(0.3)

        logger.info(f"Uploading all {len(all_records)} vectors in batches to Vectorize '{self.index_name}'...")
        upsert_url = f"{self.vectorize_base}/upsert"
        upsert_headers = {
            "Authorization": f"Bearer {self.api_token}",
            "Content-Type": "application/x-ndjson"
        }

        upload_batch_size = 150
        for i in range(0, len(all_records), upload_batch_size):
            batch = all_records[i:i + upload_batch_size]
            ndjson_lines = [json.dumps(r, ensure_ascii=False) for r in batch]
            ndjson_payload = "\n".join(ndjson_lines)

            try:
                with httpx.Client(timeout=60) as client:
                    res = client.post(upsert_url, headers=upsert_headers, content=ndjson_payload.encode("utf-8"))
                    if res.status_code == 200:
                        data = res.json()
                        mut_id = data.get("result", {}).get("mutationId")
                        logger.success(f"Vectorize upsert batch [{i+1}-{min(i+upload_batch_size, len(all_records))}/{len(all_records)}] accepted! Mutation ID: {mut_id}")
                    else:
                        logger.error(f"Vectorize upsert error: {res.text}")
            except Exception as e:
                logger.error(f"Network error on Vectorize upsert: {e}")

    def search(self, query: str, top_k: int = 3) -> List[Dict[str, Any]]:
        """
        Executes semantic vector search for a citizen query.
        """
        query_vectors = self.get_embeddings([query])
        if not query_vectors:
            return []

        query_vec = query_vectors[0]
        query_url = f"{self.vectorize_base}/query"
        payload = {
            "vector": query_vec,
            "topK": top_k,
            "returnValues": False,
            "returnMetadata": "all"
        }

        try:
            with httpx.Client(timeout=15) as client:
                res = client.post(query_url, headers=self.headers, json=payload)
                if res.status_code == 200:
                    matches = res.json().get("result", {}).get("matches", [])
                    return matches
                else:
                    logger.error(f"Search failed ({res.status_code}): {res.text}")
                    return []
        except Exception as e:
            logger.error(f"Search exception: {e}")
            return []

if __name__ == "__main__":
    client = CloudflareVectorizeClient()
    client.sync_all_chunks()
