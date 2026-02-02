import { useState, useMemo } from 'react';
import DashboardLayout from './DashboardLayout';
import { Copy, Terminal, Briefcase, GraduationCap, PenTool, Palette, Search, Filter } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { language, getLocalized } from '../../lib/i18nStore';

const categories = [
    { id: 'work', label: { es: 'Trabajo', en: 'Work' }, icon: Briefcase },
    { id: 'study', label: { es: 'Estudio', en: 'Study' }, icon: GraduationCap },
    { id: 'code', label: { es: 'Código', en: 'Code' }, icon: Terminal },
    { id: 'marketing', label: { es: 'Marketing', en: 'Marketing' }, icon: PenTool },
    { id: 'design', label: { es: 'Diseño', en: 'Design' }, icon: Palette },
];

const initialPrompts = [
    {
        category: 'work',
        title: { es: 'Asistente de Correos Difíciles', en: 'Difficult Email Assistant' },
        content: {
            es: 'Actúa como un experto en comunicación corporativa. Ayúdame a redactar un correo para [destinatario] declinando su solicitud de [solicitud] pero manteniendo una buena relación. El tono debe ser profesional y empático.',
            en: 'Act like a corporate communication expert. Help me draft an email to [recipient] declining their request for [request] but maintaining a good relationship. The tone should be professional and empathetic.'
        },
        model: 'ChatGPT / Claude'
    },
    {
        category: 'code',
        title: { es: 'Explicación de Código Complejo', en: 'Complex Code Explanation' },
        content: {
            es: 'Explica el siguiente código paso a paso como si fuera un principiante. Identifica posibles errores de rendimiento y sugiere una versión refactorizada más limpia: [Pegar Código]',
            en: 'Explain the following code step by step as if I were a beginner. Identify possible performance issues and suggest a cleaner refactored version: [Paste Code]'
        },
        model: 'Claude 3.5 Sonnet / DeepSeek'
    },
    {
        category: 'study',
        title: { es: 'Tutor Socrático', en: 'Socratic Tutor' },
        content: {
            es: 'Quiero aprender sobre [Tema]. No me des la respuesta directa. Hazme preguntas que guíen mi razonamiento para llegar a la conclusión por mí mismo. Empieza con una pregunta simple.',
            en: 'I want to learn about [Topic]. Do not give me the direct answer. Ask me questions that guide my reasoning to reach the conclusion myself. Start with a simple question.'
        },
        model: 'ChatGPT'
    },
    {
        category: 'marketing',
        title: { es: 'Calendario de Contenidos', en: 'Content Calendar' },
        content: {
            es: 'Crea un calendario de contenidos de 1 semana para una marca de [Industria] en [Red Social]. El objetivo es [Objetivo]. Incluye ideas de copy, formato (video/imagen) y hora de publicación sugerida.',
            en: 'Create a 1-week content calendar for a [Industry] brand on [Social Network]. The goal is [Goal]. Include copy ideas, format (video/image) and suggested posting time.'
        },
        model: 'ChatGPT / Jasper'
    }
];

export default function PromptsView() {
    const [search, setSearch] = useState('');
    const [selectedCat, setSelectedCat] = useState<string | null>(null);
    const lang = useStore(language);

    const filteredPrompts = useMemo(() => {
        return initialPrompts.filter(p => {
            const tTitle = getLocalized(p.title, lang);
            const tContent = getLocalized(p.content, lang);
            const matchesSearch = tTitle.toLowerCase().includes(search.toLowerCase()) ||
                tContent.toLowerCase().includes(search.toLowerCase());
            const matchesCat = selectedCat ? p.category === selectedCat : true;
            return matchesSearch && matchesCat;
        });
    }, [search, selectedCat, lang]);

    // Sidebar Content for Filtering (Hidden on mobile if needed, but we have top pills now too)
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
                    <p className="text-zinc-500 dark:text-zinc-400 mb-6">
                        {lang === 'es' ? 'Colección curada para copiar y pegar.' : 'Curated collection to copy and paste.'}
                    </p>

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
                    <div className="flex flex-wrap gap-2">
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
                            <div key={i} className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                                        {(() => {
                                            const CatIcon = categories.find(c => c.id === prompt.category)?.icon || Terminal;
                                            return <CatIcon className="w-3 h-3" />;
                                        })()}
                                        {categories.find(c => c.id === prompt.category) ? getLocalized(categories.find(c => c.id === prompt.category)!.label, lang) : ''}
                                    </span>
                                    <span className="text-xs text-zinc-400">{prompt.model}</span>
                                </div>

                                <h3 className="font-bold text-lg mb-3 text-zinc-900 dark:text-white group-hover:text-primary-600 transition-colors">
                                    {getLocalized(prompt.title, lang)}
                                </h3>

                                <div className="bg-zinc-50 dark:bg-zinc-950 rounded-xl p-4 mb-4 font-mono text-sm text-zinc-600 dark:text-zinc-300 overflow-x-auto border border-zinc-100 dark:border-zinc-800/50 whitespace-pre-wrap">
                                    {getLocalized(prompt.content, lang)}
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        className="flex items-center gap-2 text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                        onClick={() => {
                                            navigator.clipboard.writeText(getLocalized(prompt.content, lang));
                                            alert(lang === 'es' ? 'Prompt copiado' : 'Prompt copied');
                                        }}
                                    >
                                        <Copy className="w-4 h-4" /> {lang === 'es' ? 'Copiar Prompt' : 'Copy Prompt'}
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-zinc-500">
                            {lang === 'es' ? 'No se encontraron prompts que coincidan con tu búsqueda.' : 'No prompts found matching your search.'}
                        </div>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
}
