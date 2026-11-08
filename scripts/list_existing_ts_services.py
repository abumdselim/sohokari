import os
import re

with open('src/data/index.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract all imports
imports = re.findall(r"import\s*\{\s*(\w+)\s*\}\s*from\s*'./services/(\w+)';", content)
print(f"Total existing service imports: {len(imports)}")
for var_name, file_name in imports:
    print(f"  {var_name} -> src/data/services/{file_name}.ts")
