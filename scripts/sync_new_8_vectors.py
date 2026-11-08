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

# Load the newly added 8 services from citizen_services.json
with open('data/processed/citizen_services.json', 'r', encoding='utf-8') as f:
    all_services = json.load(f)

target_ids = [
    'bd-death-registration-bdris-guide',
    'bd-qazi-marriage-registration-fee-scale',
    'bd-ec-new-voter-registration-form-2',
    'bd-national-savings-sanchayapatra-guide',
    'bd-suborno-nagorik-disability-smart-card',
    'bd-automated-echallan-govt-fee-payment',
    'bd-citizenship-character-certificate-up-citycorp',
    'bd-brta-vehicle-fitness-certificate-renewal'
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
    portal = s['official_portal_url']
    warn = s['anti_broker_warning']

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
        step_lines.append(f"{st['step_number']}. {st['title']}: {st['description']}")
    step_text = (
        f"সেবা: {t_bn} আবেদনের সরাসরি ধাপসমূহ:\n"
        + "\n".join(step_lines) + "\n\n"
        f"অফিসিয়াল পোর্টাল: {portal}"
    )
    chunks.append({
        "id": f"{sid}-steps",
        "service_id": sid,
        "chunk_type": "steps",
        "text": step_text,
        "metadata": {"service_id": sid, "title_bn": t_bn, "category": cat, "chunk_type": "steps"}
    })

print(f"Total chunks generated: {len(chunks)}")

# Generate embeddings in batches of 8
all_records = []
with httpx.Client(timeout=45) as client:
    batch_size = 8
    for i in range(0, len(chunks), batch_size):
        batch = chunks[i:i + batch_size]
        texts = [c["text"] for c in batch]
        print(f"Generating embeddings for batch {i // batch_size + 1} ({len(batch)} chunks)...")
        res = client.post(AI_URL, headers=headers, json={"text": texts})
        if res.status_code != 200:
            print("Error generating embeddings:", res.status_code, res.text)
            continue
        data = res.json()
        vectors = data.get("result", {}).get("data", [])
        if len(vectors) != len(batch):
            print("Vector count mismatch!", len(vectors), len(batch))
            continue
        for chunk, vec in zip(batch, vectors):
            all_records.append({
                "id": chunk["id"],
                "values": vec,
                "metadata": {
                    "service_id": chunk["service_id"],
                    "chunk_type": chunk["chunk_type"],
                    "title_bn": chunk["metadata"]["title_bn"],
                    "preview": chunk["text"][:250].replace("\n", " ")
                }
            })
        time.sleep(0.3)

print(f"Successfully generated embeddings for {len(all_records)} / {len(chunks)} chunks.")

# Upload to Vectorize
if all_records:
    print(f"Upserting {len(all_records)} records to Vectorize '{INDEX_NAME}'...")
    ndjson_payload = "\n".join(json.dumps(r, ensure_ascii=False) for r in all_records)
    upsert_headers = {
        "Authorization": f"Bearer {API_TOKEN}",
        "Content-Type": "application/x-ndjson"
    }
    with httpx.Client(timeout=45) as client:
        res = client.post(VECTORIZE_UPSERT_URL, headers=upsert_headers, content=ndjson_payload.encode('utf-8'))
        print("Upsert response status:", res.status_code)
        print("Upsert response body:", res.text)
