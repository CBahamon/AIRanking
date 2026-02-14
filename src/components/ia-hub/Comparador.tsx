import { useState, useMemo } from 'react';
import type { IAData } from '../../lib/types';
import { Plus, X, Check, XCircle, Search, Trash2, Info, Loader2 } from 'lucide-react';
import { useUserLocation } from '../../hooks/useUserLocation';
import { useStore } from '@nanostores/react';
import { language, getLocalized, getLocalizedArray } from '../../lib/i18nStore';
import DashboardLayout from './DashboardLayout';

function PricingCell({ plan, lang }: { plan: any, lang: string }) {
    const { formattedPrice, currencyCode, loading } = useUserLocation(plan.priceUsd);

    return (
        <div className="flex flex-col items-center">
            <div className="text-lg font-bold text-zinc-900 dark:text-white">{plan.priceFormatted}</div>

            {plan.priceUsd && (
                <div className="text-xs text-zinc-500 mt-1 min-h-[16px]">
                    {loading ? (
                        <Loader2 className="w-3 h-3 animate-spin mx-auto" />
                    ) : (
                        <span>~ {formattedPrice} {currencyCode} (est.)</span>
                    )}
                </div>
            )}
        </div>
    );
}

interface ComparadorProps {
    allData: IAData[];
}

