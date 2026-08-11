import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Packaging Automation',
  description: 'MadejPak automates packaging processes — from single workstations to complete lines. We reduce manual labor and increase process stability.',
  alternates: {
    canonical: `${SITE_URL}/en/rozwiazania/automatyzacja-pakowania`,
    languages: {
      'pl': `${SITE_URL}/rozwiazania/automatyzacja-pakowania`,
      'en': `${SITE_URL}/en/rozwiazania/automatyzacja-pakowania`,
      'x-default': `${SITE_URL}/rozwiazania/automatyzacja-pakowania`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/en/rozwiazania/automatyzacja-pakowania`,
    title:       'Packaging Automation | MadejPak',
    description: 'MadejPak automates packaging processes — from single workstations to complete lines. We reduce manual labor and increase process stability.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Packaging Automation – MadejPak' }],
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

const AREAS = [
  {
    step: '01',
    icon: <Ico d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
    title: 'Feeding & Orienting',
    desc: 'Automatic vibratory, belt, and drum feeders — pick up bulk products and deliver them in the correct orientation to the packaging machine. Eliminate manual loading and line feeding.',
  },
  {
    step: '02',
    icon: <Ico d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />,
    title: 'Grouping & Collating',
    desc: 'Systems for counting, grouping, and buffering products before entering the cartoner or dispatch. Critical where products must arrive in precisely defined quantities in the outer packaging.',
  },
  {
    step: '03',
    icon: <Ico d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M12 22.08V12" d2="M3.27 6.96 12 12.01l8.73-5.05" />,
    title: 'Forming & Packaging',
    desc: 'Flowpack, vertical machines (VFFS), lidding, bag sealing, and special packaging — selected for the product, format, and required throughput.',
  },
  {
    step: '04',
    icon: <Ico d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />,
    title: 'Cartoning & Outer Packaging',
    desc: 'Automatic loading of unit packages into cartons, crates, and outer packaging. Replaces manual collation work — repeatable and error-free.',
  },
  {
    step: '05',
    icon: <Ico d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" d2="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />,
    title: 'In-line Quality Control',
    desc: 'Checkweighing, metal detection, machine vision, and seal integrity checks — built into the flow so non-conforming packages are rejected before reaching the pallet.',
  },
  {
    step: '06',
    icon: <Ico d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01" />,
    title: 'Labeling & Marking',
    desc: 'Label application and printing of codes and variable data — integrated with the packaging machine and ERP system. Unit, outer, and pallet labeling.',
  },
];

const BENEFITS = [
  {
    icon: <Ico d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" d2="M12 6v6l4 2" />,
    title: 'Stabilized line cycle times',
    desc: 'The machine packages at the same speed and precision throughout the entire shift. Eliminates fluctuations caused by fatigue, breaks, and differences between workers — the line maintains a constant production rhythm.',
  },
  {
    icon: <Ico d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" d2="M9 12l2 2 4-4" />,
    title: 'Reduced defects and complaints',
    desc: 'Automated dosing, weighing, and package sealing reduces packaging defects. Fewer non-conformities at quality control, fewer complaints from end customers.',
  },
  {
    icon: <Ico d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" d2="M23 11h-6M9 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0" />,
    title: 'Independence from staff turnover',
    desc: 'Absences, turnover, and recruitment difficulties no longer block production. The automated workstation operates independently of personnel availability.',
  },
  {
    icon: <Ico d="M23 6l-9.5 9.5-5-5L1 18M17 6h6v6" />,
    title: 'Multi-shift operation without extra costs',
    desc: 'Automated workstations enable multi-shift operation with reduced unplanned downtime — without a proportional increase in headcount.',
  },
];

const CASE_SNIPPETS = [
  {
    branch: 'Food industry',
    title: 'Cartoning of wafers and biscuits',
    desc: 'Automatic cartoners replaced 4 manual stacking workstations. Consistent throughput and elimination of counting errors during outer packaging collation.',
  },
  {
    branch: 'Chemicals & cosmetics',
    title: 'Labeling and checkweighing',
    desc: 'Line at 120 packages/min with automatic top/bottom labeling and in-line checkweighing. Elimination of labeling errors and weight non-conformities.',
  },
  {
    branch: 'Building materials',
    title: 'Automatic weighing and bag sealing',
    desc: 'Automatic filling of HDPE bags up to 25 kg with dry mix. Reduced physical labor, repeatable weighing accuracy, and marking compliant with industry requirements.',
  },
];

function Arrow() {
  return <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden sx={{ width: 13, height: 13, flexShrink: 0 }}><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></Box>;
}

export default function AutomatyzacjaEnPage() {
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
          <Image src="/images/other/automatyzacjapakowania.jpg" alt="" fill sizes="(max-width: 768px) 0vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.5 }} />
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 10 } }}>
          <Box>
            <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 2, mb: 1, display: 'block' }}>Solutions</Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, lineHeight: 1.15, mb: 3 }}>Packaging Automation</Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, fontSize: '1.05rem', lineHeight: 1.8, mb: 5 }}>
              We automate packaging processes — from single workstations to complete lines. We reduce manual labor, increase process stability, and improve production throughput.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Box component={Link} href="/en/kontakt" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: ACCENT, color: '#fff', px: 3.5, py: 1.5, borderRadius: 1.5, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { bgcolor: '#c9520a' } }}>Ask about automation <Arrow /></Box>
              <Box component={Link} href="/en/realizacje" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, border: `1px solid ${BORDER}`, color: 'var(--text)', px: 3.5, py: 1.5, borderRadius: 1.5, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}>View case studies</Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ mb: 6, maxWidth: 640 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, fontWeight: 700, mb: 2 }}>Process stages we automate</Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.8 }}>Each stage can be automated independently — from a single workstation to a full line. We tailor the scope to the product, throughput, and investment budget.</Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
            {AREAS.map((a) => (
              <Box key={a.title} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `2px solid ${ACCENT}`, borderRadius: 2, p: 3 }}>
                <Typography sx={{ fontSize: '0.68rem', fontWeight: 800, color: ACCENT, letterSpacing: '0.12em', mb: 2 }}>{a.step}</Typography>
                <Box sx={iconBox}>{a.icon}</Box>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>{a.title}</Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.7 }}>{a.desc}</Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ mt: { xs: 6, md: 8 } }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 3 }}>
              Examples from production facilities
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
              {CASE_SNIPPETS.map((c) => (
                <Box key={c.branch} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 1.5, p: 3 }}>
                  <Typography sx={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, mb: 1 }}>
                    {c.branch}
                  </Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.88rem', lineHeight: 1.4, color: 'var(--text)', mb: 1.5 }}>
                    {c.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.7 }}>
                    {c.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ mb: 6, maxWidth: 600 }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
              Business impact
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, fontWeight: 700, letterSpacing: '-0.02em' }}>
              What automation really changes
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
            {BENEFITS.map((b) => (
              <Box key={b.title} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 4 }}>
                <Box sx={iconBox}>{b.icon}</Box>
                <Typography sx={{ fontWeight: 700, mb: 1.5 }}>{b.title}</Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>{b.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: BG }}>
        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 3, p: { xs: 4, md: 6 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, justifyContent: 'space-between', gap: 4 }}>
            <Box sx={{ maxWidth: 500 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.6rem' }, fontWeight: 700, mb: 1.5 }}>Want to reduce manual labor in packaging?</Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>Tell us about your process — we will select the right automation scope for your product and production scale.</Typography>
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
            <span>Packaging Automation</span>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
