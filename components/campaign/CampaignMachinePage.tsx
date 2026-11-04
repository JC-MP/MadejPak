import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { Metadata } from 'next';
import { COMPANY, SITE_URL } from '@/lib/seo.config';
import CaseStudyVideo from '@/components/realizacje/CaseStudyVideo';
import CampaignLeadForm from '@/components/campaign/CampaignLeadForm';
import PromoBanner from '@/components/campaign/PromoBanner';
import { PROMO_COPY, type CampaignLang } from '@/data/campaignData';
import type { CampaignMachine } from '@/data/campaignMachines';

const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
const BG_ALT   = 'var(--bg-alt)';
const BG_CARD  = 'var(--bg-card)';
const TEXT_DIM = 'var(--dim-72)';
const PHONE_LABEL = '+48 123 454 397';

const UI = {
  pl: {
    prefix: '',
    eyebrow: 'Polecamy',
    ask: 'Zapytaj o ofertę',
    howEyebrow: 'Technologia',
    howTitle: 'Jak to działa',
    benefitsEyebrow: 'Korzyści',
    benefitsTitle: 'Co zyskuje Twoja produkcja',
    appsEyebrow: 'Zastosowania',
    appsTitle: 'Dla jakich produktów',
    specsEyebrow: 'Parametry',
    specsTitle: 'Podstawowe dane techniczne',
    galleryEyebrow: 'Zdjęcia',
    galleryTitle: 'Maszyna z bliska',
    videoEyebrow: 'Wideo',
    videoTitle: 'Zobacz technologię w pracy',
    serviceEyebrow: 'MadejPak',
    serviceTitle: 'Serwis i integracja po naszej stronie',
    serviceLead: 'Od 2000 roku projektujemy i integrujemy linie pakujące. Nie kończymy na dostawie maszyny.',
    service: [
      { title: 'Dobór do produktu', desc: 'Sprawdzamy produkt, opakowanie i wymaganą wydajność, zanim przedstawimy ofertę.' },
      { title: 'Integracja z linią', desc: 'Podawanie produktu, transport, kontrola, kartonowanie i paletyzacja — jeden partner za całą linię.' },
      { title: 'Własny serwis', desc: 'Własny zespół serwisowy, wsparcie zdalne i pomoc w doborze części zamiennych.' },
    ],
    serviceLink: 'Serwis MadejPak',
    integrationLink: 'Integracja linii pakujących',
    serviceHref: '/serwis',
    integrationHref: '/rozwiazania/integracja-linii-pakujacych',
    otherEyebrow: 'Druga maszyna w tej akcji',
    otherCta: 'Poznaj rozwiązanie',
    crumbMachines: 'Maszyny',
    locale: 'pl_PL',
  },
  en: {
    prefix: '/en',
    eyebrow: 'Featured',
    ask: 'Ask for an offer',
    howEyebrow: 'Technology',
    howTitle: 'How it works',
    benefitsEyebrow: 'Benefits',
    benefitsTitle: 'What your production gains',
    appsEyebrow: 'Applications',
    appsTitle: 'What it is suited to',
    specsEyebrow: 'Specifications',
    specsTitle: 'Basic technical data',
    galleryEyebrow: 'Photos',
    galleryTitle: 'A closer look',
    videoEyebrow: 'Video',
    videoTitle: 'See the technology at work',
    serviceEyebrow: 'MadejPak',
    serviceTitle: 'Service and integration on our side',
    serviceLead: 'We have been designing and integrating packaging lines since 2000. We do not stop at delivering the machine.',
    service: [
      { title: 'Matched to your product', desc: 'We check the product, pack and required output before making an offer.' },
      { title: 'Line integration', desc: 'Product infeed, conveying, inspection, case packing and palletising — one partner for the whole line.' },
      { title: 'In-house service', desc: 'Our own service team, remote support and help with selecting spare parts.' },
    ],
    serviceLink: 'MadejPak service',
    integrationLink: 'Packaging line integration',
    serviceHref: '/en/serwis',
    integrationHref: '/en/rozwiazania/integracja-linii-pakujacych',
    otherEyebrow: 'Also in this campaign',
    otherCta: 'Explore the solution',
    crumbMachines: 'Machines',
    locale: 'en_US',
  },
} as const;

