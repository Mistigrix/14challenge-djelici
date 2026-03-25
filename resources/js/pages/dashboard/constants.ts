// Couleurs du drapeau ivoirien
export const ORANGE = '#F77F00';
export const GREEN = '#009A44';
export const WHITE = '#FFFFFF';

// Variantes dérivées du drapeau
export const ORANGE_LIGHT = '#FFAD5C';
export const ORANGE_DARK = '#CC6600';
export const GREEN_LIGHT = '#33CC77';
export const GREEN_DARK = '#006B2E';
export const GOLD = '#C8A84B';
export const GOLD_LIGHT = '#E0C878';

// Couleurs héritées (conservation pour compatibilité)
export const BLUE = ORANGE_LIGHT;
export const RED = ORANGE_DARK;
export const PURPLE = GREEN_DARK;
export const TEAL = GREEN_LIGHT;
export const PINK = ORANGE_DARK;

export const PALETTE = [ORANGE, GREEN, GOLD, ORANGE_LIGHT, GREEN_LIGHT, ORANGE_DARK, GREEN_DARK, GOLD_LIGHT, '#FFD6A0'];

export const KEY_INDICATORS = [
    "Croissance du PIB (% annuel)",
    "Accès à l'électricité (% de la population)",
    "Espérance de vie à la naissance, femmes (années)",
    "Espérance de vie à la naissance, hommes (années)",
    "Taux de fertilité, total (naissances par femme)",
    "Taux de mortalité infantile, moins de 5 ans (pour 1 000)",
    "Prévalence du VIH, femmes (% des femmes âgées de 15 à 24 ans)",
    "Dépenses publiques en éducation (% du PIB)",
    "Croissance de la population (% annuel)",
    "Émissions de CO2 (tonnes métriques par habitant)",
    "Inscriptions à l'école, primaire (% brut)",
    "Agriculture, valeur ajoutée (% du PIB)",
    "Exportations de biens et de services (% du PIB)",
    "Importations de biens et de services (% du PIB)",
    "Dépenses militaires (% du PIB)",
];

export const TABS = [
    { id: 'economie', label: 'Économie' },
    { id: 'education', label: 'Éducation' },
    { id: 'sante', label: 'Santé' },
    { id: 'securite', label: 'Sécurité' },
    { id: 'sport', label: 'Sport' },
] as const;

export type TabId = (typeof TABS)[number]['id'];

export function fmt(n: number): string {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `${Math.round(n / 1_000)}K`;
    return n.toLocaleString('fr-FR');
}
