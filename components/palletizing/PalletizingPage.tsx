import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo.config';
import { REALIZACJE } from '@/data/realizacjeData';
import { REALIZACJE_EN } from '@/data/realizacjeDataEn';
import {
  CONDITION_REFERENCES, LIGHT_LOGOS, OWN_MACHINES, PRODUCT_LINE_IMAGES, PAGE_REFERENCES, PAL_COPY, PRODUCT_IDS, PRODUCTS,
  type PalLang, type RefCard,
} from '@/data/palletizingData';
import PalletizingSelector from '@/components/palletizing/PalletizingSelector';
import SelectProductButton from '@/components/palletizing/SelectProductButton';
import CaseStudyVideo from '@/components/realizacje/CaseStudyVideo';
import { MODULE_VIDEOS } from '@/data/palletizingSpec';

const ACCENT    = '#E8610A';
const BORDER    = 'var(--border)';
const BG_ALT    = 'var(--bg-alt)';
const BG_CARD   = 'var(--bg-card)';
const TEXT_DIM  = 'var(--dim-72)';
// Rendery maszyn MadejPak są celowo ciemne — zawsze na stałym ciemnym tle (patrz CLAUDE.md).
const RENDER_BG = '#111113';

const prefixOf = (lang: PalLang) => (lang === 'en' ? '/en' : '');
const pageUrl = (lang: PalLang) => `${SITE_URL}${prefixOf(lang)}/maszyny/paletyzacja`;

export function palletizingMetadata(lang: PalLang): Metadata {
  const m = PAL_COPY[lang].meta;
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
      images: [{ url: `${SITE_URL}/images/palletizing/og-paletyzacja.jpg`, width: 1200, height: 630, alt: m.ogTitle }],
      locale: lang === 'en' ? 'en_US' : 'pl_PL',
    },
  };
}

