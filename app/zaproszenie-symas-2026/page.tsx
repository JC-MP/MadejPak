import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo.config';
import PrintButton from '../zaproszenie-interpack-2026/PrintButton';

export const metadata: Metadata = {
  title: 'Zaproszenie — SYMAS & MAINTENANCE 2026',
  description:
    'MadejPak zaprasza na targi SYMAS & MAINTENANCE 2026 w Krakowie. Stoisko B33 — pionowa maszyna pakująca Essegi F1000 na żywo. 14–15 października 2026, EXPO Kraków.',
  alternates: { canonical: `${SITE_URL}/zaproszenie-symas-2026` },
  robots: { index: true, follow: true },
};

// ─── Design tokens ──────────────────────────────────────────────────────────
const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
const BG_ALT   = 'var(--bg-alt)';
const BG_CARD  = 'var(--bg-card)';
const TEXT_DIM = 'var(--dim-72)';

// Oficjalna rejestracja gości targów (bezpłatny wstęp branżowy po rejestracji online)
const REGISTRATION_URL = 'https://symas.exposupport.pl/en-us/visitor/register';

// Dojazd — komunikacja miejska (źródło: symas.krakow.pl)
const TRANSIT = [
  { line: 'Tramwaj 1, 14, 22', stop: 'przystanek Rondo 308. Dywizjonu' },
  { line: 'Autobus 174, 178',  stop: 'przystanek Centralna' },
  { line: 'Autobus 148',       stop: 'przystanek Galicyjska' },
];

const MAPS_URL   = 'https://www.google.com/maps/search/?api=1&query=EXPO+Krak%C3%B3w+ul.+Galicyjska+9';
const MAPS_EMBED = 'https://www.google.com/maps?q=EXPO%20Krak%C3%B3w%2C%20ul.%20Galicyjska%209%2C%2031-586%20Krak%C3%B3w&output=embed';

