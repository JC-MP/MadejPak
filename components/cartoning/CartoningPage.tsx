import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';
import { REALIZACJE } from '@/data/realizacjeData';
import { REALIZACJE_EN } from '@/data/realizacjeDataEn';
import { CART_COPY, CART_REFERENCES, CART_STAGES, CART_STAGE_HREF, type CartLang } from '@/data/cartoningData';
import CartoningInquiry from '@/components/cartoning/CartoningInquiry';
import { LIGHT_LOGOS } from '@/data/palletizingSpec';

const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
const BG_ALT   = 'var(--bg-alt)';
const BG_CARD  = 'var(--bg-card)';
const TEXT_DIM = 'var(--dim-72)';

const prefixOf = (lang: CartLang) => (lang === 'en' ? '/en' : '');
const pageUrl = (lang: CartLang) => `${SITE_URL}${prefixOf(lang)}/maszyny/kartonowanie`;

export function cartoningMetadata(lang: CartLang): Metadata {
  const m = CART_COPY[lang].meta;
  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    alternates: {
      canonical: pageUrl(lang),
      languages: { pl: pageUrl('pl'), en: pageUrl('en'), 'x-default': pageUrl('pl') },
    },
    openGraph: {
      url: pageUrl(lang),
      title: m.ogTitle,
      description: m.description,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: m.ogTitle }],
      locale: lang === 'en' ? 'en_US' : 'pl_PL',
    },
  };
}

function GroupIcon({ id }: { id: 'formowarki' | 'pakowanie' | 'zaklejarki' }) {
  const paths = {
    formowarki: <><path d="M4 9l8-4 8 4v9l-8 4-8-4V9z" /><path d="M4 9l-2 3 8 4 2-3" /><path d="M20 9l2 3-8 4-2-3" /></>,
    pakowanie: <><path d="M4 11l8 4 8-4v7l-8 4-8-4v-7z" /><path d="M12 2v8" /><path d="M9 7l3 3 3-3" /></>,
    zaklejarki: <><path d="M3 8l9-4 9 4v9l-9 4-9-4V8z" /><path d="M3 8l9 4 9-4" /><path d="M8 6l9 4" strokeWidth="3" /></>,
  };
  return (
    <Box component="svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" sx={{ width: 34, height: 34, color: ACCENT, flexShrink: 0 }}>
      {paths[id]}
    </Box>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 1.5 }}>{children}</Typography>;
}

function H2({ children, mb = { xs: 4, md: 5 } }: { children: React.ReactNode; mb?: object }) {
  return <Typography component="h2" sx={{ fontSize: { xs: '1.45rem', md: '2rem' }, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, color: 'var(--text)', mb, maxWidth: 760 }}>{children}</Typography>;
}

const buttonSx = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 1, px: 3, py: 1.4,
  borderRadius: '4px', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.04em', textDecoration: 'none',
  transition: 'background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease',
} as const;