function buildRefs(lang: PalLang): Record<string, RefCard> {
  const slugs = new Set<string>([
    ...PAGE_REFERENCES,
    ...PRODUCT_IDS.flatMap((p) => PRODUCTS[p].references),
    ...Object.values(CONDITION_REFERENCES).flat(),
  ]);
  const out: Record<string, RefCard> = {};
  slugs.forEach((slug) => {
    const pl = REALIZACJE.find((r) => r.slug === slug);
    if (!pl) return;
    const en = REALIZACJE_EN.find((r) => r.slug === slug);
    out[slug] = {
      slug,
      klient: pl.klient,
      tytul: lang === 'en' && en ? en.tytul : pl.tytul,
      logo: pl.logoPath,
      video: Boolean(pl.youtubeId || pl.hasVideo),
      href: pl.status === 'pelne' ? `${prefixOf(lang)}/realizacje/${slug}` : `${prefixOf(lang)}/realizacje`,
      logoOnDark: LIGHT_LOGOS.includes(slug),
    };
  });
  return out;
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

export default function PalletizingPage({ lang }: { lang: PalLang }) {
  const c = PAL_COPY[lang];
  const prefix = prefixOf(lang);
  const refs = buildRefs(lang);

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
      ...MODULE_VIDEOS.map((v) => ({
        '@type': 'VideoObject',
        name: c.motion.videos[v.id],
        description: c.motion.descriptions[v.id],
        thumbnailUrl: [`https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`],
        uploadDate: v.uploadDate,
        duration: v.duration,
        contentUrl: `https://www.youtube.com/watch?v=${v.youtubeId}`,
        embedUrl: `https://www.youtube-nocookie.com/embed/${v.youtubeId}`,
      })),
    ],
  };

  return (
    <Box component="main" sx={{ bgcolor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Box sx={{ height: { xs: 60, md: 72 } }} />

      {/* ── Hero ── */}
      <Box component="section" sx={{ borderBottom: `1px solid ${BORDER}`, py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '3fr 2fr' }, gap: { xs: 4, md: 8 }, alignItems: 'center' }}>
            <Box>
              <Eyebrow>{c.hero.eyebrow}</Eyebrow>
              <Typography variant="h1" sx={{ fontSize: { xs: '2.05rem', md: '2.9rem' }, fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em', color: 'var(--dim-85)', mb: 2.5 }}>
                {c.hero.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.98rem', md: '1.08rem' }, lineHeight: 1.75, color: TEXT_DIM, mb: 3.5, maxWidth: 620 }}>
                {c.hero.lead}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                <Box component="a" href="#dobor" sx={{ ...buttonSx, bgcolor: ACCENT, color: '#fff', '&:hover': { bgcolor: '#D45509' } }}>{c.hero.ctaSelect} →</Box>
                <Box component="a" href="#realizacje" sx={{ ...buttonSx, border: `1px solid ${BORDER}`, color: 'var(--dim-75)', '&:hover': { borderColor: ACCENT, color: ACCENT } }}>{c.hero.ctaCases}</Box>
              </Box>
            </Box>
            <Box component="ul" sx={{ m: 0, p: { xs: 2.5, md: 3 }, listStyle: 'none', bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `3px solid ${ACCENT}`, borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {c.hero.facts.map((f) => (
                <Box component="li" key={f} sx={{ display: 'flex', gap: 1.25, alignItems: 'baseline', fontSize: '0.95rem', fontWeight: 700, color: 'var(--dim-85)' }}>
                  <Box component="span" aria-hidden="true" sx={{ color: ACCENT }}>✓</Box>{f}
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Dobór ── */}
      <PalletizingSelector lang={lang} copy={c} refs={refs} />

      {/* ── Pakiety ── */}
      <Box component="section" sx={{ borderBottom: `1px solid ${BORDER}`, py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Eyebrow>{c.packages.eyebrow}</Eyebrow>
          <H2 mb={{ xs: 1.5, md: 2 }}>{c.packages.title}</H2>
          <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.7, color: TEXT_DIM, mb: { xs: 4, md: 5 }, maxWidth: 680 }}>{c.packages.lead}</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
            {PRODUCT_IDS.map((id) => {
              const p = c.products[id];
              const names = PRODUCTS[id].references.map((s) => refs[s]?.klient).filter(Boolean);
              return (
                <Box key={id} sx={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', p: { xs: 2.5, md: 3 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `3px solid ${ACCENT}`, borderRadius: '4px' }}>
                  <Box sx={{ position: 'relative', aspectRatio: '16 / 9', mx: { xs: -2.5, md: -3 }, mt: { xs: -2.5, md: -3 }, mb: 2.25, bgcolor: PRODUCT_LINE_IMAGES[id] ? '#fff' : BG_ALT, borderBottom: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {PRODUCT_LINE_IMAGES[id] && p.line ? (
                      <Image src={PRODUCT_LINE_IMAGES[id]!.src} alt={p.line.alt} fill sizes="(max-width: 900px) 100vw, 580px" style={{ objectFit: 'contain', padding: 8 }} />
                    ) : (
                      <Box component="svg" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" sx={{ width: 84, height: 84, opacity: 0.85 }}>
                        <circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="2.5" /><path d="M12 5v2M12 17v2M5 12h2M17 12h2" />
                      </Box>
                    )}
                  </Box>
                  <Typography component="h3" sx={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--dim-85)', mb: 0.25 }}>{p.name}</Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: 'var(--dim-55)', mb: 1.5 }}>{p.examples}</Typography>
                  <Typography sx={{ fontSize: '0.88rem', lineHeight: 1.7, color: TEXT_DIM, mb: 1.75 }}>{p.intro}</Typography>
                  <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0.75, mb: 2, flex: 1 }}>
                    {p.points.map((pt) => (
                      <Box component="li" key={pt} sx={{ display: 'flex', gap: 1, fontSize: '0.84rem', color: TEXT_DIM, lineHeight: 1.5 }}>
                        <Box component="span" aria-hidden="true" sx={{ color: ACCENT, fontWeight: 800 }}>✓</Box>{pt}
                      </Box>
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 1.5 }}>
                    {names.length > 0 ? (
                      <Typography sx={{ fontSize: '0.76rem', color: 'var(--dim-55)' }}>{c.packages.refsLabel}: {names.join(', ')}</Typography>
                    ) : <span />}
                    <SelectProductButton product={id} label={c.packages.cta} />
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* ── Własna produkcja ── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Eyebrow>{c.own.eyebrow}</Eyebrow>
          <H2 mb={{ xs: 1.5, md: 2 }}>{c.own.title}</H2>
          <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.7, color: TEXT_DIM, mb: { xs: 4, md: 5 }, maxWidth: 720 }}>{c.own.lead}</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '3fr 2fr' }, gap: { xs: 4, lg: 5 } }}>
            <Box>
              <Typography component="h3" sx={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dim-55)', mb: 1.5 }}>{c.own.ownTitle}</Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.5, mb: 2 }}>
                {OWN_MACHINES.map((m) => (
                  <Box key={m.id} component={Link} href={`${prefix}/maszyny/madejpak/${m.id}`} sx={{ display: 'flex', flexDirection: 'column', bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden', textDecoration: 'none', '&:hover': { borderColor: ACCENT } }}>
                    <Box sx={{ position: 'relative', aspectRatio: '16 / 9', bgcolor: RENDER_BG }}>
                      <Image src={m.image} alt={c.own.machines[m.id].name} fill sizes="(max-width: 600px) 100vw, 340px" style={{ objectFit: 'cover' }} />
                    </Box>
                    <Box sx={{ p: 1.75 }}>
                      <Typography sx={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--dim-85)', mb: 0.4 }}>{c.own.machines[m.id].name} →</Typography>
                      <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.55, color: TEXT_DIM }}>{c.own.machines[m.id].desc}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {c.own.ownExtra.map((x) => (
                  <Box component="li" key={x} sx={{ px: 1.5, py: 0.75, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '3px', fontSize: '0.82rem', fontWeight: 600, color: 'var(--dim-75)' }}>✓ {x}</Box>
                ))}
              </Box>
            </Box>
            <Box>
              <Typography component="h3" sx={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dim-55)', mb: 1.5 }}>{c.own.partnerTitle}</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                {c.own.partners.map((p) => {
                  const inner = (
                    <>
                      <Typography sx={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--dim-85)' }}>{p.name}{p.href ? ' →' : ''}</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: TEXT_DIM, lineHeight: 1.5 }}>{p.desc}</Typography>
                    </>
                  );
                  const sx = { display: 'block', p: 2, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', textDecoration: 'none' };
                  return p.href
                    ? <Box key={p.name} component={Link} href={p.href} sx={{ ...sx, '&:hover': { borderColor: ACCENT } }}>{inner}</Box>
                    : <Box key={p.name} sx={sx}>{inner}</Box>;
                })}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Moduły w ruchu ── */}
      <Box id="w-ruchu" component="section" sx={{ scrollMarginTop: '80px', borderBottom: `1px solid ${BORDER}`, py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Eyebrow>{c.motion.eyebrow}</Eyebrow>
          <H2 mb={{ xs: 1.5, md: 2 }}>{c.motion.title}</H2>
          <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.7, color: TEXT_DIM, mb: { xs: 4, md: 5 } }}>{c.motion.lead}</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
            {MODULE_VIDEOS.map((m) => (
              <Box key={m.id}>
                <CaseStudyVideo youtubeId={m.youtubeId} title={c.motion.videos[m.id]} />
                <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 1, mt: 1.25 }}>
                  <Typography component="h3" sx={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--dim-85)' }}>{c.motion.videos[m.id]}</Typography>
                  <Box component={Link} href={`${prefix}/maszyny/madejpak/${m.id}`} sx={{ flexShrink: 0, fontSize: '0.8rem', fontWeight: 800, color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>{c.motion.more} →</Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Realizacje ── */}
      <Box id="realizacje" component="section" sx={{ scrollMarginTop: '80px', borderBottom: `1px solid ${BORDER}`, py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Eyebrow>{c.cases.eyebrow}</Eyebrow>
          <H2 mb={{ xs: 1.5, md: 2 }}>{c.cases.title}</H2>
          <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.7, color: TEXT_DIM, mb: { xs: 4, md: 5 } }}>{c.cases.lead}</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 1.5 }}>
            {PAGE_REFERENCES.map((s) => refs[s]).filter(Boolean).map((r) => (
              <Box key={r.slug} component={Link} href={r.href} sx={{ display: 'flex', flexDirection: 'column', bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden', textDecoration: 'none', '&:hover': { borderColor: ACCENT } }}>
                <Box sx={{ position: 'relative', height: 96, bgcolor: r.logoOnDark ? '#1d1d21' : '#fff', borderBottom: `1px solid ${BORDER}` }}>
                  <Image src={r.logo} alt={r.klient} fill sizes="240px" style={{ objectFit: 'contain', padding: 18 }} />
                  {r.video && (
                    <Box sx={{ position: 'absolute', top: 8, right: 8, px: 0.9, py: 0.3, bgcolor: 'rgba(0,0,0,0.72)', color: '#fff', borderRadius: '3px', fontSize: '0.66rem', fontWeight: 800 }}>▶ {c.cases.video}</Box>
                  )}
                </Box>
                <Box sx={{ p: 1.75, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--dim-85)', lineHeight: 1.4, mb: 1, flex: 1 }}>{r.tytul}</Typography>
                  <Typography sx={{ fontSize: '0.76rem', fontWeight: 800, color: ACCENT }}>{c.cases.see} →</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Zasada działania ── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 7, md: 9 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '280px 1fr' }, gap: { xs: 3, md: 8 }, alignItems: 'start' }}>
            <Box>
              <Eyebrow>{c.process.eyebrow}</Eyebrow>
              <Typography component="h2" sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 800, lineHeight: 1.25, letterSpacing: '-0.02em' }}>{c.process.title}</Typography>
            </Box>
            <Box component="ol" sx={{ m: 0, p: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 2.5 }}>
              {c.process.steps.map((s, i) => (
                <Box component="li" key={s.title}>
                  <Typography sx={{ fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.12em', color: ACCENT, mb: 0.5 }}>{String(i + 1).padStart(2, '0')}</Typography>
                  <Typography component="h3" sx={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--text)', mb: 0.5 }}>{s.title}</Typography>
                  <Typography sx={{ fontSize: '0.84rem', lineHeight: 1.65, color: TEXT_DIM }}>{s.desc}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Integracja z linią ── */}
      <Box component="section" sx={{ borderBottom: `1px solid ${BORDER}`, py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '280px 1fr' }, gap: { xs: 3, md: 8 }, alignItems: 'start' }}>
            <Box>
              <Eyebrow>{c.integration.eyebrow}</Eyebrow>
              <Typography component="h2" sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 800, lineHeight: 1.25, letterSpacing: '-0.02em', mb: 1.5 }}>{c.integration.title}</Typography>
              <Typography sx={{ fontSize: '0.86rem', lineHeight: 1.7, color: TEXT_DIM }}>{c.integration.lead}</Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.5 }}>
              {c.integration.items.map((it) => (
                <Box key={it.title} sx={{ p: { xs: 2.25, md: 2.5 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
                  <Typography component="h3" sx={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text)', mb: 0.75 }}>{it.title}</Typography>
                  <Typography sx={{ fontSize: '0.83rem', lineHeight: 1.65, color: TEXT_DIM }}>{it.desc}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Jak pracujemy ── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Eyebrow>{c.role.eyebrow}</Eyebrow>
          <H2>{c.role.title}</H2>
          <Box component="ol" sx={{ m: 0, p: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(5, 1fr)' }, gap: 1.5 }}>
            {c.role.steps.map((r, i) => (
              <Box component="li" key={r.title} sx={{ p: { xs: 2.25, md: 2.5 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `2px solid ${ACCENT}`, borderRadius: '4px' }}>
                <Typography sx={{ fontSize: '0.68rem', fontWeight: 800, color: ACCENT, letterSpacing: '0.12em', mb: 1 }}>{String(i + 1).padStart(2, '0')}</Typography>
                <Typography component="h3" sx={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text)', mb: 0.75, lineHeight: 1.3 }}>{r.title}</Typography>
                <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.65, color: TEXT_DIM }}>{r.desc}</Typography>
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

      {/* ── CTA ── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, py: { xs: 7, md: 9 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between', gap: 3 }}>
            <Box sx={{ maxWidth: 640 }}>
              <Typography component="h2" sx={{ fontSize: { xs: '1.35rem', md: '1.7rem' }, fontWeight: 800, letterSpacing: '-0.02em', mb: 1 }}>{c.cta.title}</Typography>
              <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.7, color: TEXT_DIM }}>{c.cta.text}</Typography>
            </Box>
            <Box component="a" href="#dobor" sx={{ ...buttonSx, flexShrink: 0, bgcolor: ACCENT, color: '#fff', '&:hover': { bgcolor: '#D45509' } }}>{c.cta.button} →</Box>
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
