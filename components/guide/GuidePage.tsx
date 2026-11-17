import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { Metadata } from 'next';
import { SITE_URL, COMPANY } from '@/lib/seo.config';
import { GUIDE_COPY, GUIDE_PUBLISHED, type GuideLang } from '@/data/guideData';

const ACCENT    = '#E8610A';
const BORDER    = 'var(--border)';
const BG_ALT    = 'var(--bg-alt)';
const BG_CARD   = 'var(--bg-card)';
const TEXT_DIM  = 'var(--dim-72)';
// Rendery maszyn MadejPak są celowo ciemne — zawsze na stałym ciemnym tle (patrz CLAUDE.md).
const RENDER_BG = '#111113';

const prefixOf = (lang: GuideLang) => (lang === 'en' ? '/en' : '');
const pageUrl = (lang: GuideLang) => `${SITE_URL}${prefixOf(lang)}/poradnik`;

export function guideMetadata(lang: GuideLang): Metadata {
  const m = GUIDE_COPY[lang].meta;
  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    alternates: {
      canonical: pageUrl(lang),
      languages: { pl: pageUrl('pl'), en: pageUrl('en'), 'x-default': pageUrl('pl') },
    },
    openGraph: {
      type: 'article',
      url: pageUrl(lang),
      title: m.ogTitle,
      description: m.description,
      images: [{ url: `${SITE_URL}/images/palletizing/og-paletyzacja.jpg`, width: 1200, height: 630, alt: m.ogTitle }],
      locale: lang === 'en' ? 'en_US' : 'pl_PL',
    },
  };
}

