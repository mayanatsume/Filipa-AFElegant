import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { Product } from '../types';

import img1 from '../assets/images/pulseiras/puls1.jpg';
import img2 from '../assets/images/pulseiras/pulse2.jpg';
import img3 from '../assets/images/pulseiras/pulse3.jpg';
import img4 from '../assets/images/pulseiras/pulse4.jpg';
import img5 from '../assets/images/pulseiras/pulse5.jpg';
import img6 from '../assets/images/pulseiras/pulse6.jpg';
import img7 from '../assets/images/pulseiras/pulse7.jpg';
import img8 from '../assets/images/pulseiras/pulse8.jpg';
import img9 from '../assets/images/pulseiras/pulse9.jpg';
import img10 from '../assets/images/pulseiras/pulse10.jpg';
import img11 from '../assets/images/pulseiras/pulse11.jpg';
import img12 from '../assets/images/pulseiras/pulse12.jpg';
import img13 from '../assets/images/pulseiras/pulse13.jpg';
import img14 from '../assets/images/pulseiras/pulse14.jpg';
import img15 from '../assets/images/pulseiras/pulse15.jpg';

import editorialImg from '../assets/images/hero1.jpg';
import heroImg from '../assets/images/hero2.jpg';
import colarImg from '../assets/images/hero4.jpg';
import logoFilipa from '../assets/images/logo-filipa.png';

// Estrutura com 15 espaços para produtos desta categoria
export const produtosOriginais = [
    { id: 'PulseirasPage-1', name: 'Pulseiras de Pedra', category: 'Pulseiras', price: 7.00, image: img1, isNew: true },
    { id: 'PulseirasPage-2', name: 'Pulseira de Missanga', category: 'Pulseiras', price: 5.00, image: img2, isNew: false },
    { id: 'PulseirasPage-3', name: 'Pulseiras Folha (da cor de preferência)', category: 'Pulseiras', price: 8.00, image: img3, isNew: false },
    { id: 'PulseirasPage-4', name: 'Pulseira de Missanga', category: 'Pulseiras', price: 5.00, image: img4, isNew: false },
    { id: 'PulseirasPage-5', name: 'Pulseiras Casal de Infinito Conjunto ', category: 'Pulseiras', price: 10.00, image: img5, isNew: false },
    { id: 'PulseirasPage-6', name: 'Pulseira ajustável Família', category: 'Pulseiras', price: 8.50, image: img6, isNew: false },
    { id: 'PulseirasPage-7', name: 'Pulseiras Fina Missanga Azul', category: 'Pulseiras', price: 7.00, image: img7, isNew: false },
    { id: 'PulseirasPage-8', name: 'Braceletes Ajustáveis', category: 'Pulseiras', price: 12.00, image: img8, isNew: false },
    { id: 'PulseirasPage-9', name: 'Pulseiras Fina Missanga Pérola e Dourada', category: 'Pulseiras', price: 7.00, image: img9, isNew: false },
    { id: 'PulseirasPage-10', name: 'Pulseiras Fina Missanga Vermelha', category: 'Pulseiras', price: 7.00, image: img10, isNew: false },
    { id: 'PulseirasPage-11', name: 'Pulseira de Missanga', category: 'Pulseiras', price: 5.00, image: img11, isNew: false },
    { id: 'PulseirasPage-12', name: 'Pulseira de Missanga', category: 'Pulseiras', price: 5.00, image: img12, isNew: false },
    { id: 'PulseirasPage-13', name: 'Pulseira de Missanga', category: 'Pulseiras', price: 5.00, image: img13, isNew: false },
    { id: 'PulseirasPage-14', name: 'Pulseira de Missanga', category: 'Pulseiras', price: 5.00, image: img14, isNew: false },
    { id: 'PulseirasPage-15', name: 'Pulseira de Missanga', category: 'Pulseiras', price: 5.00, image: img15, isNew: false }
];

const PulseirasPage = () => {
    return (
        <>
            <section className="pt-32 pb-4 md:pt-48 md:pb-12 bg-[#faf8f5]">
                <div className="max-w-[1400px] mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-8 min-h-[60vh]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="w-full lg:w-5/12 text-center lg:text-left z-10"
                    >
                        <span className="block text-[#d9b99b] uppercase tracking-[0.5em] text-[10px] mb-8 font-medium">
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
                                Pulseiras
                            </h1>
                        </div>

                        <p className="text-lg md:text-xl font-light italic text-[#666] mb-12 leading-relaxed max-w-md mx-auto lg:mx-0">
                            Design minimalista esculpido em detalhes atemporais.
                        </p>

                        <div className="flex justify-center lg:justify-start">
                            <button
                                onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
                                className="bg-white border border-[#e8e4de] text-[#d9b99b] px-10 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-[#fcfaf7] hover:text-[#d9b99b] hover:border-[#d9b99b] transition-all duration-500 shadow-sm rounded-full"
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

            <section className="py-24 md:py-32 bg-[#faf8f5] min-h-screen">
                <div className="w-full max-w-[1250px] mx-auto flex flex-col items-center px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <span className="block text-[#d9b99b] uppercase tracking-[0.4em] text-[10px] mb-4">
                            Coleção Exclusiva
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#2c2c2c]">Pulseiras</h2>
                    </motion.div>

                    <div className="category-products-grid">
                        {produtosOriginais.map((product) => (
                            <div key={product.id} className="category-product-card">
                                <ProductCard product={product as Product} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PulseirasPage;
