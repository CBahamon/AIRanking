import { useState } from 'react';
import type { IAData } from '../../lib/types';
import { ChevronRight, CheckCircle, RotateCcw, Sparkles } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { language, getLocalized } from '../../lib/i18nStore';

interface RecomendadorProps {
    allData: IAData[];
}

const QUESTIONS = [
    {
        id: 'goal',
        text: { es: '¿Para qué usarás la IA principalmente?', en: 'What will you primarily use AI for?' },
        options: [
            { id: 'code', label: { es: 'Programación y Código', en: 'Programming & Code' } },
            { id: 'writing', label: { es: 'Redacción y Contenido', en: 'Writing & Content' } },
            { id: 'study', label: { es: 'Estudio e Investigación', en: 'Study & Research' } },
            { id: 'math', label: { es: 'Matemáticas y Lógica', en: 'Math & Logic' } }
        ]
    },
    {
        id: 'budget',
        text: { es: '¿Cuánto estás dispuesto a gastar?', en: 'How much are you willing to spend?' },
        options: [
            { id: 'free', label: { es: 'Nada, solo gratis', en: 'Nothing, free only' } },
            { id: 'low', label: { es: 'Poco (< $10 USD)', en: 'Little (< $10 USD)' } },
            { id: 'pro', label: { es: 'Calidad máxima ($20+ USD)', en: 'Max quality ($20+ USD)' } }
        ]
    },
    {
        id: 'quality',
        text: { es: '¿Qué tan importante es la calidad/precisión?', en: 'How important is quality/accuracy?' },
        options: [
            { id: 'speed', label: { es: 'Prefiero velocidad', en: 'I prefer speed' } },
            { id: 'balance', label: { es: 'Balanceado', en: 'Balanced' } },
            { id: 'max', label: { es: 'Lo mejor mercado (ej. GPT-4)', en: 'Best in market (e.g. GPT-4)' } }
        ]
    }
];

export default function RecomendadorIA({ allData }: RecomendadorProps) {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [recommendation, setRecommendation] = useState<IAData | null>(null);
    const lang = useStore(language);

    const handleOption = (optionId: string) => {
        const newAnswers = { ...answers, [QUESTIONS[step].id]: optionId };
        setAnswers(newAnswers);

        if (step < QUESTIONS.length - 1) {
            setStep(step + 1);
        } else {
            calculateRecommendation(newAnswers);
            setStep(step + 1); // Move to results
        }
    };

    const calculateRecommendation = (finalAnswers: Record<string, string>) => {
        // Simple logic engine
        let scores = allData.map(ia => ({ id: ia.id, score: 0 }));

        // Rule 1: Goal
        if (finalAnswers.goal === 'code') {
            scores.forEach(s => {
                const ia = allData.find(i => i.id === s.id)!;
                if (ia.category.includes('code')) s.score += 5;
                s.score += (ia.benchmarks.code / 20); // Add up to 5 points
            });
        }
        // Rule 2: Budget
        if (finalAnswers.budget === 'free') {
            scores.forEach(s => {
                const ia = allData.find(i => i.id === s.id)!;
                if (ia.pricing.free.available) s.score += 10;
                else s.score -= 100; // Penalize paid only
            });
        }

        // Sort by score (randomize ties slightly for visual variety if needed, but deterministic for now)
        scores.sort((a, b) => b.score - a.score);
        const topId = scores[0].id;
        setRecommendation(allData.find(ia => ia.id === topId) || allData[0]);
    };

    const reset = () => {
        setStep(0);
        setAnswers({});
        setRecommendation(null);
    };

    if (step >= QUESTIONS.length && recommendation) {
        return (
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 filter contrast-150 brightness-150"></div>
                <div className="relative z-10 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md shadow-inner border border-white/20">
                        <Sparkles className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">
                        {lang === 'es' ? `¡Tu IA ideal es ${recommendation.name}!` : `Your ideal AI is ${recommendation.name}!`}
                    </h3>
                    <p className="text-primary-100 mb-8 max-w-md mx-auto text-lg leading-relaxed">
                        {getLocalized(recommendation.description, lang)}
                    </p>

                    <div className="flex gap-4 justify-center">
                        <a href={`/tool/${recommendation.id}`} className="px-8 py-3 bg-white text-primary-600 font-bold rounded-full hover:bg-primary-50 transition-all hover:scale-105 shadow-lg">
                            {lang === 'es' ? 'Ver Detalles' : 'View Details'}
                        </a>
                        <button onClick={reset} className="px-8 py-3 bg-primary-800/40 text-white font-medium rounded-full hover:bg-primary-800/60 border border-white/10 flex items-center gap-2 backdrop-blur-sm transition-colors">
                            <RotateCcw className="w-4 h-4" /> {lang === 'es' ? 'Reiniciar' : 'Reset'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const currentQ = QUESTIONS[step];

    return (
        <div className="bg-white dark:bg-zinc-800/50 rounded-2xl w-full mx-auto p-8 md:p-12">
            <div className="flex justify-between items-center mb-8">
                <span className="text-xs font-bold text-primary-600 tracking-wider uppercase bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full">
                    {lang === 'es' ? 'Asistente Mágico' : 'Magic Assistant'}
                </span>
                <span className="text-xs text-zinc-400">
                    {lang === 'es' ? `Paso ${step + 1} de ${QUESTIONS.length}` : `Step ${step + 1} of ${QUESTIONS.length}`}
                </span>
            </div>

            <h3 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-white">
                {getLocalized(currentQ.text, lang)}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentQ.options.map((opt, i) => (
                    <button
                        key={opt.id}
                        onClick={() => handleOption(opt.id)}
                        className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-700 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-md hover:shadow-primary-500/10 hover:bg-white dark:hover:bg-zinc-800 text-left transition-all group relative overflow-hidden bg-zinc-50 dark:bg-zinc-900"
                        style={{ animationDelay: `${i * 50}ms` }}
                    >
                        <div className="flex items-center justify-between relative z-10">
                            <span className="font-semibold text-lg text-zinc-700 dark:text-zinc-200 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                                {getLocalized(opt.label, lang)}
                            </span>
                            <ChevronRight className="w-5 h-5 text-zinc-300 group-hover:text-primary-500 transition-transform group-hover:translate-x-1" />
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
