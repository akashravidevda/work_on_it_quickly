import zipfile
import os
import sys

def make_deployment_zip(output_zip_name):
    # Files and folders to include
    include_files = [
        'index.html',
        'style.css',
        'script.js',
        'admin.html',
        'admin.css',
        'admin.js',
        'README.md',
        'vercel.json',
        '_redirects'
    ]
    include_dirs = ['assets']

    with zipfile.ZipFile(output_zip_name, 'w', zipfile.ZIP_DEFLATED) as zipf:
        # Add root files
        for fname in include_files:
            if os.path.exists(fname):
                zipf.write(fname, arcname=fname)
                print(f"Added file: {fname}")
            else:
                print(f"Warning: {fname} not found!")

        # Add asset directories recursively
        for dname in include_dirs:
            if os.path.exists(dname):
                for root, dirs, files in os.walk(dname):
                    for file in files:
                        full_path = os.path.join(root, file)
                        # Avoid any temp or git files
                        if '.git' in full_path or '__pycache__' in full_path:
                            continue
                        rel_path = os.path.relpath(full_path, '.')
                        zipf.write(full_path, arcname=rel_path)
                        print(f"Added asset: {rel_path}")

    zip_size_mb = os.path.getsize(output_zip_name) / (1024 * 1024)
    print(f"\nSuccessfully created {output_zip_name} ({zip_size_mb:.2f} MB)")

if __name__ == '__main__':
    make_deployment_zip('vijayashri_agro_mart_deploy.zip')
