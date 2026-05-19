import { motion } from 'framer-motion';
import { Instagram, ArrowRight } from 'lucide-react';

const AboutPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-white"
        >
            <div className="max-w-[800px] mx-auto">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="block text-[#d9b99b] uppercase tracking-[0.5em] text-[10px] mb-8 font-medium text-center"
                >
                    A Nossa História
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-serif text-[#2c2c2c] mb-16 text-center"
                >
                    Filipa
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="prose prose-neutral max-w-none text-[#555] font-light leading-[2] text-justify space-y-12"
                >
                    <p className="text-lg md:text-xl italic font-serif text-[#2c2c2c] leading-relaxed text-center">
                        "A beleza reside na sutileza."
                    </p>

                    <div className="space-y-6">
                        <p>
                            Nascida da paixão por detalhes que encantam, a <strong>Filipa</strong> é mais do que uma marca de acessórios. É uma celebração da feminilidade em todas as suas formas – desde a delicadeza de uma pérola até à força de um design arrojado.
                        </p>
                        <p>
                            Acreditamos que cada peça conta uma história. É por isso que selecionamos criteriosamente cada item curado no nosso catálogo, focando-nos em materiais que respeitam a sua pele (como a nossa linha antialérgica) e designs que transcendem tendências passageiras.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 py-12 border-y border-[#f0ebe1]/50">
                        <div>
                            <h3 className="font-serif text-2xl text-[#2c2c2c] mb-4">Curadoria Ética</h3>
                            <p className="text-sm">Trabalhamos apenas com peças que reúnem qualidade e durabilidade, garantindo que o seu brilho dure por muitas estações.</p>
                        </div>
                        <div>
                            <h3 className="font-serif text-2xl text-[#2c2c2c] mb-4">Atenção ao Detalhe</h3>
                            <p className="text-sm">Cada pedido é embalado como uma pequena alegria, pronta para ser vivida ou oferecida a quem ama.</p>
                        </div>
                    </div>

                    <div className="pt-12 flex flex-col items-center">
                        <p className="mb-8 text-center">Acompanhe a nossa jornada diária no Instagram.</p>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            className="bg-[#faf8f5] border border-[#f0ebe1] px-12 py-5 rounded-full flex items-center gap-3 hover:bg-[#f4efe8] transition-all group"
                        >
                            <Instagram size={18} className="text-[#d9b99b]" />
                            <span className="text-[10px] uppercase tracking-[0.3em] font-medium">@filipa.acessorios</span>
                            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default AboutPage;