export default function CartoningPage({ lang }: { lang: CartLang }) {
  const c = CART_COPY[lang];
  const prefix = prefixOf(lang);

  const refs = CART_REFERENCES.map((slug) => {
    const pl = REALIZACJE.find((r) => r.slug === slug);
    if (!pl) return null;
    const en = REALIZACJE_EN.find((r) => r.slug === slug);
    return {
      slug,
      klient: pl.klient,
      tytul: lang === 'en' && en ? en.tytul : pl.tytul,
      logo: pl.logoPath,
      video: Boolean(pl.youtubeId || pl.hasVideo),
      href: pl.status === 'pelne' ? `${prefix}/realizacje/${slug}` : `${prefix}/realizacje`,
      logoOnDark: LIGHT_LOGOS.includes(slug),
    };
  }).filter((r): r is NonNullable<typeof r> => r !== null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'MadejPak', item: `${SITE_URL}${prefix || '/'}` },
          { '@type': 'ListItem', position: 2, name: c.breadcrumb.machines, item: `${SITE_URL}${prefix}/maszyny` },
          { '@type': 'ListItem', position: 3, name: c.breadcrumb.current, item: pageUrl(lang) },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: c.faq.items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  };

  return (
    <Box component="main" sx={{ bgcolor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Box sx={{ height: { xs: 60, md: 72 } }} />

      {/* ── Hero ── */}
      <Box component="section" sx={{ borderBottom: `1px solid ${BORDER}`, py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 820 }}>
            <Eyebrow>{c.hero.eyebrow}</Eyebrow>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.05rem', md: '2.9rem' }, fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em', color: 'var(--dim-85)', mb: 2.5 }}>
              {c.hero.title}
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.98rem', md: '1.08rem' }, lineHeight: 1.75, color: TEXT_DIM, mb: 3.5 }}>{c.hero.lead}</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              <Box component="a" href="#zapytanie" sx={{ ...buttonSx, bgcolor: ACCENT, color: '#fff', '&:hover': { bgcolor: '#D45509' } }}>{c.hero.ctaAsk} →</Box>
              <Box component={Link} href={`${prefix}/maszyny/paletyzacja?produkt=kartony#dobor`} sx={{ ...buttonSx, border: `1px solid ${BORDER}`, color: 'var(--dim-75)', '&:hover': { borderColor: ACCENT, color: ACCENT } }}>{c.hero.ctaPallet}</Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Proces ── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 7, md: 9 } }}>
        <Container maxWidth="lg">
          <Eyebrow>{c.process.eyebrow}</Eyebrow>
          <H2>{c.process.title}</H2>
          <Box component="ol" sx={{ m: 0, p: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(5, 1fr)' }, gap: 1.5 }}>
            {CART_STAGES.map((s, i) => {
              const href = CART_STAGE_HREF[s];
              return (
                <Box component="li" key={s} sx={{ p: 2.25, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `2px solid ${ACCENT}`, borderRadius: '4px' }}>
                  <Typography sx={{ fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.12em', color: ACCENT, mb: 0.75 }}>{String(i + 1).padStart(2, '0')}</Typography>
                  <Typography component="h3" sx={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--text)', mb: 0.5 }}>{c.process.steps[s].title}</Typography>
                  <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.6, color: TEXT_DIM }}>{c.process.steps[s].desc}</Typography>
                  {href && (
                    <Box component={Link} href={`${prefix}${href}`} sx={{ display: 'inline-block', mt: 1, fontSize: '0.76rem', fontWeight: 800, color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>{c.more} →</Box>
                  )}
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* ── Maszyny i zakresy ── */}
      <Box component="section" sx={{ borderBottom: `1px solid ${BORDER}`, py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Eyebrow>{c.machines.eyebrow}</Eyebrow>
          <H2 mb={{ xs: 1.5, md: 2 }}>{c.machines.title}</H2>
          <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.7, color: TEXT_DIM, mb: { xs: 4, md: 5 } }}>{c.machines.lead}</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, 1fr)' }, gap: 2 }}>
            {c.machines.groups.map((g) => (
              <Box key={g.id} sx={{ display: 'flex', flexDirection: 'column', p: { xs: 2.5, md: 3 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `3px solid ${ACCENT}`, borderRadius: '4px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.25 }}>
                  <GroupIcon id={g.id} />
                  <Typography component="h3" sx={{ fontSize: '1.08rem', fontWeight: 800, color: 'var(--dim-85)', lineHeight: 1.3 }}>{g.name}</Typography>
                </Box>
                <Typography sx={{ fontSize: '0.86rem', lineHeight: 1.65, color: TEXT_DIM, mb: 2 }}>{g.intro}</Typography>
                <Box component="dl" sx={{ m: 0, borderTop: `1px solid ${BORDER}` }}>
                  {g.rows.map((r) => (
                    <Box key={r.label} sx={{ py: 1.1, borderBottom: `1px solid ${BORDER}` }}>
                      <Box component="dt" sx={{ fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.04em', color: 'var(--dim-55)', mb: 0.25 }}>{r.label}</Box>
                      <Box component="dd" sx={{ m: 0, fontSize: '0.88rem', fontWeight: 700, color: 'var(--dim-85)', lineHeight: 1.45 }}>{r.value}</Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
          <Typography sx={{ fontSize: '0.78rem', lineHeight: 1.6, color: 'var(--dim-55)', mt: 2 }}>{c.machines.note}</Typography>
        </Container>
      </Box>

      {/* ── Pakowanie robotem + realizacje ── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 3fr' }, gap: { xs: 4, md: 7 }, alignItems: 'start' }}>
            <Box>
              <Eyebrow>{c.robot.eyebrow}</Eyebrow>
              <Typography component="h2" sx={{ fontSize: { xs: '1.35rem', md: '1.7rem' }, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.25, mb: 1.5 }}>{c.robot.title}</Typography>
              <Typography sx={{ fontSize: '0.92rem', lineHeight: 1.75, color: TEXT_DIM, mb: 2 }}>{c.robot.text}</Typography>
              <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0.75, mb: 2.5 }}>
                {c.robot.points.map((p) => (
                  <Box component="li" key={p} sx={{ display: 'flex', gap: 1, fontSize: '0.88rem', color: 'var(--dim-85)', fontWeight: 600 }}>
                    <Box component="span" aria-hidden="true" sx={{ color: ACCENT }}>✓</Box>{p}
                  </Box>
                ))}
              </Box>
              <Box component={Link} href={`${prefix}/maszyny/madejpak/chwytaki-i-manipulatory`} sx={{ fontSize: '0.84rem', fontWeight: 800, color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>{c.robot.link} →</Box>
            </Box>
            <Box>
              <Typography sx={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dim-55)', mb: 1.25 }}>{c.robot.casesTitle}</Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 1.5 }}>
                {refs.map((r) => (
                  <Box key={r.slug} component={Link} href={r.href} sx={{ display: 'flex', flexDirection: 'column', bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden', textDecoration: 'none', '&:hover': { borderColor: ACCENT } }}>
                    <Box sx={{ position: 'relative', height: 88, bgcolor: r.logoOnDark ? '#1d1d21' : '#fff', borderBottom: `1px solid ${BORDER}` }}>
                      <Image src={r.logo} alt={r.klient} fill sizes="220px" style={{ objectFit: 'contain', padding: 16 }} />
                      {r.video && <Box sx={{ position: 'absolute', top: 8, right: 8, px: 0.9, py: 0.3, bgcolor: 'rgba(0,0,0,0.72)', color: '#fff', borderRadius: '3px', fontSize: '0.66rem', fontWeight: 800 }}>▶ {c.robot.video}</Box>}
                    </Box>
                    <Box sx={{ p: 1.5, flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography sx={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--dim-85)', lineHeight: 1.4, mb: 0.75, flex: 1 }}>{r.tytul}</Typography>
                      <Typography sx={{ fontSize: '0.74rem', fontWeight: 800, color: ACCENT }}>{c.robot.see} →</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Dlaczego MadejPak ── */}
      <Box component="section" sx={{ borderBottom: `1px solid ${BORDER}`, py: { xs: 7, md: 9 } }}>
        <Container maxWidth="lg">
          <Eyebrow>{c.why.eyebrow}</Eyebrow>
          <H2>{c.why.title}</H2>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 1.5 }}>
            {c.why.items.map((w) => (
              <Box key={w.title} sx={{ p: { xs: 2.25, md: 2.75 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
                <Typography component="h3" sx={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--dim-85)', mb: 0.75 }}>{w.title}</Typography>
                <Typography sx={{ fontSize: '0.86rem', lineHeight: 1.65, color: TEXT_DIM }}>{w.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── FAQ ── */}
      <Box component="section" sx={{ borderBottom: `1px solid ${BORDER}`, py: { xs: 7, md: 10 } }}>
        <Container maxWidth="md">
          <Eyebrow>{c.faq.eyebrow}</Eyebrow>
          <H2>{c.faq.title}</H2>
          <Box sx={{ borderTop: `1px solid ${BORDER}` }}>
            {c.faq.items.map((f) => (
              <Box
                key={f.q}
                component="details"
                sx={{
                  borderBottom: `1px solid ${BORDER}`,
                  '& summary': { listStyle: 'none', cursor: 'pointer', py: 2, pr: 4, position: 'relative', fontSize: '0.98rem', fontWeight: 700, color: 'var(--dim-85)' },
                  '& summary::-webkit-details-marker': { display: 'none' },
                  '& summary::after': { content: '"+"', position: 'absolute', right: 4, top: 14, fontSize: '1.3rem', color: ACCENT, fontWeight: 400 },
                  '&[open] summary::after': { content: '"−"' },
                }}
              >
                <summary>{f.q}</summary>
                <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.75, color: TEXT_DIM, pb: 2.25 }}>{f.a}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Zapytanie ── */}
      <Box id="zapytanie" component="section" sx={{ scrollMarginTop: '80px', bgcolor: BG_ALT, py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 3fr' }, gap: { xs: 3, md: 7 }, alignItems: 'start' }}>
            <Box>
              <Eyebrow>{c.form.eyebrow}</Eyebrow>
              <Typography component="h2" sx={{ fontSize: { xs: '1.45rem', md: '2rem' }, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, mb: 1.5 }}>{c.form.title}</Typography>
              <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.75, color: TEXT_DIM }}>{c.form.text}</Typography>
            </Box>
            <CartoningInquiry
              lang={lang}
              labels={c.form}
              needs={CART_STAGES.map((s) => ({ id: s, label: c.form.needs[s] }))}
            />
          </Box>
        </Container>
      </Box>

      {/* ── Breadcrumb ── */}
      <Box sx={{ bgcolor: BG_ALT, borderTop: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box component="nav" aria-label="Breadcrumb" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, py: 2, fontSize: '0.78rem', color: 'var(--dim-55)' }}>
            <Box component={Link} href={prefix || '/'} sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: ACCENT } }}>{c.breadcrumb.home}</Box>
            <span aria-hidden="true">/</span>
            <Box component={Link} href={`${prefix}/maszyny`} sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: ACCENT } }}>{c.breadcrumb.machines}</Box>
            <span aria-hidden="true">/</span>
            <Box component="span" sx={{ color: 'var(--dim-75)' }}>{c.breadcrumb.current}</Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
