import time
import httpx
from datetime import datetime
from loguru import logger

from config.settings import settings
from runners.orchestrator import SohokariEngine

class CloudRunner:
    """
    Handles cloud runner execution, cron intervals, and triggers for Deepnote or Camber Cloud.
    """
    def __init__(self):
        self.deepnote_key = settings.DEEPNOTE_API_KEY
        self.camber_key = settings.CAMBERCLOUD_API_KEY
        self.interval_minutes = settings.CONTINUOUS_CYCLE_INTERVAL_MINUTES
        self.engine = SohokariEngine()

    def run_continuous_loop(self):
        """
        Runs the scraping & sync cycle periodically based on CONTINUOUS_CYCLE_INTERVAL_MINUTES.
        """
        logger.info(f"Starting Sohokari Cloud Runner cycle every {self.interval_minutes} minutes...")
        
        while True:
            cycle_start = datetime.now()
            logger.info(f"===> Starting cycle at {cycle_start.strftime('%Y-%m-%d %H:%M:%S')} <===")
            
            try:
                self.engine.run()
                logger.success("Scraping and Cloudflare sync cycle completed successfully.")
            except Exception as e:
                logger.error(f"Error during runner cycle: {e}")

            sleep_seconds = self.interval_minutes * 60
            logger.info(f"Sleeping for {self.interval_minutes} minutes until next execution...")
            time.sleep(sleep_seconds)

    def trigger_deepnote_notebook(self, project_id: str, notebook_id: str):
        """
        Triggers a Deepnote notebook execution via Deepnote API.
        """
        if not self.deepnote_key:
            logger.warning("Deepnote API key not configured.")
            return

        url = f"https://api.deepnote.com/v1/projects/{project_id}/notebooks/{notebook_id}/execute"
        headers = {
            "Authorization": f"Bearer {self.deepnote_key}",
            "Content-Type": "application/json"
        }
        try:
            with httpx.Client(timeout=30) as client:
                res = client.post(url, headers=headers)
                logger.info(f"Deepnote trigger status: {res.status_code}")
                return res.json()
        except Exception as e:
            logger.error(f"Deepnote trigger failed: {e}")

if __name__ == "__main__":
    runner = CloudRunner()
    runner.engine.run()
