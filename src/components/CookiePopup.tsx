import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

const CookiePopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('filipa-cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1200);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('filipa-cookie-consent', 'true');
        setIsVisible(false);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    return createPortal(
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.35 }}
                    style={{
                        position: 'fixed',
                        bottom: '24px',
                        right: '24px',
                        left: 'auto',
                        top: 'auto',
                        width: '420px',
                        zIndex: 99999,
                    }}
                >
                    <div
                        style={{
                            background: 'rgba(255,255,255,0.96)',
                            border: '1px solid #eee6da',
                            borderRadius: '24px',
                            boxShadow: '0 20px 60px -20px rgba(0,0,0,0.25)',
                            padding: '24px',
                            position: 'relative',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        <button
                            onClick={handleClose}
                            aria-label="Fechar"
                            style={{
                                position: 'absolute',
                                top: '16px',
                                right: '16px',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                color: '#777',
                            }}
                        >
                            <X size={18} strokeWidth={1.5} />
                        </button>

                        <p
                            style={{
                                fontSize: '11px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.28em',
                                fontWeight: 500,
                                color: '#d9b99b',
                                marginBottom: '12px',
                            }}
                        >
                            Cookies
                        </p>

                        <p
                            style={{
                                fontSize: '14px',
                                color: '#666',
                                lineHeight: 1.7,
                                marginBottom: '20px',
                                paddingRight: '24px',
                            }}
                        >
                            Utilizamos cookies para melhorar a sua experiência no catálogo e tornar a navegação mais fluida e personalizada.
                        </p>

                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            <button
                                onClick={handleClose}
                                style={{
                                    padding: '12px 20px',
                                    borderRadius: '999px',
                                    border: '1px solid #e8e4de',
                                    background: '#fff',
                                    color: '#555',
                                    fontSize: '10px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.22em',
                                    cursor: 'pointer',
                                }}
                            >
                                Agora não
                            </button>

                            <button
                                onClick={handleAccept}
                                style={{
                                    padding: '12px 20px',
                                    borderRadius: '999px',
                                    border: 'none',
                                    background: '#2c2c2c',
                                    color: '#fff',
                                    fontSize: '10px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.22em',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                                }}
                            >
                                Aceitar
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default CookiePopup;