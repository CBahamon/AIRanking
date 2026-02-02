import { useState, useEffect } from 'react';

interface CurrencyState {
    currencyCode: string;
    rate: number;
    loading: boolean;
    error: string | null;
}

const CACHE_KEY = 'currency_data';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export function useCurrency(basePriceUsd?: number) {
    const [state, setState] = useState<CurrencyState>({
        currencyCode: 'USD',
        rate: 1,
        loading: true,
        error: null
    });

    useEffect(() => {
        const fetchCurrencyData = async () => {
            // Check cache
            const cached = localStorage.getItem(CACHE_KEY);
            if (cached) {
                const { data, timestamp } = JSON.parse(cached);
                if (Date.now() - timestamp < CACHE_DURATION) {
                    setState(data);
                    return;
                }
            }

            try {
                // 1. Get User's Currency
                const ipRes = await fetch('https://ipapi.co/currency/');
                const userCurrency = await ipRes.text();

                // If text is too long (error page) or empty, fallback
                if (!userCurrency || userCurrency.length > 3) {
                    throw new Error('Invalid currency code');
                }

                // 2. Get Exchange Rate
                const rateRes = await fetch(`https://open.er-api.com/v6/latest/USD`);
                const rateData = await rateRes.json();
                const rate = rateData.rates[userCurrency];

                if (!rate) throw new Error('Rate not found');

                const newData = {
                    currencyCode: userCurrency,
                    rate: rate,
                    loading: false,
                    error: null
                };

                // Save to cache
                localStorage.setItem(CACHE_KEY, JSON.stringify({
                    data: newData,
                    timestamp: Date.now()
                }));

                setState(newData);

            } catch (err) {
                console.error('Currency fetch error:', err);
                setState({
                    currencyCode: 'USD',
                    rate: 1,
                    loading: false,
                    error: 'Failed to fetch currency'
                });
            }
        };

        fetchCurrencyData();
    }, []);

    const formattedPrice = basePriceUsd !== undefined ?
        new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: state.currencyCode,
            maximumFractionDigits: 0
        }).format(basePriceUsd * state.rate)
        : null;

    return { ...state, formattedPrice };
}
