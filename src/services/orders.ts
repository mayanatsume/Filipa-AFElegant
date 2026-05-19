import { OrderPayload } from '../types/cart';

export const submitOrder = async (orderPayload: OrderPayload): Promise<{ success: boolean; message: string }> => {
    const endpoint = import.meta.env.VITE_ORDERS_ENDPOINT;

    if (!endpoint) {
        console.warn('VITE_ORDERS_ENDPOINT is not defined. Proceeding with simulated success.');
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ success: true, message: 'Simulated success (No endpoint configured).' });
            }, 1500);
        });
    }

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderPayload),
        });

        if (!response.ok) {
            throw new Error(`Failed to submit order. Status: ${response.status}`);
        }

        return { success: true, message: 'Order submitted successfully.' };
    } catch (error) {
        console.error('Error submitting order:', error);
        return { success: false, message: 'Failed to submit order. Please try again.' };
    }
};
