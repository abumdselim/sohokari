import json

with open('data/processed/citizen_services.json', 'r', encoding='utf-8') as f:
    services = json.load(f)

for s in services:
    if s['service_id'] == 'bd-titas-gas-bill-correction-name-change':
        steps = s.get('step_by_step_process', [])
        # Add a 3rd step for physical inspection and corrected bill collection
        if len(steps) == 2:
            steps.append({
                'step_number': 3,
                'title': 'তদন্ত সম্পন্ন ও সংশোধিত বিল/নামজারি অনুমোদন',
                'description': 'তিতাস গ্যাস আঞ্চলিক বিপণন কার্যালয়ের পরিদর্শক সরেজমিন যাচাই ও গ্যাস রাইজার চেক করবেন। অনুমোদন শেষে পরবর্তী মাস থেকে গ্রাহকের নামে সংশোধিত বিল জারি হবে।',
                'action_url': 'https://titasgas.org.bd',
                'tips': 'অনুমোদনের কপিটি সযত্নে সংরক্ষণ করুন যাতে ভবিষ্যতে মালিকানা হস্তান্তরে কাজে লাগে।'
            })
            s['step_by_step_process'] = steps

    if s['service_id'] == 'bd-biwta-river-ghat-passenger-toll-rates':
        docs = s.get('required_documents', [])
        if len(docs) == 1:
            docs.append({
                'name': 'যাত্রীর জাতীয় পরিচয়পত্র (NID) বা পরিচয়পত্র (বয়স্ক/ছাত্র ছাড়ের ক্ষেত্রে)',
                'is_mandatory': False,
                'attestation_required': False,
                'format_type': 'পরিচয়পত্র প্রদর্শন',
                'how_to_obtain': 'নিজস্ব এনআইডি বা স্টুডেন্ট কার্ড'
            })
            docs.append({
                'name': 'টোল জমার অফিশিয়াল ইজারাদার রসিদ কপি (চাঁদাবাজি প্রমাণে)',
                'is_mandatory': True,
                'attestation_required': False,
                'format_type': 'মূল রসিদ',
                'how_to_obtain': 'ঘাট কাউন্টার'
            })
            s['required_documents'] = docs

with open('data/processed/citizen_services.json', 'w', encoding='utf-8') as f:
    json.dump(services, f, ensure_ascii=False, indent=2)

print("Enriched both services successfully.")
