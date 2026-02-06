import DashboardLayout from './DashboardLayout';
import { ExternalLink, Check, DollarSign, Calendar, Star, Users, Zap, X, Shield, Globe, Monitor, Smartphone, Server, Trophy, Loader2, ArrowLeft, Sparkles } from 'lucide-react';
import type { IAData, LocalizedString, Plan } from '../../lib/types';
import { useUserLocation } from '../../hooks/useUserLocation';
import { useStore } from '@nanostores/react';
import { language, getLocalized, getLocalizedArray } from '../../lib/i18nStore';
import { categoryTranslations } from '../../lib/data';

interface PricingCardProps {
    plan: {
        name: string;
        priceFormatted: string;
        priceUsd?: number;
        billingPeriod: string;
        features: { es: string[]; en: string[] };
    };
    loading?: boolean;
    currencyCode?: string;
    formattedPrice?: string;
    lang: 'es' | 'en';
}

function PricingCard({ plan, loading, currencyCode, formattedPrice, lang }: PricingCardProps) {
    const features = getLocalizedArray(plan.features, lang);

    return (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 mb-4">
            <h4 className="font-bold text-zinc-900 dark:text-white mb-1">{plan.name}</h4>
            <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold text-primary-600">{plan.priceFormatted}</span>
                <span className="text-xs text-zinc-500">/{plan.billingPeriod}</span>
            </div>

            {plan.priceUsd && (
                <p className="text-sm text-zinc-500 mt-1 flex items-center gap-1">
                    {loading ? (
                        <>
                            <Loader2 className="w-3 h-3 animate-spin" />
                            <span>{lang === 'es' ? 'Calculando...' : 'Calculating...'}</span>
                        </>
                    ) : (
                        <span>~ {formattedPrice} {currencyCode} (est.)</span>
                    )}
                </p>
            )}

            <div className="mt-4 space-y-2">
                {features.map((f: string, j: number) => (
                    <div key={j} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <Check className="w-4 h-4 text-primary-500 shrink-0" /> {f}
                    </div>
                ))}
            </div>
        </div>
    );
}

interface ToolDetailViewProps {
    ia: IAData;
}

