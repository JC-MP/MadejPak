import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo.config';
import CaseStudyVideo from '@/components/realizacje/CaseStudyVideo';

// EN version of the post-fair recap (PL: /zaproszenie-symas-2026). Slugs are shared between languages.
const PAGE_URL = `${SITE_URL}/en/zaproszenie-symas-2026`;
const PL_URL = `${SITE_URL}/zaproszenie-symas-2026`;

// Video from the fair — data from YouTube (public video on the MadejPak channel)
const VIDEO = {
  id: 'fjyxXTrTmic',
  name: 'SYMAS 2026 recap — Essegi F1000 in action | MadejPak',
  description:
    'MadejPak at SYMAS & MAINTENANCE 2026, EXPO Kraków (14–15 October). On stand B33 we showed the Essegi F1000 vertical packaging machine live and talked about automation, robotics and packaging line integration.',
  uploadDate: '2026-10-17T02:54:14-07:00',
  duration: 'PT1M4S',
};

export const metadata: Metadata = {
  title: 'SYMAS & MAINTENANCE 2026 — Trade Fair Recap',
  description:
    'MadejPak’s recap of SYMAS & MAINTENANCE 2026 at EXPO Kraków. On stand B33 we showed the Essegi F1000 vertical packaging machine live — watch the video.',
  alternates: { canonical: PAGE_URL, languages: { pl: PL_URL, en: PAGE_URL } },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'article',
    url: PAGE_URL,
    title: 'SYMAS & MAINTENANCE 2026 — Trade Fair Recap | MadejPak',
    description: 'Essegi F1000 in action on MadejPak stand B33, EXPO Kraków, 14–15 October 2026. Watch a short video recap.',
    images: [{ url: `https://i.ytimg.com/vi/${VIDEO.id}/maxresdefault.jpg`, width: 1280, height: 720, alt: 'MadejPak at SYMAS 2026 — Essegi F1000 in action' }],
  },
};

