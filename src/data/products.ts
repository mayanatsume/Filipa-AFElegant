import { Product, Category } from '../types';

// COLARES
import colar1 from '../assets/images/colares/colar-1.png';
import colar2 from '../assets/images/colares/colar-2.png';
import colar3 from '../assets/images/colares/colar-3.png';
import colar4 from '../assets/images/colares/colar-4.png';
import colar5 from '../assets/images/colares/colar-5.png';
import colar6 from '../assets/images/colares/colar-6.png';
import colar7 from '../assets/images/colares/colar-7.png';

// BRINCOS
import brinco1 from '../assets/images/brincos/brinco-1.png';
import brinco2 from '../assets/images/brincos/brinco-2.png';
import brinco3 from '../assets/images/brincos/brinco-3.png';
import brinco4 from '../assets/images/brincos/brinco-4.png';
import brinco5 from '../assets/images/brincos/brinco-5.png';
import brinco6 from '../assets/images/brincos/brinco-6.png';

// PULSEIRAS
import pulseira1 from '../assets/images/pulseiras/pulseira-1.png';
import pulseira2 from '../assets/images/pulseiras/pulseira-2.png';
import pulseira3 from '../assets/images/pulseiras/pulseira-3.png';
import pulseira4 from '../assets/images/pulseiras/pulseira-4.png';
import pulseira5 from '../assets/images/pulseiras/pulseira-5.png';
import pulseira6 from '../assets/images/pulseiras/pulseira-6.png';

// BRACELETES
import bracelete1 from '../assets/images/braceletes/bracelete-1.png';
import bracelete2 from '../assets/images/braceletes/bracelete-2.png';
import bracelete3 from '../assets/images/braceletes/bracelete-3.png';
import bracelete4 from '../assets/images/braceletes/bracelete-4.png';
import bracelete5 from '../assets/images/braceletes/bracelete-5.png';
import bracelete6 from '../assets/images/braceletes/bracelete-6.png';

// BRINCOS ANTIALÉRGICOS
import h1 from '../assets/images/brincos-antialergicos/brinco-antialergico-1.png';
import h2 from '../assets/images/brincos-antialergicos/brinco-antialergico-2.png';
import h3 from '../assets/images/brincos-antialergicos/brinco-antialergico-3.png';
import h4 from '../assets/images/brincos-antialergicos/brinco-antialergico-4.png';
import h5 from '../assets/images/brincos-antialergicos/brinco-antialergico-5.png';
import h6 from '../assets/images/brincos-antialergicos/brinco-antialergico-6.png';

// PRODUTOS INFANTIS
import i1 from '../assets/images/produtos-infantis/infantil-1.png';
import i2 from '../assets/images/produtos-infantis/infantil-2.png';
import i3 from '../assets/images/produtos-infantis/infantil-3.png';
import i4 from '../assets/images/produtos-infantis/infantil-4.png';
import i5 from '../assets/images/produtos-infantis/infantil-5.png';
import i6 from '../assets/images/produtos-infantis/infantil-6.png';

export const categories: Category[] = [
    'Todos',
    'Colares',
    'Brincos',
    'Pulseiras',
    'Braceletes',
    'Brincos Antialérgicos',
    'Produtos Infantis',
    'Conjuntos',
];

