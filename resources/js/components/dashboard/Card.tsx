interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
    return (
        <div className={`overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-orange-100 sm:p-5 dark:bg-stone-900 dark:ring-stone-800 ${className}`}>
            {children}
        </div>
    );
}
