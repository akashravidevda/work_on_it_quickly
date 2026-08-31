import os
from PIL import Image

brain_dir = r'C:\Users\july2\.gemini\antigravity-ide\brain\a5543089-8fb3-4a05-9ed8-aa09276eae79'
out_dir = r'assets/generated-products'
os.makedirs(out_dir, exist_ok=True)

mapping = {
    'really-cr-r35-s-hero-desktop.webp': 'really_reaper_hero_1787729662572.jpg',
    'really-cr-r35-s-hero-mobile.webp': 'really_reaper_mobile_1787729684290.jpg',
    'really-cr-r35-s-card.webp': 'really_reaper_mobile_1787729684290.jpg',
    'really-cr-r35-s-detail.webp': 'really_reaper_hero_1787729662572.jpg',
    'really-cr-r35-s-use-case.webp': 'reaper_field_usecase_1787729852755.jpg',
    
    'stihl-fs3001-hero-desktop.webp': 'hero_stihl_orchard_1787729491520.jpg',
    'stihl-fs3001-hero-mobile.webp': 'stihl_fs3001_studio_1787729712133.jpg',
    'stihl-fs3001-card.webp': 'stihl_fs3001_studio_1787729712133.jpg',
    'stihl-fs3001-detail.webp': 'stihl_fs3001_studio_1787729712133.jpg',
    
    'stihl-fs230-card.webp': 'stihl_fs230_studio_1787729737889.jpg',
    'stihl-fs230-detail.webp': 'stihl_fs230_studio_1787729737889.jpg',
    
    'stihl-fs120-card.webp': 'stihl_fs3001_studio_1787729712133.jpg',
    'stihl-fs120-detail.webp': 'stihl_fs3001_studio_1787729712133.jpg',
    
    'stihl-fs250-card.webp': 'stihl_fs250_studio_1787729762824.jpg',
    'stihl-fs250-detail.webp': 'stihl_fs250_studio_1787729762824.jpg',
    'stihl-fs250-use-case.webp': 'hero_stihl_orchard_1787729491520.jpg',
    
    'elemax-generator-card.webp': 'elemax_generator_studio_1787729791937.jpg',
    'elemax-generator-detail.webp': 'elemax_generator_studio_1787729791937.jpg',
    
    'lighton-generator-card.webp': 'portable_generator_studio_1787729820973.jpg',
    'lighton-generator-detail.webp': 'portable_generator_studio_1787729820973.jpg',
    
    'pelican-generator-card.webp': 'portable_generator_studio_1787729820973.jpg',
    'pelican-generator-detail.webp': 'portable_generator_studio_1787729820973.jpg'
}

count = 0
for out_name, src_name in mapping.items():
    src_path = os.path.join(brain_dir, src_name)
    dst_path = os.path.join(out_dir, out_name)
    if os.path.exists(src_path):
        with Image.open(src_path) as img:
            img.save(dst_path, 'WEBP', quality=88)
            print(f'Exported: {out_name}')
            count += 1
    else:
        print(f'Missing source: {src_name}')

print(f'Successfully exported {count} WebP assets into {out_dir}')
