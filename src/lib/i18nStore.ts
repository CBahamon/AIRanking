import { atom } from 'nanostores';

export type Language = 'es' | 'en';

// Use standard atom and manually sync with localStorage to avoid proxy issues
export const language = atom<Language>('es');

// Initialize from localStorage if available (Client-side only)
if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    try {
        const saved = localStorage.getItem('ai-ranking-lang');
        if (saved === 'es' || saved === 'en') {
            language.set(saved as Language);
        }
    } catch (e) {
        console.warn('Failed to read language preference from localStorage:', e);
    }
}

// Subscribe to changes to persist the selection
language.listen((value) => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        try {
            localStorage.setItem('ai-ranking-lang', value);
        } catch (e) {
            console.warn('Failed to save language preference:', e);
        }
    }
});

export function setLanguage(lang: Language) {
    language.set(lang);
}

export const getLocalized = (data: any, lang: Language) => {
    if (typeof data === 'string') return data;
    if (data && data[lang]) return data[lang];
    return data?.es || '';
};

export const getLocalizedArray = (data: any, lang: Language): string[] => {
    if (Array.isArray(data)) return data; // Fallback for old data
    if (data && data[lang]) return data[lang];
    return data?.es || [];
};
