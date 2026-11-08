"""
Syncs all emergency and helpline records into Cloudflare D1 table emergency_directories.
"""

import sys
import json
from pathlib import Path
import httpx
from loguru import logger

BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BASE_DIR))

from config.settings import settings

def sync_emergency_to_d1():
    account_id = settings.CLOUDFLARE_ACCOUNT_ID
    api_token = settings.CLOUDFLARE_API_TOKEN
    database_id = settings.CLOUDFLARE_D1_DATABASE_ID

    api_url = f"https://api.cloudflare.com/client/v4/accounts/{account_id}/d1/database/{database_id}/query"
    headers = {
        "Authorization": f"Bearer {api_token}",
        "Content-Type": "application/json"
    }

    json_path = BASE_DIR / "data" / "processed" / "emergency_directory.json"
    if not json_path.exists():
        logger.error(f"JSON not found: {json_path}")
        return

    with open(json_path, "r", encoding="utf-8") as f:
        records = json.load(f)

    logger.info(f"Syncing {len(records)} emergency and helpline directory records to D1...")

    def esc(val):
        if val is None:
            return "NULL"
        escaped = str(val).replace("'", "''")
        return f"'{escaped}'"

    batch_size = 15
    for i in range(0, len(records), batch_size):
        batch = records[i:i + batch_size]
        statements = []
        for r in batch:
            stmt = f"""
            INSERT INTO emergency_directories (
                directory_id, category, sub_category, division_bn, district_bn, 
                upazila_thana_bn, organization_name_bn, organization_name_en, 
                service_scope, short_code, phone_numbers, duty_officer_number, 
                oc_or_head_number, email, office_address, website_url, 
                operating_hours, is_toll_free, complaint_process_bn, updated_at
            ) VALUES (
                {esc(r.get('directory_id'))}, {esc(r.get('category'))}, {esc(r.get('sub_category'))}, 
                {esc(r.get('division_bn'))}, {esc(r.get('district_bn'))}, {esc(r.get('upazila_thana_bn'))}, 
                {esc(r.get('organization_name_bn'))}, {esc(r.get('organization_name_en'))}, 
                {esc(r.get('service_scope'))}, {esc(r.get('short_code'))}, {esc(r.get('phone_numbers'))}, 
                {esc(r.get('duty_officer_number'))}, {esc(r.get('oc_or_head_number'))}, 
                {esc(r.get('email'))}, {esc(r.get('office_address'))}, {esc(r.get('website_url'))}, 
                {esc(r.get('operating_hours'))}, {r.get('is_toll_free', 0)}, 
                {esc(r.get('complaint_process_bn'))}, CURRENT_TIMESTAMP
            )
            ON CONFLICT(directory_id) DO UPDATE SET
                category=excluded.category,
                sub_category=excluded.sub_category,
                division_bn=excluded.division_bn,
                district_bn=excluded.district_bn,
                upazila_thana_bn=excluded.upazila_thana_bn,
                organization_name_bn=excluded.organization_name_bn,
                organization_name_en=excluded.organization_name_en,
                service_scope=excluded.service_scope,
                short_code=excluded.short_code,
                phone_numbers=excluded.phone_numbers,
                duty_officer_number=excluded.duty_officer_number,
                oc_or_head_number=excluded.oc_or_head_number,
                email=excluded.email,
                office_address=excluded.office_address,
                website_url=excluded.website_url,
                operating_hours=excluded.operating_hours,
                is_toll_free=excluded.is_toll_free,
                complaint_process_bn=excluded.complaint_process_bn,
                updated_at=CURRENT_TIMESTAMP;
            """
            statements.append(stmt.strip())

        combined_sql = "\n".join(statements)
        try:
            with httpx.Client(timeout=30) as client:
                res = client.post(api_url, headers=headers, json={"sql": combined_sql})
                if res.status_code == 200 and res.json().get("success"):
                    logger.success(f"Batch [{i+1}-{min(i+batch_size, len(records))}/{len(records)}] synced to D1!")
                else:
                    logger.error(f"Error syncing batch: {res.text}")
        except Exception as e:
            logger.error(f"Exception on batch sync: {e}")

    logger.info("Emergency directory D1 sync completed!")

if __name__ == "__main__":
    sync_emergency_to_d1()
