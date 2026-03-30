import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { MACHINE_CATEGORIES, PARTNER_OVERVIEW, type MachineCategory } from '@/data/partnerMachinesData';
import MachineImage from '@/components/ui/MachineImage';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

// ─── EN overrides for MACHINE_CATEGORIES data ─────────────────────────────────
type CategoryOverride = {
  name: string;
  category: string;
  description: string;
  applications: string[];
  ctaLabel: string;
  ctaHref: string;
  imageAlt: string;
};

const CATEGORY_EN: Record<string, CategoryOverride> = {
  flowpack: {
    name: 'Flow wrap / horizontal packaging',
    category: 'Horizontal packaging',
    description:
      'Horizontal flow wrap machines wrap products in heat-shrink or flow pack film — from individual items to multi-packs. GSP / Tecno Pack provides compact and modular solutions for food, chemical and pharmaceutical sectors. Machines integrate with automatic infeed, weighing and conveying into a continuous packaging line.',
    applications: [
      'Individual wrapping in flow pack film',
      'Food, OTC and chemical products',
      'Lines with manual or automatic infeed',
      'Multi-lane and multi-row systems',
      'Integration with product weighing and conveying',
    ],
    ctaLabel: 'View flow wrap machines',
    ctaHref: '/en/maszyny/poziome-maszyny-pakujace',
    imageAlt: 'Horizontal flow wrap packaging machine',
  },
  vffs: {
    name: 'Vertical packaging machines (VFFS)',
    category: 'Vertical packaging',
    description:
      'Vertical form-fill-seal (VFFS) machines form a bag from a film roll, dose the product and seal the pouch in one operating cycle. Essegi provides compact VFFS machines for granular, bulk and flake products. Solutions integrate with multihead weighers and conveyors — ensuring dosing precision at high line throughput.',
    applications: [
      'Bulk, granular and flake products',
      'Coffee, cocoa, spices, granules, powders',
      'Pouch and pillow bag formats',
      'Integration with multihead weighing',
      'Various throughputs and film formats',
    ],
    ctaLabel: 'View VFFS machines',
    ctaHref: '/en/maszyny/pionowe-maszyny-pakujace',
    imageAlt: 'Vertical VFFS packaging machine',
  },
  wazenie: {
    name: 'Weighing & dosing',
    category: 'Product preparation',
    description:
      'Precise weighing and dosing is the foundation of a repeatable packaging process. Concetti and Essegi provide multihead weighing, volumetric and gravimetric dosing systems for a wide range of bulk products. Systems integrate directly with packaging machines — ensuring a closed flow: weighing, packaging, conveying.',
    applications: [
      'Bulk, granular and grain products',
      'Multihead weighing',
      'Volumetric and gravimetric dosing',
      'Integration with VFFS and bagging machines',
      'Lines for food and chemical sectors',
    ],
    ctaLabel: 'View weighing systems',
    ctaHref: '/en/maszyny/wazenie-i-dozowanie',
    imageAlt: 'Multihead weighing system for a packaging line',
  },
  workowanie: {
    name: 'Bagging & bag closing',
    category: 'Bagging systems',
    description:
      'Bagging is a key process stage for bulk products — powders, granules, flour and industrial raw materials. Concetti designs complete bagging lines: filling and weighing, bag forming and closing, transfer to conveying and palletising. Systems cover open-mouth bags, big-bags and specialist packaging in semi-automatic and fully automatic configurations.',
    applications: [
      'Bagging of bulk and granular products',
      'Open-mouth bags and big-bags',
      'Powders, granules, flour, fertilisers, pet food',
      'Complete lines with weighing and bag closing',
      'Semi-automatic and fully automatic versions',
    ],
    ctaLabel: 'View bagging systems',
    ctaHref: '/en/maszyny/workowanie',
    imageAlt: 'Bagging line for bulk products',
  },
  paletyzacja: {
    name: 'Palletising',
    category: 'End-of-line',
    description:
      'Palletising is the final stage of a packaging line — automatically stacking packages, bags or cartons onto a pallet in a stable pattern. MadejPak delivers palletising projects in cooperation with Concetti (inline palletisers) and industrial robotics leaders (robots and cobots). System selection depends on line throughput, package format, available space and process requirements.',
    applications: [
      'Palletising of bags, cartons and bulk packages',
      'Inline and robotic palletisers',
      'Throughputs from 200 to 1800+ cycles/h',
      'Food, chemical and FMCG sectors',
      'Integration with conveyors and pallet wrappers',
    ],
    ctaLabel: 'View palletising systems',
    ctaHref: '/en/maszyny/paletyzacja',
    imageAlt: 'Automatic robotic palletiser on a packaging line',
  },
  owijanie: {
    name: 'Pallet wrapping',
    category: 'Load stabilisation',
    description:
      'After palletising, every load needs to be stabilised before transport. Technowrapp designs automatic and semi-automatic stretch-wrap pallet wrappers — delivering a tight, secure wrap in a repeatable cycle. Solutions integrate with conveyors and palletisers to form a coherent and efficient end-of-line.',
    applications: [
      'Automatic pallet wrapping in stretch film',
      'Fully automatic and semi-automatic systems',
      'Rotary arm and rotary table wrappers',
      'End-of-line and finished pallet handling',
      'Integration with palletisers and conveyors',
    ],
    ctaLabel: 'View pallet wrappers',
    ctaHref: '/en/maszyny/owijarki-do-palet',
    imageAlt: 'Automatic stretch-wrap pallet wrapper',
  },
  robotyzacja: {
    name: 'Packaging robotics',
    category: 'Station automation',
    description:
      'Industrial robots and cobots automate packaging stations — especially where flexibility, fast changeover or handling of a mixed product range are important. Cobots from industry leaders are well suited to medium-throughput stations; industrial robots handle demanding palletising and handling tasks on large production lines.',
    applications: [
      'Pick-and-place and product infeed',
      'Robotic palletising and depalletising',
      'Multi-SKU and flexible stations',
      'End-of-line handling and product transfer',
      'Integration with vision systems and conveyors',
    ],
    ctaLabel: 'Explore the technology',
    ctaHref: '/en/maszyny/robotyzacja-pakowania',
    imageAlt: 'Cobot at a packaging station',
  },
  'koniec-linii': {
    name: 'Conveying & end-of-line',
    category: 'Flow integration',
    description:
      'Efficient internal conveying and continuous flow between machines is the foundation of a productive packaging line. MadejPak designs and integrates conveyor, transfer and package-handling systems — connecting equipment from different partners into a single coherent flow from the packaging machine exit to the wrapped pallet ready for dispatch.',
    applications: [
      'Belt and roller conveyors',
      'Transfer and line merging',
      'Accumulation and buffering systems',
      'Integration of multi-vendor equipment',
      'Complete flow from packaging to dispatch',
    ],
    ctaLabel: 'View conveying & end-of-line',
    ctaHref: '/en/maszyny/transport-i-koniec-linii',
    imageAlt: 'Conveyor and internal transport system for a packaging line',
  },
};

