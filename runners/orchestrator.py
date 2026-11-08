import json
import time
from pathlib import Path
from typing import List
from loguru import logger
from rich.console import Console
from rich.table import Table

from config.settings import settings
from schema.models import CitizenService
from scrapers.core_services import get_authoritative_citizen_services
from scrapers.sebakunjo_scraper import SebakunjoScraper
from storage.d1_manager import CloudflareD1Manager
from vectorize.preparer import VectorizePreparer

console = Console(force_terminal=True, legacy_windows=False)

class SohokariEngine:
    """
    Central Orchestrator for the 'Kaaz AI' (কাজ এআই) citizen services data pipeline.
    """
    def __init__(self):
        self.d1_manager = CloudflareD1Manager()
        self.vector_preparer = VectorizePreparer()
        self.sebakunjo_scraper = SebakunjoScraper()

    def run(self) -> List[CitizenService]:
        console.print("[bold green]=====================================================[/bold green]")
        console.print(f"[bold cyan]🚀 শুরু হচ্ছে '{settings.PROJECT_NAME}' ডেটা ইঞ্জিন ও স্ক্র্যাপিং পাইপলাইন...[/bold cyan]")
        console.print("[bold green]=====================================================[/bold green]")

        # 1. Load Authoritative High-Impact Services
        logger.info("Loading verified high-impact citizen services...")
        services: List[CitizenService] = get_authoritative_citizen_services()
        logger.success(f"Loaded {len(services)} verified core citizen services.")

        # 2. Save processed JSON
        json_output = settings.LOCAL_DATA_DIR / "processed" / "citizen_services.json"
        with open(json_output, "w", encoding="utf-8") as f:
            json.dump([s.model_dump(mode="json") for s in services], f, ensure_ascii=False, indent=2)
        logger.info(f"Saved processed JSON to {json_output}")

        # 3. Export Cloudflare D1 SQL Script
        d1_sql_path = self.d1_manager.export_full_sql_file(services)
        logger.success(f"Generated Cloudflare D1 SQL seed at: {d1_sql_path}")

        # 4. Prepare Vectorize Semantic Embeddings Chunks
        vector_chunks_path = self.vector_preparer.export_vectorize_payload(services)
        logger.success(f"Generated Cloudflare Vectorize payload at: {vector_chunks_path}")

        # 5. Display Summary Table
        self.display_summary(services)

        return services

    def display_summary(self, services: List[CitizenService]):
        table = Table(title="Kaaz AI (কাজ এআই) - নাগরিক সেবা ডাটাবেজ সামারি", show_header=True, header_style="bold magenta")
        table.add_column("আইডি", style="dim", width=25)
        table.add_column("সেবার নাম (বাংলা)", style="bold cyan")
        table.add_column("দপ্তর / মন্ত্রণালয়", style="yellow")
        table.add_column("সরকারি সময়সীমা (SLA)", style="green")
        table.add_column("নির্ধারিত সরকারি ফি", justify="right", style="bold red")

        for s in services:
            min_fee = min([f.amount_bdt for f in s.official_fees]) if s.official_fees else 0
            max_fee = max([f.amount_bdt for f in s.official_fees]) if s.official_fees else 0
            fee_str = f"৳{min_fee:,.0f} - ৳{max_fee:,.0f}" if min_fee != max_fee else f"৳{min_fee:,.0f}"
            table.add_row(
                s.service_id,
                s.title_bn,
                s.department_agency.split(",")[0],
                s.processing_time_sla.split("|")[0].strip(),
                fee_str
            )

        console.print(table)