export default function ToolDetailView({ ia }: ToolDetailViewProps) {
    const { countryName, countryCode, loading, currencyCode, rate: exchangeRate } = useUserLocation();
    const lang = useStore(language);

    // Helper for strings
    const t = (val: LocalizedString | string) => getLocalized(val, lang);
    // Helper for arrays
    const tList = (val: any) => getLocalizedArray(val, lang);

    const isAvailable = !ia.availability.restrictedCountries.includes(countryCode);

    return (
        <DashboardLayout activePage="home">
            {/* Back Navigation */}
            <div className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center gap-4">
                    <button
                        onClick={() => window.history.length > 1 ? window.history.back() : window.location.href = '/'}
                        className="p-2 -ml-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <span className="font-semibold text-sm text-zinc-500">
                        {lang === 'es' ? 'Volver al Directorio' : 'Back to Directory'}
                    </span>
                </div>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-950 min-h-[calc(100vh-4rem)] pb-20">

                {/* Hero Section */}
                <div className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 pb-12 pt-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {/* Logo */}
                            <div className="w-24 h-24 bg-zinc-100 dark:bg-black rounded-2xl flex items-center justify-center text-4xl font-bold shadow-sm shrink-0">
                                {ia.logo && !ia.logo.endsWith('svg') ? (
                                    <img src={ia.logo} alt={ia.name} className="w-16 h-16 object-contain" />
                                ) : (
                                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-600 to-primary-700">
                                        {ia.name.substring(0, 2)}
                                    </span>
                                )}
                            </div>

                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                    <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
                                        {ia.name}
                                    </h1>
                                    <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/30 px-2 py-1 rounded-md border border-amber-100 dark:border-amber-800">
                                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                                        <span className="font-bold text-amber-700 dark:text-amber-500">{ia.rating}</span>
                                        <span className="text-xs text-amber-600/70">
                                            ({ia.totalVotes} {lang === 'es' ? 'votos' : 'votes'})
                                        </span>
                                    </div>
                                </div>

                                <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-4 max-w-2xl leading-relaxed">
                                    {t(ia.description)}
                                </p>



                                // ... (inside the component)

                                <div className="flex flex-wrap gap-2">
                                    {ia.category.map((cat) => (
                                        <span key={cat} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-full text-sm font-medium capitalize">
                                            {categoryTranslations[cat]?.[lang] || cat}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 w-full md:w-auto">
                                <a
                                    href={ia.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-primary-500/30 whitespace-nowrap"
                                >
                                    {lang === 'es' ? 'Visitar Sitio' : 'Visit Website'} <Globe className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Info */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Pros / Cons */}
                        <section className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                                <h3 className="font-bold text-green-600 mb-4 flex items-center gap-2">
                                    {lang === 'es' ? 'Puntos Fuertes' : 'Strengths'}
                                </h3>
                                <ul className="space-y-3">
                                    {tList(ia.strengths).map((s, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                                <h3 className="font-bold text-red-600 mb-4 flex items-center gap-2">
                                    {lang === 'es' ? 'Limitaciones' : 'Limitations'}
                                </h3>
                                <ul className="space-y-3">
                                    {tList(ia.limitations).map((s, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                                            <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /> {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Ecosystem Section */}
                        {ia.ecosystem && (
                            <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 text-white rounded-2xl p-6 shadow-sm overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                                <h3 className="text-xl font-bold mb-2 relative z-10">{t(ia.ecosystem.title)}</h3>
                                <p className="text-zinc-300 mb-6 max-w-2xl relative z-10 text-sm leading-relaxed">
                                    {t(ia.ecosystem.description)}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                                    {ia.ecosystem.apps.map((app, i) => (
                                        <div key={i} className="bg-white/10 hover:bg-white/15 transition-colors rounded-xl p-4 backdrop-blur-sm border border-white/10">
                                            <h4 className="font-bold text-base mb-1 text-white">{app.name}</h4>
                                            <p className="text-xs text-zinc-300 leading-normal">{t(app.description)}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Models Section */}
                        <section className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-zinc-900 dark:text-white">
                                <Sparkles className="w-5 h-5 text-primary-500" />
                                {lang === 'es' ? 'Modelos Disponibles' : 'Available Models'}
                            </h3>

                            {ia.modelPricing ? (
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-zinc-50 dark:bg-zinc-800/30 rounded-xl p-4 border border-zinc-100 dark:border-zinc-800">
                                        <h4 className="font-semibold text-green-600 mb-2 text-sm uppercase tracking-wider">
                                            {lang === 'es' ? 'Gratuitos / Open' : 'Free / Open Source'}
                                        </h4>
                                        <ul className="space-y-2">
                                            {ia.modelPricing.free.map((m, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> {m}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-zinc-50 dark:bg-zinc-800/30 rounded-xl p-4 border border-zinc-100 dark:border-zinc-800">
                                        <h4 className="font-semibold text-primary-600 mb-2 text-sm uppercase tracking-wider">
                                            {lang === 'es' ? 'De Pago / Avanzados' : 'Paid / Advanced'}
                                        </h4>
                                        <ul className="space-y-2">
                                            {ia.modelPricing.paid.map((m, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500" /> {m}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-wrap gap-2">
                                    {ia.models.map((m) => (
                                        <span key={m} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm font-medium">
                                            {m}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Tool Descriptions */}
                            {ia.tools && (
                                <div className="mt-6 space-y-3">
                                    <h4 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                                        {lang === 'es' ? 'Detalles de Modelos' : 'Model Details'}
                                    </h4>
                                    <div className="grid gap-3">
                                        {ia.tools.map((tool, i) => {
                                            // Determine if free or paid based on modelPricing if available
                                            let badge = null;
                                            if (ia.modelPricing) {
                                                const isFree = ia.modelPricing.free.some(m => m.toLowerCase().includes(tool.name.split(' ')[0].toLowerCase()));
                                                const isPaid = ia.modelPricing.paid.some(m => m.toLowerCase().includes(tool.name.split(' ')[0].toLowerCase()));

                                                if (isFree) badge = <span className="text-[10px] px-1.5 py-0.5 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded border border-green-200 dark:border-green-800">{lang === 'es' ? 'Gratis' : 'Free'}</span>;
                                                else if (isPaid) badge = <span className="text-[10px] px-1.5 py-0.5 bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 rounded border border-primary-200 dark:border-primary-800">{lang === 'es' ? 'Pago' : 'Paid'}</span>;
                                            }

                                            return (
                                                <div key={i} className="p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg border border-zinc-100 dark:border-zinc-800">
                                                    <div className="flex justify-between items-start mb-1">
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-medium text-zinc-900 dark:text-white">{tool.name}</span>
                                                            {badge}
                                                        </div>
                                                        <span className="text-xs px-2 py-0.5 bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-full">
                                                            {t(tool.purpose)}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                                        {t(tool.description)}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </section>

                        {/* Benchmarks */}
                        <section className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                            <h3 className="text-xl font-bold mb-6 text-zinc-900 dark:text-white">
                                {lang === 'es' ? 'Benchmarks & Rendimiento' : 'Benchmarks & Performance'}
                            </h3>
                            <div className="space-y-6">
                                {[
                                    { label: lang === 'es' ? 'Calidad en Español' : 'Spanish Quality', val: ia.benchmarks.spanish, color: 'bg-primary-600' },
                                    { label: lang === 'es' ? 'Código y Lógica' : 'Code & Logic', val: ia.benchmarks.code, color: 'bg-violet-600' },
                                    { label: lang === 'es' ? 'Creatividad' : 'Creativity', val: ia.benchmarks.creativity, color: 'bg-pink-500' },
                                    { label: lang === 'es' ? 'Velocidad' : 'Speed', val: ia.benchmarks.speed, color: 'bg-emerald-500' }
                                ].map((bench) => (
                                    <div key={bench.label}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{bench.label}</span>
                                            <span className="text-sm font-bold text-zinc-900 dark:text-white">{bench.val}/100</span>
                                        </div>
                                        <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-3">
                                            <div className={`${bench.color} h-3 rounded-full transition-all duration-1000 ease-out`} style={{ width: `${bench.val}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Availability */}
                        <section className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-zinc-900 dark:text-white">
                                <Globe className="w-5 h-5 text-primary-500" />
                                {lang === 'es' ? `Disponibilidad en ${loading ? '...' : countryName}` : `Availability in ${loading ? '...' : countryName}`}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isAvailable ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                        {isAvailable ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
                                    </div>
                                    <div>
                                        <span className="block text-sm font-medium text-zinc-900 dark:text-white">
                                            {lang === 'es' ? `Acceso desde ${countryName}` : `Access from ${countryName}`}
                                        </span>
                                        <span className="text-xs text-zinc-500">
                                            {loading
                                                ? (lang === 'es' ? 'Verificando...' : 'Checking...')
                                                : (isAvailable
                                                    ? (lang === 'es' ? 'Disponible sin restricciones' : 'Available without restrictions')
                                                    : (lang === 'es' ? 'No disponible en tu región' : 'Not available in your region'))
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${!ia.availability.vpnRequired ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                                        <Shield className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-medium text-zinc-900 dark:text-white">
                                            {lang === 'es' ? 'VPN Necesaria' : 'VPN Required'}
                                        </span>
                                        <span className="text-xs text-zinc-500">
                                            {!ia.availability.vpnRequired
                                                ? (lang === 'es' ? 'No requiere VPN' : 'VPN not required')
                                                : (lang === 'es' ? 'Sí requiere VPN' : 'VPN required')
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>



                    </div>

                    {/* Sidebar: Pricing */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-lg sticky top-6">
                            <h3 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">
                                {lang === 'es' ? 'Planes y Precios' : 'Plans & Pricing'}
                            </h3>

                            {/* Free Tier */}
                            <div className="mb-6 pb-6 border-b border-zinc-100 dark:border-zinc-800">
                                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                                    {lang === 'es' ? 'Versión Gratuita' : 'Free Version'}
                                </span>
                                <div className="flex items-baseline gap-2 mt-1">
                                    <span className="text-2xl font-bold text-zinc-900 dark:text-white">
                                        {lang === 'es' ? 'gratis' : 'free'}
                                    </span>
                                </div>
                                {ia.pricing.free.available ? (
                                    <div className="mt-3 space-y-2">
                                        {tList(ia.pricing.free.features).map((f, i) => (
                                            <div key={i} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                                                <Check className="w-4 h-4 text-green-500 shrink-0" /> {f}
                                            </div>
                                        ))}
                                        {tList(ia.pricing.free.limits).map((l, i) => (
                                            <div key={i} className="flex gap-2 text-xs text-zinc-500">
                                                <span className="w-4 h-4 flex items-center justify-center font-bold text-[10px] text-zinc-400 border border-zinc-200 rounded-full">i</span> {l}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-sm text-red-500 mt-2">
                                        {lang === 'es' ? 'No disponible' : 'Not available'}
                                    </p>
                                )}
                            </div>

                            {/* Paid Plans */}
                            {ia.pricing.plans.map((plan, i) => (
                                <PricingCard
                                    key={i}
                                    plan={plan}
                                    loading={loading}
                                    currencyCode={currencyCode}
                                    formattedPrice={plan.priceUsd && exchangeRate ? (plan.priceUsd * exchangeRate).toLocaleString() : ''}
                                    lang={lang}
                                />
                            ))}

                            <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                                <h4 className="text-sm font-semibold mb-3 text-zinc-900 dark:text-white">
                                    {lang === 'es' ? 'Métodos de Pago' : 'Payment Methods'}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {ia.availability.paymentMethods.map((m) => (
                                        <span key={m} className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-zinc-600 dark:text-zinc-400">
                                            {m}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
