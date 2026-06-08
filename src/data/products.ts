import { Product, Category } from '../types';

// COLARES
import colar1 from '../assets/images/colares/colar1.jpg';
import colar2 from '../assets/images/colares/colar2.jpg';
import colar3 from '../assets/images/colares/colar3.jpg';
import colar4 from '../assets/images/colares/colar4.jpg';
import colar5 from '../assets/images/colares/colar5.jpg';
import colar6 from '../assets/images/colares/colar6.jpg';
import colar7 from '../assets/images/colares/colar7.jpg';

// BRINCOS
import brinco1 from '../assets/images/brincos/brinco1.jpg';
import brinco2 from '../assets/images/brincos/brinco2.jpg';
import brinco3 from '../assets/images/brincos/brinco3.jpg';
import brinco4 from '../assets/images/brincos/brinco4.jpg';
import brinco5 from '../assets/images/brincos/brinco5.jpg';
import brinco6 from '../assets/images/brincos/brinco6.jpg';

// PULSEIRAS
import pulseira1 from '../assets/images/pulseiras/puls1.jpg';
import pulseira2 from '../assets/images/pulseiras/pulse2.jpg';
import pulseira3 from '../assets/images/pulseiras/pulse3.jpg';
import pulseira4 from '../assets/images/pulseiras/pulse4.jpg';
import pulseira5 from '../assets/images/pulseiras/pulse5.jpg';
import pulseira6 from '../assets/images/pulseiras/pulse6.jpg';

// BRACELETES
import bracelete1 from '../assets/images/braceletes/bracelete-1.png';
import bracelete2 from '../assets/images/braceletes/bracelete-2.png';
import bracelete3 from '../assets/images/braceletes/bracelete-3.png';
import bracelete4 from '../assets/images/braceletes/bracelete-4.png';
import bracelete5 from '../assets/images/braceletes/bracelete-5.png';
import bracelete6 from '../assets/images/braceletes/bracelete-6.png';

// BRINCOS ANTIALÉRGICOS
import h1 from '../assets/images/brincos-antialergicos/antia1.jpg';
import h2 from '../assets/images/brincos-antialergicos/antia2.jpg';
import h3 from '../assets/images/brincos-antialergicos/antia3.jpg';
import h4 from '../assets/images/brincos-antialergicos/antia4.jpg';
import h5 from '../assets/images/brincos-antialergicos/antia5.jpg';
import h6 from '../assets/images/brincos-antialergicos/antia6.jpg';

// PRODUTOS INFANTIS
// Nota: por agora só existem infantil-1.png e infantil-2.png.
// As imagens i3 a i6 usam essas duas temporariamente para o build não falhar.
import i1 from '../assets/images/produtos-infantis/infantil1.jpg';
import i2 from '../assets/images/produtos-infantis/infantil2.jpg';

const i3 = i1;
const i4 = i2;
const i5 = i1;
const i6 = i2;

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

