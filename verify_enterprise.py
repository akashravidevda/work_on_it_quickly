import os
import re

with open('index.html', encoding='utf-8') as f:
    html = f.read()

with open('script.js', encoding='utf-8') as f:
    js = f.read()

with open('style.css', encoding='utf-8') as f:
    css = f.read()

# 1. Assets check
assets = set(re.findall(r'assets/[a-zA-Z0-9_\-\.\/]+', html + js + css))
missing = []
for a in assets:
    cleaned = a.rstrip("'\";,)")
    if not os.path.exists(cleaned):
        missing.append(cleaned)
print('Referenced assets count:', len(assets))
print('Missing assets:', missing)

# 2. CSS Check
open_b = css.count('{')
close_b = css.count('}')
print(f'CSS braces: open={open_b}, close={close_b}, balanced={open_b == close_b}')

# 3. HTML IDs check
js_get_ids = set(re.findall(r"getElementById\(['\"]([^'\"]+)['\"]\)", js))
html_ids = set(re.findall(r"id=['\"]([^'\"]+)['\"]", html))
dynamic_ids = {'modalMainImg', 'modalQtyDisplay', 'modalProductTitle', 'legalModalTitle'}
missing_ids = [i for i in js_get_ids if i not in html_ids and i not in dynamic_ids]
print('JS target IDs count:', len(js_get_ids))
print('Missing static IDs in HTML:', missing_ids)

if len(missing) == 0 and open_b == close_b and len(missing_ids) == 0:
    print('>>> ALL ENTERPRISE REDESIGN VERIFICATIONS PASSED SUCCESSFULLY! <<<')
else:
    print('>>> VERIFICATION FAILED! <<<')
