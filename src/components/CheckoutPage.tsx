import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft,
    Truck,
    MapPin,
    CreditCard,
    CheckCircle2,
    AlertCircle,
    Loader2,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { submitOrder } from '../services/orders';
import { OrderPayload } from '../types/cart';

const inputClass =
    'w-full min-h-[54px] rounded-[16px] border border-[#eadde1] bg-white px-4 py-3 text-[14px] text-[#2c2c2c] outline-none transition-all duration-300 placeholder:text-[#b8b0b2] focus:border-[#d58fa0] focus:ring-4 focus:ring-[#d58fa0]/10';

const labelClass =
    'block mb-2 text-[10px] uppercase tracking-[0.22em] text-[#a58f94] font-medium';

const CheckoutPage = ({ setPage }: { setPage: (page: string) => void }) => {
    const { cart, subtotal, clearCart } = useCart();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
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

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
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
            delivery_method:
                deliveryMethod === 'envio' ? 'Envio Normal' : 'Levantamento Local',
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
            setErrorMessage('');
            clearCart();
        } else {
            setOrderStatus('error');
            setErrorMessage(result.message);
        }
    };

    if (orderStatus === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center bg-[#faf8f5]"
            >
                <div className="w-20 h-20 bg-[#fff2f5] rounded-full flex items-center justify-center mb-8">
                    <CheckCircle2 size={40} className="text-[#d58fa0]" />
                </div>

                <span className="block text-[#d58fa0] uppercase tracking-[0.42em] text-[10px] mb-4">
                    Encomenda recebida
                </span>

                <h2 className="text-4xl md:text-5xl font-serif text-[#2c2c2c] mb-4">
                    Encomenda Confirmada
                </h2>

                <p className="text-[#666] max-w-md mb-12 italic leading-relaxed">
                    Obrigado pela sua preferência. Receberá um email em breve com os detalhes
                    da sua encomenda.
                </p>

                <button
                    type="button"
                    onClick={() => setPage('home')}
                    className="bg-[#d58fa0] text-white px-12 py-4 rounded-full text-[10px] uppercase tracking-[0.28em] font-semibold hover:bg-[#c97f91] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                >
                    Voltar ao início
                </button>
            </motion.div>
        );
    }

    return (
        <section className="min-h-screen pt-28 md:pt-40 pb-24 bg-[#faf8f5]">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-5 md:px-10">
                <button
                    type="button"
                    onClick={() => setPage('home')}
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-[#9a9a9a] hover:text-[#d58fa0] transition-all duration-300 mb-7 md:mb-10 group"
                >
                    <ChevronLeft
                        size={16}
                        className="group-hover:-translate-x-1 transition-transform"
                    />
                    <span>Voltar à loja</span>
                </button>

                <div className="text-center mb-9 md:mb-14">
                    <span className="block text-[#d58fa0] uppercase tracking-[0.5em] text-[10px] mb-4">
                        Checkout
                    </span>

                    <h1 className="text-4xl md:text-6xl font-serif text-[#2c2c2c]">
                        Finalizar Pedido
                    </h1>

                    <p className="mt-4 text-sm md:text-base text-[#7a7072] font-light">
                        Preencha os seus dados para concluir a encomenda.
                    </p>
                </div>

                <div className="grid lg:grid-cols-[1fr_360px] gap-7 lg:gap-10 items-start">
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                        className="space-y-6"
                    >
                        <section className="bg-white border border-[#eadde1] rounded-[28px] p-5 sm:p-6 md:p-8 shadow-[0_18px_60px_-45px_rgba(0,0,0,0.35)]">
                            <div className="mb-6 pl-4">
                                <h2 className="font-serif text-[19px] md:text-[21px] uppercase tracking-[0.14em] text-[#d58fa0] font-bold">
                                    Dados de Envio
                                </h2>
                            </div>

                            <div className="grid gap-4">
                                <div>
                                    <label htmlFor="checkout-name" className={labelClass}>
                                        Nome completo *
                                    </label>
                                    <input
                                        id="checkout-name"
                                        required
                                        type="text"
                                        name="name"
                                        placeholder="Ex.: Maria Silva"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={inputClass}
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="checkout-email" className={labelClass}>
                                            Email *
                                        </label>
                                        <input
                                            id="checkout-email"
                                            required
                                            type="email"
                                            name="email"
                                            placeholder="nome@email.pt"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={inputClass}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="checkout-phone" className={labelClass}>
                                            Telemóvel
                                        </label>
                                        <input
                                            id="checkout-phone"
                                            type="tel"
                                            name="phone"
                                            placeholder="+351 912 345 678"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={inputClass}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="checkout-address" className={labelClass}>
                                        Morada completa *
                                    </label>
                                    <input
                                        id="checkout-address"
                                        required
                                        type="text"
                                        name="address"
                                        placeholder="Rua, número, andar"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className={inputClass}
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="checkout-zip" className={labelClass}>
                                            Código postal *
                                        </label>
                                        <input
                                            id="checkout-zip"
                                            required
                                            type="text"
                                            name="zip"
                                            placeholder="0000-000"
                                            value={formData.zip}
                                            onChange={handleInputChange}
                                            className={inputClass}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="checkout-city" className={labelClass}>
                                            Cidade *
                                        </label>
                                        <input
                                            id="checkout-city"
                                            required
                                            type="text"
                                            name="city"
                                            placeholder="Cidade"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            className={inputClass}
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-white border border-[#eadde1] rounded-[28px] p-5 sm:p-6 md:p-8 shadow-[0_18px_60px_-45px_rgba(0,0,0,0.35)]">

                            <div className="mb-6 pl-4">
                                <h2 className="font-serif text-[19px] md:text-[21px] uppercase tracking-[0.14em] text-[#d58fa0] font-bold">
                                    Método de entrega
                                </h2>
                            </div>

                            <div className="grid gap-3">
                                <button
                                    type="button"
                                    onClick={() => setDeliveryMethod('envio')}
                                    className={`flex items-center gap-4 p-4 md:p-5 rounded-[18px] border transition-all text-left ${deliveryMethod === 'envio'
                                        ? 'bg-[#fff8f9] border-[#d58fa0] shadow-sm ring-4 ring-[#d58fa0]/10'
                                        : 'bg-white border-[#eadde1] hover:border-[#d58fa0]/60'
                                        }`}
                                >
                                    <Truck
                                        size={21}
                                        className={
                                            deliveryMethod === 'envio'
                                                ? 'text-[#d58fa0]'
                                                : 'text-[#9a9a9a]'
                                        }
                                    />

                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-[#2c2c2c]">
                                            Envio normal
                                        </p>
                                        <p className="text-[10px] tracking-wider text-[#9a9a9a] mt-1">
                                            Entrega estimada em 2–4 dias úteis
                                        </p>
                                    </div>

                                    <span className="text-base font-serif text-[#2c2c2c]">
                                        € 5,00
                                    </span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setDeliveryMethod('levantamento')}
                                    className={`flex items-center gap-4 p-4 md:p-5 rounded-[18px] border transition-all text-left ${deliveryMethod === 'levantamento'
                                        ? 'bg-[#fff8f9] border-[#d58fa0] shadow-sm ring-4 ring-[#d58fa0]/10'
                                        : 'bg-white border-[#eadde1] hover:border-[#d58fa0]/60'
                                        }`}
                                >
                                    <MapPin
                                        size={21}
                                        className={
                                            deliveryMethod === 'levantamento'
                                                ? 'text-[#d58fa0]'
                                                : 'text-[#9a9a9a]'
                                        }
                                    />

                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-[#2c2c2c]">
                                            Levantamento local
                                        </p>
                                        <p className="text-[10px] tracking-wider text-[#9a9a9a] mt-1">
                                            Recolha em Coimbra
                                        </p>
                                    </div>

                                    <span className="text-base font-serif text-[#2c2c2c]">
                                        Grátis
                                    </span>
                                </button>
                            </div>
                        </section>

                        <section className="bg-white border border-[#eadde1] rounded-[28px] p-5 sm:p-6 md:p-8 shadow-[0_18px_60px_-45px_rgba(0,0,0,0.35)]">
                            <div className="mb-6 pl-4">
                                <h2 className="font-serif text-[19px] md:text-[21px] uppercase tracking-[0.14em] text-[#d58fa0] font-bold">
                                    Observações
                                </h2>
                            </div>

                            <textarea
                                name="notes"
                                rows={4}
                                placeholder="Alguma nota especial para a sua encomenda?"
                                value={formData.notes}
                                onChange={handleInputChange}
                                className="w-full rounded-[18px] border border-[#eadde1] bg-white px-4 py-4 text-[14px] text-[#2c2c2c] outline-none transition-all duration-300 placeholder:text-[#b8b0b2] focus:border-[#d58fa0] focus:ring-4 focus:ring-[#d58fa0]/10 resize-none"
                            />
                        </section>

                        <AnimatePresence>
                            {orderStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="flex items-center gap-3 text-red-500 bg-red-50 p-4 rounded-xl text-sm"
                                >
                                    <AlertCircle size={18} />
                                    <span>
                                        {errorMessage || 'Erro ao submeter pedido. Por favor, tente novamente.'}
                                    </span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button
                            disabled={isSubmitting || cart.length === 0}
                            type="submit"
                            className={`w-full min-h-[54px] rounded-full text-[10px] md:text-[11px] uppercase tracking-[0.28em] font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${isSubmitting || cart.length === 0
                                ? 'bg-[#e8e4de] text-[#a1a1a1]'
                                : 'bg-[#d58fa0] text-white hover:bg-[#c97f91] hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.99]'
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
                                    <span>Confirmar pedido</span>
                                </>
                            )}
                        </button>
                    </motion.form>

                    <aside className="lg:sticky lg:top-32 space-y-5">
                        <div className="bg-white border border-[#eadde1] rounded-[28px] p-5 sm:p-6 md:p-7 shadow-[0_18px_60px_-45px_rgba(0,0,0,0.35)]">
                            <h2 className="text-2xl font-serif text-[#2c2c2c] mb-6">
                                Resumo da Encomenda
                            </h2>

                            <div className="max-h-[280px] overflow-y-auto mb-6 space-y-4 pr-1">
                                {cart.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex justify-between gap-4 text-sm border-b border-[#f4efe8] pb-4 last:border-b-0"
                                    >
                                        <div>
                                            <p className="text-[#2c2c2c] font-medium leading-tight">
                                                {item.name}
                                            </p>

                                            <p className="text-[10px] text-[#9a9a9a] uppercase tracking-widest mt-1">
                                                {item.quantity}x • €{' '}
                                                {item.price.toFixed(2).replace('.', ',')}
                                            </p>
                                        </div>

                                        <span className="font-serif text-[#2c2c2c] whitespace-nowrap">
                                            €{' '}
                                            {(item.price * item.quantity)
                                                .toFixed(2)
                                                .replace('.', ',')}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-[#f4efe8] pt-5 space-y-4">
                                <div className="flex justify-between text-xs uppercase tracking-widest text-[#9a9a9a]">
                                    <span>Subtotal</span>
                                    <span>
                                        € {subtotal.toFixed(2).replace('.', ',')}
                                    </span>
                                </div>

                                <div className="flex justify-between text-xs uppercase tracking-widest text-[#9a9a9a]">
                                    <span>Custo de envio</span>
                                    <span>
                                        {deliveryFee === 0
                                            ? 'Grátis'
                                            : `€ ${deliveryFee
                                                .toFixed(2)
                                                .replace('.', ',')}`}
                                    </span>
                                </div>

                                <div className="flex justify-between items-baseline pt-5 border-t border-[#f4efe8] font-serif text-[#2c2c2c]">
                                    <span className="text-lg">Total</span>
                                    <span className="text-2xl text-[#d58fa0]">
                                        € {total.toFixed(2).replace('.', ',')}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="p-5 border border-[#eadde1] bg-white/70 rounded-[22px] text-center">
                            <p className="text-[10px] uppercase tracking-[0.18em] text-[#9a9a9a] italic leading-relaxed">
                                Pagamento por referência MB ou MB Way enviado por email após
                                confirmação.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default CheckoutPage;
