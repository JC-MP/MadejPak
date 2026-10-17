import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo.config';
import CaseStudyVideo from '@/components/realizacje/CaseStudyVideo';

// Strona była zaproszeniem na targi; po targach (14–15.10.2026) pełni rolę relacji.
// Adres zostaje ten sam — jest w sitemapie, linkowany z wydarzeń i był rozsyłany.
const PAGE_URL = `${SITE_URL}/zaproszenie-symas-2026`;

// Wideo z targów — dane z YouTube (publiczny film na kanale MadejPak)
const VIDEO = {
  id: 'fjyxXTrTmic',
  name: 'SYMAS 2026 za nami! ESSEGI F1000 w akcji | MadejPak dziękuje za spotkania!',
  description:
    'MadejPak na targach SYMAS & MAINTENANCE 2026 w EXPO Kraków (14–15 października). Na stoisku B33 pokazaliśmy na żywo pionową maszynę pakującą Essegi F1000 i rozmawialiśmy o automatyzacji, robotyzacji i integracji linii pakujących.',
  uploadDate: '2026-10-17T02:54:14-07:00',
  duration: 'PT1M4S',
};

export const metadata: Metadata = {
  title: 'SYMAS & MAINTENANCE 2026 — relacja z targów',
  description:
    'Relacja MadejPak z targów SYMAS & MAINTENANCE 2026 w EXPO Kraków. Na stoisku B33 pokazaliśmy na żywo pionową maszynę pakującą Essegi F1000 — zobacz wideo.',
  alternates: { canonical: PAGE_URL, languages: { pl: PAGE_URL, en: `${SITE_URL}/en/zaproszenie-symas-2026` } },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'article',
    url: PAGE_URL,
    title: 'SYMAS & MAINTENANCE 2026 — relacja z targów | MadejPak',
    description: 'Essegi F1000 w akcji na stoisku MadejPak B33, EXPO Kraków, 14–15 października 2026. Zobacz krótką relację wideo.',
    images: [{ url: `https://i.ytimg.com/vi/${VIDEO.id}/maxresdefault.jpg`, width: 1280, height: 720, alt: 'MadejPak na targach SYMAS 2026 — Essegi F1000 w akcji' }],
    locale: 'pl_PL',
  },
};

// VideoObject — film jest głównym elementem strony, więc schema zgadza się z treścią
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
  { title: 'Essegi F1000 na żywo', desc: 'Pionowa maszyna pakująca VFFS do produktów sypkich, granulowanych i proszkowych — pracowała na stoisku przez oba dni targów.' },
  { title: 'Automatyzacja i robotyzacja', desc: 'Rozmawialiśmy o automatyzacji pakowania, paletyzacji i integracji robotów w kompletne linie produkcyjne.' },
  { title: 'Producent i integrator', desc: 'Budujemy maszyny własnej konstrukcji i spinamy kompletne linie — z partnerami europejskimi i własnym serwisem.' },
  { title: 'Serwis i części w Polsce', desc: 'Własny serwis posprzedażowy i magazyn części zamiennych — wsparcie, na którym można polegać.' },
];

const QUESTIONS = [
  { q: 'Co pakujesz?', a: 'Produkt i jego właściwości — granulat, proszek, pellet, pylenie, wilgotność.' },
  { q: 'W jakiej gramaturze?', a: 'Masa lub objętość worka i rodzaj opakowania — folia z rolki czy gotowe worki.' },
  { q: 'Ile worków na godzinę?', a: 'Wymagana wydajność i liczba zmian — oraz co dzieje się z workiem dalej.' },
];

const RANGE = [
  { name: 'Essegi F700', desc: '50 g – 3 kg · żywność, drobne granulaty', href: '/maszyny/pionowe-maszyny-pakujace/essegi-f700' },
  { name: 'Essegi F1000', desc: '1–25 kg · pellet, nawozy, granulaty, proszki', href: '/maszyny/pionowe-maszyny-pakujace/essegi-f1000' },
  { name: 'Essegi F1200 / F1300', desc: '5–50 kg · pasze, chemia, ziemia i kora', href: '/maszyny/pionowe-maszyny-pakujace/essegi-f1200' },
  { name: 'Concetti FFS', desc: 'worki przemysłowe 10–50 kg · do 2000 worków/h', href: '/maszyny/pionowe-maszyny-pakujace#concetti' },
];