// VideoObject — the video is the main element of the page, so the schema matches the content
const videoLd = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: VIDEO.name,
  description: VIDEO.description,
  thumbnailUrl: [
    `https://i.ytimg.com/vi/${VIDEO.id}/maxresdefault.jpg`,
    `https://i.ytimg.com/vi/${VIDEO.id}/hqdefault.jpg`,
  ],
  uploadDate: VIDEO.uploadDate,
  duration: VIDEO.duration,
  contentUrl: `https://www.youtube.com/watch?v=${VIDEO.id}`,
  embedUrl: `https://www.youtube-nocookie.com/embed/${VIDEO.id}`,
  publisher: {
    '@type': 'Organization',
    name: 'MadejPak',
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/MadejPakLogo.svg` },
  },
};

// ─── Design tokens ──────────────────────────────────────────────────────────
const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
const BG_ALT   = 'var(--bg-alt)';
const BG_CARD  = 'var(--bg-card)';
const TEXT_DIM = 'var(--dim-72)';

// ─── Inline SVG icons (feather-style) ────────────────────────────────────────
function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const sx = { width: size, height: size, flexShrink: 0, display: 'block' } as const;
  const p = { stroke: 'currentColor', strokeWidth: 1.6, fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const svg = (children: React.ReactNode) => (
    <Box component="svg" viewBox="0 0 24 24" aria-hidden="true" sx={sx}>{children}</Box>
  );
  switch (name) {
    case 'clock': return svg(<><circle cx="12" cy="12" r="9" {...p} /><path d="M12 7.5V12l3 2" {...p} /></>);
    case 'pin':   return svg(<><path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z" {...p} /><circle cx="12" cy="10" r="2.5" {...p} /></>);
    case 'phone': return svg(<path d="M5 4h3l1.6 4.5-2 1.2a12 12 0 005.7 5.7l1.2-2L19 16v3a2 2 0 01-2 2A16 16 0 013 5a2 2 0 012-1z" {...p} />);
    case 'mail':  return svg(<><rect x="3.5" y="6" width="17" height="12" rx="2" {...p} /><path d="M4 7.5l8 5.5 8-5.5" {...p} /></>);
    case 'arrow': return svg(<path d="M4 12h15M13 6l6 6-6 6" {...p} />);
    default:      return null;
  }
}

const SHOWN = [
  { title: 'Essegi F1000 live', desc: 'A VFFS vertical packaging machine for free-flowing, granular and powder products — running on the stand on both days of the fair.' },
  { title: 'Automation and robotics', desc: 'We talked about packaging automation, palletising and integrating robots into complete production lines.' },
  { title: 'Manufacturer and integrator', desc: 'We build machines of our own design and integrate complete lines — with European partners and our own service.' },
  { title: 'Service and parts in Poland', desc: 'Our own after-sales service and spare parts stock — support you can rely on.' },
];

const QUESTIONS = [
  { q: 'What do you pack?', a: 'The product and its properties — granules, powder, pellets, dust, moisture.' },
  { q: 'What pack size?', a: 'Bag weight or volume and the type of pack — film on a reel or pre-made bags.' },
  { q: 'How many bags per hour?', a: 'The required output and number of shifts — and what happens to the bag next.' },
];

const RANGE = [
  { name: 'Essegi F700', desc: '50 g – 3 kg · food, fine granules', href: '/en/maszyny/pionowe-maszyny-pakujace#modele' },
  { name: 'Essegi F1000', desc: '1–25 kg · pellets, fertilisers, granules, powders', href: '/en/maszyny/pionowe-maszyny-pakujace#modele' },
  { name: 'Essegi F1200 / F1300', desc: '5–50 kg · feed, chemicals, soil and bark', href: '/en/maszyny/pionowe-maszyny-pakujace#modele' },
  { name: 'Concetti FFS', desc: 'industrial bags 10–50 kg · up to 2,000 bags/h', href: '/en/maszyny/pionowe-maszyny-pakujace#concetti' },
];

const CASES = [
  { name: 'Europol', desc: 'Pellet bagging and palletising line — F1000 + KUKA robot', href: '/en/realizacje/europol' },
  { name: 'Planta', desc: 'Fertiliser line: hopper, Essegi, KUKA palletising', href: '/en/realizacje/planta' },
  { name: 'Ciech Sarzyna', desc: 'Essegi F1000 for fertiliser packing', href: '/en/realizacje/ciech-sarzyna' },
  { name: 'Qemetica', desc: 'Calcium chloride in extremely harsh conditions', href: '/en/realizacje/qemetica' },
];

const CONTACTS = [
  { name: 'Adam Madej',           tel: '+48 603 664 755', telHref: 'tel:+48603664755', email: 'a.madej@madejpak.pl' },
  { name: 'Bartłomiej Zyznawski', tel: '+48 697 097 997', telHref: 'tel:+48697097997', email: 'b.zyznawski@madejpak.pl' },
];

const EYEBROW_SX = { fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 1.5 } as const;
const H2_SX = { fontSize: { xs: '1.4rem', md: '1.85rem' }, fontWeight: 800, letterSpacing: '-0.025em', color: 'var(--dim-85)', lineHeight: 1.2 } as const;
const ICON_CIRCLE_SX = { display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: '50%', border: `1px solid ${BORDER}`, color: ACCENT, transition: 'all 0.15s ease' } as const;
const CONTACT_LINK_SX = { display: 'inline-flex', alignItems: 'center', gap: 1.25, textDecoration: 'none', '&:hover .v': { color: ACCENT }, '&:hover .ico': { bgcolor: ACCENT, color: '#fff', borderColor: ACCENT } } as const;

export default function SymasRecapPageEn() {
  return (
    <Box sx={{ bgcolor: 'var(--bg)', minHeight: '100vh', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoLd) }} />
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ── Hero ── */}
      <Box sx={{
        position: 'relative',
        borderBottom: `1px solid ${BORDER}`,
        py: { xs: 10, md: 14 },
        background: 'radial-gradient(115% 120% at 100% 0%, color-mix(in srgb, #E8610A 9%, var(--bg)) 0%, var(--bg) 52%)',
        overflow: 'hidden',
      }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${ACCENT}, color-mix(in srgb, ${ACCENT} 30%, transparent))` }} />
        <Container maxWidth="lg">
          {/* Co-branding: MadejPak × official fair logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3, flexWrap: 'wrap', pb: { xs: 4, md: 5 }, mb: { xs: 6, md: 8 }, borderBottom: `1px solid ${BORDER}` }}>
            <Box sx={{ position: 'relative', width: { xs: 190, md: 250 }, height: { xs: 49, md: 65 }, flexShrink: 0 }}>
              <Image src="/MadejPakLogo.svg" alt="MadejPak" fill style={{ objectFit: 'contain', objectPosition: 'left center' }} sizes="250px" priority />
            </Box>
            <Box sx={{ position: 'relative', width: { xs: 150, md: 196 }, height: { xs: 37, md: 49 }, flexShrink: 0 }}>
              <Image src="/images/targi/symas-2026-logo.png" alt="SYMAS & MAINTENANCE 2026" fill style={{ objectFit: 'contain', objectPosition: 'right center' }} sizes="196px" />
            </Box>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 6, md: 10 }, alignItems: 'end' }}>
            <Box>
              <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 1.5, py: 0.6, mb: 2.5, borderRadius: '100px', bgcolor: `color-mix(in srgb, ${ACCENT} 12%, transparent)`, border: `1px solid color-mix(in srgb, ${ACCENT} 30%, transparent)` }}>
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: ACCENT }} />
                <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: ACCENT }}>
                  Trade fair recap
                </Typography>
              </Box>
              <Typography
                variant="h1"
                sx={{ fontSize: { xs: '2.3rem', md: '3.25rem', lg: '3.75rem' }, fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--dim-85)', mb: 3 }}
              >
                SYMAS
                <br />
                &amp; MAINTENANCE <Box component="span" sx={{ color: ACCENT }}>2026</Box>
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.25 }}>
                {[
                  { icon: 'clock', text: '14–15 October 2026' },
                  { icon: 'pin',   text: 'EXPO Kraków' },
                ].map(({ icon, text }) => (
                  <Box key={text} sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, px: 1.5, py: 0.75, borderRadius: '3px', border: `1px solid ${BORDER}`, bgcolor: BG_CARD, color: 'var(--dim-75)' }}>
                    <Box sx={{ color: ACCENT, display: 'flex' }}><Icon name={icon} size={15} /></Box>
                    <Typography sx={{ fontSize: '0.82rem', fontWeight: 600 }}>{text}</Typography>
                  </Box>
                ))}
                <Box sx={{ display: 'inline-flex', alignItems: 'center', px: 1.5, py: 0.75, borderRadius: '3px', bgcolor: ACCENT, color: '#fff' }}>
                  <Typography sx={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.02em' }}>Stand B33</Typography>
                </Box>
              </Box>
            </Box>

            <Box>
              <Typography sx={{ fontSize: { xs: '1.05rem', md: '1.15rem' }, fontWeight: 800, lineHeight: 1.5, color: 'var(--dim-85)', mb: 1.5 }}>
                Thank you for visiting stand B33!
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.93rem', md: '1rem' }, lineHeight: 1.85, color: TEXT_DIM, mb: 4 }}>
                Over two days at EXPO Kraków we showed the <b>Essegi F1000</b> vertical packaging machine live and talked
                about automation, robotics and the integration of complete packaging lines. Thank you for your visits,
                conversations and new contacts — and if you missed the fair, let’s talk now.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Box
                  component={Link}
                  href="/en/kontakt"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 3, py: 1.25, bgcolor: ACCENT, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', transition: 'background-color 0.15s ease', '&:hover': { bgcolor: '#D45509' } }}
                >
                  Book a call
                  <Icon name="arrow" size={15} />
                </Box>
                <Box
                  component={Link}
                  href="/en/maszyny/pionowe-maszyny-pakujace"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 3, py: 1.25, border: `1px solid ${BORDER}`, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--dim-75)', textDecoration: 'none', transition: 'border-color 0.15s ease, color 0.15s ease', '&:hover': { borderColor: ACCENT, color: ACCENT } }}
                >
                  Vertical machines
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Video from the fair ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 4, md: 5 }, maxWidth: 720 }}>
            <Typography sx={EYEBROW_SX}>Video from the fair</Typography>
            <Typography variant="h2" sx={H2_SX}>
              Essegi F1000 in action on stand B33
            </Typography>
          </Box>
          <Box sx={{ maxWidth: 960 }}>
            <CaseStudyVideo youtubeId={VIDEO.id} title="MadejPak at SYMAS 2026 — Essegi F1000 in action" />
          </Box>
        </Container>
      </Box>

      {/* ── What we showed ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 8 }, alignItems: 'center' }}>
            <Box>
              <Typography sx={EYEBROW_SX}>What we showed on stand B33</Typography>
              <Typography variant="h2" sx={{ ...H2_SX, mb: 3, maxWidth: 520 }}>
                Essegi F1000 vertical machine — live, in operation
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: TEXT_DIM, mb: 4, maxWidth: 520 }}>
                Vertical packaging machines (VFFS) form a bag from film, fill it with a measured portion of product and seal
                the pack in one cycle — from flour, groats and spices to granules, fertilisers and pellets. MadejPak represents
                the Italian manufacturer <b>Essegi</b> in Poland: we match the machine to the specific product and integrate
                it into a complete line — with palletising, robotics and our own service.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                {SHOWN.map((h) => (
                  <Box key={h.title} sx={{ display: 'flex', gap: 2 }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, mt: '8px' }} />
                    <Box>
                      <Typography variant="h3" sx={{ fontSize: '1rem', fontWeight: 800, color: 'var(--dim-85)', mb: 0.4 }}>{h.title}</Typography>
                      <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.7, color: TEXT_DIM }}>{h.desc}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={{ position: 'relative', aspectRatio: '4 / 3', borderRadius: '4px', overflow: 'hidden', border: `1px solid ${BORDER}`, bgcolor: '#f2f2f2' }}>
              <Image src="/images/targi/essegi-f1000.jpg" alt="Essegi F1000 — VFFS vertical packaging machine" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 50vw" />
              <Box sx={{ position: 'absolute', left: 12, bottom: 12, px: 1.25, py: 0.5, borderRadius: '3px', bgcolor: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(4px)' }}>
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.04em', color: '#fff' }}>Essegi F1000</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Let's talk about your product ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography sx={EYEBROW_SX}>Missed the fair?</Typography>
          <Typography variant="h2" sx={{ ...H2_SX, mb: 1.5, maxWidth: 620 }}>
            Let’s talk about your product
          </Typography>
          <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: TEXT_DIM, mb: { xs: 4, md: 5 }, maxWidth: 640 }}>
            These three questions start the selection — an Essegi model or a Concetti system, together with dosing, bag
            conveying and palletising.
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: { xs: 2, md: 3 }, mb: { xs: 6, md: 8 } }}>
            {QUESTIONS.map((item, i) => (
              <Box key={item.q} sx={{ p: { xs: 3, md: 3.5 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', color: ACCENT, mb: 1.5 }}>{i + 1}</Typography>
                <Typography variant="h3" sx={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--dim-85)', mb: 0.75 }}>{item.q}</Typography>
                <Typography sx={{ fontSize: '0.86rem', lineHeight: 1.65, color: TEXT_DIM }}>{item.a}</Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 6 } }}>
            {[
              { title: 'Vertical machine range', items: RANGE },
              { title: 'See our case studies', items: CASES },
            ].map((col) => (
              <Box key={col.title} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
                <Box sx={{ px: 3.5, py: 2.25, borderBottom: `1px solid ${BORDER}` }}>
                  <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: TEXT_DIM }}>{col.title}</Typography>
                </Box>
                {col.items.map((it, idx) => (
                  <Box
                    key={it.name}
                    component={Link}
                    href={it.href}
                    sx={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2,
                      px: 3.5, py: 1.75, textDecoration: 'none',
                      borderBottom: idx < col.items.length - 1 ? `1px solid ${BORDER}` : 'none',
                      transition: 'background-color 0.15s ease',
                      '&:hover': { bgcolor: 'var(--surface-03)' },
                      '&:hover .arr': { color: ACCENT, transform: 'translateX(2px)' },
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.2 }}>{it.name}</Typography>
                      <Typography sx={{ fontSize: '0.76rem', color: TEXT_DIM, lineHeight: 1.5 }}>{it.desc}</Typography>
                    </Box>
                    <Box className="arr" sx={{ color: 'var(--dim-45)', display: 'flex', transition: 'all 0.15s ease' }}>
                      <Icon name="arrow" size={16} />
                    </Box>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Contact ── */}
      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 12 }, alignItems: 'start' }}>
            <Box>
              <Typography sx={EYEBROW_SX}>Contact</Typography>
              <Typography variant="h2" sx={{ ...H2_SX, mb: 2.5 }}>
                Let’s pick up where we left off at the fair
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.8, color: TEXT_DIM, mb: 4 }}>
                Did we talk on the stand, or are you only now discovering our offer? Write or call us — we will prepare a
                proposal matched to your product and output.
              </Typography>
              <Box
                component={Link}
                href="/en/kontakt"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 3.5, py: 1.5, bgcolor: ACCENT, borderRadius: '3px', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', transition: 'background-color 0.15s ease', '&:hover': { bgcolor: '#D45509' } }}
              >
                Write to us
                <Icon name="arrow" size={15} />
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {CONTACTS.map((p) => (
                <Box key={p.name} sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dim-45)' }}>{p.name}</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1.5, sm: 3 } }}>
                    <Box component="a" href={p.telHref} sx={CONTACT_LINK_SX}>
                      <Box className="ico" sx={ICON_CIRCLE_SX}><Icon name="phone" size={15} /></Box>
                      <Typography className="v" sx={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--dim-85)', transition: 'color 0.15s ease' }}>{p.tel}</Typography>
                    </Box>
                    <Box component="a" href={`mailto:${p.email}`} sx={CONTACT_LINK_SX}>
                      <Box className="ico" sx={ICON_CIRCLE_SX}><Icon name="mail" size={15} /></Box>
                      <Typography className="v" sx={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--dim-85)', transition: 'color 0.15s ease' }}>{p.email}</Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
              <Box component="a" href="mailto:biuro@madejpak.pl" sx={{ ...CONTACT_LINK_SX, width: 'fit-content' }}>
                <Box className="ico" sx={ICON_CIRCLE_SX}><Icon name="mail" size={15} /></Box>
                <Box>
                  <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dim-45)' }}>Office</Typography>
                  <Typography className="v" sx={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--dim-85)', transition: 'color 0.15s ease' }}>biuro@madejpak.pl</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── SYMAS footer — official fair banner ── */}
      <Box sx={{ borderTop: `1px solid ${BORDER}`, py: { xs: 5, md: 7 } }}>
        <Container maxWidth="lg">
          <Box
            component="a"
            href="https://symas.krakow.pl/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: 'block', borderRadius: '4px', overflow: 'hidden', border: `1px solid ${BORDER}`, transition: 'border-color 0.15s ease, box-shadow 0.15s ease', '&:hover': { borderColor: 'var(--surface-13)', boxShadow: '0 12px 30px -20px rgba(0,0,0,0.4)' } }}
          >
            <Box
              component="img"
              src="/images/targi/symas-2026-banner.jpg"
              alt="SYMAS & MAINTENANCE 2026 — 14–15 October 2026, EXPO Kraków"
              sx={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
