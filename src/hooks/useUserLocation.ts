import { useState, useEffect } from 'react';

interface UserLocationState {
    countryName: string;
    countryCode: string; // ISO 2 char
    currencyCode: string;
    rate: number;
    loading: boolean;
    error: string | null;
}

const CACHE_KEY = 'user_location_data';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export function useUserLocation(basePriceUsd?: number) {
    const [state, setState] = useState<UserLocationState>({
        countryName: 'United States', // Default fallback
        countryCode: 'US',
        currencyCode: 'USD',
        rate: 1,
        loading: true,
        error: null
    });

    useEffect(() => {
        const fetchData = async () => {
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
                // 1. Get User Location & Currency
                const ipRes = await fetch('https://ipapi.co/json/');
                const ipData = await ipRes.json();

                if (ipData.error) {
                    throw new Error('IP API Error');
                }

                // 2. Get Exchange Rate
                const rateRes = await fetch(`https://open.er-api.com/v6/latest/USD`);
                const rateData = await rateRes.json();
                const rate = rateData.rates[ipData.currency];

                if (!rate) throw new Error('Rate not found');

                const newData = {
                    countryName: ipData.country_name,
                    countryCode: ipData.country_code,
                    currencyCode: ipData.currency,
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
                console.error('Location/Currency fetch error:', err);
                setState(prev => ({ ...prev, loading: false, error: 'Failed to fetch location data' }));
            }
        };

        fetchData();
    }, []);

    const formattedPrice = basePriceUsd !== undefined ?
        new Intl.NumberFormat(state.countryCode === 'US' ? 'en-US' : 'es-CO', {
            style: 'currency',
            currency: state.currencyCode,
            maximumFractionDigits: 0
        }).format(basePriceUsd * state.rate)
        : null;

    return { ...state, formattedPrice };
}
