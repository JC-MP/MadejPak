import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import { INDUSTRIES, type Industry } from '@/data/industriesData';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Industries served by MadejPak',
  description:
    'Packaging technologies, line integration and automation for the food, chemical, cosmetics, pharmaceutical and other manufacturing industries.',
  alternates: {
    canonical: `${SITE_URL}/en/branze`,
    languages: {
      'pl': `${SITE_URL}/branze`,
      'en': `${SITE_URL}/en/branze`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/en/branze`,
    title:       'Industries | MadejPak',
    description: 'Packaging technologies, line integration and automation for the food, chemical, cosmetics, pharmaceutical and other manufacturing industries.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Industries – MadejPak' }],
  },
};

// ─── Design tokens ─────────────────────────────────────────────────────────────
const BG      = 'var(--bg)';
const BG_CARD = 'var(--bg-card)';
const BG_ALT  = 'var(--bg-alt)';
const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

// ─── Industry name / category translations ──────────────────────────────────
const INDUSTRY_EN: Record<string, { name: string; category: string; description: string; products: string[]; technologies: string[]; ctaLabel: string }> = {
  spozywcza: {
    name: 'Food',
    category: 'Food & Processing',
    description:
      'The food industry demands dosing precision, format flexibility and continuous production. We handle bulk, granulated, bakery products, coffee, snacks and processed foods. We integrate weighing, packaging and palletising systems into a coherent line matched to your plant output.',
    products: [
      'Bulk and granulated products',
      'Coffee, cocoa, tea',
      'Flour, sugar, groats, pasta',
      'Bakery and confectionery products',
      'Snacks and savoury products',
      'Frozen and processed products',
    ],
    technologies: [
      'Multihead weighing and dosing',
      'Vertical and horizontal packaging (flowpack)',
      'Bagging and big-bag filling',
      'Palletising and pallet wrapping',
      'Line integration and internal transport',
    ],
    ctaLabel: 'Ask about implementation',
  },
  chemiczna: {
    name: 'Chemical',
    category: 'Industrial & Technical Chemistry',
    description:
      'The chemical industry requires hermetic packaging, safe product feeding and machines resistant to production conditions. We work with technical powders, granulated cleaning agents, fertilisers and detergents. We select bagging and dosing lines matched to the product and working environment.',
    products: [
      'Technical powders and granulates',
      'Detergents and cleaning agents',
      'Fertilisers and crop protection products',
      'Pigments and mineral raw materials',
      'Chemical semi-products',
    ],
    technologies: [
      'Big-bag and open-mouth bag filling',
      'Precise dosing and filling',
      'Film and hermetic packaging',
      'Industrial palletising',
      'Internal transport of bulk products',
    ],
    ctaLabel: 'Ask about implementation',
  },
  kosmetyczna: {
    name: 'Cosmetics',
    category: 'Cosmetics & Personal Care',
    description:
      'Cosmetics manufacturers require process repeatability, high finished-package aesthetics and smooth packing automation. We handle unit-product packaging, grouping into multipacks and cartoning. Solutions are matched to product format, line speed and quality requirements.',
    products: [
      'Care and hygiene products',
      'Sachets and unit packs',
      'Sets and multipacks',
      'Display cartons and group packs',
      'Seasonal and limited-edition products',
    ],
    technologies: [
      'Unit-packaging automation',
      'Grouping and multipack packaging',
      'Cartoning and taping',
      'Pick-and-place robotics',
      'End-of-line and dispatch preparation',
    ],
    ctaLabel: 'Explore possibilities',
  },
  farmaceutyczna: {
    name: 'Pharmaceutical',
    category: 'Pharma & Medical Devices',
    description:
      'Pharmaceutical plants and supplement manufacturers require high process control, full cycle repeatability and integration with quality-control systems. We support automation of unit and multipack packaging, assembly and dispatch preparation.',
    products: [
      'Supplements and functional foods',
      'OTC products and para-pharmaceuticals',
      'Sachet and blister products',
      'Medical and diagnostic products',
    ],
    technologies: [
      'Precise dosing and filling',
      'Unit packaging and assembly',
      'Labelling and product identification',
      'Secondary packaging and cartoning',
      'Palletising and end-of-line',
    ],
    ctaLabel: 'Ask about implementation',
  },
  petfood: {
    name: 'Pet Food',
    category: 'Pet Food & Feed',
    description:
      'The pet food industry combines food-grade requirements — dosing precision, process hygiene — with the need to handle large bagging volumes and efficient palletising. We work with dry feed, granulated blends and specialist products. We integrate the full flow: weighing, bagging, transport and end-of-line.',
    products: [
      'Dry feed and granulate',
      'Blends and animal supplements',
      'Treats and specialist products',
      'Bulk bagged products',
    ],
    technologies: [
      'Bagging and bag filling',
      'Multihead weighing and dosing',
      'Internal transport and conveyors',
      'Palletising and pallet wrapping',
      'End-to-end line integration',
    ],
    ctaLabel: 'Ask about implementation',
  },
  napoje: {
    name: 'Beverages',
    category: 'Beverage Industry',
    description:
      'Beverage producers need efficient secondary packaging systems, format grouping and stable palletising before dispatch. We focus on automating the final line stages: grouping, shrink wrapping, cartoning and palletising. Solutions are adjusted to packaging format and production speed.',
    products: [
      'Glass and PET bottles',
      'Cans and aseptic cartons',
      'Multipacks and shrink-packs',
      'Homogeneous and mixed pallets',
    ],
    technologies: [
      'Secondary packaging and grouping',
      'Shrink wrapping',
      'Conveyor systems and transfer',
      'Palletising and load stabilisation',
      'Stretch pallet wrapping',
    ],
    ctaLabel: 'See solutions',
  },
  przemyslowa: {
    name: 'Solid Fuels & Aggregates',
    category: 'Bulk & Mineral Products',
    description:
      'The industrial sector covers packaging of heavy, bulk and dusty products — from charcoal and pellets to mineral aggregates and expanded clay. Machines must withstand extreme conditions: heavy dust, moisture and abrasive materials. We select bagging and dosing lines adapted to the hard realities of production.',
    products: [
      'Charcoal and briquettes',
      'Wood and coal pellets',
      'Eco-coal and coal fines',
      'Expanded clay and decorative stones',
      'Sand and mineral aggregates',
      'Cat litter and mineral products',
    ],
    technologies: [
      'Vertical bagging machines for bulk products',
      'Gravimetric and volumetric dosing systems',
      'Robotic palletising in harsh conditions',
      'Lines for paper and film bag packaging',
      'Anti-corrosion and dust-extraction structures',
    ],
    ctaLabel: 'Ask about implementation',
  },
  inne: {
    name: 'Other Manufacturing Industries',
    category: 'Custom Projects',
    description:
      'Not every plant fits into a standard category. We carry out line integration, packing station and automation projects for diverse production profiles: plastics, building materials, components and multi-format products. The starting point is always an analysis of product, process and deployment goals.',
    products: [
      'Plastics and technical products',
      'Building and garden products',
      'Industrial components and sub-assemblies',
      'Multi-format and multi-SKU products',
    ],
    technologies: [
      'Custom engineering and dedicated projects',
      'Integration of various machines into a single line',
      'Modernisation of existing stations',
      'Automation of auxiliary processes',
      'Robotisation of packing stations',
    ],
    ctaLabel: 'Discuss the project',
  },
};

// ─── Industry icons ────────────────────────────────────────────────────────────

const ICON_PATHS: Record<string, React.ReactNode> = {
  food: (
    <>
      <path d="M3 11l19-9-9 19-2-8-8-2z" />
    </>
  ),
  chemical: (
    <>
      <path d="M9 3h6" />
      <path d="M8.5 3v5.5L5 17a2 2 0 0 0 1.84 2.77h10.32A2 2 0 0 0 19 17l-3.5-8.5V3" />
      <path d="M7.5 13.5h9" />
    </>
  ),
  cosmetics: (
    <>
      <path d="M12 2a4 4 0 0 1 4 4v1H8V6a4 4 0 0 1 4-4z" />
      <path d="M8 7h8v13a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z" />
      <path d="M12 11v5" />
      <path d="M10 13h4" />
    </>
  ),
  pharma: (
    <>
      <rect x="8" y="2" width="8" height="8" rx="1" />
      <rect x="8" y="14" width="8" height="8" rx="1" />
      <rect x="2" y="8" width="8" height="8" rx="1" />
      <rect x="14" y="8" width="8" height="8" rx="1" />
    </>
  ),
  petfood: (
    <>
      <circle cx="9" cy="7" r="2" />
      <circle cx="15" cy="7" r="2" />
      <circle cx="6.5" cy="12" r="1.5" />
      <circle cx="17.5" cy="12" r="1.5" />
      <path d="M12 22c-3.3 0-6-2-6-4.5S8 14 12 14s6 1 6 3.5S15.3 22 12 22z" />
    </>
  ),
  beverages: (
    <>
      <path d="M9 2v3M15 2v3" />
      <path d="M8.5 5S6 6.5 6 10v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-9c0-3.5-2.5-5-2.5-5z" />
      <path d="M8 12h8" />
    </>
  ),
  ecommerce: (
    <>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.29 6.96L12 12l8.71-5.04" />
      <path d="M12 22.08V12" />
    </>
  ),
  industrial: (
    <>
      <path d="M2 20h20" />
      <path d="M6 20V10l6-7 6 7v10" />
      <path d="M9 20v-5h6v5" />
      <path d="M9 12h6" />
    </>
  ),
  other: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
    </>
  ),
};

function IndustryIcon({ iconId }: { iconId: string }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      sx={{
        width: 28,
        height: 28,
        flexShrink: 0,
        color: ACCENT,
        '& path, & circle, & rect': {
          stroke: 'currentColor',
          strokeWidth: 1.6,
          strokeLinecap: 'round' as const,
          strokeLinejoin: 'round' as const,
        },
      }}
    >
      {ICON_PATHS[iconId] ?? ICON_PATHS.other}
    </Box>
  );
}

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

function IndustryCard({ industry }: { industry: Industry }) {
  const en = INDUSTRY_EN[industry.id];
  const name        = en?.name        ?? industry.name;
  const category    = en?.category    ?? industry.category;
  const description = en?.description ?? industry.description;
  const products    = en?.products    ?? industry.products;
  const technologies = en?.technologies ?? industry.technologies;
  const ctaLabel    = en?.ctaLabel    ?? industry.cta.label;

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
      {/* Card header */}
      <Box
        sx={{
          px: { xs: 3, md: 3.5 },
          pt: { xs: 3, md: 3.5 },
          pb: 2.5,
          borderBottom: `1px solid ${BORDER}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <IndustryIcon iconId={industry.iconId} />

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
          {category}
        </Typography>
      </Box>

      {/* Card body */}
      <Box
        sx={{
          px: { xs: 3, md: 3.5 },
          pt: 3,
          pb: 2.5,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          component="h3"
          sx={{
            fontSize: '1.05rem',
            fontWeight: 700,
            color: 'var(--text)',
            lineHeight: 1.3,
            letterSpacing: '-0.015em',
            mb: 1.5,
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            fontSize: '0.85rem',
            color: TEXT_DIM,
            lineHeight: 1.75,
            mb: 3,
          }}
        >
          {description}
        </Typography>

        {/* Products / applications */}
        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color: 'var(--dim-28)',
              mb: 1.25,
            }}
          >
            Products & Applications
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
            {products.map((product) => (
              <Box
                key={product}
                sx={{
                  fontSize: '0.72rem',
                  color: 'var(--dim-65)',
                  bgcolor: 'var(--surface-04)',
                  border: '1px solid var(--surface-07)',
                  borderRadius: '2px',
                  px: 1,
                  py: 0.375,
                  lineHeight: 1.5,
                }}
              >
                {product}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Technology areas */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color: 'var(--dim-28)',
              mb: 1.25,
            }}
          >
            Technology Areas
          </Typography>
          <Stack spacing={0.875}>
            {technologies.map((tech) => (
              <Box
                key={tech}
                sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}
              >
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
                    fontSize: '0.8rem',
                    color: 'var(--dim-65)',
                    lineHeight: 1.55,
                  }}
                >
                  {tech}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* Card footer */}
      <Box
        sx={{
          px: { xs: 3, md: 3.5 },
          pb: { xs: 3, md: 3.5 },
          pt: 2.5,
          borderTop: `1px solid ${BORDER}`,
        }}
      >
        <Box
          component={Link}
          href="/en/kontakt"
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
export default function BranzePageEN() {
  return (
    <main>
      {/* Header spacer */}
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ── SECTION 1: Intro ──────────────────────────────────────── */}
      <Box
        component="section"
        aria-labelledby="branze-heading"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          bgcolor: BG,
          borderBottom: `1px solid ${BORDER}`,
          py: { xs: 10, md: 14 },
        }}
      >
        {/* Right image with gradient */}
        <Box aria-hidden="true" sx={{
          display: { xs: 'none', md: 'block' },
          position: 'absolute', top: 0, right: 0,
          width: '46%', height: '100%', zIndex: 0, pointerEvents: 'none',
        }}>
          <Box sx={{
            position: 'absolute', inset: 0, zIndex: 1,
            background: [
              `linear-gradient(to right, var(--bg) 0%, color-mix(in srgb, var(--bg) 75%, transparent) 18%, color-mix(in srgb, var(--bg) 25%, transparent) 45%, transparent 100%)`,
              `linear-gradient(to bottom, color-mix(in srgb, var(--bg) 55%, transparent) 0%, transparent 20%, transparent 80%, color-mix(in srgb, var(--bg) 55%, transparent) 100%)`,
            ].join(', '),
          }} />
          <Image src="/images/other/branze-zdjeciapudelek.jpg" alt="" fill sizes="(max-width: 768px) 0vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.5 }} />
        </Box>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: 620 }}>
            <Typography
              sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: ACCENT, mb: { xs: 2, md: 2.5 } }}
            >
              Industries & Applications
            </Typography>

            <Typography
              component="h1"
              id="branze-heading"
              sx={{ fontSize: { xs: '1.875rem', md: '2.5rem', lg: '3rem' }, fontWeight: 800,
                letterSpacing: '-0.025em', color: 'var(--text)', lineHeight: 1.1, mb: { xs: 2.5, md: 3 } }}
            >
              Industries for which we design packaging technologies
            </Typography>

            <Typography
              sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, color: TEXT_DIM, lineHeight: 1.75, maxWidth: 480, mb: 3 }}
            >
              From food and chemical products to cosmetics, beverages
              and pet products — we design solutions adapted
              to the real operating conditions of your plant.
            </Typography>

            <Typography
              sx={{ fontSize: { xs: '0.9rem', md: '0.95rem' }, color: TEXT_DIM, lineHeight: 1.75, maxWidth: 440, mb: 4 }}
            >
              We select machines, lines and automation solutions
              tailored to the product, process and requirements of each production facility.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              <Button component={Link} href="/en/rozwiazania" variant="contained" disableElevation
                sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, fontSize: '0.875rem',
                  textTransform: 'none', px: 3, py: 1.5, borderRadius: '6px', whiteSpace: 'nowrap',
                  transition: 'background-color 0.18s ease, transform 0.18s ease',
                  '&:hover': { bgcolor: '#F07520', transform: 'translateY(-1px)' } }}
              >
                See solutions
              </Button>
              <Button component={Link} href="/en/kontakt" variant="outlined"
                sx={{ borderColor: 'var(--dim-18)', color: 'var(--dim-85)', fontWeight: 600,
                  fontSize: '0.875rem', textTransform: 'none', px: 3, py: 1.5,
                  borderRadius: '6px', whiteSpace: 'nowrap',
                  transition: 'border-color 0.18s ease, color 0.18s ease',
                  '&:hover': { borderColor: 'var(--dim-42)', color: 'var(--text)', bgcolor: 'var(--surface-04)' } }}
              >
                Contact us
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* ── SECTION 2: How it works ──────────────────────────────── */}
      <Box
        component="section"
        aria-label="How we work"
        sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 10 } }}
      >
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            How we work
          </Typography>
          <Typography component="h2"
            sx={{ fontSize: { xs: '1.4rem', md: '1.875rem' }, fontWeight: 800, letterSpacing: '-0.02em', mb: { xs: 6, md: 8 }, maxWidth: 560 }}>
            You don't need to know the machines — we'll ask the right questions
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: { xs: 3, md: 4 } }}>
            {[
              {
                num: '01',
                title: 'We listen and analyse',
                body: "Tell us about your product, your production speed and the problems you want to solve. You don't need to know the names of any machines — we'll visit your facility, see the plant and assess what's needed ourselves.",
              },
              {
                num: '02',
                title: 'We select and quote',
                body: 'Based on our analysis we propose concrete solutions — machines, line integration or automation. We present options across different price ranges and help you choose what makes sense for your business.',
              },
              {
                num: '03',
                title: 'We implement and stay',
                body: "We install, commission and train your staff. Then we stay — machine servicing and maintenance is our daily routine. We don't disappear after the sale.",
              },
            ].map((step) => (
              <Box key={step.num} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: `color-mix(in srgb, ${ACCENT} 12%, var(--bg-card))`, border: `1px solid color-mix(in srgb, ${ACCENT} 30%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Typography sx={{ fontSize: '0.7rem', fontWeight: 800, color: ACCENT, letterSpacing: '0.05em' }}>{step.num}</Typography>
                </Box>
                <Typography component="h3" sx={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.3, color: 'var(--text)' }}>
                  {step.title}
                </Typography>
                <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.75 }}>
                  {step.body}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── SECTION 3: Industry grid ──────────────────────────────── */}
      <Box
        component="section"
        aria-label="Industries list"
        sx={{
          bgcolor: BG,
          py: { xs: 10, md: 14 },
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                lg: 'repeat(3, 1fr)',
              },
              gap: { xs: 2.5, md: 3 },
            }}
          >
            {INDUSTRIES.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── SECTION 4: ROI ───────────────────────────────────────── */}
      <Box
        component="section"
        aria-label="Return on investment"
        sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: { xs: 6, lg: 10 }, alignItems: 'center' }}>

            {/* Left: text */}
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Return on investment
              </Typography>
              <Typography component="h2"
                sx={{ fontSize: { xs: '1.4rem', md: '1.875rem' }, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, mb: 3 }}>
                Packaging automation pays off — indicative data from deployments
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.8, mb: 2.5 }}>
                Many clients approach us worried about cost. Yet a well-selected packaging machine typically pays for itself within 1–3 years — and savings on labour costs, waste and downtime last for decades.
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.8, mb: 4 }}>
                Every quote is preceded by a profitability analysis. We show concretely: what the machine costs, how much can be saved monthly and when the investment will break even. The figures below are indicative and depend on industry, scale and project.
              </Typography>
              <Box component={Link} href="/en/realizacje"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontSize: '0.875rem', fontWeight: 600, color: ACCENT, textDecoration: 'none', '&:hover': { gap: 1.25 }, transition: 'gap 0.15s ease' }}>
                See case studies and deployment results
                <Box component="svg" viewBox="0 0 16 16" fill="none" sx={{ width: 13, height: 13 }}>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </Box>
              </Box>
            </Box>

            {/* Right: KPI tiles */}
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              {[
                { value: '12–36', unit: 'months', label: 'typical return on investment (ROI) period' },
                { value: 'up to 60%', unit: '', label: 'reduction in packing labour costs' },
                { value: '2–5×', unit: '', label: 'increase in production line throughput' },
                { value: 'up to 40%', unit: '', label: 'less waste and material losses' },
              ].map((kpi) => (
                <Box key={kpi.label}
                  sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `3px solid ${ACCENT}`, borderRadius: '4px', p: { xs: 2.5, md: 3 } }}>
                  <Typography sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', lineHeight: 1 }}>
                    {kpi.value}
                    {kpi.unit && <Box component="span" sx={{ fontSize: '1rem', fontWeight: 600, color: ACCENT, ml: 0.5 }}>{kpi.unit}</Box>}
                  </Typography>
                  <Typography sx={{ fontSize: '0.78rem', color: TEXT_DIM, lineHeight: 1.5, mt: 1 }}>
                    {kpi.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── SECTION 5: Philosophy block ──────────────────────────── */}
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
              Every industry has different requirements regarding product, packaging,
              throughput and end-of-line. That is why the selection of packaging technology
              must be driven by the process, not by the machine itself.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.875rem', md: '0.95rem' },
                color: TEXT_DIM,
                lineHeight: 1.75,
              }}
            >
              MadejPak analyses production requirements — product type, packaging format,
              line speed, environmental conditions — and on that basis selects
              and integrates technological solutions. The result: a line that
              works under the real conditions of your plant.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── SECTION 6: Final CTA ─────────────────────────────────── */}
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
                Looking for a solution for your production?
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', md: '0.95rem' },
                  color: TEXT_DIM,
                  lineHeight: 1.75,
                  maxWidth: 460,
                }}
              >
                We match packaging technology, line integration and automation
                to your specific product and plant operating conditions.
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
                Send an enquiry
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </main>
  );
}
