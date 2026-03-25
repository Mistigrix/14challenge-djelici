import type { LucideIcon } from 'lucide-react';
import { ORANGE } from '@/pages/dashboard/constants';

interface StatCardProps {
    label: string;
    value: string;
    sub?: string;
    color?: string;
    icon?: LucideIcon;
}

export default function StatCard({ label, value, sub, color = ORANGE, icon: Icon }: StatCardProps) {
    return (
        <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-orange-100 sm:p-5 dark:bg-stone-900 dark:ring-stone-800">
            <div className="flex items-start justify-between">
                <p className="text-xs font-medium text-stone-500 sm:text-sm dark:text-stone-400">{label}</p>
                {Icon && <Icon size={18} className="shrink-0 text-stone-400 dark:text-stone-500 sm:size-5" />}
            </div>
            <p className="mt-1 text-xl font-bold tracking-tight sm:text-2xl" style={{ color }}>
                {value}
            </p>
            {sub && <p className="mt-0.5 text-xs text-stone-400 dark:text-stone-500">{sub}</p>}
        </div>
    );
}
