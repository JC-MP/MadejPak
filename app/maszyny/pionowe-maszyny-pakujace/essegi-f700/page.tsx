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
  title: 'Essegi F700 – pionowa maszyna pakująca VFFS 30–70 szt./min | MadejPak',
  description:
    'Essegi F700 – kompaktowa maszyna VFFS do pakowania żywności i drobnych granulatów. 50 g–3 kg, worki pillow/stabilo, 30–70 szt./min. Dozownik kubkowy lub waga wibro-kanałowa.',
  keywords: [
    'Essegi F700', 'maszyna VFFS F700', 'pionowa maszyna pakująca granulaty',
    'pakowanie kawy maszyna', 'pakowanie ryżu maszyna', 'VFFS spożywcze',
  ],
  alternates: { canonical: `${SITE_URL}/maszyny/pionowe-maszyny-pakujace/essegi-f700` },
  openGraph: {
    url:   `${SITE_URL}/maszyny/pionowe-maszyny-pakujace/essegi-f700`,
    title: 'Essegi F700 – pionowa maszyna VFFS | MadejPak',
    description: 'Kompaktowa maszyna VFFS Essegi F700. 30–70 szt./min, 50 g–3 kg.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Essegi F700 – MadejPak' }],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Essegi F700',
  description: 'Kompaktowa pionowa maszyna VFFS do produktów spożywczych i granulatów. 50 g–3 kg, 30–70 szt./min.',
  brand: { '@type': 'Brand', name: 'Essegi' },
  manufacturer: { '@type': 'Organization', name: 'ESSEGI 2 s.r.l.' },
  offers: {
    '@type': 'Offer',
    seller: { '@type': 'Organization', name: COMPANY.name, url: COMPANY.url },
    areaServed: 'PL',
    availability: 'https://schema.org/InStock',
  },
};

const BG      = 'var(--bg)';
const BG_CARD = 'var(--bg-card)';
const BG_ALT  = 'var(--bg-alt)';
const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
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

const DLA_KOGO = [
  { title: 'Producenci kawy, herbaty i przypraw', desc: 'F700 obsługuje produkty o różnej granulacji — od grubszej kawy ziarnistej po drobne przyprawy. Dostępna z wagą wibro-kanałową lub dozownikiem kubkowym.' },
  { title: 'Producenci makaronu, ryżu i kasz', desc: 'Dozownik kubkowy (DT) zapewnia szybki i dokładny podział porcji produktów regularnych kształtowo — makaron krótki, ryż, kasza.' },
  { title: 'Producenci słodyczy, orzechów i bakalii', desc: 'F700 pakuje suszone owoce, orzechy, pestki, ciasteczka i draże. Wersja SYNCRO z wagą wielogłowicową daje do 70 szt./min.' },
  { title: 'Producenci pet food i karmy', desc: 'Karma dla zwierząt w formie granulatu to typowe zastosowanie F700. Dostępna w wykonaniu ze stali nierdzewnej dla łatwego czyszczenia.' },
  { title: 'Firmy wchodzące w automatyzację pakowania', desc: 'Kompaktowa budowa i prosta obsługa — dobre wejście w automatyzację dla firm pakujących dotąd ręcznie lub półautomatycznie.' },
];

const ZALETY = [
  { title: '30–70 opakowań na minutę', desc: 'Wersja PN (pneumatyczna): 30–40 szt./min. Wersja SYNCRO z napędem brushless: do 70 szt./min z wagą wielogłowicową.' },
  { title: 'Zakres 50 g – 3 kg', desc: 'F700 obsługuje szeroki zakres porcji — od małych torebek 100 g po większe opakowania 3 kg. Z dozownikiem DT możliwy zakres do 5 kg.' },
  { title: 'Trzy systemy dozowania', desc: 'Waga wibro-kanałowa (B/V-K), dozownik kubkowy objętościowy (DT) lub waga wielogłowicowa (multihead). Dobór do produktu i dokładności.' },
  { title: 'Trzy formaty worków', desc: 'Pillow bag, square bottom (płaskie dno) i stabilo bag. Zmiana formatu bez wymiany całego oprzyrządowania.' },
  { title: 'Stal nierdzewna opcjonalnie', desc: 'Rama dostępna w malowanej stali lub stali nierdzewnej 314/316 — dla branż wymagających wysokich standardów higienicznych.' },
  { title: 'Zgrzew impulsowy lub gorący', desc: 'Do wyboru zgrzew impulsowy (impulse) lub gorącym elementem (hot bar) — w zależności od rodzaju folii.' },
];

