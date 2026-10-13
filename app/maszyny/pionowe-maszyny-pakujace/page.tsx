import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE, COMPANY } from '@/lib/seo.config';
import LeadForm from './LeadForm';
import TrustDifferentiator from '@/components/sections/TrustDifferentiator';
import { REALIZACJE } from '@/data/realizacjeData';

const PAGE_URL = `${SITE_URL}/maszyny/pionowe-maszyny-pakujace`;

export const metadata: Metadata = {
  title: 'Pionowe maszyny pakujące VFFS Essegi – modele i dobór',
  description:
    'Jak działa pionowa maszyna pakująca VFFS, rodzaje worków i dobór dozowania. Modele Essegi F700–F1400, od 50 g do 50 kg — dobór, integracja i serwis MadejPak.',
  keywords: [
    // intencja zakupowa
    'pionowe maszyny pakujące', 'VFFS', 'pionowa maszyna pakująca',
    'maszyna VFFS', 'automat pakujący sypkie', 'maszyna form-fill-seal',
    'linia do pakowania torebek', 'maszyna do pakowania worków',
    // modele Essegi
    'Essegi VFFS', 'Essegi F700', 'Essegi F1000', 'Essegi F1200', 'Essegi F8004S',
    'Essegi maszyna pakująca', 'maszyna Essegi Polska',
    // produkty
    'pakowanie produktów sypkich', 'pakowanie mąki', 'pakowanie kawy',
    'pakowanie granulatów', 'pakowanie proszków', 'pakowanie przypraw',
    'pakowanie makaronu', 'pakowanie pasz', 'pakowanie worków 25 kg',
    // techniczne
    'form-fill-seal pionowy', 'maszyna do torebek pillow bag',
    'maszyna zgrzewająca worki', 'maszyna do pakowania z folii',
    // integracja
    'linia pakująca z wagą', 'waga wielogłowicowa VFFS',
    'integrator maszyn pakujących Polska', 'MadejPak maszyny pakujące',
    // poradnik
    'jak działa maszyna VFFS', 'budowa maszyny pakującej', 'tubus formujący',
    'worek pillow', 'worek gusset', 'worek stabilo', 'worek z płaskim dnem',
    'folia do maszyny pakującej', 'dozowanie objętościowe', 'waga taśmowa',
    'Essegi F1300', 'Essegi F1400 COMBINED', 'worek w kartonie bag-in-box',
    // long-tail
    'ile kosztuje maszyna VFFS', 'maszyna pakująca do 25 kg',
    'pionowa maszyna pakująca dla małej firmy',
    'automatyczne pakowanie produktów sypkich',
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: PAGE_URL,
    languages: {
      pl: PAGE_URL,
      en: `${SITE_URL}/en/maszyny/pionowe-maszyny-pakujace`,
    },
  },
  openGraph: {
    type:        'website',
    url:         PAGE_URL,
    siteName:    'MadejPak',
    title:       'Pionowe maszyny pakujące VFFS Essegi – jak działają i jak je dobrać | MadejPak',
    description: 'Zasada działania VFFS, budowa maszyny, rodzaje worków i folii, dozowanie. Essegi F700–F1400 od 50 g do 50 kg — autoryzowany przedstawiciel Essegi w Polsce.',
    images: [{ url: `${SITE_URL}/images/interpack/essegi-2.jpg`, width: 1200, height: 800, alt: 'Essegi VFFS — pionowe maszyny pakujące MadejPak' }],
    locale:      'pl_PL',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Pionowe Maszyny Pakujące VFFS Essegi | MadejPak',
    description: 'Jak działa maszyna VFFS, rodzaje worków, dozowanie i dobór modelu. Essegi F700–F1400 od 50 g do 50 kg — MadejPak.',
    images:      [`${SITE_URL}/images/interpack/essegi-2.jpg`],
  },
};

// FAQ — treść widoczna na stronie i w schemacie FAQPage (musi być identyczna)
const FAQ = [
  { q: 'Ile worków na godzinę zrobi pionowa maszyna pakująca?', a: 'Katalogowo od kilku do 30 worków na minutę — zależnie od modelu i wersji. Na przykład F1000: MEC 10–14, SYNCRO 16–22, Motion do 30 worków/min. Realną wydajność dla Twojego produktu potwierdzamy po doborze dozowania i analizie końca linii: jeśli maszyna robi 20 worków/min, a paletyzacja 15, cała linia nie osiągnie 20 bez bufora.' },
  { q: 'Czym różni się dozowanie wagowe od objętościowego?', a: 'Waga odmierza masę netto, np. 15 kg. Dozownik objętościowy odmierza objętość, np. 20 l ziemi. Gdy gęstość produktu zmienia się z wilgotnością, ta sama objętość nie zawsze waży tyle samo — wtedy dobieramy ważenie.' },
  { q: 'Czy szerokość folii to szerokość gotowego worka?', a: 'Nie. Płaska folia owija się wokół tubusa formującego i jest łączona zgrzewem wzdłużnym, więc wstęga jest szersza niż gotowy worek, a przy fałdach bocznych dochodzą zakładki. Ostateczny format ustalamy z rysunku opakowania.' },
  { q: 'Czy na worku może być logo, data i numer partii?', a: 'Tak. Grafika jest na folii z nadrukiem, a fotokomórka znacznika nadruku pilnuje jej położenia względem zgrzewu i cięcia. Dane zmienne — datę, partię, kod — nanosi drukarka zamontowana na maszynie.' },
  { q: 'Czy każda folia będzie pracować na maszynie?', a: 'Nie. Sprawdzamy strukturę i grubość folii, zgrzewalność, odporność na przebicie oraz wymagania, np. kontakt z żywnością. Dlatego prosimy o próbkę folii lub jej specyfikację od dostawcy.' },
  { q: 'Czy maszyna pionowa może zapakować worek do kartonu?', a: 'Standardowa maszyna VFFS formuje worek z folii. Do worka w kartonie (bag-in-box) służy Essegi F1400 COMBINED. Jeśli do kartonu mają trafiać gotowe worki, potrzebna jest osobna kartoniarka zbiorcza współpracująca z maszyną VFFS.' },
  { q: 'Czy można zautomatyzować tylko paletyzację, bez wymiany pakowaczki?', a: 'Tak. Koniec linii — odbiór, obracanie i spłaszczanie worków, robot lub cobot, paletyzację i owijanie palet — możemy zautomatyzować przy istniejącej maszynie pakującej.' },
  { q: 'Co przygotować do zapytania ofertowego?', a: 'Nazwę i właściwości produktu, masę lub objętość worka, wymaganą wydajność, rodzaj opakowania oraz informację, co dzieje się z workiem dalej. Najlepiej z próbką produktu, zdjęciem obecnego worka lub rysunkiem i zdjęciami miejsca na linię.' },
];

// Wersje maszyn Essegi — krótkie wyjaśnienie oznaczeń z tabel
const VERSIONS = [
  { name: 'PN', desc: 'Ruch zespołu zgrzewającego realizują elementy pneumatyczne — w mniejszych modelach, np. F700.' },
  { name: 'MEC', desc: 'Napęd mechaniczny. W F1000 z jedną wagą taśmową: 10–14 worków/min.' },
  { name: 'SYNCRO', desc: 'Zespół zgrzewający z serwonapędem (silnik bezszczotkowy); może różnić się też układ ważenia — F1000 z dwiema wagami: 16–22 worki/min.' },
  { name: 'MOTION SU&SO', desc: 'Ciągły przesuw folii; zespół zgrzewu poprzecznego porusza się synchronicznie z nią — F1000: do 30 worków/min.' },
  { name: 'EcoFocus', desc: 'Gotowa konfiguracja F1000 pod pellet 5–15 kg: waga B/N-K40 i taśma odbiorcza, 7–10 worków/min.' },
];

// Worek w kartonie vs kartonowanie zbiorcze — trzy różne potrzeby
const CARTON_NEEDS = [
  { need: 'Worek w kartonie (bag-in-box)', solution: 'Essegi F1400 COMBINED — formuje i napełnia worek, a potem automatycznie wkłada go do kartonu' },
  { need: 'Kilka gotowych worków w kartonie', solution: 'Kartoniarka zbiorcza współpracująca z maszyną VFFS' },
  { need: 'Produkt luzem prosto do kartonu', solution: 'Indywidualnie projektowany system dozowania do kartonu, często z wkładką ochronną' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemList',
      name: 'Pionowe maszyny pakujące VFFS Essegi',
      description: 'Rodzina pionowych maszyn pakujących VFFS Essegi dostępnych przez MadejPak — autoryzowanego partnera w Polsce.',
      url: PAGE_URL,
      numberOfItems: 4,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Essegi F700', url: `${PAGE_URL}/essegi-f700` },
        { '@type': 'ListItem', position: 2, name: 'Essegi F1000', url: `${PAGE_URL}/essegi-f1000` },
        { '@type': 'ListItem', position: 3, name: 'Essegi F1200 / F1300', url: `${PAGE_URL}/essegi-f1200` },
        { '@type': 'ListItem', position: 4, name: 'Essegi F8004S', url: `${PAGE_URL}/essegi-f8004s` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'MadejPak',                       item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Maszyny',                        item: `${SITE_URL}/maszyny` },
        { '@type': 'ListItem', position: 3, name: 'Pionowe maszyny pakujące VFFS',  item: PAGE_URL },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id':   `${SITE_URL}/#organization`,
      name:    COMPANY.name,
      url:     COMPANY.url,
      telephone: COMPANY.phone,
      email:   COMPANY.email,
      address: {
        '@type':           'PostalAddress',
        streetAddress:     COMPANY.address.streetAddress,
        addressLocality:   COMPANY.address.addressLocality,
        postalCode:        COMPANY.address.postalCode,
        addressRegion:     COMPANY.address.addressRegion,
        addressCountry:    COMPANY.address.addressCountry,
      },
    },
  ],
};

// ─── Design tokens ──────────────────────────────────────────────────────────
const BG      = 'var(--bg)';
const BG_CARD = 'var(--bg-card)';
const BG_ALT  = 'var(--bg-alt)';
const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

