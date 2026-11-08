import os
from pathlib import Path
from typing import Optional
from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict

BASE_DIR = Path(__file__).resolve().parent.parent

class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=str(BASE_DIR / ".env"),
        env_file_encoding="utf-8",
        extra="ignore"
    )

    # Project Info
    PROJECT_NAME: str = "সহকারী (Sohokari)"
    PROJECT_VERSION: str = "1.0.0"
    BASE_DIR: Path = BASE_DIR

    # GitHub
    GITHUB_REPO: Optional[str] = None
    GITHUB_PAT: Optional[str] = None
    GITHUB_USERNAME: Optional[str] = None
    GITHUB_EMAIL: Optional[str] = None

    # Cloudflare
    CLOUDFLARE_ACCOUNT_ID: Optional[str] = None
    CLOUDFLARE_API_TOKEN: Optional[str] = None
    CLOUDFLARE_D1_DATABASE_ID: Optional[str] = None
    CLOUDFLARE_R2_BUCKET_NAME: Optional[str] = "sohokari-assets"
    CLOUDFLARE_R2_ACCESS_KEY_ID: Optional[str] = None
    CLOUDFLARE_R2_SECRET_ACCESS_KEY: Optional[str] = None
    CLOUDFLARE_R2_ENDPOINT: Optional[str] = None
    CLOUDFLARE_VECTORIZE_INDEX: str = "sohokari-citizen-services-m3"

    # Cloudinary
    CLOUDINARY_CLOUD_NAME: Optional[str] = None
    CLOUDINARY_API_KEY: Optional[str] = None
    CLOUDINARY_API_SECRET: Optional[str] = None

    # Zyte API
    ZYTE_API_KEY: Optional[str] = None
    ZYTE_USE_PROXY: bool = True

    # Cloud Runners
    DEEPNOTE_API_KEY: Optional[str] = None
    CAMBERCLOUD_API_KEY: Optional[str] = None

    # Scraping Engine Settings
    SCRAPER_CONCURRENCY: int = Field(default=5, description="Concurrent scraper workers")
    SCRAPER_DELAY_SECONDS: float = Field(default=1.5, description="Polite delay between requests")
    SCRAPER_USER_AGENT: str = "SohokariCitizenBot/1.0 (+https://github.com/abumdselim/sohokari; Public Citizen Services Aggregator)"
    CONTINUOUS_CYCLE_INTERVAL_MINUTES: int = 360
    REQUEST_TIMEOUT_SECONDS: int = 45
    MAX_RETRIES: int = 3

    # Storage paths
    LOCAL_DATA_DIR: Path = BASE_DIR / "data"
    LOCAL_LOGS_DIR: Path = BASE_DIR / "logs"

    def setup_dirs(self):
        self.LOCAL_DATA_DIR.mkdir(parents=True, exist_ok=True)
        self.LOCAL_LOGS_DIR.mkdir(parents=True, exist_ok=True)
        (self.LOCAL_DATA_DIR / "raw").mkdir(exist_ok=True)
        (self.LOCAL_DATA_DIR / "processed").mkdir(exist_ok=True)
        (self.LOCAL_DATA_DIR / "vectors").mkdir(exist_ok=True)
        (self.LOCAL_DATA_DIR / "forms").mkdir(exist_ok=True)

settings = Settings()
settings.setup_dirs()
