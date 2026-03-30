import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Conveying and end-of-line — conveyors and integration | MadejPak',
  description:
    'MadejPak designs and integrates internal transport systems, conveyors and end-of-line solutions for packaging lines. From packaging machine exit to a wrapped pallet ready for dispatch.',
  alternates: {
    canonical: `${SITE_URL}/en/maszyny/transport-i-koniec-linii`,
    languages: {
      'pl': `${SITE_URL}/maszyny/transport-i-koniec-linii`,
      'en': `${SITE_URL}/en/maszyny/transport-i-koniec-linii`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/en/maszyny/transport-i-koniec-linii`,
    title:       'Conveying and end-of-line | MadejPak',
    description: 'MadejPak designs and integrates internal transport systems, conveyors and end-of-line solutions for packaging lines. From packaging machine exit to a wrapped pallet ready for dispatch.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Conveying and end-of-line – MadejPak' }],
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
    <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden="true"
      sx={{ width: 13, height: 13, flexShrink: 0, transition: 'transform 0.15s ease' }}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const CONVEYOR_TYPES = [
  {
    id: 'tasmowe',
    label: 'Belt conveyors',
    desc: 'The basic element of every packaging line. They transport primary packages, multipacks and cartons horizontally or at a slight incline. Available in standard and hygienic versions (food and pharmaceutical sectors).',
    usecases: ['Transfer between machines', 'Buffers and accumulation sections', 'Feeding to inspection and labelling', 'Product take-off from VFFS and flow-wrap machines'],
  },
  {
    id: 'rolkowe',
    label: 'Roller conveyors',
    desc: 'Designed for transporting heavier secondary packaging, cartons and palletised units. Available in powered or gravity versions. Ideal at the end of line, at palletisers and in picking zones.',
    usecases: ['Transport of cartons and crates', 'Take-off from palletiser', 'Picking and kitting zones', 'Sorting and diverter systems'],
  },
  {
    id: 'pionowe',
    label: 'Lifts and vertical conveyors',
    desc: 'Allow changes in transport level between floors or line levels. They solve space constraints in existing production halls without rebuilding the entire layout.',
    usecases: ['Level change between machines', 'Adaptation to existing halls', 'Integration with mezzanines and platforms', 'Industrial and food production lines'],
  },
  {
    id: 'specjalne',
    label: 'Special systems and line merging',
    desc: 'Diverters, mergers, rejecters and package grouping systems — allow merging several packaging lines into one stream or splitting products onto different transport routes.',
    usecases: ['Merging several lines into one transport stream', 'Sorting products by criteria', 'Grouping before gluing and palletising', 'Non-conforming product rejection systems'],
  },
];

const FLOW_STEPS = [
  { num: '01', title: 'Exit from packaging machine', desc: 'The product leaves the packaging machine (VFFS, flow-wrap, bagging) and reaches the first section of the take-off conveyor.' },
  { num: '02', title: 'Inspection and labelling', desc: 'Optionally: checkweighing, metal detection, vision inspection, labeller or barcode printer.' },
  { num: '03', title: 'Grouping and accumulation', desc: 'Products are grouped, oriented and accumulated before the next stage — secondary packaging, carton loading or direct palletising.' },
  { num: '04', title: 'Secondary packaging (option)', desc: 'Cartoning, shrink wrapping or tray sealing creates secondary packaging from individual products.' },
  { num: '05', title: 'Transport to palletiser', desc: 'Secondary packages or primary units are transported to the palletiser — robotic or layer-type.' },
  { num: '06', title: 'Wrapping and dispatch', desc: 'The finished pallet goes to the stretch film wrapper and then to the warehouse or loading area.' },
];

const INTEGRATION_POINTS = [
  { label: 'Packaging machines', desc: 'VFFS, flow-wrap, bagging, cartoner — each machine type requires an appropriately configured product take-off.' },
  { label: 'Checkweighing', desc: 'In-line checkweighers verify the weight of every package and automatically reject non-conforming products.' },
  { label: 'Labelling systems', desc: 'Labellers and printers integrate with the conveyor and can be fed with data from ERP or WMS systems.' },
  { label: 'Palletisers', desc: 'The infeed conveyor must be synchronised with the palletiser cycle and buffer speed differences.' },
  { label: 'Pallet wrappers', desc: 'After palletising, the pallet passes directly on a pallet conveyor to the wrapper — without a forklift.' },
  { label: 'Supervisory systems', desc: 'The entire transport can be controlled and monitored by PLC, SCADA or a production management system (MES/ERP).' },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function TransportEnPage() {
  return (
    <Box component="main" sx={{ bgcolor: BG, color: 'var(--text)' }}>

      {/* ── Hero ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 8, alignItems: 'center' }}>
            <Box>
              <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 2, mb: 1, display: 'block' }}>
                Flow integration
              </Typography>
              <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, lineHeight: 1.15, mb: 3 }}>
                Conveying and end-of-line
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                Efficient internal transport and continuous flow between machines are the foundation of a high-performance packaging line. MadejPak designs and integrates conveyor systems, transfer and package handling — connecting equipment from different partners into a single coherent flow.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                {['Conveyors', 'Buffering', 'Line merging', 'Integration'].map((tag) => (
                  <Box key={tag} sx={{ px: 2, py: 0.75, borderRadius: 1, border: `1px solid ${BORDER}`, fontSize: '0.8rem', color: TEXT_DIM }}>
                    {tag}
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={{ borderRadius: 2, overflow: 'hidden', border: `1px solid ${BORDER}` }}>
              <Box
                component="img"
                src="/images/machines/wrapping.jpg"
                alt="Conveying and end-of-line systems"
                sx={{ width: '100%', height: { xs: 240, md: 380 }, objectFit: 'cover', display: 'block' }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Conveyor types ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Transport systems in the line
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 6, maxWidth: 720 }}>
            We select the conveyor type to match product characteristics, line speed and environmental conditions — from lightweight pouches to heavy cartons and palletised units.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            {CONVEYOR_TYPES.map((c) => (
              <Box key={c.id} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 4 }}>
                <Typography variant="h3" sx={{ fontSize: '1.2rem', fontWeight: 700, mb: 2 }}>
                  {c.label}
                </Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.75, mb: 3 }}>
                  {c.desc}
                </Typography>
                <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 1.5, display: 'block', mb: 1.5 }}>
                  Applications
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                  {c.usecases.map((u) => (
                    <Box component="li" key={u} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, color: TEXT_DIM, fontSize: '0.875rem' }}>
                      <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, mt: '7px' }} />
                      {u}
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Product flow ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Complete product flow in the line
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 6, maxWidth: 720 }}>
            Internal transport connects every stage of the packaging line — from primary packaging to loading of the finished pallet. MadejPak designs and integrates this entire flow.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
            {FLOW_STEPS.map((s) => (
              <Box key={s.num} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3 }}>
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: ACCENT, lineHeight: 1, mb: 1.5 }}>
                  {s.num}
                </Typography>
                <Typography variant="h4" sx={{ fontSize: '1rem', fontWeight: 700, mb: 1 }}>
                  {s.title}
                </Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.7 }}>
                  {s.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Integration points ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Integration points with line equipment
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 6, maxWidth: 720 }}>
            The transport system must be synchronised with the operating rhythm of all machines. We design integration with every element of the line — regardless of manufacturer.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
            {INTEGRATION_POINTS.map((p) => (
              <Box key={p.label} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3 }}>
                <Box sx={{ width: 36, height: 4, bgcolor: ACCENT, borderRadius: 1, mb: 2 }} />
                <Typography variant="h4" sx={{ fontSize: '1rem', fontWeight: 700, mb: 1 }}>
                  {p.label}
                </Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.7 }}>
                  {p.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── MadejPak role ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Box sx={{ maxWidth: 760 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 3 }}>
              MadejPak as transport system integrator
            </Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.85, mb: 3 }}>
              Internal transport systems are an area where MadejPak carries out its own engineering projects — selecting and configuring equipment from different manufacturers into a coherent system. The project covers product flow analysis, component selection, documentation preparation and integration with line equipment.
            </Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.85 }}>
              We work with suppliers of conveyors and package handling systems adapted to the requirements of a specific application — whether in the food, chemical or pharmaceutical industry. We provide service support and technical assistance after line commissioning.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box sx={{ bgcolor: BG }}>
        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 3, p: { xs: 4, md: 6 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, justifyContent: 'space-between', gap: 4 }}>
            <Box sx={{ maxWidth: 540 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, mb: 1.5 }}>
                Do you need a transport project or end-of-line integration?
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>
                Describe your hall layout and machines — we will prepare a transport system concept tailored to your needs.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexShrink: 0 }}>
              <Box
                component={Link}
                href="/en/kontakt"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: ACCENT, color: '#fff', px: 4, py: 1.75, borderRadius: 1.5, fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', '&:hover': { bgcolor: '#c9520a' } }}
              >
                Ask about a project <ArrowRight />
              </Box>
              <Box
                component={Link}
                href="/en/maszyny/partnerzy"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, border: `1px solid ${BORDER}`, color: 'var(--text)', px: 4, py: 1.75, borderRadius: 1.5, fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}
              >
                Back to partner machines
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
            <span>Conveying and end-of-line</span>
          </Typography>
        </Container>
      </Box>

    </Box>
  );
}
