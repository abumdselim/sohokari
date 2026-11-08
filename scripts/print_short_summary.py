import json

with open('data/processed/citizen_services.json', 'r', encoding='utf-8') as f:
    services = json.load(f)

categories = {}
for s in services:
    cat = s.get('category', 'অনির্দিষ্ট')
    if cat not in categories:
        categories[cat] = []
    categories[cat].append(s.get('title_bn'))

print(f"Total categories: {len(categories)}")
for i, (cat, titles) in enumerate(sorted(categories.items()), 1):
    print(f"{i:2d}. {cat} ({len(titles)} টি): {', '.join([t[:25] for t in titles[:3]])}{'...' if len(titles) > 3 else ''}")
