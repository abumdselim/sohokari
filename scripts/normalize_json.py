import json

with open('data/processed/citizen_services.json', 'r', encoding='utf-8') as f:
    services = json.load(f)

for s in services:
    fees = s.get('fees') or s.get('official_fees') or []
    docs = s.get('documents') or s.get('required_documents') or []
    steps = s.get('steps') or s.get('step_by_step_process') or []

    # Standardize fee objects
    clean_fees = []
    for f in fees:
        cname = f.get('category_name') or f.get('name') or ''
        amt = f.get('amount_bdt') or 0
        vat = 1 if f.get('vat_included') in [True, 1] else 0
        pm = f.get('payment_method') or 'অনলাইন / ব্যাংক চালান'
        rem = f.get('remarks') or f.get('notes') or f.get('notes_bn') or 'সরকারি চালান'
        clean_fees.append({
            'category_name': cname,
            'amount_bdt': float(amt),
            'vat_included': vat,
            'payment_method': pm,
            'remarks': rem
        })

    # Standardize document objects
    clean_docs = []
    for d in docs:
        dname = d.get('name') or d.get('document_name') or ''
        mand = 1 if d.get('is_mandatory') in [True, 1] else 0
        att = 1 if d.get('attestation_required') in [True, 1] else 0
        fmt = d.get('format_type') or d.get('format_requirement') or 'মূল কপি ও ফটোকপি'
        obtain = d.get('how_to_obtain') or 'প্রাসঙ্গিক সরকারি অফিস বা নিজস্ব সংরক্ষিত নথি'
        clean_docs.append({
            'name': dname,
            'is_mandatory': mand,
            'attestation_required': att,
            'format_type': fmt,
            'how_to_obtain': obtain
        })

    # Standardize step objects
    clean_steps = []
    for st in steps:
        snum = st.get('step_number') or (len(clean_steps) + 1)
        stitle = st.get('title') or st.get('title_bn') or ''
        sdesc = st.get('description') or st.get('instruction_bn') or ''
        aurl = st.get('action_url') or s.get('official_portal_url')
        tips = st.get('tips') or st.get('warning_bn') or 'দালাল এড়িয়ে সরাসরি আবেদন করুন।'
        clean_steps.append({
            'step_number': snum,
            'title': stitle,
            'description': sdesc,
            'action_url': aurl,
            'tips': tips
        })

    s['fees'] = clean_fees
    s['official_fees'] = clean_fees
    s['documents'] = clean_docs
    s['required_documents'] = clean_docs
    s['steps'] = clean_steps
    s['step_by_step_process'] = clean_steps

with open('data/processed/citizen_services.json', 'w', encoding='utf-8') as f:
    json.dump(services, f, ensure_ascii=False, indent=2)

print(f"Successfully normalized all {len(services)} services in citizen_services.json.")
