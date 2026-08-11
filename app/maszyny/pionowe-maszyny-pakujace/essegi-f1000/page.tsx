import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LeadForm from '../LeadForm';
import { SITE_URL } from '@/lib/seo.config';

const PAGE_URL = `${SITE_URL}/maszyny/pionowe-maszyny-pakujace/essegi-f1000`;

export const metadata: Metadata = {
  title: 'Essegi F1000 – Pionowa Maszyna Pakująca VFFS do 25 kg',
  description:
    'Essegi F1000 — pionowa maszyna pakująca VFFS do produktów sypkich i granulowanych 1–25 kg. Wersje Standard, EcoFocus, Motion. Format do 470×680 mm, 10–22 szt./min. Zapytaj MadejPak.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    siteName: 'MadejPak',
    title: 'Essegi F1000 – Pionowa Maszyna Pakująca VFFS | MadejPak',
    description: 'VFFS do 25 kg — produkty sypkie, granulowane, chemiczne. Format 470×680 mm. Wersje EcoFocus i Motion SU&SO.',
    locale: 'pl_PL',
    images: [{ url: `${SITE_URL}/images/interpack/essegi-2.jpg`, width: 1200, height: 800, alt: 'Essegi F1000 pionowa maszyna pakująca' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      name: 'Essegi F1000',
      description: 'Pionowa maszyna pakująca VFFS do produktów sypkich i granulowanych o masie 1–25 kg. Dostępna w wersjach Standard, EcoFocus i Motion SU&SO.',
      brand: { '@type': 'Brand', name: 'Essegi' },
      manufacturer: { '@type': 'Organization', name: 'Essegi' },
      category: 'Pionowe maszyny pakujące VFFS',
      image: `${SITE_URL}/images/interpack/essegi-2.jpg`,
      url: PAGE_URL,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'MadejPak', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Maszyny', item: `${SITE_URL}/maszyny` },
        { '@type': 'ListItem', position: 3, name: 'Pionowe maszyny pakujące', item: `${SITE_URL}/maszyny/pionowe-maszyny-pakujace` },
        { '@type': 'ListItem', position: 4, name: 'Essegi F1000', item: PAGE_URL },
      ],
    },
  ],
};

const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const TEXT    = 'var(--text)';
const DIM     = 'var(--dim-72)';
const BG      = 'var(--bg)';
const BG_CARD = 'var(--bg-card)';
const BG_ALT  = 'var(--bg-alt)';

function StatChip({ value, label }: { value: string; label: string }) {
  return (
    <Box sx={{ textAlign: 'center', py: 1.5 }}>
      <Typography sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 800, color: '#fff', lineHeight: 1 }}>
        {value}
      </Typography>
      <Typography sx={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', mt: 0.5, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        {label}
      </Typography>
    </Box>
  );
}

const STRENGTHS = [
  { title: 'Wersja EcoFocus', desc: 'Specjalne szczęki termozgrzewające skupiają ciepło precyzyjnie — oszczędność energii i lepsza jakość spoiny.' },
  { title: 'Wersja Motion SU&SO', desc: 'System poruszania folii góra–dół (SU) i obrotu (SO) eliminuje naprężenia i fałdy — idealna dla trudnych materiałów foliowych.' },
  { title: 'Szeroki zakres wagowy', desc: 'Format od 1 do 25 kg — jeden model obsługuje zarówno małe opakowania półkilogramowe, jak i duże worki do 25 kg.' },
  { title: 'Stabilne dozowanie', desc: 'Integracja z wagami wielogłowicowymi GSP i innymi systemami podawania zapewnia powtarzalność porcji.' },
  { title: 'Łatwa zmiana formatu', desc: 'Szybka regulacja szerokości formy i długości zgrzewu — zmiana produktu w kilkanaście minut.' },
  { title: 'Solidna konstrukcja', desc: 'Rama ze stali nierdzewnej, IP65 w strefach mycia — nadaje się do branży spożywczej i chemicznej.' },
];

const USE_CASES = [
  'Mąka, grysik, otręby, kasze',
  'Nasiona, zboża, pasza dla zwierząt',
  'Granulat techniczny, pellet',
  'Sól, cukier, produkty chemiczne sypkie',
  'Kawa ziarnista i mielona 1–5 kg',
  'Mrożonki i warzywa IQF',
];