export default function GuidePage({ lang }: { lang: GuideLang }) {
  const c = GUIDE_COPY[lang];
  const prefix = prefixOf(lang);
  const org = { '@type': 'Organization', name: COMPANY.name, url: SITE_URL };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: c.h1,
        description: c.meta.description,
        inLanguage: lang === 'en' ? 'en' : 'pl',
        datePublished: GUIDE_PUBLISHED,
        dateModified: GUIDE_PUBLISHED,
        author: org,
        publisher: org,
        mainEntityOfPage: pageUrl(lang),
        image: `${SITE_URL}/images/palletizing/og-paletyzacja.jpg`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: c.sections.map((s) => ({ '@type': 'Question', name: s.question, acceptedAnswer: { '@type': 'Answer', text: s.short } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'MadejPak', item: `${SITE_URL}${prefix || '/'}` },
          { '@type': 'ListItem', position: 2, name: c.breadcrumb.current, item: pageUrl(lang) },
        ],
      },
    ],
  };

  return (
    <Box component="main" sx={{ bgcolor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Box sx={{ height: { xs: 60, md: 72 } }} />

      {/* ── Hero + spis treści ── */}
      <Box component="section" sx={{ borderBottom: `1px solid ${BORDER}`, py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 1.5 }}>{c.eyebrow}</Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.05rem', md: '2.9rem' }, fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em', color: 'var(--dim-85)', mb: 2.5, maxWidth: 820 }}>
            {c.h1}
          </Typography>
          <Typography sx={{ fontSize: { xs: '1.02rem', md: '1.12rem' }, lineHeight: 1.75, color: TEXT_DIM, mb: 1, maxWidth: 760 }}>{c.lead}</Typography>
          <Typography sx={{ fontSize: '0.8rem', color: 'var(--dim-55)', mb: { xs: 4, md: 5 } }}>{c.updated}</Typography>

          <Box component="nav" aria-label={c.tocTitle}>
            <Typography component="h2" sx={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dim-55)', mb: 1.5 }}>{c.tocTitle}</Typography>
            <Box component="ol" sx={{ m: 0, p: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 1 }}>
              {c.sections.map((s, i) => (
                <Box component="li" key={s.id}>
                  <Box component="a" href={`#${s.id}`} sx={{ display: 'flex', gap: 1.5, alignItems: 'baseline', p: 1.5, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', textDecoration: 'none', color: 'var(--dim-85)', fontSize: '0.98rem', fontWeight: 600, '&:hover': { borderColor: ACCENT, color: ACCENT } }}>
                    <Box component="span" sx={{ color: ACCENT, fontWeight: 800, minWidth: 22 }}>{i + 1}.</Box>{s.question}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Sekcje ── */}
      {c.sections.map((s, i) => (
        <Box key={s.id} id={s.id} component="section" sx={{ scrollMarginTop: '80px', bgcolor: i % 2 === 0 ? BG_ALT : 'var(--bg)', borderBottom: `1px solid ${BORDER}`, py: { xs: 6, md: 8 } }}>
          <Container maxWidth="lg">
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: s.image ? '3fr 2fr' : '1fr' }, gap: { xs: 3, md: 6 }, alignItems: 'start' }}>
              <Box sx={{ maxWidth: 780, minWidth: 0 }}>
                <Typography sx={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', color: ACCENT, mb: 1 }}>{String(i + 1).padStart(2, '0')}</Typography>
                <Typography component="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.8rem' }, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.25, color: 'var(--text)', mb: 2 }}>{s.question}</Typography>
                <Box sx={{ p: { xs: 2, md: 2.5 }, mb: 2.5, bgcolor: BG_CARD, borderLeft: `4px solid ${ACCENT}`, borderRadius: '2px' }}>
                  <Typography sx={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, mb: 0.75 }}>{c.shortLabel}</Typography>
                  <Typography sx={{ fontSize: { xs: '1.02rem', md: '1.08rem' }, lineHeight: 1.7, fontWeight: 600, color: 'var(--dim-85)' }}>{s.short}</Typography>
                </Box>
                {s.body.map((p) => (
                  <Typography key={p} sx={{ fontSize: '1rem', lineHeight: 1.8, color: TEXT_DIM, mb: 1.75 }}>{p}</Typography>
                ))}
                {s.table && (
                  <Box sx={{ overflowX: 'auto', mb: 2.5 }}>
                    <Box component="table" sx={{ width: '100%', minWidth: 520, borderCollapse: 'collapse', bgcolor: BG_CARD, border: `1px solid ${BORDER}`, fontSize: '0.95rem' }}>
                      <thead>
                        <tr>
                          {s.table.head.map((h, hi) => (
                            <Box component="th" key={hi} scope="col" sx={{ textAlign: 'left', p: 1.5, borderBottom: `2px solid ${ACCENT}`, fontWeight: 800, color: 'var(--dim-85)' }}>{h}</Box>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {s.table.rows.map((r) => (
                          <tr key={r[0]}>
                            <Box component="th" scope="row" sx={{ textAlign: 'left', p: 1.5, borderTop: `1px solid ${BORDER}`, fontWeight: 700, color: 'var(--dim-75)' }}>{r[0]}</Box>
                            <Box component="td" sx={{ p: 1.5, borderTop: `1px solid ${BORDER}`, color: TEXT_DIM }}>{r[1]}</Box>
                            <Box component="td" sx={{ p: 1.5, borderTop: `1px solid ${BORDER}`, color: TEXT_DIM }}>{r[2]}</Box>
                          </tr>
                        ))}
                      </tbody>
                    </Box>
                  </Box>
                )}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1, mt: 1 }}>
                  <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--dim-55)', mr: 0.5 }}>{c.seeAlso}:</Typography>
                  {s.links.map((l) => (
                    <Box key={l.href} component={Link} href={`${prefix}${l.href}`} sx={{ px: 1.5, py: 0.75, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '3px', fontSize: '0.9rem', fontWeight: 700, color: ACCENT, textDecoration: 'none', '&:hover': { borderColor: ACCENT } }}>
                      {l.label} →
                    </Box>
                  ))}
                </Box>
              </Box>
              {s.image && (
                <Box sx={{ position: 'relative', aspectRatio: `${s.image.width} / ${s.image.height}`, bgcolor: s.image.dark ? RENDER_BG : '#fff', border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
                  <Image src={s.image.src} alt={s.image.alt} fill sizes="(max-width: 900px) 100vw, 460px" style={{ objectFit: s.image.dark ? 'cover' : 'contain', padding: s.image.dark ? 0 : 8 }} />
                </Box>
              )}
            </Box>
          </Container>
        </Box>
      ))}

      {/* ── CTA ── */}
      <Box component="section" sx={{ py: { xs: 7, md: 9 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between', gap: 3 }}>
            <Box sx={{ maxWidth: 640 }}>
              <Typography component="h2" sx={{ fontSize: { xs: '1.35rem', md: '1.7rem' }, fontWeight: 800, letterSpacing: '-0.02em', mb: 1 }}>{c.cta.title}</Typography>
              <Typography sx={{ fontSize: '1rem', lineHeight: 1.7, color: TEXT_DIM }}>{c.cta.text}</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              <Box component={Link} href={`${prefix}/kontakt`} sx={{ display: 'inline-flex', alignItems: 'center', px: 3, py: 1.4, borderRadius: '4px', bgcolor: ACCENT, color: '#fff', fontSize: '0.88rem', fontWeight: 800, textDecoration: 'none', '&:hover': { bgcolor: '#D45509' } }}>{c.cta.contact} →</Box>
              <Box component={Link} href={`${prefix}/maszyny/paletyzacja`} sx={{ display: 'inline-flex', alignItems: 'center', px: 3, py: 1.4, borderRadius: '4px', border: `1px solid ${BORDER}`, color: 'var(--dim-75)', fontSize: '0.88rem', fontWeight: 800, textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}>{c.cta.selector}</Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Breadcrumb ── */}
      <Box sx={{ bgcolor: BG_ALT, borderTop: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box component="nav" aria-label="Breadcrumb" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, py: 2, fontSize: '0.8rem', color: 'var(--dim-55)' }}>
            <Box component={Link} href={prefix || '/'} sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: ACCENT } }}>{c.breadcrumb.home}</Box>
            <span aria-hidden="true">/</span>
            <Box component="span" sx={{ color: 'var(--dim-75)' }}>{c.breadcrumb.current}</Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
