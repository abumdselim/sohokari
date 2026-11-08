import json
import time
import httpx
from pathlib import Path
from dotenv import load_dotenv
import os

load_dotenv()

ACCOUNT_ID = os.getenv("CLOUDFLARE_ACCOUNT_ID")
API_TOKEN = os.getenv("CLOUDFLARE_API_TOKEN")
INDEX_NAME = os.getenv("CLOUDFLARE_VECTORIZE_INDEX", "sohokari-citizen-services-m3")

AI_URL = f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/@cf/baai/bge-m3"
VECTORIZE_UPSERT_URL = f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/vectorize/v2/indexes/{INDEX_NAME}/upsert"

headers = {
    "Authorization": f"Bearer {API_TOKEN}",
    "Content-Type": "application/json"
}

# Load newly added 10 services
with open('data/processed/citizen_services.json', 'r', encoding='utf-8') as f:
    all_services = json.load(f)

target_ids = [
    'bd-it-freelancer-id-card-cash-incentive',
    'bd-dip-no-visa-required-nvr-seal',
    'bd-bise-duplicate-academic-certificate-marksheet',
    'bd-nu-degree-masters-certificate-transcript',
    'bd-land-mutation-appeal-miss-case-adc',
    'bd-dc-land-acquisition-la-case-compensation',
    'bd-magistrate-court-affidavit-notary-public',
    'bd-nbr-etin-cancellation-deregistration',
    'bd-pm-relief-fund-medical-financial-grant',
    'bd-mowca-one-stop-crisis-center-occ'
]

new_services = [s for s in all_services if s['service_id'] in target_ids]
print(f"Found {len(new_services)} services to index into Vectorize.")

chunks = []
for s in new_services:
    sid = s['service_id']
    t_bn = s['title_bn']
    dept = s['department_agency']
    cat = s['category']
    sla = s['processing_time_sla']
    summary = s['summary']
    portal = s.get('official_portal_url', '')
    warn = s.get('anti_broker_warning', '')

    # 1. Overview chunk
    overview_text = (
        f"সেবার নাম: {t_bn} ({s.get('title_en', '')})\n"
        f"দপ্তর ও মন্ত্রণালয়: {dept}\n"
        f"ক্যাটাগরি: {cat}\n"
        f"সরকারি সময়সীমা: {sla}\n"
        f"সংক্ষিপ্ত বিবরণ: {summary}\n"
        f"অফিসিয়াল পোর্টাল: {portal}\n"
        f"দালাল সতর্কতা: {warn}"
    )
    chunks.append({
        "id": f"{sid}-overview",
        "service_id": sid,
        "chunk_type": "overview",
        "text": overview_text,
        "metadata": {"service_id": sid, "title_bn": t_bn, "category": cat, "chunk_type": "overview"}
    })

    # 2. Fees chunk
    fee_lines = []
    for f in s.get('fees', []):
        fee_lines.append(f"• {f['category_name']}: {f['amount_bdt']} টাকা ({f.get('remarks') or 'সরকারি চালান'})")
    fee_text = (
        f"সেবা: {t_bn} এর সরকারি নির্ধারিত ফি তালিকা:\n"
        + "\n".join(fee_lines) + "\n\n"
        f"দালাল প্রতিরোধ সতর্কতা: {warn}"
    )
    chunks.append({
        "id": f"{sid}-fees",
        "service_id": sid,
        "chunk_type": "fees",
        "text": fee_text,
        "metadata": {"service_id": sid, "title_bn": t_bn, "category": cat, "chunk_type": "fees"}
    })

    # 3. Documents chunk
    doc_lines = []
    for d in s.get('documents', []):
        doc_lines.append(f"• {d['name']} [{'বাধ্যতামূলক' if d.get('is_mandatory') else 'ঐচ্ছিক'}] ({d.get('format_type', '')})")
    doc_text = (
        f"সেবা: {t_bn} আবেদনের প্রয়োজনীয় কাগজপত্র (চেকলিস্ট):\n"
        + "\n".join(doc_lines)
    )
    chunks.append({
        "id": f"{sid}-documents",
        "service_id": sid,
        "chunk_type": "documents",
        "text": doc_text,
        "metadata": {"service_id": sid, "title_bn": t_bn, "category": cat, "chunk_type": "documents"}
    })

    # 4. Steps chunk
    step_lines = []
    for st in s.get('steps', []):
        step_lines.append(f"{st['step_number']}. {st['title']}: {st['description']} (টিপস: {st.get('tips', '')})")
    step_text = (
        f"সেবা: {t_bn} আবেদনের সরকারি ধাপসমূহ:\n"
        + "\n".join(step_lines)
    )
    chunks.append({
        "id": f"{sid}-steps",
        "service_id": sid,
        "chunk_type": "steps",
        "text": step_text,
        "metadata": {"service_id": sid, "title_bn": t_bn, "category": cat, "chunk_type": "steps"}
    })

print(f"Total chunks created: {len(chunks)}")

# Generate embeddings and upsert
with httpx.Client(timeout=60.0) as client:
    vectors = []
    for i, chunk in enumerate(chunks):
        print(f"[{i+1}/{len(chunks)}] Embedding: {chunk['id']}")
        res = client.post(AI_URL, headers=headers, json={"text": [chunk["text"]]})
        if res.status_code != 200:
            print(f"Failed to embed chunk {chunk['id']}: {res.text}")
            continue

        res_json = res.json()
        embedding = res_json.get("result", {}).get("data", [])[0]

        vectors.append({
            "id": chunk["id"],
            "values": embedding,
            "metadata": chunk["metadata"]
        })
        time.sleep(0.1)

    print(f"Generated {len(vectors)} embeddings. Uploading to Vectorize index: {INDEX_NAME}...")

    # Upload in ndjson format
    ndjson_lines = "\n".join([json.dumps(v, ensure_ascii=False) for v in vectors])
    up_headers = {
        "Authorization": f"Bearer {API_TOKEN}",
        "Content-Type": "application/x-ndjson"
    }

    upsert_res = client.post(VECTORIZE_UPSERT_URL, headers=up_headers, content=ndjson_lines.encode("utf-8"))
    print("Vectorize Upsert Response:", upsert_res.status_code, upsert_res.text)