const SPECS: { label: string; value: string }[] = [
  { label: 'Zakres wagowy', value: '1 – 25 kg' },
  { label: 'Maks. szerokość folii', value: '470 mm' },
  { label: 'Maks. długość worka', value: '680 mm' },
  { label: 'Wydajność MEC', value: '10 – 14 szt./min' },
  { label: 'Wydajność SYNCRO', value: '16 – 22 szt./min' },
  { label: 'Wersje', value: 'Standard / EcoFocus / Motion SU&SO' },
  { label: 'Napęd zgrzewu', value: 'Serwomotor (opcja: pneumatyczny)' },
  { label: 'Zasilanie', value: '400 V / 50 Hz' },
];

const OPTIONS = [
  'Specjalne szczęki EcoFocus (skupione ciepło)',
  'System Motion SU i/lub SO',
  'Drukarka daty (termotransfer / inkjet)',
  'Czujnik szczelności worka',
  'Moduł odgazowujący (kawa, herbata)',
  'Dziurkowanie z zaworkiem',
  'Integracja z wagą wielogłowicową GSP',
  'Stacja paletyzacji na końcu linii',
];

export default function EssegiF1000Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Box sx={{ height: { xs: 64, lg: 72 }, bgcolor: 'var(--bg)' }} />

      {/* ── HERO ── */}
      <Box component="section" sx={{ position: 'relative', minHeight: { xs: 480, md: 560 }, display: 'flex', alignItems: 'center', overflow: 'hidden', bgcolor: '#0a0a0b' }}>
        <Box sx={{ position: 'absolute', inset: 0 }}>
          <Image
            src="/images/interpack/essegi-2.jpg"
            alt="Essegi F1000 pionowa maszyna pakująca VFFS"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', opacity: 0.45 }}
            priority
          />
          <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(10,10,11,0.85) 40%, rgba(10,10,11,0.3) 100%)' }} />
        </Box>

        <Container maxWidth="xl" sx={{ position: 'relative', py: { xs: 10, md: 14 } }}>
          <Box sx={{ maxWidth: 680 }}>
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
              Pionowe maszyny pakujące VFFS / Essegi F1000
            </Typography>
            <Typography component="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.1, mb: 2.5 }}>
              Essegi F1000
            </Typography>
            <Typography sx={{ fontSize: { xs: '1rem', md: '1.15rem' }, color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, mb: 4, maxWidth: 540 }}>
              Pionowa maszyna pakująca VFFS do produktów sypkich i granulowanych w zakresie 1–25&nbsp;kg.
              Dostępna w wersjach EcoFocus i Motion SU&SO — dla wymagających materiałów foliowych.
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, mb: 4, borderTop: '1px solid rgba(255,255,255,0.12)', borderBottom: '1px solid rgba(255,255,255,0.12)', py: 2.5 }}>
              <StatChip value="25 kg" label="maks. porcja" />
              <StatChip value="22" label="szt./min max" />
              <StatChip value="3" label="wersje" />
              <StatChip value="30+" label="lat Essegi" />
            </Box>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button component={Link} href="#zapytaj" variant="contained" disableElevation
                sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, textTransform: 'none', px: 3.5, py: 1.5, borderRadius: '6px', '&:hover': { bgcolor: '#F07520' } }}>
                Zapytaj o F1000
              </Button>
              <Button component={Link} href="/maszyny/pionowe-maszyny-pakujace" variant="outlined"
                sx={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.8)', fontWeight: 600, textTransform: 'none', px: 3, py: 1.5, borderRadius: '6px', '&:hover': { borderColor: 'rgba(255,255,255,0.6)', bgcolor: 'rgba(255,255,255,0.06)' } }}>
                Wszystkie modele
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── DLA KOGO ── */}
      <Box component="section" sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 6, md: 10 }, alignItems: 'start' }}>
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Dla kogo
              </Typography>
              <Typography component="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, letterSpacing: '-0.02em', color: TEXT, lineHeight: 1.2, mb: 3 }}>
                Maszyna do dużych i ciężkich opakowań sypkich
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: DIM, lineHeight: 1.8 }}>
                Essegi F1000 sprawdza się wszędzie tam, gdzie standardowe maszyny VFFS są zbyt małe — przy workowaniu mąki, pasz, granulatu lub produktów chemicznych w opakowaniach od 1 do 25 kg.
                Wersja EcoFocus zapewnia niższe koszty energii i lepszą jakość spoiny, a Motion SU&SO pozwala pakować nawet z trudną folią.
              </Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
              {[
                { icon: '🌾', label: 'Producenci mąki i kasz' },
                { icon: '🐾', label: 'Pasze dla zwierząt' },
                { icon: '☕', label: 'Kawa 1–5 kg' },
                { icon: '🧪', label: 'Produkty chemiczne sypkie' },
                { icon: '🥶', label: 'Mrożonki i warzywa IQF' },
                { icon: '🌱', label: 'Nasiona i zboża' },
              ].map(({ icon, label }) => (
                <Box key={label} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', p: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Typography sx={{ fontSize: '1.4rem', lineHeight: 1 }}>{icon}</Typography>
                  <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: TEXT }}>{label}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── ZALETY ── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Kluczowe zalety
          </Typography>
          <Typography component="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, letterSpacing: '-0.02em', color: TEXT, lineHeight: 1.2, mb: 6, maxWidth: 600 }}>
            Co wyróżnia Essegi F1000
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' }, gap: 2 }}>
            {STRENGTHS.map(({ title, desc }) => (
              <Box key={title} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', p: 3 }}>
                <Box sx={{ width: 32, height: 3, bgcolor: ACCENT, borderRadius: 1, mb: 2.5 }} />
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: TEXT, mb: 1 }}>{title}</Typography>
                <Typography sx={{ fontSize: '0.875rem', color: DIM, lineHeight: 1.7 }}>{desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── DANE TECHNICZNE ── */}
      <Box component="section" sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Dane techniczne
          </Typography>
          <Typography component="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, letterSpacing: '-0.02em', color: TEXT, lineHeight: 1.2, mb: 6, maxWidth: 600 }}>
            Parametry Essegi F1000
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 8 }, alignItems: 'start' }}>
            <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
              {SPECS.map(({ label, value }, i) => (
                <Box key={label} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3, py: 2, borderBottom: i < SPECS.length - 1 ? `1px solid ${BORDER}` : 'none', bgcolor: i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.02)' }}>
                  <Typography sx={{ fontSize: '0.875rem', color: DIM }}>{label}</Typography>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: TEXT, textAlign: 'right', maxWidth: '55%' }}>{value}</Typography>
                </Box>
              ))}
            </Box>
            <Box>
              <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: TEXT, mb: 2, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Dostępne opcje
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {OPTIONS.map(opt => (
                  <Box key={opt} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                    <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, mt: '7px', flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '0.875rem', color: DIM, lineHeight: 1.6 }}>{opt}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── ZASTOSOWANIA ── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 6, md: 10 } }}>
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Zastosowania
              </Typography>
              <Typography component="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, letterSpacing: '-0.02em', color: TEXT, lineHeight: 1.2, mb: 4 }}>
                Produkty pakowane przez F1000
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {USE_CASES.map(uc => (
                  <Box key={uc} sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '0.95rem', color: DIM }}>{uc}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', p: { xs: 3, md: 4 } }}>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                MadejPak jako integrator
              </Typography>
              <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: TEXT, mb: 2, lineHeight: 1.4 }}>
                Kompletna linia pakująca — waga + F1000 + paletyzacja
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: DIM, lineHeight: 1.8, mb: 3 }}>
                Jako autoryzowany partner Essegi w Polsce dobieramy system dozowania (wagi wielogłowicowe GSP, śruby Archimedes), integrujemy go z F1000 i opcjonalnie podłączamy stację paletyzacji cobotami DOBOT na końcu linii.
              </Typography>
              <Button component={Link} href="#zapytaj" variant="contained" disableElevation
                sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, textTransform: 'none', px: 3, py: 1.25, borderRadius: '6px', '&:hover': { bgcolor: '#F07520' } }}>
                Omów projekt linii
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── LEAD FORM ── */}
      <LeadForm defaultModel="Essegi F1000" />

      {/* ── BREADCRUMB ── */}
      <Box component="nav" sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: 2 }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
            {[
              { label: 'MadejPak', href: '/' },
              { label: 'Maszyny', href: '/maszyny' },
              { label: 'Pionowe maszyny pakujące', href: '/maszyny/pionowe-maszyny-pakujace' },
              { label: 'Essegi F1000', href: null },
            ].map(({ label, href }, i, arr) => (
              <Box key={label} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {href ? (
                  <Typography component={Link} href={href} sx={{ fontSize: '0.78rem', color: DIM, textDecoration: 'none', '&:hover': { color: ACCENT } }}>{label}</Typography>
                ) : (
                  <Typography sx={{ fontSize: '0.78rem', color: TEXT, fontWeight: 600 }}>{label}</Typography>
                )}
                {i < arr.length - 1 && <Typography sx={{ fontSize: '0.78rem', color: 'var(--dim-28)' }}>/</Typography>}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}
