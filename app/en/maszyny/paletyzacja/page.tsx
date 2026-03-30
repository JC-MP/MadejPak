import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Palletising — robotic, layer and integrated systems | MadejPak',
  description:
    'MadejPak selects and integrates palletising systems for packaging lines — robotic, layer and cobot. Partners: KUKA, Yaskawa, Sidel, BEUMER, OCME, TopTier, Concetti.',
  alternates: {
    canonical: `${SITE_URL}/en/maszyny/paletyzacja`,
    languages: {
      'pl': `${SITE_URL}/maszyny/paletyzacja`,
      'en': `${SITE_URL}/en/maszyny/paletyzacja`,
      'x-default': `${SITE_URL}/maszyny/paletyzacja`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/en/maszyny/paletyzacja`,
    title:       'Robotic and layer palletising | MadejPak',
    description: 'MadejPak selects and integrates palletising systems for packaging lines — robotic, layer and cobot. Partners: KUKA, Yaskawa, Sidel, BEUMER, OCME, TopTier, Concetti.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Palletising – MadejPak' }],
  },
};

// ─── Design tokens ──────────────────────────────────────────────────────────
const BG       = 'var(--bg)';
const BG_CARD  = 'var(--bg-card)';
const BG_ALT   = 'var(--bg-alt)';
const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
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

const PROCESS_STEPS = [
  { num: '01', title: 'Product pick-up',            desc: 'The product leaves the packaging machine and is conveyed to the infeed transport leading to the palletiser.' },
  { num: '02', title: 'Buffering',                  desc: 'The buffer section evens out speed differences between the packaging machine and the palletiser and prevents line stoppages.' },
  { num: '03', title: 'Layer forming',               desc: 'Products are grouped and oriented into an arrangement matching the pallet pattern — in-line or at 90°.' },
  { num: '04', title: 'Placing on the pallet',       desc: 'A robot or layer head places products layer by layer according to the programmed palletising pattern.' },
  { num: '05', title: 'Pallet and slip-sheet feeding', desc: 'An automatic feeder supplies empty pallets and — where required — cardboard or film slip-sheets between layers.' },
  { num: '06', title: 'Securing and transport',     desc: 'The finished pallet goes to a stretch-film wrapper or thermal hood stretch wrapper, then is transferred for further transport or to the warehouse.' },
];

const SOLUTION_TYPES = [
  {
    id: 'robotyczna',
    label: 'Robotic palletising',
    scope: 'Multiple formats, variable product mix, applications requiring flexibility',
    desc: 'An industrial robot with the appropriate gripper handles multiple product formats without mechanical changeover. Pallet patterns are changed by reprogramming. Robotic systems enable integration with pallet transport, pallet magazines, stretch wrappers and the plant supervisory system.',
    products: [
      'Cartons and cardboard packaging',
      'Bags with bulk products',
      'Shrink-wrapped bottles and cans',
      'Crates and containers',
      'Trays and multipack packaging',
    ],
    partners: ['KUKA', 'Yaskawa Motoman PL series', 'ABB', 'Sidel Pal Robo-Kombi / Pal Vite / RoboAccess', 'BEUMER robotpac®'],
  },
  {
    id: 'warstwowa',
    label: 'Layer / conventional palletising',
    scope: 'Medium and high throughputs, repeating formats, stable product stream',
    desc: 'Products are grouped into complete layers that are then placed onto the pallet as a whole. Layer forming can take place in-line with the conveyor or at 90°. Layer systems are the right choice where repeatability and high throughput are paramount.',
    products: [
      'Cartons with food and FMCG products',
      'Retail-ready packaging in stable formats',
      'Containers and crates',
    ],
    partners: ['OCME (conventional and single-column models)', 'Sidel PalPack 4000 / PalKombi', 'Sidel PalLinear (high speed, top-load)', 'BEUMER paletpac®', 'TopTier'],
  },
  {
    id: 'worki',
    label: 'Bag and bulk-product palletising',
    scope: 'Products packed in bags — chemicals, construction, fertilisers, pet food, bulk raw materials',
    desc: 'Bulk products packed in bags require a different palletising logic than cartons or shrink packs. Key requirements are stable bag gripping, controlled layer placement and building a stable stack on the pallet. BEUMER paletpac® achieves throughputs of up to 6,000 bags per hour.',
    products: [
      'Bags of cement, mortar and aggregate',
      'Bags of fertilisers and agrochemical products',
      'Bags of pet food',
      'Bags of industrial chemicals and cleaning agents',
      'Bags of granulated bulk raw materials',
    ],
    partners: ['BEUMER paletpac® (up to 6,000 bags/h)', 'BEUMER robotpac® (robotic version)', 'Concetti (systems for bulk solid products)', 'TopTier (bag palletising)'],
  },
  {
    id: 'coboty',
    label: 'Compact palletising cells / cobots',
    scope: 'Smaller plants, limited space, lower volumes, first step of automation',
    desc: 'For plants with smaller production scales or limited available floor space, compact palletising cells with cobots or lighter industrial robots are available. In certain applications cobots can operate without conventional fixed guarding, reducing space requirements and shortening implementation time. Sidel CoboAccess_Pal generates a tailored cell layout based on 10 production parameters.',
    products: [
      'Cartons and packaging for lower volumes',
      'Applications requiring frequent format changes',
      'Workstations on short-run lines',
    ],
    partners: ['Sidel CoboAccess_Pal', 'KUKA LBR iisy'],
  },
];

const SECTORS = [
  {
    name: 'Food',
    items: ['Cartons with food products', 'Shrink-wrapped bottles and jars', 'Trays and multipack packaging', 'Bags with bulk products'],
  },
  {
    name: 'Beverages',
    items: ['PET and glass bottles', 'Cans and cartons', 'Shrink packs and multipacks'],
  },
  {
    name: 'Chemical',
    items: ['Bags of industrial chemicals', 'Jerry cans and containers', 'Household chemical FMCG packaging'],
  },
  {
    name: 'Building materials',
    items: ['Bags of cement and mortar', 'Bags of sand and aggregates', 'Building granules and pellets'],
  },
  {
    name: 'Pet food & fertilisers',
    items: ['Bags of pet food', 'Bags of fertilisers and granules', 'Agrochemical products'],
  },
  {
    name: 'FMCG / General industry',
    items: ['Varied packaging formats', 'Industrial crates and containers', 'Retail-ready packaging'],
  },
];

const INTEGRATION_ITEMS = [
  { title: 'Infeed conveying',          desc: 'Belt and roller conveyors, transfers and diverters directing the product stream from the packaging machine to the palletiser infeed.' },
  { title: 'Buffering and accumulation', desc: 'Buffer sections that even out speed differences and prevent line stoppages when the palletiser momentarily lacks capacity.' },
  { title: 'Layer forming',             desc: 'Grouping and orientation of products before feeding to the palletiser — particularly important with layer systems.' },
  { title: 'Pallet and slip-sheet feeding', desc: 'Automatic empty-pallet feeders and systems for inserting cardboard or film slip-sheets between layers.' },
  { title: 'Load securing',             desc: 'Stretch-film wrapper, thermal hood or strapping — as an integrated part of the system, synchronised with the palletiser.' },
  { title: 'Pallet transport',          desc: 'Roller and chain conveyors, transfer cars or integration with an AGV system and warehouse.' },
  { title: 'Guarding and safety',       desc: 'Work zones designed to machine-safety standards — fixed guards, light curtains or safety scanners, selected to suit the application.' },
  { title: 'Line synchronisation',      desc: 'Palletiser synchronised with the packaging machine and its surroundings via a shared control system or machine communication (Profinet, EtherNet/IP, OPC-UA).' },
];

const PARTNERS = [
  {
    name: 'KUKA',
    origin: 'Germany',
    href: 'https://www.kuka.com',
    desc: 'Manufacturer of industrial robots with a range of palletising and depalletising robots. KUKA systems are integrated with existing packaging lines and end-of-line setups. The portfolio includes robots for heavy industrial applications as well as the LBR iisy cobot for compact palletising cells without conventional fixed guarding.',
  },
  {
    name: 'Yaskawa — Motoman PL series',
    origin: 'Japan',
    href: 'https://www.motoman.com',
    desc: 'A series of palletising robots with payload capacities from 80 to 800 kg. Designed for carton, bag, beverage and container applications. The payload range covers both light unit packaging and heavy bulk loads.',
  },
  {
    name: 'Sidel',
    origin: 'France',
    href: 'https://www.sidel.com',
    desc: 'Manufacturer of complete palletising systems for the beverage and FMCG industries. The portfolio includes layer systems (PalKombi, PalPack 4000), robotic systems (Pal Robo-Kombi, Pal Vite, RoboAccess), high-speed top-load systems (PalLinear) and compact cobot cells (CoboAccess_Pal). Sidel supplies systems as part of a complete end-of-line solution.',
  },
  {
    name: 'BEUMER Group',
    origin: 'Germany',
    href: 'https://www.beumergroup.com',
    desc: 'Manufacturer of palletising and pallet transport systems. The paletpac® series is a layer system for bags with throughput of up to 6,000 bags per hour. The robotpac® series is a robotic version handling bags, cartons, crates and jerry cans. BEUMER also offers pallet securing systems and complete end-of-line packaging solutions.',
  },
  {
    name: 'OCME',
    origin: 'Italy',
    href: 'https://www.ocme.it',
    desc: 'Manufacturer of complete palletising and depalletising systems. The portfolio includes conventional and single-column models with in-line or 90° layer-forming layouts. OCME supplies end-of-line systems with accessories and integration with downstream pallet transport.',
  },
  {
    name: 'TopTier',
    origin: 'USA',
    href: 'https://www.toptierpalletizer.com',
    desc: 'Manufacturer of palletising systems for various industrial sectors. The portfolio includes low-level infeed systems, conventional and hybrid robotic systems (Robotier Hybrid Robotic), and dedicated bag palletising systems. The compact Value Palletizer is designed for moderate-throughput applications with a limited footprint.',
  },
  {
    name: 'Concetti',
    origin: 'Italy',
    href: 'https://www.concetti.com',
    desc: 'Manufacturer specialising in weighing, packaging and palletising systems for bulk solid products. The portfolio covers complete bulk-material lines — from dosing and bagging through to palletising of the finished load.',
  },
];

const MADEJPAK_ROLE = [
  { step: '01', title: 'Solution selection',     desc: 'We analyse the product, volume, format variability, available space and existing line layout. Based on this we select the type of system and partner technology.' },
  { step: '02', title: 'Application design',      desc: 'We design the workstation layout, define the pallet pattern and specify interfaces with the line environment. Where required, we select the robotic gripper type.' },
  { step: '03', title: 'Delivery and integration', desc: 'We deliver the palletiser and all surrounding elements — conveyors, buffers, pallet feeders, slip-sheets, wrappers. We integrate everything mechanically, electrically and in terms of communication.' },
  { step: '04', title: 'Commissioning and testing', desc: 'We carry out acceptance tests (FAT) and commissioning at the customer\'s plant (SAT). We train operators and maintenance staff.' },
  { step: '05', title: 'Service and upgrades',   desc: 'We provide warranty and post-warranty service, access to spare parts and support for format changes or system expansion.' },
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function PaletyzacjaPage() {
  return (
    <Box sx={{ bgcolor: BG, minHeight: '100vh', color: 'var(--text)' }}>
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ── Hero ── */}
      <Box sx={{ borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 10 }, alignItems: 'end' }}>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
                End of line
              </Typography>
              <Typography variant="h1"
                sx={{ fontSize: { xs: '2rem', md: '2.75rem', lg: '3rem' }, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', color: 'var(--dim-85)' }}>
                Palletising —<br />robotic, layer<br />and integrated
              </Typography>
            </Box>

            <Box>
              <Typography sx={{ fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.8, color: TEXT_DIM, mb: 3 }}>
                MadejPak selects, supplies and integrates palletising systems for industrial packaging lines.
                We offer robotic, layer and cobot solutions — matched to the product, throughput
                and spatial layout of the plant. The palletiser is always part of a broader end-of-line system,
                not an isolated machine.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Box component={Link} href="/en/kontakt"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 3, py: 1.25, bgcolor: ACCENT, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', transition: 'background-color 0.15s ease', '&:hover': { bgcolor: '#D45509' } }}>
                  Ask about a solution
                  <ArrowRight />
                </Box>
                <Box component={Link} href="/en/realizacje"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 3, py: 1.25, border: `1px solid ${BORDER}`, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: TEXT_DIM, textDecoration: 'none', transition: 'border-color 0.15s ease, color 0.15s ease', '&:hover': { borderColor: 'var(--dim-20)', color: 'var(--dim-85)' } }}>
                  See completed projects
                  <ArrowRight />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── How it works ── */}
      <Box sx={{ py: { xs: 6, md: 8 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '280px 1fr' }, gap: { xs: 4, md: 10 }, alignItems: 'start' }}>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                How it works
              </Typography>
              <Typography variant="h2"
                sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em' }}>
                From packaging machine exit to finished pallet
              </Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 2 }}>
              {PROCESS_STEPS.map((s) => (
                <Box key={s.num} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', color: ACCENT }}>{s.num}</Typography>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.3 }}>{s.title}</Typography>
                  <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.65 }}>{s.desc}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Solution types ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            System types
          </Typography>
          <Typography variant="h2"
            sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: { xs: 6, md: 8 }, maxWidth: 560 }}>
            Which palletising systems we select
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {SOLUTION_TYPES.map((sol) => (
              <Box key={sol.id}
                sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '280px 1fr' }, gap: { xs: 3, lg: 8 }, p: { xs: 3, md: 4 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: '4px' }}>
                {/* Left: title + scope */}
                <Box>
                  <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', mb: 1.5, lineHeight: 1.3 }}>
                    {sol.label}
                  </Typography>
                  <Typography sx={{ fontSize: '0.78rem', color: 'var(--dim-45)', lineHeight: 1.6, fontStyle: 'italic' }}>
                    {sol.scope}
                  </Typography>
                </Box>
                {/* Right: desc + products + partners */}
                <Box>
                  <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.8, mb: 3 }}>
                    {sol.desc}
                  </Typography>
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
                    <Box>
                      <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dim-42)', mb: 1.5 }}>
                        Typical products
                      </Typography>
                      {sol.products.map((p) => (
                        <Box key={p} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25, mb: 0.75 }}>
                          <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: ACCENT, mt: '7px', flexShrink: 0 }} />
                          <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.55 }}>{p}</Typography>
                        </Box>
                      ))}
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dim-42)', mb: 1.5 }}>
                        Partners / systems
                      </Typography>
                      {sol.partners.map((p) => (
                        <Box key={p} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25, mb: 0.75 }}>
                          <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'var(--dim-28)', mt: '7px', flexShrink: 0 }} />
                          <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.55 }}>{p}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Applications ── */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Applications
          </Typography>
          <Typography variant="h2"
            sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: { xs: 5, md: 7 }, maxWidth: 500 }}>
            Industries and product groups
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 2.5 }}>
            {SECTORS.map((sec) => (
              <Box key={sec.name}
                sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `2px solid ${ACCENT}`, borderRadius: '4px', p: { xs: 2.5, md: 3 } }}>
                <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                  {sec.name}
                </Typography>
                {sec.items.map((item) => (
                  <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25, mb: 0.75 }}>
                    <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: ACCENT, mt: '7px', flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.55 }}>{item}</Typography>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Line integration ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '280px 1fr' }, gap: { xs: 4, md: 10 }, alignItems: 'start' }}>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Line integration
              </Typography>
              <Typography variant="h2"
                sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em', mb: 2 }}>
                Palletising as part of the end of line
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', color: TEXT_DIM, lineHeight: 1.75 }}>
                MadejPak does not just supply a palletiser — we integrate a complete end-of-line workstation.
                Below are the elements we design and synchronise around the palletiser.
              </Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
              {INTEGRATION_ITEMS.map((item) => (
                <Box key={item.title}
                  sx={{ p: { xs: 2.5, md: 3 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text)', mb: 1, lineHeight: 1.3 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.65 }}>
                    {item.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Partners ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Technology partners
          </Typography>
          <Typography variant="h2"
            sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: { xs: 5, md: 7 }, maxWidth: 480 }}>
            Palletising system manufacturers
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
            {PARTNERS.map((partner) => (
              <Box key={partner.name}
                sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', p: { xs: 3, md: 3.5 } }}>
                <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 2, mb: 1.5, flexWrap: 'wrap' }}>
                  <Typography sx={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.01em' }}>
                    {partner.name}
                  </Typography>
                  <Typography sx={{ fontSize: '0.7rem', color: 'var(--dim-35)', textTransform: 'uppercase', letterSpacing: '0.1em', flexShrink: 0 }}>
                    {partner.origin}
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: '0.87rem', color: TEXT_DIM, lineHeight: 1.75, mb: 2 }}>
                  {partner.desc}
                </Typography>
                <Box component="a" href={partner.href} target="_blank" rel="noopener noreferrer"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontSize: '0.78rem', fontWeight: 600, color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                  Manufacturer website
                  <ArrowRight />
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── MadejPak role ── */}
      <Box sx={{ py: { xs: 8, md: 10 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            MadejPak's role
          </Typography>
          <Typography variant="h2"
            sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: { xs: 5, md: 7 }, maxWidth: 520 }}>
            How we work on palletising projects
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr 1fr 1fr' }, gap: 2.5 }}>
            {MADEJPAK_ROLE.map((r) => (
              <Box key={r.step} sx={{ p: { xs: 2.5, md: 3 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `2px solid ${ACCENT}`, borderRadius: '4px' }}>
                <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, color: ACCENT, letterSpacing: '0.12em', mb: 1.5 }}>{r.step}</Typography>
                <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text)', mb: 1.25, lineHeight: 1.3 }}>{r.title}</Typography>
                <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.65 }}>{r.desc}</Typography>
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
                We will select a system to match your process
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: TEXT_DIM, lineHeight: 1.8, maxWidth: 540 }}>
                The right palletising system depends on the product type and weight, required throughput, format
                variability and available space. Describe your application — we will analyse the requirements and
                propose a solution tailored to your plant conditions.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexShrink: 0 }}>
              <Box component={Link} href="/en/kontakt"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 3, py: 1.25, bgcolor: ACCENT, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', whiteSpace: 'nowrap', '&:hover': { bgcolor: '#D45509' } }}>
                Ask about a solution
                <ArrowRight />
              </Box>
              <Box component={Link} href="/en/realizacje"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 3, py: 1.25, border: `1px solid ${BORDER}`, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: TEXT_DIM, textDecoration: 'none', whiteSpace: 'nowrap', '&:hover': { borderColor: 'var(--dim-20)', color: 'var(--dim-85)' } }}>
                See completed projects
                <ArrowRight />
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
            <span>Palletising</span>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
