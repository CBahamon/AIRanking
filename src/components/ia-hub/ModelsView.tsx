import { useState, useEffect, useMemo } from 'react';
import DashboardLayout from './DashboardLayout';
import { Search, Download, Heart, Box, Loader2, AlertCircle } from 'lucide-react';

interface HFModel {
    id: string;
    modelId: string;
    likes: number;
    downloads: number;
    pipeline_tag?: string;
    cardData?: {
        thumbnail?: string;
    };
    tags?: string[];
}

export default function ModelsView() {
    const [search, setSearch] = useState('');
    const [models, setModels] = useState<HFModel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [filter, setFilter] = useState<string | null>('all'); // Default to 'all'

    // Pagination State
    const [nextCursor, setNextCursor] = useState<string | null>(null);
    const [cursorStack, setCursorStack] = useState<(string | null)[]>([]); // To handle "Previous"
    const [currentPageCursor, setCurrentPageCursor] = useState<string | null>(null); // The cursor used to fetch the current page

    // Initial Load
    useEffect(() => {
        setModels([]);
        setNextCursor(null);
        setCursorStack([]);
        setCurrentPageCursor(null);
        fetchModels(search, filter, null);
    }, [filter]); // Reload on filter change

    // Debounced Search
    useEffect(() => {
        const timer = setTimeout(() => {
            // Only fetch if search changed significantly or is being cleared
            setModels([]);
            setNextCursor(null);
            setCursorStack([]);
            setCurrentPageCursor(null);
            fetchModels(search, filter, null);
        }, 500);
        return () => clearTimeout(timer);
    }, [search]);

    const fetchModels = async (query = '', currentFilter = filter, cursor: string | null = null) => {
        setLoading(true);
        setError(null);
        try {
            let url = 'https://huggingface.co/api/models?limit=30&full=true';

            // Filter Logic
            if (currentFilter === 'trending') {
                url += '&sort=likes&direction=-1';
            } else if (currentFilter === 'all') {
                // Default 'All' usually implies sort by popularity/downloads if not specified, 
                // or just standard sort. Let's use downloads for 'All' to ensure quality.
                url += '&sort=downloads&direction=-1';
            } else if (currentFilter) {
                // Specific Category
                url += `&pipeline_tag=${currentFilter}&sort=downloads&direction=-1`;
            }

            // Search overrides some sorts naturally in HF, but we keep params.
            if (query) {
                url += `&search=${encodeURIComponent(query)}`;
            }

            // Pagination
            if (cursor) {
                url += `&cursor=${cursor}`;
            }

            const res = await fetch(url);
            if (!res.ok) throw new Error('Error conectando a Hugging Face');

            // Parse Link Header for Next Cursor
            // Header format: <https://...?cursor=XY...>; rel="next"
            const linkHeader = res.headers.get('link');
            let next = null;
            if (linkHeader) {
                const match = linkHeader.match(/cursor=([^>&]+)/);
                if (match && match[1]) {
                    next = match[1];
                }
            }
            setNextCursor(next);

            const data = await res.json();
            setModels(data); // Always replace data for pages

        } catch (err) {
            console.error(err);
            setError('No pudimos cargar los modelos. Intenta de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    const handleNext = () => {
        if (nextCursor) {
            setCursorStack(prev => [...prev, currentPageCursor]); // Save the cursor of the current page
            setCurrentPageCursor(nextCursor);
            fetchModels(search, filter, nextCursor);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handlePrev = () => {
        if (cursorStack.length > 0) {
            const prevCursor = cursorStack[cursorStack.length - 1]; // The cursor for the previous page
            setCursorStack(prev => prev.slice(0, -1)); // Pop it
            setCurrentPageCursor(prevCursor);
            fetchModels(search, filter, prevCursor);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const filters = [
        { id: 'all', label: 'Todos' },
        { id: 'trending', label: 'Tendencias' },
        { id: 'text-generation', label: 'Texto (LLMs)' },
        { id: 'image-classification', label: 'Visión' },
        { id: 'text-to-image', label: 'Imagen' },
        { id: 'translation', label: 'Traducción' },
        { id: 'automatic-speech-recognition', label: 'Audio' },
    ];

    return (
        <DashboardLayout activePage="models">
            <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-500 text-xs px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                                Beta
                            </span>
                        </div>
                        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2 tracking-tight">
                            Modelos Open Source
                        </h1>
                        <p className="text-zinc-500 dark:text-zinc-400 max-w-lg text-lg leading-relaxed">
                            Explora "cerebros" de IA crudos directamente desde Hugging Face.
                        </p>
                    </div>
                </div>

                {/* Toolbar */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-xl">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                            <input
                                type="text"
                                placeholder="Buscar modelo (ej. llama, mistral, bert)..."
                                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none shadow-sm transition-all"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap gap-2">
                        {filters.map(f => (
                            <button
                                key={f.id}
                                onClick={() => setFilter(f.id)}
                                className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${filter === f.id ? 'bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-black' : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'}`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Grid */}
                {loading ? (
                    <div className="py-20 flex flex-col items-center justify-center text-zinc-400">
                        <Loader2 className="w-8 h-8 animate-spin mb-4 text-primary-500" />
                        <p>Cargando modelos...</p>
                    </div>
                ) : error ? (
                    <div className="py-20 flex flex-col items-center justify-center text-red-500 bg-red-50 dark:bg-red-900/10 rounded-3xl">
                        <AlertCircle className="w-8 h-8 mb-4" />
                        <p>{error}</p>
                        <button onClick={() => fetchModels(search, filter)} className="mt-4 text-sm font-bold underline">Reintentar</button>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {models.map(model => (
                                <a
                                    href={`/models/${model.modelId}`}
                                    key={model.id}
                                    className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary-500/50 transition-all flex flex-col h-[200px]"
                                >
                                    <div className="p-5 flex-1 flex flex-col">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                {/* Thumbnail or Fallback Icon */}
                                                <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0 overflow-hidden text-zinc-400">
                                                    {model.cardData?.thumbnail ? (
                                                        <img src={model.cardData.thumbnail} alt="" className="w-full h-full object-cover" />
                                                    ) : (
                                                        <Box className="w-5 h-5" />
                                                    )}
                                                </div>
                                                <div className="flex flex-col min-w-0">
                                                    <h3 className="font-bold text-sm text-zinc-900 dark:text-white truncate pr-2 group-hover:text-primary-600 transition-colors" title={model.modelId}>
                                                        {model.modelId.split('/')[1] || model.modelId}
                                                    </h3>
                                                    <span className="text-xs text-zinc-500 truncate">{model.modelId.split('/')[0] || 'Unknown User'}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Stats */}
                                        <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/50 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                                            <div className="flex items-center gap-4">
                                                <span className="flex items-center gap-1.5"><Heart className="w-3.5 h-3.5" /> {formatNumber(model.likes)}</span>
                                                <span className="flex items-center gap-1.5"><Download className="w-3.5 h-3.5" /> {formatNumber(model.downloads)}</span>
                                            </div>
                                            {model.pipeline_tag && (
                                                <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide truncate max-w-[100px]">
                                                    {model.pipeline_tag}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        <div className="flex items-center justify-between pt-8 border-t border-zinc-100 dark:border-zinc-800/50">
                            <button
                                onClick={handlePrev}
                                disabled={cursorStack.length === 0 || loading}
                                className="px-5 py-2.5 rounded-xl font-medium text-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed
                                           bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                            >
                                ← Anterior
                            </button>

                            <span className="text-xs font-medium text-zinc-400">
                                Página {cursorStack.length + 1}
                            </span>

                            <button
                                onClick={handleNext}
                                disabled={!nextCursor || loading}
                                className="px-5 py-2.5 rounded-xl font-medium text-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed
                                           bg-zinc-900 dark:bg-white text-white dark:text-black hover:opacity-90 shadow-sm"
                            >
                                {loading ? 'Cargando...' : 'Siguiente →'}
                            </button>
                        </div>

                        {models.length === 0 && !loading && (
                            <div className="py-20 text-center text-zinc-500">
                                No encontramos modelos con esos criterios.
                            </div>
                        )}
                    </>
                )}

                <div className="h-10" />
            </div>
        </DashboardLayout>
    );
}

function formatNumber(num: number): string {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return num.toString();
}