export default function Comparador({ allData }: ComparadorProps) {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const lang = useStore(language);

    const MAX_COMPARE = 3;

    const selectedIAs = useMemo(() => allData.filter(ia => selectedIds.includes(ia.id)), [allData, selectedIds]);

    const availableIAs = useMemo(() => {
        return allData.filter(ia =>
            !selectedIds.includes(ia.id) &&
            ia.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [allData, selectedIds, searchTerm]);

    const addIA = (id: string) => {
        if (selectedIds.length < MAX_COMPARE) {
            setSelectedIds(prev => [...prev, id]);
            setSearchTerm('');
            setIsDropdownOpen(false);
        }
    };

    const removeIA = (id: string) => {
        setSelectedIds(prev => prev.filter(i => i !== id));
    };

    // Mini Radar Chart Component
    const MiniRadarContent = ({ ia, color }: { ia: IAData, color: string }) => {
        const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
        const center = 60;
        const radius = 45;

        const labels = lang === 'es' ? [
            'Español', 'Código', 'Creatividad', 'Velocidad', 'Economía'
        ] : [
            'Spanish', 'Code', 'Creativity', 'Speed', 'Economy'
        ];

        const values = [
            ia.benchmarks.spanish,
            ia.benchmarks.code,
            ia.benchmarks.creativity,
            ia.benchmarks.speed,
            ia.benchmarks.free || 0
        ];

        // Calculated points for polygon and interaction
        const points = values.map((val, i) => {
            const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
            const r = (val / 100) * radius;
            const x = center + r * Math.cos(angle);
            const y = center + r * Math.sin(angle);
            return { x, y, value: val, label: labels[i] };
        });

        const polyPoints = points.map(p => `${p.x},${p.y}`).join(' ');

        return (
            <div className="flex flex-col items-center group/radar">
                <div className="w-[120px] h-[120px] relative">
                    <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
                        {/* Background Circles */}
                        {[22.5, 45].map(r => (
                            <circle key={r} cx="60" cy="60" r={r} fill="none" stroke="#e4e4e7" strokeWidth="1" className="dark:stroke-zinc-700" strokeDasharray="2,2" />
                        ))}

                        {/* Axes */}
                        {[0, 1, 2, 3, 4].map(i => {
                            const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
                            const x2 = 60 + 45 * Math.cos(angle);
                            const y2 = 60 + 45 * Math.sin(angle);
                            return <line key={i} x1="60" y1="60" x2={x2} y2={y2} stroke="#e4e4e7" className="dark:stroke-zinc-700" strokeWidth="1" />;
                        })}

                        {/* Data Polygon */}
                        <polygon points={polyPoints} fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2" />

                        {/* Interactive Points */}
                        {points.map((p, i) => (
                            <g key={i}>
                                {/* Invisible hit target */}
                                <circle
                                    cx={p.x} cy={p.y} r="8" fill="transparent"
                                    onMouseEnter={() => setHoveredIndex(i)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className="cursor-pointer"
                                />
                                {/* Visible dot on hover or if it's the specific point */}
                                <circle
                                    cx={p.x} cy={p.y} r={hoveredIndex === i ? 4 : 2} fill={color}
                                    className="transition-all duration-200 pointer-events-none"
                                    stroke={hoveredIndex === i ? 'white' : 'none'}
                                    strokeWidth={hoveredIndex === i ? 2 : 0}
                                />
                            </g>
                        ))}
                    </svg>

                    {/* Tooltip */}
                    {hoveredIndex !== null && (
                        <div
                            className="absolute z-50 bg-zinc-900 text-white px-2 py-1 rounded shadow-xl pointer-events-none whitespace-nowrap flex flex-col items-center"
                            style={{
                                left: points[hoveredIndex].x,
                                top: points[hoveredIndex].y - 36,
                                transform: 'translateX(-50%)'
                            }}
                        >
                            <span className="text-[10px] font-bold leading-tight">{points[hoveredIndex].label}</span>
                            <span className="text-[10px] font-mono leading-tight">{points[hoveredIndex].value}/100</span>
                            {/* Triangle */}
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 rotate-45" />
                        </div>
                    )}

                    {/* Static Labels (Faded on hover) */}
                    <div className={`transition-opacity duration-200 pointer-events-none ${hoveredIndex !== null ? 'opacity-20' : 'opacity-100'}`}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[9px] font-bold text-zinc-400 bg-white/50 dark:bg-black/20 px-1 rounded backdrop-blur-[1px]">
                            {lang === 'es' ? 'ESPAÑOL' : 'SPANISH'}
                        </div>
                        <div className="absolute top-[35%] right-[-10px] text-[9px] font-bold text-zinc-400">COD</div>
                        <div className="absolute bottom-[10%] right-[-5px] text-[9px] font-bold text-zinc-400">CRE</div>
                        <div className="absolute bottom-[10%] left-[-5px] text-[9px] font-bold text-zinc-400">VEL</div>
                        <div className="absolute top-[35%] left-[-10px] text-[9px] font-bold text-zinc-400">$$$</div>
                    </div>
                </div>
            </div>
        );
    }

    const getDistinctColor = (index: number) => {
        const colors = ['#3b82f6', '#8b5cf6', '#10b981'];
        return colors[index % colors.length];
    }

    return (
        <DashboardLayout activePage="compare">
            <div className="p-6 md:p-10 max-w-7xl mx-auto h-[calc(100vh-4rem)] flex flex-col">
                <div className="mb-6 flex-none">
                    <h1 className="text-3xl font-bold mb-2 tracking-tight">
                        {lang === 'es' ? 'Comparador de IA' : 'AI Comparator'}
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400">
                        {lang === 'es'
                            ? 'Analiza puntos fuertes, precios y recomendaciones lado a lado.'
                            : 'Analyze strengths, pricing, and benchmarks side-by-side.'}
                    </p>
                </div>

                <div className="w-full bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col flex-1 min-h-0">

                    {/* Top Controller Section */}
                    <div className="p-6 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 flex-none">
                        {/* Search / Add Selector */}
                        <div className="max-w-xl mx-auto relative mb-4">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                                <input
                                    type="text"
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 shadow-sm"
                                    placeholder={lang === 'es' ? "Agregar IA para comparar..." : "Add AI to compare..."}
                                    value={searchTerm}
                                    onFocus={() => setIsDropdownOpen(true)}
                                    onChange={(e) => { setSearchTerm(e.target.value); setIsDropdownOpen(true); }}
                                    disabled={selectedIds.length >= MAX_COMPARE}
                                />
                            </div>

                            {isDropdownOpen && availableIAs.length > 0 && selectedIds.length < MAX_COMPARE && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-xl z-20 max-h-60 overflow-y-auto">
                                    {availableIAs.map(ia => (
                                        <button
                                            key={ia.id}
                                            onClick={() => addIA(ia.id)}
                                            className="w-full text-left px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-700/50 flex items-center justify-between group"
                                        >
                                            <span className="font-medium">{ia.name}</span>
                                            <Plus className="w-4 h-4 text-zinc-400 group-hover:text-primary-500" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Selected Chips */}
                        <div className="flex flex-wrap justify-center gap-3 min-h-[32px]">
                            {selectedIAs.map((ia, idx) => (
                                <div key={ia.id} className="flex items-center gap-2 pl-2 pr-2 py-1 bg-white dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm">
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-sm" style={{ backgroundColor: getDistinctColor(idx) }}>
                                        {ia.name[0]}
                                    </div>
                                    <span className="font-medium text-xs pr-1">{ia.name}</span>
                                    <button onClick={() => removeIA(ia.id)} className="w-5 h-5 rounded-full bg-zinc-100 dark:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                                        <X className="w-3 h-3" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Comparison Table */}
                    {selectedIAs.length > 0 ? (
                        <div className="flex-1 overflow-auto">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 text-sm">

                                    {/* Visual Benchmark Row */}
                                    <tr>
                                        <td className="p-4 font-bold text-zinc-500 w-1/4 pl-8 align-middle bg-zinc-50/30 dark:bg-zinc-900/30 border-r border-zinc-100 dark:border-zinc-800">
                                            <div className="flex items-center gap-2">
                                                <span>{lang === 'es' ? 'Rendimiento Visual' : 'Visual Performance'}</span>
                                                <div className="group relative">
                                                    <Info className="w-4 h-4 text-zinc-400 cursor-help" />
                                                    <div className="absolute left-0 bottom-full mb-2 w-48 p-2 bg-black text-white text-xs rounded hidden group-hover:block z-10">
                                                        {lang === 'es' ? 'Comparativa visual de 5 ejes: Español, Código, Creatividad, Velocidad y Economía.' : 'Visual comparison of 5 axes: Spanish, Code, Creativity, Speed, and Economy.'}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        {selectedIAs.map((ia, idx) => (
                                            <td key={ia.id} className="p-6 text-center align-bottom border-r border-zinc-100 dark:border-zinc-800 last:border-0">
                                                <MiniRadarContent ia={ia} color={getDistinctColor(idx)} />
                                            </td>
                                        ))}
                                    </tr>

                                    {/* Price Row */}
                                    <tr className="bg-zinc-50/50 dark:bg-zinc-800/20">
                                        <td className="p-4 font-bold text-zinc-500 pl-8 border-r border-zinc-100 dark:border-zinc-800">
                                            {lang === 'es' ? 'Precio Mensual' : 'Monthly Price'}
                                        </td>
                                        {selectedIAs.map(ia => (
                                            <td key={ia.id} className="p-4 text-center border-r border-zinc-200/50 dark:border-zinc-700/50 last:border-0">
                                                <PricingCell plan={ia.pricing.plans[0]} lang={lang} />
                                            </td>
                                        ))}
                                    </tr>

                                    {/* Free Tier Row */}
                                    <tr>
                                        <td className="p-4 font-bold text-zinc-500 pl-8 border-r border-zinc-100 dark:border-zinc-800">
                                            {lang === 'es' ? 'Versión Gratis' : 'Free Version'}
                                        </td>
                                        {selectedIAs.map(ia => (
                                            <td key={ia.id} className="p-4 text-center border-r border-zinc-100 dark:border-zinc-800 last:border-0">
                                                {ia.pricing.free.available ? (
                                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                                                        <Check className="w-3.5 h-3.5" /> {lang === 'es' ? 'SI' : 'YES'}
                                                    </div>
                                                ) : (
                                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold">
                                                        <XCircle className="w-3.5 h-3.5" /> NO
                                                    </div>
                                                )}
                                            </td>
                                        ))}
                                    </tr>

                                    {/* Features Matrix Grid */}
                                    <tr>
                                        <td className="p-4 font-bold text-zinc-500 pl-8 align-top pt-8 border-r border-zinc-100 dark:border-zinc-800">
                                            {lang === 'es' ? 'Características' : 'Features'}
                                        </td>
                                        {selectedIAs.map(ia => (
                                            <td key={ia.id} className="p-4 align-top border-r border-zinc-100 dark:border-zinc-800 last:border-0">
                                                <ul className="space-y-3">
                                                    {getLocalizedArray(ia.strengths, lang).map((s, i) => (
                                                        <li key={i} className="flex gap-2 items-start text-xs text-zinc-600 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800 p-2 rounded-lg border border-zinc-100 dark:border-zinc-700">
                                                            <Check className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                                                            <span>{s}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-zinc-400 min-h-[300px]">
                            <div className="w-16 h-16 rounded-full bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center mb-4">
                                <Plus className="w-8 h-8 opacity-20" />
                            </div>
                            <p>{lang === 'es' ? 'Selecciona herramientas arriba para comenzar la comparación.' : 'Select tools above to start comparing.'}</p>
                        </div>
                    )}

                </div>
            </div>
        </DashboardLayout>
    );
}
