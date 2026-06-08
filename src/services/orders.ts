import { OrderPayload } from '../types/cart';

export const submitOrder = async (
    orderPayload: OrderPayload
): Promise<{ success: boolean; message: string }> => {
    const endpoint = import.meta.env.VITE_ORDERS_ENDPOINT;

    if (!endpoint) {
        const message = 'VITE_ORDERS_ENDPOINT não foi configurado no ficheiro .env.';
        console.error(message);

        return {
            success: false,
            message,
        };
    }

    try {
        console.log('A enviar encomenda para:', endpoint);
        console.log('Dados enviados:', orderPayload);

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify(orderPayload),
        });

        const rawText = await response.text();

        console.log('Status da resposta:', response.status);
        console.log('Resposta bruta do Apps Script:', rawText);

        let result: { ok?: boolean; message?: string } = {};

        try {
            result = JSON.parse(rawText);
        } catch {
            return {
                success: false,
                message: `O Apps Script respondeu, mas não devolveu JSON válido. Resposta recebida: ${rawText}`,
            };
        }

        if (!response.ok) {
            return {
                success: false,
                message:
                    result.message ||
                    `Erro HTTP ${response.status} ao enviar a encomenda.`,
            };
        }

        if (!result.ok) {
            return {
                success: false,
                message:
                    result.message ||
                    'O Apps Script recebeu o pedido, mas recusou guardar a encomenda.',
            };
        }

        return {
            success: true,
            message: result.message || 'Encomenda guardada com sucesso.',
        };
    } catch (error) {
        console.error('Erro completo ao enviar encomenda:', error);

        return {
            success: false,
            message:
                error instanceof Error
                    ? `Erro de ligação: ${error.message}`
                    : 'Erro desconhecido ao enviar a encomenda.',
        };
    }
};