function ArrowRight() {
  return (
    <Box
      component="svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      sx={{ width: 13, height: 13, flexShrink: 0, transition: 'transform 0.15s ease' }}
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Box>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const ESSEGI_SERIES = [
  {
    model: 'F700',
    label: 'Seria F700',
    scope: 'Produkty spożywcze i drobne granulaty',
    desc: 'Kompaktowa maszyna VFFS do pakowania żywności i drobnych granulatów. Dostępna z kubkowym dozownikiem objętościowym, vibro-kanałowymi systemami wagowymi i pionowym dozownikiem ślimakowym.',
    products: ['Makaron krótki, ryż, kasza', 'Kawa, kakao, przyprawy, sól, cukier', 'Suszone owoce, orzechy, nasiona', 'Karma dla zwierząt (pet food)', 'Mrożonki, groszek, warzywa'],
    params: [
      { label: 'Zakres wagowy', value: '50 g – 3 kg' },
      { label: 'Max. format worka', value: '320 × 420 mm' },
    ],
    dosing: ['Dozownik kubkowy (DT)', 'Wagowy wibro-kanałowy (B/V-K)', 'Pionowy dozownik ślimakowy (DV5000)'],
    href: '/maszyny/pionowe-maszyny-pakujace/essegi-f700',
  },
  {
    model: 'F1000',
    label: 'Seria F1000',
    scope: 'Proszki, granulaty przemysłowe, materiały budowlane',
    desc: 'Szeroka rodzina maszyn VFFS do produktów proszkowych, granulowanych i materiałów budowlanych. Dostępna w wersjach standard, EcoFocus i Motion SU&SO — z różnymi systemami dozowania.',
    products: ['Mąka, skrobia, mleko w proszku', 'Proszki do prania, środki czyszczące', 'Cement, tynk, mieszanki budowlane', 'Granulat drzewny (pellet)', 'Piasek, żwir, kruszywa'],
    params: [
      { label: 'Warianty', value: 'Standard / EcoFocus / Motion SU&SO / Stone' },
      { label: 'Dozowanie', value: 'Taśmowe, podwójno-ślimakowe, objętościowe' },
    ],
    dosing: ['Waga taśmowa (B/N-K)', 'Waga dwuślimakowa (B/2C)', 'Objętościowy taśmowy (DT10)', 'Dozownik do cieczy'],
    href: '/maszyny/pionowe-maszyny-pakujace/essegi-f1000',
  },
  {
    model: 'F1200 / F1300',
    label: 'Seria F1200 / F1300',
    scope: 'Duże worki — granulaty, pasze, nawozy, ziemia i kora',
    desc: 'Maszyny do dużych worków: z wagą taśmową do granulatów, pasz i nawozów (5–50 kg), a z objętościowym podajnikiem taśmowym — do ziemi, kory, kompostu i torfu (10–80 l).',
    products: ['Pasze, nawozy, granulaty', 'Ziemia ogrodnicza, torf, kora', 'Kompost, podłoża uprawowe', 'Substancje sypkie luzem'],
    params: [
      { label: 'Zakres', value: '5 – 50 kg / 10 – 80 l' },
      { label: 'Max. format worka', value: 'F1200: 980 × 570 mm · F1300: 1080 × 670 mm' },
    ],
    dosing: ['Waga taśmowa (B/N-K)', 'Objętościowy podajnik taśmowy DTS80'],
    href: '/maszyny/pionowe-maszyny-pakujace/essegi-f1200',
  },
  {
    model: 'F8004S',
    label: 'F8004S — worek Stabilo',
    scope: 'Żywność, ziarna, karma — opakowania o regularnym kształcie',
    desc: 'Maszyna VFFS do opakowań 50 g – 5 kg z czterema zgrzewami narożnymi (Stabilo). Worek ma regularny, „pudełkowy” kształt — lepiej stoi i dobrze prezentuje się na półce. Formaty pillow, square bottom i Stabilo.',
    products: ['Kawa, przekąski, słodycze', 'Ziarna, nasiona, ryż', 'Karma dla zwierząt'],
    params: [
      { label: 'Zakres', value: '50 g – 5 kg' },
      { label: 'Max. format worka', value: '360 × 560 mm' },
    ],
    dosing: ['Waga wibracyjna (B/V-K) lub wielogłowicowa', 'Waga dwuślimakowa (B/2C)'],
    href: '/maszyny/pionowe-maszyny-pakujace/essegi-f8004s',
  },
  {
    model: 'F1400 COMBINED',
    label: 'F1400 COMBINED — worek w kartonie',
    scope: 'Bag-in-box: worek foliowy wkładany do kartonu',
    desc: 'Maszyna formuje i napełnia worek foliowy, a następnie automatycznie umieszcza go w kartonie. Folia chroni produkt, karton nadaje kształt i chroni w transporcie.',
    products: ['Warzywa świeże i mrożone', 'Suszone owoce', 'Ciastka'],
    params: [
      { label: 'Zakres', value: '5 – 25 kg' },
      { label: 'Max. format worka', value: '1280 × 670 mm' },
    ],
    dosing: ['System ważenia dobierany do produktu'],
    href: '#karton',
  },
  {
    model: 'W1200 Fluid',
    label: 'W1200 Fluid — produkty płynne',
    scope: 'Ciecze i produkty płynne',
    desc: 'Specjalistyczna maszyna VFFS do pakowania produktów płynnych i półpłynnych. Dedykowany system dozowania do cieczy z zachowaniem szczelności i higieny procesu.',
    products: ['Oleje, soki, sosy', 'Produkty płynne spożywcze i chemiczne'],
    params: [
      { label: 'Przeznaczenie', value: 'Wyłącznie produkty płynne i półpłynne' },
      { label: 'Dozowanie', value: 'Dedykowany dozownik do cieczy' },
    ],
    dosing: ['Dozownik do cieczy'],
    href: null,
  },
];

const SECTORS = [
  {
    name: 'Spożywcza',
    items: ['Kawa, kakao, przyprawy', 'Makaron, ryż, kasze', 'Suszone owoce, orzechy', 'Mąka, skrobia, cukier', 'Sól, nasiona, zboża', 'Pasze i karma dla zwierząt'],
  },
  {
    name: 'Chemiczna i tworzywa',
    items: ['Proszki do prania', 'Środki czyszczące', 'Nawozy, granulaty chemiczne', 'Granulaty tworzyw (PP, PE), masterbatch', 'Chlorek wapnia, sól przemysłowa'],
  },
  {
    name: 'Budowlana',
    items: ['Cement, tynk', 'Mieszanki budowlane', 'Piasek, żwir, kruszywa', 'Keramzyt, kamienie ozdobne'],
  },
  {
    name: 'Ogrodnicza i opałowa',
    items: ['Ziemia ogrodnicza, torf, kora', 'Kompost, podłoża uprawowe', 'Pellet drzewny', 'Węgiel drzewny, brykiet'],
  },
];

// Grafiki (wzór: podręcznik handlowo-techniczny MadejPak/Essegi) — statyczny SVG, kolory z currentColor
const VFFS_SCHEMA_SVG = `<path d="M126 10 H194 L172 52 H148 Z" stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.07" stroke-linejoin="round"/><circle cx="150" cy="24" r="2.4" fill="#E8610A"/><circle cx="160" cy="31" r="2.4" fill="#E8610A"/><circle cx="170" cy="22" r="2.4" fill="#E8610A"/><circle cx="156" cy="40" r="2.4" fill="#E8610A"/><circle cx="166" cy="40" r="2.4" fill="#E8610A"/><circle cx="160" cy="24" r="2.4" fill="#E8610A"/><circle cx="55" cy="125" r="34" stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.07"/><circle cx="55" cy="125" r="9" stroke="currentColor" stroke-width="1.6" fill="none"/><circle cx="108" cy="82" r="6" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M55 91 L108 76 L136 100" stroke="#E8610A" stroke-width="2" fill="none" stroke-linejoin="round"/><rect x="141" y="112" width="38" height="190" fill="currentColor" fill-opacity="0.07"/><rect x="148" y="52" width="24" height="250" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M126 98 H194 L178 118 H142 Z" stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.07" stroke-linejoin="round"/><rect x="154" y="138" width="12" height="26" rx="2" fill="#E8610A"/><rect x="126" y="176" width="10" height="64" rx="4" stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.07"/><rect x="184" y="176" width="10" height="64" rx="4" stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.07"/><rect x="110" y="306" width="46" height="12" rx="2" fill="#E8610A"/><rect x="164" y="306" width="46" height="12" rx="2" fill="#E8610A"/><path d="M156 312 L164 308 L164 316 Z" fill="currentColor"/><path d="M140 330 H180 L184 344 V392 Q184 402 174 402 H146 Q136 402 136 392 V344 Z" stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.07" stroke-linejoin="round"/><line x1="138" y1="337" x2="182" y2="337" stroke="currentColor" stroke-width="1.4"/><circle cx="150" cy="372" r="2.4" fill="#E8610A"/><circle cx="160" cy="380" r="2.4" fill="#E8610A"/><circle cx="170" cy="370" r="2.4" fill="#E8610A"/><circle cx="155" cy="390" r="2.4" fill="#E8610A"/><circle cx="166" cy="392" r="2.4" fill="#E8610A"/><circle cx="160" cy="362" r="2.4" fill="#E8610A"/><circle cx="146" cy="386" r="2.4" fill="#E8610A"/><circle cx="174" cy="384" r="2.4" fill="#E8610A"/><rect x="80" y="410" width="170" height="11" rx="5.5" stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.07"/><circle cx="88" cy="415.5" r="3" fill="currentColor"/><circle cx="242" cy="415.5" r="3" fill="currentColor"/><rect x="240" y="150" width="56" height="42" rx="4" stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.07"/><rect x="247" y="157" width="42" height="22" rx="2" fill="#E8610A" fill-opacity="0.3"/><line x1="268" y1="192" x2="268" y2="226" stroke="currentColor" stroke-width="1.6"/><line x1="136" y1="151" x2="154" y2="151" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2"/><circle cx="22" cy="90" r="9" fill="#E8610A"/><text x="22" y="93.5" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="Arial">1</text><circle cx="108" cy="62" r="9" fill="#E8610A"/><text x="108" y="65.5" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="Arial">2</text><circle cx="214" cy="108" r="9" fill="#E8610A"/><text x="214" y="111.5" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="Arial">3</text><circle cx="214" cy="208" r="9" fill="#E8610A"/><text x="214" y="211.5" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="Arial">4</text><circle cx="122" cy="151" r="9" fill="#E8610A"/><text x="122" y="154.5" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="Arial">5</text><circle cx="92" cy="312" r="9" fill="#E8610A"/><text x="92" y="315.5" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="Arial">5</text><circle cx="228" cy="312" r="9" fill="#E8610A"/><text x="228" y="315.5" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="Arial">6</text><circle cx="268" cy="138" r="9" fill="#E8610A"/><text x="268" y="141.5" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="Arial">7</text>`;
const BAG_SVG = {
  pillow: `<rect x="12" y="6" width="76" height="118" rx="10" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.07"/><line x1="12" y1="22" x2="88" y2="22" stroke="currentColor" stroke-width="2"/><line x1="12" y1="108" x2="88" y2="108" stroke="currentColor" stroke-width="2"/><line x1="50" y1="22" x2="50" y2="108" stroke="currentColor" stroke-width="2" stroke-dasharray="3 4"/>`,
  gusset: `<rect x="12" y="6" width="76" height="118" rx="10" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.07"/><line x1="12" y1="22" x2="88" y2="22" stroke="currentColor" stroke-width="2"/><line x1="12" y1="108" x2="88" y2="108" stroke="currentColor" stroke-width="2"/><line x1="28" y1="22" x2="28" y2="108" stroke="currentColor" stroke-width="2" stroke-dasharray="3 4"/><line x1="72" y1="22" x2="72" y2="108" stroke="currentColor" stroke-width="2" stroke-dasharray="3 4"/>`,
  stabilo: `<rect x="12" y="6" width="76" height="118" rx="10" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.07"/><line x1="12" y1="22" x2="88" y2="22" stroke="currentColor" stroke-width="2"/><line x1="12" y1="108" x2="88" y2="108" stroke="currentColor" stroke-width="2"/><line x1="22" y1="12" x2="22" y2="118" stroke="#E8610A" stroke-width="2.4"/><line x1="78" y1="12" x2="78" y2="118" stroke="#E8610A" stroke-width="2.4"/>`,
  square: `<rect x="12" y="6" width="76" height="118" rx="10" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.07"/><line x1="12" y1="22" x2="88" y2="22" stroke="currentColor" stroke-width="2"/><path d="M18 118 L32 98 H68 L82 118" stroke="#E8610A" stroke-width="2.4" fill="none" stroke-linejoin="round"/>`,
};

const PAGE_TOC = [
  { label: 'Jak działa', href: '#jak-dziala' },
  { label: 'Budowa maszyny', href: '#budowa' },
  { label: 'Modele', href: '#modele' },
  { label: 'Worki i folie', href: '#worki' },
  { label: 'Kartony', href: '#karton' },
  { label: 'Dozowanie', href: '#dozowanie' },
  { label: 'Dobór maszyny', href: '#dobor' },
  { label: 'Masz już linię?', href: '#problemy' },
  { label: 'FAQ i słownik', href: '#faq' },
];

const VFFS_STEPS = [
  { title: 'Dostarczanie produktu', desc: 'Produkt trafia z silosu, zasobnika lub instalacji transportowej do układu dozującego.' },
  { title: 'Naważanie', desc: 'System wagowy odmierza zadaną porcję. Dla produktu sypkiego stosuje się często dozowanie zgrubne i dokładne.' },
  { title: 'Formowanie worka', desc: 'Folia jest prowadzona po kołnierzu i tubusie formującym. Zespół zgrzewu wzdłużnego łączy jej krawędzie.' },
  { title: 'Napełnianie', desc: 'Po wykonaniu dolnego zgrzewu odważona porcja spada kanałem zasypowym do worka.' },
  { title: 'Zamykanie i odcinanie', desc: 'Zespół zgrzewu poprzecznego zamyka napełniony worek i wykonuje zgrzew dla kolejnego cyklu; układ tnący oddziela opakowania.' },
  { title: 'Odbiór', desc: 'Przenośnik odbiorczy przekazuje worek do kontroli, spłaszczania i dalszego transportu lub paletyzacji.' },
];

const VFFS_PARTS = [
  { name: 'Odwijak folii', desc: 'Utrzymuje rolkę i umożliwia kontrolowane odwijanie folii.' },
  { name: 'Prowadzenie i centrowanie folii', desc: 'Zapewnia prawidłowe położenie folii przed formowaniem worka.' },
  { name: 'Kołnierz i tubus formujący', desc: 'Nadają folii kształt rękawa; kanał zasypowy prowadzi produkt do opakowania.' },
  { name: 'Układ przesuwu folii', desc: 'Przesuwa folię o długość opakowania — skokowo lub w sposób ciągły, zależnie od wersji.' },
  { name: 'Zespoły zgrzewające', desc: 'Wykonują zgrzew wzdłużny i zgrzewy poprzeczne.' },
  { name: 'Układ tnący', desc: 'Oddziela napełniony i zamknięty worek.' },
  { name: 'PLC i panel operatorski HMI', desc: 'Sterowanie cyklem, nastawami, recepturami i sygnalizacją alarmów.' },
];

const FILMS = [
  { material: 'PE / LDPE', props: 'Folia elastyczna, przeznaczona do zgrzewania.', example: 'Pellet, sól, nawozy' },
  { material: 'Wielowarstwowa folia PE', props: 'Warstwy o różnych właściwościach wytrzymałościowych i zgrzewalności.', example: 'Worki poddawane większym obciążeniom' },
  { material: 'PET/PE', props: 'Laminat z warstwą zewnętrzną i wewnętrzną warstwą zgrzewalną.', example: 'Wybrane produkty spożywcze' },
  { material: 'Folia barierowa', props: 'Może ograniczać przenikanie tlenu, pary wodnej lub aromatów.', example: 'Produkty wrażliwe na warunki przechowywania' },
];

const GLOSSARY: { term: string; en: string | null; def: string }[] = [
  { term: 'VFFS', en: 'Vertical Form Fill Seal', def: 'Pionowe formowanie, napełnianie i zgrzewanie opakowań z folii na rolce.' },
  { term: 'Tubus i kołnierz formujący', en: 'forming tube / forming shoulder', def: 'Nadają płaskiej folii kształt rękawa; przez tubus produkt trafia do worka.' },
  { term: 'Kanał zasypowy', en: 'filling chute', def: 'Droga, którą odważona porcja spada do formowanego worka.' },
  { term: 'Szczęki zgrzewające', en: 'sealing jaws', def: 'Zespół zgrzewu poprzecznego — zamyka worek i tworzy dno następnego.' },
  { term: 'Znacznik nadruku', en: 'registration mark', def: 'Znak na folii odczytywany przez fotokomórkę, dzięki któremu grafika jest zawsze w tym samym miejscu.' },
  { term: 'Zgrzewanie impulsowe / hot-bar', en: 'impulse / hot-bar sealing', def: 'Element grzejny nagrzewany w cyklu albo listwy grzejne o stałej temperaturze roboczej.' },
  { term: 'Gęstość nasypowa', en: 'bulk density', def: 'Masa produktu w jednostce objętości — decyduje o wielkości worka dla zadanej masy.' },
  { term: 'Receptura', en: null, def: 'Zapis nastaw dla produktu i formatu: masa, długość worka, parametry zgrzewania.' },
  { term: 'Przezbrojenie', en: 'changeover', def: 'Zmiana produktu lub formatu; może wymagać wymiany tubusa formującego.' },
  { term: 'Wąskie gardło', en: 'bottleneck', def: 'Urządzenie lub etap, który ogranicza wydajność całej linii.' },
  { term: 'OEE', en: 'Overall Equipment Effectiveness', def: 'Wskaźnik efektywności wyposażenia uwzględniający dostępność, wydajność i jakość.' },
  { term: 'Waga kontrolna / kartoniarka zbiorcza', en: 'checkweigher / case packer', def: 'Kontrola masy gotowych worków / pakowanie kilku opakowań w karton zbiorczy.' },
  { term: 'Bag-in-box', en: null, def: 'Worek foliowy umieszczony wewnątrz kartonu — np. w Essegi F1400 COMBINED.' },
];

// Czynniki doboru maszyny — treść dla klienta (bez obietnic wydajności)
const SELECTION_FACTORS = [
  { title: 'Gęstość nasypowa', desc: 'Masa produktu na jednostkę objętości. Dwa worki po 15 kg — soli i lekkiej kory — wymagają zupełnie innych rozmiarów. Sama masa worka nie wystarcza do doboru maszyny.' },
  { title: 'Płynność produktu', desc: 'Granulat swobodnie spływa z zasobnika, a wilgotny proszek potrafi się zawieszać i mostkować. Znaczenie mają wilgotność, granulacja i skłonność do zbrylania.' },
  { title: 'Pylenie i odpowietrzanie', desc: 'Proszki zawierają dużo powietrza — worek wychodzi większy i trudniej go zamknąć oraz ułożyć na palecie. Pył w strefie zgrzewu może powodować nieszczelności.' },
  { title: 'Folia i zgrzew', desc: 'Folia płaska formowana na maszynie VFFS to co innego niż gotowy rękaw PE w przemysłowych systemach FFS. Liczą się grubość, zgrzewalność i odporność na przebicie.' },
  { title: 'Wydajność i dalszy proces', desc: 'Ile worków na godzinę i na ile zmian — oraz co dzieje się z workiem po napełnieniu: ręczne odkładanie, paletyzacja, owijanie, transport.' },
  { title: 'Bezpieczeństwo pyłów (ATEX)', desc: 'Pyły mąki, cukru, skrobi czy materiałów organicznych mogą tworzyć atmosferę wybuchową. Pytamy o strefy zagrożenia i odpylanie — wykonanie ATEX potwierdzamy dla konkretnej konfiguracji.' },
];

const INQUIRY_CHECKLIST = [
  { q: 'Co pakujesz?', hint: 'nazwa produktu i jego właściwości: granulat czy proszek, pylenie, wilgotność' },
  { q: 'W jakie opakowanie?', hint: 'masa lub objętość worka; folia z rolki czy gotowe worki' },
  { q: 'Jaka wydajność?', hint: 'worki lub tony na godzinę oraz liczba zmian' },
  { q: 'Jak pakujesz dziś?', hint: 'ręcznie, półautomatycznie czy na automacie — i co sprawia największy problem' },
  { q: 'Co dalej z workiem?', hint: 'ręczne układanie, paletyzacja, owijanie, transport' },
];

// Orientacyjny podział Essegi / Concetti — różne konstrukcje, nie „tańsza i droższa”
const ESSEGI_VS_CONCETTI = [
  { need: 'Pellet 5–15 kg, kilkaset worków na godzinę', fit: 'Essegi F1000' },
  { need: 'Granulat 10–25 kg, umiarkowana wydajność', fit: 'Essegi F1000 / F1200' },
  { need: 'Granulat 25 kg, 1500–2000 worków na godzinę', fit: 'Concetti FFS-E' },
  { need: 'Cement lub pylisty premiks w szczelnym worku', fit: 'Concetti CONTINUA Six Station' },
  { need: 'Gotowe worki papierowe lub z tkaniny PP', fit: 'Concetti — worki otwarte' },
  { need: 'Duże opakowania typu big-bag', fit: 'Concetti — systemy big-bag' },
];

// Realizacje z maszynami Essegi — kolejność: najmocniejsze argumenty na górze
const ESSEGI_CASE_ORDER = ['europol', 'planta', 'ciech-sarzyna', 'qemetica', 'certech', 'gryfstevedring', 'brapta', 'axpal'];
const caseRank = (slug: string) => {
  const i = ESSEGI_CASE_ORDER.indexOf(slug);
  return i === -1 ? 99 : i;
};
const ESSEGI_CASES = REALIZACJE
  .filter((r) => r.status === 'pelne' && r.partnerzy?.includes('Essegi'))
  .sort((a, b) => caseRank(a.slug) - caseRank(b.slug));

// Pierwszy kierunek doboru wg produktu (orientacyjnie — wariant potwierdzamy po analizie)
const PRODUCT_FIT = [
  { product: 'Pellet, granulat drzewny', direction: 'F1000 EcoFocus lub F1000 z wagą taśmową, dalej paletyzacja', watch: 'pylenie i kruszenie, ułożenie worka na palecie' },
  { product: 'Nawozy granulowane', direction: 'F1000 lub F1200 z wagą taśmową — zależnie od masy worka', watch: 'agresywność produktu, pylenie, wykonanie ze stali nierdzewnej' },
  { product: 'Mąka, cement, premiksy', direction: 'F1000 z wagą dwuślimakową i odpylaniem', watch: 'napowietrzenie, szczelność worka, mostkowanie, ATEX' },
  { product: 'Ryż, cukier, nasiona', direction: 'F700 z dozownikiem kubkowym lub wagą wibracyjną; większe worki — F1000', watch: 'małe dawki, tolerancja ważenia, wilgoć, zmiany formatu' },
  { product: 'Karma dla zwierząt', direction: 'F700 / F8004S (małe opakowania) albo F1000 / F1200 (duże worki)', watch: 'tłuszcz, różna granulacja, trwałość folii' },
  { product: 'Warzywa mrożone, suszone owoce, ciastka — w kartonie', direction: 'F1400 COMBINED — worek wkładany automatycznie do kartonu', watch: 'rodzaj kartonu, zamykanie, praca w chłodni' },
  { product: 'Ziemia, torf, kora', direction: 'F1000 / F1200 / F1300 z dozownikiem objętościowym DTS', watch: 'porcja w litrach, wilgotność, nieregularne frakcje' },
  { product: 'Chemia, detergenty', direction: 'waga taśmowa lub dwuślimakowa — zależnie od granulacji', watch: 'korozja, higiena, pylenie' },
];

// Typowe problemy na istniejących liniach — od czego zaczynamy diagnozę
const LINE_PROBLEMS = [
  { symptom: 'Waga „oszukuje”', check: 'Sprawdzamy, czy pracuje waga czy dozownik objętościowy, jak zmienia się gęstość produktu, jak działa podawanie zgrubne i dokładne oraz czy na pomiar nie wpływają drgania.' },
  { symptom: 'Pyli i nie zgrzewa', check: 'Odpowietrzanie, odciąg pyłu, czas opadania produktu, wysokość napełnienia i struktura folii — pył w strefie zgrzewu to częsta przyczyna nieszczelności.' },
  { symptom: 'Worek jest „nadmuchany”', check: 'Rozpoznajemy napowietrzenie produktu i powietrze w worku. Zagęszczanie lub usuwanie powietrza dobieramy po próbie na produkcie.' },
  { symptom: 'Za dużo przezbrojeń', check: 'Liczymy receptury, gramatury i szerokości folii. Inna długość worka to zwykle zmiana ustawień, inna szerokość — często wymiana tubusa formującego.' },
  { symptom: 'Worek źle leży na palecie', check: 'Format, fałdy boczne, spłaszczanie i orientowanie worka — a na końcu robotyzacja i stabilność palety.' },
  { symptom: 'Za mała wydajność', check: 'Szukamy wąskiego gardła: dozownik, szczęki zgrzewające, transport wyjściowy, paletyzacja albo zasilanie produktem.' },
];

// Opcje z katalogu akcesoriów Essegi — dostępność zależy od modelu
const MACHINE_OPTIONS = [
  { group: 'Folia i nadruk', items: ['Fotokomórka znacznika nadruku', 'Automatyczne centrowanie folii', 'Drukarka / znakowarka — data, partia, kod'] },
  { group: 'Kształt worka', items: ['Zakładki boczne i płaskie dno', 'Zgrzewy narożne Stabilo', 'Układ wykonywania uchwytów'] },
  { group: 'Odbiór i kontrola', items: ['Taśma wyjściowa, stół obrotowy', 'Obracanie i spłaszczanie worka', 'Waga kontrolna', 'Podawanie worka do kartonu'] },
  { group: 'Obsługa', items: ['Podesty, schody, barierki', 'Podnośnik rolki folii', 'Stojaki na tubusy formujące', 'Układ wstrząsania worka'] },
];

// Co MadejPak integruje wokół maszyny
const LINE_INTEGRATION = [
  { group: 'Podanie produktu', desc: 'Przenośniki, ślimaki, zasobniki, odbiór z silosu lub istniejącej instalacji.', href: '/maszyny/transport-i-koniec-linii', link: 'Transport' },
  { group: 'Ważenie i kontrola', desc: 'Wagi wielogłowicowe, kontrola masy, detektor metalu, odrzut, etykietowanie.', href: '/maszyny/wazenie-i-dozowanie', link: 'Ważenie i dozowanie' },
  { group: 'Koniec linii', desc: 'Transport i orientowanie worków, robot lub cobot, paletyzacja, owijanie palet.', href: '/maszyny/paletyzacja', link: 'Paletyzacja' },
  { group: 'Sterowanie', desc: 'Integracja i komunikacja z urządzeniami, które już pracują w zakładzie.', href: '/maszyny/robotyzacja-pakowania', link: 'Robotyzacja' },
];

const BAG_TYPES: { name: string; desc: string; svg: keyof typeof BAG_SVG }[] = [
  { name: 'Pillow — worek poduszkowy', desc: 'Najprostszy typ worka VFFS: zgrzew wzdłużny i dwa poprzeczne. Stosowany m.in. do granulatów, soli i pelletu.', svg: 'pillow' },
  { name: 'Gusset — zakładki boczne', desc: 'Zakładki zwiększają objętość i pomagają uzyskać regularniejszy kształt worka — korzystny również przy układaniu na palecie.', svg: 'gusset' },
  { name: 'Stabilo — zgrzewy narożne', desc: 'Cztery dodatkowe zgrzewy narożne nadają opakowaniu regularny, zbliżony do prostopadłościanu kształt.', svg: 'stabilo' },
  { name: 'Square bottom — płaskie dno', desc: 'Uformowane płaskie dno poprawia stabilność worka podczas ekspozycji. To nadal worek z folii, a nie karton.', svg: 'square' },
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function PionoweMaszynyPage() {
  return (
    <Box sx={{ bgcolor: BG, minHeight: '100vh', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ── Hero ── */}
      <Box sx={{ borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 6, md: 10 },
              alignItems: 'center',
            }}
          >
            {/* Left: heading + text + buttons */}
            <Box>
              <Typography
                sx={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                  mb: 2.5,
                }}
              >
                Pakowanie pionowe
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2rem', md: '2.75rem', lg: '3rem' },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: 'var(--dim-85)',
                  mb: 3,
                }}
              >
                Pionowe maszyny
                <br />
                pakujące VFFS
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  lineHeight: 1.8,
                  color: TEXT_DIM,
                  mb: 3.5,
                }}
              >
                Maszyny VFFS (Vertical Form-Fill-Seal) formują opakowanie z rolki folii, dozują
                produkt i zgrzewają worek w jednym cyklu roboczym. Dostarczamy i integrujemy
                maszyny Essegi i systemy FFS Concetti — dla produktów sypkich, proszkowych,
                granulowanych i płynnych.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Box
                  component={Link}
                  href="/kontakt"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: 3,
                    py: 1.25,
                    bgcolor: ACCENT,
                    borderRadius: '3px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    textDecoration: 'none',
                    transition: 'background-color 0.15s ease',
                    '&:hover': { bgcolor: '#D45509' },
                  }}
                >
                  Zapytaj o maszynę
                  <ArrowRight />
                </Box>
                <Box
                  component="a"
                  href="#modele"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: 3,
                    py: 1.25,
                    border: `1px solid ${BORDER}`,
                    borderRadius: '3px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: TEXT_DIM,
                    textDecoration: 'none',
                    transition: 'border-color 0.15s ease, color 0.15s ease',
                    '&:hover': {
                      borderColor: 'var(--dim-20)',
                      color: 'var(--dim-85)',
                    },
                  }}
                >
                  Zobacz maszyny
                  <ArrowRight />
                </Box>
              </Box>
            </Box>

            {/* Right: machine photo — portrait, ~50% column width */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
              <Box
                sx={{
                  position: 'relative',
                  width: 280,
                  height: 380,
                  borderRadius: '4px',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/images/interpack/essegi-2.jpg"
                  alt="Essegi — pionowa maszyna pakująca VFFS"
                  fill
                  sizes="280px"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Na tej stronie ── */}
      <Box component="nav" aria-label="Na tej stronie" sx={{ borderBottom: `1px solid ${BORDER}`, py: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, overflowX: 'auto', pb: 0.25, scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
            <Typography sx={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--dim-45)', whiteSpace: 'nowrap', mr: 1 }}>
              Na tej stronie
            </Typography>
            {PAGE_TOC.map((t) => (
              <Box
                key={t.href}
                component="a"
                href={t.href}
                sx={{
                  whiteSpace: 'nowrap',
                  px: 1.5,
                  py: 0.6,
                  border: `1px solid ${BORDER}`,
                  borderRadius: '100px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--dim-75)',
                  textDecoration: 'none',
                  transition: 'border-color 0.15s ease, color 0.15s ease',
                  '&:hover': { borderColor: ACCENT, color: ACCENT },
                }}
              >
                {t.label}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Co to jest i do czego służy ── */}
      <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 10 } }}>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Czym jest ta maszyna
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, mb: 3 }}>
                Czym jest pionowa maszyna pakująca VFFS?
              </Typography>
              <Box sx={{ pl: 2.5, borderLeft: `3px solid ${ACCENT}`, mb: 3.5 }}>
                <Typography sx={{ fontSize: { xs: '0.95rem', md: '1.02rem' }, fontWeight: 600, color: 'var(--dim-85)', lineHeight: 1.7 }}>
                  VFFS (Vertical Form Fill Seal) to technologia, w której maszyna rozwija folię z rolki, formuje worek,
                  napełnia go odmierzoną porcją produktu, wykonuje zgrzewy i oddziela gotowe opakowanie.
                </Typography>
              </Box>
              <Typography variant="h3" sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dim-85)', mb: 1 }}>
                Co oznacza słowo „pionowa”?
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.8 }}>
                Produkt trafia do opakowania od góry, zwykle grawitacyjnie. Nie oznacza to, że wszystkie urządzenia w linii
                stoją pionowo — podajniki, przenośniki i stanowisko paletyzacji mogą pracować w różnych kierunkach.
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Kiedy to rozwiązanie jest dla Ciebie
              </Typography>
              {[
                'Pakujesz ręcznie i chcesz to zautomatyzować — maszyna zastępuje kilka stanowisk i pracuje w ciągłym cyklu.',
                'Potrzebujesz powtarzalnych porcji — odmierza je dobrany i zsynchronizowany z maszyną układ naważania lub dozowania.',
                'Twój produkt to coś sypkiego: mąka, cukier, kawa, granulat, pellet, proszek, kasza, nawóz, karma.',
                'Chcesz pakować różne formaty — zmiana długości worka to zwykle nastawy, inna szerokość może wymagać wymiany tubusa formującego.',
              ].map((text) => (
                <Box key={text} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 2 }}>
                  <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, mt: '8px', flexShrink: 0 }} />
                  <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.75 }}>{text}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Jak działa VFFS + budowa maszyny ── */}
      <Box id="jak-dziala" sx={{ py: { xs: 8, md: 10 }, borderBottom: `1px solid ${BORDER}`, scrollMarginTop: '80px' }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 4, md: 5 }, maxWidth: 720 }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
              Zasada działania
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              Jeden cykl — od produktu do gotowego worka
            </Typography>
          </Box>

          <Box component="ol" sx={{ listStyle: 'none', m: 0, p: 0, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 2, mb: { xs: 4, md: 5 } }}>
            {VFFS_STEPS.map((step, i) => (
              <Box key={step.title} component="li" sx={{ p: 3, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
                <Typography sx={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1, color: ACCENT, mb: 1.5 }}>
                  {String(i + 1).padStart(2, '0')}
                </Typography>
                <Typography variant="h3" sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dim-85)', mb: 1 }}>
                  {step.title}
                </Typography>
                <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.65, color: TEXT_DIM }}>{step.desc}</Typography>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              p: { xs: 3, md: 3.5 },
              mb: { xs: 8, md: 10 },
              borderLeft: `3px solid ${ACCENT}`,
              bgcolor: `color-mix(in srgb, ${ACCENT} 6%, var(--bg-card))`,
              borderRadius: '4px',
            }}
          >
            <Typography sx={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.75 }}>
              Przykład: pakowanie 15 kg pelletu
            </Typography>
            <Typography sx={{ fontSize: '0.88rem', lineHeight: 1.75, color: TEXT_DIM }}>
              Przenośnik taśmowy podaje pellet do zbiornika wagowego. Po naważeniu porcja trafia przez układ zasypowy do
              worka formowanego z folii PE. Maszyna wykonuje zgrzew poprzeczny, odcina worek, a przenośnik odbiorczy
              przekazuje go do następnych urządzeń — kontroli masy, spłaszczania i paletyzacji.
            </Typography>
          </Box>

          {/* Budowa maszyny */}
          <Box
            id="budowa"
            sx={{
              scrollMarginTop: '80px',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '320px 1fr' },
              gap: { xs: 4, md: 8 },
              alignItems: 'start',
            }}
          >
            <Box
              component="svg"
              viewBox="0 0 320 440"
              role="img"
              aria-label="Schemat budowy pionowej maszyny pakującej VFFS z numerami zespołów"
              sx={{ display: 'block', width: '100%', maxWidth: 320, height: 'auto', mx: { xs: 'auto', md: 0 }, color: 'var(--dim-55)' }}
              dangerouslySetInnerHTML={{ __html: VFFS_SCHEMA_SVG }}
            />
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Budowa maszyny
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em', mb: 3 }}>
                Podstawowe zespoły pionowej maszyny pakującej
              </Typography>
              <Box component="ol" sx={{ listStyle: 'none', m: 0, p: 0, display: 'grid', gap: 1.5, mb: 4 }}>
                {VFFS_PARTS.map((part, i) => (
                  <Box key={part.name} component="li" sx={{ display: 'flex', gap: 1.75, alignItems: 'flex-start' }}>
                    <Box sx={{ width: 22, height: 22, borderRadius: '50%', bgcolor: ACCENT, color: '#fff', fontSize: '0.72rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, mt: '1px' }}>
                      {i + 1}
                    </Box>
                    <Typography sx={{ fontSize: '0.86rem', lineHeight: 1.6, color: TEXT_DIM }}>
                      <Box component="span" sx={{ fontWeight: 700, color: 'var(--dim-85)' }}>{part.name}</Box> — {part.desc}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2, mb: 3 }}>
                {[
                  { title: 'Przed maszyną', desc: 'Silos, zasobnik, przenośniki taśmowe lub ślimakowe, urządzenia przesiewające, waga albo dozownik.' },
                  { title: 'Za maszyną', desc: 'Przenośnik odbiorczy, waga kontrolna, detektor metali (jeżeli wymagany), obracanie i spłaszczanie worków, robot paletyzujący, owijarka.' },
                ].map((b) => (
                  <Box key={b.title} sx={{ p: 2.5, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
                    <Typography variant="h3" sx={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.75 }}>{b.title}</Typography>
                    <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.65, color: TEXT_DIM }}>{b.desc}</Typography>
                  </Box>
                ))}
              </Box>
              <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'var(--dim-55)' }}>
                Maszyna pakująca sama nie gwarantuje wymaganej dokładności masy — za przygotowanie porcji odpowiada
                dobrany i zsynchronizowany z nią układ dozowania lub ważenia.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Serie Essegi ── */}
      <Box id="modele" sx={{ scrollMarginTop: '80px', bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 5, md: 7 } }}>
            <Typography
              sx={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: ACCENT,
                mb: 2,
              }}
            >
              Essegi — serie maszyn
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 2, md: 6 },
                alignItems: { md: 'flex-end' },
                justifyContent: 'space-between',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                }}
              >
                Maszyny VFFS Essegi
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.85rem',
                  color: TEXT_DIM,
                  maxWidth: 460,
                  lineHeight: 1.7,
                  flexShrink: 0,
                }}
              >
                Essegi produkuje pionowe maszyny pakujące od ponad 30 lat.
                Rodzina maszyn obejmuje formatki od kompaktowych (F700) po przemysłowe (F8004S),
                z dedykowanymi systemami dozowania dla każdej grupy produktów.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {ESSEGI_SERIES.map((series) => (
              <Box
                key={series.model}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', lg: '260px 1fr 240px' },
                  gap: { xs: 3, lg: 0 },
                  bgcolor: BG_CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}
              >
                {/* Left: model name */}
                <Box
                  sx={{
                    p: { xs: 3, md: 3.5 },
                    borderRight: { lg: `1px solid ${BORDER}` },
                    borderBottom: { xs: `1px solid ${BORDER}`, lg: 'none' },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      letterSpacing: '-0.04em',
                      color: ACCENT,
                      lineHeight: 1,
                      mb: 1,
                    }}
                  >
                    {series.model}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: 'var(--dim-42)',
                      lineHeight: 1.45,
                      mb: 2.5,
                    }}
                  >
                    {series.scope}
                  </Typography>
                  {series.params.map((p) => (
                    <Box key={p.label} sx={{ mb: 1 }}>
                      <Typography sx={{ fontSize: '0.65rem', color: 'var(--dim-35)', letterSpacing: '0.08em', textTransform: 'uppercase', mb: 0.25 }}>
                        {p.label}
                      </Typography>
                      <Typography sx={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--dim-85)' }}>
                        {p.value}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Middle: description + products */}
                <Box sx={{ p: { xs: 3, md: 3.5 }, borderRight: { lg: `1px solid ${BORDER}` } }}>
                  <Typography sx={{ fontSize: '0.88rem', lineHeight: 1.75, color: TEXT_DIM, mb: 3 }}>
                    {series.desc}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--dim-42)',
                      mb: 1.5,
                    }}
                  >
                    Produkty
                  </Typography>
                  <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
                    {series.products.map((p) => (
                      <Box
                        key={p}
                        component="li"
                        sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25, mb: 0.75 }}
                      >
                        <Box
                          aria-hidden="true"
                          sx={{
                            width: 4,
                            height: 4,
                            borderRadius: '50%',
                            bgcolor: ACCENT,
                            flexShrink: 0,
                            mt: '6px',
                          }}
                        />
                        <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.55, color: TEXT_DIM }}>
                          {p}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* Right: dosing */}
                <Box sx={{ p: { xs: 3, md: 3.5 } }}>
                  <Typography
                    sx={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--dim-42)',
                      mb: 1.5,
                    }}
                  >
                    Systemy dozowania
                  </Typography>
                  <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
                    {series.dosing.map((d) => (
                      <Box
                        key={d}
                        component="li"
                        sx={{
                          py: 0.75,
                          borderBottom: `1px solid ${BORDER}`,
                          '&:last-child': { borderBottom: 'none' },
                        }}
                      >
                        <Typography sx={{ fontSize: '0.78rem', color: TEXT_DIM, lineHeight: 1.5 }}>
                          {d}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  {series.href && (
                    <Box
                      component={Link}
                      href={series.href}
                      sx={{
                        mt: 2.5,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: ACCENT,
                        textDecoration: 'none',
                        '&:hover': { opacity: 0.8 },
                      }}
                    >
                      Zobacz szczegóły <ArrowRight />
                    </Box>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Podstrony modeli ── */}
      <Box id="modele" sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Szczegóły techniczne
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', mb: 6 }}>
            Wybierz model i sprawdź pełne dane
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' }, gap: 2 }}>
            {[
              { model: 'Essegi F700', range: '50 g – 3 kg', speed: 'do 70 szt./min', tag: 'Food & granulaty', href: '/maszyny/pionowe-maszyny-pakujace/essegi-f700', img: '/images/interpack/essegi-1.jpg' },
              { model: 'Essegi F1000', range: '1 – 25 kg', speed: 'do 30 szt./min', tag: 'Proszki, granulaty', href: '/maszyny/pionowe-maszyny-pakujace/essegi-f1000', img: '/images/interpack/essegi-2.jpg' },
              { model: 'Essegi F1200', range: '5 – 50 kg', speed: 'do 22 szt./min', tag: 'Duże worki bulk', href: '/maszyny/pionowe-maszyny-pakujace/essegi-f1200', img: '/images/interpack/essegi-3.jpg' },
              { model: 'Essegi F8004S', range: '50 g – 5 kg', speed: 'do 70 szt./min', tag: 'Worek Stabilo', href: '/maszyny/pionowe-maszyny-pakujace/essegi-f8004s', img: '/images/interpack/essegi-1.jpg' },
            ].map(({ model, range, speed, tag, href, img }) => (
              <Box
                key={model}
                component={Link}
                href={href}
                sx={{
                  display: 'flex', flexDirection: 'column',
                  bgcolor: BG_CARD, border: `1px solid ${BORDER}`,
                  borderRadius: '4px', overflow: 'hidden', textDecoration: 'none',
                  transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
                  '&:hover': { borderColor: ACCENT, boxShadow: `0 0 0 1px ${ACCENT}` },
                  '&:hover .model-card-img': { transform: 'scale(1.04)' },
                }}
              >
                {/* Zdjęcie */}
                <Box sx={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', bgcolor: '#f0f0f0' }}>
                  <Image
                    src={img}
                    alt={model}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                    className="model-card-img"
                    style={{ objectFit: 'cover', transition: 'transform 0.35s ease' }}
                  />
                </Box>
                {/* Treść */}
                <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Box sx={{ px: 1, py: 0.35, bgcolor: `${ACCENT}15`, border: `1px solid ${ACCENT}40`, borderRadius: '3px', fontSize: '0.62rem', fontWeight: 600, color: ACCENT, letterSpacing: '0.06em', textTransform: 'uppercase', mb: 2, alignSelf: 'flex-start' }}>
                    {tag}
                  </Box>
                  <Typography sx={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--dim-85)', letterSpacing: '-0.03em', mb: 0.5 }}>{model}</Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: TEXT_DIM, mb: 0.25 }}>{range}</Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: TEXT_DIM, mb: 2.5 }}>{speed}</Typography>
                  <Box sx={{ mt: 'auto', display: 'inline-flex', alignItems: 'center', gap: 1, fontSize: '0.75rem', fontWeight: 700, color: ACCENT, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    Szczegóły <ArrowRight />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Co oznaczają wersje */}
          <Box sx={{ mt: { xs: 5, md: 6 }, p: { xs: 3, md: 3.5 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
            <Typography variant="h3" sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dim-85)', mb: 2.5 }}>
              PN, MEC, SYNCRO, MOTION, EcoFocus — co oznaczają wersje
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }, gap: { xs: 2, md: 3 } }}>
              {VERSIONS.map((v) => (
                <Box key={v.name}>
                  <Typography sx={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em', color: ACCENT, mb: 0.75 }}>{v.name}</Typography>
                  <Typography sx={{ fontSize: '0.78rem', lineHeight: 1.6, color: TEXT_DIM }}>{v.desc}</Typography>
                </Box>
              ))}
            </Box>
            <Typography sx={{ fontSize: '0.75rem', lineHeight: 1.6, color: 'var(--dim-55)', mt: 2.5 }}>
              Wersję dobieramy do realnej wydajności linii, a nie do najwyższej liczby z katalogu.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Concetti FFS ── */}
      <Box id="concetti" sx={{ py: { xs: 8, md: 10 }, borderBottom: `1px solid ${BORDER}`, scrollMarginTop: '80px' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '280px 1fr' },
              gap: { xs: 4, md: 10 },
              alignItems: 'start',
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                  mb: 2,
                }}
              >
                Concetti — FFS
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.3rem', md: '1.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  mb: 2,
                }}
              >
                Systemy FFS
                do worków przemysłowych
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.7, color: TEXT_DIM }}>
                Przemysłowe workowanie z rękawa PE — duże wydajności i trudne produkty.
              </Typography>
            </Box>

            <Box>
              <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.8, color: TEXT_DIM, mb: 3.5 }}>
                Concetti dostarcza systemy FFS (Form-Fill-Seal) do przemysłowego workowania
                z rękawa polietylenowego — worki od 10 do 50 kg, zależnie od systemu i produktu.
                To inna konstrukcja niż pionowe VFFS Essegi: worek powstaje w poziomym,
                wielostanowiskowym procesie. W ofercie Concetti są też maszyny do gotowych
                worków otwartych, systemy big-bag i paletyzatory.
              </Typography>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                  gap: 2,
                }}
              >
                {[
                  {
                    model: 'FFS-E',
                    desc: 'Do granulatów dobrze płynących — tworzywa, nawozy, sól. Worki 10–40 kg, do 2000 worków/h.',
                  },
                  {
                    model: 'CONTINUA',
                    desc: 'Do produktów trudniejszych w dozowaniu — napowietrzonych i pylących. Kilka wersji wydajności dobieranych do produktu.',
                  },
                  {
                    model: 'CONTINUA Six Station',
                    desc: 'Do cementu i drobnych premiksów. Odpowietrzanie i zagęszczanie produktu, czyszczenie strefy zgrzewu. Worki 10–40 kg, do 800 worków/h.',
                  },
                ].map((m) => (
                  <Box
                    key={m.model}
                    sx={{
                      p: 3,
                      bgcolor: BG_CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: '4px',
                    }}
                  >
                    <Box sx={{ width: 24, height: 2, bgcolor: ACCENT, mb: 2, borderRadius: '1px' }} />
                    <Typography
                      sx={{
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: 'var(--dim-85)',
                        mb: 1.25,
                      }}
                    >
                      {m.model}
                    </Typography>
                    <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.65, color: TEXT_DIM }}>
                      {m.desc}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Essegi czy Concetti — orientacyjny kierunek */}
              <Box sx={{ mt: 4, border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
                <Box sx={{ px: 3, py: 2, bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
                  <Typography variant="h3" sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dim-85)' }}>
                    Essegi czy Concetti? Orientacyjny kierunek
                  </Typography>
                </Box>
                {ESSEGI_VS_CONCETTI.map((row) => (
                  <Box
                    key={row.need}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: '1.4fr 1fr' },
                      gap: { xs: 0.5, sm: 3 },
                      px: 3,
                      py: 1.75,
                      bgcolor: BG_CARD,
                      borderBottom: `1px solid ${BORDER}`,
                    }}
                  >
                    <Typography sx={{ fontSize: '0.84rem', lineHeight: 1.55, color: TEXT_DIM }}>{row.need}</Typography>
                    <Typography sx={{ fontSize: '0.84rem', lineHeight: 1.55, fontWeight: 700, color: 'var(--dim-85)' }}>{row.fit}</Typography>
                  </Box>
                ))}
                <Box sx={{ px: 3, py: 1.75, bgcolor: BG_CARD }}>
                  <Typography sx={{ fontSize: '0.75rem', lineHeight: 1.6, color: 'var(--dim-55)' }}>
                    To nie podział na „tańszą i droższą” maszynę, tylko różne konstrukcje do różnych zakresów pracy.
                    O wyborze decydują produkt, masa worka i wymagana wydajność.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Sektory ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 5, md: 6 } }}>
            <Typography
              sx={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: ACCENT,
                mb: 2,
              }}
            >
              Zastosowania
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              Sektory i produkty
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
              gap: 0,
              border: `1px solid ${BORDER}`,
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            {SECTORS.map((sector, idx) => (
              <Box
                key={sector.name}
                sx={{
                  p: { xs: 3, md: 3.5 },
                  bgcolor: BG_CARD,
                  borderRight: {
                    xs: 'none',
                    sm: idx % 2 === 0 ? `1px solid ${BORDER}` : 'none',
                    lg: idx < 3 ? `1px solid ${BORDER}` : 'none',
                  },
                  borderBottom: {
                    xs: idx < SECTORS.length - 1 ? `1px solid ${BORDER}` : 'none',
                    sm: idx < 2 ? `1px solid ${BORDER}` : 'none',
                    lg: 'none',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: ACCENT,
                    mb: 2.5,
                  }}
                >
                  {sector.name}
                </Typography>
                <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
                  {sector.items.map((item) => (
                    <Box
                      key={item}
                      component="li"
                      sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25, mb: 1 }}
                    >
                      <Box
                        aria-hidden="true"
                        sx={{
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          bgcolor: 'var(--dim-28)',
                          flexShrink: 0,
                          mt: '6px',
                        }}
                      />
                      <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.55, color: TEXT_DIM }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Typy worków ── */}
      <Box id="worki" sx={{ scrollMarginTop: '80px', py: { xs: 8, md: 10 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '280px 1fr' },
              gap: { xs: 4, md: 10 },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                  mb: 2,
                }}
              >
                Formaty opakowań
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.3rem', md: '1.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                }}
              >
                Typy worków
                VFFS
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 2.5,
              }}
            >
              {BAG_TYPES.map((bag) => (
                <Box
                  key={bag.name}
                  sx={{
                    p: 3,
                    bgcolor: BG_CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: '4px',
                  }}
                >
                  <Box
                    component="svg"
                    viewBox="0 0 100 130"
                    aria-hidden="true"
                    sx={{ display: 'block', width: 56, height: 'auto', mb: 2, color: 'var(--dim-55)' }}
                    dangerouslySetInnerHTML={{ __html: BAG_SVG[bag.svg] }}
                  />
                  <Typography
                    sx={{
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: 'var(--dim-85)',
                      mb: 1.25,
                      lineHeight: 1.3,
                    }}
                  >
                    {bag.name}
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.7, color: TEXT_DIM }}>
                    {bag.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Typography sx={{ fontSize: '0.78rem', lineHeight: 1.7, color: 'var(--dim-55)', mt: 3, ml: { md: 'calc(280px + 80px)' } }}>
            Formaty w katalogu Essegi: F700 i F8004S — pillow, square bottom, Stabilo · F1000 z wagą taśmową — pillow, gusset,
            Stabilo · F1000 z wagą ślimakową, EcoFocus, F1200, F1300 — pillow, gusset · F1400 COMBINED — pillow,
            gusset (worek w kartonie). Format trzeba potwierdzić dla zespołu formującego i wyposażenia konkretnej maszyny.
          </Typography>

          {/* Folia, nadruk i zgrzewanie */}
          <Box
            id="folie"
            sx={{
              mt: { xs: 6, md: 8 },
              pt: { xs: 6, md: 8 },
              borderTop: `1px solid ${BORDER}`,
              scrollMarginTop: '80px',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '280px 1fr' },
              gap: { xs: 4, md: 10 },
              alignItems: 'start',
            }}
          >
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Folie
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em', mb: 2 }}>
                Folia, nadruk i zgrzewanie
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.7, color: TEXT_DIM }}>
                Folia powinna być zgodna z maszyną, produktem i wymaganiami odbiorcy opakowania.
              </Typography>
            </Box>
            <Box>
              <Box sx={{ border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden', mb: 3 }}>
                {FILMS.map((f, idx) => (
                  <Box
                    key={f.material}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: '0.9fr 1.6fr 1fr' },
                      gap: { xs: 0.5, sm: 3 },
                      px: 3,
                      py: 1.75,
                      bgcolor: BG_CARD,
                      borderBottom: idx < FILMS.length - 1 ? `1px solid ${BORDER}` : 'none',
                    }}
                  >
                    <Typography sx={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--dim-85)' }}>{f.material}</Typography>
                    <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.55, color: TEXT_DIM }}>{f.props}</Typography>
                    <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.55, color: 'var(--dim-55)' }}>{f.example}</Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2, mb: 3 }}>
                {[
                  { title: 'Grubość', desc: 'Podaje się ją w mikrometrach: 100 µm = 0,10 mm. Grubsza folia nie zawsze oznacza lepszy worek — liczą się struktura, odporność na przebicie i wytrzymałość zgrzewu.' },
                  { title: 'Zgrzewanie', desc: 'Impulsowe: element grzejny nagrzewa się w cyklu zgrzewania. Hot-bar: listwy grzejne utrzymują stałą temperaturę roboczą. Dobór zależy od folii, grubości i czasu cyklu.' },
                  { title: 'Nadruk', desc: 'Pełną grafikę wykonuje dostawca folii. Fotokomórka znacznika nadruku pilnuje pozycji grafiki względem zgrzewu i cięcia, a drukarka na maszynie nanosi dane zmienne — datę, numer partii.' },
                ].map((b) => (
                  <Box key={b.title} sx={{ p: 2.5, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
                    <Typography variant="h3" sx={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.75 }}>{b.title}</Typography>
                    <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.65, color: TEXT_DIM }}>{b.desc}</Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ p: { xs: 2.5, md: 3 }, borderLeft: `3px solid ${ACCENT}`, bgcolor: `color-mix(in srgb, ${ACCENT} 6%, var(--bg-card))`, borderRadius: '4px' }}>
                <Typography sx={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.5 }}>Dlaczego szerokość folii ≠ szerokość worka?</Typography>
                <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.7, color: TEXT_DIM, mb: 1.25 }}>
                  Płaska folia owija się wokół tubusa formującego. Na obwód worka wpływają kształt tubusa, zakładki boczne
                  i zgrzew wzdłużny — dlatego format potwierdzamy na podstawie rysunku technicznego.
                </Typography>
                <Typography sx={{ fontSize: '0.78rem', lineHeight: 1.6, color: 'var(--dim-55)' }}>
                  Do zapytania o folię przydadzą się: materiał i struktura, grubość [µm], szerokość [mm], średnica i masa rolki,
                  rodzaj nadruku i znacznik nadruku, rysunek worka.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Worek w kartonie czy kartonowanie zbiorcze */}
          <Box
            id="karton"
            sx={{
              mt: { xs: 6, md: 8 },
              pt: { xs: 6, md: 8 },
              borderTop: `1px solid ${BORDER}`,
              scrollMarginTop: '80px',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '280px 1fr' },
              gap: { xs: 4, md: 10 },
              alignItems: 'start',
            }}
          >
            <Box>
              <Typography
              sx={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: ACCENT,
                mb: 2,
              }}
              >
                Kartony
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em', mb: 2 }}
              >
                Worek w kartonie czy kartonowanie zbiorcze?
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.7, color: TEXT_DIM }}>
                To różne technologie — łatwo je pomylić przy zapytaniu.
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.8, color: TEXT_DIM, mb: 3 }}>
                Standardowa maszyna VFFS formuje worek z folii. Gdy worek ma trafić do kartonu, Essegi oferuje{' '}
                <Box component="span" sx={{ fontWeight: 700, color: 'var(--dim-85)' }}>F1400 COMBINED</Box> — maszynę,
                która formuje i napełnia worek, a następnie automatycznie wkłada go do kartonu. Folia chroni produkt,
                karton nadaje kształt i chroni w transporcie.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3.5 }}>
                {['5–25 kg', 'pillow / gusset', 'MEC 8–15 · SYNCRO 10–20 worków/min', 'folia do 1380 mm', 'worek do 1280 × 670 mm'].map((chip) => (
                  <Box key={chip} sx={{ px: 1.5, py: 0.6, border: `1px solid ${BORDER}`, borderRadius: '3px', bgcolor: BG_CARD }}>
                    <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--dim-75)' }}>{chip}</Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
                {CARTON_NEEDS.map((row, idx) => (
                  <Box
                    key={row.need}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: '1fr 1.6fr' },
                      gap: { xs: 0.5, sm: 3 },
                      px: 3,
                      py: 1.75,
                      bgcolor: BG_CARD,
                      borderBottom: idx < CARTON_NEEDS.length - 1 ? `1px solid ${BORDER}` : 'none',
                    }}
                  >
                    <Typography sx={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--dim-85)', lineHeight: 1.5 }}>{row.need}</Typography>
                    <Typography sx={{ fontSize: '0.84rem', color: TEXT_DIM, lineHeight: 1.55 }}>{row.solution}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Integracja z ważeniem ── */}
      <Box id="dozowanie" sx={{ scrollMarginTop: '80px', bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '280px 1fr' },
              gap: { xs: 4, md: 10 },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                  mb: 2,
                }}
              >
                Dozowanie i ważenie
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.3rem', md: '1.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                }}
              >
                Integracja z systemami dozowania
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.8, color: TEXT_DIM, mb: 4 }}>
                Maszyna VFFS to tylko jeden element linii pakującej. Kluczowym komponentem jest
                system dozowania, który podaje produkt z odpowiednią masą lub objętością.
                MadejPak integruje maszyny Essegi z różnymi systemami ważenia i dozowania —
                dobierając je do produktu i wymaganej dokładności.
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                  gap: 2,
                }}
              >
                {[
                  {
                    title: 'Waga z podawaniem wibracyjnym (B/V-K)',
                    desc: 'Kanały wibracyjne podają produkt do komór wagowych. Do drobnych granulatów i mieszanek w mniejszych porcjach — kawa, ryż, nasiona.',
                  },
                  {
                    title: 'Waga ze ślimakami (B/2C-K)',
                    desc: 'Ślimaki podają proszek zgrubnie i dokładnie do układu ważącego. Do mąki, przypraw, mleka w proszku, cementu i premiksów.',
                  },
                  {
                    title: 'Dozownik kubkowy (DT)',
                    desc: 'Odmierza stałą objętość kubkami — do ryżu, nasion, cukru i regularnych granulatów. Masa porcji zależy od gęstości nasypowej produktu.',
                  },
                  {
                    title: 'Dozownik ślimakowy (DV5000)',
                    desc: 'Dozuje porcję proszku obrotami ślimaka — do mniejszych porcji proszków. Znaczenie mają płynność, stan zasypu i wilgotność.',
                  },
                  {
                    title: 'Waga z podajnikiem taśmowym (B/N-K)',
                    desc: 'Do granulatów i produktów sypkich — pellet, nawozy, sól, nasiona, materiały budowlane. Duże porcje, dozowanie zgrubne i dokładne.',
                  },
                  {
                    title: 'Waga wielogłowicowa',
                    desc: 'Do mieszanek i produktów nieregularnych — orzechy, przekąski, mrożonki. Łączy porcje z wielu głowic, by trafić w zadaną masę.',
                  },
                  {
                    title: 'Dozownik taśmowy objętościowy (DTS)',
                    desc: 'Do ziemi, torfu, kory i kompostu — gdy o porcji decyduje objętość w litrach, a nie tylko masa.',
                  },
                ].map((item) => (
                  <Box
                    key={item.title}
                    sx={{
                      p: 3,
                      bgcolor: BG_CARD,
                      border: `1px solid ${BORDER}`,
                      borderLeft: `3px solid ${BORDER}`,
                      borderRadius: '4px',
                      transition: 'border-left-color 0.15s ease',
                      '&:hover': { borderLeftColor: ACCENT },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        color: 'var(--dim-85)',
                        mb: 1,
                        lineHeight: 1.35,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.65, color: TEXT_DIM }}>
                      {item.desc}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ mt: 3, p: { xs: 2.5, md: 3 }, borderLeft: `3px solid ${ACCENT}`, bgcolor: 'var(--bg-card)', borderRadius: '4px' }}>
                <Typography sx={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.5 }}>Naważanie czy dozowanie objętościowe?</Typography>
                <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.7, color: TEXT_DIM }}>
                  Jeżeli wymaganie dotyczy 15 kg netto, podstawą doboru jest naważanie. Jeżeli produkt sprzedaje się np.
                  w workach 20 l, właściwe może być dozowanie objętościowe — ale ta sama objętość przy różnej gęstości
                  nasypowej nie ma stałej masy. Przykład: 15 kg pelletu przy gęstości 650 kg/m³ zajmuje ok. 23,1 l —
                  to objętość samego produktu, nie wymiar worka.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Jak dobieramy maszynę ── */}
      <Box id="dobor" sx={{ scrollMarginTop: '80px', py: { xs: 8, md: 10 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 5, md: 6 }, maxWidth: 720 }}>
            <Typography
              sx={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: ACCENT,
                mb: 2,
              }}
            >
              Dobór maszyny
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                mb: 2,
              }}
            >
              Maszynę dobieramy do produktu, nie do katalogu
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.8, color: TEXT_DIM }}>
              Wydajność z karty katalogowej to punkt wyjścia. O tym, ile worków na minutę osiągnie linia,
              decydują właściwości produktu, system dozowania i folia. Dlatego przed ofertą sprawdzamy:
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
              gap: 2,
              mb: { xs: 6, md: 8 },
            }}
          >
            {SELECTION_FACTORS.map((f, i) => (
              <Box key={f.title} sx={{ p: 3, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: ACCENT, mb: 1.25 }}>
                  {String(i + 1).padStart(2, '0')}
                </Typography>
                <Typography variant="h3" sx={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--dim-85)', mb: 1, lineHeight: 1.35 }}>
                  {f.title}
                </Typography>
                <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.65, color: TEXT_DIM }}>{f.desc}</Typography>
              </Box>
            ))}
          </Box>

          {/* Od produktu do maszyny */}
          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: '1.15rem', md: '1.25rem' }, fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.01em', mb: 2.5 }}
            >
              Od produktu do maszyny — pierwszy kierunek
            </Typography>
            <Box sx={{ border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
              <Box
                sx={{
                  display: { xs: 'none', md: 'grid' },
                  gridTemplateColumns: '1fr 1.6fr 1.4fr',
                  gap: 3,
                  px: 3,
                  py: 1.5,
                  bgcolor: BG_ALT,
                  borderBottom: `1px solid ${BORDER}`,
                }}
              >
                {['Produkt', 'Pierwszy kierunek', 'Na co zwracamy uwagę'].map((h) => (
                  <Typography key={h} sx={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: TEXT_DIM }}>
                    {h}
                  </Typography>
                ))}
              </Box>
              {PRODUCT_FIT.map((row, idx) => (
                <Box
                  key={row.product}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1.6fr 1.4fr' },
                    gap: { xs: 0.5, md: 3 },
                    px: 3,
                    py: 1.75,
                    bgcolor: BG_CARD,
                    borderBottom: idx < PRODUCT_FIT.length - 1 ? `1px solid ${BORDER}` : 'none',
                  }}
                >
                  <Typography sx={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--dim-85)', lineHeight: 1.5 }}>{row.product}</Typography>
                  <Typography sx={{ fontSize: '0.84rem', color: 'var(--dim-75)', lineHeight: 1.55 }}>{row.direction}</Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: TEXT_DIM, lineHeight: 1.55 }}>{row.watch}</Typography>
                </Box>
              ))}
            </Box>
            <Typography sx={{ fontSize: '0.75rem', lineHeight: 1.6, color: 'var(--dim-55)', mt: 1.5 }}>
              Orientacyjnie — wariant maszyny, dozowanie i wydajność potwierdzamy po analizie produktu.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '280px 1fr' },
              gap: { xs: 3, md: 10 },
              alignItems: 'start',
              pt: { xs: 5, md: 6 },
              borderTop: `1px solid ${BORDER}`,
            }}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: '1.15rem', md: '1.25rem' }, fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.01em', mb: 1.5 }}
              >
                Co przygotować do zapytania
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.7, color: TEXT_DIM, mb: 2.5 }}>
                Te dane wystarczą, żebyśmy wskazali właściwy model i wariant dozowania. Pomoże też próbka produktu, zdjęcie obecnego worka lub rysunek i zdjęcia miejsca na linię.
              </Typography>
              <Box
                component="a"
                href="#zapytaj"
                sx={{ fontSize: '0.8rem', fontWeight: 700, color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                Przejdź do formularza →
              </Box>
            </Box>
            <Box component="ol" sx={{ m: 0, p: 0, listStyle: 'none', display: 'grid', gap: 1.5 }}>
              {INQUIRY_CHECKLIST.map((item, i) => (
                <Box key={item.q} component="li" sx={{ display: 'flex', gap: 2, alignItems: 'baseline' }}>
                  <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: ACCENT, minWidth: 18 }}>{i + 1}.</Typography>
                  <Typography sx={{ fontSize: '0.88rem', lineHeight: 1.6, color: TEXT_DIM }}>
                    <Box component="span" sx={{ fontWeight: 700, color: 'var(--dim-85)' }}>{item.q}</Box> — {item.hint}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Masz już linię? Typowe problemy ── */}
      <Box id="problemy" sx={{ bgcolor: BG_ALT, py: { xs: 8, md: 10 }, borderBottom: `1px solid ${BORDER}`, scrollMarginTop: '80px' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '280px 1fr' }, gap: { xs: 4, md: 10 }, alignItems: 'start' }}>
            <Box>
              <Typography
              sx={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: ACCENT,
                mb: 2,
              }}
              >
                Modernizacja i serwis
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em', mb: 2 }}
              >
                Masz już linię? Od tych objawów zaczynamy diagnozę
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.7, color: TEXT_DIM, mb: 3 }}>
                Nie każdy problem wymaga nowej maszyny. Wąskie gardło często siedzi w dozowaniu,
                folii albo na końcu linii — i tam zaczynamy.
              </Typography>
              <Box
                component={Link}
                href="/serwis"
                sx={{ fontSize: '0.8rem', fontWeight: 700, color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                Serwis MadejPak →
              </Box>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2 }}>
              {LINE_PROBLEMS.map((p) => (
                <Box key={p.symptom} sx={{ p: 3, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
                  <Typography variant="h3" sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dim-85)', mb: 1 }}>
                    {p.symptom}
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.65, color: TEXT_DIM }}>{p.check}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Wyposażenie i integracja linii ── */}
      <Box sx={{ py: { xs: 8, md: 10 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 5, md: 6 }, maxWidth: 720 }}>
            <Typography
            sx={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: ACCENT,
                mb: 2,
              }}
            >
              Wyposażenie i integracja
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', mb: 2 }}
            >
              Więcej niż pakowaczka
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.8, color: TEXT_DIM }}>
              Maszynę Essegi uzupełniamy o opcje z katalogu producenta, a wokół niej budujemy resztę
              linii — od podania produktu po owiniętą paletę.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 3, md: 4 } }}>
            <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', p: { xs: 3, md: 3.5 } }}>
              <Typography variant="h3" sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.5 }}>
                Opcje maszyny Essegi
              </Typography>
              <Typography sx={{ fontSize: '0.75rem', color: 'var(--dim-55)', mb: 2.5 }}>
                Opcja z katalogu nie musi pasować do każdego modelu — dobieramy ją do konfiguracji.
              </Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2.5 }}>
                {MACHINE_OPTIONS.map((g) => (
                  <Box key={g.group}>
                    <Typography sx={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, mb: 1 }}>
                      {g.group}
                    </Typography>
                    <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
                      {g.items.map((it) => (
                        <Box key={it} component="li" sx={{ display: 'flex', gap: 1.25, mb: 0.75 }}>
                          <Box aria-hidden="true" sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'var(--dim-28)', flexShrink: 0, mt: '7px' }} />
                          <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.55, color: TEXT_DIM }}>{it}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
              <Box sx={{ px: { xs: 3, md: 3.5 }, pt: { xs: 3, md: 3.5 }, pb: 2 }}>
                <Typography variant="h3" sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.5 }}>
                  Co integrujemy wokół maszyny
                </Typography>
                <Typography sx={{ fontSize: '0.75rem', color: 'var(--dim-55)' }}>
                  Projekt, wykonanie i uruchomienie — jeden partner za całą linię.
                </Typography>
              </Box>
              {LINE_INTEGRATION.map((g) => (
                <Box
                  key={g.group}
                  component={Link}
                  href={g.href}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2,
                    px: { xs: 3, md: 3.5 },
                    py: 1.75,
                    borderTop: `1px solid ${BORDER}`,
                    textDecoration: 'none',
                    transition: 'background-color 0.15s ease',
                    '&:hover': { bgcolor: 'var(--surface-03)' },
                    '&:hover .int-link': { color: ACCENT },
                  }}
                >
                  <Box>
                    <Typography sx={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.25 }}>{g.group}</Typography>
                    <Typography sx={{ fontSize: '0.78rem', lineHeight: 1.55, color: TEXT_DIM }}>{g.desc}</Typography>
                  </Box>
                  <Typography className="int-link" sx={{ fontSize: '0.72rem', fontWeight: 600, color: TEXT_DIM, whiteSpace: 'nowrap', transition: 'color 0.15s ease' }}>
                    {g.link} →
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Realizacje z maszynami Essegi ── */}
      <Box sx={{ bgcolor: BG_ALT, py: { xs: 8, md: 10 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { sm: 'flex-end' },
              justifyContent: 'space-between',
              gap: 3,
              mb: { xs: 5, md: 6 },
            }}
          >
            <Box sx={{ maxWidth: 640 }}>
              <Typography
                sx={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                  mb: 2,
                }}
              >
                Realizacje
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', mb: 1.5 }}
              >
                Maszyny pionowe Essegi u naszych klientów
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.75, color: TEXT_DIM }}>
                Pellet, nawozy, chemia przemysłowa, kruszywa, nasiona i przekąski — linie, które
                zaprojektowaliśmy, zintegrowaliśmy i serwisujemy.
              </Typography>
            </Box>
            <Box
              component={Link}
              href="/realizacje"
              sx={{
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: TEXT_DIM,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                '&:hover': { color: ACCENT },
              }}
            >
              Wszystkie realizacje →
            </Box>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
              gap: 2,
            }}
          >
            {ESSEGI_CASES.map((c) => (
              <Box
                key={c.slug}
                component={Link}
                href={`/realizacje/${c.slug}`}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  p: 3,
                  bgcolor: BG_CARD,
                  border: `1px solid ${BORDER}`,
                  borderTop: `2px solid var(--surface-08)`,
                  borderRadius: '4px',
                  textDecoration: 'none',
                  transition: 'border-color 0.15s ease',
                  '&:hover': { borderTopColor: ACCENT, borderColor: 'var(--surface-13)' },
                  '&:hover .case-more': { color: ACCENT },
                }}
              >
                <Typography sx={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, mb: 1.25 }}>
                  {c.branzaLabel}
                </Typography>
                <Typography variant="h3" sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.75 }}>
                  {c.klient}
                </Typography>
                <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.6, color: TEXT_DIM, mb: 2, flex: 1 }}>
                  {c.tytul}
                </Typography>
                <Typography className="case-more" sx={{ fontSize: '0.75rem', fontWeight: 600, color: TEXT_DIM, transition: 'color 0.15s ease' }}>
                  Zobacz realizację →
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Partnerzy ── */}
      <Box sx={{ py: { xs: 8, md: 10 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: ACCENT,
              mb: 5,
            }}
          >
            Partnerzy technologiczni
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 3,
            }}
          >
            {[
              {
                name: 'Essegi',
                country: 'Włochy (Galliera Veneta)',
                scope: 'Pionowe maszyny pakujące VFFS',
                desc: 'Włoski producent maszyn VFFS z ponad 30-letnim doświadczeniem. Essegi specjalizuje się w pionowych maszynach form-fill-seal dla produktów spożywczych, chemicznych, budowlanych i ogrodniczych. Firma oferuje szeroką rodzinę maszyn (F700, F1000, F1200, F8004S) z możliwością doboru systemu dozowania do produktu.',
                href: 'https://www.essegi.com',
              },
              {
                name: 'Concetti',
                country: 'Włochy',
                scope: 'Systemy FFS, workowanie, paletyzacja',
                desc: 'Concetti projektuje kompletne linie workujące: systemy FFS z rękawa PE (FFS-E, CONTINUA — worki 10–50 kg, zależnie od systemu), maszyny do gotowych worków otwartych, systemy big-bag i paletyzatory — dla przemysłu chemicznego, budowlanego i rolno-spożywczego.',
                href: 'https://www.concetti.com',
              },
            ].map((p) => (
              <Box
                key={p.name}
                sx={{
                  p: { xs: 3.5, md: 4 },
                  bgcolor: BG_CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: '4px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: 2,
                    mb: 2.5,
                    flexWrap: 'wrap',
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '1.05rem',
                        fontWeight: 800,
                        color: 'var(--dim-85)',
                        letterSpacing: '-0.02em',
                        mb: 0.5,
                      }}
                    >
                      {p.name}
                    </Typography>
                    <Typography sx={{ fontSize: '0.72rem', color: 'var(--dim-42)' }}>
                      {p.country}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      px: 1.5,
                      py: 0.4,
                      bgcolor: `${ACCENT}15`,
                      border: `1px solid ${ACCENT}40`,
                      borderRadius: '3px',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      color: ACCENT,
                      letterSpacing: '0.06em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {p.scope}
                  </Box>
                </Box>
                <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.75, color: TEXT_DIM, mb: 3 }}>
                  {p.desc}
                </Typography>
                <Box
                  component="a"
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    fontSize: '0.75rem',
                    color: 'var(--dim-42)',
                    textDecoration: 'none',
                    transition: 'color 0.15s ease',
                    '&:hover': { color: TEXT_DIM },
                  }}
                >
                  {p.href.replace('https://', '')}
                  <Box
                    component="svg"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    sx={{ width: 11, height: 11 }}
                  >
                    <path
                      d="M6 3H3v10h10v-3M9 3h4v4M13 3l-6 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── FAQ ── */}
      <Box id="faq" sx={{ scrollMarginTop: '80px', bgcolor: BG_ALT, py: { xs: 8, md: 10 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '280px 1fr' }, gap: { xs: 4, md: 10 }, alignItems: 'start' }}>
            <Box>
              <Typography
              sx={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: ACCENT,
                mb: 2,
              }}
              >
                FAQ
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em' }}
              >
                Najczęstsze pytania o maszyny pionowe
              </Typography>
            </Box>
            <Box>
              {FAQ.map((f, idx) => (
                <Box
                  key={f.q}
                  component="details"
                  sx={{
                    borderTop: idx === 0 ? `1px solid ${BORDER}` : 'none',
                    borderBottom: `1px solid ${BORDER}`,
                    '& summary': { listStyle: 'none', cursor: 'pointer' },
                    '& summary::-webkit-details-marker': { display: 'none' },
                    '&[open] .faq-icon': { transform: 'rotate(45deg)' },
                  }}
                >
                  <Box component="summary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3, py: 2.25 }}>
                    <Typography variant="h3" sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dim-85)', lineHeight: 1.4 }}>
                      {f.q}
                    </Typography>
                    <Box className="faq-icon" aria-hidden="true" sx={{ color: ACCENT, fontSize: '1.3rem', lineHeight: 1, flexShrink: 0, transition: 'transform 0.2s ease' }}>
                      +
                    </Box>
                  </Box>
                  <Typography sx={{ fontSize: '0.88rem', lineHeight: 1.75, color: TEXT_DIM, pb: 2.5, pr: { md: 6 } }}>
                    {f.a}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Słownik pojęć */}
          <Box
            sx={{
              mt: { xs: 6, md: 8 },
              pt: { xs: 6, md: 8 },
              borderTop: `1px solid ${BORDER}`,
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '280px 1fr' },
              gap: { xs: 4, md: 10 },
              alignItems: 'start',
            }}
          >
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Słownik
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em' }}>
                Pojęcia, które usłyszysz od technologa
              </Typography>
            </Box>
            <Box component="dl" sx={{ m: 0, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, columnGap: 4, rowGap: 2.5 }}>
              {GLOSSARY.map((g) => (
                <Box key={g.term}>
                  <Box component="dt" sx={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.25 }}>
                    {g.term}
                    {g.en && (
                      <Box component="span" sx={{ fontWeight: 500, color: 'var(--dim-55)' }}> · {g.en}</Box>
                    )}
                  </Box>
                  <Box component="dd" sx={{ m: 0, fontSize: '0.82rem', lineHeight: 1.6, color: TEXT_DIM }}>{g.def}</Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Dlaczego MadejPak (autoryzowany przedstawiciel vs importer) ── */}
      <TrustDifferentiator />

      {/* ── CTA ── */}
      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 5, md: 12 },
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                  mb: 2,
                }}
              >
                Dobór maszyny
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.6rem', md: '2rem' },
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  mb: 2.5,
                }}
              >
                Dobierzemy maszynę
                do Twojego produktu i procesu
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.8, color: TEXT_DIM, mb: 4 }}>
                Wybór maszyny VFFS zależy od produktu, systemu dozowania, wymaganej wydajności
                i formatu worka. Skontaktuj się z nami — pomożemy wybrać odpowiednią serię
                Essegi i zintegrować ją z Twoją linią.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Box
                  component={Link}
                  href="/kontakt"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: 3.5,
                    py: 1.5,
                    bgcolor: ACCENT,
                    borderRadius: '3px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--text)',
                    textDecoration: 'none',
                    transition: 'background-color 0.15s ease',
                    '&:hover': { bgcolor: '#D45509' },
                  }}
                >
                  Wyślij zapytanie
                  <ArrowRight />
                </Box>
                <Box
                  component={Link}
                  href="/realizacje"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: 3.5,
                    py: 1.5,
                    border: `1px solid ${BORDER}`,
                    borderRadius: '3px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: TEXT_DIM,
                    textDecoration: 'none',
                    transition: 'border-color 0.15s ease, color 0.15s ease',
                    '&:hover': {
                      borderColor: 'var(--dim-20)',
                      color: 'var(--dim-85)',
                    },
                  }}
                >
                  Realizacje
                  <ArrowRight />
                </Box>
              </Box>
            </Box>

            {/* Quick summary */}
            <Box
              sx={{
                bgcolor: BG_CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${ACCENT}`,
                borderRadius: '4px',
                p: { xs: 3.5, md: 4 },
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                  mb: 3,
                }}
              >
                Podsumowanie oferty VFFS
              </Typography>
              {[
                'Essegi F700 — food, 50 g – 3 kg, max 320×420 mm',
                'Essegi F1000 — proszki, granulaty, materiały budowlane',
                'Essegi F1200/F1300 — duże worki 5–50 kg: pasze, nawozy, ziemia, kora',
                'Essegi F8004S — worek Stabilo, 50 g – 5 kg',
                'Essegi F1400 COMBINED — worek w kartonie (bag-in-box), 5–25 kg',
                'Essegi W1200 Fluid — produkty płynne',
                'Concetti FFS-E / CONTINUA — worki przemysłowe 10–50 kg',
              ].map((item) => (
                <Box
                  key={item}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.5,
                    py: 0.85,
                    borderBottom: `1px solid ${BORDER}`,
                    '&:last-child': { borderBottom: 'none' },
                  }}
                >
                  <Box
                    aria-hidden="true"
                    sx={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      bgcolor: ACCENT,
                      flexShrink: 0,
                      mt: '6px',
                    }}
                  />
                  <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.6, color: TEXT_DIM }}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Lead Form ── */}
      <LeadForm />

      {/* ── Breadcrumb ── */}
      <Box sx={{ bgcolor: 'var(--bg-alt)', borderTop: `1px solid var(--border)` }}>
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <Typography variant="body2" sx={{ color: 'var(--dim-72)', display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap', fontSize: '0.8rem' }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link href="/maszyny" style={{ color: 'inherit', textDecoration: 'none' }}>Maszyny</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link href="/maszyny/partnerzy" style={{ color: 'inherit', textDecoration: 'none' }}>Maszyny partnerów</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <span>Pionowe maszyny pakujące VFFS</span>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
