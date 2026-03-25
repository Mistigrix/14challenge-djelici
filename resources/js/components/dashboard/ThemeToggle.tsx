interface ThemeToggleProps {
    isDark: boolean;
    onToggle: () => void;
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
    return (
        <button
            onClick={onToggle}
            title={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-base backdrop-blur-sm transition hover:bg-white/30 cursor-pointer"
        >
            {isDark ? '☀️' : '🌙'}
        </button>
    );
}