// ─── EN overrides for PARTNER_OVERVIEW specialties ───────────────────────────
const PARTNER_SPECIALTY_EN: Record<string, string> = {
  gsp:         'Supplies horizontal flow wrap machines for individual product packaging in film — for food, chemical and pharmaceutical sectors.',
  essegi:      'Supplies vertical VFFS machines and multihead weighing systems for packaging bulk products: coffee, spices, granules and powders.',
  concetti:    'Designs complete bagging lines (open-mouth bags, big-bags), weighing systems and inline palletisers for bulk and chemical sectors.',
  technowrapp: 'Supplies automatic and semi-automatic stretch-wrap pallet wrappers and end-of-line transport and handling systems.',
  dobot:       'DOBOT cobots automate pick-and-place stations and lighter palletising — flexible, fast to retool, safe without fixed guarding.',
  kuka:        'KUKA industrial robots handle demanding palletising of heavy formats, handling and high-intensity end-of-line processes.',
};

export const metadata: Metadata = {
  title: 'Technology Partner Machines | MadejPak',
  description:
    'Catalogue of machine categories and packaging technologies from MadejPak partners — flow pack, VFFS, palletising, robotics, pallet wrapping and more.',
  alternates: {
    canonical: `${SITE_URL}/en/maszyny/partnerzy`,
    languages: {
      'pl': `${SITE_URL}/maszyny/partnerzy`,
      'en': `${SITE_URL}/en/maszyny/partnerzy`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/en/maszyny/partnerzy`,
    title:       'Technology Partner Machines | MadejPak',
    description: 'Catalogue of machine categories and packaging technologies from MadejPak partners — flow pack, VFFS, palletising, robotics, pallet wrapping and more.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Partner machines – MadejPak' }],
  },
};

// ─── Design tokens ─────────────────────────────────────────────────────────────
const BG      = 'var(--bg)';
const BG_CARD = 'var(--bg-card)';
const BG_ALT  = 'var(--bg-alt)';
const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

// ─── Arrow icon ────────────────────────────────────────────────────────────────
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

// ─── Machine category card ─────────────────────────────────────────────────────
function MachineCard({ category, index }: { category: MachineCategory; index: number }) {
  const en = CATEGORY_EN[category.id] ?? null;
  const name = en?.name ?? category.name;
  const categoryLabel = en?.category ?? category.category;
  const description = en?.description ?? category.description;
  const applications = en?.applications ?? category.applications;
  const ctaLabel = en?.ctaLabel ?? category.cta.label;
  const ctaHref = en?.ctaHref ?? category.cta.href;
  const imageAlt = en?.imageAlt ?? category.imageAlt;
  const num = String(index + 1).padStart(2, '0');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: BG_CARD,
        border: `1px solid ${BORDER}`,
        borderTop: '2px solid var(--surface-08)',
        borderRadius: '4px',
        overflow: 'hidden',
        transition: 'border-color 0.2s ease',
        '&:hover': {
          borderColor: 'var(--surface-13)',
          borderTopColor: ACCENT,
        },
      }}
    >
      {/* Image — clickable link to category subpage */}
      <Box
        component={Link}
        href={ctaHref}
        sx={{ display: 'block', textDecoration: 'none' }}
      >
        <MachineImage
          src={category.imageSrc}
          alt={imageAlt}
          label={name}
        />
      </Box>

      {/* Card header: number + category label */}
      <Box
        sx={{
          px: { xs: 3, md: 3.5 },
          pt: 2.5,
          pb: 2,
          borderBottom: `1px solid ${BORDER}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Typography
          aria-hidden="true"
          sx={{
            fontSize: '1.25rem',
            fontWeight: 800,
            color: ACCENT,
            letterSpacing: '-0.03em',
            lineHeight: 1,
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {num}
        </Typography>

        <Typography
          sx={{
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--dim-28)',
            textAlign: 'right',
            lineHeight: 1.4,
            flexShrink: 0,
          }}
        >
          {categoryLabel}
        </Typography>
      </Box>

      {/* Card body */}
      <Box
        sx={{
          px: { xs: 3, md: 3.5 },
          pt: 2.5,
          pb: 2,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Category name */}
        <Typography
          component="h3"
          sx={{
            fontSize: '1rem',
            fontWeight: 700,
            color: 'var(--text)',
            lineHeight: 1.3,
            letterSpacing: '-0.015em',
            mb: 1.5,
          }}
        >
          {name}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontSize: '0.84rem',
            color: TEXT_DIM,
            lineHeight: 1.75,
            mb: 2.5,
          }}
        >
          {description}
        </Typography>

        {/* Applications */}
        <Box sx={{ mb: 2.5 }}>
          <Typography
            sx={{
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color: 'var(--dim-28)',
              mb: 1,
            }}
          >
            Applications
          </Typography>
          <Stack spacing={0.75}>
            {applications.map((app) => (
              <Box key={app} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                <Box
                  sx={{
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    bgcolor: ACCENT,
                    mt: '7px',
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: '0.79rem',
                    color: 'var(--dim-65)',
                    lineHeight: 1.55,
                  }}
                >
                  {app}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Partners */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color: 'var(--dim-28)',
              mb: 1,
            }}
          >
            Partners
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
            {category.partners.map((partner) => (
              <Box
                key={partner}
                sx={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: ACCENT,
                  bgcolor: 'rgba(232,97,10,0.08)',
                  border: '1px solid rgba(232,97,10,0.2)',
                  borderRadius: '2px',
                  px: 1,
                  py: 0.375,
                  lineHeight: 1.5,
                }}
              >
                {partner}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Card footer: CTA */}
      <Box
        sx={{
          px: { xs: 3, md: 3.5 },
          pb: { xs: 3, md: 3.5 },
          pt: 2,
          borderTop: `1px solid ${BORDER}`,
        }}
      >
        <Box
          component={Link}
          href={ctaHref}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.75,
            fontSize: '0.82rem',
            fontWeight: 600,
            color: ACCENT,
            textDecoration: 'none',
            letterSpacing: '0.01em',
            transition: 'gap 0.15s ease, color 0.15s ease',
            '&:hover': { color: '#F07520', gap: 1.25 },
            '&:focus-visible': {
              outline: `2px solid ${ACCENT}`,
              outlineOffset: '2px',
              borderRadius: '2px',
            },
          }}
        >
          {ctaLabel}
          <ArrowRight />
        </Box>
      </Box>
    </Box>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function MaszynyPartnerzyPageEn() {
  return (
    <main>
      {/* Header spacer */}
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ── SECTION 1: Hero ──────────────────────────────────────── */}
      <Box
        component="section"
        aria-labelledby="machines-heading"
        sx={{
          bgcolor: BG,
          borderBottom: `1px solid ${BORDER}`,
          py: { xs: 10, md: 14 },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'flex-end' },
              justifyContent: 'space-between',
              gap: { xs: 5, md: 10 },
            }}
          >
            {/* Left: heading */}
            <Box sx={{ maxWidth: 560 }}>
              <Typography
                sx={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                  mb: { xs: 2, md: 2.5 },
                }}
              >
                Partner machine offering
              </Typography>

              <Typography
                component="h1"
                id="machines-heading"
                sx={{
                  fontSize: { xs: '1.875rem', md: '2.5rem', lg: '3rem' },
                  fontWeight: 800,
                  letterSpacing: '-0.025em',
                  color: 'var(--text)',
                  lineHeight: 1.1,
                  mb: { xs: 2.5, md: 3 },
                }}
              >
                Technology partner machines
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  color: TEXT_DIM,
                  lineHeight: 1.75,
                  maxWidth: 480,
                }}
              >
                We select packaging machines, weighing, palletising, robotics and
                end-of-line systems to match the product, process and plant requirements.
              </Typography>
            </Box>

            {/* Right: sub-description + CTAs */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3.5,
                flexShrink: 0,
                maxWidth: { xs: '100%', md: 360 },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', md: '0.95rem' },
                  color: TEXT_DIM,
                  lineHeight: 1.75,
                }}
              >
                MadejPak deploys partner technologies as an integrator — not as a reseller.
                Every machine enters the line as a synchronised element for which we are
                responsible from selection and design through commissioning and servicing.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button
                  component="a"
                  href="#categories"
                  variant="contained"
                  disableElevation
                  sx={{
                    bgcolor: ACCENT,
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    textTransform: 'none',
                    px: 3,
                    py: 1.5,
                    borderRadius: '6px',
                    whiteSpace: 'nowrap',
                    transition: 'background-color 0.18s ease, transform 0.18s ease',
                    '&:hover': { bgcolor: '#F07520', transform: 'translateY(-1px)' },
                    '&:active': { transform: 'translateY(0)' },
                  }}
                >
                  Browse machine categories
                </Button>
                <Button
                  component={Link}
                  href="/en/kontakt"
                  variant="outlined"
                  sx={{
                    borderColor: 'var(--dim-18)',
                    color: 'var(--dim-85)',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    textTransform: 'none',
                    px: 3,
                    py: 1.5,
                    borderRadius: '6px',
                    whiteSpace: 'nowrap',
                    transition: 'border-color 0.18s ease, color 0.18s ease',
                    '&:hover': {
                      borderColor: 'var(--dim-42)',
                      color: 'var(--text)',
                      bgcolor: 'var(--surface-04)',
                    },
                  }}
                >
                  Send an enquiry
                </Button>
              </Stack>
            </Box>
          </Box>

          {/* Partner name strip */}
          <Box
            sx={{
              mt: { xs: 7, md: 9 },
              pt: { xs: 4, md: 5 },
              borderTop: `1px solid ${BORDER}`,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: { xs: 2.5, sm: 4 },
            }}
          >
            <Typography
              sx={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--dim-22)',
                flexShrink: 0,
              }}
            >
              Partners
            </Typography>
            {['GSP / Tecno Pack', 'Essegi', 'Concetti', 'Technowrapp', 'KUKA'].map((name) => (
              <Typography
                key={name}
                sx={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--dim-38)',
                  letterSpacing: '0.01em',
                }}
              >
                {name}
              </Typography>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── SECTION 2: Machine categories grid ──────────────────── */}
      <Box
        id="categories"
        component="section"
        aria-labelledby="categories-heading"
        sx={{
          bgcolor: BG,
          py: { xs: 10, md: 14 },
          borderBottom: `1px solid ${BORDER}`,
          scrollMarginTop: { xs: 64, lg: 72 },
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: { xs: 7, md: 9 } }}>
            <Typography
              sx={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: ACCENT,
                mb: 2,
              }}
            >
              Technology categories
            </Typography>
            <Typography
              component="h2"
              id="categories-heading"
              sx={{
                fontSize: { xs: '1.625rem', md: '2.125rem' },
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
                lineHeight: 1.15,
                maxWidth: 560,
              }}
            >
              Machine and system types available from our partners
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                lg: 'repeat(3, 1fr)',
              },
              gap: { xs: 3, md: 3.5 },
            }}
          >
            {MACHINE_CATEGORIES.map((category, index) => (
              <MachineCard key={category.id} category={category} index={index} />
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── SECTION 3: Philosophy block ──────────────────────────── */}
      <Box
        component="section"
        sx={{
          bgcolor: BG_ALT,
          borderBottom: `1px solid ${BORDER}`,
          py: { xs: 9, md: 12 },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              maxWidth: 740,
              borderLeft: `3px solid ${ACCENT}`,
              pl: { xs: 3, md: 4 },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '1.05rem', md: '1.1875rem' },
                color: 'var(--dim-85)',
                lineHeight: 1.8,
                mb: 2.5,
                letterSpacing: '-0.01em',
              }}
            >
              The choice of a packaging machine is not determined solely by the type of equipment.
              The critical factors are the product, packaging format, throughput, feeding method,
              line integration and end-of-line requirements.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.875rem', md: '0.95rem' },
                color: TEXT_DIM,
                lineHeight: 1.75,
              }}
            >
              MadejPak selects partner technologies to fit a specific production process
              — not the other way around. The starting point is always an analysis of the
              product, line speed and plant requirements, and only on that basis is a machine
              or complete line configuration chosen.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── SECTION 3b: When to choose what ─────────────────────── */}
      <Box
        component="section"
        sx={{
          bgcolor: BG,
          borderBottom: `1px solid ${BORDER}`,
          py: { xs: 9, md: 12 },
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <Typography
              sx={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: ACCENT,
                mb: 2,
              }}
            >
              Technology selection
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: '1.625rem', md: '2.125rem' },
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
                lineHeight: 1.15,
                maxWidth: 560,
              }}
            >
              When a partner machine, when MadejPak, when a mixed setup?
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: { xs: 3, md: 3.5 },
            }}
          >
            {[
              {
                label: 'Partner machine',
                when: 'Proven technology for a standard process.',
                desc: 'Flow pack, VFFS, bagging, pallet wrappers, inline palletisers — when the process requirements fall within the catalogue capabilities of a partner machine, we select it and integrate it into the line.',
                examples: ['Flow pack of food products', '25 kg bags on a ready bagging line', 'Pallet wrappers as an end-of-line element'],
              },
              {
                label: 'MadejPak machine',
                when: 'The product or line demands a bespoke solution.',
                desc: 'When the format is non-standard, the environment is demanding or an off-the-shelf machine does not fit the existing line — we build our own device: from mechanical design and controls through FAT at the customer site.',
                examples: ['Non-standard format or gripper', 'Integration with legacy controls', 'Harsh environment (dust, moisture, temperature)'],
              },
              {
                label: 'Mixed setup',
                when: 'Multiple process stages with different characteristics.',
                desc: 'The most common scenario: part of the line based on partner machines, part on MadejPak equipment. We integrate everything into a single production flow with shared controls and a single point of responsibility.',
                examples: ['Partner machine + MadejPak conveying', 'KUKA robot + MadejPak gripper and station', 'VFFS + conveyors + robotic palletising'],
              },
            ].map((item) => (
              <Box
                key={item.label}
                sx={{
                  bgcolor: BG_CARD,
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${ACCENT}`,
                  borderRadius: '4px',
                  p: { xs: 3, md: 3.5 },
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.13em',
                    textTransform: 'uppercase',
                    color: ACCENT,
                  }}
                >
                  {item.label}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.975rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    lineHeight: 1.35,
                  }}
                >
                  {item.when}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.84rem',
                    color: TEXT_DIM,
                    lineHeight: 1.75,
                  }}
                >
                  {item.desc}
                </Typography>
                <Box
                  sx={{
                    mt: 'auto',
                    pt: 2,
                    borderTop: `1px solid ${BORDER}`,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0.75,
                  }}
                >
                  {item.examples.map((ex) => (
                    <Box key={ex} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                      <Box
                        sx={{
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          bgcolor: ACCENT,
                          mt: '7px',
                          flexShrink: 0,
                        }}
                      />
                      <Typography sx={{ fontSize: '0.79rem', color: 'var(--dim-65)', lineHeight: 1.55 }}>
                        {ex}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── SECTION 4: Partner overview ──────────────────────────── */}
      <Box
        component="section"
        aria-labelledby="partners-overview-heading"
        sx={{
          bgcolor: BG,
          borderBottom: `1px solid ${BORDER}`,
          py: { xs: 9, md: 12 },
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <Typography
              sx={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: ACCENT,
                mb: 2,
              }}
            >
              Partner technology
            </Typography>
            <Typography
              component="h2"
              id="partners-overview-heading"
              sx={{
                fontSize: { xs: '1.625rem', md: '2.125rem' },
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
                lineHeight: 1.15,
              }}
            >
              Partners in the MadejPak offering
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              columnGap: { md: 8, lg: 12 },
            }}
          >
            {PARTNER_OVERVIEW.filter((p) => p.id !== 'dobot').map((partner) => (
              <Box
                key={partner.id}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2.5,
                  py: { xs: 3, md: 3.5 },
                  borderBottom: `1px solid ${BORDER}`,
                }}
              >
                <Box
                  sx={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    bgcolor: ACCENT,
                    mt: '9px',
                    flexShrink: 0,
                  }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: 'var(--text)',
                      lineHeight: 1.3,
                      mb: 0.5,
                    }}
                  >
                    {partner.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.82rem',
                      color: TEXT_DIM,
                      lineHeight: 1.5,
                    }}
                  >
                    {PARTNER_SPECIALTY_EN[partner.id] ?? partner.specialty}
                  </Typography>
                </Box>
                <Box
                  component={Link}
                  href="/en/partnerzy"
                  aria-label={`More about partner ${partner.name}`}
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: 'var(--dim-25)',
                    textDecoration: 'none',
                    mt: '2px',
                    flexShrink: 0,
                    transition: 'color 0.15s ease',
                    '&:hover': { color: ACCENT },
                  }}
                >
                  <ArrowRight />
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── SECTION 5: Final CTA ─────────────────────────────────── */}
      <Box
        component="section"
        sx={{
          bgcolor: BG,
          py: { xs: 10, md: 14 },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              justifyContent: 'space-between',
              gap: { xs: 5, md: 8 },
            }}
          >
            <Box sx={{ maxWidth: 560 }}>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: '1.625rem', md: '2.125rem' },
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: 'var(--text)',
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Looking for the right machine or a complete packaging system?
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', md: '0.95rem' },
                  color: TEXT_DIM,
                  lineHeight: 1.75,
                  maxWidth: 460,
                }}
              >
                We help select partner technology to match the product, process
                and planned line throughput.
              </Typography>
            </Box>

            <Box sx={{ flexShrink: 0 }}>
              <Button
                component={Link}
                href="/en/kontakt"
                variant="contained"
                disableElevation
                sx={{
                  bgcolor: ACCENT,
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  px: { xs: 4, md: 5 },
                  py: 2,
                  borderRadius: '6px',
                  minHeight: 52,
                  whiteSpace: 'nowrap',
                  transition: 'background-color 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease',
                  '&:hover': {
                    bgcolor: '#F07520',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 8px 28px rgba(232,97,10,0.35)',
                  },
                  '&:active': { transform: 'translateY(0)' },
                }}
              >
                Contact us
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </main>
  );
}
