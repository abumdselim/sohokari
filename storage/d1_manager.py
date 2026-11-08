import json
from pathlib import Path
from typing import List, Optional
import httpx
from loguru import logger

from config.settings import settings
from schema.models import CitizenService

class CloudflareD1Manager:
    """
    Manages synchronization with Cloudflare D1 SQL database.
    Supports direct Cloudflare D1 REST API execution and SQL dump generation.
    """
    def __init__(self):
        self.account_id = settings.CLOUDFLARE_ACCOUNT_ID
        self.api_token = settings.CLOUDFLARE_API_TOKEN
        self.database_id = settings.CLOUDFLARE_D1_DATABASE_ID
        self.api_base = f"https://api.cloudflare.com/client/v4/accounts/{self.account_id}/d1/database/{self.database_id}"

    def generate_sql_insert(self, service: CitizenService) -> str:
        """
        Generates robust SQLite / D1 UPSERT statements for a service.
        """
        def esc(val: Optional[str]) -> str:
            if val is None:
                return "NULL"
            escaped = val.replace("'", "''")
            return f"'{escaped}'"

        statements = []

        # 1. Main Service record
        statements.append(f"""
        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            {esc(service.service_id)}, {esc(service.title_bn)}, {esc(service.title_en)}, 
            {esc(service.category)}, {esc(service.sub_category)}, {esc(service.department_agency)}, 
            {esc(service.summary)}, {esc(service.processing_time_sla)}, 
            {esc(service.official_portal_url)}, {esc(service.application_url)}, 
            {esc(service.citizen_charter_url)}, {esc(service.anti_broker_warning)}, 
            {esc(service.grievance_remedy)}, {esc(service.source_platform)}, CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        """)

        # Clean existing child records for fresh upsert
        statements.append(f"DELETE FROM service_fees WHERE service_id = {esc(service.service_id)};")
        statements.append(f"DELETE FROM service_documents WHERE service_id = {esc(service.service_id)};")
        statements.append(f"DELETE FROM service_steps WHERE service_id = {esc(service.service_id)};")

        # 2. Fees
        for fee in service.official_fees:
            vat_val = 1 if fee.vat_included else 0
            statements.append(f"""
            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ({esc(service.service_id)}, {esc(fee.category_name)}, {fee.amount_bdt}, {vat_val}, {esc(fee.payment_method)}, {esc(fee.remarks)});
            """)

        # 3. Documents
        for doc in service.required_documents:
            mand_val = 1 if doc.is_mandatory else 0
            attest_val = 1 if doc.attestation_required else 0
            statements.append(f"""
            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ({esc(service.service_id)}, {esc(doc.name)}, {mand_val}, {attest_val}, {esc(doc.format_type)}, {esc(doc.how_to_obtain)});
            """)

        # 4. Steps
        for step in service.step_by_step_process:
            statements.append(f"""
            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ({esc(service.service_id)}, {step.step_number}, {esc(step.title)}, {esc(step.description)}, {esc(step.action_url)}, {esc(step.tips)});
            """)

        return "\n".join(statements)

    def export_full_sql_file(self, services: List[CitizenService], output_file: Optional[Path] = None) -> Path:
        """
        Exports schema + all service records to a single .sql file for Cloudflare D1 migration.
        """
        target = output_file or (settings.LOCAL_DATA_DIR / "processed" / "d1_services_seed.sql")
        target.parent.mkdir(parents=True, exist_ok=True)

        schema_path = settings.BASE_DIR / "schema" / "d1_schema.sql"
        schema_content = schema_path.read_text(encoding="utf-8") if schema_path.exists() else ""

        with open(target, "w", encoding="utf-8") as f:
            f.write("-- =========================================================\n")
            f.write("-- SOHOKARI (সহকারী) - CLOUDFLARE D1 FULL DATABASE SEED\n")
            f.write("-- =========================================================\n\n")
            f.write(schema_content)
            f.write("\n\n-- SERVICES DATA INSERTIONS --\n\n")

            for service in services:
                f.write(f"-- Service: {service.title_bn} ({service.service_id})\n")
                f.write(self.generate_sql_insert(service))
                f.write("\n\n")

        logger.info(f"Exported D1 migration SQL file with {len(services)} services to: {target}")
        return target

    def execute_query_api(self, sql_query: str) -> Optional[dict]:
        """
        Executes SQL statements via Cloudflare D1 REST API (if credentials are provided).
        """
        if not (self.account_id and self.api_token and self.database_id):
            logger.warning("Cloudflare credentials not fully set in .env. Skipping direct REST API execution.")
            return None

        url = f"{self.api_base}/query"
        headers = {
            "Authorization": f"Bearer {self.api_token}",
            "Content-Type": "application/json"
        }
        payload = {"sql": sql_query}

        try:
            with httpx.Client(timeout=30) as client:
                res = client.post(url, headers=headers, json=payload)
                if res.status_code == 200:
                    logger.success("Successfully executed D1 query via Cloudflare API.")
                    return res.json()
                else:
                    logger.error(f"D1 API error ({res.status_code}): {res.text}")
                    return None
        except Exception as e:
            logger.error(f"Failed to query Cloudflare D1 API: {e}")
            return None
