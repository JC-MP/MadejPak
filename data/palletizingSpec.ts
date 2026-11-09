// ─── Paletyzacja: typy i reguły doboru (importowane także po stronie klienta) ──
// Teksty PL/EN są w data/palletizingData.ts i trafiają do doboru jako props.

export type PalLang = 'pl' | 'en';
export type ProductId = 'worki-ciezkie' | 'worki-sypkie' | 'kartony' | 'nietypowe';
export type VariantId = 'paletyzacja' | 'owijarka' | 'cobot';
export type StageId = 'odbior' | 'pakowanie' | 'paletyzacja' | 'zabezpieczenie';
export type ConditionId = 'pyl' | 'wilgoc' | 'chlodnia';

export const PRODUCT_IDS: ProductId[] = ['worki-ciezkie', 'worki-sypkie', 'kartony', 'nietypowe'];
export const STAGE_IDS: StageId[] = ['odbior', 'pakowanie', 'paletyzacja', 'zabezpieczenie'];
export const CONDITION_IDS: ConditionId[] = ['pyl', 'wilgoc', 'chlodnia'];

// Cobot tylko dla lekkich kartonów. Próg (indeks przedziału masy w MASS_OPTIONS)
// do potwierdzenia przez techników: udźwig cobota pomniejszony o masę chwytaka.
export const COBOT_MAX_MASS_INDEX = 1;

export interface ProductSpec {
  id: ProductId;
  variants: VariantId[];          // pusta lista = rozwiązanie projektowane indywidualnie
  references: string[];           // slugi z data/realizacjeData.ts
  packingHref: string | null;     // co oznacza etap „pakowanie” dla tego produktu
}

export const PRODUCTS: Record<ProductId, ProductSpec> = {
  'worki-ciezkie': { id: 'worki-ciezkie', variants: ['paletyzacja', 'owijarka'], references: ['europol', 'siarkopol', 'planta', 'promotor'], packingHref: '/maszyny/pionowe-maszyny-pakujace' },
  'worki-sypkie':  { id: 'worki-sypkie',  variants: ['paletyzacja', 'owijarka'], references: ['certech'], packingHref: '/maszyny/pionowe-maszyny-pakujace' },
  kartony:         { id: 'kartony',       variants: ['paletyzacja', 'owijarka', 'cobot'], references: ['dobis', 'alexpol', 'golddrop', 'lazur'], packingHref: '/maszyny/kartonowanie' },
  nietypowe:       { id: 'nietypowe',     variants: [], references: [], packingHref: null },
};

export const CONDITION_REFERENCES: Record<ConditionId, string[]> = {
  pyl: ['siarkopol', 'promotor', 'certech'],
  wilgoc: ['lazur'],
  chlodnia: ['lazur'],
};

export const OWN_MACHINES = [
  { id: 'chwytaki-i-manipulatory', image: '/images/machines/madejpak/chwytak-manipulator.jpg' },
  { id: 'desztaplery-palet',       image: '/images/machines/madejpak/desztapler.jpg' },
  { id: 'podajniki-tasmowe',       image: '/images/machines/madejpak/podajnik-tasmowy.jpg' },
  { id: 'magazyny-i-bufory',       image: '/images/machines/madejpak/magazyn-produktow.jpg' },
] as const;

export const PAGE_REFERENCES = ['europol', 'siarkopol', 'planta', 'promotor', 'certech', 'dobis', 'alexpol', 'lazur'];

export interface RefCard {
  slug: string;
  klient: string;
  tytul: string;
  logo: string;
  video: boolean;
  href: string;
  logoOnDark: boolean;
}

// Logotypy w całości białe (na przezroczystym tle) — giną na białym kafelku.
export const LIGHT_LOGOS = ['dobis'];

export const SELECT_EVENT = 'mp:palletizing-select';

// Obrazy w kartach wariantów. Rendery MadejPak (dark) zawsze na stałym ciemnym tle.
export const VARIANT_MEDIA: Record<VariantId, { image: string; dark: boolean; fit: 'cover' | 'contain'; video: string | null }> = {
  paletyzacja: { image: '/images/machines/madejpak/desztapler.jpg', dark: true, fit: 'cover', video: '#w-ruchu' },
  owijarka: { image: '/images/machines/wrapping-p60.jpg', dark: false, fit: 'contain', video: null },
  cobot: { image: '/images/palletizing/cobot-kompakt.jpg', dark: false, fit: 'cover', video: '/realizacje/alexpol' },
};

// uploadDate i duration odczytane ze stron filmów na YouTube (kanał Madejpak) — wymagane dla VideoObject.
export const MODULE_VIDEOS = [
  { id: 'desztaplery-palet', youtubeId: 'FqWWCK1Dtgc', uploadDate: '2026-07-22T00:22:25-07:00', duration: 'PT29S' },
  { id: 'chwytaki-i-manipulatory', youtubeId: '6lWOEPsGIr4', uploadDate: '2026-07-22T00:20:40-07:00', duration: 'PT39S' },
  { id: 'podajniki-paletowe', youtubeId: 'QUablwXX9y4', uploadDate: '2026-07-22T00:24:21-07:00', duration: 'PT25S' },
] as const;

// Rysunki 3D przykładowych linii (od Jakuba, 11.2026) — w kartach pakietów i w wyniku doboru.
export const PRODUCT_LINE_IMAGES: Partial<Record<ProductId, { src: string; width: number; height: number }>> = {
  'worki-ciezkie': { src: '/images/palletizing/linia-pellet.jpg', width: 1600, height: 900 },
  'worki-sypkie': { src: '/images/palletizing/linia-male-worki-owijarka.jpg', width: 1600, height: 800 },
  kartony: { src: '/images/palletizing/linia-kartony.jpg', width: 1600, height: 1186 },
};
