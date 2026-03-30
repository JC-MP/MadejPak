import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Packaging robotisation — cobots and industrial robots | MadejPak',
  description:
    'MadejPak integrates industrial robots and cobots from industry leaders into packaging lines. Pick-and-place, palletising, product handling — flexible workstation automation.',
  alternates: {
    canonical: `${SITE_URL}/en/maszyny/robotyzacja-pakowania`,
    languages: {
      'pl': `${SITE_URL}/maszyny/robotyzacja-pakowania`,
      'en': `${SITE_URL}/en/maszyny/robotyzacja-pakowania`,
      'x-default': `${SITE_URL}/maszyny/robotyzacja-pakowania`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/en/maszyny/robotyzacja-pakowania`,
    title:       'Packaging robotisation | MadejPak',
    description: 'MadejPak integrates robots and cobots from leading manufacturers into packaging lines. Pick-and-place, palletising, product handling — flexible workstation automation.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Packaging robotisation – MadejPak' }],
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

const ROBOT_TYPES = [
  {
    id: 'dobot',
    label: 'Cobots from leading manufacturers',
    scope: 'Flexible workstations, medium throughputs, working alongside people',
    desc: 'Cobots (collaborative robots) are lightweight, easy-to-program robotic arms that can work directly alongside operators without additional guarding. Ideal for multi-SKU workstations where quick changeover and flexibility matter. Programming by demonstration — no specialist robotics knowledge required.',
    applications: [
      'Pick-and-place of products and packaging',
      'Feeding and unloading from packaging machines',
      'Inspection and quality control workstations',
      'Assembly and kit consolidation',
      'Palletising of light loads (up to 16 kg)',
    ],
  },
  {
    id: 'kuka',
    label: 'Industrial robots',
    scope: 'High throughputs, heavy loads, palletising and handling',
    desc: 'Industrial robots from industry leaders handle demanding palletising and handling applications on high-throughput production lines. Payload capacity from a few kilograms to over 1,000 kg, repeatability precision up to ±0.03 mm. Systems integrate with conveyors, vacuum and mechanical grippers, machine vision systems and plant supervisory systems.',
    applications: [
      'Palletising of heavy bags and cartons',
      'Depalletising and raw material loading',
      'Product handling on large lines',
      'Working with specialised grippers',
      'Integration with pallet transport systems',
    ],
  },
];

const PROCESS_STEPS = [
  { num: '01', title: 'Workstation analysis', desc: 'We define the application parameters: product type, weight, dimensions, throughput, space requirements and operating conditions.' },
  { num: '02', title: 'Robot selection', desc: 'Based on the requirements, we select the appropriate platform — cobot or industrial robot from a leading manufacturer — together with accessories and end-of-arm tooling.' },
  { num: '03', title: 'Gripper design and software', desc: 'We design or select a gripper for the product. We program the robotic application taking into account all patterns, sequences and safety conditions.' },
  { num: '04', title: 'Line integration', desc: 'The robot is integrated with conveyors, the packaging machine and the supervisory system (PLC/SCADA). We configure I/O signals and communication protocols.' },
  { num: '05', title: 'FAT and commissioning', desc: 'We carry out factory acceptance tests (FAT) at our facility, followed by on-site installation and commissioning with full operator training.' },
  { num: '06', title: 'Support and service', desc: 'MadejPak provides warranty and post-warranty service, remote diagnostics and programme modifications for new product formats.' },
];

const SECTORS = [
  'Food (packaging, portioning, kitting)',
  'Chemical and cosmetic',
  'Pharmaceutical and OTC',
  'FMCG and consumer goods',
  'Industrial and e-commerce',
];

const ADVANTAGES = [
  { title: 'Flexibility', desc: 'Quick programme change without mechanical changeover — one robot handles multiple formats and patterns.' },
  { title: 'Safety', desc: 'Cobots can work directly alongside people. Industrial robots from industry leaders integrate with hazardous-zone safety systems.' },
  { title: 'Repeatability', desc: 'Precision repeatability up to ±0.03 mm eliminates human error and ensures consistent operation quality.' },
  { title: '24/7 throughput', desc: 'Tireless operation across three shifts with no stoppages caused by human factors.' },
  { title: 'Fast ROI', desc: 'Effective return on investment through elimination of manual labour costs and reduction of product waste.' },
  { title: 'Scalability', desc: 'The system can be expanded with additional robots and workstations as the production line grows.' },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function RobotyzacjaPage() {
  return (
    <Box component="main" sx={{ bgcolor: BG, color: 'var(--text)' }}>

      {/* ── Hero ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 8, alignItems: 'center' }}>
            <Box>
              <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 2, mb: 1, display: 'block' }}>
                Workstation automation
              </Typography>
              <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, lineHeight: 1.15, mb: 3 }}>
                Packaging robotisation
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                Industrial robots and cobots automate packaging workstations — especially where flexibility, quick changeover and high repeatability matter. MadejPak integrates solutions from robotisation leaders as components of complete packaging lines.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                {['Pick-and-place', 'Palletising', 'Depalletising', 'Handling'].map((tag) => (
                  <Box key={tag} sx={{ px: 2, py: 0.75, borderRadius: 1, border: `1px solid ${BORDER}`, fontSize: '0.8rem', color: TEXT_DIM }}>
                    {tag}
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={{ borderRadius: 2, overflow: 'hidden', border: `1px solid ${BORDER}` }}>
              <Box
                component="img"
                src="/images/other/robotyzacja-cobot.png"
                alt="Industrial robot on a packaging workstation"
                sx={{ width: '100%', height: { xs: 240, md: 380 }, objectFit: 'cover', display: 'block' }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Robot platforms ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Robotic platforms in MadejPak's offering
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 6, maxWidth: 720 }}>
            We select the robotic platform to match the application requirements — in terms of throughput, payload capacity, working environment and safety requirements.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            {ROBOT_TYPES.map((r) => (
              <Box key={r.id} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 4 }}>
                <Box sx={{ display: 'inline-block', px: 2, py: 0.5, bgcolor: `${ACCENT}22`, color: ACCENT, borderRadius: 1, fontSize: '0.75rem', fontWeight: 700, mb: 2 }}>
                  {r.scope}
                </Box>
                <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 700, mb: 2 }}>
                  {r.label}
                </Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.8, mb: 3 }}>
                  {r.desc}
                </Typography>
                <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 1.5, display: 'block', mb: 1.5 }}>
                  Applications
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                  {r.applications.map((a) => (
                    <Box component="li" key={a} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, color: TEXT_DIM, fontSize: '0.875rem' }}>
                      <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, mt: '7px' }} />
                      {a}
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Why robotisation ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Why robotisation?
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 6, maxWidth: 720 }}>
            Automating robotic workstations is not just about increased throughput — it is above all about process repeatability, independence from workforce availability and production flexibility.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
            {ADVANTAGES.map((a) => (
              <Box key={a.title} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3 }}>
                <Box sx={{ width: 36, height: 4, bgcolor: ACCENT, borderRadius: 1, mb: 2 }} />
                <Typography variant="h4" sx={{ fontSize: '1rem', fontWeight: 700, mb: 1 }}>
                  {a.title}
                </Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.7 }}>
                  {a.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Project delivery process ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            How we deliver robotisation projects
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 6, maxWidth: 720 }}>
            Every robotisation project is an individual solution — from requirements analysis through to commissioning and operator training.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
            {PROCESS_STEPS.map((s) => (
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

      {/* ── Sectors ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 6 }}>
            Sectors we work in
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {SECTORS.map((s) => (
              <Box key={s} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 1.5, px: 2.5, py: 1.25 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ fontWeight: 500 }}>{s}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Technology partners ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Our technology partners
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 5, maxWidth: 600 }}>
            We carry out robotisation in collaboration with leading manufacturers of industrial robots and cobots.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
            {[
              { name: 'Cobots', desc: 'Lightweight robotic arms from leading manufacturers for flexible workstations. Programming by demonstration, easy integration, working directly alongside the operator.', href: '/en/kontakt' },
              { name: 'Industrial robots', desc: 'Robots from world-leading manufacturers for palletising, handling and high-throughput applications. Payload capacity from a few kilograms to over 1,000 kg.', href: '/en/kontakt' },
            ].map((p) => (
              <Box key={p.name} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 4 }}>
                <Typography variant="h3" sx={{ fontSize: '1.2rem', fontWeight: 700, mb: 1.5 }}>
                  {p.name}
                </Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.7, mb: 2 }}>
                  {p.desc}
                </Typography>
                <Box
                  component="a"
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, color: ACCENT, fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', '&:hover': { gap: 1.5 } }}
                >
                  Manufacturer website <ArrowRight />
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── MadejPak's role ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Box sx={{ maxWidth: 760 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 3 }}>
              MadejPak's role in the robotisation project
            </Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.85, mb: 3 }}>
              MadejPak is not merely a robot distributor — we are an integrator. Our team assesses process requirements, selects the platform, designs or sources the gripper, develops the application software and carries out full integration with an existing or new packaging line.
            </Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.85 }}>
              We manage the full project lifecycle: from concept and quotation, through documentation and FAT, to commissioning and training. After handover of the workstation, we provide service and technical support — including remote support and programme modifications for new products.
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
                Want to automate your packaging workstation?
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>
                Describe your workstation — we will select the right robotic platform and prepare a solution concept.
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
            <span>Packaging robotisation</span>
          </Typography>
        </Container>
      </Box>

    </Box>
  );
}
