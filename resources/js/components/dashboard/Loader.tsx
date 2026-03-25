export default function Loader() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-[#FFF8F0] dark:bg-stone-950">
            {/* Barres animées aux couleurs du drapeau */}
            <div className="flex items-end gap-2">
                <div className="h-8 w-3 animate-bounce rounded-sm bg-[#F77F00]" style={{ animationDelay: '0ms', animationDuration: '800ms' }} />
                <div className="h-12 w-3 animate-bounce rounded-sm bg-white ring-1 ring-stone-200 dark:ring-stone-700" style={{ animationDelay: '150ms', animationDuration: '800ms' }} />
                <div className="h-10 w-3 animate-bounce rounded-sm bg-[#009A44]" style={{ animationDelay: '300ms', animationDuration: '800ms' }} />
            </div>

            {/* Nom du projet */}
            <div className="text-center">
                <h1 className="text-xl font-extrabold tracking-tight text-[#F77F00]">Djelici</h1>
                <p className="mt-1 text-xs text-stone-400 dark:text-stone-500">Chargement des données...</p>
            </div>

            {/* Barre de progression animée */}
            <div className="h-1 w-40 overflow-hidden rounded-full bg-stone-200 dark:bg-stone-800">
                <div className="h-full w-full origin-left animate-pulse rounded-full bg-gradient-to-r from-[#F77F00] via-white to-[#009A44]" />
            </div>
        </div>
    );
}