function pageUrl(slug: string, lang: CampaignLang) {
  return `${SITE_URL}${UI[lang].prefix}/maszyny/${slug}`;
}

export function campaignMetadata(machine: CampaignMachine, lang: CampaignLang): Metadata {
  const copy = machine.content[lang];
  const url = pageUrl(machine.slug, lang);
  const description = machine.promo ? `${copy.metaDescription} ${PROMO_COPY[lang].label}.` : copy.metaDescription;
  return {
    title: copy.metaTitle,
    description,
    alternates: {
      canonical: url,
      languages: {
        pl: pageUrl(machine.slug, 'pl'),
        en: pageUrl(machine.slug, 'en'),
        'x-default': pageUrl(machine.slug, 'pl'),
      },
    },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      url,
      siteName: 'MadejPak',
      title: `${copy.metaTitle} | MadejPak`,
      description,
      images: [{ url: `${SITE_URL}${machine.image.src}`, width: machine.image.width, height: machine.image.height, alt: copy.imageAlt }],
      locale: UI[lang].locale,
    },
  };
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Box sx={{ mb: { xs: 3.5, md: 5 }, maxWidth: 720 }}>
      <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 1.5 }}>
        {eyebrow}
      </Typography>
      <Typography component="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.85rem' }, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, color: 'var(--text)' }}>
        {title}
      </Typography>
    </Box>
  );
}

const buttonSx = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', px: 3, py: 1.4,
  borderRadius: '4px', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.04em',
  textDecoration: 'none', transition: 'background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease',
} as const;

