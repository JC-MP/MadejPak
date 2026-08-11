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

const PAGE_URL = `${SITE_URL}/maszyny/pionowe-maszyny-pakujace`;

export const metadata: Metadata = {
  title: 'Pionowe Maszyny Pakujące VFFS – Essegi F700, F1000, F1200, F8004S | MadejPak',
  description:
    'Pionowe maszyny pakujące VFFS Essegi do produktów sypkich, granulowanych i proszkowych. Modele F700 (50 g–3 kg), F1000 (1–25 kg), F1200 (5–50 kg), F8004S (4-side seal). Dostawa i integracja — MadejPak.',
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
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Product',
            name: 'Essegi F700',
            description: 'Kompaktowa maszyna VFFS do żywności i drobnych granulatów. Zakres 50 g–3 kg, format do 320×420 mm, do 70 szt./min.',
            url: `${PAGE_URL}/essegi-f700`,
            image: `${SITE_URL}/images/interpack/essegi-1.jpg`,
            brand: { '@type': 'Brand', name: 'Essegi' },
            manufacturer: { '@type': 'Organization', name: 'Essegi' },
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Product',
            name: 'Essegi F1000',
            description: 'Maszyna VFFS do proszków i granulatów przemysłowych 1–25 kg. Wersje Standard, EcoFocus, Motion SU&SO.',
            url: `${PAGE_URL}/essegi-f1000`,
            image: `${SITE_URL}/images/interpack/essegi-2.jpg`,
            brand: { '@type': 'Brand', name: 'Essegi' },
            manufacturer: { '@type': 'Organization', name: 'Essegi' },
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Product',
            name: 'Essegi F1200 / F1300',
            description: 'Maszyna VFFS do dużych worków 5–50 kg. Format do 980×570 mm, rolka folii 1180 mm.',
            url: `${PAGE_URL}/essegi-f1200`,
            image: `${SITE_URL}/images/interpack/essegi-3.jpg`,
            brand: { '@type': 'Brand', name: 'Essegi' },
            manufacturer: { '@type': 'Organization', name: 'Essegi' },
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Product',
            name: 'Essegi F8004S',
            description: 'Maszyna VFFS z czterostronnym zgrzewem (4-side seal). Opakowania 50 g–5 kg, do 70 szt./min. Snacki, kawa, słodycze.',
            url: `${PAGE_URL}/essegi-f8004s`,
            image: `${SITE_URL}/images/interpack/essegi-1.jpg`,
            brand: { '@type': 'Brand', name: 'Essegi' },
            manufacturer: { '@type': 'Organization', name: 'Essegi' },
          },
        },
      ],
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
    dosing: ['Wagowy taśmowy (B/N-K)', 'Podwójny dozownik ślimakowy (B-2C)', 'Objętościowy taśmowy (DT10)', 'Dozownik do cieczy'],
    href: '/maszyny/pionowe-maszyny-pakujace/essegi-f1000',
  },
  {
    model: 'F1200 / F1300',
    label: 'Seria F1200 / F1300',
    scope: 'Ziemia, kora, kompost, duże formaty',
    desc: 'Maszyny do workowania produktów ogrodniczych i sypkich luzem — ziemi, kory, kompostu i torfu. Większy format worka, dozowanie objętościowym podajnikiem taśmowym.',
    products: ['Ziemia ogrodnicza, torf, kora', 'Kompost, nawozy organiczne', 'Podłoża uprawowe', 'Substancje sypkie luzem'],
    params: [
      { label: 'Przeznaczenie', value: 'Worki duże — produkty ogrodnicze i bulk' },
      { label: 'Dozowanie', value: 'Objętościowy podajnik taśmowy (DTS80)' },
    ],
    dosing: ['Objętościowy podajnik taśmowy DTS80'],
    href: '/maszyny/pionowe-maszyny-pakujace/essegi-f1200',
  },
  {
    model: 'F8004S',
    label: 'F8004S — wersja przemysłowa',
    scope: 'Duże wydajności, produkcja przemysłowa',
    desc: 'Przemysłowa maszyna VFFS do zastosowań wymagających wysokiej wydajności i ciągłości procesu. Przeznaczona do dużych wolumenów produkcji z wymagającymi systemami wagowymi.',
    products: ['Produkty masowe', 'Przemysłowe wolumeny produkcji'],
    params: [
      { label: 'Przeznaczenie', value: 'Wysoka wydajność, produkcja ciągła' },
    ],
    dosing: ['Systemy wagowe dedykowane do dużych wydajności'],
    href: '/maszyny/pionowe-maszyny-pakujace/essegi-f8004s',
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
    items: ['Kawa, kakao, przyprawy', 'Makaron, ryż, kasze', 'Suszone owoce, orzechy', 'Mąka, skrobia, cukier', 'Karma dla zwierząt'],
  },
  {
    name: 'Chemiczna / FMCG',
    items: ['Proszki do prania', 'Środki czyszczące', 'Nawozy, granulaty chemiczne'],
  },
  {
    name: 'Budowlana',
    items: ['Cement, tynk', 'Mieszanki budowlane', 'Piasek, żwir, kruszywa'],
  },
  {
    name: 'Ogrodnicza',
    items: ['Ziemia ogrodnicza, torf, kora', 'Kompost, podłoża uprawowe', 'Granulat drzewny (pellet)'],
  },
];

