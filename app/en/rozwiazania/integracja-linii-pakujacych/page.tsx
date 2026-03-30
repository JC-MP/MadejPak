import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Packaging Line Integration | MadejPak',
  description: 'MadejPak designs and integrates complete packaging lines — machines from different manufacturers into a cohesive, synchronized production flow.',
  alternates: {
    canonical: `${SITE_URL}/en/rozwiazania/integracja-linii-pakujacych`,
    languages: {
      'pl': `${SITE_URL}/rozwiazania/integracja-linii-pakujacych`,
      'en': `${SITE_URL}/en/rozwiazania/integracja-linii-pakujacych`,
      'x-default': `${SITE_URL}/rozwiazania/integracja-linii-pakujacych`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/en/rozwiazania/integracja-linii-pakujacych`,
    title:       'Packaging Line Integration | MadejPak',
    description: 'MadejPak designs and integrates complete packaging lines — machines from different manufacturers into a cohesive, synchronized production flow.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Packaging Line Integration – MadejPak' }],
  },
};

const BG = 'var(--bg)', BG_CARD = 'var(--bg-card)', BG_ALT = 'var(--bg-alt)', ACCENT = '#E8610A', BORDER = 'var(--border)', TEXT_DIM = 'var(--dim-72)';

const STEPS = [
  {
    num: '01', title: 'Process Analysis',
    desc: 'We visit your facility and analyze the existing or planned process. We identify bottlenecks, format requirements, and interfaces between stages.',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 28, height: 28 }}>
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.75" />
        <path d="M16.5 16.5 21 21" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </Box>
    ),
  },
  {
    num: '02', title: 'Conceptual Design',
    desc: 'We develop a line concept — machine layout, flow diagram, control points, and control architecture (PLC / SCADA / HMI). The client receives a functional diagram, estimated throughput, and preliminary pricing.',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 28, height: 28 }}>
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.75" />
        <path d="M7 8h10M7 12h6M7 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="18" cy="15" r="2.5" fill="currentColor" opacity=".25" />
        <path d="M17 15h2M18 14v2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </Box>
    ),
  },
  {
    num: '03', title: 'Machine Selection',
    desc: 'We select MadejPak and partner equipment optimal for the given product and volume. We coordinate deliveries and installation.',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 28, height: 28 }}>
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </Box>
    ),
  },
  {
    num: '04', title: 'Integration & Commissioning',
    desc: 'We integrate mechanically, electrically, and communicatively. We synchronize speeds, conduct FAT (factory acceptance testing) and SAT (site acceptance testing).',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 28, height: 28 }}>
        <path d="M13 2 4.09 12.26a1 1 0 0 0 .74 1.64H11l-1 8 8.91-10.26a1 1 0 0 0-.74-1.64H13l1-8Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </Box>
    ),
  },
  {
    num: '05', title: 'Training & Service',
    desc: 'We train operators and maintenance teams. We provide warranty and post-warranty service and access to spare parts.',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 28, height: 28 }}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </Box>
    ),
  },
];

const SCOPE = [
  {
    title: 'Product Packaging',
    desc: 'Bags, cartons, trays, flow-pack — we match the packaging format to the product and line volume.',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 26, height: 26 }}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m3.27 6.96 8.73 5.05 8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </Box>
    ),
  },
  {
    title: 'Weighing & Dosing',
    desc: 'Multi-head, volumetric, and gravimetric weighing systems integrated directly with the packaging machine.',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 26, height: 26 }}>
        <path d="M12 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" />
        <path d="M6.5 7h11l2 13H4.5L6.5 7Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 7c0-1.66 1.34-3 3-3s3 1.34 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </Box>
    ),
  },
  {
    title: 'Palletizing',
    desc: 'Linear and robotic palletizers — from 200 to 1800+ cycles/h, for bags, cartons, and grouped packaging.',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 26, height: 26 }}>
        <rect x="3" y="14" width="8" height="7" rx="1" stroke="currentColor" strokeWidth="1.75" />
        <rect x="13" y="14" width="8" height="7" rx="1" stroke="currentColor" strokeWidth="1.75" />
        <rect x="7" y="7" width="10" height="6" rx="1" stroke="currentColor" strokeWidth="1.75" />
        <rect x="9" y="3" width="6" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </Box>
    ),
  },
  {
    title: 'Pallet Wrapping',
    desc: 'Automatic and semi-automatic stretch wrappers — arm and rotary types, integrated with conveyors.',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 26, height: 26 }}>
        <path d="M21.5 2v6h-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.34 15.57a10 10 0 1 1-.57-8.38" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </Box>
    ),
  },
  {
    title: 'Internal Transport',
    desc: 'Belt and roller conveyors, accumulation and transfer systems connecting every stage of the line in a continuous flow.',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 26, height: 26 }}>
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.75" />
        <path d="M12 15h5M15 12v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </Box>
    ),
  },
  {
    title: 'HMI Control',
    desc: 'One operator console for the entire line — speed synchronization, recipes, alarms, and diagnostics.',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 26, height: 26 }}>
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M7 8h3M7 11h2M14 8l-2 3h3l-2 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </Box>
    ),
  },
  {
    title: 'ERP / MES Integration',
    desc: 'Connecting the line to plant information systems — real-time exchange of production data.',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 26, height: 26 }}>
        <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="5" cy="19" r="2" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="19" cy="19" r="2" stroke="currentColor" strokeWidth="1.75" />
        <path d="M12 7v5M12 12l-5.5 5M12 12l5.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </Box>
    ),
  },
  {
    title: 'Quality Control',
    desc: 'Metal detection, checkweighing, and machine vision built into the flow — before or after packaging.',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 26, height: 26 }}>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.75" />
        <path d="M12 9v1M12 14v1M9 12H8M16 12h-1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </Box>
    ),
  },
];

const EXAMPLE_LINES = [
  {
    label: 'Bulk products',
    title: 'Multi-head scale → VFFS → wrapper → palletizer',
    desc: 'Salt, groats, granules, fertilizers. One line from dosing to a finished stretch-wrapped pallet — controlled from a single HMI.',
    tags: ['Food industry', 'FMCG', 'Building materials'],
  },
  {
    label: 'Fragile products',
    title: 'Feeder with separation → flowpack → grouping → cartoning',
    desc: 'Wafers, biscuits, bread. Gentle handling, constant line speed, and checkweighing before cartoning.',
    tags: ['Food industry', 'Unit packaging'],
  },
  {
    label: 'Technical chemicals',
    title: 'Doser → bag sealer → checkweigher → labeler',
    desc: 'Fertilizers, cleaning agents, dusty substances. Line resistant to harsh environments, with metal detection and full batch traceability.',
    tags: ['Chemicals', 'Agricultural & food industry'],
  },
];

const VALUE_PILLARS = [
  {
    title: 'One integrator, one responsibility',
    desc: 'You don\'t pass problems between suppliers. MadejPak is responsible for the operation of the entire line — regardless of whose machine is at the start or end.',
  },
  {
    title: 'Fewer downtime events, faster response',
    desc: 'When one supplier is responsible for the entire line, a failure of any element has one point of contact that resolves it — no finger-pointing between manufacturers.',
  },
  {
    title: 'Throughput of the entire line, not one machine',
    desc: 'Bottlenecks identified during the design phase don\'t generate production losses. We synchronize speeds and buffers so no stage waits for the previous one.',
  },
  {
    title: 'Easier post-deployment service',
    desc: 'One service agreement for the entire line. One phone call when something happens — no splitting problems across separate contracts with each manufacturer.',
  },
];

function Arrow() {
  return <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden sx={{ width: 13, height: 13, flexShrink: 0 }}><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></Box>;
}

export default function IntegracjaEnPage() {
  return (
    <Box component="main" sx={{ bgcolor: BG, color: 'var(--text)' }}>
      <Box sx={{ height: { xs: 60, md: 72 } }} />

      {/* Hero */}
      <Box sx={{ position: 'relative', overflow: 'hidden', bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Box aria-hidden="true" sx={{
          display: { xs: 'none', md: 'block' },
          position: 'absolute', top: 0, right: 0,
          width: '46%', height: '100%', zIndex: 0, pointerEvents: 'none',
        }}>
          <Box sx={{
            position: 'absolute', inset: 0, zIndex: 1,
            background: [
              `linear-gradient(to right, var(--bg-alt) 0%, color-mix(in srgb, var(--bg-alt) 75%, transparent) 18%, color-mix(in srgb, var(--bg-alt) 25%, transparent) 45%, transparent 100%)`,
              `linear-gradient(to bottom, color-mix(in srgb, var(--bg-alt) 55%, transparent) 0%, transparent 20%, transparent 80%, color-mix(in srgb, var(--bg-alt) 55%, transparent) 100%)`,
            ].join(', '),
          }} />
          <Image src="/images/other/integracjaliniipakowania.png" alt="" fill sizes="(max-width: 768px) 0vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.5 }} />
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 10 } }}>
          <Box>
            <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 2, mb: 1, display: 'block' }}>Solutions</Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, lineHeight: 1.15, mb: 3 }}>Packaging Line Integration</Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, fontSize: '1.05rem', lineHeight: 1.8, mb: 5 }}>
              We connect machines from different manufacturers into a single cohesive production flow. We design material flow, select communication interfaces, and synchronize every stage — from product infeed to finished pallet dispatch.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Box component={Link} href="/en/kontakt" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: ACCENT, color: '#fff', px: 3.5, py: 1.5, borderRadius: 1.5, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { bgcolor: '#c9520a' } }}>Ask about implementation <Arrow /></Box>
              <Box component={Link} href="/en/realizacje" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, border: `1px solid ${BORDER}`, color: 'var(--text)', px: 3.5, py: 1.5, borderRadius: 1.5, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}>View case studies</Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Scope */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ mb: 6, maxWidth: 680 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, fontWeight: 700, mb: 2 }}>What integration includes</Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.85 }}>
              Line integration is much more than placing machines side by side — each device communicates with the others, and everything is controlled from one place.
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2 }}>
            {SCOPE.map((item) => (
              <Box key={item.title} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 2.5, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Box sx={{ width: 44, height: 44, borderRadius: 1.5, bgcolor: `${ACCENT}15`, color: ACCENT, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {item.icon}
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', lineHeight: 1.35 }}>{item.title}</Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.65, fontSize: '0.8rem' }}>{item.desc}</Typography>
              </Box>
            ))}
          </Box>

          {/* Example lines */}
          <Box sx={{ mt: { xs: 6, md: 8 } }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 3 }}>
              Example lines
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
              {EXAMPLE_LINES.map((ex) => (
                <Box key={ex.label} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 1.5, p: 3 }}>
                  <Typography sx={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, mb: 1 }}>
                    {ex.label}
                  </Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.88rem', lineHeight: 1.4, color: 'var(--text)', mb: 1.5 }}>
                    {ex.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.7, mb: 2 }}>
                    {ex.desc}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                    {ex.tags.map((t) => (
                      <Typography key={t} sx={{ fontSize: '0.68rem', fontWeight: 600, px: 1.25, py: 0.4, bgcolor: 'var(--surface-05)', color: 'var(--dim-55)', borderRadius: '4px' }}>
                        {t}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Business value */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ mb: 6, maxWidth: 600 }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
              Why integration
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, fontWeight: 700, mb: 2, letterSpacing: '-0.02em' }}>
              What you gain with a single integrator
            </Typography>
            <Typography sx={{ color: TEXT_DIM, lineHeight: 1.8, fontSize: '0.95rem' }}>
              Buying machines from different suppliers and attempting self-integration is one of the most common causes of downtime and unexpected costs in manufacturing plants.
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5 }}>
            {VALUE_PILLARS.map((p) => (
              <Box key={p.title} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '0.975rem', color: 'var(--text)', mb: 1.25 }}>{p.title}</Typography>
                <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.75 }}>{p.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Steps */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, fontWeight: 700, mb: 6 }}>Implementation process</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3 }}>
            {STEPS.map((s) => (
              <Box key={s.num} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ width: 48, height: 48, borderRadius: 1.5, bgcolor: `${ACCENT}18`, color: ACCENT, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {s.icon}
                  </Box>
                  <Typography sx={{ fontSize: '0.72rem', fontWeight: 800, color: ACCENT, letterSpacing: 2, lineHeight: 1 }}>{s.num}</Typography>
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: '0.975rem' }}>{s.title}</Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.7 }}>{s.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ bgcolor: BG }}>
        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 3, p: { xs: 4, md: 6 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, justifyContent: 'space-between', gap: 4 }}>
            <Box sx={{ maxWidth: 500 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.6rem' }, fontWeight: 700, mb: 1.5 }}>Have a project to discuss?</Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>Tell us about your process and product — we will prepare a preliminary integration concept and quote.</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexShrink: 0 }}>
              <Box component={Link} href="/en/kontakt" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: ACCENT, color: '#fff', px: 4, py: 1.75, borderRadius: 1.5, fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', '&:hover': { bgcolor: '#c9520a' } }}>Request a quote <Arrow /></Box>
              <Box component={Link} href="/en/rozwiazania" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, border: `1px solid ${BORDER}`, color: 'var(--text)', px: 4, py: 1.75, borderRadius: 1.5, fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}>All solutions</Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Breadcrumb */}
      <Box sx={{ bgcolor: 'var(--bg-alt)', borderTop: `1px solid var(--border)` }}>
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <Typography variant="body2" sx={{ color: 'var(--dim-72)', display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap', fontSize: '0.8rem' }}>
            <Link href="/en" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link href="/en/rozwiazania" style={{ color: 'inherit', textDecoration: 'none' }}>Solutions</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <span>Packaging Line Integration</span>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
