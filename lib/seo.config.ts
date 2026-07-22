// ─── SEO Configuration ────────────────────────────────────────────────────────
// Centralne miejsce do zmiany ustawień SEO.
//
// PRZED WDROŻENIEM NA madejpak.pl:
//   1. Zmień BLOCK_INDEXING na false
//   2. Upewnij się że SITE_URL to 'https://madejpak.pl'
//   3. Dodaj OG image do /public/og-image.jpg (1200x630px)

// ─── Przełącznik blokady indeksowania ────────────────────────────────────────
// true  = robots.txt blokuje wszystkich crawlerów (środowisko testowe)
// false = robots.txt pozwala na indeksowanie (produkcja)
export const BLOCK_INDEXING = false;

// ─── Docelowy URL produkcyjny ─────────────────────────────────────────────────
export const SITE_URL = 'https://madejpak.pl';

// ─── Dane firmy ───────────────────────────────────────────────────────────────
export const SITE_NAME = 'MadejPak';
export const SITE_DESCRIPTION =
  'Projektujemy i integrujemy linie pakujące, wdrażamy automatykę i robotyzację oraz dostarczamy maszyny dla przemysłu.';

// ─── OG image default ─────────────────────────────────────────────────────────
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

// ─── Dane kontaktowe (dla JSON-LD) ────────────────────────────────────────────
export const COMPANY = {
  name:          'PPHU MadejPak Sp. z o.o.',
  legalName:     'PPHU MADEJPAK SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
  url:           SITE_URL,
  logo:          `${SITE_URL}/MadejPakLogo.svg`,
  email:         'biuro@madejpak.pl',
  phone:         '+48123454397',
  foundingYear:  '2000',
  taxID:         '8681986442',   // NIP: 868-198-64-42
  vatID:         'PL8681986442', // VAT EU
  address: {
    streetAddress:   'Dziewin 333',
    addressLocality: 'Dziewin',
    postalCode:      '32-708',
    addressRegion:   'małopolskie',
    addressCountry:  'PL',
  },
  sameAs: [
    'https://www.linkedin.com/company/madejpak',  // TODO: uzupełnić jeśli istnieje
  ],
};

// ─── Kompetencje (JSON-LD knowsAbout) ─────────────────────────────────────────
export const KNOWS_ABOUT = [
  'Projektowanie linii pakujących',
  'Automatyzacja pakowania',
  'Robotyzacja pakowania',
  'Integracja linii produkcyjnych',
  'Systemy paletyzacji',
  'Flow pack / maszyny poziome',
  'Maszyny pionowe VFFS',
  'Workowanie i Big Bag',
  'Serwis maszyn pakujących',
  'Własna produkcja maszyn i chwytaków',
];

// ─── Wybrani klienci (E-E-A-T / SEO — firmy, dla których realizowaliśmy wdrożenia) ─
// Rozpoznawalne marki; pełna lista widoczna na stronie w pasku „Zaufali nam".
export const NOTABLE_CLIENTS = [
  'Synthos', 'Qemetica', 'Solbet', 'Siarkopol', 'Grupa Azoty',
  'Makarony Polskie', 'Gold Drop', 'ESAB', 'Bolsius', 'PCO Group',
  'Planta', 'Certech', 'Lazur', 'Dankoal',
];
