import json

with open('data/processed/citizen_services.json', 'r', encoding='utf-8') as f:
    services = json.load(f)

lines = []
for idx in [0, 10, 30, 60, 90, 120, 135]:
    if idx >= len(services): continue
    s = services[idx]
    sid = s['service_id']
    t_bn = s.get('title_bn')
    fees = s.get('fees') or s.get('official_fees')
    docs = s.get('documents') or s.get('required_documents')
    steps = s.get('steps') or s.get('step_by_step_process')
    warn = s.get('anti_broker_warning')
    lines.append('='*60)
    lines.append(f"Index {idx}: {sid} -> {t_bn}")
    lines.append(f"Summary: {s.get('summary')}")
    lines.append(f"Fees count: {len(fees) if fees else 0}")
    if fees:
        for f in fees[:3]:
            lines.append(f"  Fee: {f}")
    lines.append(f"Docs count: {len(docs) if docs else 0}")
    if docs:
        for d in docs[:3]:
            lines.append(f"  Doc: {d}")
    lines.append(f"Steps count: {len(steps) if steps else 0}")
    if steps:
        for st in steps[:3]:
            lines.append(f"  Step: {st}")
    lines.append(f"Warning: {warn}")

with open('scripts/depth_analysis.txt', 'w', encoding='utf-8') as out:
    out.write('\n'.join(lines))

print("Analysis written to scripts/depth_analysis.txt")
