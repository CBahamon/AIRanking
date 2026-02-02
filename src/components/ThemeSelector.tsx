import { useState, useEffect } from 'react';
import { Palette, Check, Moon, Sun, Monitor } from 'lucide-react';

type Theme = 'default' | 'purple' | 'mint' | 'cyber';
type Mode = 'light' | 'dark' | 'system';

interface ThemeColor {
    id: Theme;
    name: string;
    color: string;
}

const themes: ThemeColor[] = [
    { id: 'default', name: 'Original', color: '#3b82f6' },
    { id: 'purple', name: 'Purple Dream', color: '#a855f7' },
    { id: 'mint', name: 'Mint Fresh', color: '#10b981' },
    { id: 'cyber', name: 'Cyber Blue', color: '#06b6d4' },
];

export default function ThemeSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState<Theme>('default');
    const [currentMode, setCurrentMode] = useState<Mode>('system');

    useEffect(() => {
        // Load saved settings
        const savedTheme = localStorage.getItem('theme-palette') as Theme || 'default';
        const savedMode = localStorage.getItem('theme-mode') as Mode || 'system';

        setCurrentTheme(savedTheme);
        setCurrentMode(savedMode);

        // Apply initial settings
        applyTheme(savedTheme);
        applyMode(savedMode);
    }, []);

    const applyTheme = (theme: Theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        if (theme === 'default') {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', theme);
        }
        localStorage.setItem('theme-palette', theme);
    };

    const applyMode = (mode: Mode) => {
        const isDark =
            mode === 'dark' ||
            (mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme-mode', mode);
    };

    const handleThemeChange = (theme: Theme) => {
        setCurrentTheme(theme);
        applyTheme(theme);
    };

    const handleModeChange = (mode: Mode) => {
        setCurrentMode(mode);
        applyMode(mode);
    };

    return (
        <div className="fixed top-4 right-4 z-50">
            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:scale-105 transition-transform"
                    aria-label="Theme Settings"
                >
                    <Palette className="w-5 h-5" />
                </button>

                {isOpen && (
                    <div className="absolute top-12 right-0 w-64 bg-white dark:bg-zinc-950 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 p-4 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-sm text-zinc-900 dark:text-white">Apariencia</h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300"
                            >
                                Cerrar
                            </button>
                        </div>

                        {/* Mode Selector */}
                        <div className="grid grid-cols-3 gap-1 p-1 bg-zinc-100 dark:bg-zinc-900/50 rounded-lg mb-6">
                            {[
                                { id: 'light', icon: Sun, label: 'Claro' },
                                { id: 'system', icon: Monitor, label: 'Auto' },
                                { id: 'dark', icon: Moon, label: 'Oscuro' },
                            ].map((mode) => (
                                <button
                                    key={mode.id}
                                    onClick={() => handleModeChange(mode.id as Mode)}
                                    className={`
                    flex flex-col items-center justify-center py-2 rounded-md text-[10px] font-medium transition-all
                    ${currentMode === mode.id
                                            ? 'bg-white dark:bg-zinc-800 text-primary-600 shadow-sm'
                                            : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
                                        }
                  `}
                                >
                                    <mode.icon className="w-4 h-4 mb-1" />
                                    {mode.label}
                                </button>
                            ))}
                        </div>

                        {/* Palette Selector */}
                        <div>
                            <h4 className="text-xs font-medium text-zinc-500 mb-3 uppercase tracking-wider">Color de énfasis</h4>
                            <div className="space-y-1">
                                {themes.map((theme) => (
                                    <button
                                        key={theme.id}
                                        onClick={() => handleThemeChange(theme.id)}
                                        className={`
                      w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors
                      ${currentTheme === theme.id
                                                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                                                : 'hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300'
                                            }
                    `}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-4 h-4 rounded-full border border-black/10 dark:border-white/10"
                                                style={{ backgroundColor: theme.color }}
                                            />
                                            {theme.name}
                                        </div>
                                        {currentTheme === theme.id && <Check className="w-4 h-4" />}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
