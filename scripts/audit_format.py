import json

with open('data/processed/citizen_services.json', 'r', encoding='utf-8') as f:
    services = json.load(f)

lines = []
lines.append(f"Total services: {len(services)}")

categories = {}
for s in services:
    cat = s.get('category', 'Unknown')
    categories[cat] = categories.get(cat, 0) + 1

lines.append("\nCategories breakdown:")
for cat, count in sorted(categories.items(), key=lambda x: -x[1]):
    lines.append(f"  {cat}: {count}")

original_125 = [s for s in services if 'official_fees' in s]
new_18 = [s for s in services if 'fees' in s and 'official_fees' not in s]

lines.append(f"\nOriginal format services (with official_fees): {len(original_125)}")
lines.append(f"New format services (with fees): {len(new_18)}")

for s in original_125[:10]:
    sid = s['service_id']
    t_bn = s.get('title_bn')
    ofees = s.get('official_fees', [])
    rdocs = s.get('required_documents', [])
    steps = s.get('step_by_step_process', [])
    warn = s.get('anti_broker_warning', '')
    lines.append(f"\nService: {sid} ({t_bn})")
    lines.append(f"  official_fees ({len(ofees)}): {ofees[:2]}")
    lines.append(f"  required_documents ({len(rdocs)}): {rdocs[:2]}")
    lines.append(f"  step_by_step_process ({len(steps)}): {steps[:2]}")
    lines.append(f"  warning: {warn}")

with open('scripts/format_audit.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print("Successfully written to scripts/format_audit.txt")
