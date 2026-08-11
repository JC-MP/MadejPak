import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Multihead weighers and dosing',
  description:
    'Multihead weighers and dosing systems for packaging lines — weight-based and piece-count portioning, integration with VFFS machines and tray sealers. Concetti, Essegi.',
  alternates: {
    canonical: `${SITE_URL}/en/maszyny/wazenie-i-dozowanie`,
    languages: {
      'pl': `${SITE_URL}/maszyny/wazenie-i-dozowanie`,
      'en': `${SITE_URL}/en/maszyny/wazenie-i-dozowanie`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/en/maszyny/wazenie-i-dozowanie`,
    title:       'Multihead weighers and dosing | MadejPak',
    description: 'Multihead weighers and dosing systems for packaging lines — weight-based and piece-count portioning, integration with VFFS machines and tray sealers. Concetti, Essegi.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Weighing and dosing – MadejPak' }],
  },
};

// ─── Design tokens ──────────────────────────────────────────────────────────
const BG       = 'var(--bg)';
const BG_CARD  = 'var(--bg-card)';
const BG_ALT   = 'var(--bg-alt)';
const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
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

// ─── Data ────────────────────────────────────────────────────────────────────

const FEATURES = [
  { title: 'Weighing by weight and piece count',    desc: 'Portioning in a single cycle — by weight or piece count. Repeatable accuracy regardless of line speed.' },
  { title: 'Wide product range',                    desc: 'Free-flowing, granular, granulated, brittle, sticky and slippery products — without changing the machine.' },
  { title: 'Minimal product damage',                desc: 'Bowl and chute design minimised for brittle and fragile products — biscuits, crisps, wafers.' },
  { title: 'Integration with packaging machine',    desc: 'Weigher mounted above VFFS machine or tray sealer. Direct dosing into the package with no manual operations.' },
  { title: 'Packaging into pouches and trays',      desc: 'Adapted to various types of primary packaging — film pouches, MAP trays, bulk packaging.' },
];

const APPLICATIONS = [
  { sector: 'Food',             items: ['Fresh fruit and vegetables', 'Frozen products', 'Breakfast cereals', 'Seeds and nuts'] },
  { sector: 'Confectionery & snacks', items: ['Cookies and biscuits', 'Crisps and wafers', 'Sweets and jellies', 'Crackers and breadsticks'] },
  { sector: 'Pet food & granulates', items: ['Pet food', 'Pellets and granulates', 'Granulated fertiliser', 'Small assembly components'] },
];

const SCALE_TYPES = [
  {
    name: 'Multihead weigher',
    img: '/images/machines/waga-wieloglowicowa.jpg',
    alt: 'Multihead weigher for packaging line',
    desc: 'Radial bowl arrangement — each bowl independently weighs a product portion. The system selects the bowl combination whose sum is closest to the target weight. High accuracy at high cycle speeds.',
    use: 'Free-flowing, granular, granulated, brittle and sticky products — coffee, nuts, crisps, frozen goods, pet food, seeds. Integration with VFFS and tray sealers.',
  },
  {
    name: 'Grooved weigher',
    img: '/images/machines/waga_ryflowana',
    alt: 'Grooved weigher for fragile products',
    desc: 'Collection tray with a grooved (ribbed) surface limits product sliding during weighing. Dedicated construction for products prone to sliding or fragile by nature.',
    use: 'Biscuits, cookies, wafers, flake products — wherever product shape and fragility rules out standard bowls.',
  },
  {
    name: 'B/N-K single weigher',
    img: '/images/machines/waga-BN-K.jpg',
    alt: 'B/N-K single weigher',
    desc: 'Single modular weighing system with one linear weighing channel. Compact design allows direct integration above the inlet of the packaging machine.',
    use: 'Lower-throughput lines, homogeneous bulk products, installations where a single dosing channel is sufficient.',
  },
  {
    name: 'B/N-K double weigher',
    img: '/images/machines/waga-bn-k-2.jpg',
    alt: 'B/N-K dual-channel double weigher',
    desc: 'Dual-channel configuration on a common base — two independent weighing heads feeding one machine or two parallel packaging lanes.',
    use: 'Higher-throughput lines requiring a dual dosing lane or alternating feed to equalise line speed.',
  },
];

const DOSING_TYPES = [
  { label: 'Multihead gravimetric', desc: 'The primary method for irregular shapes and products requiring weight precision. Multiple heads work simultaneously — results are combined to reach the target weight.' },
  { label: 'Volumetric',            desc: 'Cup or volumetric dosing used for homogeneous products with stable density. Lower system cost with acceptable weight accuracy.' },
  { label: 'Linear',                desc: 'Linear weighing systems for products packed in a continuous stream. Used, among others, in tray and container packing.' },
];

const PARTNERS = [
  {
    name: 'Concetti',
    origin: 'Italy',
    href: 'https://www.concetti.com',
    desc: 'Manufacturer of complete weighing, packaging and palletising lines for bulk solid products. Concetti systems include multihead and volumetric weighing integrated with bagging and packaging machines.',
  },
  {
    name: 'Essegi',
    origin: 'Italy',
    href: 'https://www.essegi.com',
    desc: 'Manufacturer of VFFS vertical packaging machines with built-in or integrated dosing systems. Essegi offers solutions with cup volumetric dispensers, vibro-channel weighing systems and vertical auger dispensers — matched to the product characteristics.',
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function WazenieIDozowanieEnPage() {
  return (
    <Box sx={{ bgcolor: BG, minHeight: '100vh', color: 'var(--text)' }}>
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ── Hero ── */}
      <Box sx={{ borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 10 }, alignItems: 'end' }}>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
                Product preparation
              </Typography>
              <Typography variant="h1"
                sx={{ fontSize: { xs: '2rem', md: '2.75rem', lg: '3rem' }, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', color: 'var(--dim-85)' }}>
                Multihead weighers<br />and dosing systems
              </Typography>
            </Box>

            <Box>
              <Typography sx={{ fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.8, color: TEXT_DIM, mb: 3 }}>
                Equipment for precise weighing and portioning of products by weight or piece count.
                Integrated directly with packaging machines — forming a closed cycle: weighing, dosing, packaging.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Box component={Link} href="/en/kontakt"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 3, py: 1.25, bgcolor: ACCENT, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', '&:hover': { bgcolor: '#D45509' } }}>
                  Ask about implementation
                  <ArrowRight />
                </Box>
                <Box component={Link} href="/en/maszyny/partnerzy"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 3, py: 1.25, border: `1px solid ${BORDER}`, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: TEXT_DIM, textDecoration: 'none', '&:hover': { borderColor: 'var(--dim-20)', color: 'var(--dim-85)' } }}>
                  All machines
                  <ArrowRight />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Features & integration ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '280px 1fr' }, gap: { xs: 4, md: 10 }, alignItems: 'start' }}>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Operating principle
              </Typography>
              <Typography variant="h2"
                sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em', mb: 2 }}>
                How multihead weighers work
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', color: TEXT_DIM, lineHeight: 1.75 }}>
                Product is fed onto a central cone and distributed into radial bowls. The system selects the bowl combination whose sum is closest to the target weight. The portion falls by gravity into the package below.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {FEATURES.map((f, i) => (
                <Box key={f.title}
                  sx={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 3, py: 2.5, borderBottom: i < FEATURES.length - 1 ? `1px solid ${BORDER}` : 'none', alignItems: 'start' }}>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.35 }}>
                    {f.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.85rem', color: TEXT_DIM, lineHeight: 1.7 }}>
                    {f.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Weigher types ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Weigher types
          </Typography>
          <Typography variant="h2"
            sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: 1.5 }}>
            Types of weighers and dosing systems
          </Typography>
          <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.75, mb: { xs: 5, md: 7 }, maxWidth: 600 }}>
            The choice of weighing system depends on the product characteristics — shape, weight, viscosity and mechanical sensitivity. Below are the types of equipment we integrate with packaging machines.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
            {SCALE_TYPES.map((scale) => (
              <Box key={scale.name}
                sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                {/* Image */}
                <Box sx={{ bgcolor: 'var(--bg-alt)', borderBottom: `1px solid ${BORDER}`, height: 220, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Box component="img" src={scale.img} alt={scale.alt}
                    sx={{ width: '100%', height: '100%', objectFit: 'contain', p: 2 }} />
                </Box>
                {/* Content */}
                <Box sx={{ p: { xs: 3, md: 3.5 }, flex: 1, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.3 }}>
                    {scale.name}
                  </Typography>
                  <Typography sx={{ fontSize: '0.85rem', color: TEXT_DIM, lineHeight: 1.75 }}>
                    {scale.desc}
                  </Typography>
                  <Box sx={{ pt: 1, borderTop: `1px solid ${BORDER}` }}>
                    <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dim-42)', mb: 0.75 }}>
                      Application
                    </Typography>
                    <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.65 }}>
                      {scale.use}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Dosing types ── */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Dosing methods
          </Typography>
          <Typography variant="h2"
            sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: { xs: 4, md: 6 } }}>
            Types of weighing and dosing systems
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 2.5 }}>
            {DOSING_TYPES.map((d) => (
              <Box key={d.label}
                sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `3px solid ${ACCENT}`, borderRadius: '4px', p: { xs: 3, md: 3.5 } }}>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 1.5 }}>{d.label}</Typography>
                <Typography sx={{ fontSize: '0.85rem', color: TEXT_DIM, lineHeight: 1.75 }}>{d.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Applications ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Applications
          </Typography>
          <Typography variant="h2"
            sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: { xs: 5, md: 7 } }}>
            Products and industries
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
            {APPLICATIONS.map((a) => (
              <Box key={a.sector}
                sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', p: { xs: 3, md: 3.5 } }}>
                <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                  {a.sector}
                </Typography>
                {a.items.map((item) => (
                  <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25, mb: 0.75 }}>
                    <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: ACCENT, mt: '7px', flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '0.83rem', color: TEXT_DIM, lineHeight: 1.55 }}>{item}</Typography>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Line integration ── */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 10 }, alignItems: 'start' }}>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Line integration
              </Typography>
              <Typography variant="h2"
                sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: 2.5 }}>
                Weighing as part of the packaging process
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.8, mb: 2 }}>
                The multihead weigher is mounted above the packaging machine and feeds it directly with portions of the specified weight or piece count. The connection with a VFFS machine or tray sealer creates a closed cycle — weighing, dosing, packaging — with no intermediate manual operations.
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.8 }}>
                MadejPak selects and integrates weighing systems with packaging machines as part of a complete line. Synchronisation of weighing speed with machine speed is achieved through shared control or I/O signals.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { label: 'With VFFS machine',           desc: 'Weigher above the VFFS machine delivers weight-accurate portions directly into the formed pouch. Used for free-flowing, granulated and granular products.' },
                { label: 'With tray sealer',             desc: 'Dosing onto MAP trays or into containers. Weighing controls the portion weight; the machine closes and seals the package.' },
                { label: 'With bagging machine',         desc: 'Concetti systems combine weighing and bagging in one line — for bulk and free-flowing products in open-mouth or valve bags.' },
                { label: 'With transport and feeder',    desc: 'Vibrating or belt feeders deliver the product to the weigher. Output from the weigher reaches the package by gravity or via a chute.' },
              ].map((item) => (
                <Box key={item.label}
                  sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', p: { xs: 2.5, md: 3 } }}>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text)', mb: 0.75 }}>{item.label}</Typography>
                  <Typography sx={{ fontSize: '0.83rem', color: TEXT_DIM, lineHeight: 1.65 }}>{item.desc}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Partners ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Technology partners
          </Typography>
          <Typography variant="h2"
            sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: { xs: 5, md: 7 } }}>
            Weighing system manufacturers
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
            {PARTNERS.map((p) => (
              <Box key={p.name}
                sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', p: { xs: 3, md: 3.5 } }}>
                <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 2, mb: 1.5, flexWrap: 'wrap' }}>
                  <Typography sx={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.01em' }}>{p.name}</Typography>
                  <Typography sx={{ fontSize: '0.7rem', color: 'var(--dim-35)', textTransform: 'uppercase', letterSpacing: '0.1em', flexShrink: 0 }}>{p.origin}</Typography>
                </Box>
                <Typography sx={{ fontSize: '0.87rem', color: TEXT_DIM, lineHeight: 1.75, mb: 2 }}>{p.desc}</Typography>
                <Box component="a" href={p.href} target="_blank" rel="noopener noreferrer"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontSize: '0.78rem', fontWeight: 600, color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                  Manufacturer website <ArrowRight />
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: BG_ALT }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr auto' }, gap: { xs: 4, md: 8 }, alignItems: 'center' }}>
            <Box>
              <Typography variant="h2"
                sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: 2 }}>
                We will select the right weighing system for your process
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: TEXT_DIM, lineHeight: 1.8, maxWidth: 500 }}>
                The type of weigher and dosing method depend on the product characteristics, required accuracy and line speed. Describe your application — we will propose a solution tailored to your facility.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexShrink: 0 }}>
              <Box component={Link} href="/en/kontakt"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 3, py: 1.25, bgcolor: ACCENT, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', whiteSpace: 'nowrap', '&:hover': { bgcolor: '#D45509' } }}>
                Ask about implementation <ArrowRight />
              </Box>
              <Box component={Link} href="/en/maszyny/pionowe-maszyny-pakujace"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 3, py: 1.25, border: `1px solid ${BORDER}`, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: TEXT_DIM, textDecoration: 'none', whiteSpace: 'nowrap', '&:hover': { borderColor: 'var(--dim-20)', color: 'var(--dim-85)' } }}>
                VFFS machines <ArrowRight />
              </Box>
            </Box>
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
            <span>Weighing and dosing</span>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
