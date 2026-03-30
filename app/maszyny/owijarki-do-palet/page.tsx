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
  title: 'Owijarki do palet – Technowrapp | MadejPak',
  description:
    'Automatyczne owijarki do palet Technowrapp — P60, B-series, Runner Arm, Twin Rings. Stretch wrapping, owijanie rotacyjne i ramieniowe dla linii pakujących i koniec linii.',
  alternates: { canonical: `${SITE_URL}/maszyny/owijarki-do-palet` },
  openGraph: {
    url:         `${SITE_URL}/maszyny/owijarki-do-palet`,
    title:       'Owijarki do palet Technowrapp | MadejPak',
    description: 'Automatyczne owijarki do palet Technowrapp — P60, B-series, Runner Arm, Twin Rings. Stretch wrapping, owijanie rotacyjne i ramieniowe dla linii pakujących i koniec linii.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Owijarki do palet – MadejPak' }],
  },
};

// ─── Design tokens ────────────────────────────────────────────────────────────
const BG      = 'var(--bg)';
const BG_CARD = 'var(--bg-card)';
const BG_ALT  = 'var(--bg-alt)';
const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

// ─── Arrow icon ───────────────────────────────────────────────────────────────
function ArrowRight() {
  return (
    <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden="true"
      sx={{ width: 13, height: 13, flexShrink: 0, transition: 'transform 0.15s ease' }}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  );
}

// ─── Stat chip ────────────────────────────────────────────────────────────────
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

// ─── Machine model card ───────────────────────────────────────────────────────
interface ModelSpec { label: string; value: string }
interface MachineModel {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  description: string;
  specs: ModelSpec[];
  features: string[];
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
      {/* Image column */}
      <Box sx={{
        position: 'relative',
        minHeight: { xs: 220, md: 'auto' },
        background: 'linear-gradient(160deg, #1F1F21 0%, #252527 100%)',
        flexShrink: 0,
      }}>
        <Image
          src={model.imageSrc}
          alt={model.imageAlt}
          fill
          sizes="(max-width: 900px) 100vw, 340px"
          style={{ objectFit: 'cover' }}
        />
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

      {/* Content column */}
      <Box sx={{ px: { xs: 3, md: 4 }, py: { xs: 3, md: 3.5 }, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        {/* Header */}
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

        {/* Description */}
        <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.7 }}>
          {model.description}
        </Typography>