const CASES = [
  { name: 'Europol', desc: 'Linia pakowania i paletyzacji pelletu — F1000 + robot KUKA', href: '/realizacje/europol' },
  { name: 'Planta', desc: 'Linia nawozów: zasobnik, Essegi, paletyzacja KUKA', href: '/realizacje/planta' },
  { name: 'Ciech Sarzyna', desc: 'Essegi F1000 do pakowania nawozów', href: '/realizacje/ciech-sarzyna' },
  { name: 'Qemetica', desc: 'Chlorek wapnia w trudnych warunkach środowiskowych', href: '/realizacje/qemetica' },
];

const CONTACTS = [
  { name: 'Adam Madej',           tel: '+48 603 664 755', telHref: 'tel:+48603664755', email: 'a.madej@madejpak.pl' },
  { name: 'Bartłomiej Zyznawski', tel: '+48 697 097 997', telHref: 'tel:+48697097997', email: 'b.zyznawski@madejpak.pl' },
];

const EYEBROW_SX = { fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 1.5 } as const;
const H2_SX = { fontSize: { xs: '1.4rem', md: '1.85rem' }, fontWeight: 800, letterSpacing: '-0.025em', color: 'var(--dim-85)', lineHeight: 1.2 } as const;
const ICON_CIRCLE_SX = { display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: '50%', border: `1px solid ${BORDER}`, color: ACCENT, transition: 'all 0.15s ease' } as const;
const CONTACT_LINK_SX = { display: 'inline-flex', alignItems: 'center', gap: 1.25, textDecoration: 'none', '&:hover .v': { color: ACCENT }, '&:hover .ico': { bgcolor: ACCENT, color: '#fff', borderColor: ACCENT } } as const;

