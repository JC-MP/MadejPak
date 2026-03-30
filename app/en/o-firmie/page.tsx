import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'MadejPak — packaging line integrator, technology manufacturer and implementation partner for industry. Over 25 years of experience in packaging automation and robotics.',
  alternates: {
    canonical: `${SITE_URL}/en/o-firmie`,
    languages: {
      'pl': `${SITE_URL}/o-firmie`,
      'en': `${SITE_URL}/en/o-firmie`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/en/o-firmie`,
    title:       'About Us | MadejPak',
    description: 'MadejPak — packaging line integrator, technology manufacturer and implementation partner for industry. Over 25 years of experience in packaging automation and robotics.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'About MadejPak' }],
  },
};

// ─── Design tokens ──────────────────────────────────────────────────────────
const BG      = 'var(--bg)';
const BG_CARD = 'var(--bg-card)';
const BG_ALT  = 'var(--bg-alt)';
const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

// ─── Icons ──────────────────────────────────────────────────────────────────
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

// ─── Section label ───────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </Typography>
  );
}

// ─── Activity card (Section 3) ───────────────────────────────────────────────
const ACTIVITIES = [
  {
    num: '01',
    title: 'Packaging Line Integration',
    body: 'We connect equipment from different manufacturers into a single coherent technological system. We design the flow, select interfaces and integrate every stage — from product feeding to finished pallet dispatch.',
    href: '/en/rozwiazania',
  },
  {
    num: '02',
    title: 'Packaging Automation',
    body: 'We replace or support manual work where repeatability, safety and scale matter. We design dedicated automation workstations tailored to the customer\'s product and process.',
    href: '/en/rozwiazania',
  },
  {
    num: '03',
    title: 'Process Robotics',
    body: 'We deploy industrial robots and cobots from industry leaders for palletising, pick-and-place, handling and multi-SKU workstations.',
    href: '/en/maszyny/partnerzy',
  },
  {
    num: '04',
    title: 'Custom Projects',
    body: 'We design and build proprietary solutions for processes that have no ready-made market equivalent. We handle difficult products, demanding environments and non-standard working conditions.',
    href: '/en/realizacje',
  },
  {
    num: '07',
    title: 'Modernisations & Service',
    body: 'We maintain the performance of machines and packaging lines after implementation — ongoing service, inspections, modernisations and technical support, including post-warranty periods.',
    href: '/en/serwis',
  },
];

function ActivityCard({ item }: { item: (typeof ACTIVITIES)[number] }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: BG_CARD,
        border: `1px solid ${BORDER}`,
        borderTop: '2px solid var(--surface-08)',
        borderRadius: '4px',
        p: { xs: 3, md: 3.5 },
        transition: 'border-color 0.2s ease',
        '&:hover': {
          borderTopColor: ACCENT,
          borderColor: 'var(--surface-13)',
        },
      }}
    >
      <Typography
        sx={{
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.14em',
          color: ACCENT,
          mb: 1.5,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {item.num}
      </Typography>
      <Typography
        sx={{
          fontSize: '0.95rem',
          fontWeight: 700,
          lineHeight: 1.4,
          color: 'var(--dim-85)',
          mb: 1.5,
        }}
      >
        {item.title}
      </Typography>
      <Typography
        sx={{
          fontSize: '0.82rem',
          lineHeight: 1.7,
          color: TEXT_DIM,
          flex: 1,
          mb: 2.5,
        }}
      >
        {item.body}
      </Typography>
      <Box
        component={Link}
        href={item.href}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.75,
          fontSize: '0.75rem',
          fontWeight: 600,
          color: ACCENT,
          textDecoration: 'none',
          letterSpacing: '0.04em',
          mt: 'auto',
          transition: 'gap 0.15s ease',
          '&:hover': { gap: 1.25 },
          '&:hover svg': { transform: 'translateX(2px)' },
        }}
      >
        Learn more
        <ArrowRight />
      </Box>
    </Box>
  );
}

// ─── Process steps (Section 4) ───────────────────────────────────────────────
const STEPS = [
  {
    n: '01',
    title: 'Process Analysis',
    body: 'We start by understanding the customer\'s process — the product, throughput, working environment, existing infrastructure and real constraints. We don\'t design without this phase.',
  },
  {
    n: '02',
    title: 'Technology Selection',
    body: 'Based on the analysis we select the technology: proprietary MadejPak solutions, partner machines or a combination of both. The process specifics decide — not product availability.',
  },
  {
    n: '03',
    title: 'Solution Design',
    body: 'We develop the technical design — mechanics, electrics, automation, line layout. We account for integration with existing equipment and health & safety requirements.',
  },
  {
    n: '04',
    title: 'Build & Integration',
    body: 'We carry out the implementation: we manufacture proprietary components, supply machines, assemble workstations and integrate everything into a single coherent system.',
  },
  {
    n: '05',
    title: 'Commissioning',
    body: 'We commission and test under the customer\'s production conditions — with the actual product, in the real environment. We train operators and hand over documentation.',
  },
  {
    n: '06',
    title: 'Service & Support',
    body: 'After implementation we remain available. We provide warranty and post-warranty service, technical inspections and line modernisations.',
  },
];

// ─── Advantages (Section 6) ──────────────────────────────────────────────────
const ADVANTAGES = [
  {
    title: 'Integration Experience',
    body: 'Over 25 years working on packaging lines for various customers, industries and environments. We know the problems that only appear during implementation.',
  },
  {
    title: 'Design and Build Under One Roof',
    body: 'We don\'t outsource the project. We design, build and implement independently — shortening delivery time and eliminating communication issues between stages.',
  },
  {
    title: 'Challenging Projects',
    body: 'We take on implementations in difficult environments and with non-standard products: humid, dusty, requiring precision or high throughput.',
  },
  {
    title: 'Flexible Scope',
    body: 'We tailor the scope to the customer: a single workstation, a complete packaging line, or a modernisation of an existing system. We scale from stage to stage.',
  },
  {
    title: 'Proprietary and Partner Technologies',
    body: 'We combine our own designs with machines from proven technology partners. We choose tools to suit the task, not the other way around.',
  },
  {
    title: 'Post-Warranty Service',
    body: 'We service machines and lines long after the warranty period ends. Customers are never left without support when the project is closed in the sales system.',
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function OFirmiePage() {
  return (
    <Box sx={{ bgcolor: BG, minHeight: '100vh', color: 'var(--text)' }}>
      {/* Nav spacer */}
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ════════════════════════════════════════
          SECTION 1 — HERO
      ════════════════════════════════════════ */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          borderBottom: `1px solid ${BORDER}`,
          py: { xs: 10, md: 14, lg: 16 },
        }}
      >
        {/* Right image with gradient — hidden on mobile */}
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
          <Image src="/images/other/onas-zdjeciestoiska.png" alt="" fill sizes="(max-width: 768px) 0vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.5 }} />
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box>
            <SectionLabel>About Us</SectionLabel>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: 'var(--dim-85)',
                mb: { xs: 4, md: 5 },
              }}
            >
              We design,
              <br />
              integrate
              <br />
              and implement
              <br />
              packaging technologies
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              <Box
                component={Link}
                href="/en/kontakt"
                sx={{
                  display: 'inline-flex', alignItems: 'center', gap: 1.5,
                  px: 3.5, py: 1.5, bgcolor: ACCENT, borderRadius: '3px',
                  fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.06em',
                  textTransform: 'uppercase', color: 'var(--text)', textDecoration: 'none',
                  transition: 'background-color 0.15s ease',
                  '&:hover': { bgcolor: '#D45509' },
                }}
              >
                Contact Us
                <ArrowRight />
              </Box>
              <Box
                component={Link}
                href="/en/realizacje"
                sx={{
                  display: 'inline-flex', alignItems: 'center', gap: 1.5,
                  px: 3.5, py: 1.5, border: `1px solid ${BORDER}`, borderRadius: '3px',
                  fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em',
                  textTransform: 'uppercase', color: TEXT_DIM, textDecoration: 'none',
                  transition: 'border-color 0.15s ease, color 0.15s ease',
                  '&:hover': { borderColor: 'var(--dim-20)', color: 'var(--dim-75)' },
                }}
              >
                View Projects
                <ArrowRight />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════
          SECTION 2 — WHO IS MADEJPAK
      ════════════════════════════════════════ */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
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
              <SectionLabel>Who We Are</SectionLabel>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                }}
              >
                Integrator and manufacturer of packaging technologies
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                gap: 3,
              }}
            >
              {[
                {
                  label: 'Line Integrator',
                  body: 'We connect machines and equipment from different manufacturers into a single coherent technological system — from raw material feeding to finished product dispatch.',
                },
                {
                  label: 'Designer and Manufacturer',
                  body: 'Some implementations are based on proprietary designs — engineered and built by our engineers for a specific process.',
                },
                {
                  label: 'Technology Supplier',
                  body: 'We are a partner and integrator of leading packaging machine manufacturers, industrial robots and cobots, and automation systems.',
                },
              ].map(({ label, body }) => (
                <Box
                  key={label}
                  sx={{
                    p: 3,
                    bgcolor: BG_CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: '4px',
                  }}
                >
                  <Box
                    aria-hidden="true"
                    sx={{
                      width: 28,
                      height: 2,
                      bgcolor: ACCENT,
                      mb: 2.5,
                      borderRadius: '1px',
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--dim-85)',
                      mb: 1.5,
                      lineHeight: 1.35,
                    }}
                  >
                    {label}
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.7, color: TEXT_DIM }}>
                    {body}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════
          SECTION 3 — WHAT WE DO
      ════════════════════════════════════════ */}
      <Box sx={{ bgcolor: BG_ALT, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '280px 1fr' },
              gap: { xs: 6, md: 10 },
              alignItems: 'start',
            }}
          >
            <Box>
              <SectionLabel>What We Do</SectionLabel>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  mb: 2,
                }}
              >
                Areas of activity
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.7, color: TEXT_DIM }}>
                We deliver projects ranging from a single automation workstation to complete
                packaging lines — across various industries and production environments.
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  xl: 'repeat(3, 1fr)',
                },
                gap: 2.5,
              }}
            >
              {ACTIVITIES.map((item) => (
                <ActivityCard key={item.num} item={item} />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════
          SECTION 4 — HOW WE WORK
      ════════════════════════════════════════ */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '280px 1fr' },
              gap: { xs: 6, md: 10 },
              alignItems: 'start',
            }}
          >
            <Box>
              <SectionLabel>How We Work</SectionLabel>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  mb: 2,
                }}
              >
                Collaboration process
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.7, color: TEXT_DIM }}>
                Every project starts with analysis — not a price quote.
                We don't fit the problem to a ready-made solution.
              </Typography>
            </Box>

            <Box>
              {STEPS.map((step, idx) => (
                <Box
                  key={step.n}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '52px 1fr',
                    gap: 3,
                    pb: idx < STEPS.length - 1 ? 4 : 0,
                    mb: idx < STEPS.length - 1 ? 4 : 0,
                    borderBottom: idx < STEPS.length - 1 ? `1px solid ${BORDER}` : 'none',
                    alignItems: 'start',
                  }}
                >
                  {/* Number */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        color: ACCENT,
                        pt: 0.5,
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {step.n}
                    </Typography>
                  </Box>
                  {/* Content */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        lineHeight: 1.35,
                        color: 'var(--dim-85)',
                        mb: 1,
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.83rem',
                        lineHeight: 1.7,
                        color: TEXT_DIM,
                      }}
                    >
                      {step.body}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════
          SECTION 5 — WHO WE WORK FOR
      ════════════════════════════════════════ */}
      <Box
        sx={{
          bgcolor: BG_ALT,
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 5, md: 7 } }}>
            <SectionLabel>Who We Work For</SectionLabel>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                maxWidth: 480,
              }}
            >
              Scope tailored to the customer's scale
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 3,
            }}
          >
            {/* Large plants */}
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
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--dim-85)',
                  mb: 2,
                  lineHeight: 1.3,
                }}
              >
                Large Industrial Plants
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.75, color: TEXT_DIM, mb: 3 }}>
                We deliver complex packaging line integration projects — with multiple machines,
                different manufacturers and requirements for throughput and production continuity.
                We are able to carry out implementation without stopping the existing process.
              </Typography>
              <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
                {[
                  'Complete packaging lines from design to commissioning',
                  'Integration of equipment from different manufacturers',
                  'Large-scale robotics and palletising',
                  'Phased implementations without stopping production',
                ].map((item) => (
                  <Box
                    key={item}
                    component="li"
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1.5,
                      py: 0.75,
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
                        mt: '7px',
                      }}
                    />
                    <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.6, color: TEXT_DIM }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Smaller companies */}
            <Box
              sx={{
                bgcolor: BG_CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid var(--dim-10)`,
                borderRadius: '4px',
                p: { xs: 3.5, md: 4 },
              }}
            >
              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--dim-85)',
                  mb: 2,
                  lineHeight: 1.3,
                }}
              >
                Smaller Manufacturing Companies
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.75, color: TEXT_DIM, mb: 3 }}>
                We supply specific machines and ready-made solutions for companies that need
                one proven workstation or a first step in process automation.
                We work with customers for whom this is their first implementation of this kind.
              </Typography>
              <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
                {[
                  'Specific machines and ready-made solutions',
                  'Automation of a chosen production stage',
                  'First implementation guided from A to Z',
                  'Service and support at every stage',
                ].map((item) => (
                  <Box
                    key={item}
                    component="li"
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1.5,
                      py: 0.75,
                    }}
                  >
                    <Box
                      aria-hidden="true"
                      sx={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        bgcolor: 'var(--dim-20)',
                        flexShrink: 0,
                        mt: '7px',
                      }}
                    />
                    <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.6, color: TEXT_DIM }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════
          SECTION 6 — WHY MADEJPAK
      ════════════════════════════════════════ */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 5, md: 7 } }}>
            <SectionLabel>Why MadejPak</SectionLabel>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                maxWidth: 520,
              }}
            >
              What sets us apart from a machine distributor
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
              gap: 0,
              border: `1px solid ${BORDER}`,
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            {ADVANTAGES.map((adv, idx) => (
              <Box
                key={adv.title}
                sx={{
                  p: { xs: 3, md: 3.5 },
                  borderRight: {
                    xs: 'none',
                    sm: idx % 2 === 0 ? `1px solid ${BORDER}` : 'none',
                    lg: idx % 3 !== 2 ? `1px solid ${BORDER}` : 'none',
                  },
                  borderBottom: {
                    xs: idx < ADVANTAGES.length - 1 ? `1px solid ${BORDER}` : 'none',
                    sm: idx < ADVANTAGES.length - 2 ? `1px solid ${BORDER}` : 'none',
                    lg: idx < 3 ? `1px solid ${BORDER}` : 'none',
                  },
                  bgcolor: BG_CARD,
                  transition: 'background-color 0.15s ease',
                  '&:hover': { bgcolor: 'var(--bg-card)' },
                }}
              >
                <Box
                  aria-hidden="true"
                  sx={{
                    width: 24,
                    height: 2,
                    bgcolor: ACCENT,
                    mb: 2.5,
                    borderRadius: '1px',
                  }}
                />
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: 'var(--dim-85)',
                    mb: 1.5,
                    lineHeight: 1.35,
                  }}
                >
                  {adv.title}
                </Typography>
                <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.7, color: TEXT_DIM }}>
                  {adv.body}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════
          SECTION 7 — TRUST BLOCK
      ════════════════════════════════════════ */}
      <Box
        sx={{
          bgcolor: BG_ALT,
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
          py: { xs: 8, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '280px 1fr' },
              gap: { xs: 5, md: 10 },
              alignItems: 'center',
            }}
          >
            <Box>
              <SectionLabel>By the Numbers</SectionLabel>
              <Typography
                sx={{
                  fontSize: { xs: '2.75rem', md: '3.5rem' },
                  fontWeight: 800,
                  lineHeight: 1,
                  color: ACCENT,
                  letterSpacing: '-0.04em',
                  mb: 0.75,
                }}
              >
                25+
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.85rem',
                  color: TEXT_DIM,
                  lineHeight: 1.5,
                }}
              >
                years of experience
                <br />
                in packaging technologies
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { fact: 'In-house engineering team and production facility', note: 'we design and manufacture equipment ourselves' },
                { fact: 'Spare parts in stock', note: 'fast delivery without long waits for orders' },
                { fact: 'FAT before every delivery', note: 'technical acceptance at the manufacturer before the machine reaches the line' },
                { fact: 'Post-warranty service as standard', note: 'we don\'t disappear after the project ends — we service for years' },
              ].map(({ fact, note }) => (
                <Box
                  key={fact}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.5,
                    py: 2,
                    borderBottom: `1px solid ${BORDER}`,
                  }}
                >
                  <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: ACCENT, mt: '8px', flexShrink: 0 }} />
                  <Box>
                    <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--dim-85)', lineHeight: 1.35, mb: 0.4 }}>
                      {fact}
                    </Typography>
                    <Typography sx={{ fontSize: '0.79rem', color: TEXT_DIM, lineHeight: 1.5 }}>
                      {note}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════
          SECTION 8 — CLOSING CTA
      ════════════════════════════════════════ */}
      <Box sx={{ py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 6, md: 12 },
              alignItems: 'center',
            }}
          >
            <Box>
              <SectionLabel>Contact</SectionLabel>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  mb: 2.5,
                }}
              >
                Have a project to discuss?
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.95rem',
                  lineHeight: 1.8,
                  color: TEXT_DIM,
                  mb: 4,
                }}
              >
                We'll talk about your process, product and scale of operation. On that basis
                we'll assess the scope and propose a concrete direction — no vague offers,
                no fitting the problem to a ready-made catalogue.
              </Typography>
              <Box
                component={Link}
                href="/en/kontakt"
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
                Write to Us
                <ArrowRight />
              </Box>
            </Box>

            {/* Quick nav */}
            <Box
              sx={{
                bgcolor: BG_CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <Box sx={{ px: 3.5, py: 2.5, borderBottom: `1px solid ${BORDER}` }}>
                <Typography
                  sx={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: TEXT_DIM,
                  }}
                >
                  Explore Further
                </Typography>
              </Box>
              {[
                { label: 'Our Projects', href: '/en/realizacje', desc: 'Customer implementation projects' },
                { label: 'Partner Machines', href: '/en/maszyny/partnerzy', desc: 'Technologies we integrate' },
                { label: 'Industries', href: '/en/branze', desc: 'Sectors we work in' },
                { label: 'Service', href: '/en/serwis', desc: 'Post-implementation support' },
              ].map(({ label, href, desc }, idx, arr) => (
                <Box
                  key={href}
                  component={Link}
                  href={href}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: 3.5,
                    py: 2,
                    borderBottom: idx < arr.length - 1 ? `1px solid ${BORDER}` : 'none',
                    textDecoration: 'none',
                    transition: 'background-color 0.15s ease',
                    '&:hover': { bgcolor: 'var(--surface-03)' },
                    '&:hover .arrow': { transform: 'translateX(3px)' },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--dim-85)',
                        mb: 0.25,
                        lineHeight: 1.3,
                      }}
                    >
                      {label}
                    </Typography>
                    <Typography sx={{ fontSize: '0.72rem', color: TEXT_DIM }}>
                      {desc}
                    </Typography>
                  </Box>
                  <Box
                    className="arrow"
                    sx={{ color: TEXT_DIM, flexShrink: 0, transition: 'transform 0.15s ease' }}
                  >
                    <ArrowRight />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