const SPECS = [
  { label: 'Zakres wagowy (PN)',     value: '50 g – 3 kg' },
  { label: 'Zakres wagowy (DT)',     value: '50 g – 5 kg' },
  { label: 'Max. format worka',      value: '320 × 420 mm' },
  { label: 'Max. szerokość rolki',   value: '680 mm' },
  { label: 'Wydajność (PN)',         value: '30–40 szt./min' },
  { label: 'Wydajność (SYNCRO)',     value: '40–70 szt./min' },
  { label: 'Moc (PN)',               value: '4–6 kW' },
  { label: 'Moc (SYNCRO)',           value: '6–10 kW' },
  { label: 'Ruch zgrzewu (PN)',      value: 'Pneumatyczny' },
  { label: 'Ruch zgrzewu (SYNCRO)', value: 'Silnik brushless' },
  { label: 'Typy worków',           value: 'Pillow, square bottom, stabilo' },
  { label: 'Materiał ramy',         value: 'Stal malowana / nierdzewna 314–316' },
];

const OPCJE = [
  'Waga wibro-kanałowa B/V-K',
  'Dozownik kubkowy objętościowy DT',
  'Waga wielogłowicowa (SYNCRO)',
  'Pionowy dozownik ślimakowy DV5000',
  'Wykonanie ze stali nierdzewnej 314/316',
  'Zgrzew impulsowy lub gorący (hot bar)',
  'Drukarka (data ważności, numer partii)',
  'Podajnik wylotowy',
];

