import json

with open('data/processed/citizen_services.json', 'r', encoding='utf-8') as f:
    services = json.load(f)

lines = []
for i in [1, 2, 3, 6, 7, 8, 11, 12, 13, 14]:
    s = services[i]
    lines.append(f"\n--- [{i}] {s['service_id']} : {s['title_bn']} ---")
    lines.append(f"category: {s.get('category')} | sub_cat: {s.get('sub_category')}")
    lines.append(f"dept: {s.get('department_agency')}")
    lines.append(f"summary: {s.get('summary')}")
    lines.append(f"portal: {s.get('official_portal_url')}")
    lines.append(f"fees: {len(s.get('fees', []))}")
    for fee in s.get('fees', [])[:2]:
        lines.append(f"  fee: {fee}")
    lines.append(f"docs: {len(s.get('documents', []))}")
    for d in s.get('documents', [])[:2]:
        lines.append(f"  doc: {d}")
    lines.append(f"steps: {len(s.get('steps', []))}")
    for st in s.get('steps', [])[:2]:
        lines.append(f"  step: {st}")

with open('scripts/sample_inspect.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print("Successfully written to scripts/sample_inspect.txt")