export default function CampaignMachinePage({
  machine,
  other,
  lang,
}: {
  machine: CampaignMachine;
  other: CampaignMachine;
  lang: CampaignLang;
}) {
  const copy = machine.content[lang];
  const t = UI[lang];
  const promo = machine.promo ? PROMO_COPY[lang] : null;
  const url = pageUrl(machine.slug, lang);
  const machinesPath = `${t.prefix}/maszyny`;

  // Bez schematu Product: nie publikujemy cen ani opinii, a Google wymaga
  // dla Product pól offers / review / aggregateRating.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'MadejPak', item: `${SITE_URL}${t.prefix}` },
          { '@type': 'ListItem', position: 2, name: t.crumbMachines, item: `${SITE_URL}${machinesPath}` },
          { '@type': 'ListItem', position: 3, name: machine.name, item: url },
        ],
      },
      ...machine.videos.map((v, i) => ({
        '@type': 'VideoObject',
        name: copy.videos[i].title,
        description: copy.videos[i].description,
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

      {/* ── Baner akcji promocyjnej ── */}
      {promo && <PromoBanner lang={lang} />}

      {/* ── Hero ── */}
      <Box component="section" sx={{ borderBottom: `1px solid ${BORDER}`, py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '5fr 6fr' }, gap: { xs: 4, md: 7 }, alignItems: 'center' }}>
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                {t.eyebrow}
              </Typography>
              <Typography variant="h1" sx={{ fontSize: { xs: '2.1rem', md: '2.9rem' }, fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em', color: 'var(--dim-85)', mb: 2.5 }}>
                {machine.name}
                <Box component="span" sx={{ display: 'block', mt: 1.5, fontSize: { xs: '1.05rem', md: '1.2rem' }, fontWeight: 700, lineHeight: 1.35, letterSpacing: 0, color: ACCENT }}>
                  {copy.tagline}
                </Box>
              </Typography>
              <Typography sx={{ fontSize: '0.98rem', lineHeight: 1.8, color: TEXT_DIM, mb: 3.5 }}>
                {copy.lead}
              </Typography>
              {promo && (
                <Typography sx={{ fontSize: '0.98rem', fontWeight: 800, lineHeight: 1.45, color: 'var(--dim-85)', borderLeft: `3px solid ${ACCENT}`, pl: 1.5, mb: 3 }}>
                  {promo.note}
                </Typography>
              )}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 2.5 }}>
                <Box component="a" href="#zapytanie" sx={{ ...buttonSx, bgcolor: ACCENT, color: '#fff', '&:hover': { bgcolor: '#D45509' } }}>
                  {promo?.ask ?? t.ask}
                </Box>
                <Box component="a" href={`tel:${COMPANY.phone}`} sx={{ ...buttonSx, border: `1px solid ${BORDER}`, color: 'var(--dim-75)', '&:hover': { borderColor: ACCENT, color: ACCENT } }}>
                  {PHONE_LABEL}
                </Box>
              </Box>
              <Typography sx={{ fontSize: '0.78rem', lineHeight: 1.6, color: 'var(--dim-55)' }}>
                {copy.maker}
              </Typography>
            </Box>
            <Box component="figure" sx={{ m: 0 }}>
              <Box sx={{ position: 'relative', aspectRatio: '16 / 11', bgcolor: '#fff', border: `1px solid ${BORDER}`, borderRadius: '6px', overflow: 'hidden' }}>
                <Image src={machine.image.src} alt={copy.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 620px" style={{ objectFit: 'contain', padding: 10 }} />
              </Box>
              {copy.imageNote && (
                <Typography component="figcaption" sx={{ fontSize: '0.72rem', color: 'var(--dim-55)', mt: 1 }}>{copy.imageNote}</Typography>
              )}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Jak to działa + zastosowania ── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '3fr 2fr' }, gap: { xs: 5, md: 9 } }}>
            <Box>
              <SectionHead eyebrow={t.howEyebrow} title={t.howTitle} />
              {copy.how.map((p) => (
                <Typography key={p} sx={{ fontSize: '0.95rem', lineHeight: 1.85, color: TEXT_DIM, mb: 2 }}>{p}</Typography>
              ))}
            </Box>
            <Box>
              <SectionHead eyebrow={t.appsEyebrow} title={t.appsTitle} />
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {copy.applications.map((a) => (
                  <Box key={a} sx={{ px: 1.5, py: 0.75, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '3px', fontSize: '0.84rem', fontWeight: 600, color: 'var(--dim-75)' }}>
                    {a}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Korzyści ── */}
      <Box component="section" sx={{ borderBottom: `1px solid ${BORDER}`, py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <SectionHead eyebrow={t.benefitsEyebrow} title={t.benefitsTitle} />
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 2 }}>
            {copy.benefits.map((b) => (
              <Box key={b.title} sx={{ p: 3, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `2px solid ${ACCENT}`, borderRadius: '4px' }}>
                <Typography component="h3" sx={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--dim-85)', mb: 1 }}>{b.title}</Typography>
                <Typography sx={{ fontSize: '0.86rem', lineHeight: 1.7, color: TEXT_DIM }}>{b.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Parametry + zdjęcia ── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '3fr 2fr' }, gap: { xs: 5, md: 7 }, alignItems: 'start' }}>
            <Box sx={{ minWidth: 0 }}>
              <SectionHead eyebrow={t.specsEyebrow} title={t.specsTitle} />
              <Box component="dl" sx={{ m: 0, border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden', bgcolor: BG_CARD }}>
                {copy.specs.map((s, i) => (
                  <Box key={s.label} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '2fr 3fr' }, gap: { xs: 0.25, sm: 2 }, px: 2.5, py: 1.5, borderBottom: i < copy.specs.length - 1 ? `1px solid ${BORDER}` : 'none' }}>
                    <Box component="dt" sx={{ fontSize: '0.84rem', color: TEXT_DIM }}>{s.label}</Box>
                    <Box component="dd" sx={{ m: 0, fontSize: '0.88rem', fontWeight: 700, color: 'var(--dim-85)', lineHeight: 1.5 }}>{s.value}</Box>
                  </Box>
                ))}
              </Box>
              <Typography sx={{ fontSize: '0.76rem', lineHeight: 1.6, color: 'var(--dim-55)', mt: 1.5 }}>{copy.specsNote}</Typography>
            </Box>
            <Box sx={{ minWidth: 0 }}>
              <SectionHead eyebrow={t.galleryEyebrow} title={t.galleryTitle} />
              <Box sx={{ display: 'grid', gap: 2 }}>
                {machine.gallery.map((g, i) => (
                  <Box key={g.src} sx={{ position: 'relative', aspectRatio: `${g.width} / ${g.height}`, bgcolor: '#fff', border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
                    <Image src={g.src} alt={copy.galleryAlts[i]} fill sizes="(max-width: 900px) 100vw, 440px" style={{ objectFit: 'cover' }} />
                  </Box>
                ))}
              </Box>
              {copy.galleryNote && (
                <Typography sx={{ fontSize: '0.72rem', color: 'var(--dim-55)', mt: 1 }}>{copy.galleryNote}</Typography>
              )}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Wideo ── */}
      {machine.videos.length > 0 && (
        <Box component="section" sx={{ borderBottom: `1px solid ${BORDER}`, py: { xs: 7, md: 10 } }}>
          <Container maxWidth="lg">
            <SectionHead eyebrow={t.videoEyebrow} title={t.videoTitle} />
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: machine.videos.length > 1 ? '1fr 1fr' : '1fr' }, gap: 3, maxWidth: machine.videos.length > 1 ? 'none' : 820 }}>
              {machine.videos.map((v, i) => (
                <Box key={v.youtubeId}>
                  <CaseStudyVideo youtubeId={v.youtubeId} title={copy.videos[i].title} />
                  <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.6, color: TEXT_DIM, mt: 1.25 }}>{copy.videos[i].caption}</Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      )}

      {/* ── Serwis i integracja ── */}
      <Box component="section" sx={{ borderBottom: `1px solid ${BORDER}`, py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <SectionHead eyebrow={t.serviceEyebrow} title={t.serviceTitle} />
          <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: TEXT_DIM, mt: { xs: -1.5, md: -2.5 }, mb: 3.5, maxWidth: 720 }}>
            {t.serviceLead}
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2, mb: 3 }}>
            {t.service.map((s) => (
              <Box key={s.title} sx={{ p: 3, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
                <Typography component="h3" sx={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--dim-85)', mb: 1 }}>{s.title}</Typography>
                <Typography sx={{ fontSize: '0.86rem', lineHeight: 1.7, color: TEXT_DIM }}>{s.desc}</Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5 }}>
            {[{ href: t.serviceHref, label: t.serviceLink }, { href: t.integrationHref, label: t.integrationLink }].map((l) => (
              <Box key={l.href} component={Link} href={l.href} sx={{ fontSize: '0.84rem', fontWeight: 700, color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                {l.label} →
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <CampaignLeadForm machine={machine.name} promo={machine.promo} lang={lang} />

      {/* ── Druga maszyna w akcji ── */}
      <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box
            component={Link}
            href={`${t.prefix}/maszyny/${other.slug}`}
            sx={{
              display: 'grid', gridTemplateColumns: { xs: '120px 1fr', sm: '220px 1fr' }, alignItems: 'center', gap: { xs: 2, sm: 3.5 },
              p: { xs: 2, sm: 2.5 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '6px', textDecoration: 'none',
              transition: 'border-color 0.15s ease', '&:hover': { borderColor: ACCENT },
            }}
          >
            <Box sx={{ position: 'relative', aspectRatio: '16 / 10', bgcolor: '#fff', borderRadius: '3px', overflow: 'hidden' }}>
              <Image src={other.image.src} alt={other.content[lang].imageAlt} fill sizes="220px" style={{ objectFit: 'contain', padding: 4 }} />
            </Box>
            <Box sx={{ minWidth: 0 }}>
              <Typography sx={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, mb: 0.5 }}>{t.otherEyebrow}</Typography>
              <Typography sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, fontWeight: 800, color: 'var(--dim-85)', mb: 0.25 }}>{other.name}</Typography>
              <Typography sx={{ fontSize: '0.86rem', color: TEXT_DIM, mb: 0.75 }}>{other.content[lang].tagline}</Typography>
              <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: ACCENT }}>{t.otherCta} →</Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Breadcrumb ── */}
      <Box sx={{ bgcolor: BG_ALT, borderTop: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box component="nav" aria-label="Breadcrumb" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, py: 2, fontSize: '0.76rem', color: 'var(--dim-55)' }}>
            <Box component={Link} href={t.prefix || '/'} sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: ACCENT } }}>MadejPak</Box>
            <span aria-hidden="true">/</span>
            <Box component={Link} href={machinesPath} sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: ACCENT } }}>{t.crumbMachines}</Box>
            <span aria-hidden="true">/</span>
            <Box component="span" sx={{ color: 'var(--dim-75)' }}>{machine.name}</Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
