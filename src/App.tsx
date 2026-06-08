import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Menu, X, MessageCircle, ShoppingBag } from 'lucide-react';
import { products, brandInfo } from './data/products';
import { Product, Category } from './types';

// Local images
import heroImg from './assets/images/hero2.jpg';
import editorialImg from './assets/images/hero1.jpg';
import colarImg from './assets/images/hero4.jpg';
import brincoImg from './assets/images/slide2.jpg';
import presilhaImg from './assets/images/slide1.jpg';
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

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const navigate = (page: string) => {
        setPage(page);
        setIsMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const menuItems = [
        { label: 'Início', page: 'home' },
        { label: 'Sobre', page: 'sobre' },
        { label: 'Colares', page: 'Colares' },
        { label: 'Brincos', page: 'Brincos' },
        { label: 'Pulseiras', page: 'Pulseiras' },
        { label: 'Braceletes', page: 'Braceletes' },
        { label: 'Brincos Antialérgicos', page: 'Brincos Antialérgicos' },
        { label: 'Produtos Infantis', page: 'Produtos Infantis' },
        { label: 'Conjuntos', page: 'Conjuntos' },
        { label: 'Carrinho', page: 'cart' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 md:top-8 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMenuOpen
                    ? 'bg-[#faf8f5]/97 backdrop-blur-md py-3 md:py-4 shadow-sm border-b border-[#f0ebe1]'
                    : 'bg-[#faf8f5]/92 md:bg-transparent py-3 md:py-8'
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
                            <span className="text-[17px] md:text-2xl font-serif tracking-[0.14em] md:tracking-[0.18em] text-[#2c2c2c] whitespace-nowrap">
                                AF ELEGANT
                            </span>
                        </a>

                        <button
                            type="button"
                            className="p-2 text-[#2c2c2c] relative flex items-center justify-center transition-colors hover:text-[#d58fa0]"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Abrir menu"
                        >
                            {isMenuOpen ? <X size={26} strokeWidth={1.2} /> : <Menu size={26} strokeWidth={1.2} />}
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="mobile-menu fixed inset-0 z-[9998] bg-[#faf8f5] min-h-screen overflow-y-auto"
                    >
                        <div className="sticky top-0 z-10 bg-[#faf8f5]/98 backdrop-blur-md border-b border-[#f0ebe1] px-5 py-4 flex items-center justify-between">
                            <button
                                type="button"
                                onClick={() => navigate('home')}
                                className="flex items-center gap-3"
                            >
                                <img
                                    src={logoFilipa}
                                    alt="Logo Filipa"
                                    className="w-9 h-9 rounded-full border border-[#e8e4de] bg-white p-[2px]"
                                />
                                <span className="font-serif tracking-[0.16em] text-[#2c2c2c]">AF ELEGANT</span>
                            </button>

                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(false)}
                                className="w-10 h-10 rounded-full border border-[#e8e4de] bg-white flex items-center justify-center text-[#2c2c2c] hover:text-[#d58fa0] transition-colors"
                                aria-label="Fechar menu"
                            >
                                <X size={22} strokeWidth={1.2} />
                            </button>
                        </div>

                        <div className="px-8 pt-10 pb-16 flex flex-col gap-5">
                            {menuItems.map((item) => (
                                <button
                                    key={item.page}
                                    type="button"
                                    onClick={() => navigate(item.page)}
                                    className={`text-left text-[22px] leading-[1.2] font-serif tracking-[0.04em] transition-colors ${item.page === 'cart'
                                        ? 'text-[#d58fa0]'
                                        : 'text-[#2c2c2c] hover:text-[#d58fa0]'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}

                            <button
                                type="button"
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="text-left text-[22px] leading-[1.2] font-serif tracking-[0.04em] text-[#2c2c2c] hover:text-[#d58fa0] transition-colors"
                            >
                                Contacto
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const HeroEscadinha = () => (
    <section id="home" className="hero-section pt-28 pb-24 md:pt-48 md:pb-20 bg-[#faf8f5] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-8 min-h-[auto] lg:min-h-[60vh]">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="w-full lg:w-5/12 text-center lg:text-left z-10 pt-4 md:pt-0"
            >
                <span className="block text-[#d58fa0] uppercase tracking-[0.42em] text-[10px] mb-6 md:mb-8 font-medium">
                    A Nova Coleção
                </span>

                <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 mb-6 md:mb-8">
                    <img
                        src={logoFilipa}
                        alt="Logo Filipa"
                        style={{ width: 42, height: 42, objectFit: 'contain' }}
                        className="rounded-full border border-[#e8e4de] bg-white p-[2px] shrink-0 md:w-[52px] md:h-[52px]"
                    />

                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif leading-[0.9] tracking-tight text-[#2c2c2c]">
                        AF Elegant
                    </h1>
                </div>

                <p className="text-base md:text-xl font-light italic text-[#666] mb-8 md:mb-12 leading-relaxed max-w-md mx-auto lg:mx-0">
                    Design minimalista esculpido em detalhes atemporais.
                </p>

                <div className="flex justify-center lg:justify-start">
                    <button
                        type="button"
                        onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-white border border-[#e8e4de] text-[#d58fa0] px-9 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-[#fff7f8] hover:text-[#2c2c2c] hover:border-[#d58fa0] transition-all duration-500 shadow-sm rounded-full"
                    >
                        Ver Coleção
                    </button>
                </div>
            </motion.div>

            <div className="w-full lg:w-7/12 flex justify-center lg:justify-end overflow-visible pb-4 md:pb-0">
                <div className="hero-image-stack flex flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-start justify-center px-1 pt-2 md:pt-8 max-w-full">
                    <div className="translate-y-0">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                            className="hero-arch-card w-[28vw] max-w-[122px] sm:w-[170px] sm:max-w-none md:w-[210px] lg:w-[240px] aspect-[3/4] bg-white shadow-sm rounded-t-full rounded-b-[18px] md:rounded-b-[22px] overflow-hidden border border-[#f4efe8]"
                        >
                            <img src={heroImg} alt="Hero 1" className="w-full h-full object-cover" />
                        </motion.div>
                    </div>

                    <div className="translate-y-[14px] md:translate-y-[50px] lg:translate-y-[65px]">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                            className="hero-arch-card w-[28vw] max-w-[122px] sm:w-[170px] sm:max-w-none md:w-[210px] lg:w-[240px] aspect-[3/4] bg-white shadow-sm rounded-t-full rounded-b-[18px] md:rounded-b-[22px] overflow-hidden border border-[#f4efe8]"
                        >
                            <img src={editorialImg} alt="Hero 2" className="w-full h-full object-cover" />
                        </motion.div>
                    </div>

                    <div className="translate-y-[28px] md:translate-y-[100px] lg:translate-y-[130px]">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                            className="hero-arch-card w-[28vw] max-w-[122px] sm:w-[170px] sm:max-w-none md:w-[210px] lg:w-[240px] aspect-[3/4] bg-white shadow-sm rounded-t-full rounded-b-[18px] md:rounded-b-[22px] overflow-hidden border border-[#f4efe8]"
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
    category,
    setPage,
}: {
    products: Product[];
    category: Category;
    setPage: (page: string) => void;
}) => {
    const visibleProducts = products.slice(0, 6);

    if (visibleProducts.length === 0) {
        return (
            <div className="w-full bg-white rounded-2xl border border-[#e8e4de]/60 p-12 md:p-20 flex flex-col items-center justify-center text-center shadow-sm">
                <p className="text-2xl font-serif text-[#a1a1a1] italic mb-4">
                    Coleção em atualização...
                </p>
                <p className="text-[10px] text-[#b5b5b5] uppercase tracking-[0.3em]">
                    Novidades a chegar em breve
                </p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="home-products-grid">
                {visibleProducts.map((product, index) => (
                    <div
                        key={product.id}
                        className={`home-product-card ${index >= 2 ? 'home-product-extra' : ''}`}
                    >
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>

            <div className="w-full flex justify-center md:hidden mt-5">
                <button
                    type="button"
                    onClick={() => setPage(category)}
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-[#d58fa0]/40 bg-white px-6 py-3 text-[10px] uppercase tracking-[0.32em] text-[#d58fa0] shadow-sm"
                >
                    Ver mais <span className="text-sm">→</span>
                </button>
            </div>
        </div>
    );
};

const FeaturedBanner = () => {
    const images = [editorialImg, colarImg, brincoImg, presilhaImg];
    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImg((prev) => (prev + 1) % images.length);
        }, 3500);

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section className="featured-showcase w-full bg-[#faf8f5] pt-16 pb-14 md:pt-20 md:pb-20">
            <div className="max-w-[1180px] mx-auto px-5 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.75 }}
                    className="text-center mb-6 md:mb-8"
                >
                    <span className="block text-[#d58fa0] uppercase tracking-[0.5em] text-[10px] mb-4 font-bold">
                        Em Destaque
                    </span>

                    <h2 className="text-3xl md:text-5xl font-serif leading-[1.12] text-[#2c2c2c] max-w-[760px] mx-auto">
                        Peças delicadas para todos os dias.
                    </h2>

                    <p className="text-[#666] text-sm md:text-base font-light leading-[1.8] mt-4 max-w-[580px] mx-auto">
                        Uma seleção editorial com acessórios minimalistas, femininos e fáceis de combinar.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.05 }}
                    className="featured-card relative overflow-hidden rounded-[28px] md:rounded-[34px] border border-[#f0e5e8] shadow-[0_18px_55px_-35px_rgba(0,0,0,0.35)] h-[260px] md:h-[360px] max-w-[980px] mx-auto bg-[#f8f0f2]"
                >
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImg}
                            src={images[currentImg]}
                            initial={{ opacity: 0, scale: 1.04 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </AnimatePresence>

                    <div className="absolute inset-0 bg-gradient-to-t from-white/35 via-white/5 to-transparent" />

                    <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => setCurrentImg(index)}
                                aria-label={`Ver destaque ${index + 1}`}
                                className={`w-2.5 h-2.5 rounded-full transition-all shadow-sm ${index === currentImg ? 'bg-[#d58fa0] scale-125' : 'bg-white/85 border border-[#e7c7ce]'}`}
                            />
                        ))}
                    </div>
                </motion.div>

                <div className="mt-7 flex justify-center">
                    <button
                        type="button"
                        onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                        className="rounded-full bg-white border border-[#e7c7ce] text-[#d58fa0] px-7 py-3 text-[10px] uppercase tracking-[0.3em] hover:bg-[#fff7f8] hover:text-[#2c2c2c] transition-colors shadow-sm"
                    >
                        Ver coleção
                    </button>
                </div>
            </div>
        </section>
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
        <section id="produtos" className="pb-20 md:pb-32 bg-[#faf8f5]">
            <FeaturedBanner />
            <div className="w-full max-w-[1250px] mx-auto flex flex-col items-center pt-12 md:pt-16">
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

                <div className="w-full flex flex-col gap-16 md:gap-28 px-5 md:px-12">
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
                                <div className="flex items-center justify-between border-b border-[#e8e4de] pb-5 mb-8 md:mb-10 gap-4">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#2c2c2c] leading-none">
                                        {sectionCategory}
                                    </h3>

                                    <button
                                        type="button"
                                        onClick={() => setPage(sectionCategory)}
                                        className="shrink-0 inline-flex items-center gap-2 rounded-full border border-[#d58fa0]/35 bg-white px-4 md:px-5 py-2.5 text-[9px] lg:text-[10px] uppercase tracking-[0.28em] text-[#d58fa0] hover:text-[#2c2c2c] hover:border-[#2c2c2c]/20 transition-colors shadow-sm"
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
        <section className="cart-page pt-36 md:pt-44 pb-24 bg-[#faf8f5] min-h-screen">
            <div className="max-w-[1050px] mx-auto px-5 md:px-12">
                <div className="text-center mb-12">
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
                    <div className="grid lg:grid-cols-[1fr_330px] gap-8">
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <div className="cart-item-image">
                                        <img src={item.image} alt={item.name} />
                                    </div>

                                    <div className="cart-item-info">
                                        <div className="cart-item-top">
                                            <div>
                                                <h3 className="cart-item-title">
                                                    {item.name}
                                                </h3>

                                                <p className="cart-item-category">
                                                    {item.category}
                                                </p>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => removeFromCart(item.id)}
                                                className="cart-remove-button"
                                            >
                                                Remover
                                            </button>
                                        </div>

                                        <div className="cart-item-bottom">
                                            <div className="cart-quantity">
                                                <button
                                                    type="button"
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                >
                                                    -
                                                </button>

                                                <span>{item.quantity}</span>

                                                <button
                                                    type="button"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <span className="cart-item-price">
                                                € {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <aside className="cart-summary">
                            <h2 className="font-serif text-2xl text-[#2c2c2c] mb-6">
                                Resumo
                            </h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-sm text-[#666]">
                                    <span className="font-light">Subtotal</span>
                                    <span className="font-medium">
                                        € {subtotal.toFixed(2).replace('.', ',')}
                                    </span>
                                </div>

                                <div className="flex justify-between text-sm text-[#666]">
                                    <span className="font-light">Envio</span>
                                    <span className="italic text-[11px]">
                                        Calculado no checkout
                                    </span>
                                </div>

                                <div className="border-t border-[#e8e4de] pt-6 flex justify-between items-baseline font-serif">
                                    <span className="text-lg text-[#2c2c2c]">
                                        Total
                                    </span>

                                    <span className="text-3xl text-[#d58fa0]">
                                        € {subtotal.toFixed(2).replace('.', ',')}
                                    </span>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => setPage('checkout')}
                                className="w-full bg-[#2c2c2c] text-white py-5 rounded-full text-[11px] uppercase tracking-[0.35em] font-bold hover:bg-[#404040] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500"
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