const BAG_TYPES = [
  { name: 'Pillow bag', desc: 'Standardowy woreczek z uszczelnieniem czołowym i tylnym — najpopularniejszy format dla produktów sypkich i granulowanych.' },
  { name: 'Gusseted bag', desc: 'Woreczek z bocznym rozszerzeniem — większa pojemność przy podobnym formacie folii, lepsza stabilność na półce.' },
  { name: 'Block bottom', desc: 'Woreczek z płaskim, prostokątnym dnem — stabilnie stoi na półce, profesjonalny wygląd opakowania.' },
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
              { model: 'Essegi F1000', range: '1 – 25 kg', speed: 'do 22 szt./min', tag: 'Proszki, granulaty', href: '/maszyny/pionowe-maszyny-pakujace/essegi-f1000', img: '/images/interpack/essegi-2.jpg' },
              { model: 'Essegi F1200', range: '5 – 50 kg', speed: 'do 22 szt./min', tag: 'Duże worki bulk', href: '/maszyny/pionowe-maszyny-pakujace/essegi-f1200', img: '/images/interpack/essegi-3.jpg' },
              { model: 'Essegi F8004S', range: '50 g – 5 kg', speed: 'do 70 szt./min', tag: 'Zgrzew 4-stronny', href: '/maszyny/pionowe-maszyny-pakujace/essegi-f8004s', img: '/images/interpack/essegi-1.jpg' },
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
        </Container>
      </Box>

      {/* ── Concetti FFS ── */}
      <Box sx={{ py: { xs: 8, md: 10 }, borderBottom: `1px solid ${BORDER}` }}>
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
                Przemysłowe aplikacje — worki otwarte i duże formaty.
              </Typography>
            </Box>

            <Box>
              <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.8, color: TEXT_DIM, mb: 3.5 }}>
                Concetti dostarcza systemy FFS (Form-Fill-Seal) do przemysłowego workowania
                z folii rurowej polietylenowej. Rozwiązania Concetti uzupełniają ofertę maszyn
                Essegi w segmencie dużych worków (25–50 kg) i workowania luzem — m.in. dla
                przemysłu chemicznego, budowlanego i rolno-spożywczego.
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
                    desc: 'Workowanie z folii rurowej polietylenowej. Trwałe i odporne opakowanie dla produktów przemysłowych.',
                  },
                  {
                    model: 'CONTINUA',
                    desc: 'System FFS w konfiguracji standardowej. Ciągły proces workowania o wysokiej wydajności.',
                  },
                  {
                    model: 'CONTINUA 6x',
                    desc: 'Konfiguracja sześciostanowiskowa — sześć równoległych pozycji workowania dla maksymalnej wydajności.',
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
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
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
                    title: 'Wagowy wibro-kanałowy',
                    desc: 'Dla produktów granulowanych i ziarnistych — kawa, ryż, nasiona. Wysoka dokładność przy szybkim cyklu.',
                  },
                  {
                    title: 'Ślimakowy (auger)',
                    desc: 'Do produktów proszkowych — mąka, przyprawy, mleko w proszku, cement. Precyzyjne dozowanie masowe.',
                  },
                  {
                    title: 'Kubkowy objętościowy',
                    desc: 'Do produktów regularnych kształtowo — makarony, fasolki, groszek. Prosta i szybka regulacja objętości.',
                  },
                  {
                    title: 'Taśmowy wagowy',
                    desc: 'Do produktów sypkich luzem i materiałów budowlanych — duże porcje, stabilna praca przy zróżnicowanych produktach.',
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
            </Box>
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
                desc: 'Concetti projektuje kompletne linie workujące i systemy FFS do workowania przemysłowego z folii rurowej. Rozwiązania Concetti FFS-E i CONTINUA obsługują worki otwarte i duże formaty (25–50 kg) dla przemysłu chemicznego, budowlanego i rolno-spożywczego.',
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

      {/* ── Dlaczego MadejPak (autoryzowany przedstawiciel vs importer) ── */}
      <TrustDifferentiator />

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
                'Essegi F1200/F1300 — ziemia, kora, kompost (duże formaty)',
                'Essegi F8004S — przemysłowa wydajność',
                'Essegi W1200 Fluid — produkty płynne',
                'Concetti FFS-E / CONTINUA — worki przemysłowe 25–50 kg',
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
