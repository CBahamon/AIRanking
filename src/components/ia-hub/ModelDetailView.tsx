import { useState, useEffect } from 'react';
import { ArrowLeft, Box, Download, Heart, ExternalLink, Tag, Copy, Check, Terminal, Share2 } from 'lucide-react';
import DashboardLayout from './DashboardLayout';

interface ModelDetailViewProps {
    modelId: string;
}

interface ModelDetails {
    id: string;
    modelId: string;
    author?: string;
    lastModified: string;
    likes: number;
    downloads: number;
    tags: string[];
    pipeline_tag?: string;
    cardData?: {
        thumbnail?: string;
        license?: string;
        language?: string | string[];
    };
    siblings?: { rfilename: string }[];
}

export default function ModelDetailView({ modelId }: ModelDetailViewProps) {
    const [model, setModel] = useState<ModelDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        fetchModelDetails();
    }, [modelId]);

    const fetchModelDetails = async () => {
        setLoading(true);
        try {
            const res = await fetch(`https://huggingface.co/api/models/${modelId}`);
            if (!res.ok) throw new Error('Modelo no encontrado');
            const data = await res.json();
            setModel(data);
        } catch (err) {
            console.error(err);
            setError('No pudimos cargar la información del modelo.');
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(modelId);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const formatNumber = (num: number) => {
        return new Intl.NumberFormat('en-US', { notation: "compact", compactDisplay: "short" }).format(num);
    };

    if (loading) {
        return (
            <DashboardLayout activePage="models">
                <div className="h-screen flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                </div>
            </DashboardLayout>
        );
    }

    if (error || !model) {
        return (
            <DashboardLayout activePage="models">
                <div className="h-screen flex flex-col items-center justify-center gap-4">
                    <p className="text-red-500">{error}</p>
                    <a href="/models" className="text-primary-600 hover:underline">Volver a Modelos</a>
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout activePage="models">
            <div className="max-w-5xl mx-auto p-6 md:p-8">

                {/* Back Link */}
                <a href="/models" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors mb-8 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Volver al catálogo
                </a>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Info Card */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Header Section */}
                        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                            <div className="flex items-start gap-6">
                                <div className="w-20 h-20 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0 overflow-hidden border border-zinc-200 dark:border-zinc-700">
                                    {model.cardData?.thumbnail ? (
                                        <img src={model.cardData.thumbnail} alt="" className="w-full h-full object-cover" />
                                    ) : (
                                        <Box className="w-8 h-8 text-zinc-400" />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h1 className="text-2xl font-bold text-zinc-900 dark:text-white break-words mb-2">
                                        {model.modelId}
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                                        <span className="flex items-center gap-1">
                                            Autor: <span className="font-medium text-zinc-900 dark:text-white">{model.author || 'Unknown'}</span>
                                        </span>
                                        <span>•</span>
                                        <span>Actualizado: {new Date(model.lastModified).toLocaleDateString()}</span>
                                    </div>

                                    {/* Copy ID */}
                                    <button
                                        onClick={copyToClipboard}
                                        className="mt-4 flex items-center gap-2 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                                    >
                                        {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                                        {model.modelId}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 text-center">
                                <Heart className="w-5 h-5 mx-auto mb-2 text-red-500" />
                                <div className="text-xl font-bold text-zinc-900 dark:text-white">{formatNumber(model.likes)}</div>
                                <div className="text-xs text-zinc-500">Likes</div>
                            </div>
                            <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 text-center">
                                <Download className="w-5 h-5 mx-auto mb-2 text-blue-500" />
                                <div className="text-xl font-bold text-zinc-900 dark:text-white">{formatNumber(model.downloads)}</div>
                                <div className="text-xs text-zinc-500">Descargas</div>
                            </div>
                            <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 text-center col-span-2 md:col-span-2 flex flex-col items-center justify-center">
                                <div className="text-sm font-medium text-zinc-900 dark:text-white mb-1 uppercase tracking-wide opacity-50">Licencia</div>
                                <div className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-xs font-mono font-bold">
                                    {model.cardData?.license || 'Unknown'}
                                </div>
                            </div>
                        </div>

                        {/* Usage / Install */}
                        <div className="bg-zinc-900 rounded-3xl p-8 shadow-xl overflow-hidden relative group">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-white font-bold flex items-center gap-2">
                                    <Terminal className="w-5 h-5 text-green-400" />
                                    Instalar con Python
                                </h3>
                            </div>
                            <div className="bg-black/50 rounded-xl p-4 font-mono text-sm text-zinc-300 overflow-x-auto whitespace-pre">
                                pip install transformers
                                <br />
                                <br />
                                from transformers import pipeline<br />
                                pipe = pipeline("{model.pipeline_tag || 'text-generation'}", model="{model.modelId}")
                            </div>

                            <div className="mt-6 flex gap-4">
                                <a
                                    href={`https://huggingface.co/${model.modelId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2.5 bg-white text-black font-bold rounded-xl text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Ver en Hugging Face
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Details & Tags */}
                    <div className="space-y-6">

                        {/* Tags */}
                        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200 dark:border-zinc-800">
                            <h3 className="font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                                <Tag className="w-4 h-4" />
                                Etiquetas
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {model.pipeline_tag && (
                                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-bold capitalize">
                                        {model.pipeline_tag}
                                    </span>
                                )}
                                {model.tags.slice(0, 10).map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full text-xs font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Files Info */}
                        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200 dark:border-zinc-800">
                            <h3 className="font-bold text-zinc-900 dark:text-white mb-4">Archivos Principales</h3>
                            <ul className="space-y-2">
                                {model.siblings?.slice(0, 5).map(file => (
                                    <li key={file.rfilename} className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                                        <Box className="w-3 h-3 text-zinc-300" />
                                        {file.rfilename}
                                    </li>
                                ))}
                                {(model.siblings?.length || 0) > 5 && (
                                    <li className="text-xs text-zinc-400 italic pt-2">
                                        + {(model.siblings?.length || 0) - 5} archivos más...
                                    </li>
                                )}
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="h-20" />
            </div>
        </DashboardLayout>
    );
}
