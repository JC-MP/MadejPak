import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'MadejPak Machines – own packaging, transport and automation equipment',
  description:
    'MadejPak designs and builds its own machines for product packaging and transport: destacklers, feeders, robotic grippers and custom solutions for industry.',
  alternates: {
    canonical: `${SITE_URL}/en/maszyny/madejpak`,
    languages: {
      'pl': `${SITE_URL}/maszyny/madejpak`,
      'en': `${SITE_URL}/en/maszyny/madejpak`,
      'x-default': `${SITE_URL}/maszyny/madejpak`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/en/maszyny/madejpak`,
    title:       'MadejPak Machines | MadejPak',
    description: 'MadejPak designs and builds its own machines for product packaging and transport: destacklers, feeders, robotic grippers and custom solutions for industry.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'MadejPak Machines' }],
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

// Destackler — several pallets stacked on top of each other
function IconDesztapler() {
  return (
    <Box component="svg" viewBox="0 0 96 96" fill="none" aria-hidden="true"
      sx={{ width: 80, height: 80, color: ACCENT }}>
      {/* Pallet 1 — bottom */}
      <rect x="12" y="76" width="72" height="6" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      <line x1="30" y1="76" x2="30" y2="82" stroke="currentColor" strokeWidth="2"/>
      <line x1="48" y1="76" x2="48" y2="82" stroke="currentColor" strokeWidth="2"/>
      <line x1="66" y1="76" x2="66" y2="82" stroke="currentColor" strokeWidth="2"/>
      {/* Boxes on pallet 1 */}
      <rect x="14" y="68" width="68" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
      {/* Pallet 2 — middle */}
      <rect x="12" y="52" width="72" height="6" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      <line x1="30" y1="52" x2="30" y2="58" stroke="currentColor" strokeWidth="2"/>
      <line x1="48" y1="52" x2="48" y2="58" stroke="currentColor" strokeWidth="2"/>
      <line x1="66" y1="52" x2="66" y2="58" stroke="currentColor" strokeWidth="2"/>
      {/* Boxes on pallet 2 */}
      <rect x="14" y="44" width="68" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
      {/* Pallet 3 — top */}
      <rect x="12" y="28" width="72" height="6" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      <line x1="30" y1="28" x2="30" y2="34" stroke="currentColor" strokeWidth="2"/>
      <line x1="48" y1="28" x2="48" y2="34" stroke="currentColor" strokeWidth="2"/>
      <line x1="66" y1="28" x2="66" y2="34" stroke="currentColor" strokeWidth="2"/>
      {/* Boxes on pallet 3 */}
      <rect x="14" y="20" width="68" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
      {/* Arrow down — separates one pallet */}
      <path d="M78 8 L84 16 L80 16 L80 20 L76 20 L76 16 L72 16 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </Box>
  );
}

// Lug chain feeder — belt with vertical lugs pushing product
function IconPodajnikZabierakowy() {
  return (
    <Box component="svg" viewBox="0 0 96 96" fill="none" aria-hidden="true"
      sx={{ width: 80, height: 80, color: ACCENT }}>
      {/* Belt — top and bottom line */}
      <line x1="8" y1="58" x2="88" y2="58" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="8" y1="68" x2="88" y2="68" stroke="currentColor" strokeWidth="2.5"/>
      {/* Drive wheels */}
      <circle cx="14" cy="63" r="7" stroke="currentColor" strokeWidth="2"/>
      <circle cx="82" cy="63" r="7" stroke="currentColor" strokeWidth="2"/>
      {/* Lugs — vertical elements every ~20px */}
      <line x1="28" y1="42" x2="28" y2="58" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="50" y1="42" x2="50" y2="58" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="72" y1="42" x2="72" y2="58" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Product — rectangle pushed by lug */}
      <rect x="32" y="40" width="16" height="18" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      <rect x="54" y="40" width="16" height="18" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      {/* Direction arrow */}
      <path d="M74 22 L84 30 L80 30 L80 34 L68 34 L68 30 L64 30 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </Box>
  );
}

// Belt conveyor — simple transport belt
function IconPodajnikTasmowy() {
  return (
    <Box component="svg" viewBox="0 0 96 96" fill="none" aria-hidden="true"
      sx={{ width: 80, height: 80, color: ACCENT }}>
      {/* Belt */}
      <line x1="8" y1="54" x2="88" y2="54" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="8" y1="64" x2="88" y2="64" stroke="currentColor" strokeWidth="2.5"/>
      {/* Wheels */}
      <circle cx="14" cy="59" r="7" stroke="currentColor" strokeWidth="2"/>
      <circle cx="82" cy="59" r="7" stroke="currentColor" strokeWidth="2"/>
      {/* Products on belt */}
      <rect x="24" y="40" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      <rect x="52" y="40" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      {/* Movement arrow */}
      <path d="M62 24 L72 32 L62 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <line x1="38" y1="28" x2="71" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      {/* Legs/stand */}
      <line x1="20" y1="71" x2="20" y2="82" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="76" y1="71" x2="76" y2="82" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </Box>
  );
}

// Roller conveyor — view with rollers
function IconPodajnikRolkowy() {
  return (
    <Box component="svg" viewBox="0 0 96 96" fill="none" aria-hidden="true"
      sx={{ width: 80, height: 80, color: ACCENT }}>
      {/* Side frames */}
      <line x1="6" y1="54" x2="90" y2="54" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="6" y1="64" x2="90" y2="64" stroke="currentColor" strokeWidth="2.5"/>
      {/* Rollers */}
      {[18, 32, 46, 60, 74].map((x) => (
        <React.Fragment key={x}>
          <circle cx={x} cy={59} r={5} stroke="currentColor" strokeWidth="2"/>
          <line x1={x} y1={54} x2={x} y2={64} stroke="currentColor" strokeWidth="1.5"/>
        </React.Fragment>
      ))}
      {/* Carton on rollers */}
      <rect x="30" y="38" width="36" height="16" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      {/* Legs */}
      <line x1="16" y1="64" x2="16" y2="78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="80" y1="64" x2="80" y2="78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </Box>
  );
}

// Special workstation — gears and working module
function IconFelcarka() {
  return (
    <Box component="svg" viewBox="0 0 96 96" fill="none" aria-hidden="true"
      sx={{ width: 80, height: 80, color: ACCENT }}>
      {/* Large gear */}
      <circle cx="38" cy="52" r="20" stroke="currentColor" strokeWidth="2"/>
      <circle cx="38" cy="52" r="10" stroke="currentColor" strokeWidth="1.5"/>
      {[0,45,90,135,180,225,270,315].map((a) => {
        const rad = (a * Math.PI) / 180;
        const x1 = 38 + 20 * Math.cos(rad);
        const y1 = 52 + 20 * Math.sin(rad);
        const x2 = 38 + 26 * Math.cos(rad);
        const y2 = 52 + 26 * Math.sin(rad);
        return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>;
      })}
      {/* Small gear */}
      <circle cx="66" cy="34" r="12" stroke="currentColor" strokeWidth="2"/>
      <circle cx="66" cy="34" r="6" stroke="currentColor" strokeWidth="1.5"/>
      {[0,60,120,180,240,300].map((a) => {
        const rad = (a * Math.PI) / 180;
        const x1 = 66 + 12 * Math.cos(rad);
        const y1 = 34 + 12 * Math.sin(rad);
        const x2 = 66 + 17 * Math.cos(rad);
        const y2 = 34 + 17 * Math.sin(rad);
        return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>;
      })}
      {/* Work table */}
      <line x1="8" y1="78" x2="88" y2="78" stroke="currentColor" strokeWidth="2"/>
      <line x1="14" y1="78" x2="14" y2="88" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="82" y1="78" x2="82" y2="88" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </Box>
  );
}

// Counting and packing breadsticks — module with counter and packaging
function IconLiczeniePaluszki() {
  return (
    <Box component="svg" viewBox="0 0 96 96" fill="none" aria-hidden="true"
      sx={{ width: 80, height: 80, color: ACCENT }}>
      {/* Breadstick hopper */}
      <rect x="10" y="10" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
      {/* Breadsticks in hopper */}
      {[18, 24, 30, 36].map((x) => (
        <line key={x} x1={x} y1={14} x2={x} y2={34} stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      ))}
      {/* Counter / sensor */}
      <circle cx="36" cy="50" r="8" stroke="currentColor" strokeWidth="2"/>
      <path d="M33 50 L36 47 L39 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Output packaging */}
      <rect x="54" y="34" width="32" height="42" rx="2" stroke="currentColor" strokeWidth="2"/>
      <line x1="54" y1="50" x2="86" y2="50" stroke="currentColor" strokeWidth="1.5"/>
      {/* Breadsticks in packaging */}
      {[62, 68, 74, 80].map((x) => (
        <line key={x} x1={x} y1={54} x2={x} y2={72} stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      ))}
      {/* Arrow from counter to packaging */}
      <path d="M44 50 L52 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M49 46 L53 50 L49 54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Box>
  );
}

// Robotic gripper — arm with gripper
function IconChwytak() {
  return (
    <Box component="svg" viewBox="0 0 96 96" fill="none" aria-hidden="true"
      sx={{ width: 80, height: 80, color: ACCENT }}>
      {/* Robot base */}
      <rect x="30" y="78" width="36" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
      {/* Body */}
      <rect x="38" y="60" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
      {/* Arm 1 */}
      <line x1="48" y1="60" x2="30" y2="38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Joint */}
      <circle cx="30" cy="38" r="4" stroke="currentColor" strokeWidth="2"/>
      {/* Arm 2 */}
      <line x1="30" y1="34" x2="52" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      {/* End joint */}
      <circle cx="52" cy="18" r="3" stroke="currentColor" strokeWidth="2"/>
      {/* Gripper — two fingers */}
      <path d="M52 15 L44 8 L44 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M52 15 L60 8 L60 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Held product */}
      <rect x="44" y="0" width="16" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    </Box>
  );
}

const MACHINE_ICONS: Record<string, React.ReactNode> = {
  'desztaplery':           <IconDesztapler />,
  'podajniki-zabierakowe': <IconPodajnikZabierakowy />,
  'podajniki-tasmowe':     <IconPodajnikTasmowy />,
  'podajniki-rolkowe':     <IconPodajnikRolkowy />,
  'felcarka':              <IconFelcarka />,
  'liczenie-paluszki':     <IconLiczeniePaluszki />,
  'chwytaki':              <IconChwytak />,
};

// ─── Data ────────────────────────────────────────────────────────────────────

const MACHINES = [
  {
    id: 'desztaplery',
    group: 'Feeding & separation systems',
    name: 'Destacklers',
    desc: 'Devices for automatic separation and feeding of parts, packaging or elements stacked in a pile. They provide stable and repeatable product delivery to the next process stage — without operator involvement.',
    applications: [
      'Feeding of individual packaging units',
      'Separation of elements from a stack',
      'Product preparation for transport or packaging',
    ],
    benefits: [
      'Automation of manual separation',
      'Stable product flow without stoppages',
      'Easy integration with the line and automation',
    ],
    imagePlaceholder: true,
  },
  {
    id: 'podajniki-zabierakowe',
    group: 'Feeding & separation systems',
    name: 'Lug chain feeders',
    desc: 'Feeders for controlled transport of products requiring positioning, timing or synchronisation with the next process stage. They guide products in an organised, repeatable manner.',
    applications: [
      'Transport of individual products with maintained gaps',
      'Process timing and machine synchronisation',
      'Feeding to packaging machines, robots or collection systems',
    ],
    benefits: [
      'Repeatable product positioning',
      'Control over line flow and rhythm',
      'Geometry adaptable to the product',
    ],
    imagePlaceholder: true,
  },
  {
    id: 'podajniki-tasmowe',
    group: 'Product transport systems',
    name: 'Belt conveyors',
    desc: 'Universal transport systems for moving products between production and packaging stations. Built in various configurations adapted to product type, throughput and line layout.',
    applications: [
      'Inter-operational transport within the line',
      'Product take-off from machine exit',
      'Feeding subsequent stages and workstations',
    ],
    benefits: [
      'Flexible route and geometry configuration',
      'Simple integration with existing line',
      'Built to the specific factory layout',
    ],
    imagePlaceholder: true,
  },
  {
    id: 'podajniki-rolkowe',
    group: 'Product transport systems',
    name: 'Roller conveyors',
    desc: 'Solutions for transporting collective packs, cartons, trays and other products requiring stable movement. Effective on straight sections, for buffering and transferring between stations.',
    applications: [
      'Transport of cartons and collective packs',
      'Buffering products between stations',
      'Integration with packaging and palletising lines',
    ],
    benefits: [
      'Durable construction for heavier products',
      'Possibility to add automation components',
      'Powered or gravity operation',
    ],
    imagePlaceholder: true,
  },
  {
    id: 'felcarka',
    group: 'Special machines',
    name: 'Forming & special workstations',
    desc: 'Devices for performing specific packaging forming or closing operations, designed to process requirements. Used where repeatability, precision and integration with further production stages are required.',
    applications: [
      'Technological operations related to packaging forming',
      'Closing or preparing elements for the next process',
      'Special workstations in packaging lines',
    ],
    benefits: [
      'Adapted to specific product and process',
      'Repeatability of operations and reduction of rejects',
      'Works as standalone module or line element',
    ],
    imagePlaceholder: true,
  },
  {
    id: 'liczenie-paluszki',
    group: 'Special machines',
    name: 'Breadstick counting & packaging machine',
    desc: 'Specialised solution designed for automatic counting and packaging of breadsticks in a defined quantity. Combines quantitative dosing, control and product handover to the next packaging stage.',
    applications: [
      'Food products requiring a defined number of pieces per pack',
      'Processes requiring quantitative dosing control',
      'Lines focused on repeatability and reduction of manual work',
    ],
    benefits: [
      'Repeatable and precise product counting',
      'Automation of quantitative packaging process',
      'Reduction of errors and production losses',
    ],
    imagePlaceholder: true,
  },
  {
    id: 'chwytaki',
    group: 'Robotic grippers',
    name: 'Custom grippers for robots',
    desc: 'We design and manufacture grippers adapted to a specific product, process and robot. They are created with stable picking, placing, grouping or orienting of products in mind for automated pick-and-place and palletising applications.',
    applications: [
      'Pick-and-place and robotic packaging',
      'Palletising and depalletising',
      'Handling products with unusual geometry',
      'Multi-product and flexible workstations',
    ],
    benefits: [
      'Adapted to the specific part and process',
      'Improved reliability and repeatability of application',
      'Capable of working in complex custom setups',
    ],
    imagePlaceholder: true,
  },
];

// Group machines by category
const GROUPS = Array.from(new Set(MACHINES.map((m) => m.group)));

const OWN_ITEMS = [
  'Belt and roller conveyors built to line dimensions',
  'Destacklers and lug chain feeders',
  'Robotic grippers adapted to the product',
  'Special machines and non-standard workstations',
  'Upgrades and expansions of existing installations',
  'Forming machines and technological modules',
];
const PARTNER_ITEMS = [
  'Flowpack and VFFS packaging machines (GSP, Concetti)',
  'Multihead weighers and dosing systems',
  'Pallet wrappers and palletisers',
  'Industrial robots and cobots from industry leaders',
  'Vision systems and control automation',
  'Bagging machines and BigBag stations',
];

const ADVANTAGES = [
  { title: 'Designed for the process', desc: 'Devices are created based on real production requirements — not ready-made templates. Every machine is adapted to the product, throughput and line layout.' },
  { title: 'Integration experience', desc: 'Every machine can be prepared as part of a larger technological system — synchronised with robots, conveyors and automation systems.' },
  { title: 'Custom solutions', desc: 'We carry out projects for non-standard products, geometries and process requirements — from grippers to complete special workstations.' },
  { title: 'Service & installation development', desc: 'We offer warranty and post-warranty service, modifications for new products and further expansion of deployed solutions.' },
];

const REALIZATIONS = [
  { label: 'Destackler for feeding packaging units', scope: 'Automation of individual packaging separation in a packaging line' },
  { label: 'Lug chain feeder', scope: 'Timing and transport of products to a packaging machine' },
  { label: 'Robotic gripper', scope: 'Pick-and-place application for a cobot' },
  { label: 'Counting and packaging workstation', scope: 'Automatic counting and packaging of breadsticks' },
  { label: 'Transport system in collective line', scope: 'Integration of conveyors between packaging machines and palletiser' },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function MaszynyMadejPakPageEN() {
  return (
    <Box component="main" sx={{ bgcolor: BG, color: 'var(--text)' }}>

      {/* ── Hero ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ maxWidth: 720 }}>
            <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 2, mb: 1, display: 'block' }}>
              Own production
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, lineHeight: 1.15, mb: 3 }}>
              MadejPak Machines
            </Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, fontSize: '1.1rem', lineHeight: 1.8, mb: 2 }}>
              A machine designed for your product and line layout — not an adaptation of a ready-made template.
            </Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.8, mb: 5 }}>
              We build devices where every detail was a decision: from dimensions to drive selection and the interface to line control. No compromises arising from catalogue limitations — own construction means full adaptation to the process.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              <Box
                component={Link}
                href="/en/kontakt"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: ACCENT, color: '#fff', px: 3.5, py: 1.5, borderRadius: 1.5, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { bgcolor: '#c9520a' } }}
              >
                Ask about a machine <ArrowRight />
              </Box>
              <Box
                component={Link}
                href="/en/rozwiazania/projekty-custom"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, border: `1px solid ${BORDER}`, color: 'var(--text)', px: 3.5, py: 1.5, borderRadius: 1.5, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}
              >
                Custom projects
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Intro ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 10 }, alignItems: 'center' }}>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 3 }}>
                Devices built for real production processes
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.85, mb: 3 }}>
                MadejPak machines are created with specific production and packaging applications in mind. They include product transport devices, feeding systems, packaging solutions, actuator modules for robots and special constructions designed to individual customer requirements.
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.85 }}>
                Our solutions can work as standalone workstations or as part of a larger, integrated technological line.
              </Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              {[
                { num: '7+', label: 'types of own machines' },
                { num: '100%', label: 'projects realised in Poland' },
                { num: '25+', label: 'years in the packaging machinery market' },
                { num: 'FAT', label: 'technical acceptance before every delivery' },
              ].map((s) => (
                <Box key={s.label} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3 }}>
                  <Typography sx={{ fontSize: '1.75rem', fontWeight: 800, color: ACCENT, lineHeight: 1, mb: 0.5 }}>
                    {s.num}
                  </Typography>
                  <Typography variant="body2" sx={{ color: TEXT_DIM, fontSize: '0.8rem', lineHeight: 1.4 }}>
                    {s.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Machines — card grid ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Main machine & equipment groups
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 8, maxWidth: 680 }}>
            We offer both devices with repeatable applications and special machines designed from scratch for a specific product and process.
          </Typography>

          {GROUPS.map((group) => (
            <Box key={group} sx={{ mb: 8 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                <Box sx={{ width: 4, height: 24, bgcolor: ACCENT, borderRadius: 1, flexShrink: 0 }} />
                <Typography variant="h3" sx={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: TEXT_DIM }}>
                  {group}
                </Typography>
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3 }}>
                {MACHINES.filter((m) => m.group === group).map((m) => (
                  <Box key={m.id} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    {/* Icon */}
                    <Box sx={{ height: 180, bgcolor: BG_ALT, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: `1px solid ${BORDER}` }}>
                      {MACHINE_ICONS[m.id] ?? null}
                    </Box>
                    <Box sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h3" sx={{ fontSize: '1.2rem', fontWeight: 700, mb: 2 }}>
                        {m.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.75, mb: 3 }}>
                        {m.desc}
                      </Typography>
                      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3, mt: 'auto' }}>
                        <Box>
                          <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 1.5, display: 'block', mb: 1.5, fontSize: '0.7rem' }}>
                            Applications
                          </Typography>
                          <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                            {m.applications.map((a) => (
                              <Box component="li" key={a} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, color: TEXT_DIM, fontSize: '0.8rem' }}>
                                <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, mt: '5px' }} />
                                {a}
                              </Box>
                            ))}
                          </Box>
                        </Box>
                        <Box>
                          <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 1.5, display: 'block', mb: 1.5, fontSize: '0.7rem' }}>
                            Benefits
                          </Typography>
                          <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                            {m.benefits.map((b) => (
                              <Box component="li" key={b} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, color: TEXT_DIM, fontSize: '0.8rem' }}>
                                <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, mt: '5px' }} />
                                {b}
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Container>
      </Box>

      {/* ── What we do ourselves, what with partners ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ mb: 6, maxWidth: 680 }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
              Scope of competence
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: 2 }}>
              What we manufacture ourselves and what we integrate with partners
            </Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.8 }}>
              Regardless of the source — we design, commission and service everything. One contact, one responsibility.
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `3px solid ${ACCENT}`, borderRadius: 2, p: 4 }}>
              <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, color: ACCENT, letterSpacing: '0.08em', textTransform: 'uppercase', mb: 2 }}>
                Own production
              </Typography>
              <Typography variant="body2" sx={{ color: TEXT_DIM, mb: 3, lineHeight: 1.75 }}>
                We design and manufacture in our own facility — full control over geometry, materials and integration with the line.
              </Typography>
              <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1 }}>
                {OWN_ITEMS.map((item) => (
                  <Box component="li" key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, color: TEXT_DIM, fontSize: '0.875rem' }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, mt: '5px' }} />
                    {item}
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `3px solid var(--dim-20)`, borderRadius: 2, p: 4 }}>
              <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--dim-55)', letterSpacing: '0.08em', textTransform: 'uppercase', mb: 2 }}>
                Integrated from partners
              </Typography>
              <Typography variant="body2" sx={{ color: TEXT_DIM, mb: 3, lineHeight: 1.75 }}>
                We select, supply and integrate machines from trusted partners — as elements of a complete system, not separate purchases.
              </Typography>
              <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1 }}>
                {PARTNER_ITEMS.map((item) => (
                  <Box component="li" key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, color: TEXT_DIM, fontSize: '0.875rem' }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'var(--dim-30)', flexShrink: 0, mt: '5px' }} />
                    {item}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: 3, p: 3, bgcolor: `color-mix(in srgb, ${ACCENT} 5%, var(--bg))`, border: `1px solid color-mix(in srgb, ${ACCENT} 20%, transparent)`, borderRadius: 1.5 }}>
            <Typography sx={{ fontSize: '0.88rem', color: 'var(--dim-72)', lineHeight: 1.65 }}>
              In both cases we are responsible for commissioning, integration with the line and service — regardless of the machine manufacturer.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Integration with lines ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 8, alignItems: 'center' }}>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 3 }}>
                Machines as part of larger packaging lines
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.85, mb: 3 }}>
                MadejPak devices enter production lines as synchronised elements — not random add-ons. We design them with integration in mind: entry, exit, signals, speed — everything adapted to the technological flow.
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.85, mb: 4 }}>
                Thanks to integration experience we are able to adapt a machine not only to the product, but also to the entire technological process — connecting our devices with partner machines and the customer&apos;s existing automation.
              </Typography>
              <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                {['Mechanical and electrical integration with existing line', 'Adaptation to machines from different manufacturers', 'Synchronisation with robots and automation systems', 'Upgrades and modernisation of existing installations'].map((item) => (
                  <Box component="li" key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, color: TEXT_DIM, fontSize: '0.9rem' }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, mt: '6px' }} />
                    {item}
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box
                component={Link}
                href="/en/rozwiazania/integracja-linii-pakujacych"
                sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3, textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2, color: 'var(--text)', '&:hover': { borderColor: ACCENT } }}
              >
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>Packaging line integration</Typography>
                  <Typography variant="body2" sx={{ color: TEXT_DIM, fontSize: '0.8rem' }}>How we connect machines from different manufacturers into a complete system</Typography>
                </Box>
                <Box sx={{ color: ACCENT, flexShrink: 0 }}><ArrowRight /></Box>
              </Box>
              <Box
                component={Link}
                href="/en/maszyny/transport-i-koniec-linii"
                sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3, textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2, color: 'var(--text)', '&:hover': { borderColor: ACCENT } }}
              >
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>Conveyors & end-of-line</Typography>
                  <Typography variant="body2" sx={{ color: TEXT_DIM, fontSize: '0.8rem' }}>Conveyor systems and product flow within the line</Typography>
                </Box>
                <Box sx={{ color: ACCENT, flexShrink: 0 }}><ArrowRight /></Box>
              </Box>
              <Box
                component={Link}
                href="/en/maszyny/robotyzacja-pakowania"
                sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3, textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2, color: 'var(--text)', '&:hover': { borderColor: ACCENT } }}
              >
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>Packaging robotics</Typography>
                  <Typography variant="body2" sx={{ color: TEXT_DIM, fontSize: '0.8rem' }}>Cobots and industrial robots in automated lines</Typography>
                </Box>
                <Box sx={{ color: ACCENT, flexShrink: 0 }}><ArrowRight /></Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Advantages ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Why MadejPak
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 6, maxWidth: 640 }}>
            Own production means the ability to fully adapt the device to the process — without compromises arising from catalogue limitations.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
            {ADVANTAGES.map((a) => (
              <Box key={a.title} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 4 }}>
                <Box sx={{ width: 36, height: 4, bgcolor: ACCENT, borderRadius: 1, mb: 2.5 }} />
                <Typography variant="h4" sx={{ fontSize: '1.05rem', fontWeight: 700, mb: 1.5 }}>
                  {a.title}
                </Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>
                  {a.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Realisations ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 3, mb: 6 }}>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 1 }}>
                Selected realisations
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, maxWidth: 520 }}>
                Selected projects carried out by MadejPak — from individual workstations to integrated systems.
              </Typography>
            </Box>
            <Box
              component={Link}
              href="/en/realizacje"
              sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, color: ACCENT, fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', flexShrink: 0 }}
            >
              All realisations <ArrowRight />
            </Box>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 2.5 }}>
            {REALIZATIONS.map((r) => (
              <Box key={r.label} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 1.5, p: 3 }}>
                <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.75, fontSize: '0.95rem', color: 'var(--text)' }}>
                  {r.label}
                </Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.65, fontSize: '0.82rem' }}>
                  {r.scope}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Typography sx={{ fontSize: '0.88rem', color: TEXT_DIM }}>
              Detailed realisations available in the case studies section.
            </Typography>
            <Box component={Link} href="/en/realizacje"
              sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, color: ACCENT, fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', '&:hover': { color: '#c9520a' } }}>
              Go to realisations <ArrowRight />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box sx={{ bgcolor: BG }}>
        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 3, p: { xs: 4, md: 6 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, justifyContent: 'space-between', gap: 4 }}>
            <Box sx={{ maxWidth: 540 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, mb: 1.5 }}>
                Looking for a specific machine or special solution?
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>
                We prepare both individual devices and complete solutions integrated with the production line. Describe the process, product and requirements.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexShrink: 0 }}>
              <Box
                component={Link}
                href="/en/kontakt"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: ACCENT, color: '#fff', px: 4, py: 1.75, borderRadius: 1.5, fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', '&:hover': { bgcolor: '#c9520a' } }}
              >
                Send an enquiry <ArrowRight />
              </Box>
              <Box
                component={Link}
                href="/en/rozwiazania/projekty-custom"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, border: `1px solid ${BORDER}`, color: 'var(--text)', px: 4, py: 1.75, borderRadius: 1.5, fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}
              >
                Consult a custom project
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
            <span>MadejPak Machines</span>
          </Typography>
        </Container>
      </Box>

    </Box>
  );
}
