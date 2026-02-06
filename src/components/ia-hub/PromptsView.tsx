import { useState, useMemo } from 'react';
import DashboardLayout from './DashboardLayout';
import { Copy, Terminal, Briefcase, GraduationCap, PenTool, Palette, Search, Filter, Zap, Layout, BookOpen, Sparkles, Check } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { language, getLocalized } from '../../lib/i18nStore';
import { prompts, type Prompt } from '../../lib/promptsData';

const categories = [
    { id: 'work', label: { es: 'Trabajo', en: 'Work' }, icon: Briefcase },
    { id: 'code', label: { es: 'Código', en: 'Code' }, icon: Terminal },
    { id: 'marketing', label: { es: 'Marketing', en: 'Marketing' }, icon: PenTool },
    { id: 'design', label: { es: 'Diseño/Arte', en: 'Design/Art' }, icon: Palette },
    { id: 'writing', label: { es: 'Escritura', en: 'Writing' }, icon: BookOpen },
    { id: 'productivity', label: { es: 'Productividad', en: 'Productivity' }, icon: Zap },
    { id: 'business', label: { es: 'Negocios', en: 'Business' }, icon: Layout },
    { id: 'study', label: { es: 'Estudio', en: 'Study' }, icon: GraduationCap },
];

export default function PromptsView() {
    const [search, setSearch] = useState('');
    const [selectedCat, setSelectedCat] = useState<string | null>(null);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const lang = useStore(language);

    const filteredPrompts = useMemo(() => {
        return prompts.filter(p => {
            const tTitle = getLocalized(p.title, lang);
            const tContent = getLocalized(p.content, lang);
            const matchesSearch = tTitle.toLowerCase().includes(search.toLowerCase()) ||
                tContent.toLowerCase().includes(search.toLowerCase());
            const matchesCat = selectedCat ? p.category === selectedCat : true;
            return matchesSearch && matchesCat;
        });
    }, [search, selectedCat, lang]);

    const handleCopy = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    // Sidebar Content for Filtering
    const sidebarFilters = (
        <div className="space-y-6">
            <div>
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3 px-2">
                    {lang === 'es' ? 'Categorías' : 'Categories'}
                </h3>
                <div className="space-y-1">
                    <button
                        onClick={() => setSelectedCat(null)}
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${!selectedCat ? 'bg-primary-50 text-primary-700 font-medium dark:bg-primary-900/20 dark:text-primary-300' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}
                    >
                        {lang === 'es' ? 'Todas' : 'All'}
                    </button>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCat(cat.id)}
                            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${selectedCat === cat.id ? 'bg-zinc-100 text-zinc-900 font-medium dark:bg-zinc-800 dark:text-white' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'}`}
                        >
                            <cat.icon className="w-4 h-4 opacity-70" />
                            {getLocalized(cat.label, lang)}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <DashboardLayout activePage="prompts" sidebarExtras={sidebarFilters}>
            <div className="p-6 md:p-10 max-w-5xl mx-auto">
                <div className="mb-10">
                    <h1 className="text-3xl font-bold mb-3 tracking-tight">
                        {lang === 'es' ? 'Biblioteca de Prompts' : 'Prompt Library'}
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-2xl">
                        {lang === 'es' ? `Colección curada de ${prompts.length}+ prompts para copiar y pegar.` : `Curated collection of ${prompts.length}+ prompts to copy and paste.`}
                    </p>

                    {/* Educational Banner: The Prompt Formula */}
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-6 md:p-8 text-white mb-10 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-10">
                            <Sparkles className="w-64 h-64" />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-yellow-300" />
                                {lang === 'es' ? 'La Fórmula de un Prompt Perfecto' : 'The Perfect Prompt Formula'}
                            </h2>
                            <div className="flex flex-col md:flex-row gap-4 items-center text-sm md:text-base">
                                <div className="bg-white/20 backdrop-blur-md px-4 py-3 rounded-xl border border-white/30 flex-1 text-center w-full">
                                    <span className="font-bold block mb-1 text-yellow-300">1. {lang === 'es' ? 'ROL' : 'ROLE'}</span>
                                    {lang === 'es' ? '"Actúa como un experto..."' : '"Act as an expert..."'}
                                </div>
                                <div className="text-2xl font-bold opacity-50">+</div>
                                <div className="bg-white/20 backdrop-blur-md px-4 py-3 rounded-xl border border-white/30 flex-1 text-center w-full">
                                    <span className="font-bold block mb-1 text-cyan-300">2. {lang === 'es' ? 'TAREA' : 'TASK'}</span>
                                    {lang === 'es' ? '"Escribe/Crea/Resume..."' : '"Write/Create/Summarize..."'}
                                </div>
                                <div className="text-2xl font-bold opacity-50">+</div>
                                <div className="bg-white/20 backdrop-blur-md px-4 py-3 rounded-xl border border-white/30 flex-1 text-center w-full">
                                    <span className="font-bold block mb-1 text-pink-300">3. {lang === 'es' ? 'CONTEXTO' : 'CONTEXT'}</span>
                                    {lang === 'es' ? '"Para una audiencia de..."' : '"For an audience of..."'}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="relative max-w-xl mb-6">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                        <input
                            type="text"
                            placeholder={lang === 'es' ? 'Buscar prompt...' : 'Search prompt...'}
                            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none shadow-sm transition-all"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    {/* Quick Visual Filters (Pills) */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        <button
                            onClick={() => setSelectedCat(null)}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${!selectedCat ? 'bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-black' : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'}`}
                        >
                            {lang === 'es' ? 'Todos' : 'All'}
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCat(cat.id)}
                                className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 border ${selectedCat === cat.id ? 'bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-black' : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'}`}
                            >
                                <cat.icon className="w-3 h-3" />
                                {getLocalized(cat.label, lang)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {filteredPrompts.length > 0 ? (
                        filteredPrompts.map((prompt, i) => (
                            <div key={i} className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
                                {/* Decorative gradient blob */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 dark:bg-primary-900/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                                <div className="flex justify-between items-start mb-4 relative z-10">
                                    <span className="px-3 py-1 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-100 dark:border-zinc-700/50 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                                        {(() => {
                                            const CatIcon = categories.find(c => c.id === prompt.category)?.icon || Terminal;
                                            return <CatIcon className="w-3 h-3" />;
                                        })()}
                                        {categories.find(c => c.id === prompt.category) ? getLocalized(categories.find(c => c.id === prompt.category)!.label, lang) : prompt.category}
                                    </span>
                                    <span className="text-[10px] text-zinc-400 flex items-center gap-1">
                                        <Sparkles className="w-3 h-3" />
                                        {prompt.model}
                                    </span>
                                </div>

                                <h3 className="font-bold text-lg mb-4 text-zinc-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors relative z-10 leading-snug">
                                    {getLocalized(prompt.title, lang)}
                                </h3>

                                {/* Code Snippet Looking Box */}
                                <div className="bg-zinc-900 dark:bg-zinc-950 rounded-xl p-4 mb-5 font-mono text-sm text-zinc-300 overflow-hidden relative flex-grow group/code border border-zinc-800 shadow-inner">
                                    <div className="absolute top-3 right-3 opacity-0 group-hover/code:opacity-100 transition-opacity">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                        </div>
                                    </div>
                                    <div className="whitespace-pre-wrap leading-relaxed opacity-90">
                                        {getLocalized(prompt.content, lang)}
                                    </div>
                                    {/* Text Fade at bottom if too long */}
                                    {/* <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none" /> */}
                                </div>

                                <div className="flex justify-end mt-auto relative z-10">
                                    <button
                                        className={`flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all transform active:scale-95 ${copiedIndex === i ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-zinc-50 text-zinc-700 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'}`}
                                        onClick={() => handleCopy(getLocalized(prompt.content, lang), i)}
                                    >
                                        {copiedIndex === i ? (
                                            <>
                                                <Check className="w-4 h-4" /> {lang === 'es' ? '¡Copiado!' : 'Copied!'}
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-4 h-4" /> {lang === 'es' ? 'Copiar Prompt' : 'Copy Prompt'}
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-zinc-500">
                            <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                            <p>{lang === 'es' ? 'No se encontraron prompts que coincidan con tu búsqueda.' : 'No prompts found matching your search.'}</p>
                        </div>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
}
