import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Menu, X, MessageCircle, ShoppingBag } from 'lucide-react';
import { products, brandInfo } from './data/products';
import { Product, Category } from './types';

// Local images
import heroImg from './assets/images/hero.png';
import editorialImg from './assets/images/pulseira-aurora.png';
import colarImg from './assets/images/colar-perola.png';
import brincoImg from './assets/images/brinco-flor.png';
import presilhaImg from './assets/images/presilha-estrela.png';
import logoFilipa from './assets/images/logo-filipa.png';

// Components
import AboutPage from './components/AboutPage';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';
import CookiePopup from './components/CookiePopup';
import ProductCard from './components/ProductCard';
import ColaresPage from './components/ColaresPage';
import BrincosPage from './components/BrincosPage';
import PulseirasPage from './components/PulseirasPage';
import BraceletesPage from './components/BraceletesPage';
import BrincosAntialergicosPage from './components/BrincosAntialergicosPage';
import ProdutosInfantisPage from './components/ProdutosInfantisPage';
import ConjuntosPage from './components/ConjuntosPage';
import CheckoutPage from './components/CheckoutPage';
import { useCart } from './context/CartContext';

const Navbar = ({ setPage }: { setPage: (page: string) => void }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigate = (page: string) => {
        setPage(page);
        setIsMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <nav
                className={`fixed top-4 md:top-8 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
                    ? 'bg-[#faf8f5]/95 backdrop-blur-md py-4 shadow-sm border-b border-[#f0ebe1]'
                    : 'bg-transparent py-8'
                    }`}
            >
                <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
                    <div className="w-full flex items-center justify-between">
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate('home');
                            }}
                            className="flex items-center gap-3 md:gap-4 hover:opacity-85 transition-opacity"
                        >
                            <img
                                src={logoFilipa}
                                alt="Logo Filipa"
                                style={{ width: 34, height: 34, objectFit: 'contain' }}
                                className="rounded-full border border-[#e8e4de] bg-white p-[2px] shrink-0"
                            />
                            <span className="text-[18px] md:text-2xl font-serif tracking-[0.14em] md:tracking-[0.18em] text-[#2c2c2c] whitespace-nowrap">
                                AF ELEGANT
                            </span>
                        </a>

                        <button
                            type="button"
                            className="p-2 text-[#2c2c2c] relative flex items-center justify-center transition-colors hover:text-[#d58fa0]"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Abrir menu"
                        >
                            <motion.div
                                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                className="flex items-center justify-center"
                            >
                                {isMenuOpen ? (
                                    <X size={26} strokeWidth={1.2} />
                                ) : (
                                    <Menu size={26} strokeWidth={1.2} />
                                )}
                            </motion.div>
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 bg-[#faf8f5] min-h-screen pt-[20px] overflow-y-auto"
                    >
                        <div className="flex flex-col items-start gap-6 pb-12 pl-8 pt-[28px]">
                            <button
                                type="button"
                                onClick={() => navigate('home')}
                                className="text-[15px] leading-[1.35] font-light tracking-[0.08em] text-[#2c2c2c] hover:text-[#d58fa0] transition-colors duration-300 text-left"
                            >
                                Início
                            </button>

                            <button
                                type="button"
                                onClick={() => navigate('sobre')}
                                className="text-[15px] leading-[1.35] font-light tracking-[0.08em] text-[#2c2c2c] hover:text-[#d58fa0] transition-colors duration-300 text-left"
                            >
                                Sobre
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="text-[15px] leading-[1.35] font-light tracking-[0.08em] text-[#2c2c2c] hover:text-[#d58fa0] transition-colors duration-300 text-left"
                            >
                                Contacto
                            </button>

                            <div className="w-10 h-[1px] bg-[#ddd4c7] my-1"></div>

                            <button
                                type="button"
                                onClick={() => navigate('Colares')}
                                className="text-[15px] leading-[1.35] font-light tracking-[0.08em] text-[#2c2c2c] hover:text-[#d58fa0] transition-colors duration-300 text-left"
                            >
                                Colares
                            </button>

                            <button
                                type="button"
                                onClick={() => navigate('Brincos')}
                                className="text-[15px] leading-[1.35] font-light tracking-[0.08em] text-[#2c2c2c] hover:text-[#d58fa0] transition-colors duration-300 text-left"
                            >
                                Brincos
                            </button>

                            <button
                                type="button"
                                onClick={() => navigate('Pulseiras')}
                                className="text-[15px] leading-[1.35] font-light tracking-[0.08em] text-[#2c2c2c] hover:text-[#d58fa0] transition-colors duration-300 text-left"
                            >
                                Pulseiras
                            </button>

                            <button
                                type="button"
                                onClick={() => navigate('Braceletes')}
                                className="text-[15px] leading-[1.35] font-light tracking-[0.08em] text-[#2c2c2c] hover:text-[#d58fa0] transition-colors duration-300 text-left"
                            >
                                Braceletes
                            </button>

                            <button
                                type="button"
                                onClick={() => navigate('Brincos Antialérgicos')}
                                className="text-[15px] leading-[1.35] font-light tracking-[0.08em] text-[#2c2c2c] hover:text-[#d58fa0] transition-colors duration-300 text-left"
                            >
                                Brincos Antialérgicos
                            </button>

                            <button
                                type="button"
                                onClick={() => navigate('Produtos Infantis')}
                                className="text-[15px] leading-[1.35] font-light tracking-[0.08em] text-[#2c2c2c] hover:text-[#d58fa0] transition-colors duration-300 text-left"
                            >
                                Produtos Infantis
                            </button>

                            <button
                                type="button"
                                onClick={() => navigate('Conjuntos')}
                                className="text-[15px] leading-[1.35] font-light tracking-[0.08em] text-[#2c2c2c] hover:text-[#d58fa0] transition-colors duration-300 text-left"
                            >
                                Conjuntos
                            </button>

                            <button
                                type="button"
                                onClick={() => navigate('cart')}
                                className="text-[15px] leading-[1.35] font-light tracking-[0.08em] text-[#d58fa0] hover:text-[#2c2c2c] transition-colors duration-300 text-left"
                            >
                                Carrinho
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const HeroEscadinha = () => (
    <section id="home" className="pt-32 pb-4 md:pt-48 md:pb-12 bg-[#faf8f5]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-8 min-h-[60vh]">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="w-full lg:w-5/12 text-center lg:text-left z-10"
            >
                <span className="block text-[#d58fa0] uppercase tracking-[0.5em] text-[10px] mb-8 font-medium">
                    A Nova Coleção
                </span>

                <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 mb-8">
                    <img
                        src={logoFilipa}
                        alt="Logo Filipa"
                        style={{ width: 42, height: 42, objectFit: 'contain' }}
                        className="rounded-full border border-[#e8e4de] bg-white p-[2px] shrink-0 md:w-[52px] md:h-[52px]"
                    />

                    <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tight text-[#2c2c2c]">
                        AF Elegant
                    </h1>
                </div>

                <p className="text-lg md:text-xl font-light italic text-[#666] mb-12 leading-relaxed max-w-md mx-auto lg:mx-0">
                    Design minimalista esculpido em detalhes atemporais.
                </p>

                <div className="flex justify-center lg:justify-start">
                    <button
                        type="button"
                        onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-white border border-[#e8e4de] text-[#d58fa0] px-10 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-[#fcfaf7] hover:text-[#d58fa0] hover:border-[#d58fa0] transition-all duration-500 shadow-sm rounded-full"
                    >
                        Ver Coleção
                    </button>
                </div>
            </motion.div>

            <div className="w-full lg:w-7/12 flex justify-center lg:justify-end">
                <div className="flex flex-row gap-4 md:gap-6 lg:gap-8 items-start px-2 pt-6 md:pt-8">
                    <div className="translate-y-0">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                            className="w-[170px] sm:w-[190px] md:w-[210px] lg:w-[240px] aspect-[3/4] bg-white shadow-sm rounded-t-full rounded-b-[22px] overflow-hidden border border-[#f4efe8]"
                        >
                            <img src={heroImg} alt="Hero 1" className="w-full h-full object-cover" />
                        </motion.div>
                    </div>

                    <div className="translate-y-[35px] md:translate-y-[50px] lg:translate-y-[65px]">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                            className="w-[170px] sm:w-[190px] md:w-[210px] lg:w-[240px] aspect-[3/4] bg-white shadow-sm rounded-t-full rounded-b-[22px] overflow-hidden border border-[#f4efe8]"
                        >
                            <img src={editorialImg} alt="Hero 2" className="w-full h-full object-cover" />
                        </motion.div>
                    </div>

                    <div className="translate-y-[70px] md:translate-y-[100px] lg:translate-y-[130px]">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                            className="w-[170px] sm:w-[190px] md:w-[210px] lg:w-[240px] aspect-[3/4] bg-white shadow-sm rounded-t-full rounded-b-[22px] overflow-hidden border border-[#f4efe8]"
                        >
                            <img src={colarImg} alt="Hero 3" className="w-full h-full object-cover" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const CategorySlider = ({
    products,
}: {
    products: Product[];
    category: Category;
    setPage: (page: string) => void;
}) => {
    const categoryProducts = products.slice(0, 6);

    if (categoryProducts.length === 0) {
        return (
            <div className="w-full bg-white rounded-2xl border border-[#e8e4de]/60 p-16 md:p-24 flex flex-col items-center justify-center text-center shadow-sm">
                <p className="text-2xl font-serif text-[#a1a1a1] italic mb-4">
                    Coleção em atualização...
                </p>
                <p className="text-[10px] text-[#b5b5b5] uppercase tracking-[0.3em]">
                    Novidades a chegar em breve
                </p>
            </div>
        );
    }

    // Protótipo: se a categoria ainda tiver menos de 6 produtos reais,
    // repetimos os produtos existentes só para manter a grelha desktop 6 por linha.
    // Quando adicionares mais produtos no ficheiro data/products, esta repetição deixa de ser visível.
    const visibleProducts = Array.from(
        { length: 6 },
        (_, index) => categoryProducts[index % categoryProducts.length]
    );

    return (
        <div className="w-full">
            <div className="home-products-grid">
                {visibleProducts.map((product, index) => (
                    <div
                        key={`${product.id}-home-${index}`}
                        className={`home-product-card ${index > 1 ? 'home-product-extra' : ''}`}
                    >
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const FeaturedBanner = () => {
    const dots = [0, 1, 2, 3, 4, 5];

    return (
        <div className="w-full px-6 md:px-12 mb-16">
            <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-[1050px] mx-auto bg-white border border-[#eadfe3] rounded-[28px] shadow-[0_18px_50px_-35px_rgba(0,0,0,0.25)] overflow-hidden"
            >
                <div className="grid md:grid-cols-[1fr_1.2fr_1fr] items-center gap-6 px-6 md:px-10 py-7 md:py-9">
                    <div className="hidden md:flex items-center -space-x-4 justify-start">
                        {[heroImg, colarImg, brincoImg].map((img, index) => (
                            <div
                                key={img}
                                className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm bg-[#faf8f5]"
                                style={{ transform: `translateY(${index % 2 === 0 ? 0 : 8}px)` }}
                            >
                                <img src={img} alt="Destaque" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <span className="block text-[#d58fa0] uppercase tracking-[0.55em] text-[10px] mb-3 font-semibold">
                            Em Destaque
                        </span>
                        <h2 className="text-2xl md:text-4xl font-serif text-[#2c2c2c] leading-tight">
                            Peças delicadas para todos os dias
                        </h2>
                    </div>

                    <div className="flex items-center justify-center md:justify-end gap-2">
                        {dots.map((dot) => (
                            <motion.span
                                key={dot}
                                className="w-2 h-2 rounded-full bg-[#d58fa0]/45"
                                animate={{ opacity: [0.35, 1, 0.35], scale: [1, 1.25, 1] }}
                                transition={{ duration: 1.8, repeat: Infinity, delay: dot * 0.16 }}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const CatalogSection = ({ setPage }: { setPage: (page: string) => void }) => {
    const [activeCategory, setActiveCategory] = useState<Category | 'Todos'>('Todos');

    const explicitCategoriesList: Category[] = [
        'Colares',
        'Brincos',
        'Pulseiras',
        'Braceletes',
        'Brincos Antialérgicos',
        'Produtos Infantis',
        'Conjuntos',
    ];

    const categoryVisuals: Record<string, string> = {
        Todos: heroImg,
        Colares: colarImg,
        Brincos: brincoImg,
        Pulseiras: editorialImg,
        Braceletes: editorialImg,
        'Brincos Antialérgicos': brincoImg,
        'Produtos Infantis': presilhaImg,
        Conjuntos: heroImg,
    };

    const displaySections = activeCategory === 'Todos' ? explicitCategoriesList : [activeCategory];

    return (
        <section id="produtos" className="pb-24 md:pb-32 bg-[#faf8f5]">
            <FeaturedBanner />
            <div className="w-full max-w-[1250px] mx-auto flex flex-col items-center pt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="block text-[#d58fa0] uppercase tracking-[0.5em] text-[10px] mb-4 font-semibold">
                        Catálogo Premium
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#2c2c2c] tracking-tight">
                        As Nossas Coleções
                    </h2>
                </motion.div>

                <div className="w-full flex flex-col items-center mb-20 px-6 md:px-12">
                    <span className="block text-[#d58fa0] uppercase tracking-[0.4em] text-[10px] mb-4">
                        Explorar
                    </span>
                    <h3 className="text-3xl font-serif text-[#2c2c2c] mb-10">
                        Por Categoria
                    </h3>

                    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 max-w-[900px]">
                        {['Todos', ...explicitCategoriesList].map((cat) => (
                            <button
                                type="button"
                                key={cat}
                                onClick={() => (cat === 'Todos' ? setActiveCategory('Todos') : setPage(cat))}
                                className={`group relative h-[70px] md:h-[90px] w-full overflow-hidden rounded-[16px] transition-all duration-500 ease-in-out border ${activeCategory === cat
                                    ? 'border-[#d58fa0] shadow-md scale-[1.02]'
                                    : 'border-[#e8e4de] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md hover:-translate-y-1'
                                    } bg-white`}
                            >
                                <div className="absolute inset-[3px] rounded-[13px] overflow-hidden bg-[#faf8f5]">
                                    <img
                                        src={categoryVisuals[cat] || heroImg}
                                        alt={cat}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                                    />
                                    <div className="absolute inset-0 bg-white/28 group-hover:bg-white/12 transition-colors duration-500" />
                                </div>

                                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                                    <div
                                        className={`w-full flex justify-center ${activeCategory === cat
                                            ? 'text-[#d58fa0]'
                                            : 'text-[#2c2c2c] group-hover:text-[#d58fa0]'
                                            }`}
                                    >
                                        <span className="inline-block px-4 py-2 rounded-full bg-white/92 backdrop-blur-md shadow-md text-[11px] md:text-[13px] uppercase tracking-[0.1em] font-bold leading-tight text-center">
                                            {cat}
                                        </span>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="w-full flex flex-col gap-24 md:gap-32 px-6 md:px-12">
                    {displaySections.map((sectionCategory) => {
                        const sectionProducts = products.filter((p) => p.category === sectionCategory);

                        return (
                            <motion.div
                                key={sectionCategory}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="w-full flex flex-col"
                            >
                                <div className="flex items-end justify-between border-b border-[#e8e4de] pb-6 mb-10">
                                    <h3 className="text-3xl lg:text-4xl font-serif text-[#2c2c2c]">
                                        {sectionCategory}
                                    </h3>

                                    <button
                                        type="button"
                                        onClick={() => setPage(sectionCategory)}
                                        className="text-[9px] lg:text-[10px] uppercase tracking-[0.35em] text-[#d58fa0] hover:text-[#2c2c2c] transition-colors flex items-center gap-2 pb-1"
                                    >
                                        Ver mais <span className="text-xs">→</span>
                                    </button>
                                </div>

                                <CategorySlider
                                    products={sectionProducts}
                                    category={sectionCategory}
                                    setPage={setPage}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const EditorialSecondary = ({ setPage }: { setPage: (page: string) => void }) => {
    const images = [editorialImg, colarImg, brincoImg, presilhaImg];
    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImg((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section id="sobre" className="py-24 md:py-32 bg-white border-y border-[#f0ebe1]/50">
            <div className="max-w-[1100px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative aspect-[4/5] shadow-lg overflow-hidden bg-[#faf8f5] max-w-[420px] mx-auto w-full border border-[#f4efe8] rounded-[30px]"
                >
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImg}
                            src={images[currentImg]}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.2, ease: 'easeInOut' }}
                            className="absolute inset-0 w-full h-full object-cover grayscale-[0.05]"
                        />
                    </AnimatePresence>

                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[30px]" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="flex flex-col justify-center items-center text-center"
                >
                    <span className="block text-[#d58fa0] uppercase tracking-[0.5em] text-[10px] mb-10 font-bold w-full">
                        A Nossa Visão
                    </span>

                    <h2 className="text-3xl md:text-5xl font-serif mb-10 leading-[1.4] text-[#2c2c2c] w-full md:whitespace-nowrap">
                        A beleza reside na sutileza.
                    </h2>

                    <div className="w-12 h-[1px] bg-[#d58fa0]/30 mb-10"></div>

                    <p className="text-[#666] text-sm md:text-base font-light leading-[1.8] mb-12 max-w-md">
                        {brandInfo.about} Não criamos apenas acessórios; criamos memórias e pequenas alegrias para
                        serem vestidas todos os dias.{' '}
                        <button
                            type="button"
                            onClick={() => setPage('sobre')}
                            className="inline text-[#2c2c2c] hover:text-[#d58fa0] transition-colors underline underline-offset-4 decoration-[#d8cdbf] hover:decoration-[#d58fa0]"
                        >
                            Saber mais
                        </button>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const Footer = ({ setPage }: { setPage: (page: string) => void }) => {
    const navigate = (page: string) => {
        setPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contacto" className="pt-24 pb-12 bg-[#faf8f5]">
            <div className="max-w-[1200px] mx-auto px-6 md:px-12">
                <div className="flex flex-col items-center text-center mb-24">
                    <h2 className="text-4xl font-serif mb-6 text-[#2c2c2c] tracking-widest">
                        FILIPA
                    </h2>

                    <p className="text-[#888] font-light italic max-w-sm mb-12">
                        Acessórios exclusivos com design atemporal.
                    </p>

                    <div className="flex items-center border-t border-[#e8e4de]/60 pt-12 text-[#555]">
                        <a
                            href={`https://instagram.com/${brandInfo.contact.instagram.replace('@', '')}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[10px] uppercase tracking-[0.08em] font-medium hover:text-[#d58fa0] transition-colors flex items-center gap-3"
                        >
                            <Instagram size={14} className="shrink-0" />
                            <span>Instagram</span>
                        </a>

                        <span className="mx-6 md:mx-8 text-[#d8cdbf]">•</span>

                        <a
                            href={`https://wa.me/${brandInfo.contact.whatsapp}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[10px] uppercase tracking-[0.08em] font-medium text-[#555] hover:text-[#d58fa0] transition-colors flex items-center gap-3"
                        >
                            <MessageCircle size={14} className="shrink-0" />
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.3em] text-[#a1a1a1] gap-6">
                    <p>&copy; {new Date().getFullYear()} Filipa Acessórios.</p>

                    <div className="flex items-center gap-4 md:gap-6">
                        <button
                            type="button"
                            onClick={() => navigate('privacidade')}
                            className="hover:text-[#2c2c2c] transition-colors uppercase"
                        >
                            Privacidade
                        </button>

                        <span className="text-[#cfc6ba] lowercase">e</span>

                        <button
                            type="button"
                            onClick={() => navigate('termos')}
                            className="hover:text-[#2c2c2c] transition-colors uppercase"
                        >
                            Termos
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const CartPage = ({ setPage }: { setPage: (page: string) => void }) => {
    const { cart, removeFromCart, updateQuantity, subtotal } = useCart();

    return (
        <section className="pt-36 md:pt-44 pb-24 bg-[#faf8f5] min-h-screen">
            <div className="max-w-[1000px] mx-auto px-6 md:px-12">
                <div className="text-center mb-14">
                    <span className="block text-[#d58fa0] uppercase tracking-[0.4em] text-[10px] mb-4">
                        Carrinho
                    </span>

                    <h1 className="text-4xl md:text-5xl font-serif text-[#2c2c2c]">
                        A Sua Encomenda
                    </h1>
                </div>

                {cart.length === 0 ? (
                    <div className="bg-white border border-[#e8e4de] rounded-[28px] p-12 text-center shadow-sm">
                        <ShoppingBag
                            size={46}
                            strokeWidth={1}
                            className="mx-auto mb-6 text-[#d58fa0]"
                        />

                        <p className="font-serif italic text-xl text-[#666] mb-8">
                            O seu carrinho está vazio.
                        </p>

                        <button
                            type="button"
                            onClick={() => setPage('home')}
                            className="bg-[#2c2c2c] text-white px-8 py-4 rounded-full text-[10px] uppercase tracking-[0.3em] hover:bg-[#404040] transition-colors"
                        >
                            Ver coleção
                        </button>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-[1fr_320px] gap-8">
                        <div className="space-y-5">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white border border-[#e8e4de] rounded-[24px] p-4 md:p-6 flex items-center gap-4 md:gap-8 shadow-sm group hover:border-[#d58fa0]/40 transition-all duration-500"
                                >
                                    <div className="w-16 h-20 md:w-20 md:h-24 bg-[#faf8f5] rounded-[16px] overflow-hidden border border-[#f4efe8] shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>

                                    <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="min-w-[150px]">
                                            <h3 className="text-base font-serif text-[#2c2c2c] mb-1">
                                                {item.name}
                                            </h3>
                                            <p className="text-[10px] uppercase tracking-[0.25em] text-[#9a9a9a]">
                                                {item.category}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-6">
                                            <div className="flex items-center border border-[#e8e4de] rounded-full bg-[#faf8f5] p-1">
                                                <button
                                                    type="button"
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="w-8 h-8 flex items-center justify-center hover:text-[#d58fa0] transition-colors"
                                                >
                                                    -
                                                </button>
                                                <span className="w-6 text-center text-xs font-medium">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    type="button"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-8 h-8 flex items-center justify-center hover:text-[#d58fa0] transition-colors"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-[9px] uppercase tracking-[0.2em] text-[#b66] hover:text-red-500 transition-colors border-b border-transparent hover:border-red-500 pb-0.5"
                                            >
                                                Remover
                                            </button>
                                        </div>

                                        <div className="md:text-right min-w-[100px]">
                                            <span className="font-serif text-lg text-[#2c2c2c]">
                                                € {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <aside className="bg-white border border-[#e8e4de] rounded-[28px] p-7 shadow-sm h-fit">
                            <h2 className="font-serif text-2xl text-[#2c2c2c] mb-6">
                                Resumo
                            </h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-sm text-[#666]">
                                    <span className="font-light">Subtotal</span>
                                    <span className="font-medium">€ {subtotal.toFixed(2).replace('.', ',')}</span>
                                </div>

                                <div className="flex justify-between text-sm text-[#666]">
                                    <span className="font-light">Envio</span>
                                    <span className="italic text-[11px]">Calculado no checkout</span>
                                </div>

                                <div className="border-t border-[#e8e4de] pt-6 flex justify-between items-baseline font-serif">
                                    <span className="text-lg text-[#2c2c2c]">Total</span>
                                    <span className="text-3xl text-[#d58fa0]">
                                        € {subtotal.toFixed(2).replace('.', ',')}
                                    </span>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => setPage('checkout')}
                                className="w-full bg-[#2c2c2c] text-white py-5 rounded-full text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-[#404040] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500"
                            >
                                Finalizar Encomenda
                            </button>

                            <button
                                type="button"
                                onClick={() => setPage('home')}
                                className="w-full mt-6 text-[10px] uppercase tracking-[0.3em] text-[#d58fa0] hover:text-[#2c2c2c] transition-colors font-medium"
                            >
                                Continuar a comprar
                            </button>
                        </aside>
                    </div>
                )}
            </div>
        </section>
    );
};

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const { totalItems } = useCart();

    return (
        <>
            <div className="min-h-screen bg-white md:p-8 flex justify-center selection:bg-[#d58fa0]/20 selection:text-black">
                <div className="w-full max-w-[1600px] bg-[#faf8f5] shadow-[0_0_50px_-15px_rgba(0,0,0,0.05)] mx-auto relative overflow-hidden flex flex-col md:border md:border-[#f4efe8]">
                    <Navbar setPage={setCurrentPage} />

                    <main>
                        <AnimatePresence mode="wait">
                            {currentPage === 'home' && (
                                <motion.div key="home">
                                    <HeroEscadinha />
                                    <CatalogSection setPage={setCurrentPage} />
                                    <EditorialSecondary setPage={setCurrentPage} />
                                </motion.div>
                            )}

                            {currentPage === 'sobre' && <AboutPage key="about" />}
                            {currentPage === 'privacidade' && <PrivacyPage key="privacy" />}
                            {currentPage === 'termos' && <TermsPage key="terms" />}

                            {currentPage === 'Colares' && <ColaresPage key="colares" />}
                            {currentPage === 'Brincos' && <BrincosPage key="brincos" />}
                            {currentPage === 'Pulseiras' && <PulseirasPage key="pulseiras" />}
                            {currentPage === 'Braceletes' && <BraceletesPage key="braceletes" />}

                            {currentPage === 'Brincos Antialérgicos' && (
                                <BrincosAntialergicosPage key="brincos-anti" />
                            )}

                            {currentPage === 'Produtos Infantis' && (
                                <ProdutosInfantisPage key="infantis" />
                            )}

                            {currentPage === 'Conjuntos' && <ConjuntosPage key="conjuntos" />}

                            {currentPage === 'cart' && (
                                <CartPage key="cart" setPage={setCurrentPage} />
                            )}

                            {currentPage === 'checkout' && (
                                <CheckoutPage key="checkout" setPage={setCurrentPage} />
                            )}
                        </AnimatePresence>
                    </main>

                    <Footer setPage={setCurrentPage} />
                </div>
            </div>

            <button
                type="button"
                onClick={() => {
                    setCurrentPage('cart');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                aria-label="Abrir carrinho"
                className="fixed w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border border-[#e8e4de] shadow-[0_12px_30px_-12px_rgba(0,0,0,0.22)] flex items-center justify-center text-[#2c2c2c] hover:text-[#d58fa0] transition-all duration-300 cursor-pointer z-[9999]"
                style={{
                    top: '16px',
                    right: '28px',
                    pointerEvents: 'auto',
                }}
            >
                <ShoppingBag size={24} strokeWidth={1.2} />

                {totalItems > 0 && (
                    <span
                        className="absolute bg-[#d58fa0] text-white text-[9px] font-bold min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center border border-white"
                        style={{ top: 8, right: 8 }}
                    >
                        {totalItems}
                    </span>
                )}
            </button>

            <CookiePopup />
        </>
    );
};

export default App;