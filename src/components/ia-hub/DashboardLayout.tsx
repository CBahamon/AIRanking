import { useState, type ReactNode } from 'react';
import { Home, BarChart2, MessageSquare, Menu, X, Settings, ExternalLink, Search, Box } from 'lucide-react';
import ThemeSelector from '../ThemeSelector';

interface DashboardLayoutProps {
    children: ReactNode;
    activePage: 'home' | 'compare' | 'prompts' | 'explore' | 'models';
    sidebarExtras?: ReactNode; // Slot for Filters (Home) or Toc (Other pages)
}

import { useStore } from '@nanostores/react';
import { language, setLanguage } from '../../lib/i18nStore';

export default function DashboardLayout({ children, activePage, sidebarExtras }: DashboardLayoutProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const lang = useStore(language); // State-based language

    const t = {
        home: { es: 'Inicio', en: 'Home' },
        explore: { es: 'Explorar', en: 'Explore' },
        models: { es: 'Modelos', en: 'Models' },
        compare: { es: 'Comparar', en: 'Compare' },
        prompts: { es: 'Prompts', en: 'Prompts' },
        brand: { es: 'IA Ranking', en: 'AI Ranking' }, // New Brand Name
        suggest: { es: 'Sugerir Cambio', en: 'Suggest Change' }
    };

    const navItems = [
        { id: 'home', label: t.home[lang], icon: Home, href: '/' },
        { id: 'explore', label: t.explore[lang], icon: Search, href: '/explore' },
        { id: 'models', label: t.models[lang], icon: Box, href: '/models' },
        { id: 'compare', label: t.compare[lang], icon: BarChart2, href: '/compare' },
        { id: 'prompts', label: t.prompts[lang], icon: MessageSquare, href: '/prompts' },
    ] as const;

    return (
        <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 font-sans">
            <ThemeSelector />

            {/* Mobile Backdrop */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setMobileMenuOpen(false)} />
            )}

            {/* Sidebar */}
            <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 
        transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        flex flex-col
      `}>
                {/* Logo Area */}
                <div className="h-16 flex items-center px-6 border-b border-zinc-100 dark:border-zinc-800/50 justify-between">
                    <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center text-white">
                            {lang === 'es' ? 'IA' : 'AI'}
                        </div>
                        <span>{lang === 'es' ? 'IA' : 'AI'} <span className="text-primary-600">Ranking</span></span>
                    </div>

                    {/* Language Toggle (Desktop/Mobile unified in sidebar header for simplicity or add to footer) */}
                    <div className="flex gap-1 bg-zinc-100 dark:bg-zinc-800 rounded-md p-0.5">
                        <button
                            onClick={() => setLanguage('es')}
                            className={`px-1.5 py-0.5 text-xs font-bold rounded ${lang === 'es' ? 'bg-white dark:bg-zinc-700 shadow-sm' : 'text-zinc-400 hover:text-zinc-600'}`}
                        >
                            ES
                        </button>
                        <button
                            onClick={() => setLanguage('en')}
                            className={`px-1.5 py-0.5 text-xs font-bold rounded ${lang === 'en' ? 'bg-white dark:bg-zinc-700 shadow-sm' : 'text-zinc-400 hover:text-zinc-600'}`}
                        >
                            EN
                        </button>
                    </div>

                    <button onClick={() => setMobileMenuOpen(false)} className="md:hidden ml-auto text-zinc-400">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Scrollable Nav Area */}
                <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8 no-scrollbar">

                    {/* Main Navigation */}
                    <nav className="space-y-1">
                        {navItems.map(item => {
                            const isActive = activePage === item.id;
                            return (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all font-medium ${isActive ? 'bg-zinc-900 text-white shadow-lg shadow-zinc-900/10 dark:bg-white dark:text-black' : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200'}`}
                                >
                                    <item.icon className={`w-5 h-5 ${isActive ? 'text-white dark:text-black' : 'text-zinc-400'}`} />
                                    {item.label}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Sidebar Extras (Filters etc) */}
                    {sidebarExtras && (
                        <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                            {sidebarExtras}
                        </div>
                    )}

                </div>

                {/* Footer Area */}
                <div className="p-4 border-t border-zinc-100 dark:border-zinc-800/50 flex flex-col gap-2">
                    <a href="https://github.com/CBahamon" target="_blank" className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                        <div className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                            <ExternalLink className="w-3 h-3" />
                        </div>
                        <span>{t.suggest[lang]}</span>
                    </a>
                </div>
            </aside>

            {/* Main Content Wrapper */}
            <main className="flex-1 flex flex-col h-full relative overflow-hidden">
                {/* Mobile Header Toggle */}
                <div className="md:hidden flex-none h-16 flex items-center px-4 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                    <button onClick={() => setMobileMenuOpen(true)} className="p-2 -ml-2 text-zinc-600">
                        <Menu className="w-6 h-6" />
                    </button>
                    <span className="font-bold ml-2">
                        {lang === 'es' ? 'IA' : 'AI'} <span className="text-primary-600">Ranking</span>
                    </span>
                </div>

                {/* Scrollable Content Slot */}
                <div className="flex-1 overflow-y-auto scroll-smooth">
                    {children}
                </div>
            </main>

        </div>
    );
}
