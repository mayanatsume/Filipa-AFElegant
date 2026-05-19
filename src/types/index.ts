export type Category =
    | 'Todos'
    | 'Colares'
    | 'Brincos'
    | 'Pulseiras'
    | 'Braceletes'
    | 'Brincos Antialérgicos'
    | 'Produtos Infantis'
    | 'Conjuntos';

export interface Product {
    id: string;
    name: string;
    category: Category;
    price: number;
    image: string;
    description?: string;
    isNew?: boolean;
    isBestSeller?: boolean;
}

export interface BrandInfo {
    name: string;
    tagline: string;
    about: string;
    contact: {
        whatsapp: string;
        instagram: string;
        email: string;
    };
}
