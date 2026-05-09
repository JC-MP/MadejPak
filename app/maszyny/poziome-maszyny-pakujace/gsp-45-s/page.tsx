import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE, COMPANY } from '@/lib/seo.config';
import LeadForm from '../LeadForm';

export const metadata: Metadata = {
  title: 'GSP 45 S – Maszyna Flow Pack Wspornikowa | MadejPak',
  description:
    'GSP 45 S – elektroniczna maszyna flow pack z budową wspornikową (cantilever). Pakowanie produktów spożywczych i niespożywczych, szybka zmiana formatu, opcja drukarki do daty ważności.',
  keywords: [
    'GSP 45 S', 'maszyna flow pack cantilever', 'maszyna pakująca wspornikowa',
    'flow pack spożywcze niespożywcze', 'maszyna pakująca zmiana formatu',
    'pakowanie flow pack mała maszyna',
  ],
  alternates: {
    canonical: `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-45-s`,
    languages: {
      'pl': `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-45-s`,
      'en': `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace/gsp-45-s`,
      'x-default': `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-45-s`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-45-s`,
    title:       'GSP 45 S – Maszyna Flow Pack Wspornikowa | MadejPak',
    description: 'Elektroniczna maszyna flow pack z budową wspornikową. Pakowanie spożywcze i niespożywcze, szybka zmiana formatu, bogata konfiguracja opcji.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'GSP 45 S – maszyna flow pack – MadejPak' }],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'GSP 45 S',
  description: 'Elektroniczna pozioma maszyna pakująca flow pack z budową wspornikową (cantilever). Produkty spożywcze i niespożywcze.',
  brand: { '@type': 'Brand', name: 'GSP – Grupa Tecnopack' },
  manufacturer: { '@type': 'Organization', name: 'GSP – Grupa Tecnopack' },
  offers: {
    '@type': 'Offer',
    seller: { '@type': 'Organization', name: COMPANY.name, url: COMPANY.url },
    areaServed: 'PL',
    availability: 'https://schema.org/InStock',
  },
};

// ─── Design tokens ───────────────────────────────────────────────────────────
const BG       = 'var(--bg)';
const BG_CARD  = 'var(--bg-card)';
const BG_ALT   = 'var(--bg-alt)';
const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

function StatChip({ value, label }: { value: string; label: string }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
      <Typography sx={{ fontSize: { xs: '1.25rem', md: '1.625rem' }, fontWeight: 800,
        letterSpacing: '-0.03em', color: ACCENT, lineHeight: 1 }}>
        {value}
      </Typography>
      <Typography sx={{ fontSize: '0.7rem', color: TEXT_DIM, letterSpacing: '0.04em', lineHeight: 1.4 }}>
        {label}
      </Typography>
    </Box>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const DLA_KOGO = [
  {
    title: 'Producenci szukający uniwersalnej maszyny pakującej',
    desc: 'GSP 45 S sprawdzi się w zakładach, które pakują różne typy produktów i potrzebują jednej, elastycznej maszyny do wielu zastosowań. Może pracować zarówno z produktami spożywczymi, jak i niespożywczymi.',
  },
  {
    title: 'Firmy pakujące pojedyncze produkty i multipaki',
    desc: 'Model GSP 45 S nadaje się do pakowania produktów jednostkowych oraz opakowań wielosztukowych. To dobre rozwiązanie dla produkcji, w której zmienia się format, liczba produktów w opakowaniu lub rodzaj asortymentu.',
  },
  {
    title: 'Zakłady z częstymi zmianami formatów',
    desc: 'Maszyna została zaprojektowana z myślą o szybkim i wygodnym przezbrojeniu. Elastyczność zmiany formatu pozwala sprawnie dostosować produkcję do różnych wariantów opakowań.',
  },
  {
    title: 'Producenci ceniący higienę i łatwy dostęp',
    desc: 'Konstrukcja wspornikowa (cantilever) zapewnia łatwy dostęp do kluczowych obszarów maszyny. Ułatwia to czyszczenie, kontrolę i bieżącą obsługę — szczególnie ważne przy pakowaniu produktów spożywczych.',
  },
  {
    title: 'Firmy potrzebujące prostej konserwacji',
    desc: 'GSP 45 S została zaprojektowana z myślą o łatwej konserwacji i bezpiecznej obsłudze. Otwarta konstrukcja oraz dobry dostęp do elementów roboczych skracają czas czynności serwisowych.',
  },
];

const ZALETY = [
  {
    title: 'Wszechstronne zastosowanie',
    desc: 'GSP 45 S może pakować szeroki zakres produktów spożywczych i niespożywczych. Sprawdza się przy produkcji jednostkowej oraz wielopakach.',
  },
  {
    title: 'Szybka zmiana formatu',
    desc: 'Elastyczna konstrukcja pozwala sprawnie przechodzić pomiędzy różnymi wymiarami produktu i typami opakowań. To ogranicza przestoje i zwiększa swobodę planowania produkcji.',
  },
  {
    title: 'Niezawodna praca',
    desc: 'Maszyna to stabilne rozwiązanie do codziennego pakowania w zakładach produkcyjnych. Elektroniczne sterowanie wspiera powtarzalność procesu.',
  },
  {
    title: 'Łatwy dostęp do maszyny',
    desc: 'Konstrukcja wspornikowa (cantilever) zapewnia wygodny dostęp do obszaru roboczego. Ułatwia czyszczenie, obsługę i konserwację.',
  },
  {
    title: 'Higieniczna konstrukcja',
    desc: 'GSP 45 S została zaprojektowana zgodnie z zasadami łatwego utrzymania czystości — ważne przy pakowaniu produktów spożywczych oraz w zakładach wymagających regularnej sanifikacji.',
  },
  {
    title: 'Bezpieczna obsługa',
    desc: 'Maszyna została skonstruowana z myślą o bezpieczeństwie operatora, łatwym dostępie serwisowym i wygodnej codziennej pracy.',
  },
  {
    title: 'Możliwość znakowania produktu',
    desc: 'Do maszyny można dodać drukarkę do nadruku daty ważności, numeru partii lub innych oznaczeń produkcyjnych.',
  },
];

const OPCJE = [
  'Fotokomórka do pracy z folią z nadrukiem',
  'Drukarka (data ważności, numer partii)',
  'Podwójny uchwyt rolki folii',
  'Przedłużenie podajnika wejściowego',
  'Wykonanie ze stali nierdzewnej (INOX)',
  'Kółka pod maszyną',
  'Przekładnia do krótkiego i długiego skoku',
  'Noże zig-zag',
  'Wykrojnik euroslot',
  'System „no product — no bag"',
];

const ZASTOSOWANIA = [
  'Produkty spożywcze',
  'Produkty niespożywcze',
  'Pakowanie jednostkowe',
  'Opakowania wielosztukowe (multipaki)',
  'Produkty wymagające częstej zmiany formatu',
  'Folie z nadrukiem (z fotokomórką)',
  'Produkty wymagające oznaczenia daty ważności lub numeru partii',
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Gsp45SPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <Box component="section" sx={{ position: 'relative', overflow: 'hidden', bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 10, md: 14 } }}>
        {/* Zdjęcie maszyny po prawej */}
        <Box aria-hidden="true" sx={{
          display: { xs: 'none', md: 'block' },
          position: 'absolute', top: 0, right: 0,
          width: '50%', height: '100%', zIndex: 0, pointerEvents: 'none',
        }}>
          <Box sx={{
            position: 'absolute', inset: 0, zIndex: 1,
            background: [
              'linear-gradient(to right, var(--bg) 0%, color-mix(in srgb, var(--bg) 75%, transparent) 18%, color-mix(in srgb, var(--bg) 25%, transparent) 45%, transparent 100%)',
              'linear-gradient(to bottom, color-mix(in srgb, var(--bg) 55%, transparent) 0%, transparent 20%, transparent 80%, color-mix(in srgb, var(--bg) 55%, transparent) 100%)',
            ].join(', '),
          }} />
          <Image src="/images/machines/flowpack-gsp-45s-page.jpg" alt="" fill
            sizes="50vw" style={{ objectFit: 'cover', opacity: 0.5 }} priority />
        </Box>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: 640 }}>
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
              GSP – Grupa Tecnopack
            </Typography>
            <Typography component="h1" sx={{
              fontSize: { xs: '2rem', md: '2.75rem', lg: '3.25rem' },
              fontWeight: 800, letterSpacing: '-0.028em', color: 'var(--text)', lineHeight: 1.1, mb: 2,
            }}>
              GSP 45 S
            </Typography>
            <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, color: ACCENT,
              fontWeight: 600, mb: 3, letterSpacing: '-0.01em' }}>
              Uniwersalna maszyna do codziennej produkcji.
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, color: TEXT_DIM, lineHeight: 1.75, mb: 4 }}>
              Elektroniczna pozioma maszyna pakująca flow pack z budową wspornikową (cantilever).
              Łączy prostą obsługę, elastyczność formatów i stabilną pracę — zarówno przy produktach
              spożywczych, jak i niespożywczych, w produkcji jednostkowej i wielosztukowej.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, mb: 4,
              borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, py: 2.5 }}>
              <StatChip value="Cantilever" label="budowa wspornikowa" />
              <StatChip value="2w1" label="spoż. i niesp." />
              <StatChip value="Multi" label="jednostk. i wielopaki" />
              <StatChip value="10+" label="opcji wyposażenia" />
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              <Button component={Link} href="#zapytaj" variant="contained" disableElevation
                sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, fontSize: '0.875rem',
                  textTransform: 'none', px: 3.5, py: 1.5, borderRadius: '6px',
                  '&:hover': { bgcolor: '#F07520', transform: 'translateY(-1px)' } }}>
                Zapytaj o maszynę
              </Button>
              <Button component={Link} href="/maszyny/poziome-maszyny-pakujace" variant="outlined"
                sx={{ borderColor: 'var(--dim-18)', color: 'var(--dim-85)',
                  fontWeight: 600, fontSize: '0.875rem', textTransform: 'none', px: 3.5, py: 1.5,
                  borderRadius: '6px', '&:hover': { borderColor: 'var(--dim-42)', color: 'var(--text)', bgcolor: 'var(--surface-04)' } }}>
                Wszystkie maszyny flow pack
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* ── DLA KOGO ─────────────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Zastosowanie
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 8 }, maxWidth: 560,
          }}>
            Dla kogo jest GSP 45 S?
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2.5 }}>
            {DLA_KOGO.map((item, i) => (
              <Box key={item.title} sx={{
                p: { xs: 3, md: 3.5 }, bgcolor: BG_CARD,
                border: `1px solid ${BORDER}`, borderRadius: '4px',
                borderTop: `2px solid ${ACCENT}`,
              }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 1.5 }}>
                  <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: ACCENT,
                    letterSpacing: '-0.04em', lineHeight: 1, opacity: 0.5, flexShrink: 0 }}>
                    {String(i + 1).padStart(2, '0')}
                  </Typography>
                  <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.3 }}>
                    {item.title}
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: '0.84rem', color: TEXT_DIM, lineHeight: 1.7 }}>
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── ZALETY ───────────────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Cechy maszyny
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 8 }, maxWidth: 560,
          }}>
            Zalety GSP 45 S
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' }, gap: 2.5 }}>
            {ZALETY.map((item) => (
              <Box key={item.title} sx={{
                p: { xs: 3, md: 3.5 }, bgcolor: BG_CARD,
                border: `1px solid ${BORDER}`, borderTop: `2px solid var(--dim-10)`,
                borderRadius: '4px',
                '&:hover': { borderTopColor: ACCENT },
                transition: 'border-color 0.2s ease',
              }}>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 1.5 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: '0.84rem', color: TEXT_DIM, lineHeight: 1.7 }}>
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── OPCJE ────────────────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Konfiguracja
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: 1.5,
          }}>
            Dostępne opcje wyposażenia
          </Typography>
          <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, mb: { xs: 5, md: 6 }, maxWidth: 520 }}>
            GSP 45 S można wyposażyć w szereg dodatkowych opcji dopasowanych do konkretnego procesu pakowania.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' }, gap: 1.5 }}>
            {OPCJE.map((opcja) => (
              <Box key={opcja} sx={{
                display: 'flex', alignItems: 'flex-start', gap: 1.5,
                p: 2, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px',
              }}>
                <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, mt: '7px', flexShrink: 0 }} />
                <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.55 }}>
                  {opcja}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── ZASTOSOWANIA + MADEJPAK ──────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 6, md: 8 } }}>

            {/* Zastosowania */}
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Zastosowania
              </Typography>
              <Typography component="h2" sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 800,
                letterSpacing: '-0.02em', color: 'var(--text)', mb: 3,
              }}>
                GSP 45 S sprawdzi się przy pakowaniu:
              </Typography>
              <Stack spacing={1.5}>
                {ZASTOSOWANIA.map((item) => (
                  <Box key={item} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                    <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, mt: '8px', flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.65 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            {/* MadejPak */}
            <Box sx={{
              p: { xs: 3, md: 4 }, bgcolor: BG_CARD,
              border: `1px solid ${BORDER}`, borderTop: `2px solid ${ACCENT}`,
              borderRadius: '4px',
            }}>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                GSP 45 S w MadejPak
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 2 }}>
                Dobieramy konfigurację pod Twój proces.
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.75, mb: 2.5 }}>
                GSP 45 S to rozwiązanie dla firm, które potrzebują uniwersalnej, elastycznej i wygodnej
                w obsłudze maszyny flow pack.
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.75 }}>
                W MadejPak dobieramy konfigurację maszyny do produktu, folii i sposobu pracy zakładu.
                Do maszyny możemy dodać drukarkę, system pracy z folią z nadrukiem, przedłużenie
                podajnika lub inne wyposażenie dopasowane do procesu produkcyjnego.
                Zapewniamy również własny serwis posprzedażowy oraz dostęp do części zamiennych.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── FORMULARZ ────────────────────────────────────────────── */}
      <Box id="zapytaj">
        <LeadForm defaultModel="GSP 45 S" />
      </Box>

      {/* ── BREADCRUMB ───────────────────────────────────────────── */}
      <Box sx={{ bgcolor: BG_ALT, borderTop: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <Typography variant="body2" sx={{
            color: 'var(--dim-72)', display: 'flex', gap: 1,
            alignItems: 'center', flexWrap: 'wrap', fontSize: '0.8rem',
          }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link href="/maszyny" style={{ color: 'inherit', textDecoration: 'none' }}>Maszyny</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link href="/maszyny/poziome-maszyny-pakujace" style={{ color: 'inherit', textDecoration: 'none' }}>
              Poziome maszyny pakujące
            </Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <span>GSP 45 S</span>
          </Typography>
        </Container>
      </Box>
    </main>
  );
}
