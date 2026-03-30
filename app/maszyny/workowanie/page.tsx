import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Workowanie i zamykanie worków – Concetti | MadejPak',
  description:
    'Maszyny workujące Concetti w ofercie MadejPak — IGF open-mouth, CONTINUA FFS, workowanie big-bag. Produkty sypkie, proszki, granulaty, cement, nawozy.',
  alternates: { canonical: `${SITE_URL}/maszyny/workowanie` },
  openGraph: {
    url:         `${SITE_URL}/maszyny/workowanie`,
    title:       'Workowanie i zamykanie worków | MadejPak',
    description: 'Maszyny workujące Concetti w ofercie MadejPak — IGF open-mouth, CONTINUA FFS, workowanie big-bag. Produkty sypkie, proszki, granulaty, cement, nawozy.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Workowanie – MadejPak' }],
  },
};

// ─── Design tokens ────────────────────────────────────────────────────────────
const BG      = 'var(--bg)';
const BG_CARD = 'var(--bg-card)';
const BG_ALT  = 'var(--bg-alt)';
const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

function ArrowRight() {
  return (
    <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden="true"
      sx={{ width: 13, height: 13, flexShrink: 0, transition: 'transform 0.15s ease' }}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  );
}

function StatChip({ value, label }: { value: string; label: string }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
      <Typography sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
        letterSpacing: '-0.03em', color: ACCENT, lineHeight: 1 }}>
        {value}
      </Typography>
      <Typography sx={{ fontSize: '0.72rem', color: TEXT_DIM, letterSpacing: '0.04em' }}>
        {label}
      </Typography>
    </Box>
  );
}

// ─── Model card ───────────────────────────────────────────────────────────────
interface ModelSpec { label: string; value: string }
interface MachineModel {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  description: string;
  specs: ModelSpec[];
  features: string[];
  products: string[];
  imageSrc: string;
  imageAlt: string;
}

