import sys
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BASE_DIR))

if sys.platform.startswith("win"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

from loguru import logger
from storage.d1_manager import CloudflareD1Manager
from scrapers.core_services import get_authoritative_citizen_services

def sync_all_services_to_d1():
    manager = CloudflareD1Manager()
    services = get_authoritative_citizen_services()
    logger.info(f"Syncing {len(services)} authoritative services to Cloudflare D1 ({manager.database_id})...")

    success_count = 0
    for idx, service in enumerate(services, 1):
        sql = manager.generate_sql_insert(service)
        res = manager.execute_query_api(sql)
        if res and res.get("success"):
            success_count += 1
            logger.success(f"[{idx}/{len(services)}] Synced: {service.service_id} ({service.title_bn})")
        else:
            logger.error(f"Failed query for {service.service_id}: {res}")

    logger.info(f"D1 Sync completed: {success_count}/{len(services)} services successfully synced!")

if __name__ == "__main__":
    sync_all_services_to_d1()
