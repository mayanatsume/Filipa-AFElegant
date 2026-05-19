import { motion } from 'framer-motion';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }: { product: Product }) => {
    const { addToCart } = useCart();

    return (
        <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            className="group w-full max-w-[190px] mx-auto bg-white rounded-[22px] border border-[#f4efe8] overflow-hidden shadow-[0_10px_28px_-24px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_40px_-26px_rgba(0,0,0,0.45)] hover:-translate-y-1 transition-all duration-500"
        >
            <button
                type="button"
                onClick={() => addToCart(product)}
                className="block w-full text-left"
                aria-label={`Adicionar ${product.name} ao carrinho`}
            >
                <div className="w-full aspect-[4/5] bg-[#faf8f5] overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                    />
                </div>

                <div className="text-center px-3 pt-3 pb-3">
                    <h3 className="text-[12px] md:text-[13px] font-serif text-[#2c2c2c] leading-snug min-h-[34px] flex items-center justify-center group-hover:text-[#d8a7b1] transition-colors">
                        {product.name}
                    </h3>
                    <p className="text-[14px] font-serif text-[#d8a7b1] mt-1 mb-3">
                        € {product.price.toFixed(2).replace('.', ',')}
                    </p>
                    <span className="inline-flex w-full items-center justify-center rounded-full border border-[#eadde1] py-2 text-[9px] uppercase tracking-[0.28em] text-[#2c2c2c] group-hover:bg-[#d8a7b1] group-hover:border-[#d8a7b1] group-hover:text-white transition-all duration-300">
                        Adicionar
                    </span>
                </div>
            </button>
        </motion.article>
    );
};

export default ProductCard;
