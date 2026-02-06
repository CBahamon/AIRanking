import { useState, useMemo } from 'react';
import type { IAData } from '../../lib/types';
import IACard from './IACard';
import DashboardLayout from './DashboardLayout';
import { Search, Sparkles } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { language, getLocalized } from '../../lib/i18nStore';

interface ExploreViewProps {
    initialData: IAData[];
}

import { categoryTranslations } from '../../lib/data';

const getCategoryLabel = (cat: string, lang: 'es' | 'en') => {
    const translation = categoryTranslations[cat.toLowerCase()];
    if (translation) return translation[lang];
    return cat.charAt(0).toUpperCase() + cat.slice(1);
};

export default function ExploreView({ initialData }: ExploreViewProps) {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState<string | null>(null);
    const lang = useStore(language);

    // Extract unique categories
    const allCategories = useMemo(() => {
        const cats = new Set<string>();
        initialData.forEach(ia => ia.category.forEach(c => cats.add(c)));
        return Array.from(cats).sort();
    }, [initialData]);

    // Filter Logic
    const filteredData = useMemo(() => {
        return initialData.filter(ia => {
            const desc = getLocalized(ia.description, lang);
            const matchesSearch = ia.name.toLowerCase().includes(search.toLowerCase()) ||
                desc.toLowerCase().includes(search.toLowerCase()); // Search in current language description
            const matchesCategory = category ? ia.category.includes(category) : true;
            return matchesSearch && matchesCategory;
        });
    }, [initialData, search, category, lang]);

    return (
        <DashboardLayout activePage="explore">
            <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2 tracking-tight">
                            {lang === 'es' ? 'Catálogo Completo' : 'Full Catalog'}
                        </h1>
                        <p className="text-zinc-500 dark:text-zinc-400 max-w-lg text-lg leading-relaxed">
                            {lang === 'es' ? 'Navega por todas las herramientas disponibles.' : 'Browse all available tools.'}
                        </p>
                    </div>
                </div>

                {/* Search & Filters */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-xl">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                            <input
                                type="text"
                                placeholder={lang === 'es' ? 'Buscar herramientas...' : 'Search tools...'}
                                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none shadow-sm transition-all"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Pill Filters */}
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setCategory(null)}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${!category ? 'bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-black' : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'}`}
                        >
                            {lang === 'es' ? 'Todos' : 'All'}
                        </button>
                        {allCategories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setCategory(cat)}
                                className={`px-4 py-2 rounded-full text-xs font-bold transition-all border capitalize ${category === cat ? 'bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-black' : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'}`}
                            >
                                {getCategoryLabel(cat, lang)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredData.map(ia => (
                        <div key={ia.id} className="h-[280px]">
                            <IACard ia={ia} />
                        </div>
                    ))}
                </div>

                {filteredData.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-zinc-400">
                            {lang === 'es' ? 'No se encontraron herramientas.' : 'No tools found.'}
                        </p>
                        <button onClick={() => { setSearch(''); setCategory(null) }} className="text-primary-500 text-sm mt-2 font-medium">
                            {lang === 'es' ? 'Limpiar filtros' : 'Clear filters'}
                        </button>
                    </div>
                )}

                <div className="h-10" />
            </div>
        </DashboardLayout>
    );
}
