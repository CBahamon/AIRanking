import { clsx } from 'clsx';

interface CategoryFilterProps {
    categories: string[];
    selected: string | null;
    onSelect: (category: string | null) => void;
}

export default function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
    return (
        <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar mask-gradient-x">
            <button
                onClick={() => onSelect(null)}
                className={clsx(
                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors border",
                    selected === null
                        ? "bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-black dark:border-white"
                        : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-700"
                )}
            >
                Todas
            </button>

            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onSelect(selected === cat ? null : cat)}
                    className={clsx(
                        "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors border capitalize",
                        selected === cat
                            ? "bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-black dark:border-white"
                            : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-700"
                    )}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}