        {/* Specs grid */}
        <Box sx={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: 1.5,
        }}>
          {model.specs.map((s) => (
            <Box key={s.label} sx={{
              px: 1.5, py: 1.25,
              bgcolor: 'var(--surface-03)', border: `1px solid ${BORDER}`,
              borderRadius: '3px',
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

        {/* Features */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
          {model.features.map((f) => (
            <Box key={f} sx={{
              px: 1.25, py: 0.35,
              bgcolor: 'var(--surface-04)', border: `1px solid ${BORDER}`,
              borderRadius: '2px', fontSize: '0.72rem', color: TEXT_DIM,
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
    id: 'p60',
    name: 'P60 / P60E',
    tagline: 'Owijarka z obrotowym stołem',
    description:
      'Kompaktowa owijarka do palet z obracającą się platformą. Przeznaczona dla zakładów o umiarkowanej produkcji paletowej — stabilna, energooszczędna i łatwa w obsłudze. Wariant P60E wyposażony dodatkowo w dispenser folii pokryciowej (top sheet) zapewniający pyłoszczelne zabezpieczenie górnej warstwy ładunku.',
    specs: [
      { label: 'Wydajność', value: 'do 61 palet/h' },
      { label: 'Prędkość max', value: '18 RPM' },
      { label: 'Pre-stretch', value: '540%' },
      { label: 'Zużycie folii', value: '72 g/paletę' },
    ],
    features: [
      'Elektroniczne pre-stretch 540%',
      'Sterowanie dotykowe',
      'VPN remote assist',
      'Cięcie i zgrzew folii',
      'P60E: top sheet dispenser',
      'TWIKO monitoring',
    ],
    imageSrc: '/images/machines/wrapping-p60.jpg',
    imageAlt: 'Technowrapp P60 – owijarka z obrotowym stołem',
  },
  {
    id: 'b-series',
    name: 'B150 / B170 / B200 / B250',
    badge: 'Bestseller',
    tagline: 'Owijarki ramieniowe – wysoka wydajność',
    description:
      'Seria owijarek z obrotowym ramieniem — przeznaczona dla zakładów o wysokiej produkcji paletowej, gdzie owijanie platformowe jest niemożliwe lub nieefektywne. Palet pozostaje nieruchoma, ramię obraca się wokół ładunku. Model B250 wyposażony w opatentowany system synchronicznego cięcia i zamykania folii, umożliwiający natychmiastowe wejście kolejnej palety. Warianty E (Enhanced) z dyspenserem folii górnej.',
    specs: [
      { label: 'Wydajność', value: 'do 118 palet/h' },
      { label: 'Prędkość max', value: '40 RPM' },
      { label: 'Pre-stretch', value: '540%' },
      { label: 'Zużycie folii', value: '72 g/paletę' },
    ],
    features: [
      'Ramię rotacyjne',
      'Palet nieruchomy',
      'Tachoregulator pre-stretch',
      'B250: patent sync cut&seal',
      'Warianty E: top sheet',
      'TWIKO predictive maintenance',
    ],
    imageSrc: '/images/machines/wrapping-b150.jpg',
    imageAlt: 'Technowrapp B-series – owijarki ramieniowe',
  },
  {
    id: 'runner-arm',
    name: 'Runner Arm',
    badge: 'Patent',
    tagline: 'Owijarka ramieniowa z pierścieniem centripetycznym',
    description:
      'Flagowy model Technowrapp z opatentowanym pierścieniem centripetycznym (centripetal contrast ring), który prowadzi ramię i eliminuje siłę odśrodkową podczas owijania — pozwala to na pracę przy najwyższej prędkości bez ryzyka niestabilności ładunku. Dedykowana dla bardzo wysokich wydajności i wymagających produktów.',
    specs: [
      { label: 'Wydajność', value: 'do 124 palet/h' },
      { label: 'Prędkość max', value: '45 RPM' },
      { label: 'Pre-stretch', value: '540%' },
      { label: 'Zużycie folii', value: '72 g/paletę' },
    ],
    features: [
      'Opatentowany pierścień centripetyczny',
      'Eliminacja siły odśrodkowej',
      'Najwyższa stabilność przy 45 RPM',
      'Sync cut & seal',
      'TWIKO analytics',
      'VPN remote assistance',
    ],
    imageSrc: '/images/machines/wrapping-runner.jpg',
    imageAlt: 'Technowrapp Runner Arm – owijarka z pierścieniem centripetycznym',
  },
  {
    id: 'twin-rings',
    name: 'Twin Rings / Twin Rings E',
    tagline: 'Owijarka pierścieniowa – ładunki niestabilne',
    description:
      'Owijarka z obrotowym pierścieniem — pallet pozostaje w pełni nieruchomy, pierścień z folią obraca się wokół ładunku. Dedykowana dla niestabilnych lub luźno ułożonych ładunków, gdzie jakikolwiek ruch palety podczas owijania byłby niedopuszczalny. System automatycznej wymiany rolki folii minimalizuje przestoje. Wariant Twin Rings E wyposażony w dispenser górnej folii.',
    specs: [
      { label: 'Wydajność', value: 'do 101 palet/h' },
      { label: 'Prędkość max', value: '50 RPM' },
      { label: 'Pre-stretch', value: '540%' },
      { label: 'Zużycie folii', value: '72 g/paletę' },
    ],
    features: [
      'Palet w pełni nieruchomy',
      'Pierścień owijający',
      'Auto zmiana rolki folii',
      'Dla niestabilnych ładunków',
      'Twin Rings E: top sheet',
      'TWIKO data platform',
    ],
    imageSrc: '/images/machines/wrapping-twin.jpg',
    imageAlt: 'Technowrapp Twin Rings – owijarka pierścieniowa',
  },
];

const HOW_WORKS = [
  { num: '01', title: 'Wjazd palety', desc: 'Paleta z gotowym ładunkiem wjeżdża na stację owijającą — automatycznie lub transportem ręcznym.' },
  { num: '02', title: 'Mocowanie folii', desc: 'Folia stretch mocowana jest do palety — urządzenie automatycznie dokonuje pierwszego zawinięcia podstawy.' },
  { num: '03', title: 'Owijanie ładunku', desc: 'Ramię lub pierścień obraca się wokół palety aplikując folię z elektronicznym pre-stretch do 540% — minimalne zużycie folii przy maksymalnym naciągu.' },
  { num: '04', title: 'Cięcie i zamknięcie', desc: 'Automatyczne cięcie i zgrzew folii kończą cykl. Gotowa paleta wyjeżdża do kolejnego etapu linii.' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function OwijarkaPage() {
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
                Technowrapp — koniec linii
              </Typography>
              <Typography component="h1" sx={{
                fontSize: { xs: '2rem', md: '2.75rem', lg: '3.25rem' },
                fontWeight: 800, letterSpacing: '-0.028em', color: 'var(--text)', lineHeight: 1.1, mb: 3,
              }}>
                Owijarki do palet.<br />
                Stretch wrapping.
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, color: TEXT_DIM, lineHeight: 1.75, maxWidth: 540, mb: 4 }}>
                Automatyczne owijarki do palet Technowrapp zabezpieczają ładunek folią stretch
                — zapewniając stabilność transportową, pyłoszczelność i identyfikację palety.
                Cztery serie maszynowe dla każdego zakresu wydajności i rodzaju ładunku.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button component="a" href="#modele" variant="contained" disableElevation
                  sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, fontSize: '0.875rem',
                    textTransform: 'none', px: 3.5, py: 1.5, borderRadius: '6px',
                    '&:hover': { bgcolor: '#F07520', transform: 'translateY(-1px)' } }}>
                  Zobacz modele
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
              <StatChip value="124" label="palet/h – max wydajność" />
              <StatChip value="540%" label="elektroniczny pre-stretch" />
              <StatChip value="4" label="serie maszynowe" />
              <StatChip value="72g" label="folia na paletę" />
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
            Jak działa owijarka do palet?
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
            Serie maszynowe
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 8 }, maxWidth: 560,
          }}>
            Cztery serie owijarek Technowrapp
          </Typography>
          <Stack spacing={3}>
            {MODELS.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </Stack>
        </Container>
      </Box>

      {/* ── 4. TYPY OWIJANIA ──────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Konfiguracje
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 7 },
          }}>
            Trzy technologie owijania
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
            {[
              {
                title: 'Stół obrotowy (P60)',
                desc: 'Palet obraca się na platformie, głowica foliowa przesuwa się pionowo. Rozwiązanie kompaktowe i ekonomiczne — idealne dla wydajności do 61 palet/h i stabilnych ładunków.',
                when: 'Do 61 palet/h • Stabilne ładunki • Mała przestrzeń',
              },
              {
                title: 'Ramię rotacyjne (B-series, Runner Arm)',
                desc: 'Palet pozostaje nieruchomy, ramię z folią obraca się wokół ładunku. Wysoka wydajność do 124 palet/h. Runner Arm z patentem pierścienia centripetycznego — eliminacja siły odśrodkowej przy pełnej prędkości.',
                when: 'Do 124 palet/h • Wysokie wydajności • Pełna automatyzacja',
              },
              {
                title: 'Pierścień rotacyjny (Twin Rings)',
                desc: 'Pierścień z folią obraca się wokół nieruchomej palety — bez kontaktu mechanicznego z ładunkiem. Jedyne rozwiązanie dla niestabilnych lub nieregularnych ładunków, które nie mogą się ruszać podczas owijania.',
                when: 'Ładunki niestabilne • Delikatne produkty • Max bezpieczeństwo',
              },
            ].map((item) => (
              <Box key={item.title} sx={{
                p: { xs: 3, md: 3.5 }, bgcolor: BG_CARD,
                border: `1px solid ${BORDER}`, borderTop: `2px solid ${ACCENT}`, borderRadius: '4px',
              }}>
                <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', mb: 1.5 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: '0.84rem', color: TEXT_DIM, lineHeight: 1.7, mb: 2.5 }}>
                  {item.desc}
                </Typography>
                <Typography sx={{
                  fontSize: '0.72rem', color: ACCENT, fontWeight: 600,
                  letterSpacing: '0.03em', borderTop: `1px solid ${BORDER}`, pt: 2,
                }}>
                  {item.when}
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
          <Box sx={{
            display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3,
          }}>
            <Box sx={{
              p: { xs: 3, md: 4 }, bgcolor: BG_CARD,
              border: `1px solid ${BORDER}`, borderRadius: '4px',
              borderTop: `2px solid var(--dim-10)`,
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
                <Typography sx={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.02em' }}>
                  Technowrapp
                </Typography>
                <Typography sx={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--dim-28)' }}>
                  Włochy — Fonzaso
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.7, mb: 3 }}>
                Włoski producent automatycznych owijarek do palet, systemów stretch wrapping
                i rozwiązań end-of-line. Certyfikowany B Corp. Każda maszyna produkowana na zamówienie,
                z platformą TWIKO do zdalnego monitoringu i predykcyjnego utrzymania ruchu.
              </Typography>
              <Stack spacing={1}>
                {[
                  'Cztery serie owijarek: stołowe, ramieniowe, Runner Arm, pierścieniowe',
                  'Platforma TWIKO — zbieranie danych i predykcyjne UR',
                  'Certyfikowany B Corp — maszyny zaprojektowane pod sustainability',
                  'VPN remote assistance jako standard we wszystkich modelach',
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
                <Box component="a" href="https://www.technowrapp.com" target="_blank" rel="noopener noreferrer"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75,
                    fontSize: '0.82rem', fontWeight: 600, color: TEXT_DIM, textDecoration: 'none',
                    '&:hover': { color: 'var(--text)' } }}>
                  technowrapp.com
                  <ArrowRight />
                </Box>
              </Box>
            </Box>

            <Box sx={{
              p: { xs: 3, md: 4 }, bgcolor: BG_CARD,
              border: `1px solid ${BORDER}`, borderRadius: '4px',
              borderTop: `2px solid var(--dim-10)`,
            }}>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 2 }}>
                Integracja z linią pakującą
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.7, mb: 2.5 }}>
                Owijarki Technowrapp integrują się bezpośrednio z paletyzatorami
                i systemami przenośników — tworząc spójny, w pełni zautomatyzowany koniec linii.
              </Typography>
              <Stack spacing={1.5}>
                {[
                  { label: 'Wejście', val: 'Paletyzator Concetti lub robot przemysłowy' },
                  { label: 'Transport', val: 'Przenośniki rolkowe lub taśmowe' },
                  { label: 'Owijanie', val: 'Automatyczna owijarka Technowrapp' },
                  { label: 'Wyjście', val: 'Ekspedycja lub magazyn' },
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
                Szukasz owijarki do palety?
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', md: '0.95rem' }, color: TEXT_DIM, lineHeight: 1.75, maxWidth: 460 }}>
                Pomożemy dobrać właściwy model Technowrapp do ładunku, wydajności linii
                i wymagań końca linii w Twoim zakładzie.
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
            <span>Owijarki do palet</span>
          </Typography>
        </Container>
      </Box>
    </main>
  );
}
