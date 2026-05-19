import { Product } from './index';

export interface CartItem extends Product {
    quantity: number;
}

export interface OrderPayload {
    order_id: string;
    created_at: string;
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    address_line: string;
    postal_code: string;
    city: string;
    delivery_method: string;
    delivery_fee: number;
    subtotal: number;
    total: number;
    items_json: string;
    status: string;
    notes: string;
}
