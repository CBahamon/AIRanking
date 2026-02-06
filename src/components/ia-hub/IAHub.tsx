import { useState, useMemo } from 'react';
import type { IAData } from '../../lib/types';
import IACard from './IACard';
import RecomendadorIA from './RecomendadorIA';
import DashboardLayout from './DashboardLayout'; // Import New Layout
import { Search, Sparkles, Filter, Home, Zap, DollarSign } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { language, getLocalized } from '../../lib/i18nStore';

interface IAHubProps {
    initialData: IAData[];
}

export default function IAHub({ initialData }: IAHubProps) {
    const lang = useStore(language);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState<string | null>(null);

    // Extract unique categories
    const allCategories = useMemo(() => {
        const cats = new Set<string>();
        initialData.forEach(ia => ia.category.forEach(c => cats.add(c)));
        return Array.from(cats).sort();
    }, [initialData]);

    // Trending Data (Explicitly ChatGPT, Claude, Gemini)
    const trendingData = useMemo(() => {
        const priorityIds = ['chatgpt', 'claude', 'gemini'];
        return initialData
            .filter(ia => priorityIds.includes(ia.id))
            .sort((a, b) => priorityIds.indexOf(a.id) - priorityIds.indexOf(b.id));
    }, [initialData]);

    // Filtered Data for "All Models"
    const filteredData = useMemo(() => {
        return initialData.filter(ia => {
            const description = getLocalized(ia.description, lang);
            const matchesSearch = ia.name.toLowerCase().includes(search.toLowerCase()) ||
                description.toLowerCase().includes(search.toLowerCase());
            const matchesCategory = category ? ia.category.includes(category) : true;
            return matchesSearch && matchesCategory;
        });
    }, [initialData, search, category]);

    return (
        <DashboardLayout activePage="home">
            <div className="p-6 md:p-8 space-y-12 max-w-7xl mx-auto">

                {/* Header / Welcome */}
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2 tracking-tight">
                            Explora el Futuro
                        </h1>
                        <p className="text-zinc-500 dark:text-zinc-400 max-w-lg text-lg leading-relaxed">
                            Descubre, compara y encuentra la IA perfecta para tu flujo de trabajo.
                        </p>
                    </div>
                </div>

                {/* Trending Section */}
                <section>
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                            <Zap className="w-5 h-5" />
                        </span>
                        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Tendencias de la Semana</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {trendingData.map(ia => (
                            <div key={ia.id} className="h-[280px]">
                                <IACard ia={ia} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Explore CTA Section */}
                <section>
                    <div className="bg-zinc-100 dark:bg-zinc-800/50 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Explora todo el catálogo</h2>
                            <p className="text-zinc-500 dark:text-zinc-400">Busca, filtra y encuentra entre todas las herramientas disponibles.</p>
                        </div>
                        <a href="/explore" className="px-6 py-3 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white font-bold rounded-xl shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-600 transition-colors flex items-center gap-2">
                            <Search className="w-4 h-4" /> Ver Todas las Herramientas
                        </a>
                    </div>
                </section>

                {/* Wizard Widget (Bottom CTA) */}
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden group">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">¿No sabes cuál elegir?</h3>
                            <p className="text-indigo-100 max-w-md">Nuestro "Asistente Mágico" te hace 3 preguntas simples y te recomienda la mejor IA para ti.</p>
                        </div>
                        <button
                            onClick={() => document.getElementById('wizard-area')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap"
                        >
                            Usar Recomendador
                        </button>
                    </div>
                </div>

                {/* Wizard Area (Hidden until scrolled/clicked normally, but here we place it) */}
                <div id="wizard-area" className="scroll-mt-24">
                    <RecomendadorIA allData={initialData} />
                </div>

                <div className="h-10" />
            </div>
        </DashboardLayout>
    );
}

function CheckIcon(props: any) {
    return <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
}
