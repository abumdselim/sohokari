import base64
import time
from typing import Optional, Dict, Any
import httpx
from loguru import logger
from tenacity import retry, stop_after_attempt, wait_exponential, retry_if_exception_type

from config.settings import settings

class ZyteClient:
    """
    Robust HTTP client utilizing Zyte API for resilient, anti-ban web scraping,
    with direct fallback support.
    """
    ZYTE_API_URL = "https://api.zyte.com/v1/extract"

    def __init__(self):
        self.api_key = settings.ZYTE_API_KEY
        self.use_proxy = settings.ZYTE_USE_PROXY and bool(self.api_key)
        self.default_headers = {
            "User-Agent": settings.SCRAPER_USER_AGENT,
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Language": "bn-BD,bn;q=0.9,en-US;q=0.8,en;q=0.7",
        }

    @retry(
        stop=stop_after_attempt(3),
        wait=wait_exponential(multiplier=1.5, min=2, max=10),
        retry_error_callback=lambda retry_state: None
    )
    def fetch_page(self, url: str, render_js: bool = False, use_zyte: Optional[bool] = None) -> Optional[str]:
        """
        Fetch HTML content from a given URL.
        """
        should_use_zyte = self.use_proxy if use_zyte is None else use_zyte

        if should_use_zyte and self.api_key:
            return self._fetch_via_zyte(url, render_js=render_js)
        else:
            return self._fetch_direct(url)

    def _fetch_via_zyte(self, url: str, render_js: bool = False) -> Optional[str]:
        """
        Call Zyte API extract endpoint.
        """
        payload: Dict[str, Any] = {"url": url}
        if render_js:
            payload["browserHtml"] = True
        else:
            payload["httpResponseBody"] = True

        auth = (self.api_key, "")

        try:
            logger.info(f"Zyte API fetching: {url} (JS Render: {render_js})")
            with httpx.Client(timeout=settings.REQUEST_TIMEOUT_SECONDS) as client:
                response = client.post(
                    self.ZYTE_API_URL,
                    auth=auth,
                    json=payload
                )

                if response.status_code == 200:
                    data = response.json()
                    if "browserHtml" in data:
                        return data["browserHtml"]
                    elif "httpResponseBody" in data:
                        body_base64 = data["httpResponseBody"]
                        return base64.b64decode(body_base64).decode("utf-8", errors="replace")
                else:
                    logger.warning(f"Zyte returned status {response.status_code}: {response.text[:200]}")
                    logger.info("Falling back to direct HTTP request...")
                    return self._fetch_direct(url)
        except Exception as e:
            logger.error(f"Error fetching via Zyte for {url}: {e}. Trying direct...")
            return self._fetch_direct(url)

    def _fetch_direct(self, url: str) -> Optional[str]:
        """
        Fetch directly without Zyte proxy.
        """
        try:
            logger.info(f"Direct fetching: {url}")
            with httpx.Client(
                headers=self.default_headers,
                timeout=settings.REQUEST_TIMEOUT_SECONDS,
                follow_redirects=True
            ) as client:
                response = client.get(url)
                if response.status_code == 200:
                    return response.text
                else:
                    logger.warning(f"Direct request failed with HTTP {response.status_code} for {url}")
                    return None
        except Exception as e:
            logger.error(f"Direct fetch exception for {url}: {e}")
            return None
