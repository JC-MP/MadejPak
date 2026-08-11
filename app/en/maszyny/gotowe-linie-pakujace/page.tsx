import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Ready Packaging Lines & Palletising Stations',
  description:
    'MadejPak designs and implements ready packaging lines, palletising stations and end-of-line automation solutions. Proven layouts based on real industrial implementations.',
  alternates: {
    canonical: `${SITE_URL}/en/maszyny/gotowe-linie-pakujace`,
    languages: {
      'pl': `${SITE_URL}/maszyny/gotowe-linie-pakujace`,
      'en': `${SITE_URL}/en/maszyny/gotowe-linie-pakujace`,
      'x-default': `${SITE_URL}/maszyny/gotowe-linie-pakujace`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/en/maszyny/gotowe-linie-pakujace`,
    title:       'Ready Packaging Lines | MadejPak',
    description: 'MadejPak designs and implements ready packaging lines, palletising stations and end-of-line automation. Proven layouts based on real industrial implementations.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Ready Packaging Lines – MadejPak' }],
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

function IconKartonowanie() {
  return (
    <Box component="svg" viewBox="0 0 96 96" fill="none" aria-hidden="true"
      sx={{ width: 80, height: 80, color: ACCENT }}>
      <rect x="20" y="42" width="56" height="44" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M20 42 L48 30 L76 42" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M48 30 L48 42" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2"/>
      <rect x="36" y="10" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="50" y="14" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M41 22 L41 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M39 28 L41 31 L43 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M55 26 L55 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M53 32 L55 35 L57 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="28" y="58" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="42" y="58" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="56" y="58" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    </Box>
  );
}

function IconPaletyzacja() {
  return (
    <Box component="svg" viewBox="0 0 96 96" fill="none" aria-hidden="true"
      sx={{ width: 80, height: 80, color: ACCENT }}>
      <rect x="8" y="74" width="80" height="8" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      <line x1="28" y1="74" x2="28" y2="82" stroke="currentColor" strokeWidth="2"/>
      <line x1="48" y1="74" x2="48" y2="82" stroke="currentColor" strokeWidth="2"/>
      <line x1="68" y1="74" x2="68" y2="82" stroke="currentColor" strokeWidth="2"/>
      <rect x="10" y="62" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="30" y="62" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="50" y="62" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="68" y="62" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="14" y="50" width="20" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="38" y="50" width="20" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="62" y="50" width="20" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="20" y="38" width="22" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="54" y="38" width="22" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
      <path d="M70 14 L78 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M70 14 L60 10 L64 20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </Box>
  );
}

function IconRobotyzacja() {
  return (
    <Box component="svg" viewBox="0 0 96 96" fill="none" aria-hidden="true"
      sx={{ width: 80, height: 80, color: ACCENT }}>
      <line x1="6" y1="76" x2="90" y2="76" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="6" y1="84" x2="90" y2="84" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="12" cy="80" r="6" stroke="currentColor" strokeWidth="2"/>
      <circle cx="84" cy="80" r="6" stroke="currentColor" strokeWidth="2"/>
      <rect x="22" y="64" width="14" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="40" y="64" width="14" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="58" y="58" width="24" height="8" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      <line x1="70" y1="58" x2="56" y2="38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="56" cy="38" r="3.5" stroke="currentColor" strokeWidth="2"/>
      <line x1="56" y1="34.5" x2="40" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="40" cy="20" r="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M40 17 L33 10 L33 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M40 17 L47 10 L47 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="33" y="2" width="14" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    </Box>
  );
}

function IconTrudneWarunki() {
  return (
    <Box component="svg" viewBox="0 0 96 96" fill="none" aria-hidden="true"
      sx={{ width: 80, height: 80, color: ACCENT }}>
      <path d="M48 8 L76 20 L76 52 C76 68 62 80 48 86 C34 80 20 68 20 52 L20 20 Z"
        stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="48" cy="48" r="14" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="48" cy="48" r="7" stroke="currentColor" strokeWidth="1.5"/>
      {[0,45,90,135,180,225,270,315].map((a) => {
        const rad = (a * Math.PI) / 180;
        const x1 = 48 + 14 * Math.cos(rad);
        const y1 = 48 + 14 * Math.sin(rad);
        const x2 = 48 + 19 * Math.cos(rad);
        const y2 = 48 + 19 * Math.sin(rad);
        return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>;
      })}
      <path d="M40 48 L45 53 L56 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Box>
  );
}

function IconPolautomatyczne() {
  return (
    <Box component="svg" viewBox="0 0 96 96" fill="none" aria-hidden="true"
      sx={{ width: 80, height: 80, color: ACCENT }}>
      <line x1="30" y1="66" x2="88" y2="66" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="30" y1="74" x2="88" y2="74" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="36" cy="70" r="6" stroke="currentColor" strokeWidth="2"/>
      <circle cx="82" cy="70" r="6" stroke="currentColor" strokeWidth="2"/>
      <rect x="50" y="54" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="72" y="54" width="10" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="16" cy="28" r="8" stroke="currentColor" strokeWidth="2"/>
      <line x1="16" y1="36" x2="16" y2="56" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 44 L28 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 44 L8 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 56 L10 72" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 56 L22 72" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M34 34 L44 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2"/>
      <path d="M41 31 L44 34 L41 37" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Box>
  );
}

const SOLUTION_ICONS: Record<string, React.ReactNode> = {
  'kartonowanie':    <IconKartonowanie />,
  'paletyzacja':     <IconPaletyzacja />,
  'robotyzacja':     <IconRobotyzacja />,
  'trudne-warunki':  <IconTrudneWarunki />,
  'polautomatyczne': <IconPolautomatyczne />,
};

const SOLUTION_TYPES = [
  {
    id: 'kartonowanie',
    name: 'Case packing and secondary packaging lines',
    desc: 'Solutions for automating the final stage of packing individual products into cartons or secondary packages. Include product transport, grouping, case packing, closing and handoff to palletising.',
    forWho: ['Household chemicals and FMCG', 'Manufacturers of individually packaged products', 'Lines requiring stable product flow'],
    benefits: ['Reduced manual labour in packing', 'Higher throughput and process stability', 'Consistent secondary packaging quality'],
    caseLinks: [
      { slug: 'golddrop',  label: 'Case packing and robotics for detergent packaging' },
      { slug: 'skawa',     label: 'Dedicated wafer packaging line up to 320 pcs/min' },
    ],
  },
  {
    id: 'paletyzacja',
    name: 'Ready palletising stations',
    desc: 'Stations for automatic palletising of products, bags, cartons and secondary packages. Operate as independent robotic islands or as part of a larger packaging line.',
    forWho: ['Facilities with heavy manual labour at end of line', 'Processes packing heavy or difficult packages', 'Lines requiring stable and repeatable layer stacking on pallets'],
    benefits: ['Reduced physical labour and improved safety', 'Consistent layer pattern on the pallet', 'Ability to operate continuously without shift breaks'],
    caseLinks: [
      { slug: 'siarkopol', label: 'Robotic palletising of fertilisers — two independent lines' },
      { slug: 'promotor',  label: 'Robotic palletising of building mortar bags' },
    ],
  },
  {
    id: 'robotyzacja',
    name: 'Robotic packaging lines',
    desc: 'Complete systems with industrial robots for packaging, product manipulation and end-of-line handling. Used where throughput, error reduction and multi-format pack handling matter.',
    forWho: ['Industrial facilities with higher production scale', 'Processes with high packaging and format variability', 'Companies replacing manual packing with automation'],
    benefits: ['Higher process stability and repeatability', 'Reduction of human errors', 'Ability to scale production without additional staff'],
    caseLinks: [
      { slug: 'alexpol',  label: 'Mobile cobot palletising station' },
      { slug: 'certech',  label: 'Palletising and cat litter packaging — two robotisation stages' },
    ],
  },
  {
    id: 'trudne-warunki',
    name: 'Lines for harsh conditions and demanding products',
    desc: 'Solutions designed for dusty environments, space-constrained facilities, varied packaging formats and products difficult to handle automatically.',
    forWho: ['Fertilisers, chemicals, products with unstable geometry', 'Facilities with existing infrastructure hard to rebuild', 'Processes with slippery, heavy or variable products'],
    benefits: ['Adaptation to actual plant conditions', 'Integration with existing infrastructure without rebuilding', 'Greater reliability in demanding production environments'],
    caseLinks: [
      { slug: 'siarkopol', label: 'Handling slippery fertiliser bags in a dusty environment' },
      { slug: 'lazur',     label: 'Cheese packaging in high-humidity cold conditions' },
      { slug: 'qemetica',  label: 'Calcium chloride packaging — extremely harsh environment' },
    ],
  },
  {
    id: 'polautomatyczne',
    name: 'Semi-automatic stations and staged automation',
    desc: 'Semi-automatic stations for companies that want to reduce manual labour and organise the packaging process without fully robotising the entire system. A good solution for staged automation development.',
    forWho: ['Smaller facilities or processes with medium throughput', 'Companies beginning end-of-line automation', 'Stations prepared for later expansion'],
    benefits: ['Lower entry threshold and shorter implementation time', 'Improved ergonomics and work organisation', 'Ready for further automation of subsequent stages'],
    caseLinks: [
      { slug: 'promotor', label: 'Robotic palletising of building mortar bags' },
    ],
  },
];

const SCOPE_LEVELS = [
  {
    label: 'Station',
    desc: 'A single packing, case packing or palletising station for a specific process stage. Can operate independently or be added to an existing line.',
    tags: ['Palletising', 'Case packing', 'Product take-off'],
  },
  {
    label: 'Robotic island',
    desc: 'An integrated system with robot, transport and tooling, ready to work within an existing line. A complete module to insert into existing infrastructure.',
    tags: ['Robot + transport', 'Gripper', 'Control'],
  },
  {
    label: 'Complete line',
    desc: 'A comprehensive system covering infeed, packaging, transport, palletising and integration with client infrastructure. From packaging machine to wrapped pallet.',
    tags: ['Full integration', 'Infeed + packing + palletising', 'Supervisory control'],
  },
];

const ADVANTAGES = [
  { title: 'Based on real implementations', desc: 'Solutions stem from design and manufacturing experience — not catalogue configurations. Every layout has gone through analysis, design and commissioning in a real plant.' },
  { title: 'Tailored to the process', desc: 'The line layout is selected to match the product, throughput, available space and plant conditions — not the other way around.' },
  { title: 'Phased investment', desc: 'It is possible to implement a single station, a robotic island or a complete line. The client does not have to invest in full automation all at once.' },
  { title: 'Integration and growth', desc: 'Solutions can be integrated with existing infrastructure and prepared for further expansion — without replacing the entire line.' },
];

const PROCESS_STEPS = [
  { num: '01', title: 'Process analysis', desc: 'We define product, throughput, plant layout, existing machinery and working conditions. We talk to technologists and line operators.' },
  { num: '02', title: 'Line concept', desc: 'We select the station layout, robotisation type, flow scheme and automation scope. We prepare the concept for agreement.' },
  { num: '03', title: 'Design & manufacture', desc: 'We develop mechanical and electrical documentation, manufacture proprietary equipment, integrate partner machines.' },
  { num: '04', title: 'Integration & commissioning', desc: 'We install and commission the system at the client\'s plant. We synchronise with the supervisory controller and existing infrastructure.' },
  { num: '05', title: 'Tests & optimisation', desc: 'We run acceptance tests under full production load. We optimise parameters and train operators.' },
];

export default function ReadyPackagingLinesPage() {
  return (
    <Box component="main" sx={{ bgcolor: BG, color: 'var(--text)' }}>

      {/* ── Hero ── */}
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
          <Image src="/images/other/robotyzacja-cobot.jpg" alt="" fill sizes="(max-width: 768px) 0vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.5, filter: 'grayscale(100%)' }} />
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 10 } }}>
          <Box sx={{ maxWidth: 640 }}>
            <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 2, mb: 1, display: 'block' }}>
              Ready implementation systems
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, lineHeight: 1.15, mb: 3 }}>
              Ready packaging lines and automation stations
            </Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, fontSize: '1.05rem', lineHeight: 1.8, mb: 2 }}>
              For plants that want to automate packaging without building a project from scratch — ready line and station concepts, tailored to product, throughput and working conditions.
            </Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.8, mb: 5 }}>
              MadejPak designs and implements proven technological systems: from case packing and palletising stations to complete packaging lines with robotics. Every implementation goes through a process analysis and is adapted to the plant&apos;s specifics — faster than a custom project from scratch.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              <Box
                component={Link}
                href="/en/kontakt"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: ACCENT, color: '#fff', px: 3.5, py: 1.5, borderRadius: 1.5, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { bgcolor: '#c9520a' } }}
              >
                Ask about a line <ArrowRight />
              </Box>
              <Box
                component={Link}
                href="/en/kontakt"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, border: `1px solid ${BORDER}`, color: 'var(--text)', px: 3.5, py: 1.5, borderRadius: 1.5, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}
              >
                Consult a layout for your production
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Intro ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '5fr 4fr' }, gap: { xs: 4, md: 10 }, alignItems: 'center' }}>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 3 }}>
                Solutions based on real implementations
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.85, mb: 3 }}>
                The solutions presented are ready line and station concepts that can be implemented in a form adapted to a specific process. They include both complete packaging systems and individual end-of-line automation stations: case packing, secondary packaging, palletising and product flow organisation.
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.85 }}>
                These are not random configurations. These are solutions derived from MadejPak&apos;s implementation experience in industrial plants — including Gold Drop (case packing and robotics for detergent packaging) and Siarkopol (two independent fertiliser packaging and palletising lines).
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { val: '25+', label: 'years of implementation experience in manufacturing plants' },
                { val: '5', label: 'stages in every project — from analysis to support' },
                { val: '3', label: 'implementation scope levels — station / island / line' },
              ].map((s) => (
                <Box key={s.label} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3, display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: ACCENT, flexShrink: 0, lineHeight: 1 }}>
                    {s.val}
                  </Typography>
                  <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.5 }}>
                    {s.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Solution types ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Main types of ready solutions
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 8, maxWidth: 680 }}>
            Each solution type can be implemented as a station, robotic island or part of a complete line — depending on the scale and requirements of the plant.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {SOLUTION_TYPES.map((s, idx) => (
              <Box key={s.id} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, overflow: 'hidden', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' } }}>
                <Box sx={{ bgcolor: BG_ALT, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: { xs: 160, md: 'auto' }, borderRight: { md: `1px solid ${BORDER}` }, borderBottom: { xs: `1px solid ${BORDER}`, md: 'none' } }}>
                  {SOLUTION_ICONS[s.id] ?? null}
                </Box>
                <Box sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box sx={{ width: 32, height: 32, borderRadius: 1, bgcolor: `${ACCENT}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, color: ACCENT }}>
                        {String(idx + 1).padStart(2, '0')}
                      </Typography>
                    </Box>
                    <Typography variant="h3" sx={{ fontSize: '1.1rem', fontWeight: 700 }}>
                      {s.name}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.75, mb: 3 }}>
                    {s.desc}
                  </Typography>
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
                    <Box>
                      <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 1.5, display: 'block', mb: 1.5, fontSize: '0.68rem' }}>
                        For whom
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                        {s.forWho.map((f) => (
                          <Box component="li" key={f} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, color: TEXT_DIM, fontSize: '0.8rem' }}>
                            <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, mt: '5px' }} />
                            {f}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 1.5, display: 'block', mb: 1.5, fontSize: '0.68rem' }}>
                        Benefits
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                        {s.benefits.map((b) => (
                          <Box component="li" key={b} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, color: TEXT_DIM, fontSize: '0.8rem' }}>
                            <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, mt: '5px' }} />
                            {b}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ mt: 3, pt: 3, borderTop: `1px solid ${BORDER}` }}>
                    <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dim-38)', mb: 1.5 }}>
                      Implementation examples
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                      {s.caseLinks.map((cl) => (
                        <Box
                          key={cl.slug}
                          component={Link}
                          href={`/en/realizacje/${cl.slug}`}
                          sx={{
                            display: 'inline-flex', alignItems: 'center', gap: 0.75,
                            fontSize: '0.8rem', color: ACCENT, textDecoration: 'none',
                            fontWeight: 500, lineHeight: 1.4,
                            transition: 'gap 0.15s ease, color 0.15s ease',
                            '&:hover': { gap: 1.25, color: '#F07520' },
                          }}
                        >
                          <ArrowRight />
                          {cl.label}
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

      {/* ── Implementation scope ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Implementation scope matched to process scale
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 6, maxWidth: 640 }}>
            The client does not have to invest in full automation all at once. Phased implementation is possible — from a single station to a complete line.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
            {SCOPE_LEVELS.map((level, idx) => (
              <Box key={level.label} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 4, position: 'relative', overflow: 'hidden' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, bgcolor: ACCENT, opacity: idx === 2 ? 1 : 0.4 + idx * 0.3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: ACCENT, lineHeight: 1, mb: 1.5 }}>
                  {String(idx + 1).padStart(2, '0')}
                </Typography>
                <Typography variant="h3" sx={{ fontSize: '1.15rem', fontWeight: 700, mb: 2 }}>
                  {level.label}
                </Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.75, mb: 3 }}>
                  {level.desc}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {level.tags.map((tag) => (
                    <Box key={tag} sx={{ px: 1.5, py: 0.5, borderRadius: 1, border: `1px solid ${BORDER}`, fontSize: '0.72rem', color: TEXT_DIM }}>
                      {tag}
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Why MadejPak ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Why MadejPak ready lines
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 6, maxWidth: 620 }}>
            A ready solution does not mean a lack of flexibility. Every system is adapted to the plant&apos;s and product&apos;s specifics.
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

      {/* ── Process ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            How we work on a line
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 6, maxWidth: 620 }}>
            Every project goes through the same stages — regardless of implementation scale.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(5, 1fr)' }, gap: 3 }}>
            {PROCESS_STEPS.map((s, idx) => (
              <Box key={s.num} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3, position: 'relative' }}>
                {idx < PROCESS_STEPS.length - 1 && (
                  <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', right: -16, top: '50%', transform: 'translateY(-50%)', color: TEXT_DIM, zIndex: 1 }}>
                    <ArrowRight />
                  </Box>
                )}
                <Typography sx={{ fontSize: '1.75rem', fontWeight: 800, color: ACCENT, lineHeight: 1, mb: 1.5 }}>
                  {s.num}
                </Typography>
                <Typography variant="h4" sx={{ fontSize: '0.9rem', fontWeight: 700, mb: 1 }}>
                  {s.title}
                </Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.65, fontSize: '0.8rem' }}>
                  {s.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box sx={{ bgcolor: BG }}>
        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 3, p: { xs: 4, md: 6 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, justifyContent: 'space-between', gap: 4 }}>
            <Box sx={{ maxWidth: 540 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, mb: 1.5 }}>
                Looking for a ready packaging line or end-of-line station?
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>
                We select the layout for product, throughput, automation level and working conditions in your plant. We can prepare both a single station and a complete packaging line.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexShrink: 0 }}>
              <Box
                component={Link}
                href="/en/kontakt"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: ACCENT, color: '#fff', px: 4, py: 1.75, borderRadius: 1.5, fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', '&:hover': { bgcolor: '#c9520a' } }}
              >
                Send enquiry <ArrowRight />
              </Box>
              <Box
                component={Link}
                href="/en/kontakt"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, border: `1px solid ${BORDER}`, color: 'var(--text)', px: 4, py: 1.75, borderRadius: 1.5, fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}
              >
                Describe your process
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
            <span>Ready packaging lines</span>
          </Typography>
        </Container>
      </Box>

    </Box>
  );
}
