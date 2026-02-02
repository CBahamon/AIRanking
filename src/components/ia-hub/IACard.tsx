import type { IAData } from '../../lib/types';
import { Star, Check, ExternalLink, ArrowRight } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { language, getLocalized } from '../../lib/i18nStore';

interface IACardProps {
    ia: IAData;
    compact?: boolean;
}

export default function IACard({ ia, compact = false }: IACardProps) {
    const lang = useStore(language);

    // Format price for display
    const priceDisplay = ia.pricing.free.available
        ? (lang === 'es' ? 'Gratis / ' : 'Free / ') + (ia.pricing.plans[0]?.priceFormatted || 'Paid')
        : ia.pricing.plans[0]?.priceFormatted || 'Paid';

    return (
        <div className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
            {/* Header Image/Logo Area */}
            <div className="h-24 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pattern-grid-lg" />
                <div className="w-16 h-16 bg-white dark:bg-black rounded-xl shadow-sm flex items-center justify-center text-2xl font-bold select-none z-10">
                    {/* Fallback to text if no logo image logic yet */}
                    {ia.logo && !ia.logo.endsWith('svg') ? <img src={ia.logo} alt={ia.name} className="w-10 h-10 object-contain" /> : <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-600 to-primary-700">{ia.name.substring(0, 2)}</span>}
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="font-bold text-lg text-zinc-900 dark:text-white group-hover:text-primary-600 transition-colors">{ia.name}</h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">{ia.company}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/30 px-2 py-1 rounded-md">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                        <span className="text-xs font-medium text-amber-700 dark:text-amber-500">{ia.rating}</span>
                    </div>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-2 mb-4 flex-1">
                    {getLocalized(ia.description, lang)}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {ia.category.slice(0, 3).map(cat => (
                        <span key={cat} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full">
                            {cat}
                        </span>
                    ))}
                </div>

                {/* Pricing & Button */}
                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-zinc-400 uppercase font-medium">
                            {lang === 'es' ? 'Precios' : 'Pricing'}
                        </span>
                        <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{priceDisplay}</span>
                    </div>

                    <a href={`/tool/${ia.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors">
                        {lang === 'es' ? 'Ver detalles' : 'View Details'} <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}
