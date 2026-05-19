import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Truck, MapPin, CreditCard, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { submitOrder } from '../services/orders';
import { OrderPayload } from '../types/cart';

const inputClass =
    'w-full h-14 md:h-15 rounded-[18px] border border-[#eadde1] bg-white px-5 text-[14px] text-[#2c2c2c] outline-none transition-all duration-300 placeholder:text-[#b8b0b2] focus:border-[#d8a7b1] focus:ring-4 focus:ring-[#d8a7b1]/10';

const CheckoutPage = ({ setPage }: { setPage: (page: string) => void }) => {
    const { cart, subtotal, clearCart } = useCart();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [orderStatus, setOrderStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [deliveryMethod, setDeliveryMethod] = useState<'envio' | 'levantamento'>('envio');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        zip: '',
        city: '',
        notes: '',
    });

    const deliveryFee = deliveryMethod === 'envio' ? 5.0 : 0;
    const total = subtotal + deliveryFee;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const orderPayload: OrderPayload = {
            order_id: `ORD-${Date.now()}`,
            created_at: new Date().toISOString(),
            customer_name: formData.name,
            customer_email: formData.email,
            customer_phone: formData.phone,
            address_line: formData.address,
            postal_code: formData.zip,
            city: formData.city,
            delivery_method: deliveryMethod === 'envio' ? 'Envio Normal' : 'Levantamento Local',
            delivery_fee: deliveryFee,
            subtotal,
            total,
            items_json: JSON.stringify(
                cart.map((item) => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                }))
            ),
            status: 'pending',
            notes: formData.notes,
        };

        const result = await submitOrder(orderPayload);

        setIsSubmitting(false);
        if (result.success) {
            setOrderStatus('success');
            clearCart();
        } else {
            setOrderStatus('error');
        }
    };

    if (orderStatus === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center bg-[#faf8f5]"
            >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle2 size={40} className="text-green-500" />
                </div>
                <h2 className="text-4xl font-serif text-[#2c2c2c] mb-4">Encomenda Confirmada!</h2>
                <p className="text-[#666] max-w-md mb-12 italic">
                    Obrigado pela sua preferência. Receberá um email em breve com os detalhes da sua encomenda.
                </p>
                <button
                    type="button"
                    onClick={() => setPage('home')}
                    className="bg-[#2c2c2c] text-white px-12 py-4 rounded-full text-[10px] uppercase tracking-[0.3em] hover:bg-[#3b3335] transition-colors"
                >
                    Voltar ao Início
                </button>
            </motion.div>
        );
    }

    return (
        <section className="min-h-screen pt-32 md:pt-40 pb-24 bg-[#faf8f5]">
            <div className="max-w-[1180px] mx-auto px-5 md:px-10">
                <button
                    type="button"
                    onClick={() => setPage('home')}
                    className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-[#9a9a9a] hover:text-[#d8a7b1] transition-all duration-300 mb-8 md:mb-10 group"
                >
                    <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Voltar à loja</span>
                </button>

                <div className="text-center mb-10 md:mb-14">
                    <span className="block text-[#d8a7b1] uppercase tracking-[0.5em] text-[10px] mb-4">
                        Checkout
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif text-[#2c2c2c]">
                        Finalizar Pedido
                    </h1>
                </div>

                <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-10 items-start">
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white border border-[#eadde1] rounded-[32px] p-6 md:p-10 shadow-[0_18px_60px_-40px_rgba(0,0,0,0.35)] space-y-10"
                    >
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-8 h-8 rounded-full bg-[#f7e8ec] flex items-center justify-center text-[#d8a7b1] text-xs font-bold">
                                    1
                                </div>
                                <h3 className="text-[11px] uppercase tracking-[0.38em] text-[#d8a7b1] font-semibold">
                                    Dados de envio
                                </h3>
                            </div>

                            <div className="grid gap-4">
                                <input required type="text" name="name" placeholder="Nome Completo *" value={formData.name} onChange={handleInputChange} className={inputClass} />
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input required type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleInputChange} className={inputClass} />
                                    <input type="tel" name="phone" placeholder="Telemóvel (opcional)" value={formData.phone} onChange={handleInputChange} className={inputClass} />
                                </div>
                                <input required type="text" name="address" placeholder="Morada Completa *" value={formData.address} onChange={handleInputChange} className={inputClass} />
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input required type="text" name="zip" placeholder="Código Postal *" value={formData.zip} onChange={handleInputChange} className={inputClass} />
                                    <input required type="text" name="city" placeholder="Cidade *" value={formData.city} onChange={handleInputChange} className={inputClass} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-8 h-8 rounded-full bg-[#f7e8ec] flex items-center justify-center text-[#d8a7b1] text-xs font-bold">
                                    2
                                </div>
                                <h3 className="text-[11px] uppercase tracking-[0.38em] text-[#d8a7b1] font-semibold">
                                    Método de entrega
                                </h3>
                            </div>

                            <div className="grid gap-4">
                                <button
                                    type="button"
                                    onClick={() => setDeliveryMethod('envio')}
                                    className={`flex items-center gap-4 p-5 rounded-[20px] border transition-all text-left ${
                                        deliveryMethod === 'envio'
                                            ? 'bg-[#fff8f9] border-[#d8a7b1] shadow-sm ring-4 ring-[#d8a7b1]/10'
                                            : 'bg-white border-[#eadde1] hover:border-[#d8a7b1]/60'
                                    }`}
                                >
                                    <Truck size={21} className={deliveryMethod === 'envio' ? 'text-[#d8a7b1]' : 'text-[#9a9a9a]'} />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-[#2c2c2c]">Envio Normal</p>
                                        <p className="text-[10px] tracking-wider text-[#9a9a9a] mt-1">2-4 dias úteis</p>
                                    </div>
                                    <span className="text-sm font-serif text-[#2c2c2c]">€ 5,00</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setDeliveryMethod('levantamento')}
                                    className={`flex items-center gap-4 p-5 rounded-[20px] border transition-all text-left ${
                                        deliveryMethod === 'levantamento'
                                            ? 'bg-[#fff8f9] border-[#d8a7b1] shadow-sm ring-4 ring-[#d8a7b1]/10'
                                            : 'bg-white border-[#eadde1] hover:border-[#d8a7b1]/60'
                                    }`}
                                >
                                    <MapPin size={21} className={deliveryMethod === 'levantamento' ? 'text-[#d8a7b1]' : 'text-[#9a9a9a]'} />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-[#2c2c2c]">Levantamento Local</p>
                                        <p className="text-[10px] tracking-wider text-[#9a9a9a] mt-1">Em Coimbra</p>
                                    </div>
                                    <span className="text-sm font-serif text-[#2c2c2c]">Grátis</span>
                                </button>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-8 h-8 rounded-full bg-[#f7e8ec] flex items-center justify-center text-[#d8a7b1] text-xs font-bold">
                                    3
                                </div>
                                <h3 className="text-[11px] uppercase tracking-[0.38em] text-[#d8a7b1] font-semibold">
                                    Observações
                                </h3>
                            </div>
                            <textarea
                                name="notes"
                                rows={4}
                                placeholder="Alguma nota especial para a sua encomenda?"
                                value={formData.notes}
                                onChange={handleInputChange}
                                className="w-full rounded-[20px] border border-[#eadde1] bg-white px-5 py-4 text-[14px] text-[#2c2c2c] outline-none transition-all duration-300 placeholder:text-[#b8b0b2] focus:border-[#d8a7b1] focus:ring-4 focus:ring-[#d8a7b1]/10 resize-none"
                            />
                        </div>

                        <AnimatePresence>
                            {orderStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="flex items-center gap-3 text-red-500 bg-red-50 p-4 rounded-xl text-sm"
                                >
                                    <AlertCircle size={18} />
                                    <span>Erro ao submeter pedido. Por favor, tente novamente.</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button
                            disabled={isSubmitting || cart.length === 0}
                            type="submit"
                            className={`w-full min-h-[56px] rounded-full text-[11px] uppercase tracking-[0.36em] font-semibold transition-all duration-500 flex items-center justify-center gap-3 ${
                                isSubmitting || cart.length === 0
                                    ? 'bg-[#e8e4de] text-[#a1a1a1]'
                                    : 'bg-[#2c2c2c] text-white hover:bg-[#3b3335] hover:shadow-xl hover:-translate-y-0.5 active:scale-95'
                            }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 size={18} className="animate-spin text-white" />
                                    <span>A processar...</span>
                                </>
                            ) : (
                                <>
                                    <CreditCard size={18} />
                                    <span>Confirmar Pedido</span>
                                </>
                            )}
                        </button>
                    </motion.form>

                    <aside className="lg:sticky lg:top-32 space-y-6">
                        <div className="bg-white border border-[#eadde1] rounded-[30px] p-6 md:p-8 shadow-[0_18px_60px_-45px_rgba(0,0,0,0.35)]">
                            <h3 className="text-2xl font-serif text-[#2c2c2c] mb-7">Resumo da Encomenda</h3>
                            <div className="max-h-[280px] overflow-y-auto mb-7 space-y-4 pr-1">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex justify-between gap-4 text-sm border-b border-[#f4efe8] pb-4 last:border-b-0">
                                        <div>
                                            <p className="text-[#2c2c2c] font-medium leading-tight">{item.name}</p>
                                            <p className="text-[10px] text-[#9a9a9a] uppercase tracking-widest mt-1">
                                                {item.quantity}x • € {item.price.toFixed(2).replace('.', ',')}
                                            </p>
                                        </div>
                                        <span className="font-serif text-[#2c2c2c] whitespace-nowrap">
                                            € {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-[#f4efe8] pt-6 space-y-4">
                                <div className="flex justify-between text-xs uppercase tracking-widest text-[#9a9a9a]">
                                    <span>Subtotal</span>
                                    <span>€ {subtotal.toFixed(2).replace('.', ',')}</span>
                                </div>
                                <div className="flex justify-between text-xs uppercase tracking-widest text-[#9a9a9a]">
                                    <span>Custo de envio</span>
                                    <span>{deliveryFee === 0 ? 'Grátis' : `€ ${deliveryFee.toFixed(2).replace('.', ',')}`}</span>
                                </div>
                                <div className="flex justify-between items-baseline text-lg font-serif text-[#2c2c2c] pt-5 border-t border-[#f4efe8]">
                                    <span>Total</span>
                                    <span className="text-2xl text-[#d8a7b1]">€ {total.toFixed(2).replace('.', ',')}</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border border-[#eadde1] bg-white/60 rounded-[24px] text-center">
                            <p className="text-[10px] uppercase tracking-[0.22em] text-[#9a9a9a] italic leading-relaxed">
                                Pagamento por referência MB ou MB Way enviado por email após confirmação.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default CheckoutPage;
