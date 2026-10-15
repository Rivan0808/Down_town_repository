export type FragranceCategory = 'all' | 'woody' | 'aquatic' | 'floral' | 'amber' | 'citrus';

export type FlaconSize = 20 | 50;

export interface Fragrance {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  category: FragranceCategory[];
  rating: number;
  image: string;
  description: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  heritage: string;
  persona: 'The Vanguard' | 'The Sovereign' | 'The Alchemist' | 'The Muse';
  concentration: string;
  longevity: string;
  sillage: 'Intimate' | 'Moderate' | 'Enormous' | 'Imperial';
  season: string;
  origin: string;
}

export interface CartItem {
  id: string;
  fragranceId?: string;
  name: string;
  size: FlaconSize;
  price: number;
  image: string;
  quantity: number;
  isCustomCoffret?: boolean;
  coffretItems?: string[];
  monogram?: string;
}

export interface BespokeCoffretSelection {
  vialCount: 3 | 5;
  selectedFragranceIds: string[];
  monogramText: string;
  giftBoxColor: 'Imperial Plum' | 'Nocturne Noir' | 'Gilded Alabaster';
}

export type ActiveTab = 'collection' | 'olfactory-notes' | 'bespoke-blends' | 'heritage' | 'scent-quiz';