// ─── Inline SVG icons (feather-style) ────────────────────────────────────────
function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const sx = { width: size, height: size, flexShrink: 0, display: 'block' } as const;
  const p = { stroke: 'currentColor', strokeWidth: 1.6, fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const svg = (children: React.ReactNode) => (
    <Box component="svg" viewBox="0 0 24 24" aria-hidden="true" sx={sx}>{children}</Box>
  );
  switch (name) {
    case 'clock':   return svg(<><circle cx="12" cy="12" r="9" {...p} /><path d="M12 7.5V12l3 2" {...p} /></>);
    case 'ticket':  return svg(<><path d="M4 7h16v3a2 2 0 000 4v3H4v-3a2 2 0 000-4V7z" {...p} /><path d="M14 7v10" {...p} strokeDasharray="2 2" /></>);
    case 'transit': return svg(<path d="M3 11l18-8-8 18-2-8-8-2z" {...p} />);
    case 'pin':     return svg(<><path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z" {...p} /><circle cx="12" cy="10" r="2.5" {...p} /></>);
    case 'phone':   return svg(<path d="M5 4h3l1.6 4.5-2 1.2a12 12 0 005.7 5.7l1.2-2L19 16v3a2 2 0 01-2 2A16 16 0 013 5a2 2 0 012-1z" {...p} />);
    case 'mail':    return svg(<><rect x="3.5" y="6" width="17" height="12" rx="2" {...p} /><path d="M4 7.5l8 5.5 8-5.5" {...p} /></>);
    case 'arrow':   return svg(<path d="M4 12h15M13 6l6 6-6 6" {...p} />);
    default:        return null;
  }
}

// Ściąga na stoisko — od tych pytań zaczynamy rozmowę
const QUESTIONS = [
  { q: 'Co pakujesz?', a: 'Produkt i jego właściwości — granulat, proszek, pellet, pylenie, wilgotność.' },
  { q: 'W jakiej gramaturze?', a: 'Masa lub objętość worka i rodzaj opakowania — folia z rolki czy gotowe worki.' },
  { q: 'Ile worków na godzinę?', a: 'Wymagana wydajność i liczba zmian — oraz co dzieje się z workiem dalej.' },
];

const RANGE = [
  { name: 'Essegi F700', spec: '50 g – 3 kg · żywność, drobne granulaty', href: '/maszyny/pionowe-maszyny-pakujace/essegi-f700' },
  { name: 'Essegi F1000', spec: '1–25 kg · pellet, nawozy, granulaty, proszki', href: '/maszyny/pionowe-maszyny-pakujace/essegi-f1000' },
  { name: 'Essegi F1200 / F1300', spec: '5–50 kg · pasze, chemia, ziemia i kora', href: '/maszyny/pionowe-maszyny-pakujace/essegi-f1200' },
  { name: 'Concetti FFS', spec: 'worki przemysłowe 10–50 kg · do 2000 worków/h', href: '/maszyny/pionowe-maszyny-pakujace#concetti' },
];

const CASES = [
  { name: 'Europol', desc: 'Linia pakowania i paletyzacji pelletu — F1000 + robot KUKA', href: '/realizacje/europol' },
  { name: 'Planta', desc: 'Linia nawozów: zasobnik, Essegi, paletyzacja KUKA', href: '/realizacje/planta' },
  { name: 'Ciech Sarzyna', desc: 'Essegi F1000 do pakowania nawozów', href: '/realizacje/ciech-sarzyna' },
  { name: 'Qemetica', desc: 'Chlorek wapnia w trudnych warunkach środowiskowych', href: '/realizacje/qemetica' },
];

const HIGHLIGHTS = [
  { title: 'Essegi F1000 na żywo', desc: 'Pionowa maszyna pakująca VFFS do produktów sypkich, granulowanych i proszkowych — zobacz ją w pracy na stoisku.' },
  { title: 'Automatyzacja i robotyzacja', desc: 'Porozmawiamy o automatyzacji pakowania, paletyzacji i integracji robotów w kompletne linie produkcyjne.' },
  { title: 'Producent i integrator', desc: 'Budujemy maszyny własnej konstrukcji i spinamy kompletne linie — z partnerami europejskimi i własnym serwisem.' },
  { title: 'Serwis i części w Polsce', desc: 'Własny serwis posprzedażowy i magazyn części zamiennych — wsparcie, na którym można polegać.' },
];

export default function SymasInvitationPage() {
  return (
    <>
      <style>{`
        @media print {
          @page { margin: 12mm; }
          header, footer { display: none !important; }
          body { background: #fff !important; color: #111 !important; }
          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          a { color: inherit !important; }
          .sym-card, .sym-avoid { break-inside: avoid; page-break-inside: avoid; }
        }
      `}</style>

      <Box sx={{ bgcolor: 'var(--bg)', minHeight: '100vh', color: 'var(--text)' }}>
        <Box sx={{ height: { xs: 64, lg: 72 }, '@media print': { display: 'none' } }} />

        {/* ── Hero ── */}
        <Box sx={{
          position: 'relative',
          borderBottom: `1px solid ${BORDER}`,
          py: { xs: 10, md: 14 },
          background: 'radial-gradient(115% 120% at 100% 0%, color-mix(in srgb, #E8610A 9%, var(--bg)) 0%, var(--bg) 52%)',
          overflow: 'hidden',
          '@media print': { background: 'none', py: 5 },
        }}>
          {/* delikatna linia akcentu u góry */}
          <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${ACCENT}, color-mix(in srgb, ${ACCENT} 30%, transparent))`, '@media print': { display: 'none' } }} />
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
                    Zaproszenie · Targi branżowe
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
                {/* chipsy: data · miejsce · stoisko */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.25, mb: 2.5 }}>
                  {[
                    { icon: 'clock', text: '14–15 października 2026' },
                    { icon: 'pin',   text: 'EXPO Kraków' },
                  ].map(({ icon, text }) => (
                    <Box key={text} sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, px: 1.5, py: 0.75, borderRadius: '3px', border: `1px solid ${BORDER}`, bgcolor: BG_CARD, color: 'var(--dim-75)' }}>
                      <Box sx={{ color: ACCENT, display: 'flex' }}><Icon name={icon} size={15} /></Box>
                      <Typography sx={{ fontSize: '0.82rem', fontWeight: 600 }}>{text}</Typography>
                    </Box>
                  ))}
                  <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, px: 1.5, py: 0.75, borderRadius: '3px', bgcolor: ACCENT, color: '#fff' }}>
                    <Typography sx={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.02em' }}>Stoisko B33</Typography>
                  </Box>
                </Box>
                <Typography sx={{ fontSize: '0.8rem', color: 'var(--dim-55)', lineHeight: 1.6 }}>
                  17. Międzynarodowe Targi Obróbki, Magazynowania i Transportu Materiałów Sypkich i&nbsp;Masowych<br />
                  17. Międzynarodowe Targi Utrzymania Ruchu, Planowania i&nbsp;Optymalizacji Produkcji
                </Typography>
              </Box>

              <Box>
                <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, fontWeight: 800, lineHeight: 1.5, color: 'var(--dim-85)', mb: 1.5 }}>
                  Mamy przyjemność zaprosić Państwa na targi utrzymania ruchu i automatyki przemysłowej SYMAS &amp; MAINTENANCE 2026.
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.93rem', md: '1rem' }, lineHeight: 1.85, color: TEXT_DIM, mb: 1.5 }}>
                  Odwiedź nasze stoisko <b>B33</b>, gdzie na żywo zaprezentujemy pionową maszynę pakującą <b>Essegi F1000</b> oraz porozmawiamy o automatyzacji, robotyzacji i integracji kompletnych linii pakujących.
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.93rem', md: '1rem' }, lineHeight: 1.85, color: 'var(--dim-85)', fontWeight: 700, mb: 4 }}>
                  Zapraszamy — umów spotkanie na stoisku.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25, mb: 4 }}>
                  {[
                    { name: 'Adam Madej', tel: '+48 603 664 755', href: 'tel:+48603664755' },
                    { name: 'Bartłomiej Zyznawski', tel: '+48 697 097 997', href: 'tel:+48697097997' },
                  ].map(({ name, tel, href }) => (
                    <Box key={href} component="a" href={href} sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.25, color: 'var(--dim-85)', textDecoration: 'none', width: 'fit-content', '&:hover .tel': { color: ACCENT }, '&:hover .ico': { bgcolor: ACCENT, color: '#fff', borderColor: ACCENT } }}>
                      <Box className="ico" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: '50%', border: `1px solid ${BORDER}`, color: ACCENT, transition: 'all 0.15s ease' }}>
                        <Icon name="phone" size={16} />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: '0.72rem', color: 'var(--dim-55)', lineHeight: 1.2 }}>{name}</Typography>
                        <Typography className="tel" sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, fontWeight: 700, lineHeight: 1.3, transition: 'color 0.15s ease' }}>{tel}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  <Box
                    component={Link}
                    href="/kontakt"
                    sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 3, py: 1.25, bgcolor: ACCENT, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', transition: 'background-color 0.15s ease', '&:hover': { bgcolor: '#D45509' }, '@media print': { display: 'none' } }}
                  >
                    Umów spotkanie
                    <Icon name="arrow" size={15} />
                  </Box>
                  <PrintButton />
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ── Info bar ── */}
        <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 4, md: 5 }, '@media print': { py: 3 } }}>
          <Container maxWidth="lg">
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 5, md: 10 } }}>
              {[
                { label: 'Termin',      value: '14–15 października 2026' },
                { label: 'Godziny',     value: 'śr 9–16 · czw 9–15' },
                { label: 'Lokalizacja', value: 'EXPO Kraków' },
                { label: 'Stoisko',     value: 'B33' },
                { label: 'Wstęp',       value: 'bezpłatny po rejestracji' },
              ].map(({ label, value }) => (
                <Box key={label} sx={{ pl: 1.75, borderLeft: `2px solid color-mix(in srgb, ${ACCENT} 55%, transparent)` }}>
                  <Typography sx={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--dim-45)', mb: 0.6 }}>
                    {label}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '1rem', md: '1.15rem' }, fontWeight: 800, color: 'var(--dim-85)', letterSpacing: '-0.01em' }}>
                    {value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ── Co zobaczysz na stoisku ── */}
        <Box className="sym-avoid" sx={{ py: { xs: 6, md: 10 }, '@media print': { py: 4 } }}>
          <Container maxWidth="lg">
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 8 }, alignItems: 'center', '@media print': { gridTemplateColumns: '1.35fr 1fr', gap: '24px', alignItems: 'start' } }}>
              <Box>
                <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 1.5 }}>
                  Co zobaczysz na stoisku B33
                </Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.85rem' }, fontWeight: 800, letterSpacing: '-0.025em', color: 'var(--dim-85)', lineHeight: 1.2, mb: 3, maxWidth: 520 }}>
                  Pionowa maszyna Essegi F1000 — na żywo, w pracy
                </Typography>
                <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: TEXT_DIM, mb: 4, maxWidth: 520 }}>
                  Pionowe maszyny pakujące (VFFS) formują worek z folii, dozują produkt i zgrzewają
                  opakowanie w jednym cyklu — to najszybszy sposób pakowania produktów sypkich,
                  granulowanych i proszkowych: od mąki, kaszy, cukru i przypraw, po granulaty, nawozy
                  i&nbsp;pellet. Na stoisku pokażemy <b>Essegi F1000</b> — maszynę włoskiego producenta
                  <b> Essegi</b>, którego MadejPak jest przedstawicielem w Polsce. Dobieramy maszynę pod
                  konkretny produkt i&nbsp;spinamy ją w kompletną, zautomatyzowaną linię — z paletyzacją,
                  robotyzacją i&nbsp;własnym serwisem.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  {HIGHLIGHTS.map((h) => (
                    <Box key={h.title} sx={{ display: 'flex', gap: 2 }}>
                      <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, mt: '8px' }} />
                      <Box>
                        <Typography sx={{ fontSize: '1rem', fontWeight: 800, color: 'var(--dim-85)', mb: 0.4 }}>{h.title}</Typography>
                        <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.7, color: TEXT_DIM }}>{h.desc}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box sx={{ position: 'relative', aspectRatio: '4 / 3', borderRadius: '4px', overflow: 'hidden', border: `1px solid ${BORDER}`, bgcolor: '#f2f2f2', '@media print': { width: '100%', maxWidth: '280px', justifySelf: 'end' } }}>
                <Image src="/images/targi/essegi-f1000.jpg" alt="Essegi F1000 — pionowa maszyna pakująca VFFS" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 50vw" />
                <Box sx={{ position: 'absolute', left: 12, bottom: 12, px: 1.25, py: 0.5, borderRadius: '3px', bgcolor: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(4px)' }}>
                  <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.04em', color: '#fff' }}>Essegi F1000</Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ── Przygotuj się do rozmowy ── */}
        <Box className="sym-avoid" sx={{ borderTop: `1px solid ${BORDER}`, py: { xs: 8, md: 12 }, '@media print': { py: 4 } }}>
          <Container maxWidth="lg">
            <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 1.5 }}>
              Przygotuj się do rozmowy
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.85rem' }, fontWeight: 800, letterSpacing: '-0.025em', color: 'var(--dim-85)', lineHeight: 1.2, mb: 1.5, maxWidth: 620 }}>
              Trzy pytania, od których zaczniemy
            </Typography>
            <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: TEXT_DIM, mb: { xs: 4, md: 5 }, maxWidth: 640 }}>
              Z tymi danymi dobierzemy na stoisku kierunek — model Essegi albo system Concetti, razem
              z dozowaniem, transportem worków i paletyzacją.
            </Typography>
            <Box
              component={Link}
              href="/maszyny/pionowe-maszyny-pakujace#problemy"
              sx={{
                display: 'inline-flex', alignItems: 'center', gap: 1, mt: -2, mb: { xs: 4, md: 5 },
                px: 2, py: 1, borderRadius: '3px', border: `1px solid ${BORDER}`, bgcolor: BG_CARD,
                fontSize: '0.84rem', color: 'var(--dim-75)', textDecoration: 'none',
                transition: 'border-color 0.15s ease, color 0.15s ease',
                '&:hover': { borderColor: ACCENT, color: ACCENT },
                '@media print': { display: 'none' },
              }}
            >
              <Box component="span" sx={{ fontWeight: 700 }}>Masz już linię?</Box>
              Problem z wagą, pyleniem albo wydajnością — zobacz, od czego zaczynamy diagnozę
              <Icon name="arrow" size={14} />
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: { xs: 2, md: 3 }, mb: { xs: 6, md: 8 }, '@media print': { gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', mb: 3 } }}>
              {QUESTIONS.map((item, i) => (
                <Box key={item.q} className="sym-card" sx={{ p: { xs: 3, md: 3.5 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', '@media print': { p: 2 } }}>
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', color: ACCENT, mb: 1.5 }}>
                    {i + 1}
                  </Typography>
                  <Typography variant="h3" sx={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--dim-85)', mb: 0.75 }}>
                    {item.q}
                  </Typography>
                  <Typography sx={{ fontSize: '0.86rem', lineHeight: 1.65, color: TEXT_DIM }}>{item.a}</Typography>
                </Box>
              ))}
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 6 }, '@media print': { display: 'none' } }}>
              {[
                { title: 'Gama maszyn pionowych', items: RANGE.map((r) => ({ name: r.name, desc: r.spec, href: r.href })) },
                { title: 'Zobacz nasze realizacje', items: CASES },
              ].map((col) => (
                <Box key={col.title} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
                  <Box sx={{ px: 3.5, py: 2.25, borderBottom: `1px solid ${BORDER}` }}>
                    <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: TEXT_DIM }}>
                      {col.title}
                    </Typography>
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

        {/* ── Informacje praktyczne dla gości ── */}
        <Box sx={{ bgcolor: BG_ALT, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 }, '@media print': { py: 4 } }}>
          <Container maxWidth="lg">
            <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 1.5 }}>
              Informacje dla gości
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.85rem' }, fontWeight: 800, letterSpacing: '-0.025em', color: 'var(--dim-85)', lineHeight: 1.2, mb: { xs: 4, md: 6 }, maxWidth: 620 }}>
              Wszystko, czego potrzebujesz, by nas odwiedzić
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: { xs: 3, md: 4 }, '@media print': { gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' } }}>
              {/* Godziny otwarcia */}
              <Box className="sym-card" sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `2px solid ${ACCENT}`, borderRadius: '4px', p: { xs: 3, md: 3.5 }, transition: 'transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease', '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 12px 28px -18px rgba(0,0,0,0.35)', borderColor: 'var(--surface-13)' }, '@media print': { p: 2 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '10px', bgcolor: `color-mix(in srgb, ${ACCENT} 12%, transparent)`, color: ACCENT }}>
                    <Icon name="clock" size={20} />
                  </Box>
                  <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: TEXT_DIM }}>
                    Godziny otwarcia
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                    <Typography sx={{ fontSize: '0.9rem', color: 'var(--dim-75)' }}>Środa, 14.10</Typography>
                    <Typography sx={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--dim-85)' }}>9:00–16:00</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                    <Typography sx={{ fontSize: '0.9rem', color: 'var(--dim-75)' }}>Czwartek, 15.10</Typography>
                    <Typography sx={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--dim-85)' }}>9:00–15:00</Typography>
                  </Box>
                </Box>
                <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.7, color: TEXT_DIM, mt: 2.5 }}>
                  EXPO Kraków, ul. Galicyjska 9, 31-586 Kraków — stoisko&nbsp;<b>B33</b>.
                </Typography>
              </Box>

              {/* Wstęp + rejestracja */}
              <Box className="sym-card" sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `2px solid ${ACCENT}`, borderRadius: '4px', p: { xs: 3, md: 3.5 }, display: 'flex', flexDirection: 'column', transition: 'transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease', '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 12px 28px -18px rgba(0,0,0,0.35)', borderColor: 'var(--surface-13)' }, '@media print': { p: 2 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '10px', bgcolor: `color-mix(in srgb, ${ACCENT} 12%, transparent)`, color: ACCENT }}>
                    <Icon name="ticket" size={20} />
                  </Box>
                  <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: TEXT_DIM }}>
                    Wstęp i rejestracja
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.75, color: TEXT_DIM, mb: 2.5 }}>
                  Wstęp dla gości branżowych jest <b>bezpłatny po wcześniejszej rejestracji online</b>
                  {' '}(bez rejestracji — 80&nbsp;zł). Zarejestruj się i&nbsp;odbierz bilet przed targami.
                </Typography>
                <Box
                  component="a"
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mt: 'auto', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 1, px: 2.5, py: 1.25, bgcolor: ACCENT, borderRadius: '3px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', transition: 'background-color 0.15s ease', '&:hover': { bgcolor: '#D45509' }, '@media print': { display: 'none' } }}
                >
                  Rejestracja gości →
                </Box>
                <Typography sx={{ display: 'none', '@media print': { display: 'block' }, fontSize: '0.78rem', color: '#444', mt: 1 }}>
                  Rejestracja: symas.exposupport.pl
                </Typography>
              </Box>

              {/* Dojazd */}
              <Box className="sym-card" sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `2px solid ${ACCENT}`, borderRadius: '4px', p: { xs: 3, md: 3.5 }, display: 'flex', flexDirection: 'column', transition: 'transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease', '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 12px 28px -18px rgba(0,0,0,0.35)', borderColor: 'var(--surface-13)' }, '@media print': { p: 2 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '10px', bgcolor: `color-mix(in srgb, ${ACCENT} 12%, transparent)`, color: ACCENT }}>
                    <Icon name="transit" size={20} />
                  </Box>
                  <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: TEXT_DIM }}>
                    Dojazd — komunikacja miejska
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {TRANSIT.map((t) => (
                    <Box key={t.line}>
                      <Typography sx={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--dim-85)' }}>{t.line}</Typography>
                      <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM }}>{t.stop}</Typography>
                    </Box>
                  ))}
                </Box>
                <Box
                  component="a"
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mt: 3, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 1, px: 2.5, py: 1.25, border: `1px solid ${ACCENT}`, borderRadius: '3px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: ACCENT, textDecoration: 'none', transition: 'background-color 0.15s ease, color 0.15s ease', '&:hover': { bgcolor: ACCENT, color: '#fff' }, '@media print': { display: 'none' } }}
                >
                  <Icon name="pin" size={16} />
                  Otwórz w Mapach Google
                </Box>
              </Box>
            </Box>

            {/* Duża osadzona mapa dojazdu */}
            <Box sx={{ mt: { xs: 3, md: 4 }, borderRadius: '4px', overflow: 'hidden', border: `1px solid ${BORDER}`, position: 'relative', '@media print': { display: 'none' } }}>
              <Box
                component="iframe"
                title="Mapa dojazdu — EXPO Kraków, ul. Galicyjska 9"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sx={{ display: 'block', width: '100%', height: { xs: 260, md: 340 }, border: 0, filter: 'grayscale(0.15)' }}
              />
            </Box>

            {/* Linki wewnętrzne — maszyny na stoisku */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: { xs: 4, md: 5 }, '@media print': { display: 'none' } }}>
              <Box component={Link} href="/maszyny/pionowe-maszyny-pakujace" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2.5, py: 1.1, border: `1px solid ${BORDER}`, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--dim-75)', textDecoration: 'none', transition: 'border-color 0.15s ease, color 0.15s ease', '&:hover': { borderColor: 'var(--dim-20)', color: ACCENT } }}>
                Pionowe maszyny pakujące →
              </Box>
              <Box component={Link} href="/maszyny/partnerzy" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2.5, py: 1.1, border: `1px solid ${BORDER}`, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--dim-75)', textDecoration: 'none', transition: 'border-color 0.15s ease, color 0.15s ease', '&:hover': { borderColor: 'var(--dim-20)', color: ACCENT } }}>
                Essegi — partner MadejPak →
              </Box>
              <Box component={Link} href="/targi-i-wydarzenia" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2.5, py: 1.1, border: `1px solid ${BORDER}`, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--dim-75)', textDecoration: 'none', transition: 'border-color 0.15s ease, color 0.15s ease', '&:hover': { borderColor: 'var(--dim-20)', color: ACCENT } }}>
                Wszystkie targi i wydarzenia →
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ── Contact + useful links (screen only) ── */}
        <Box sx={{ bgcolor: BG_ALT, borderTop: `1px solid ${BORDER}`, py: { xs: 10, md: 14 }, '@media print': { display: 'none' } }}>
          <Container maxWidth="lg">
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 12 }, alignItems: 'start' }}>
              <Box>
                <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                  Kontakt
                </Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.025em', mb: 2.5 }}>
                  Planujesz wizytę<br />na SYMAS &amp; MAINTENANCE?
                </Typography>
                <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.8, color: TEXT_DIM, mb: 4 }}>
                  Skontaktuj się z nami wcześniej — umówimy spotkanie na stoisku B33, przygotujemy materiały dopasowane do Twojej branży i odpowiemy na pytania.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
                  {[
                    { name: 'Adam Madej',           tel: '+48 603 664 755', telHref: 'tel:+48603664755', email: 'a.madej@madejpak.pl' },
                    { name: 'Bartłomiej Zyznawski', tel: '+48 697 097 997', telHref: 'tel:+48697097997', email: 'b.zyznawski@madejpak.pl' },
                  ].map((p) => (
                    <Box key={p.name} sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dim-45)' }}>
                        {p.name}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1.5, sm: 3 } }}>
                        <Box component="a" href={p.telHref} sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.25, textDecoration: 'none', '&:hover .v': { color: ACCENT }, '&:hover .ico': { bgcolor: ACCENT, color: '#fff', borderColor: ACCENT } }}>
                          <Box className="ico" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: '50%', border: `1px solid ${BORDER}`, color: ACCENT, transition: 'all 0.15s ease' }}>
                            <Icon name="phone" size={15} />
                          </Box>
                          <Typography className="v" sx={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--dim-85)', transition: 'color 0.15s ease' }}>{p.tel}</Typography>
                        </Box>
                        <Box component="a" href={`mailto:${p.email}`} sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.25, textDecoration: 'none', '&:hover .v': { color: ACCENT }, '&:hover .ico': { bgcolor: ACCENT, color: '#fff', borderColor: ACCENT } }}>
                          <Box className="ico" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: '50%', border: `1px solid ${BORDER}`, color: ACCENT, transition: 'all 0.15s ease' }}>
                            <Icon name="mail" size={15} />
                          </Box>
                          <Typography className="v" sx={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--dim-85)', transition: 'color 0.15s ease' }}>{p.email}</Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                  {/* Biuro / sekretariat */}
                  <Box component="a" href="mailto:biuro@madejpak.pl" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.25, textDecoration: 'none', width: 'fit-content', '&:hover .v': { color: ACCENT }, '&:hover .ico': { bgcolor: ACCENT, color: '#fff', borderColor: ACCENT } }}>
                    <Box className="ico" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: '50%', border: `1px solid ${BORDER}`, color: ACCENT, transition: 'all 0.15s ease' }}>
                      <Icon name="mail" size={15} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dim-45)' }}>Biuro</Typography>
                      <Typography className="v" sx={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--dim-85)', transition: 'color 0.15s ease' }}>biuro@madejpak.pl</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  <Box
                    component={Link}
                    href="/kontakt"
                    sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 3.5, py: 1.5, bgcolor: ACCENT, borderRadius: '3px', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', transition: 'background-color 0.15s ease', '&:hover': { bgcolor: '#D45509' } }}
                  >
                    Napisz do nas
                    <Icon name="arrow" size={15} />
                  </Box>
                  <Box
                    component="a"
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 3.5, py: 1.5, border: `1px solid ${BORDER}`, borderRadius: '3px', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--dim-75)', textDecoration: 'none', transition: 'border-color 0.15s ease, color 0.15s ease', '&:hover': { borderColor: ACCENT, color: ACCENT } }}
                  >
                    <Icon name="pin" size={16} />
                    Zobacz dojazd
                  </Box>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {/* Stand summary */}
                <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
                  <Box sx={{ px: 3.5, py: 2.5, borderBottom: `1px solid ${BORDER}` }}>
                    <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: TEXT_DIM }}>
                      Nasze stoisko
                    </Typography>
                  </Box>
                  {[
                    { label: 'SYMAS & MAINTENANCE 2026', val: 'EXPO Kraków' },
                    { label: 'Stoisko', val: 'B33' },
                    { label: 'Na żywo', val: 'Essegi F1000' },
                    { label: 'Termin', val: '14–15.10.2026' },
                  ].map(({ label, val }, idx, arr) => (
                    <Box key={label} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 3.5, py: 1.75, borderBottom: idx < arr.length - 1 ? `1px solid ${BORDER}` : 'none' }}>
                      <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--dim-75)' }}>{label}</Typography>
                      <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: ACCENT }}>{val}</Typography>
                    </Box>
                  ))}
                </Box>

                {/* Useful links */}
                <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
                  <Box sx={{ px: 3.5, py: 2.5, borderBottom: `1px solid ${BORDER}` }}>
                    <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: TEXT_DIM }}>
                      Przydatne informacje
                    </Typography>
                  </Box>
                  {[
                    { label: 'Rejestracja gości', desc: 'Bezpłatny wstęp branżowy po rejestracji online', href: REGISTRATION_URL },
                    { label: 'Strona targów', desc: 'SYMAS & MAINTENANCE — program i godziny', href: 'https://symas.krakow.pl/' },
                    { label: 'Dojazd — EXPO Kraków', desc: 'ul. Galicyjska 9, 31-586 Kraków', href: 'https://www.google.com/maps/search/?api=1&query=EXPO+Krak%C3%B3w+ul.+Galicyjska+9' },
                  ].map(({ label, desc, href }, idx, arr) => (
                    <Box key={label} component="a" href={href} target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 3.5, py: 1.75, borderBottom: idx < arr.length - 1 ? `1px solid ${BORDER}` : 'none', textDecoration: 'none', transition: 'background-color 0.15s ease', '&:hover': { bgcolor: 'var(--surface-03)' } }}>
                      <Box>
                        <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--dim-75)', mb: 0.2 }}>{label}</Typography>
                        <Typography sx={{ fontSize: '0.7rem', color: TEXT_DIM }}>{desc}</Typography>
                      </Box>
                      <Typography sx={{ fontSize: '0.75rem', color: ACCENT, flexShrink: 0 }}>→</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ── Print footer ── */}
        <Box sx={{ display: 'none', '@media print': { display: 'block', borderTop: '1px solid #ddd', pt: 4, mt: 4, pb: 3 } }}>
          <Container maxWidth="lg">
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4 }}>
              <Box>
                <Typography sx={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', mb: 1 }}>
                  Kontakt — umów spotkanie
                </Typography>
                <Typography sx={{ fontSize: '0.78rem', color: '#444', lineHeight: 1.8 }}>
                  Adam Madej · +48 603 664 755<br />
                  a.madej@madejpak.pl<br />
                  Bartłomiej Zyznawski · +48 697 097 997<br />
                  b.zyznawski@madejpak.pl<br />
                  biuro@madejpak.pl · madejpak.pl
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', mb: 1 }}>
                  Nasze stoisko
                </Typography>
                <Typography sx={{ fontSize: '0.78rem', color: '#444', lineHeight: 1.8 }}>
                  SYMAS &amp; MAINTENANCE 2026<br />
                  EXPO Kraków · Stoisko B33<br />
                  14–15.10.2026 · śr 9–16, czw 9–15<br />
                  Na żywo: Essegi F1000
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', mb: 1 }}>
                  Przydatne linki
                </Typography>
                <Typography sx={{ fontSize: '0.78rem', color: '#444', lineHeight: 1.8 }}>
                  Rejestracja gości: symas.exposupport.pl<br />
                  Targi: symas.krakow.pl<br />
                  Dojazd: EXPO Kraków, ul. Galicyjska 9
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ── Stopka SYMAS — oficjalny baner na samym dole (ekran + PDF) ── */}
        <Box className="sym-avoid" sx={{ borderTop: `1px solid ${BORDER}`, py: { xs: 5, md: 7 }, '@media print': { py: 3, borderTop: '1px solid #ddd', mt: 2 } }}>
          <Container maxWidth="lg">
            <Box
              component="a"
              href="https://symas.krakow.pl/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: 'block', borderRadius: '4px', overflow: 'hidden', border: `1px solid ${BORDER}`, transition: 'border-color 0.15s ease, box-shadow 0.15s ease', '&:hover': { borderColor: 'var(--surface-13)', boxShadow: '0 12px 30px -20px rgba(0,0,0,0.4)' }, '@media print': { border: '1px solid #ddd', boxShadow: 'none' } }}
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
    </>
  );
}
