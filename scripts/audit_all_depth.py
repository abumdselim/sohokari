import json

with open('data/processed/citizen_services.json', 'r', encoding='utf-8') as f:
    services = json.load(f)

issues = []
for s in services:
    sid = s['service_id']
    title = s.get('title_bn', '')
    fees = s.get('fees') or s.get('official_fees') or []
    docs = s.get('documents') or s.get('required_documents') or []
    steps = s.get('steps') or s.get('step_by_step_process') or []
    warn = s.get('anti_broker_warning', '')
    summary = s.get('summary', '')

    service_issues = []
    if len(summary) < 40:
        service_issues.append(f"Short summary ({len(summary)} chars)")
    if len(fees) == 0:
        service_issues.append("No fees listed")
    if len(docs) < 2:
        service_issues.append(f"Only {len(docs)} documents")
    if len(steps) < 3:
        service_issues.append(f"Only {len(steps)} steps")
    if len(warn) < 30:
        service_issues.append(f"Short or missing anti-broker warning ({len(warn)} chars)")

    if service_issues:
        issues.append({
            'service_id': sid,
            'title_bn': title,
            'issues': service_issues
        })

with open('scripts/audit_issues.json', 'w', encoding='utf-8') as out:
    json.dump(issues, out, ensure_ascii=False, indent=2)

print(f"Total services: {len(services)}")
print(f"Services with potential issues: {len(issues)}")
