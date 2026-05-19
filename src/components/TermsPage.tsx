import { motion } from 'framer-motion';

const TermsPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-white"
        >
            <div className="max-w-[700px] mx-auto">
                <h1 className="text-4xl font-serif text-[#2c2c2c] mb-12">Termos e Condições</h1>

                <div className="prose prose-neutral text-[#555] font-light leading-[1.8] space-y-8 text-[14px]">
                    <section>
                        <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#2c2c2c] mb-4">1. Uso do Catálogo</h2>
                        <p>O catálogo digital da Filipa é destinado exclusivamente à visualização de produtos e facilitação de contacto para aquisição. É proibida a utilização das nossas imagens sem autorização prévia.</p>
                    </section>

                    <section>
                        <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#2c2c2c] mb-4">2. Encomendas</h2>
                        <p>A disponibilidade das peças é confirmada no momento do contacto via WhatsApp. Reservamo-nos o direito de alterar stocks e preços sem aviso prévio.</p>
                    </section>

                    <section>
                        <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#2c2c2c] mb-4">3. Cuidados com as Peças</h2>
                        <p>Para garantir a longevidade dos seus acessórios, recomendamos evitar o contacto com água, perfumes ou produtos químicos bruscos.</p>
                    </section>

                    <section>
                        <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#2c2c2c] mb-4">4. Propriedade Intelectual</h2>
                        <p>Todo o design do site, logótipo e fotografias são propriedade exclusiva da Filipa.</p>
                    </section>
                </div>
            </div>
        </motion.div>
    );
};

export default TermsPage;
