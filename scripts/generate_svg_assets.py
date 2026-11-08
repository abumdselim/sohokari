import base64

with open('public/assets/kaazai-logo.png', 'rb') as f:
    logo_b64 = base64.b64encode(f.read()).decode('utf-8')

with open('public/assets/kaazai-icon.png', 'rb') as f:
    icon_b64 = base64.b64encode(f.read()).decode('utf-8')

svg_logo = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 908 205" width="908" height="205" fill="none">
  <image href="data:image/png;base64,{logo_b64}" width="908" height="205" />
</svg>'''

svg_icon = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 226 204" width="226" height="204" fill="none">
  <image href="data:image/png;base64,{icon_b64}" width="226" height="204" />
</svg>'''

with open('public/assets/kaaz-logo-header.svg', 'w', encoding='utf-8') as f:
    f.write(svg_logo)

with open('public/assets/kaaz-sidebar-logo.svg', 'w', encoding='utf-8') as f:
    f.write(svg_logo)

with open('public/assets/icon-black.svg', 'w', encoding='utf-8') as f:
    f.write(svg_icon)

with open('public/assets/icon-teal.svg', 'w', encoding='utf-8') as f:
    f.write(svg_icon)

print('SVG assets written successfully!')
