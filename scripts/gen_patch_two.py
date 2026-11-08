import json

with open('data/processed/citizen_services.json', 'r', encoding='utf-8') as f:
    services = json.load(f)

sql_statements = []
for sid in ['bd-titas-gas-bill-correction-name-change', 'bd-biwta-river-ghat-passenger-toll-rates']:
    s = next((x for x in services if x['service_id'] == sid), None)
    if not s: continue

    sql_statements.append(f"DELETE FROM service_documents WHERE service_id = '{sid}';")
    sql_statements.append(f"DELETE FROM service_steps WHERE service_id = '{sid}';")

    for doc in s.get('documents', []):
        dname = doc['name'].replace("'", "''")
        mand = doc.get('is_mandatory', 1)
        att = doc.get('attestation_required', 0)
        fmt = f"'{doc.get('format_type', '').replace("'", "''")}'"
        obtain = f"'{doc.get('how_to_obtain', '').replace("'", "''")}'"
        sql_statements.append(f"INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('{sid}', '{dname}', {mand}, {att}, {fmt}, {obtain});")

    for step in s.get('steps', []):
        snum = step['step_number']
        stitle = step['title'].replace("'", "''")
        sdesc = step['description'].replace("'", "''")
        aurl = f"'{step.get('action_url', '').replace("'", "''")}'" if step.get('action_url') else "NULL"
        tips = f"'{step.get('tips', '').replace("'", "''")}'" if step.get('tips') else "NULL"
        sql_statements.append(f"INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('{sid}', {snum}, '{stitle}', '{sdesc}', {aurl}, {tips});")

with open('scripts/patch_two_d1.sql', 'w', encoding='utf-8') as f:
    f.write('\n'.join(sql_statements))

print(f"Generated {len(sql_statements)} statements in scripts/patch_two_d1.sql")