export const products: Product[] = [
    // --- COLARES ---
    {
        id: 'c1',
        name: 'Colar Árvore da Vida',
        category: 'Colares',
        price: 12.00,
        image: colar1,
        isNew: true,
    },
    {
        id: 'c2',
        name: 'Colar Família',
        category: 'Colares',
        price: 13.00,
        image: colar2,
        isNew: false,
    },
    {
        id: 'c3',
        name: 'Colar Estrela',
        category: 'Colares',
        price: 12.00,
        image: colar3,
        isNew: false,
    },
    {
        id: 'c4',
        name: 'Colar Extenso de Coração',
        category: 'Colares',
        price: 7.00,
        image: colar4,
        isNew: true,
    },
    {
        id: 'c5',
        name: 'Colar Flor Banhado em Zircônia',
        category: 'Colares',
        price: 8.00,
        image: colar5,
        isNew: false,
    },
    {
        id: 'c6',
        name: 'Colar Avião',
        category: 'Colares',
        price: 12.00,
        image: colar6,
        isNew: false,
    },
    {
        id: 'c7',
        name: 'Colar Avião',
        category: 'Colares',
        price: 12.00,
        image: colar7,
        isNew: true,
    },

    // --- BRINCOS ---
    {
        id: 'b1',
        name: 'Brinco Rústico com detalhe Pedra Azul',
        category: 'Brincos',
        price: 10.00,
        image: brinco1,
        isNew: true,
    },
    {
        id: 'b2',
        name: 'Brinco Formato Coração',
        category: 'Brincos',
        price: 12.00,
        image: brinco2,
        isNew: false,
    },
    {
        id: 'b3',
        name: 'Brinco Acrílico Verde-Mate',
        category: 'Brincos',
        price: 7.00,
        image: brinco3,
        isNew: false,
    },
    {
        id: 'b4',
        name: 'Brinco Acrílico Verde-Águas',
        category: 'Brincos',
        price: 7.00,
        image: brinco4,
        isNew: true,
    },
    {
        id: 'b5',
        name: 'Brinco Borboleta',
        category: 'Brincos',
        price: 10.00,
        image: brinco5,
        isNew: false,
    },
    {
        id: 'b6',
        name: 'Brinco Acrílico Verde escuro',
        category: 'Brincos',
        price: 7.00,
        image: brinco6,
        isNew: false,
    },

    // --- PULSEIRAS ---
    {
        id: 'p1',
        name: 'Pulseira Aurora',
        category: 'Pulseiras',
        price: 199.90,
        image: pulseira1,
        isNew: true,
    },
    {
        id: 'p2',
        name: 'Pulseira Elo Cartier',
        category: 'Pulseiras',
        price: 259.90,
        image: pulseira2,
        isNew: false,
    },
    {
        id: 'p3',
        name: 'Pulseira Delicada',
        category: 'Pulseiras',
        price: 149.90,
        image: pulseira3,
        isNew: false,
    },
    {
        id: 'p4',
        name: 'Pulseira com Pérolas',
        category: 'Pulseiras',
        price: 189.90,
        image: pulseira4,
        isNew: false,
    },
    {
        id: 'p5',
        name: 'Pulseira Ponto de Luz',
        category: 'Pulseiras',
        price: 139.90,
        image: pulseira5,
        isNew: true,
    },
    {
        id: 'p6',
        name: 'Pulseira Cascata',
        category: 'Pulseiras',
        price: 229.90,
        image: pulseira6,
        isNew: false,
    },

    // --- BRACELETES ---
    {
        id: 'br1',
        name: 'Bracelete Geométrico',
        category: 'Braceletes',
        price: 179.90,
        image: bracelete1,
        isNew: true,
    },
    {
        id: 'br2',
        name: 'Bracelete Ondas',
        category: 'Braceletes',
        price: 199.90,
        image: bracelete2,
        isNew: false,
    },
    {
        id: 'br3',
        name: 'Bracelete Clássico Liso',
        category: 'Braceletes',
        price: 149.90,
        image: bracelete3,
        isNew: false,
    },
    {
        id: 'br4',
        name: 'Bracelete Torcido Ouro',
        category: 'Braceletes',
        price: 210.00,
        image: bracelete4,
        isNew: true,
    },
    {
        id: 'br5',
        name: 'Meia Cana Fina',
        category: 'Braceletes',
        price: 139.90,
        image: bracelete5,
        isNew: false,
    },
    {
        id: 'br6',
        name: 'Bracelete Martelado',
        category: 'Braceletes',
        price: 229.90,
        image: bracelete6,
        isNew: false,
    },

    // --- BRINCOS ANTIALÉRGICOS ---
    {
        id: 'ba1',
        name: 'Brinco Zircônias Detalhe Bolinhas',
        category: 'Brincos Antialérgicos',
        price: 8.00,
        image: h1,
        isNew: true,
    },
    {
        id: 'ba2',
        name: 'Argolas Antialérgicas Formato Olho',
        category: 'Brincos Antialérgicos',
        price: 8.00,
        image: h2,
        isNew: false,
    },
    {
        id: 'ba3',
        name: 'Argolas Prateadas de Zircônia',
        category: 'Brincos Antialérgicos',
        price: 8.00,
        image: h3,
        isNew: false,
    },
    {
        id: 'ba4',
        name: 'Argolas Antialérgicas de Flor',
        category: 'Brincos Antialérgicos',
        price: 8.00,
        image: h4,
        isNew: true,
    },
    {
        id: 'ba5',
        name: 'Brinco Anti-Alérgico de Lagosta',
        category: 'Brincos Antialérgicos',
        price: 8.00,
        image: h5,
        isNew: false,
    },
    {
        id: 'ba6',
        name: 'Argolas de Zircônia',
        category: 'Brincos Antialérgicos',
        price: 8.00,
        image: h6,
        isNew: false,
    },

    // --- PRODUTOS INFANTIS ---
    {
        id: 'i1',
        name: 'Presilha Estrelinha',
        category: 'Produtos Infantis',
        price: 49.90,
        image: i1,
        isNew: false,
    },
    {
        id: 'i2',
        name: 'Brinco Pequena Flor',
        category: 'Produtos Infantis',
        price: 89.90,
        image: i2,
        isNew: true,
    },
    {
        id: 'i3',
        name: 'Pulseira Nome',
        category: 'Produtos Infantis',
        price: 119.90,
        image: i3,
        isNew: false,
    },
    {
        id: 'i4',
        name: 'Colar Anjo',
        category: 'Produtos Infantis',
        price: 149.90,
        image: i4,
        isNew: false,
    },
    {
        id: 'i5',
        name: 'Conjunto Mini Pérola',
        category: 'Produtos Infantis',
        price: 199.90,
        image: i5,
        isNew: true,
    },
    {
        id: 'i6',
        name: 'Argola Baby',
        category: 'Produtos Infantis',
        price: 69.90,
        image: i6,
        isNew: false,
    },

    // --- CONJUNTOS ---
    {
        id: 'cj1',
        name: 'Conjunto Pérola Clássica',
        category: 'Conjuntos',
        price: 299.90,
        image: colar1,
        isNew: true,
    },
    {
        id: 'cj2',
        name: 'Conjunto Luz Dourada',
        category: 'Conjuntos',
        price: 349.90,
        image: colar2,
        isNew: false,
    },
    {
        id: 'cj3',
        name: 'Conjunto Minimal Chic',
        category: 'Conjuntos',
        price: 279.90,
        image: colar3,
        isNew: false,
    },
    {
        id: 'cj4',
        name: 'Conjunto Noiva Delicada',
        category: 'Conjuntos',
        price: 399.90,
        image: colar4,
        isNew: true,
    },
    {
        id: 'cj5',
        name: 'Conjunto Charme Rosé',
        category: 'Conjuntos',
        price: 329.90,
        image: colar5,
        isNew: false,
    },
    {
        id: 'cj6',
        name: 'Conjunto Elegance',
        category: 'Conjuntos',
        price: 459.90,
        image: colar6,
        isNew: false,
    },
];

export const brandInfo = {
    name: 'Filipa',
    tagline: 'Elegância Minimalista',
    about: 'Fundada pelo amor aos detalhes, a Filipa traz colecções de bijuterias premium pensadas para a mulher moderna.',
    contact: {
        instagram: '@filipa.acessorios',
        phone: '+351 912 345 678',
        email: 'ola@filipaacessorios.pt',
        whatsapp: '351912345678',
    },
};