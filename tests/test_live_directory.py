import sys
import httpx

if sys.platform.startswith("win"):
    sys.stdout.reconfigure(encoding="utf-8")

print("--- Test 1: Directory API for Gulshan Police Thana ---")
r = httpx.get("https://kaazai.sohokari.workers.dev/api/directory?category=police_thana&thana=গুলশান", timeout=15)
print("Status:", r.status_code)
data = r.json()
print("Found:", data.get("total"))
if data.get("directory"):
    d = data["directory"][0]
    print(f"{d['organization_name_bn']} -> OC: {d['oc_or_head_number']}, Duty: {d['duty_officer_number']}")

print("\n--- Test 2: Directory API for Electricity (DPDC Dhanmondi) ---")
r = httpx.get("https://kaazai.sohokari.workers.dev/api/directory?category=electricity&q=ধানমন্ডি", timeout=15)
data = r.json()
print("Found:", data.get("total"))
if data.get("directory"):
    d = data["directory"][0]
    print(f"{d['organization_name_bn']} -> Phone: {d['phone_numbers']}, Scope: {d['service_scope']}")

print("\n--- Test 3: Directory API for Telecom Providers ---")
r = httpx.get("https://kaazai.sohokari.workers.dev/api/directory?category=telecom", timeout=15)
data = r.json()
print("Found telecom providers:", data.get("total"))
for t in data.get("directory", []):
    print(f"• {t['organization_name_bn']} -> ShortCode: {t['short_code']}, Phone: {t['phone_numbers']}")

print("\n--- Test 4: Live Edge RAG Query for Uttara West Police Station ---")
r = httpx.post("https://kaazai.sohokari.workers.dev/api/rag", json={"query": "উত্তরা পশ্চিম থানার ওসির নাম্বার কত?"}, timeout=30)
data = r.json()
print("Status:", r.status_code)
print("Source:", data.get("source"))
print("Confidence:", data.get("confidence"))
print("Matched Org:", data.get("matched_service", {}).get("title_bn"))
print("Reply Preview:\n", data.get("reply_bn", "")[:400])

print("\n--- Test 5: Live Edge RAG Query for Titas Gas Leakage Emergency ---")
r = httpx.post("https://kaazai.sohokari.workers.dev/api/rag", json={"query": "গ্যাসের তীব্র গন্ধ পাচ্ছি তিতাস গ্যাস জরুরি কন্ট্রোল রুমের নাম্বার কত?"}, timeout=30)
data = r.json()
print("Status:", r.status_code)
print("Matched Org:", data.get("matched_service", {}).get("title_bn"))
print("Reply Preview:\n", data.get("reply_bn", "")[:400])
