import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

type CartDrawerProps = {
    setPage: (page: string) => void;
    isOpen: boolean;
    onClose: () => void;
};

const CartDrawer = ({ setPage, isOpen, onClose }: CartDrawerProps) => {
    const { cart, removeFromCart, updateQuantity, subtotal } = useCart();

    const handleCheckout = () => {
        onClose();
        setPage('checkout');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100]"
                    />

                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-[#faf8f5] shadow-2xl z-[110] flex flex-col"
                    >
                        <div className="p-6 border-b border-[#e8e4de] flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <ShoppingBag size={20} className="text-[#c5a059]" />
                                <h2 className="text-xl font-serif text-[#2c2c2c] tracking-tight">O Seu Carrinho</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-[#f0ebe1] rounded-full transition-colors text-[#9a9a9a]"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                                    <ShoppingBag size={48} className="mb-4 stroke-[1px]" />
                                    <p className="font-serif italic text-lg text-[#666]">O seu carrinho está vazio</p>
                                    <button
                                        onClick={onClose}
                                        className="mt-6 text-[10px] uppercase tracking-[0.3em] text-[#c5a059] border-b border-[#c5a059] pb-1"
                                    >
                                        Continuar a comprar
                                    </button>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="flex gap-4 group">
                                        <div className="w-20 h-24 bg-white rounded-lg overflow-hidden border border-[#f4efe8] shrink-0 shadow-sm">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 flex flex-col py-1">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="text-sm font-medium text-[#2c2c2c] leading-tight line-clamp-1">
                                                    {item.name}
                                                </h3>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-gray-400 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                            <p className="text-[10px] uppercase tracking-widest text-[#9a9a9a] mb-auto">
                                                {item.category}
                                            </p>
                                            <div className="flex items-center justify-between mt-4">
                                                <div className="flex items-center border border-[#e8e4de] rounded-full px-2 py-1 bg-white scale-90 -translate-x-2">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 hover:text-[#c5a059] transition-colors"
                                                    >
                                                        <Minus size={12} />
                                                    </button>
                                                    <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 hover:text-[#c5a059] transition-colors"
                                                    >
                                                        <Plus size={12} />
                                                    </button>
                                                </div>
                                                <span className="font-serif text-[#c5a059] text-sm">
                                                    € {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="p-8 bg-white border-t border-[#e8e4de] space-y-6 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs uppercase tracking-widest text-[#9a9a9a]">
                                        <span>Subtotal</span>
                                        <span>€ {subtotal.toFixed(2).replace('.', ',')}</span>
                                    </div>
                                    <div className="flex justify-between text-lg font-serif text-[#2c2c2c] pt-2">
                                        <span>Total</span>
                                        <span className="text-[#c5a059]">€ {subtotal.toFixed(2).replace('.', ',')}</span>
                                    </div>
                                    <p className="text-[10px] text-[#b5b5b5] italic text-center pt-2">
                                        Taxas de envio calculadas no próximo passo
                                    </p>
                                </div>
                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-[#2c2c2c] text-white py-4 rounded-full text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-[#404040] transition-all duration-500 shadow-xl shadow-black/10 active:scale-[0.98]"
                                >
                                    Finalizar Encomenda
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;