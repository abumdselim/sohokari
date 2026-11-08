import json
from pathlib import Path
from typing import List, Dict, Any, Optional
from loguru import logger

from config.settings import settings
from schema.models import CitizenService

class VectorizePreparer:
    """
    Transforms structured CitizenService models into high-density semantic chunks
    optimized for Bengali & English retrieval on Cloudflare Vectorize / Workers AI (e.g., bge-m3).
    """

    def create_chunks_for_service(self, service: CitizenService) -> List[Dict[str, Any]]:
        chunks = []

        # Chunk 1: Service Overview & Core Identity
        overview_text = (
            f"সেবার নাম: {service.title_bn} ({service.title_en or ''})\n"
            f"মন্ত্রণালয় ও দপ্তর: {service.department_agency}\n"
            f"ক্যাটাগরি: {service.category}\n"
            f"সেবার সময়সীমা (SLA): {service.processing_time_sla}\n"
            f"সংক্ষিপ্ত বিবরণ: {service.summary}\n"
            f"মূল সরকারি পোর্টাল: {service.official_portal_url}\n"
            f"আবেদন লিঙ্ক: {service.application_url or 'প্রযোজ্য নয়'}\n"
            f"সতর্কতা: {service.anti_broker_warning}"
        )
        chunks.append({
            "id": f"{service.service_id}-overview",
            "service_id": service.service_id,
            "chunk_type": "overview",
            "text": overview_text,
            "metadata": {
                "service_id": service.service_id,
                "title_bn": service.title_bn,
                "category": service.category,
                "chunk_type": "overview"
            }
        })

        # Chunk 2: Official Fee Breakdown (Anti-Corruption / No Middlemen)
        fee_lines = []
        for fee in service.official_fees:
            vat_txt = "ভ্যাটসহ" if fee.vat_included else "ভ্যাট ব্যতীত"
            fee_lines.append(f"- {fee.category_name}: {fee.amount_bdt:,.2f} টাকা ({vat_txt}) | মাধ্যম: {fee.payment_method} | মন্তব্য: {fee.remarks or 'নেই'}")

        fee_text = (
            f"সেবা: {service.title_bn} এর সরকারি নির্ধারিত ফি তালিকা:\n"
            + "\n".join(fee_lines) + "\n\n"
            f"বিশেষ নোটিশ: সরকার নির্ধারিত ফি ব্যতিরেকে কোনো কর্মকর্তা বা দালালকে কোনো প্রকার অতিরিক্ত অর্থ বা চাঁদা দেওয়া আইনত দণ্ডনীয়। সকল ফি সরাসরি ব্যাংকে বা সরকারি ডিজিটাল গেটওয়েতে জমা হয়।"
        )
        chunks.append({
            "id": f"{service.service_id}-fees",
            "service_id": service.service_id,
            "chunk_type": "fees",
            "text": fee_text,
            "metadata": {
                "service_id": service.service_id,
                "title_bn": service.title_bn,
                "category": service.category,
                "chunk_type": "fees"
            }
        })

        # Chunk 3: Required Documents Checklist
        doc_lines = []
        for doc in service.required_documents:
            mand_txt = "বাধ্যতামূলক" if doc.is_mandatory else "প্রযোজ্য ক্ষেত্রে"
            attest_txt = "সত্যায়ন প্রয়োজন" if doc.attestation_required else "সত্যায়নের প্রয়োজন নেই"
            doc_lines.append(f"- {doc.name} [{mand_txt}, {attest_txt}] (ফরম্যাট: {doc.format_type}) | প্রাপ্তিস্থান: {doc.how_to_obtain or 'স্বাভাবিক'}")

        doc_text = (
            f"সেবা: {service.title_bn} এর জন্য প্রয়োজনীয় কাগজপত্র ও সনদের তালিকা:\n"
            + "\n".join(doc_lines)
        )
        chunks.append({
            "id": f"{service.service_id}-documents",
            "service_id": service.service_id,
            "chunk_type": "documents",
            "text": doc_text,
            "metadata": {
                "service_id": service.service_id,
                "title_bn": service.title_bn,
                "category": service.category,
                "chunk_type": "documents"
            }
        })

        # Chunk 4: Step-by-Step Application Workflow
        step_lines = []
        for step in service.step_by_step_process:
            step_lines.append(f"ধাপ {step.step_number}: {step.title}\nবিবরণ: {step.description}\nপরামর্শ/টিপস: {step.tips or 'নেই'}")

        step_text = (
            f"সেবা: {service.title_bn} গ্রহণের ধাপে ধাপে আবেদন পদ্ধতি:\n\n"
            + "\n\n".join(step_lines)
        )
        chunks.append({
            "id": f"{service.service_id}-steps",
            "service_id": service.service_id,
            "chunk_type": "steps",
            "text": step_text,
            "metadata": {
                "service_id": service.service_id,
                "title_bn": service.title_bn,
                "category": service.category,
                "chunk_type": "steps"
            }
        })

        # Chunk 5: Escalation & Grievance Redress (GRS)
        if service.grievance_remedy:
            grs_text = (
                f"সেবা: {service.title_bn} তে হয়রানি, বিলম্ব বা ঘুষ দাবির ক্ষেত্রে প্রতিকার:\n"
                f"{service.grievance_remedy}\n"
                f"জাতীয় অভিযোগ প্রতিকার ব্যবস্থাপনা (GRS): https://grs.gov.bd"
            )
            chunks.append({
                "id": f"{service.service_id}-grs",
                "service_id": service.service_id,
                "chunk_type": "grs",
                "text": grs_text,
                "metadata": {
                    "service_id": service.service_id,
                    "title_bn": service.title_bn,
                    "category": service.category,
                    "chunk_type": "grs"
                }
            })

        return chunks

    def export_vectorize_payload(self, services: List[CitizenService], output_path: Optional[Path] = None) -> Path:
        """
        Exports all service chunks as an ndjson/json file ready for Cloudflare Vectorize / Workers AI embedding.
        """
        target = output_path or (settings.LOCAL_DATA_DIR / "vectors" / "cloudflare_vectorize_chunks.json")
        target.parent.mkdir(parents=True, exist_ok=True)

        all_chunks = []
        for service in services:
            all_chunks.extend(self.create_chunks_for_service(service))

        with open(target, "w", encoding="utf-8") as f:
            json.dump(all_chunks, f, ensure_ascii=False, indent=2)

        logger.success(f"Generated {len(all_chunks)} semantic vector chunks for Cloudflare Vectorize at: {target}")
        return target
