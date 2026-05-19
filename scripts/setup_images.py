import os
import shutil

base_dir = r"c:\Users\simone silva\.gemini\antigravity\scratch\filipa-catalog\src\assets\images"
hero_path = os.path.join(base_dir, "hero.png")

categories = [
    ("colares", "colar"),
    ("brincos", "brinco"),
    ("pulseiras", "pulseira"),
    ("braceletes", "bracelete"),
    ("brincos-antialergicos", "brinco-antialergico"),
    ("produtos-infantis", "infantil"),
    ("conjuntos", "conjunto")
]

for folder, prefix in categories:
    folder_path = os.path.join(base_dir, folder)
    if not os.path.exists(folder_path):
        os.makedirs(folder_path)
    
    for i in range(1, 16):
        dest_filename = f"{prefix}-{i}.png"
        dest_path = os.path.join(folder_path, dest_filename)
        if not os.path.exists(dest_path):
            shutil.copy2(hero_path, dest_path)
            print(f"Created {dest_path}")
