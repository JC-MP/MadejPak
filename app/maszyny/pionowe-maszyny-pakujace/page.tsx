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
  title: 'Pionowe Maszyny Pakujące VFFS – Essegi F700, F1000, F1200, F8004S',
  description:
    'Pionowe maszyny pakujące VFFS Essegi do produktów sypkich, granulowanych i proszkowych. Modele F700 (50 g–3 kg), F1000 (1–25 kg), F1200 (5–50 kg), F8004S (worek Stabilo). Dostawa i integracja — MadejPak.',
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
    // long-tail
    'ile kosztuje maszyna VFFS', 'maszyna pakująca do 25 kg',
    'pionowa maszyna pakująca dla małej firmy',
    'automatyczne pakowanie produktów sypkich',
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type:        'website',
    url:         PAGE_URL,
    siteName:    'MadejPak',
    title:       'Pionowe Maszyny Pakujące VFFS Essegi – F700, F1000, F1200, F8004S | MadejPak',
    description: 'Maszyny VFFS Essegi do pakowania produktów sypkich i granulowanych. Zakres 50 g–50 kg, wydajność do 70 szt./min. Autoryzowany partner Essegi w Polsce — MadejPak.',
    images: [{ url: `${SITE_URL}/images/interpack/essegi-2.jpg`, width: 1200, height: 800, alt: 'Essegi VFFS — pionowe maszyny pakujące MadejPak' }],
    locale:      'pl_PL',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Pionowe Maszyny Pakujące VFFS Essegi | MadejPak',
    description: 'F700, F1000, F1200, F8004S — maszyny VFFS do produktów sypkich 50 g–50 kg. Autoryzowany partner Essegi w Polsce.',
    images:      [`${SITE_URL}/images/interpack/essegi-2.jpg`],
  },
};

// FAQ — treść widoczna na stronie i w schemacie FAQPage (musi być identyczna)
const FAQ = [
  { q: 'Ile worków na godzinę zrobi pionowa maszyna pakująca?', a: 'Katalogowo od kilku do 30 worków na minutę — zależnie od modelu i wersji. Na przykład F1000: MEC 10–14, SYNCRO 16–22, Motion do 30 worków/min. Realną wydajność dla Twojego produktu potwierdzamy po doborze dozowania i analizie końca linii: jeśli maszyna robi 20 worków/min, a paletyzacja 15, cała linia nie osiągnie 20 bez bufora.' },
  { q: 'Czym różni się dozowanie wagowe od objętościowego?', a: 'Waga odmierza masę netto, np. 15 kg. Dozownik objętościowy odmierza objętość, np. 20 l ziemi. Gdy gęstość produktu zmienia się z wilgotnością, ta sama objętość nie zawsze waży tyle samo — wtedy dobieramy ważenie.' },
  { q: 'Czy szerokość folii to szerokość gotowego worka?', a: 'Nie. Płaska folia owija się wokół rury formującej i jest łączona zgrzewem wzdłużnym, więc wstęga jest szersza niż gotowy worek, a przy fałdach bocznych dochodzą zakładki. Ostateczny format ustalamy z rysunku opakowania.' },
  { q: 'Czy na worku może być logo, data i numer partii?', a: 'Tak. Grafika jest na folii z nadrukiem, a fotokomórka pilnuje jej położenia względem cięcia. Dane zmienne — datę, partię, kod — nanosi drukarka zamontowana na maszynie.' },
  { q: 'Czy każda folia będzie pracować na maszynie?', a: 'Nie. Sprawdzamy strukturę i grubość folii, zgrzewalność, odporność na przebicie oraz wymagania, np. kontakt z żywnością. Dlatego prosimy o próbkę folii lub jej specyfikację od dostawcy.' },
  { q: 'Czy maszyna pionowa może zapakować worek do kartonu?', a: 'Standardowa maszyna VFFS formuje worek z folii. Do worka w kartonie (bag-in-box) służy Essegi F1400 COMBINED. Jeśli do kartonu mają trafiać gotowe worki, potrzebna jest osobna kartoniarka zbiorcza współpracująca z maszyną VFFS.' },
  { q: 'Czy można zautomatyzować tylko paletyzację, bez wymiany pakowaczki?', a: 'Tak. Koniec linii — odbiór, obracanie i spłaszczanie worków, robot lub cobot, paletyzację i owijanie palet — możemy zautomatyzować przy istniejącej maszynie pakującej.' },
  { q: 'Co przygotować do zapytania ofertowego?', a: 'Nazwę i właściwości produktu, masę lub objętość worka, wymaganą wydajność, rodzaj opakowania oraz informację, co dzieje się z workiem dalej. Najlepiej z próbką produktu, zdjęciem obecnego worka lub rysunkiem i zdjęciami miejsca na linię.' },
];