export default function SymasRecapPage() {
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
          {/* Co-branding: MadejPak × oficjalne logo targów */}
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
                  Relacja z targów
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
                  { icon: 'clock', text: '14–15 października 2026' },
                  { icon: 'pin',   text: 'EXPO Kraków' },
                ].map(({ icon, text }) => (
                  <Box key={text} sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, px: 1.5, py: 0.75, borderRadius: '3px', border: `1px solid ${BORDER}`, bgcolor: BG_CARD, color: 'var(--dim-75)' }}>
                    <Box sx={{ color: ACCENT, display: 'flex' }}><Icon name={icon} size={15} /></Box>
                    <Typography sx={{ fontSize: '0.82rem', fontWeight: 600 }}>{text}</Typography>
                  </Box>
                ))}
                <Box sx={{ display: 'inline-flex', alignItems: 'center', px: 1.5, py: 0.75, borderRadius: '3px', bgcolor: ACCENT, color: '#fff' }}>
                  <Typography sx={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.02em' }}>Stoisko B33</Typography>
                </Box>
              </Box>
            </Box>

            <Box>
              <Typography sx={{ fontSize: { xs: '1.05rem', md: '1.15rem' }, fontWeight: 800, lineHeight: 1.5, color: 'var(--dim-85)', mb: 1.5 }}>
                Dziękujemy za spotkania na stoisku B33!
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.93rem', md: '1rem' }, lineHeight: 1.85, color: TEXT_DIM, mb: 4 }}>
                Przez dwa dni targów w EXPO Kraków pokazywaliśmy na żywo pionową maszynę pakującą <b>Essegi F1000</b>{' '}
                i rozmawialiśmy o automatyzacji, robotyzacji i integracji kompletnych linii pakujących. Dziękujemy za
                odwiedziny, rozmowy i nowe kontakty — a jeśli nie zdążyłeś na targi, porozmawiajmy teraz.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Box
                  component={Link}
                  href="/kontakt"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 3, py: 1.25, bgcolor: ACCENT, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', transition: 'background-color 0.15s ease', '&:hover': { bgcolor: '#D45509' } }}
                >
                  Umów rozmowę
                  <Icon name="arrow" size={15} />
                </Box>
                <Box
                  component={Link}
                  href="/maszyny/pionowe-maszyny-pakujace"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 3, py: 1.25, border: `1px solid ${BORDER}`, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--dim-75)', textDecoration: 'none', transition: 'border-color 0.15s ease, color 0.15s ease', '&:hover': { borderColor: ACCENT, color: ACCENT } }}
                >
                  Maszyny pionowe
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Wideo z targów ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 4, md: 5 }, maxWidth: 720 }}>
            <Typography sx={EYEBROW_SX}>Wideo z targów</Typography>
            <Typography variant="h2" sx={H2_SX}>
              Essegi F1000 w akcji na stoisku B33
            </Typography>
          </Box>
          <Box sx={{ maxWidth: 960 }}>
            <CaseStudyVideo youtubeId={VIDEO.id} title="MadejPak na targach SYMAS 2026 — Essegi F1000 w akcji" />
          </Box>
        </Container>
      </Box>

      {/* ── Co pokazaliśmy ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 8 }, alignItems: 'center' }}>
            <Box>
              <Typography sx={EYEBROW_SX}>Co pokazaliśmy na stoisku B33</Typography>
              <Typography variant="h2" sx={{ ...H2_SX, mb: 3, maxWidth: 520 }}>
                Pionowa maszyna Essegi F1000 — na żywo, w pracy
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: TEXT_DIM, mb: 4, maxWidth: 520 }}>
                Pionowe maszyny pakujące (VFFS) formują worek z folii, napełniają go odmierzoną porcją produktu i zgrzewają
                opakowanie w jednym cyklu — od mąki, kaszy i przypraw po granulaty, nawozy i&nbsp;pellet. MadejPak jest
                przedstawicielem włoskiego producenta <b>Essegi</b> w Polsce: dobieramy maszynę pod konkretny produkt
                i&nbsp;spinamy ją w kompletną linię — z paletyzacją, robotyzacją i&nbsp;własnym serwisem.
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
              <Image src="/images/targi/essegi-f1000.jpg" alt="Essegi F1000 — pionowa maszyna pakująca VFFS" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 50vw" />
              <Box sx={{ position: 'absolute', left: 12, bottom: 12, px: 1.25, py: 0.5, borderRadius: '3px', bgcolor: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(4px)' }}>
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.04em', color: '#fff' }}>Essegi F1000</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Porozmawiajmy o Twoim produkcie ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography sx={EYEBROW_SX}>Nie zdążyłeś na targi?</Typography>
          <Typography variant="h2" sx={{ ...H2_SX, mb: 1.5, maxWidth: 620 }}>
            Porozmawiajmy o Twoim produkcie
          </Typography>
          <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: TEXT_DIM, mb: { xs: 4, md: 5 }, maxWidth: 640 }}>
            Od tych trzech pytań zaczynamy dobór — model Essegi albo system Concetti, razem z dozowaniem, transportem
            worków i paletyzacją.
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
              { title: 'Gama maszyn pionowych', items: RANGE },
              { title: 'Zobacz nasze realizacje', items: CASES },
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

      {/* ── Kontakt ── */}
      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 12 }, alignItems: 'start' }}>
            <Box>
              <Typography sx={EYEBROW_SX}>Kontakt</Typography>
              <Typography variant="h2" sx={{ ...H2_SX, mb: 2.5 }}>
                Wróćmy do rozmowy z targów
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.8, color: TEXT_DIM, mb: 4 }}>
                Rozmawialiśmy na stoisku, a może dopiero teraz trafiasz na naszą ofertę? Napisz lub zadzwoń — przygotujemy
                propozycję dopasowaną do Twojego produktu i wydajności.
              </Typography>
              <Box
                component={Link}
                href="/kontakt"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 3.5, py: 1.5, bgcolor: ACCENT, borderRadius: '3px', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', transition: 'background-color 0.15s ease', '&:hover': { bgcolor: '#D45509' } }}
              >
                Napisz do nas
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
                  <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dim-45)' }}>Biuro</Typography>
                  <Typography className="v" sx={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--dim-85)', transition: 'color 0.15s ease' }}>biuro@madejpak.pl</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Stopka SYMAS — oficjalny baner targów ── */}
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
              alt="SYMAS & MAINTENANCE 2026 — 14–15 października 2026, EXPO Kraków"
              sx={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