function ModelCard({ model }: { model: MachineModel }) {
  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', md: '340px 1fr' },
      border: `1px solid ${BORDER}`,
      borderRadius: '4px',
      overflow: 'hidden',
      bgcolor: BG_CARD,
    }}>
      {/* Image */}
      <Box sx={{
        position: 'relative',
        minHeight: { xs: 220, md: 'auto' },
        background: 'linear-gradient(160deg, #1F1F21 0%, #252527 100%)',
        flexShrink: 0,
      }}>
        <Image src={model.imageSrc} alt={model.imageAlt} fill
          sizes="(max-width: 900px) 100vw, 340px"
          style={{ objectFit: 'cover' }} />
        {model.badge && (
          <Box sx={{
            position: 'absolute', top: 16, left: 16,
            px: 1.5, py: 0.5,
            bgcolor: `${ACCENT}22`, border: `1px solid ${ACCENT}60`,
            borderRadius: '2px', fontSize: '0.65rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT,
          }}>
            {model.badge}
          </Box>
        )}
      </Box>

      {/* Content */}
      <Box sx={{ px: { xs: 3, md: 4 }, py: { xs: 3, md: 3.5 }, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        <Box>
          <Typography component="h3" sx={{
            fontSize: { xs: '1.125rem', md: '1.25rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', lineHeight: 1.2, mb: 0.5,
          }}>
            {model.name}
          </Typography>
          <Typography sx={{ fontSize: '0.82rem', color: ACCENT, fontWeight: 600 }}>
            {model.tagline}
          </Typography>
        </Box>

        <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.7 }}>
          {model.description}
        </Typography>

        {/* Specs */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 1.5 }}>
          {model.specs.map((s) => (
            <Box key={s.label} sx={{
              px: 1.5, py: 1.25,
              bgcolor: 'var(--surface-03)', border: `1px solid ${BORDER}`, borderRadius: '3px',
            }}>
              <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--dim-28)', mb: 0.4 }}>
                {s.label}
              </Typography>
              <Typography sx={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text)' }}>
                {s.value}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Products */}
        <Box>
          <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--dim-28)', mb: 1 }}>
            Typowe produkty
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
            {model.products.map((p) => (
              <Box key={p} sx={{
                px: 1.25, py: 0.35,
                bgcolor: 'var(--surface-04)', border: `1px solid ${BORDER}`,
                borderRadius: '2px', fontSize: '0.72rem', color: TEXT_DIM,
              }}>
                {p}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Features */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
          {model.features.map((f) => (
            <Box key={f} sx={{
              px: 1.25, py: 0.35,
              bgcolor: `${ACCENT}0D`, border: `1px solid ${ACCENT}25`,
              borderRadius: '2px', fontSize: '0.7rem', color: 'rgba(232,97,10,0.85)',
            }}>
              {f}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const MODELS: MachineModel[] = [
  {
    id: 'igf',
    name: 'IGF – Workowanie open-mouth',
    badge: 'Grawitacyjne',
    tagline: 'Napełnianie worków otwartych — precyzja wagowa',
    description:
      'Automatyczna maszyna do napełniania worków otwartych z ważeniem grawitacyjnym lub wagowo-objętościowym. Zaprojektowana dla produktów sypkich, granulowanych i pylistych. Obsługuje worki papierowe, PE i PP w zakresie od 5 do 50 kg. Szeroka oferta opcji sanitarnych dla branży spożywczej — wykonanie ze stali nierdzewnej, systemy odśpylania i uszczelnienia stanowiska workującego.',
    specs: [
      { label: 'Wydajność', value: 'do 600 worków/h' },
      { label: 'Zakres masy', value: '5–50 kg' },
      { label: 'Typy worków', value: 'PP, PE, papier' },
      { label: 'Ważenie', value: 'wagowe / objętościowe' },
    ],
    features: ['Ważenie wielostopniowe', 'System odśpylania', 'Wersja INOX', 'Industry 4.0', 'Integracja z transportem'],
    products: ['Mąka', 'Cukier', 'Karma zwierząt', 'Nawozy', 'Sól', 'Granulaty chemiczne', 'Proszki'],
    imageSrc: '/images/machines/bagging-igf.jpg',
    imageAlt: 'Concetti IGF – maszyna workująca open-mouth',
  },
  {
    id: 'continua',
    name: 'CONTINUA – FFS z rękawa',
    tagline: 'Form-Fill-Seal — opakowanie z rolki folii',
    description:
      'Maszyna FFS (Form-Fill-Seal) formuje worek bezpośrednio z rękawa foliowego, napełnia go produktem i zamyka zgrzewem termicznym — wszystko w jednym cyklu automatycznym. Eliminuje konieczność dostarczania gotowych worków i zmniejsza koszty materiałów opakowaniowych. Dostępna w wersjach jedno- i wielostanowiskowych dla różnych zakresów wydajności.',
    specs: [
      { label: 'Wydajność', value: 'do 600 worków/h' },
      { label: 'Zakres masy', value: '5–50 kg' },
      { label: 'Folia', value: 'PE, PP, laminaty' },
      { label: 'Zamknięcie', value: 'Zgrzew termiczny' },
    ],
    features: ['Formowanie z rolki', 'Brak gotowych worków', 'Różne formaty worka', 'Zgrzew top/bottom', 'Automatyczny restart'],
    products: ['Mąka', 'Cukier', 'Karma', 'Proszki techniczne', 'Granulaty', 'Ryż', 'Kawa'],
    imageSrc: '/images/machines/bagging-continua.jpg',
    imageAlt: 'Concetti CONTINUA – maszyna FFS workująca',
  },
  {
    id: 'continua-6x',
    name: 'CONTINUA 6x – FFS sześciostanowiskowy',
    badge: 'High Performance',
    tagline: 'Do 800 worków/h — cement, premiksy, produkty fine',
    description:
      'Sześciostanowiskowa maszyna FFS dedykowana dla produktów trudno oddającycych powietrze — cementu, drobnych premixów i proszków technicznych. System deaeracji (sondy odgazowujące) i system usuwania powietrza z górnej części worka przed zgrzewem zapewniają minimalne wymiary opakowania przy pełnym hermetycznym zamknięciu. Automatyczna zmiana formatu bez interwencji operatora.',
    specs: [
      { label: 'Wydajność', value: 'do 800 worków/h' },
      { label: 'Zakres masy', value: '10–40 kg' },
      { label: 'Stanowiska', value: '6' },
      { label: 'Zamknięcie', value: 'Hermetyczny PE' },
    ],
    features: ['6 stanowisk', 'Sondy deaeracji', 'Opakowanie hermetyczne', 'Auto zmiana formatu', 'Czyszczenie pneumatyczne', 'Industry 4.0'],
    products: ['Cement', 'Drobne premiksy', 'Proszki techniczne', 'Gips', 'Spoiwa budowlane'],
    imageSrc: '/images/machines/bagging-continua6.jpg',
    imageAlt: 'Concetti CONTINUA 6x – sześciostanowiskowa maszyna FFS',
  },
  {
    id: 'bigbag',
    name: 'Big Bag – Workowanie FIBC',
    tagline: 'Napełnianie big-bagów — 30–50 szt./h',
    description:
      'System napełniania worków FIBC (big-bag) z ważeniem wagowym na komórkach pomiarowych. Przeznaczony dla produktów sypkich i granulowanych pakowanych w duże formaty — od 200 do 2000 kg. Obsługuje konfiguracje 2 i 4 zausznikowe, worki o pełnym otworze i candy-top, a także octabiny. Opcje: system odśpylania, kompaktowanie pneumatyczne, platforma wibracyjna i wykrywacz metali.',
    specs: [
      { label: 'Wydajność', value: '30–50 big-bag/h' },
      { label: 'Masa big-bag', value: '200–2000 kg' },
      { label: 'Wys. big-bag', value: '900–1800 mm' },
      { label: 'Ważenie', value: 'Komórki tensometryczne' },
    ],
    features: ['Komórki tensometryczne', 'System odśpylania', 'Platforma wibracyjna', 'Industry 4.0', 'ATEX (opcja)', 'Wykrywacz metali'],
    products: ['Nawozy', 'Piasek', 'Wapień', 'Granulaty techniczne', 'Żywice', 'Proszki bulk'],
    imageSrc: '/images/machines/bagging-bigbag.jpg',
    imageAlt: 'Concetti Big Bag – stacja napełniania worków FIBC',
  },
];

const HOW_WORKS = [
  { num: '01', title: 'Podanie worka', desc: 'Gotowy worek lub worek formowany z rękawa foliowego jest pozycjonowany na głowicy napełniającej.' },
  { num: '02', title: 'Ważenie produktu', desc: 'Produkt dozowany jest do docelowej masy — system ważenia wielostopniowego zapewnia precyzję ±0,1% wartości docelowej.' },
  { num: '03', title: 'Napełnianie', desc: 'Produkt przesypywany jest do worka — szybka faza gruba i precyzyjna faza drobna minimalizują czas cyklu przy zachowaniu dokładności.' },
  { num: '04', title: 'Zamknięcie i ekspedycja', desc: 'Worek zamykany jest zgrzewem termicznym, zszywarką lub skrętarką — następnie przekazywany jest do przenośnika, ważenia kontrolnego lub paletyzatora.' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function WorkowaniePage() {
  return (
    <main>
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ── 1. HERO ────────────────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 10, md: 14 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 380px' }, gap: { xs: 6, lg: 10 }, alignItems: 'end' }}>
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
                Concetti — workowanie i koniec linii
              </Typography>
              <Typography component="h1" sx={{
                fontSize: { xs: '2rem', md: '2.75rem', lg: '3.25rem' },
                fontWeight: 800, letterSpacing: '-0.028em', color: 'var(--text)', lineHeight: 1.1, mb: 3,
              }}>
                Workowanie i<br />zamykanie worków.
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, color: TEXT_DIM, lineHeight: 1.75, maxWidth: 540, mb: 4 }}>
                Systemy workowania Concetti — od worków otwartych po FFS z rękawa foliowego i big-bag.
                Precyzyjne ważenie, automatyczne napełnianie i szczelne zamknięcie worka dla produktów sypkich,
                granulowanych i pylistych we wszystkich sektorach przemysłu.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button component="a" href="#modele" variant="contained" disableElevation
                  sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, fontSize: '0.875rem',
                    textTransform: 'none', px: 3.5, py: 1.5, borderRadius: '6px',
                    '&:hover': { bgcolor: '#F07520', transform: 'translateY(-1px)' } }}>
                  Zobacz systemy workowania
                </Button>
                <Button component={Link} href="/kontakt" variant="outlined"
                  sx={{ borderColor: 'var(--dim-18)', color: 'var(--dim-85)',
                    fontWeight: 600, fontSize: '0.875rem', textTransform: 'none', px: 3.5, py: 1.5,
                    borderRadius: '6px', '&:hover': { borderColor: 'var(--dim-42)', color: 'var(--text)', bgcolor: 'var(--surface-04)' } }}>
                  Wyślij zapytanie
                </Button>
              </Stack>
            </Box>

            {/* Stats */}
            <Box sx={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2,
              p: { xs: 3, md: 3.5 },
              bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px',
            }}>
              <StatChip value="800" label="worków/h – CONTINUA 6x" />
              <StatChip value="4" label="typy systemów workowania" />
              <StatChip value="2000" label="kg max – big-bag" />
              <StatChip value="5–50" label="kg – zakres worka standardowego" />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── 2. JAK DZIAŁA ─────────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Zasada działania
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 8 },
          }}>
            Proces workowania krok po kroku
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' }, gap: 3 }}>
            {HOW_WORKS.map((step) => (
              <Box key={step.num} sx={{
                p: 3, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px',
                borderTop: `2px solid ${ACCENT}22`,
              }}>
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: ACCENT,
                  letterSpacing: '-0.04em', lineHeight: 1, mb: 2, opacity: 0.6 }}>
                  {step.num}
                </Typography>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 1 }}>
                  {step.title}
                </Typography>
                <Typography sx={{ fontSize: '0.83rem', color: TEXT_DIM, lineHeight: 1.65 }}>
                  {step.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── 3. MODELE ─────────────────────────────────────────────── */}
      <Box id="modele" component="section"
        sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 10, md: 14 }, scrollMarginTop: { xs: 64, lg: 72 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Systemy workowania
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 8 }, maxWidth: 560,
          }}>
            Cztery systemy Concetti w ofercie MadejPak
          </Typography>
          <Stack spacing={3}>
            {MODELS.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </Stack>
        </Container>
      </Box>

      {/* ── 4. DOBÓR SYSTEMU ──────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Jak wybrać system?
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 7 },
          }}>
            Dobór technologii workowania
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 2.5 }}>
            {[
              { potrzeba: 'Worki papierowe lub PP otwarte', system: 'IGF open-mouth', kiedy: 'Mąka, karma, nawozy, sól — worki gotowe' },
              { potrzeba: 'Niższe koszty opakowania', system: 'CONTINUA FFS', kiedy: 'Produkt formuje worek z rolki — bez zakupu gotowych worków' },
              { potrzeba: 'Cement, proszki fine, premiksy', system: 'CONTINUA 6x', kiedy: 'Produkty trudno oddające powietrze — deaeracja i zgrzew hermetyczny' },
              { potrzeba: 'Duże opakowania bulk', system: 'Big Bag FIBC', kiedy: 'Produkty na paletę — worki 200–2000 kg' },
            ].map((item) => (
              <Box key={item.system} sx={{
                p: 3, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px',
                borderTop: `2px solid ${ACCENT}`,
              }}>
                <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: 'var(--dim-28)', mb: 1 }}>
                  Gdy potrzeba
                </Typography>
                <Typography sx={{ fontSize: '0.84rem', color: TEXT_DIM, lineHeight: 1.6, mb: 2 }}>
                  {item.potrzeba}
                </Typography>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: ACCENT, mb: 1 }}>
                  → {item.system}
                </Typography>
                <Typography sx={{ fontSize: '0.78rem', color: 'var(--dim-48)', lineHeight: 1.55 }}>
                  {item.kiedy}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── 5. PARTNER ────────────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Partner technologiczny
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
            <Box sx={{
              p: { xs: 3, md: 4 }, bgcolor: BG_CARD,
              border: `1px solid ${BORDER}`, borderTop: `2px solid var(--dim-10)`,
              borderRadius: '4px',
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
                <Typography sx={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.02em' }}>
                  Concetti
                </Typography>
                <Typography sx={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--dim-28)' }}>
                  Włochy
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.7, mb: 3 }}>
                Concetti to włoski producent kompleksowych systemów workowania, paletyzacji i końca linii.
                Specjalizuje się w rozwiązaniach dla produktów sypkich i granulowanych — od systemów
                open-mouth i FFS po workowanie big-bag i pełne linie pakujące z paletyzacją.
              </Typography>
              <Stack spacing={1}>
                {[
                  'Kompletne linie: ważenie → workowanie → paletyzacja → owijanie',
                  'Systemy open-mouth, FFS z rękawa i big-bag w jednej ofercie',
                  'Integracja z paletyzatorami i przenośnikami MadejPak',
                  'Industry 4.0 — monitoring wydajności i OEE w standardzie',
                ].map((item) => (
                  <Box key={item} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                    <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: ACCENT, mt: '8px', flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '0.82rem', color: 'var(--dim-65)', lineHeight: 1.55 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>
              <Box sx={{ mt: 3.5 }}>
                <Box component="a" href="https://www.concetti.com" target="_blank" rel="noopener noreferrer"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75,
                    fontSize: '0.82rem', fontWeight: 600, color: TEXT_DIM, textDecoration: 'none',
                    '&:hover': { color: 'var(--text)' } }}>
                  concetti.com
                  <ArrowRight />
                </Box>
              </Box>
            </Box>

            <Box sx={{
              p: { xs: 3, md: 4 }, bgcolor: BG_CARD,
              border: `1px solid ${BORDER}`, borderTop: `2px solid var(--dim-10)`,
              borderRadius: '4px',
            }}>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 2 }}>
                Linia workująca — kompletna integracja
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.7, mb: 2.5 }}>
                Workowanie to jeden etap — MadejPak projektuje i integruje pełny ciąg technologiczny:
                od podawania produktu do gotowej, owiniętej palety.
              </Typography>
              <Stack spacing={1.5}>
                {[
                  { label: 'Ważenie / dozowanie', val: 'Systemy wagowe Concetti' },
                  { label: 'Workowanie', val: 'IGF / CONTINUA / Big Bag' },
                  { label: 'Kontrola wagi', val: 'Waga kontrolna on-line' },
                  { label: 'Paletyzacja', val: 'Paletyzatory Concetti / roboty przemysłowe' },
                  { label: 'Owijanie palety', val: 'Technowrapp stretch wrapping' },
                ].map((r) => (
                  <Box key={r.label} sx={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    py: 1.25, borderBottom: `1px solid ${BORDER}`,
                  }}>
                    <Typography sx={{ fontSize: '0.78rem', color: 'var(--dim-38)', fontWeight: 600,
                      textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {r.label}
                    </Typography>
                    <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM }}>
                      {r.val}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── 6. CTA ────────────────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG, py: { xs: 10, md: 14 } }}>
        <Container maxWidth="xl">
          <Box sx={{
            display: 'flex', flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between',
            gap: { xs: 5, md: 8 },
          }}>
            <Box sx={{ maxWidth: 560 }}>
              <Typography component="h2" sx={{
                fontSize: { xs: '1.625rem', md: '2.125rem' }, fontWeight: 800,
                letterSpacing: '-0.02em', color: 'var(--text)', lineHeight: 1.2, mb: 2,
              }}>
                Szukasz systemu workowania dla swojego zakładu?
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', md: '0.95rem' }, color: TEXT_DIM, lineHeight: 1.75, maxWidth: 460 }}>
                Dobierzemy właściwy typ maszyny workującej Concetti do produktu, wydajności
                i oczekiwanego stopnia automatyzacji Twojej linii.
              </Typography>
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ flexShrink: 0 }}>
              <Button component={Link} href="/kontakt" variant="contained" disableElevation
                sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, fontSize: '0.95rem',
                  textTransform: 'none', px: 4, py: 2, borderRadius: '6px', minHeight: 52,
                  '&:hover': { bgcolor: '#F07520', transform: 'translateY(-1px)', boxShadow: '0 8px 28px rgba(232,97,10,0.35)' } }}>
                Wyślij zapytanie
              </Button>
              <Button component={Link} href="/maszyny/partnerzy" variant="outlined"
                sx={{ borderColor: 'var(--dim-18)', color: 'var(--dim-75)',
                  fontWeight: 600, fontSize: '0.875rem', textTransform: 'none', px: 4, py: 2,
                  borderRadius: '6px', '&:hover': { borderColor: 'var(--dim-42)', color: 'var(--text)', bgcolor: 'var(--surface-04)' } }}>
                Wszystkie maszyny partnerów
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

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
            <span>Workowanie i zamykanie worków</span>
          </Typography>
        </Container>
      </Box>
    </main>
  );
}