// Wersje maszyn Essegi — krótkie wyjaśnienie oznaczeń z tabel
const VERSIONS = [
  { name: 'PN', desc: 'Ruch grupy zgrzewającej realizowany pneumatycznie — w mniejszych seriach, np. F700.' },
  { name: 'MEC', desc: 'Napęd mechaniczny. W F1000 z jedną wagą taśmową: 10–14 worków/min.' },
  { name: 'SYNCRO', desc: 'Grupa zgrzewająca z napędem brushless, przy dużych workach często z dwiema wagami — F1000: 16–22 worki/min.' },
  { name: 'MOTION SU&SO', desc: 'Ruch ciągły folii i zespół zgrzewający jadący razem z nią — F1000: do 30 worków/min.' },
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
  { symptom: 'Za dużo przezbrojeń', check: 'Liczymy receptury, gramatury i szerokości folii. Inna długość worka to zwykle zmiana ustawień, inna szerokość — często wymiana rury formującej.' },
  { symptom: 'Worek źle leży na palecie', check: 'Format, fałdy boczne, spłaszczanie i orientowanie worka — a na końcu robotyzacja i stabilność palety.' },
  { symptom: 'Za mała wydajność', check: 'Szukamy wąskiego gardła: dozownik, szczęki zgrzewające, transport wyjściowy, paletyzacja albo zasilanie produktem.' },
];

// Opcje z katalogu akcesoriów Essegi — dostępność zależy od modelu
const MACHINE_OPTIONS = [
  { group: 'Folia i nadruk', items: ['Fotokomórka nadruku', 'Centrowanie folii', 'Drukarka / znakowarka — data, partia, kod'] },
  { group: 'Kształt worka', items: ['Fałdy boczne i płaskie dno', 'Cztery zgrzewy narożne Stabilo', 'Uchwyt w worku'] },
  { group: 'Odbiór i kontrola', items: ['Taśma wyjściowa, stół obrotowy', 'Obracanie i spłaszczanie worka', 'Waga kontrolna', 'Podawanie worka do kartonu'] },
  { group: 'Obsługa', items: ['Podest i schody', 'Elektryczny podnośnik rolki folii', 'Wstrząsanie worka — osadzanie produktu'] },
];

// Co MadejPak integruje wokół maszyny
const LINE_INTEGRATION = [
  { group: 'Podanie produktu', desc: 'Przenośniki, ślimaki, zasobniki, odbiór z silosu lub istniejącej instalacji.', href: '/maszyny/transport-i-koniec-linii', link: 'Transport' },
  { group: 'Ważenie i kontrola', desc: 'Wagi wielogłowicowe, kontrola masy, detektor metalu, odrzut, etykietowanie.', href: '/maszyny/wazenie-i-dozowanie', link: 'Ważenie i dozowanie' },
  { group: 'Koniec linii', desc: 'Transport i orientowanie worków, robot lub cobot, paletyzacja, owijanie palet.', href: '/maszyny/paletyzacja', link: 'Paletyzacja' },
  { group: 'Sterowanie', desc: 'Integracja i komunikacja z urządzeniami, które już pracują w zakładzie.', href: '/maszyny/robotyzacja-pakowania', link: 'Robotyzacja' },
];

