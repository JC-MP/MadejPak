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
  title: 'Pallet Wrappers – Technowrapp',
  description:
    'Automatic Technowrapp pallet wrappers — P60, B-series, Runner Arm, Twin Rings. Stretch wrapping, rotary table and rotary arm wrapping for packaging lines and end-of-line automation.',
  alternates: {
    canonical: `${SITE_URL}/en/maszyny/owijarki-do-palet`,
    languages: {
      'pl': `${SITE_URL}/maszyny/owijarki-do-palet`,
      'en': `${SITE_URL}/en/maszyny/owijarki-do-palet`,
      'x-default': `${SITE_URL}/maszyny/owijarki-do-palet`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/en/maszyny/owijarki-do-palet`,
    title:       'Pallet Wrappers Technowrapp | MadejPak',
    description: 'Automatic Technowrapp pallet wrappers — P60, B-series, Runner Arm, Twin Rings. Stretch wrapping for packaging lines and end-of-line automation.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Pallet Wrappers – MadejPak' }],
  },
};

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

const MODELS: MachineModel[] = [
  {
    id: 'p60',
    name: 'P60 / P60E',
    tagline: 'Rotary table pallet wrapper',
    description:
      'Compact pallet wrapper with a rotating platform. Designed for facilities with moderate pallet throughput — stable, energy-efficient and easy to operate. The P60E variant includes a top sheet dispenser for dust-tight protection of the top layer.',
    specs: [
      { label: 'Throughput', value: 'up to 61 pal/h' },
      { label: 'Max speed', value: '18 RPM' },
      { label: 'Pre-stretch', value: '540%' },
      { label: 'Film usage', value: '72 g/pallet' },
    ],
    features: [
      'Electronic pre-stretch 540%',
      'Touch screen control',
      'VPN remote assist',
      'Auto film cut & seal',
      'P60E: top sheet dispenser',
      'TWIKO monitoring',
    ],
    imageSrc: '/images/machines/wrapping-p60.jpg',
    imageAlt: 'Technowrapp P60 – rotary table pallet wrapper',
  },
  {
    id: 'b-series',
    name: 'B150 / B170 / B200 / B250',
    badge: 'Bestseller',
    tagline: 'Rotary arm wrappers – high throughput',
    description:
      'Rotary arm wrapper series — designed for high-throughput facilities where turntable wrapping is impractical or inefficient. The pallet remains stationary while the arm rotates around the load. The B250 features a patented synchronous cut & seal system enabling immediate entry of the next pallet. E (Enhanced) variants include a top sheet dispenser.',
    specs: [
      { label: 'Throughput', value: 'up to 118 pal/h' },
      { label: 'Max speed', value: '40 RPM' },
      { label: 'Pre-stretch', value: '540%' },
      { label: 'Film usage', value: '72 g/pallet' },
    ],
    features: [
      'Rotary arm',
      'Stationary pallet',
      'Tachometer pre-stretch',
      'B250: patented sync cut & seal',
      'E variants: top sheet',
      'TWIKO predictive maintenance',
    ],
    imageSrc: '/images/machines/wrapping-b150.jpg',
    imageAlt: 'Technowrapp B-series – rotary arm wrappers',
  },
  {
    id: 'runner-arm',
    name: 'Runner Arm',
    badge: 'Patent',
    tagline: 'Arm wrapper with centripetal contrast ring',
    description:
      'Flagship Technowrapp model featuring a patented centripetal contrast ring that guides the arm and eliminates centrifugal force during wrapping — enabling operation at maximum speed without load instability. Designed for very high throughput and demanding products.',
    specs: [
      { label: 'Throughput', value: 'up to 124 pal/h' },
      { label: 'Max speed', value: '45 RPM' },
      { label: 'Pre-stretch', value: '540%' },
      { label: 'Film usage', value: '72 g/pallet' },
    ],
    features: [
      'Patented centripetal ring',
      'Eliminates centrifugal force',
      'Max stability at 45 RPM',
      'Sync cut & seal',
      'TWIKO analytics',
      'VPN remote assistance',
    ],
    imageSrc: '/images/machines/wrapping-runner.jpg',
    imageAlt: 'Technowrapp Runner Arm – arm wrapper with centripetal ring',
  },
  {
    id: 'twin-rings',
    name: 'Twin Rings / Twin Rings E',
    tagline: 'Ring wrapper – unstable loads',
    description:
      'Ring-type wrapper where the pallet remains completely stationary and the film ring rotates around the load. Designed for unstable or loosely stacked loads where any pallet movement during wrapping is unacceptable. Automatic film reel change minimises downtime. The Twin Rings E variant includes a top sheet dispenser.',
    specs: [
      { label: 'Throughput', value: 'up to 101 pal/h' },
      { label: 'Max speed', value: '50 RPM' },
      { label: 'Pre-stretch', value: '540%' },
      { label: 'Film usage', value: '72 g/pallet' },
    ],
    features: [
      'Fully stationary pallet',
      'Ring wrapping',
      'Auto film reel change',
      'For unstable loads',
      'Twin Rings E: top sheet',
      'TWIKO data platform',
    ],
    imageSrc: '/images/machines/wrapping-twin.jpg',
    imageAlt: 'Technowrapp Twin Rings – ring pallet wrapper',
  },
];

const HOW_WORKS = [
  { num: '01', title: 'Pallet entry', desc: 'A pallet with the finished load enters the wrapping station — automatically or by manual transport.' },
  { num: '02', title: 'Film attachment', desc: 'Stretch film is attached to the pallet — the machine automatically performs the first base wrap.' },
  { num: '03', title: 'Load wrapping', desc: 'The arm or ring rotates around the pallet applying film with electronic pre-stretch up to 540% — minimum film use at maximum tension.' },
  { num: '04', title: 'Cut & seal', desc: 'Automatic film cutting and sealing complete the cycle. The finished pallet exits to the next stage of the line.' },
];

export default function PalletWrappersPage() {
  return (
    <main>
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ── 1. HERO ── */}
      <Box component="section" sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 10, md: 14 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 380px' }, gap: { xs: 6, lg: 10 }, alignItems: 'end' }}>
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
                Technowrapp — end of line
              </Typography>
              <Typography component="h1" sx={{
                fontSize: { xs: '2rem', md: '2.75rem', lg: '3.25rem' },
                fontWeight: 800, letterSpacing: '-0.028em', color: 'var(--text)', lineHeight: 1.1, mb: 3,
              }}>
                Pallet wrappers.<br />
                Stretch wrapping.
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, color: TEXT_DIM, lineHeight: 1.75, maxWidth: 540, mb: 4 }}>
                Technowrapp automatic pallet wrappers secure loads with stretch film —
                ensuring transport stability, dust protection and pallet identification.
                Four machine series for every throughput range and load type.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button component="a" href="#models" variant="contained" disableElevation
                  sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, fontSize: '0.875rem',
                    textTransform: 'none', px: 3.5, py: 1.5, borderRadius: '6px',
                    '&:hover': { bgcolor: '#F07520', transform: 'translateY(-1px)' } }}>
                  View models
                </Button>
                <Button component={Link} href="/en/kontakt" variant="outlined"
                  sx={{ borderColor: 'var(--dim-18)', color: 'var(--dim-85)',
                    fontWeight: 600, fontSize: '0.875rem', textTransform: 'none', px: 3.5, py: 1.5,
                    borderRadius: '6px', '&:hover': { borderColor: 'var(--dim-42)', color: 'var(--text)', bgcolor: 'var(--surface-04)' } }}>
                  Send enquiry
                </Button>
              </Stack>
            </Box>

            <Box sx={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2,
              p: { xs: 3, md: 3.5 },
              bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px',
            }}>
              <StatChip value="124" label="pallets/h – max throughput" />
              <StatChip value="540%" label="electronic pre-stretch" />
              <StatChip value="4" label="machine series" />
              <StatChip value="72g" label="film per pallet" />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── 2. HOW IT WORKS ── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Operating principle
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 8 },
          }}>
            How does a pallet wrapper work?
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

      {/* ── 3. MODELS ── */}
      <Box id="models" component="section"
        sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 10, md: 14 }, scrollMarginTop: { xs: 64, lg: 72 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Machine series
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 8 }, maxWidth: 560,
          }}>
            Four Technowrapp wrapper series
          </Typography>
          <Stack spacing={3}>
            {MODELS.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </Stack>
        </Container>
      </Box>

      {/* ── 4. WRAPPING TYPES ── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Configurations
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 7 },
          }}>
            Three wrapping technologies
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
            {[
              {
                title: 'Rotary table (P60)',
                desc: 'The pallet rotates on a platform while the film head moves vertically. A compact and economical solution — ideal for throughput up to 61 pallets/h and stable loads.',
                when: 'Up to 61 pal/h • Stable loads • Small footprint',
              },
              {
                title: 'Rotary arm (B-series, Runner Arm)',
                desc: 'The pallet remains stationary while the arm with film rotates around the load. High throughput up to 124 pal/h. Runner Arm with patented centripetal ring — eliminates centrifugal force at full speed.',
                when: 'Up to 124 pal/h • High throughput • Full automation',
              },
              {
                title: 'Rotary ring (Twin Rings)',
                desc: 'The film ring rotates around the stationary pallet — without mechanical contact with the load. The only solution for unstable or irregular loads that cannot move during wrapping.',
                when: 'Unstable loads • Delicate products • Maximum safety',
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

      {/* ── 5. PARTNER ── */}
      <Box component="section" sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Technology partner
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
                  Italy — Fonzaso
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.7, mb: 3 }}>
                Italian manufacturer of automatic pallet wrappers, stretch wrapping systems
                and end-of-line solutions. Certified B Corp. Every machine built to order,
                with the TWIKO platform for remote monitoring and predictive maintenance.
              </Typography>
              <Stack spacing={1}>
                {[
                  'Four wrapper series: rotary table, rotary arm, Runner Arm, ring',
                  'TWIKO platform — data collection and predictive maintenance',
                  'B Corp certified — machines designed for sustainability',
                  'VPN remote assistance as standard on all models',
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
                Integration with packaging line
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.7, mb: 2.5 }}>
                Technowrapp wrappers integrate directly with palletisers
                and conveyor systems — creating a coherent, fully automated end of line.
              </Typography>
              <Stack spacing={1.5}>
                {[
                  { label: 'Infeed', val: 'Concetti palletiser or industrial robot' },
                  { label: 'Transport', val: 'Roller or belt conveyors' },
                  { label: 'Wrapping', val: 'Automatic Technowrapp wrapper' },
                  { label: 'Outfeed', val: 'Dispatch or warehouse' },
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

      {/* ── 6. CTA ── */}
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
                Looking for a pallet wrapper?
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', md: '0.95rem' }, color: TEXT_DIM, lineHeight: 1.75, maxWidth: 460 }}>
                We will help select the right Technowrapp model for your load, line throughput
                and end-of-line requirements.
              </Typography>
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ flexShrink: 0 }}>
              <Button component={Link} href="/en/kontakt" variant="contained" disableElevation
                sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, fontSize: '0.95rem',
                  textTransform: 'none', px: 4, py: 2, borderRadius: '6px', minHeight: 52,
                  '&:hover': { bgcolor: '#F07520', transform: 'translateY(-1px)', boxShadow: '0 8px 28px rgba(232,97,10,0.35)' } }}>
                Send enquiry
              </Button>
              <Button component={Link} href="/en/maszyny/partnerzy" variant="outlined"
                sx={{ borderColor: 'var(--dim-18)', color: 'var(--dim-75)',
                  fontWeight: 600, fontSize: '0.875rem', textTransform: 'none', px: 4, py: 2,
                  borderRadius: '6px', '&:hover': { borderColor: 'var(--dim-42)', color: 'var(--text)', bgcolor: 'var(--surface-04)' } }}>
                All partner machines
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* ── Breadcrumb ── */}
      <Box sx={{ bgcolor: 'var(--bg-alt)', borderTop: `1px solid var(--border)` }}>
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <Typography variant="body2" sx={{ color: 'var(--dim-72)', display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap', fontSize: '0.8rem' }}>
            <Link href="/en" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link href="/en/maszyny" style={{ color: 'inherit', textDecoration: 'none' }}>Machines</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link href="/en/maszyny/partnerzy" style={{ color: 'inherit', textDecoration: 'none' }}>Partner machines</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <span>Pallet wrappers</span>
          </Typography>
        </Container>
      </Box>
    </main>
  );
}
