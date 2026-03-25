import { Head, Link } from '@inertiajs/react';
import { GraduationCap, Heart, Info, Shield, Trophy, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import Loader from '@/components/dashboard/Loader';
import ThemeToggle from '@/components/dashboard/ThemeToggle';
import { useTheme } from '@/hooks/useTheme';
import { TABS, type TabId } from './dashboard/constants';

const TAB_ICONS: Record<TabId, LucideIcon> = {
    economie: TrendingUp,
    education: GraduationCap,
    sante: Heart,
    securite: Shield,
    sport: Trophy,
};
import EconomieSection from './dashboard/EconomieSection';
import EducationSection from './dashboard/EducationSection';
import SanteSection from './dashboard/SanteSection';
import SecuriteSection from './dashboard/SecuriteSection';
import SportSection from './dashboard/SportSection';
import type { DashboardProps } from './dashboard/types';

export default function Dashboard({ economie, education, sante, securite, sport }: DashboardProps) {
    const [activeTab, setActiveTab] = useState<TabId>('economie');
    const [loading, setLoading] = useState(true);
    const { isDark, toggle } = useTheme();

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loader />;

    return (
        <>
            <Head title="Djelici" />

            <div className="min-h-screen bg-[#FFF8F0] pb-20 md:pb-0 dark:bg-stone-950">
                {/* Header */}
                <header className="relative overflow-hidden bg-[#F77F00]">
                    <div className="absolute inset-0 flex">
                        <div className="w-1/3 bg-[#F77F00]" />
                        <div className="w-1/3 bg-white/15" />
                        <div className="w-1/3 bg-[#009A44]" />
                    </div>
                    <div className="relative mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="flex h-8 w-5 shrink-0 overflow-hidden rounded shadow-lg sm:h-10 sm:w-7">
                                    <div className="flex-1 bg-[#F77F00]" />
                                    <div className="flex-1 bg-white" />
                                    <div className="flex-1 bg-[#009A44]" />
                                </div>
                                <div>
                                    <h1 className="text-lg font-extrabold tracking-tight text-white sm:text-2xl">
                                        Djelici
                                    </h1>
                                    <p className="hidden text-xs font-medium text-orange-100 sm:block">
                                        Côte d'Ivoire — Données statistiques nationales
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <ThemeToggle isDark={isDark} onToggle={toggle} />
                                <Link
                                    href="/about"
                                    className="flex items-center gap-2 rounded-xl bg-white/20 p-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/30 sm:px-4"
                                >
                                    <Info size={18} className="sm:hidden" />
                                    <span className="hidden sm:inline">À propos</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Onglets desktop */}
                <div className="sticky top-0 z-10 hidden border-b border-orange-100 bg-white shadow-sm md:block dark:border-stone-800 dark:bg-stone-900">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <nav className="flex justify-center overflow-x-auto">
                            {TABS.map((tab) => {
                                const Icon = TAB_ICONS[tab.id];
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex cursor-pointer shrink-0 items-center gap-2 border-b-2 px-5 py-4 text-sm font-medium transition-colors ${activeTab === tab.id
                                                ? 'border-[#F77F00] text-[#F77F00]'
                                                : 'border-transparent text-stone-500 hover:border-orange-200 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200'
                                            }`}
                                    >
                                        <Icon size={15} />
                                        <span>{tab.label}</span>
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                </div>

                {/* Contenu principal */}
                <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                    {activeTab === 'economie' && (
                        <EconomieSection population={economie.population} worldBank={economie.worldBank} />
                    )}
                    {activeTab === 'education' && (
                        <EducationSection
                            teachers={education.teachers}
                            byRegion={education.byRegion}
                            byPeriod={education.byPeriod}
                        />
                    )}
                    {activeTab === 'sante' && (
                        <SanteSection
                            covid={sante.covid}
                            accidents={sante.accidents}
                            accidentsByType={sante.accidentsByType}
                            hivCoverage={sante.hivCoverage}
                        />
                    )}
                    {activeTab === 'securite' && <SecuriteSection military={securite.military} />}
                    {activeTab === 'sport' && <SportSection stadiums={sport.stadiums} />}
                </main>

                <footer className="mt-8 hidden border-t border-orange-100 bg-white py-6 md:block dark:border-stone-800 dark:bg-stone-900">
                    <div className="mx-auto max-w-7xl px-4 text-center text-xs text-stone-400 dark:text-stone-500 sm:px-6 lg:px-8">
                        <p>CHALLENGE 14-14-14 // JOUR 10 // MARS 2026</p>
                    </div>
                </footer>

                {/* Bottom navigation mobile */}
                <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-orange-100 bg-white/95 backdrop-blur-md md:hidden dark:border-stone-800 dark:bg-stone-900/95">
                    <div className="flex items-center justify-around">
                        {TABS.map((tab) => {
                            const Icon = TAB_ICONS[tab.id];
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex flex-1 cursor-pointer flex-col items-center gap-1 py-3 transition-colors ${isActive ? 'text-[#F77F00]' : 'text-stone-400 dark:text-stone-500'}`}
                                >
                                    <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
                                    <span className="text-[10px] font-medium">{tab.label}</span>
                                    {isActive && (
                                        <div className="absolute top-0 h-0.5 w-10 rounded-full bg-[#F77F00]" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </nav>
            </div>
        </>
    );
}