const BAG_TYPES = [
  { name: 'Pillow — poduszka', desc: 'Zgrzew wzdłużny i dwa poprzeczne. Najprostszy format — często wystarcza dla granulatów, soli czy pelletu.' },
  { name: 'Gusset — fałdy boczne', desc: 'Boki worka są zaginane w zakładki. Po napełnieniu worek ma regularniejszy kształt i łatwiej układa się na palecie.' },
  { name: 'Stabilo — 4 zgrzewy narożne', desc: 'Dodatkowe zgrzewy w narożnikach nadają workowi „pudełkowy” kształt — ważne dla wyglądu i ekspozycji, np. karmy czy kawy.' },
  { name: 'Square bottom — płaskie dno', desc: 'Formowane dno pozwala workowi stabilnie stać. To nadal worek foliowy — wymaga odpowiedniego oprzyrządowania.' },
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

      {/* ── Co to jest i do czego służy ── */}
      <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 10 } }}>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Czym jest ta maszyna
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, mb: 3 }}>
                Masz produkt sypki, proszkowy lub granulowany i chcesz go pakować w torebki?
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: TEXT_DIM, lineHeight: 1.8 }}>
                Pionowa maszyna pakująca pobiera folię z rolki, formuje z niej torebkę, dozuje do środka odmierzoną porcję produktu i zgrzewa opakowanie — wszystko automatycznie, w jednym cyklu. Na wyjściu masz gotowe, szczelne torebki w równych porcjach, gotowe do sprzedaży lub dalszego pakowania zbiorczego.
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Kiedy to rozwiązanie jest dla Ciebie
              </Typography>
              {[
                'Pakujesz ręcznie i chcesz to zautomatyzować — maszyna zastępuje kilka stanowisk i pracuje bez przerwy.',
                'Potrzebujesz stałych porcji — każda torebka waży dokładnie tyle samo, bez odchyłek.',
                'Twój produkt to coś sypkiego: mąka, cukier, kawa, granulat, proszek, kasza, nawóz, karma.',
                'Chcesz różne formaty torebek — maszyna zmienia format bez wymiany całego oprzyrządowania.',
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

      {/* ── Jak działa VFFS ── */}
      <Box sx={{ py: { xs: 6, md: 8 }, borderBottom: `1px solid ${BORDER}` }}>
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
                Zasada działania
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
                Jeden cykl — od folii do gotowego worka
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
                gap: 2,
              }}
            >
              {[
                { n: '01', title: 'Formowanie', desc: 'Rolka folii jest prowadzona przez głowicę formującą, która nadaje jej kształt rury.' },
                { n: '02', title: 'Zgrzew podłużny', desc: 'Folia jest zgrzewana wzdłuż — tworzy się zamknięty rękaw o zadanej średnicy.' },
                { n: '03', title: 'Dozowanie', desc: 'Produkt jest podawany do wnętrza rękawa zgodnie z ustawionym systemem dozowania.' },
                { n: '04', title: 'Zgrzew poprzeczny', desc: 'Worek jest zamykany od dołu i góry — cięty i wyrzucany jako gotowe opakowanie.' },
              ].map((step) => (
                <Box
                  key={step.n}
                  sx={{
                    p: 2.5,
                    bgcolor: BG_CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: '4px',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      color: ACCENT,
                      letterSpacing: '0.1em',
                      mb: 1.5,
                    }}
                  >
                    {step.n}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: 'var(--dim-85)',
                      mb: 1,
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.78rem', lineHeight: 1.65, color: TEXT_DIM }}>
                    {step.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Serie Essegi ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
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
      <Box sx={{ py: { xs: 8, md: 10 }, borderBottom: `1px solid ${BORDER}` }}>
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
                  <Box sx={{ width: 24, height: 2, bgcolor: ACCENT, mb: 2.5, borderRadius: '1px' }} />
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
            Stabilo · F1000 z wagą ślimakową, EcoFocus, F1200, F1300 — pillow, gusset. Dostępny format wymaga
            odpowiedniego oprzyrządowania maszyny.
          </Typography>

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
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 10 } }}>
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
                    title: 'Waga wibracyjna (B/V-K)',
                    desc: 'Kanały wibracyjne podają produkt do komór wagowych. Do drobnych granulatów i mieszanek w mniejszych porcjach — kawa, ryż, nasiona.',
                  },
                  {
                    title: 'Waga dwuślimakowa (B/2C)',
                    desc: 'Ślimaki podają proszek zgrubnie i dokładnie do układu ważącego. Do mąki, przypraw, mleka w proszku, cementu i premiksów.',
                  },
                  {
                    title: 'Kubkowy objętościowy (DT)',
                    desc: 'Odmierza stałą objętość kubkami — do regularnych granulatów, makaronów, fasoli. Masa porcji zależy od gęstości nasypowej produktu.',
                  },
                  {
                    title: 'Waga taśmowa (B/N-K)',
                    desc: 'Do granulatów i produktów sypkich — pellet, nawozy, sól, nasiona, materiały budowlane. Duże porcje, dozowanie zgrubne i dokładne.',
                  },
                  {
                    title: 'Wielogłowicowy',
                    desc: 'Do mieszanek i produktów nieregularnych — orzechy, przekąski, mrożonki. Łączy porcje z wielu głowic, by trafić w zadaną masę.',
                  },
                  {
                    title: 'Taśmowy objętościowy (DTS)',
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
              <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.7, color: 'var(--dim-55)', mt: 3 }}>
                Wagi ważą produkt, dozowniki objętościowe odmierzają objętość — to nie jest zamiennik
                dokładności wagowej. Przy wymaganej masie netto i zmiennej gęstości produktu dobieramy ważenie.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Jak dobieramy maszynę ── */}
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
                Dostępność zależy od modelu i konfiguracji.
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
      <Box sx={{ bgcolor: BG_ALT, py: { xs: 8, md: 10 }, borderBottom: `1px solid ${BORDER}` }}>
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
