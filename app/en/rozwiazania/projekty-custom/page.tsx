import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Custom Projects',
  description: 'MadejPak executes custom machinery and packaging system projects — from robotic grippers to complete special-purpose workstations.',
  alternates: {
    canonical: `${SITE_URL}/en/rozwiazania/projekty-custom`,
    languages: {
      'pl': `${SITE_URL}/rozwiazania/projekty-custom`,
      'en': `${SITE_URL}/en/rozwiazania/projekty-custom`,
      'x-default': `${SITE_URL}/rozwiazania/projekty-custom`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/en/rozwiazania/projekty-custom`,
    title:       'Custom Projects | MadejPak',
    description: 'MadejPak executes custom machinery and packaging system projects — from robotic grippers to complete special-purpose workstations.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Custom Projects – MadejPak' }],
  },
};

const BG = 'var(--bg)', BG_CARD = 'var(--bg-card)', BG_ALT = 'var(--bg-alt)', ACCENT = '#E8610A', BORDER = 'var(--border)', TEXT_DIM = 'var(--dim-72)';

function Ico({ d, d2 }: { d: string; d2?: string }) {
  return (
    <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 22, height: 22, color: 'inherit' }}>
      <path d={d} stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      {d2 && <path d={d2} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}
    </Box>
  );
}

const iconBox = { width: 44, height: 44, borderRadius: '10px', bgcolor: 'rgba(232,97,10,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5, color: ACCENT } as const;

const TRIGGER_CASES = [
  {
    label: 'Difficult product',
    title: 'It crumbles, sticks, or has an irregular shape',
    desc: 'No catalogue machine picks up the product without damage. We build a dedicated feeder, gripper with adjustable force, and timing tailored to the specific geometry.',
    icon: <Ico d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77Z" />,
  },
  {
    label: 'Limited space',
    title: 'The machine must fit where a standard one won\'t',
    desc: '600 mm between columns, 2.5 m ceiling height, a U-shaped line. The project starts from facility dimensions as hard constraints — not from a catalogue.',
    icon: <Ico d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />,
  },
  {
    label: 'Harsh environment',
    title: 'Dust, moisture, chemical substances',
    desc: 'Standard drives and electrics don\'t survive a year in a chemical plant or under lime dust. We select IP ratings, corrosion-resistant materials, and hermetic enclosures.',
    icon: <Ico d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" d2="M9 12l2 2 4-4" />,
  },
  {
    label: 'No off-the-shelf machine',
    title: 'Product or format nobody has automated before',
    desc: 'Specific packaging shape, non-standard operation sequence, or no available machines for the application. We start with a blank sheet.',
    icon: <Ico d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />,
  },
];

const DIFFERENTIATORS = [
  {
    title: 'Own manufacturing facility',
    desc: 'We manufacture mechanical and electrical components in-house — without outsourcing key elements. This shortens lead times and gives us full quality control.',
    icon: <Ico d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77Z" />,
  },
  {
    title: 'Full documentation and CE',
    desc: 'Every project ends with technical documentation, electrical schematics, and a CE declaration of conformity. Not just "it works" — you have everything needed to maintain the machine for years.',
    icon: <Ico d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" d2="M9 12h6M9 16h4" />,
  },
  {
    title: 'FAT before delivery to client',
    desc: 'We test every machine at our facility with the client\'s product before it enters production. Factory Acceptance Testing (FAT) at our site eliminates commissioning problems on location.',
    icon: <Ico d="M22 11.08V12a10 10 0 1 1-5.93-9.14" d2="M22 4 12 14.01l-3-3" />,
  },
  {
    title: 'Service like standard machines',
    desc: 'Our own service team, our own parts, our own documentation. After a year we don\'t need to find a subcontractor who "did something there" — we know the machine because we designed it.',
    icon: <Ico d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />,
  },
];

const EXAMPLES = [
  {
    icon: <Ico d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77Z" />,
    title: 'Robotic grippers',
    desc: 'We design and manufacture grippers for specific products and robots — vacuum, mechanical, combined.',
    example: 'e.g. 4-cavity gripper for fragile biscuits with adjustable vacuum force',
  },
  {
    icon: <Ico d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />,
    title: 'Special-purpose machines',
    desc: 'Equipment for operations with no ready-made catalogue equivalent — bag closers, feeders, assembly workstations.',
    example: 'e.g. automatic bag closer for filled bags',
  },
  {
    icon: <Ico d="M4 7h3M4 12h3M4 17h3M7 2v20M11 4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-8" d2="M14 9h2M14 12h2M14 15h2" />,
    title: 'Counting & dosing machines',
    desc: 'Specialized equipment for automatic counting and packaging of products in specified quantities.',
    example: 'e.g. machine for counting and packaging seedling sticks',
  },
  {
    icon: <Ico d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />,
    title: 'Line modernizations',
    desc: 'Rebuilding existing workstations — new modules, control replacement, integration with a robot or supervisory system.',
    example: 'e.g. replacing old sealer controls with new PLC and HMI',
  },
  {
    icon: <Ico d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" d2="M9 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />,
    title: 'Semi-automatic workstations',
    desc: 'Systems combining operator work with automation — where full automation is not justified or feasible.',
    example: 'e.g. workstation with a robot for stacking and operator for visual inspection',
  },
  {
    icon: <Ico d="M5 12h14M12 5l7 7-7 7" />,
    title: 'Feeding & transfer systems',
    desc: 'Destackers, lug conveyors, and belt conveyors matched to specific products and line layouts.',
    example: 'e.g. screw conveyor for bulk products with irregular granulation',
  },
];

const PROCESS = [
  { icon: <Ico d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" d2="M9 12h6M9 16h4" />, num: '01', title: 'Requirements analysis', desc: 'Detailed discussion of product, process, throughput, space constraints, and environmental requirements.' },
  { icon: <Ico d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />, num: '02', title: 'Solution concept', desc: 'We develop several concept variants — present them to the client and agree on the direction. The client receives a layout sketch and estimated project costs.' },
  { icon: <Ico d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77Z" />, num: '03', title: 'Design & build', desc: 'Mechanical and electrical design, manufacturing at our own facility or with subcontractors.' },
  { icon: <Ico d="M22 11.08V12a10 10 0 1 1-5.93-9.14" d2="M22 4 12 14.01l-3-3" />, num: '04', title: 'Testing & commissioning', desc: 'FAT at our facility with the client\'s product, on-site installation, SAT, and operator training. Support during the production ramp-up phase.' },
];

function Arrow() {
  return <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden sx={{ width: 13, height: 13, flexShrink: 0 }}><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></Box>;
}

export default function ProjektyCustomEnPage() {
  return (
    <Box component="main" sx={{ bgcolor: BG, color: 'var(--text)' }}>
      <Box sx={{ height: { xs: 60, md: 72 } }} />

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
          <Image src="/images/other/custom-smarowanieform.jpg" alt="" fill sizes="(max-width: 768px) 0vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.5 }} />
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 10 } }}>
          <Box>
            <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 2, mb: 1, display: 'block' }}>Solutions</Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, lineHeight: 1.15, mb: 3 }}>Custom Projects</Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, fontSize: '1.05rem', lineHeight: 1.8, mb: 5 }}>
              We execute projects for which no ready catalogue solution exists. We design and build special-purpose machines, robotic grippers, non-standard workstations, and systems tailored to specific products and processes.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Box component={Link} href="/en/kontakt" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: ACCENT, color: '#fff', px: 3.5, py: 1.5, borderRadius: 1.5, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { bgcolor: '#c9520a' } }}>Describe your project <Arrow /></Box>
              <Box component={Link} href="/en/maszyny/madejpak" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, border: `1px solid ${BORDER}`, color: 'var(--text)', px: 3.5, py: 1.5, borderRadius: 1.5, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}>MadejPak machines <Arrow /></Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* When custom project */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ mb: 6, maxWidth: 640 }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
              When a custom project
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: 2 }}>
              When a catalogue machine is not enough
            </Typography>
            <Typography sx={{ color: TEXT_DIM, lineHeight: 1.8, fontSize: '0.95rem' }}>
              A custom project is not more expensive because we want to earn more — it is needed because the standard solution simply won't work.
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
            {TRIGGER_CASES.map((c) => (
              <Box key={c.label} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 1.5, p: { xs: 3, md: 3.5 } }}>
                <Typography sx={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, mb: 1 }}>
                  {c.label}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 1.5 }}>
                  <Box sx={{ ...iconBox, mb: 0, flexShrink: 0 }}>{c.icon}</Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.975rem', lineHeight: 1.35, pt: 0.5 }}>{c.title}</Typography>
                </Box>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>{c.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* What sets MadejPak custom apart */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ mb: 6, maxWidth: 620 }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
              What sets us apart
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: 2 }}>
              Custom means engineered, not improvised
            </Typography>
            <Typography sx={{ color: TEXT_DIM, lineHeight: 1.8, fontSize: '0.95rem' }}>
              We execute non-standard projects with the same level of documentation, testing, and service support as machines from our standard range.
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
            {DIFFERENTIATORS.map((d) => (
              <Box key={d.title} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `2px solid ${ACCENT}`, borderRadius: 2, p: { xs: 3, md: 3.5 } }}>
                <Box sx={iconBox}>{d.icon}</Box>
                <Typography sx={{ fontWeight: 700, fontSize: '0.975rem', mb: 1.25 }}>{d.title}</Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>{d.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Project categories */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ mb: 6, maxWidth: 640 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, fontWeight: 700, mb: 2 }}>Project categories</Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.8 }}>Every implementation is different — these are the directions in which we execute projects. The examples are real types of orders.</Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
            {EXAMPLES.map((e) => (
              <Box key={e.title} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3, display: 'flex', flexDirection: 'column' }}>
                <Box sx={iconBox}>{e.icon}</Box>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>{e.title}</Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.7, mb: 2, flex: 1 }}>{e.desc}</Typography>
                <Typography sx={{ fontSize: '0.75rem', color: 'var(--dim-45)', fontStyle: 'italic', lineHeight: 1.5, borderTop: `1px solid ${BORDER}`, pt: 1.5 }}>
                  {e.example}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, fontWeight: 700, mb: 6 }}>How we execute special projects</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' }, gap: 3 }}>
            {PROCESS.map((s) => (
              <Box key={s.num} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                  <Box sx={{ ...iconBox, mb: 0 }}>{s.icon}</Box>
                  <Typography sx={{ fontSize: '1.25rem', fontWeight: 800, color: ACCENT, lineHeight: 1 }}>{s.num}</Typography>
                </Box>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>{s.title}</Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.7 }}>{s.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: BG }}>
        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 3, p: { xs: 4, md: 6 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, justifyContent: 'space-between', gap: 4 }}>
            <Box sx={{ maxWidth: 500 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.6rem' }, fontWeight: 700, mb: 1.5 }}>Have a non-standard process to solve?</Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>Describe the product, process, and requirements — we will prepare a concept and project quote.</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexShrink: 0 }}>
              <Box component={Link} href="/en/kontakt" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: ACCENT, color: '#fff', px: 4, py: 1.75, borderRadius: 1.5, fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', '&:hover': { bgcolor: '#c9520a' } }}>Request a quote <Arrow /></Box>
              <Box component={Link} href="/en/rozwiazania" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, border: `1px solid ${BORDER}`, color: 'var(--text)', px: 4, py: 1.75, borderRadius: 1.5, fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}>All solutions</Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: 'var(--bg-alt)', borderTop: `1px solid var(--border)` }}>
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <Typography variant="body2" sx={{ color: 'var(--dim-72)', display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap', fontSize: '0.8rem' }}>
            <Link href="/en" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link href="/en/rozwiazania" style={{ color: 'inherit', textDecoration: 'none' }}>Solutions</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <span>Custom Projects</span>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
