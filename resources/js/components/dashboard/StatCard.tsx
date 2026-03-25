import { ORANGE } from '@/pages/dashboard/constants';

interface StatCardProps {
    label: string;
    value: string;
    sub?: string;
    color?: string;
    icon?: string;
}

export default function StatCard({ label, value, sub, color = ORANGE, icon }: StatCardProps) {
    return (
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-orange-100 dark:bg-stone-900 dark:ring-stone-800">
            <div className="flex items-start justify-between">
                <p className="text-sm font-medium text-stone-500 dark:text-stone-400">{label}</p>
                {icon && <span className="text-xl">{icon}</span>}
            </div>
            <p className="mt-1 text-2xl font-bold tracking-tight" style={{ color }}>
                {value}
            </p>
            {sub && <p className="mt-0.5 text-xs text-stone-400 dark:text-stone-500">{sub}</p>}
        </div>
    );
}