export default function EssegiF700Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* HERO */}
      <Box component="section" sx={{ position: 'relative', overflow: 'hidden', bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 10, md: 14 } }}>
        <Box aria-hidden="true" sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
          <Box sx={{ position: 'absolute', inset: 0, zIndex: 1, background: ['linear-gradient(to right, var(--bg) 0%, color-mix(in srgb, var(--bg) 75%, transparent) 18%, color-mix(in srgb, var(--bg) 25%, transparent) 45%, transparent 100%)', 'linear-gradient(to bottom, color-mix(in srgb, var(--bg) 55%, transparent) 0%, transparent 20%, transparent 80%, color-mix(in srgb, var(--bg) 55%, transparent) 100%)'].join(', ') }} />
          <Image src="/images/interpack/essegi-1.jpg" alt="" fill sizes="50vw" style={{ objectFit: 'cover', opacity: 0.5 }} priority />
        </Box>
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: 640 }}>
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
              Essegi — pionowe maszyny pakujące VFFS
            </Typography>
            <Typography component="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem', lg: '3.25rem' }, fontWeight: 800, letterSpacing: '-0.028em', color: 'var(--text)', lineHeight: 1.1, mb: 2 }}>
              Essegi F700
            </Typography>
            <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, color: ACCENT, fontWeight: 600, mb: 3, letterSpacing: '-0.01em' }}>
              Kompaktowa. Wszechstronna. Sprawdzona w żywności.
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, color: TEXT_DIM, lineHeight: 1.75, mb: 4 }}>
              Pionowa maszyna VFFS dla produktów spożywczych i drobnych granulatów. Zakres 50 g–3 kg,
              trzy systemy dozowania do wyboru, worki pillow, square bottom i stabilo.
              Wydajność do 70 szt./min w wersji SYNCRO.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, mb: 4, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, py: 2.5 }}>
              <StatChip value="70" label="szt./min max" />
              <StatChip value="3 kg" label="max. porcja" />
              <StatChip value="3" label="formaty worka" />
              <StatChip value="30+" label="lat Essegi" />
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              <Button component={Link} href="#zapytaj" variant="contained" disableElevation sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, fontSize: '0.875rem', textTransform: 'none', px: 3.5, py: 1.5, borderRadius: '6px', '&:hover': { bgcolor: '#F07520' } }}>
                Zapytaj o maszynę
              </Button>
              <Button component={Link} href="/maszyny/pionowe-maszyny-pakujace" variant="outlined" sx={{ borderColor: 'var(--dim-18)', color: 'var(--dim-85)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'none', px: 3.5, py: 1.5, borderRadius: '6px', '&:hover': { borderColor: 'var(--dim-42)', color: 'var(--text)', bgcolor: 'var(--surface-04)' } }}>
                Wszystkie maszyny VFFS
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* DLA KOGO */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>Zastosowanie</Typography>
          <Typography component="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 8 }, maxWidth: 560 }}>
            Dla kogo jest Essegi F700?
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2.5 }}>
            {DLA_KOGO.map((item, i) => (
              <Box key={item.title} sx={{ p: { xs: 3, md: 3.5 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', borderTop: `2px solid ${ACCENT}` }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 1.5 }}>
                  <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: ACCENT, letterSpacing: '-0.04em', lineHeight: 1, opacity: 0.5, flexShrink: 0 }}>
                    {String(i + 1).padStart(2, '0')}
                  </Typography>
                  <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.3 }}>{item.title}</Typography>
                </Box>
                <Typography sx={{ fontSize: '0.84rem', color: TEXT_DIM, lineHeight: 1.7 }}>{item.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ZALETY */}
      <Box component="section" sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>Cechy maszyny</Typography>
          <Typography component="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 8 }, maxWidth: 560 }}>
            Zalety Essegi F700
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' }, gap: 2.5 }}>
            {ZALETY.map((item) => (
              <Box key={item.title} sx={{ p: { xs: 3, md: 3.5 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `2px solid var(--dim-10)`, borderRadius: '4px', '&:hover': { borderTopColor: ACCENT }, transition: 'border-color 0.2s ease' }}>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 1.5 }}>{item.title}</Typography>
                <Typography sx={{ fontSize: '0.84rem', color: TEXT_DIM, lineHeight: 1.7 }}>{item.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* DANE TECHNICZNE */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: { xs: 6, md: 8 } }}>
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>Dane techniczne</Typography>
              <Typography component="h2" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)', mb: 3 }}>Specyfikacja Essegi F700</Typography>
              <Box sx={{ border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
                {SPECS.map((spec, i) => (
                  <Box key={spec.label} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2.5, py: 1.5, bgcolor: i % 2 === 0 ? BG_CARD : 'var(--surface-03)', borderBottom: i < SPECS.length - 1 ? `1px solid ${BORDER}` : 'none' }}>
                    <Typography sx={{ fontSize: '0.78rem', color: 'var(--dim-38)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{spec.label}</Typography>
                    <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, fontWeight: 500, textAlign: 'right' }}>{spec.value}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>Konfiguracja</Typography>
              <Typography component="h2" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)', mb: 1.5 }}>Dostępne opcje i warianty</Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, mb: 3, lineHeight: 1.7 }}>
                F700 dostępna w wersjach PN (pneumatycznej) i SYNCRO (brushless), z trzema systemami dozowania — dobieranymi do produktu.
              </Typography>
              <Stack spacing={1.25}>
                {OPCJE.map((opcja) => (
                  <Box key={opcja} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                    <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, mt: '7px', flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.55 }}>{opcja}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* MADEJPAK */}
      <Box component="section" sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 6, md: 8 } }}>
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>Zastosowania</Typography>
              <Typography component="h2" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)', mb: 3 }}>F700 sprawdzi się przy pakowaniu:</Typography>
              <Stack spacing={1.5}>
                {['Kawa, kakao, herbata, przyprawy, sól, cukier', 'Makaron krótki, ryż, kasza, groszek', 'Suszone owoce, orzechy, nasiona, pestki', 'Karma dla zwierząt (pet food), granulat', 'Ciasteczka, czekoladki, draże, słodycze', 'Proszki granulowane i środki czyszczące'].map((item) => (
                  <Box key={item} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                    <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, mt: '8px', flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.65 }}>{item}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
            <Box sx={{ p: { xs: 3, md: 4 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `2px solid ${ACCENT}`, borderRadius: '4px' }}>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>Essegi F700 w MadejPak</Typography>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 2 }}>Dobór systemu dozowania do Twojego produktu.</Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.75, mb: 2.5 }}>
                F700 to rozwiązanie dla firm, które potrzebują kompaktowej, sprawdzonej maszyny VFFS do żywności lub drobnych granulatów.
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.75 }}>
                W MadejPak dobieramy wersję i system dozowania do Twojego produktu. Zapewniamy instalację, szkolenie, własny serwis posprzedażowy i dostęp do części zamiennych.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <LeadForm defaultModel="Essegi F700" />

      {/* BREADCRUMB */}
      <Box sx={{ bgcolor: BG_ALT, borderTop: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <Typography variant="body2" sx={{ color: 'var(--dim-72)', display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap', fontSize: '0.8rem' }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link href="/maszyny" style={{ color: 'inherit', textDecoration: 'none' }}>Maszyny</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link href="/maszyny/pionowe-maszyny-pakujace" style={{ color: 'inherit', textDecoration: 'none' }}>Pionowe maszyny pakujące</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <span>Essegi F700</span>
          </Typography>
        </Container>
      </Box>
    </main>
  );
}
