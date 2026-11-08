import subprocess
import json

cmd = "npx wrangler d1 execute sohokari-db --remote --command \"SELECT s.service_id, s.title_bn, s.category, (SELECT COUNT(*) FROM service_fees WHERE service_id = s.service_id) as fee_count, (SELECT COUNT(*) FROM service_documents WHERE service_id = s.service_id) as doc_count, (SELECT COUNT(*) FROM service_steps WHERE service_id = s.service_id) as step_count, s.anti_broker_warning IS NOT NULL AND length(s.anti_broker_warning) > 0 as has_warning FROM services s;\""

res = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8', shell=True)
output = res.stdout

# Extract JSON from output
try:
    start_idx = output.find('[\n  {\n    "results":')
    if start_idx == -1:
        start_idx = output.find('[{')
    json_str = output[start_idx:]
    data = json.loads(json_str)
    rows = data[0]['results']
    
    print(f"Total services in remote D1: {len(rows)}")
    with_fees = [r for r in rows if r['fee_count'] > 0]
    with_docs = [r for r in rows if r['doc_count'] > 0]
    with_steps = [r for r in rows if r['step_count'] > 0]
    with_warning = [r for r in rows if r['has_warning']]
    
    print(f"Services with fees: {len(with_fees)} / {len(rows)}")
    print(f"Services with documents: {len(with_docs)} / {len(rows)}")
    print(f"Services with steps: {len(with_steps)} / {len(rows)}")
    print(f"Services with anti-broker warning: {len(with_warning)} / {len(rows)}")
    
    print("\nServices with 0 fees:")
    for r in rows:
        if r['fee_count'] == 0:
            print(f"  - [{r['service_id']}] {r['title_bn']} ({r['category']})")
            
    print("\nServices with 0 documents:")
    for r in rows:
        if r['doc_count'] == 0:
            print(f"  - [{r['service_id']}] {r['title_bn']}")
            
    print("\nServices with 0 steps:")
    for r in rows:
        if r['step_count'] == 0:
            print(f"  - [{r['service_id']}] {r['title_bn']}")

except Exception as e:
    print("Error parsing wrangler output:", e)
    print("Raw output:", output[:1000])
