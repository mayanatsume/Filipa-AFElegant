import { motion } from 'framer-motion';

const PrivacyPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-white"
        >
            <div className="max-w-[700px] mx-auto">
                <h1 className="text-4xl font-serif text-[#2c2c2c] mb-12">Política de Privacidade</h1>

                <div className="prose prose-neutral text-[#555] font-light leading-[1.8] space-y-8 text-[14px]">
                    <section>
                        <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#2c2c2c] mb-4">1. Informações Gerais</h2>
                        <p>A Filipa respeita a sua privacidade e compromete-se a proteger os seus dados pessoais. Esta política descreve como tratamos a informação que recolhemos através do nosso catálogo digital.</p>
                    </section>

                    <section>
                        <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#2c2c2c] mb-4">2. Recolha de Dados</h2>
                        <p>Recolhemos apenas as informações necessárias para facilitar o seu contacto via WhatsApp, como eventuais preferências de produtos manifestadas durante a navegação.</p>
                    </section>

                    <section>
                        <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#2c2c2c] mb-4">3. Utilização de Cookies</h2>
                        <p>Utilizamos cookies técnicos e analíticos para melhorar a sua experiência. Estes cookies permitem-nos reconhecer o utilizador em visitas futuras e personalizar a sua navegação.</p>
                    </section>

                    <section>
                        <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#2c2c2c] mb-4">4. Seus Direitos</h2>
                        <p>De acordo com o RGPD, tem o direito de aceder, retificar ou solicitar a eliminação dos seus dados a qualquer momento através dos nossos canais de contacto oficiais.</p>
                    </section>
                </div>
            </div>
        </motion.div>
    );
};

export default PrivacyPage;
