import fs from 'fs';
import path from 'path';

const basePath = 'c:/Users/simone silva/.gemini/antigravity/scratch/filipa-catalog/src/components';

const pages = [
    { name: 'ColaresPage', title: 'Colares', defaultImg: 'colarImg' },
    { name: 'BrincosPage', title: 'Brincos', defaultImg: 'brincoImg' },
    { name: 'PulseirasPage', title: 'Pulseiras', defaultImg: 'editorialImg' },
    { name: 'BraceletesPage', title: 'Braceletes', defaultImg: 'editorialImg' },
    { name: 'BrincosAntialergicosPage', title: 'Brincos Antialérgicos', defaultImg: 'brincoImg' },
    { name: 'ProdutosInfantisPage', title: 'Produtos Infantis', defaultImg: 'presilhaImg' },
    { name: 'ConjuntosPage', title: 'Conjuntos', defaultImg: 'heroImg' }
];

const imageImports = {
    'colarImg': `import colarImg from '../assets/images/colar-perola.png';`,
    'brincoImg': `import brincoImg from '../assets/images/brinco-flor.png';`,
    'editorialImg': `import editorialImg from '../assets/images/pulseira-aurora.png';`,
    'presilhaImg': `import presilhaImg from '../assets/images/presilha-estrela.png';`,
    'heroImg': `import heroImg from '../assets/images/hero.png';`
};

pages.forEach((page, idx) => {
    const template = `import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { Product } from '../types';

${imageImports[page.defaultImg]}

// Estrutura com 15 espaços para produtos desta categoria
export const produtosOriginais = [
    { id: '${page.name}-1', name: '${page.title} Exemplo 1', category: '${page.title}', price: 199.90, image: ${page.defaultImg}, isNew: true },
    { id: '${page.name}-2', name: '${page.title} Exemplo 2', category: '${page.title}', price: 149.90, image: ${page.defaultImg}, isNew: false },
    { id: '${page.name}-3', name: '${page.title} Exemplo 3', category: '${page.title}', price: 129.90, image: ${page.defaultImg}, isNew: false },
    { id: '${page.name}-4', name: '${page.title} Exemplo 4', category: '${page.title}', price: 210.00, image: ${page.defaultImg}, isNew: false },
    { id: '${page.name}-5', name: '${page.title} Exemplo 5', category: '${page.title}', price: 89.90, image: ${page.defaultImg}, isNew: false },
    { id: '${page.name}-6', name: '${page.title} Exemplo 6', category: '${page.title}', price: 250.00, image: ${page.defaultImg}, isNew: false },
    { id: '${page.name}-7', name: '${page.title} Exemplo 7', category: '${page.title}', price: 99.90, image: ${page.defaultImg}, isNew: false },
    { id: '${page.name}-8', name: '${page.title} Exemplo 8', category: '${page.title}', price: 0, image: ${page.defaultImg}, isNew: false },
    { id: '${page.name}-9', name: '${page.title} Exemplo 9', category: '${page.title}', price: 0, image: ${page.defaultImg}, isNew: false },
    { id: '${page.name}-10', name: '${page.title} Exemplo 10', category: '${page.title}', price: 0, image: ${page.defaultImg}, isNew: false },
    { id: '${page.name}-11', name: '${page.title} Exemplo 11', category: '${page.title}', price: 0, image: ${page.defaultImg}, isNew: false },
    { id: '${page.name}-12', name: '${page.title} Exemplo 12', category: '${page.title}', price: 0, image: ${page.defaultImg}, isNew: false },
    { id: '${page.name}-13', name: '${page.title} Exemplo 13', category: '${page.title}', price: 0, image: ${page.defaultImg}, isNew: false },
    { id: '${page.name}-14', name: '${page.title} Exemplo 14', category: '${page.title}', price: 0, image: ${page.defaultImg}, isNew: false },
    { id: '${page.name}-15', name: '${page.title} Exemplo 15', category: '${page.title}', price: 0, image: ${page.defaultImg}, isNew: false }
];

const ${page.name} = () => {
    return (
        <section className="py-24 md:py-32 bg-[#faf8f5] min-h-screen">
            <div className="w-full max-w-[1250px] mx-auto flex flex-col items-center px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="block text-[#c5a059] uppercase tracking-[0.4em] text-[10px] mb-4">
                        Coleção Exclusiva
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#2c2c2c]">${page.title}</h2>
                </motion.div>

                <div className="w-full flex flex-wrap justify-center gap-4 md:gap-6">
                    {produtosOriginais.map((product) => (
                        <div key={product.id} className="w-[200px] md:w-[220px]">
                            <ProductCard product={product as Product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ${page.name};
`;
    fs.writeFileSync(path.join(basePath, `${page.name}.tsx`), template, 'utf-8');
});

console.log('Successfully generated 7 pages!');