// Reusing local images to fill out the grid and prove the 6-cards per row layout without generating new images
export const products: Product[] = [
    // --- COLARES ---
    { id: 'c1', name: 'Colar Luz de Pérola', category: 'Colares', price: 249.90, image: colar1, isNew: true },
    { id: 'c2', name: 'Colar Gotas Douradas', category: 'Colares', price: 189.90, image: colar2, isNew: false },
    { id: 'c3', name: 'Colar Minimalista', category: 'Colares', price: 159.90, image: colar3, isNew: false },
    { id: 'c4', name: 'Gargantilha Clássica', category: 'Colares', price: 210.00, image: colar4, isNew: true },
    { id: 'c5', name: 'Colar Flor de Lótus', category: 'Colares', price: 299.90, image: colar5, isNew: false },
    { id: 'c6', name: 'Colar Duplo Charme', category: 'Colares', price: 199.90, image: colar6, isNew: false },
    { id: 'c7', name: 'Colar Gotas de Cristal', category: 'Colares', price: 320.00, image: colar7, isNew: true },

    // --- BRINCOS ---
    { id: 'b1', name: 'Brinco Flor Dourada', category: 'Brincos', price: 149.90, image: brinco1, isNew: true },
    { id: 'b2', name: 'Argolas Clássicas', category: 'Brincos', price: 129.50, image: brinco2, isNew: false },
    { id: 'b3', name: 'Brinco Pérola Gota', category: 'Brincos', price: 189.00, image: brinco3, isNew: false },
    { id: 'b4', name: 'Brinco Cascata', category: 'Brincos', price: 249.90, image: brinco4, isNew: true },
    { id: 'b5', name: 'Brinco Geométrico', category: 'Brincos', price: 110.00, image: brinco5, isNew: false },
    { id: 'b6', name: 'Mini Argolas Brilho', category: 'Brincos', price: 89.90, image: brinco6, isNew: false },

    // --- PULSEIRAS ---
    { id: 'p1', name: 'Pulseira Aurora', category: 'Pulseiras', price: 199.90, image: pulseira1, isNew: true },
    { id: 'p2', name: 'Pulseira Elo Cartier', category: 'Pulseiras', price: 259.90, image: pulseira2, isNew: false },
    { id: 'p3', name: 'Pulseira Delicada', category: 'Pulseiras', price: 149.90, image: pulseira3, isNew: false },
    { id: 'p4', name: 'Pulseira com Pérolas', category: 'Pulseiras', price: 189.90, image: pulseira4, isNew: false },
    { id: 'p5', name: 'Pulseira Ponto de Luz', category: 'Pulseiras', price: 139.90, image: pulseira5, isNew: true },
    { id: 'p6', name: 'Pulseira Cascata', category: 'Pulseiras', price: 229.90, image: pulseira6, isNew: false },

    // --- BRACELETES ---
    { id: 'br1', name: 'Bracelete Geométrico', category: 'Braceletes', price: 179.90, image: bracelete1, isNew: true },
    { id: 'br2', name: 'Bracelete Ondas', category: 'Braceletes', price: 199.90, image: bracelete2, isNew: false },
    { id: 'br3', name: 'Bracelete Clássico Liso', category: 'Braceletes', price: 149.90, image: bracelete3, isNew: false },
    { id: 'br4', name: 'Bracelete Torcido Ouro', category: 'Braceletes', price: 210.00, image: bracelete4, isNew: true },
    { id: 'br5', name: 'Meia Cana Fina', category: 'Braceletes', price: 139.90, image: bracelete5, isNew: false },
    { id: 'br6', name: 'Bracelete Martelado', category: 'Braceletes', price: 229.90, image: bracelete6, isNew: false },

    // --- BRINCOS ANTIALÉRGICOS ---
    { id: 'ba1', name: 'Ponto de Luz Cirúrgico', category: 'Brincos Antialérgicos', price: 89.90, image: h1, isNew: true },
    { id: 'ba2', name: 'Argolinha Aço Inox', category: 'Brincos Antialérgicos', price: 79.50, image: h2, isNew: false },
    { id: 'ba3', name: 'Brinco Hipo Cristal', category: 'Brincos Antialérgicos', price: 119.00, image: h3, isNew: false },
    { id: 'ba4', name: 'Estrela Antialérgica', category: 'Brincos Antialérgicos', price: 69.90, image: h4, isNew: true },
    { id: 'ba5', name: 'Argola Dupla Hipo', category: 'Brincos Antialérgicos', price: 110.00, image: h5, isNew: false },
    { id: 'ba6', name: 'Coração Minimal Inox', category: 'Brincos Antialérgicos', price: 59.90, image: h6, isNew: false },

    // --- PRODUTOS INFANTIS ---
    { id: 'i1', name: 'Presilha Estrelinha', category: 'Produtos Infantis', price: 49.90, image: i1, isNew: false },
    { id: 'i2', name: 'Brinco Pequena Flor', category: 'Produtos Infantis', price: 89.90, image: i2, isNew: true },
    { id: 'i3', name: 'Pulseira Nome', category: 'Produtos Infantis', price: 119.90, image: i3, isNew: false },
    { id: 'i4', name: 'Colar Anjo', category: 'Produtos Infantis', price: 149.90, image: i4, isNew: false },
    { id: 'i5', name: 'Conjunto Mini Perola', category: 'Produtos Infantis', price: 199.90, image: i5, isNew: true },
    { id: 'i6', name: 'Argola Baby', category: 'Produtos Infantis', price: 69.90, image: i6, isNew: false }
];

export const brandInfo = {
    name: 'Filipa',
    tagline: 'Elegância Minimalista',
    about: 'Fundada pelo amor aos detalhes, a Filipa traz colecções de bijuterias premium pensadas para a mulher moderna.',
    contact: {
        instagram: '@filipa.acessorios',
        phone: '+351 912 345 678',
        email: 'ola@filipaacessorios.pt',
        whatsapp: '351912345678'
    }
};
