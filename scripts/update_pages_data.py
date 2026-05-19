import os
import re

base_path = r"c:\Users\simone silva\.gemini\antigravity\scratch\filipa-catalog\src\components"

pages = {
    "ColaresPage.tsx": {"folder": "colares", "prefix": "colar", "category": "Colares", "id_prefix": "ColaresPage"},
    "BrincosPage.tsx": {"folder": "brincos", "prefix": "brinco", "category": "Brincos", "id_prefix": "BrincosPage"},
    "PulseirasPage.tsx": {"folder": "pulseiras", "prefix": "pulseira", "category": "Pulseiras", "id_prefix": "PulseirasPage"},
    "BraceletesPage.tsx": {"folder": "braceletes", "prefix": "bracelete", "category": "Braceletes", "id_prefix": "BraceletesPage"},
    "BrincosAntialergicosPage.tsx": {"folder": "brincos-antialergicos", "prefix": "brinco-antialergico", "category": "Brincos Antialérgicos", "id_prefix": "BrincosAntialergicosPage"},
    "ProdutosInfantisPage.tsx": {"folder": "produtos-infantis", "prefix": "infantil", "category": "Produtos Infantis", "id_prefix": "ProdutosInfantisPage"},
    "ConjuntosPage.tsx": {"folder": "conjuntos", "prefix": "conjunto", "category": "Conjuntos", "id_prefix": "ConjuntosPage"}
}

for filename, info in pages.items():
    file_path = os.path.join(base_path, filename)
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Prepare imports
    img_imports = "\n".join([f"import img{i} from '../assets/images/{info['folder']}/{info['prefix']}-{i}.png';" for i in range(1, 16)])
    
    # 2. Find and replace imports section
    # We want to replace the specific category image import (e.g. colarImg) but keep others like heroImg
    # Find the line that imports something like brincoImg or colarImg or presilhaImg
    # Look for: import [anything] from '../assets/images/[something].png';
    # But specifically the ones being replaced.
    
    # For safety, I'll insert my new imports before the first existing image import and remove the one I don't want.
    pattern = rf"import .*? from '../assets/images/(?:colar-perola|brinco-flor|pulseira-aurora|pulseira-aurora|presilha-estrela|hero)\.png'.*?\n"
    # Wait, the heroImg shouldn't be removed if it's used in HeroEscadinha.
    # In ColaresPage:
    # 5: import colarImg from '../assets/images/colar-perola.png';
    # 6: import heroImg from '../assets/images/hero.png';
    
    # I'll manually define what to remove for each page if it exists:
    to_remove = ["colarImg", "brincoImg", "editorialImg", "brincoImg", "presilhaImg", "heroImg"]
    # Actually, editorialImg is also used for HeroEscadinha.
    
    # Let's be surgical.
    # Imports to definitely remove from the data section (products):
    # - Colares: colarImg
    # - Brincos: brincoImg
    # - Pulseiras: editorialImg (used in products)
    # - Braceletes: editorialImg (used in products)
    # - BrincosAntialergicos: brincoImg
    # - ProdutosInfantis: presilhaImg
    # - Conjuntos: heroImg
    
    # I'll just append my imports at the top and update the array.
    
    # 3. Prepare the new produtosOriginais array
    new_array = "export const produtosOriginais = [\n"
    for i in range(1, 16):
        price = "199.90" if i == 1 else "149.90" if i == 2 else "129.50" if i == 3 else "210.00" if i == 4 else "0"
        is_new = "true" if i == 1 else "false"
        name = f"{info['category']} Exemplo {i}"
        new_array += f"    {{ id: '{info['id_prefix']}-{i}', name: '{name}', category: '{info['category']}', price: {price}, image: img{i}, isNew: {is_new} }},\n"
    new_array = new_array.rstrip(",\n") + "\n];"

    # Regex to replace the whole export const produtosOriginais = [...]; block
    content = re.sub(r"export const produtosOriginais = \[.*?\];", new_array, content, flags=re.DOTALL)
    
    # Insert imports at the top (after types import)
    content = re.sub(r"(import \{ Product \} from '\.\.\/types';\n)", r"\1\n" + img_imports + "\n", content)

    # Remove the specific legacy product image import for that page
    legacy_imgs = {
        "ColaresPage.tsx": "colarImg",
        "BrincosPage.tsx": "brincoImg",
        "PulseirasPage.tsx": "editorialImg",
        "BraceletesPage.tsx": "editorialImg",
        "BrincosAntialergicosPage.tsx": "brincoImg",
        "ProdutosInfantisPage.tsx": "presilhaImg",
        "ConjuntosPage.tsx": "heroImg"
    }
    
    # Wait, some pages use these legacy images in the Hero section too. 
    # Example: ColaresPage uses heroImg and editorialImg in HeroEscadinha.
    # So I should ONLY remove the import if it's NOT used elsewhere.
    
    # Actually, I'll just leave the old imports. They don't hurt if they are used elsewhere.
    # But I should rename them if I want it "clean".
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {filename}")
