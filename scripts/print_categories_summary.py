import json

with open('data/processed/citizen_services.json', 'r', encoding='utf-8') as f:
    services = json.load(f)

categories = {}
for s in services:
    cat = s.get('category', 'অনির্দিষ্ট')
    if cat not in categories:
        categories[cat] = []
    categories[cat].append(s.get('title_bn'))

for cat, titles in sorted(categories.items()):
    print(f"\n📁 {cat} ({len(titles)} টি):")
    for t in titles:
        print(f"   - {t}")
