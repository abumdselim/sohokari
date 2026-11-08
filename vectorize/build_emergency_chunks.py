"""
Generates 1024-dim BGE-M3 semantic vector chunks for emergency & helpline directory.
"""

import sys
import json
from pathlib import Path
from typing import List, Dict, Any

BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BASE_DIR))

def build_emergency_chunks() -> List[Dict[str, Any]]:
    json_path = BASE_DIR / "data" / "processed" / "emergency_directory.json"
    if not json_path.exists():
        print("emergency_directory.json not found!")
        return []

    with open(json_path, "r", encoding="utf-8") as f:
        records = json.load(f)

    chunks = []
    for r in records:
        did = r.get("directory_id", "")
        org_bn = r.get("organization_name_bn", "")
        org_en = r.get("organization_name_en", "")
        cat = r.get("category", "")
        sub_cat = r.get("sub_category", "")
        div = r.get("division_bn", "")
        dist = r.get("district_bn", "")
        thana = r.get("upazila_thana_bn", "")
        scope = r.get("service_scope", "")
        short_code = r.get("short_code", "")
        phone = r.get("phone_numbers", "")
        duty = r.get("duty_officer_number", "")
        head = r.get("oc_or_head_number", "")
        addr = r.get("office_address", "")
        process = r.get("complaint_process_bn", "")
        is_free = "টোল-ফ্রি (বিনামূল্যে)" if r.get("is_toll_free") else "সাধারণ কল চার্জ"

        text = (
            f"জরুরি যোগাযোগ ও হেল্পলাইন: {org_bn} ({org_en})\n"
            f"সেবার ধরন: {scope}\n"
            f"ক্যাটাগরি: {cat} - {sub_cat}\n"
            f"আওতাভুক্ত এলাকা: {div} বিভাগ, {dist} জেলা, {thana} থানা/উপজেলা\n"
            f"হটলাইন / শর্টকোড: {short_code}\n"
            f"যোগাযোগ ও জরুরি ফোন নম্বর: {phone}\n"
            f"ডিউটি অফিসার / নিয়ন্ত্রণ কক্ষ নম্বর: {duty}\n"
            f"ওসি / স্টেশন অফিসার / ইনচার্জ নম্বর: {head}\n"
            f"অফিসের ঠিকানা: {addr}\n"
            f"কল চার্জ ও সময়: {r.get('operating_hours', '২৪ ঘণ্টা')} ({is_free})\n"
            f"জরুরি অভিযোগ ও সহায়তা পাওয়ার নিয়ম: {process}"
        )

        chunk = {
            "id": f"emergency-{did}",
            "service_id": did,
            "chunk_type": f"emergency_{cat}",
            "text": text,
            "metadata": {
                "directory_id": did,
                "category": cat,
                "title_bn": org_bn,
                "district_bn": dist,
                "thana_bn": thana,
                "short_code": short_code,
                "phone_numbers": phone,
                "preview": text[:200].replace("\n", " ")
            }
        }
        chunks.append(chunk)

    out_file = BASE_DIR / "data" / "vectors" / "emergency_vectorize_chunks.json"
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(chunks, f, ensure_ascii=False, indent=2)

    print(f"Generated {len(chunks)} emergency vector chunks at {out_file}")
    return chunks

if __name__ == "__main__":
    build_emergency_chunks()
