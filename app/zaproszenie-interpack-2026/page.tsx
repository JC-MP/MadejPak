import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import type { Metadata } from 'next';
import PrintButton from './PrintButton';

export const metadata: Metadata = {
  title: 'Zaproszenie — Interpack 2026 | MadejPak',
  description: 'MadejPak zaprasza na targi Interpack 2026 w Düsseldorfie. Odwiedź nas i naszych partnerów: Tecno Pack, EsseGi, Concetti, Vimco — 7–13 maja 2026.',
  robots: { index: false, follow: false },
};

// ─── Design tokens ────────────────────────────────────────────────────────────
const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';
const BG_CARD  = 'var(--bg-card)';
const BG_ALT   = 'var(--bg-alt)';

// ─── Data ─────────────────────────────────────────────────────────────────────
const PARTNERS = [
  {
    name:         'GSP (Tecnopack group)',
    group:        'Tecnopack Group · GSP (General System Pack)',
    logo:         '/logos/partnerzy/GSP LOGO.png',
    image:        '/images/machines/interpack-gsp.png',
    hall:         'Halle 5',
    stand:        'F22',
    interpackUrl:     'https://www.interpack.com/vis/v1/en/exhprofiles/8EaLFUvVSNSmpKXCu4QAQQ?ticket=g_u_e_s_t',
    presentationUrl:  'https://www.interpack.com/vis/v1/en/exhprofiles/8EaLFUvVSNSmpKXCu4QAQQ?utm_term=8EaLFUvVSNSmpKXCu4QAQQ&utm_campaign=exhibitor-share&utm_source=sharing&utm_medium=link',
    ticketUrl:    null as string | null,
    tags: ['Poziome flow-pack (H-FFS)', 'Pionowe VFFS', 'Termofoliowanie', 'Paletyzacja', 'Autonomiczny załadunek'],
    description:  'GSP (Tecnopack group), flagowa marka Tecnopack Group, prezentuje szerokie portfolio maszyn pakujących — od kompaktowych flow-pack i pionowych VFFS, przez owijanie termokurczliwe i pakowanie w kartony, po kompletne systemy paletyzacji z robotem przemysłowym i autonomiczny wózek załadunkowy ATL.  ',
    highlights: [
      { icon: 'wrap',  text: 'SSI-600 + TS — maszyna pakująca produkty w folię termokurczliwą z tunelem obkurczającym' },
      { icon: 'box',   text: 'FP 100 HP BOX MOTION — wysokowydajna maszyna do pakowania produktów w papierowy materiał opakowaniowy' },
    ],
    photos: [
      '/images/interpack/gsp-1.jpg',
      '/images/interpack/gsp-2.jpg',
    ],
  },
  {
    name:         'EsseGi',
    group:        'EsseGi',
    logo:         '/logos/partnerzy/essegi.png',
    image:        '/images/machines/interpack-essegi.png',
    hall:         'Halle 12',
    stand:        'D07',
    interpackUrl:     'https://www.interpack.com/vis/v1/en/exhprofiles/7Aa5RVwJT56dblxcY1Yp8Q?ticket=g_u_e_s_t',
    presentationUrl:  'https://www.interpack.com/vis/v1/en/exhprofiles/7Aa5RVwJT56dblxcY1Yp8Q?utm_term=7Aa5RVwJT56dblxcY1Yp8Q&utm_campaign=exhibitor-share&utm_source=sharing&utm_medium=link',
    ticketUrl:    null as string | null,
    tags: ['Pionowe VFFS', 'Systemy ważenia', 'Produkty sypkie', 'Linie mieszające', 'Balery', 'Automatyzacja przemysłowa'],
    description:  'EsseGi prezentuje na Interpack 2026 dwie maszyny z serii EVO/Syncro — obie wyposażone w nowy panel operatorski Siemens Unified MTP1000 (10") z intuicyjnym oprogramowaniem.',
    highlights: [
      { icon: 'vffs',  text: 'EVO 1000SYNCRO / INOX — wersja ze stali nierdzewnej · mieszanki przypraw do 12 kg · podajnik ślimakowy' },
      { icon: 'vffs',  text: 'EVO 1200SYNCRO — konstrukcja malowana, części kontaktowe ze stali nierdzewnej · karma rybna 20–25 kg · waga dwutaśmowa' },
      { icon: 'panel', text: 'Nowy interfejs Siemens Unified MTP1000 (10") — intuicyjna obsługa i nowe oprogramowanie na obu maszynach' },
    ],
    photos: [
      '/images/interpack/essegi-1.jpg',
      '/images/interpack/essegi-2.jpg',
      '/images/interpack/essegi-3.jpg',
    ],
  },
  {
    name:         'Concetti',
    group:        'Concetti',
    logo:         'https://link-pack.com/wp-content/uploads/2021/06/Concetti-logo.png',
    image:        '/images/machines/interpack-concetti.png',
    hall:         'Halle 12',
    stand:        'B10',
    interpackUrl:     'https://www.interpack.com/vis/v1/en/exhprofiles/rZxeuKpnRTKsbEnRKHSy3Q?ticket=g_u_e_s_t',
    presentationUrl:  'https://www.interpack.de/vis-content/event-interpack2026/exh-interpack2026.3007204/interpack-2026-Concetti-S.p.A.-Paper-interpack2026.3007204-Z07F4MQURVWDHf7VEznoKg.pdf',
    ticketUrl:    null as string | null,
    tags: ['Workowanie (VFFS)', 'Systemy Big Bag', 'Paletyzacja', 'Pet food', 'End-of-line'],
    description:  'Concetti projektuje i produkuje automatyczne rozwiązania do workowania produktów sypkich od 1975 roku. Specjalizuje się w systemach ważenia, workowania, paletyzacji i kompletnej automatyzacji końca linii. Na Interpack 2026 prezentuje nowości dla branży pet food, systemy Big Bag i kompletne linie pakujące.',
    highlights: [
      { icon: 'box',    text: 'IMF āles — innowacyjna maszyna workująca (open-mouth) zaprojektowana specjalnie dla sektora pet food' },
      { icon: 'bigbag', text: 'Automatyczny system Big Bag — wypełnianie worków Big Bag dla linii wysokowydajnych' },
      { icon: 'lab',    text: 'C-LAB — laboratorium charakteryzacji produktu przed fazą projektową' },
    ],
    photos: [
      '/images/interpack/concetti-1.jpg',
      '/images/interpack/concetti-2.jpg',
      '/images/interpack/concetti-3.jpg',
    ],
  },
  {
    name:         'Vimco',
    group:        'Vimco',
    logo:         'https://vimco.it/wp-content/uploads/2021/11/cropped-Logo_VIMCO.png',
    image:        '/images/machines/interpack-vimco.png',
    hall:         'Halle 13',
    stand:        'C59',
    interpackUrl:     'https://www.interpack.com/vis/v1/en/exhprofiles/HfS6kGvkSCaBInbfZpm6NQ?ticket=g_u_e_s_t',
    presentationUrl:  'https://www.interpack.de/vis-content/event-interpack2026/exh-interpack2026.3006861/interpack-2026-Vimco-S.r.l.-Product-interpack2026.3006861-QiGwlIahTTSMKdXy4Z8nzg.pdf',
    ticketUrl:    null as string | null,
    tags: ['Pakowanie wtórne', 'Box erecting', 'Wrap-around', 'Top-load', 'End-of-line turnkey'],
    description:  'Vimco to włoski producent maszyn do pakowania wtórnego z ponad 40-letnim doświadczeniem. Specjalizuje się w projektowaniu i produkcji kompletnych linii końca produkcji dla branży spożywczej i niespożywczej.',
    highlights: [
      { icon: 'carton', text: 'Kartoniarka z załadunkiem od boku — szczegółowe informacje wkrótce' },
    ],
    photos: [
      '/images/interpack/vimco-1.jpg',
    ],
  },
];

// ─── SVG Icons ────────────────────────────────────────────────────────────────
function Icon({ type }: { type: string }) {
  const paths: Record<string, React.ReactNode> = {
    box:     <path d="M2 6l6-4 6 4v7l-6 4-6-4V6zm6-4v11M2 6l6 4 6-4" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none" />,
    vffs:    <><rect x="4" y="2" width="8" height="12" rx="1" stroke="currentColor" strokeWidth="1.3" fill="none" /><path d="M4 6h8M4 10h8" stroke="currentColor" strokeWidth="1" /></>,
    wrap:    <path d="M2 5h12M2 11h12M5 2v12M11 2v12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />,
    pallet:  <><path d="M1 11h14M1 13h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /><path d="M3 7h4v4H3zM9 7h4v4H9zM5 3h6v4H5z" stroke="currentColor" strokeWidth="1.2" fill="none" /></>,
    truck:   <><path d="M1 10V5l4-3h6v8H1z" stroke="currentColor" strokeWidth="1.2" fill="none" /><path d="M11 7h3l2 3v3h-5V7z" stroke="currentColor" strokeWidth="1.2" fill="none" /><circle cx="4" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.2" fill="none" /><circle cx="12" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.2" fill="none" /></>,
    panel:   <><rect x="2" y="2" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.3" fill="none" /><path d="M5 14h6M8 12v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></>,
    bigbag:  <><path d="M4 4h8v9a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" stroke="currentColor" strokeWidth="1.3" fill="none" /><path d="M6 2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M7 8h2M7 11h2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" /></>,
    line:    <><circle cx="3" cy="8" r="2" stroke="currentColor" strokeWidth="1.2" fill="none" /><circle cx="13" cy="8" r="2" stroke="currentColor" strokeWidth="1.2" fill="none" /><circle cx="8" cy="4" r="2" stroke="currentColor" strokeWidth="1.2" fill="none" /><path d="M5 8h6M8 6v2" stroke="currentColor" strokeWidth="1.2" /></>,
    lab:     <><path d="M6 2v6l-4 6h12L10 8V2" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none" /><path d="M5 2h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></>,
    service: <><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" fill="none" /><path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></>,
    carton:  <><path d="M2 5h12v9H2z" stroke="currentColor" strokeWidth="1.3" fill="none" /><path d="M2 5l6-3 6 3M8 5v9" stroke="currentColor" strokeWidth="1.3" /></>,
  };
  return (
    <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden sx={{ width: 13, height: 13, flexShrink: 0, mt: '3px', color: ACCENT, opacity: 0.85 }}>
      {paths[type] ?? paths['box']}
    </Box>
  );
}

function TagPill({ label }: { label: string }) {
  return (
    <Box sx={{
      display: 'inline-block',
      px: 1.25,
      py: 0.4,
      border: `1px solid ${BORDER}`,
      borderRadius: '2px',
      fontSize: '0.62rem',
      fontWeight: 600,
      letterSpacing: '0.04em',
      color: 'var(--dim-55)',
      bgcolor: BG_CARD,
      whiteSpace: 'nowrap',
    }}>
      {label}
    </Box>
  );
}

function StandBadge({ hall, stand, url }: { hall: string; stand: string; url: string }) {
  return (
    <Box
      component="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        px: 2,
        py: 1.25,
        bgcolor: `${ACCENT}B3`,
        border: `1px solid ${ACCENT}35`,
        borderRadius: '3px',
        minWidth: 140,
        textDecoration: 'none',
        transition: 'background-color 0.15s ease',
        '&:hover': { bgcolor: `${ACCENT}F0` },
      }}
    >
      <Typography sx={{ fontSize: '0.57rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', mb: 0.4 }}>
        Stoisko · Interpack
      </Typography>
      <Typography sx={{ fontSize: '0.95rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
        {hall} / {stand}
      </Typography>
      <Typography sx={{ fontSize: '0.67rem', color: 'rgba(255,255,255,0.75)', mt: 0.3 }}>
        Zobacz profil →
      </Typography>
    </Box>
  );
}

function LogoArea({ logo, name }: { logo: string | null; name: string }) {
  if (logo) {
    const isExternal = logo.startsWith('http');
    return (
      <Box sx={{ mb: 2.5, height: 44, display: 'flex', alignItems: 'center', '@media print': { height: 34 } }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt={`${name} logo`} style={{ maxHeight: 44, maxWidth: 140, objectFit: 'contain', objectPosition: 'left' }} />
      </Box>
    );
  }
  return (
    <Box sx={{ mb: 2.5, height: 44, display: 'flex', alignItems: 'center' }}>
      <Typography sx={{ fontSize: '1.15rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--dim-75)' }}>
        {name}
      </Typography>
    </Box>
  );
}

function PartnerBlock({ partner, index }: { partner: typeof PARTNERS[0]; index: number }) {
  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', md: '220px 1fr' },
      gap: { xs: 4, md: 8 },
      borderTop: `1px solid ${BORDER}`,
      pt: { xs: 6, md: 8 },
      '@media print': { pageBreakInside: 'avoid', pt: 5, gap: 4 },
    }}>
      {/* Left */}
      <Box>
        {/* <Typography sx={{ fontSize: '0.57rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--dim-45)', mb: 1.5 }}>
          Partner {String(index + 1).padStart(2, '0')}
        </Typography> */}
        <LogoArea logo={partner.logo} name={partner.name} />
        {partner.group && (
          <Typography sx={{ fontSize: '0.68rem', color: TEXT_DIM, mb: 2.5, lineHeight: 1.5 }}>
            {partner.group}
          </Typography>
        )}
        {!partner.group && <Box sx={{ mb: 2.5 }} />}
        <StandBadge hall={partner.hall} stand={partner.stand} url={partner.interpackUrl} />
        {partner.presentationUrl && (
          <Box
            component="a"
            href={partner.presentationUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              mt: 1.5,
              fontSize: '0.7rem',
              fontWeight: 600,
              color: ACCENT,
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
              '@media print': { display: 'none' },
            }}
          >
            Prezentacja firmy →
          </Box>
        )}
      </Box>

      {/* Right */}
      <Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 3 }}>
          {partner.tags.map((t) => <TagPill key={t} label={t} />)}
        </Box>

        <Typography sx={{ fontSize: '0.88rem', lineHeight: 1.85, color: TEXT_DIM, mb: 3.5 }}>
          {partner.description}
        </Typography>

        {partner.ticketUrl && (
          <Box
            component="a"
            href={partner.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              px: 2.5,
              py: 1.5,
              mb: 3.5,
              bgcolor: `${ACCENT}0D`,
              border: `1px solid ${ACCENT}40`,
              borderRadius: '3px',
              textDecoration: 'none',
              transition: 'background-color 0.15s ease',
              '&:hover': { bgcolor: `${ACCENT}1A` },
              '@media print': { display: 'none' },
            }}
          >
            <Box component="svg" viewBox="0 0 20 20" fill="none" sx={{ width: 18, height: 18, flexShrink: 0, color: ACCENT }}>
              <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 4v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </Box>
            <Box>
              <Typography sx={{ fontSize: '0.74rem', fontWeight: 700, color: ACCENT, lineHeight: 1.3 }}>
                Bezpłatny bilet wstępu na targi
              </Typography>
              <Typography sx={{ fontSize: '0.68rem', color: TEXT_DIM, mt: 0.25 }}>
                Zarejestruj się przez formularz Concetti i wejdź na targi bezpłatnie →
              </Typography>
            </Box>
          </Box>
        )}

        <Typography sx={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, mb: 1.75 }}>
          Co zobaczycie na stoisku
        </Typography>
        <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
          {partner.highlights.map((item) => (
            <Box
              key={item.text}
              component="li"
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1.5,
                py: 0.9,
                borderBottom: `1px solid ${BORDER}`,
                '&:last-child': { borderBottom: 'none' },
              }}
            >
              <Icon type={item.icon} />
              <Typography sx={{ fontSize: '0.84rem', lineHeight: 1.65, color: TEXT_DIM }}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>

        {partner.photos && partner.photos.length > 0 && (
          <Box sx={{
            mt: 3,
            display: 'grid',
            gridTemplateColumns: `repeat(${partner.photos.length}, 1fr)`,
            gap: 1.5,
            '@media print': { display: 'none' },
          }}>
            {partner.photos.map((src, i) => (
              <Box key={i} sx={{ position: 'relative', aspectRatio: '4/3', borderRadius: '3px', overflow: 'hidden', bgcolor: 'var(--bg-card)' }}>
                <Image src={src} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function InterpackInvitationPage() {
  return (
    <>
      <style>{`
        @media print {
          header, footer { display: none !important; }
          body { background: #fff !important; color: #111 !important; }
          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>

      <Box sx={{ bgcolor: 'var(--bg)', minHeight: '100vh', color: 'var(--text)' }}>
        <Box sx={{ height: { xs: 64, lg: 72 }, '@media print': { display: 'none' } }} />

        {/* ── Hero ── */}
        <Box sx={{ borderBottom: `1px solid ${BORDER}`, py: { xs: 10, md: 14 }, '@media print': { py: 5 } }}>
          <Container maxWidth="lg">
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 6, md: 10 }, alignItems: 'end' }}>
              <Box>
                {/* MadejPak logo — 30% większe niż baseline 140px */}
                <Box sx={{ mb: 3, '@media print': { mb: 2 } }}>
                  <Image src="/MadejPakLogo.svg" alt="MadejPak" width={182} height={47} style={{ objectFit: 'contain', objectPosition: 'left' }} />
                </Box>

                <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                  Zaproszenie · Targi branżowe
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                    fontWeight: 800,
                    lineHeight: 1.05,
                    letterSpacing: '-0.03em',
                    color: 'var(--dim-85)',
                    mb: 1,
                  }}
                >
                  Interpack
                  <br />
                  <Box component="span" sx={{ color: ACCENT }}>2026</Box>
                </Typography>
                <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, color: TEXT_DIM, lineHeight: 1.6, mt: 2 }}>
                  7–13 maja 2026 · Düsseldorf, Niemcy
                </Typography>
              </Box>

              <Box>
                {/* Bold heading + rest of text */}
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    fontWeight: 800,
                    lineHeight: 1.5,
                    color: 'var(--dim-85)',
                    mb: 1.5,
                  }}
                >
                  Mamy przyjemność zaprosić Państwa na największe
                  światowe targi branży pakowania.
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.93rem', md: '1rem' }, lineHeight: 1.85, color: TEXT_DIM, mb: 1.5 }}>
                  MadejPak będzie obecny na stoiskach swoich partnerów technologicznych —
                  zapraszamy do odwiedzenia czterech stoisk z nowościami w branżach maszyn pakujących i paletyzujących.
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.93rem', md: '1rem' }, lineHeight: 1.85, color: 'var(--dim-85)', fontWeight: 700, mb: 4 }}>
                  Prosimy o kontakt w celu otrzymania bezpłatnych biletów wstępu.
                </Typography>
                       <Typography sx={{ fontSize: { xs: '0.93rem', md: '1rem' }, lineHeight: 1.8, color: 'var(--dim-85)', fontWeight: 500, mb: 4 }}>
               <a  href= 'tel:+48603664755'>Adam Madej +48 603 664 755</a>  <br/>          
                <a href= 'tel:+48697097997'>Bartłomiej Zyznawski +48 697 097 997</a>   
             
                </Typography>
                   <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  <Box
                    component={Link}
                    href="/kontakt"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1.5,
                      px: 3,
                      py: 1.25,
                      bgcolor: ACCENT,
                      borderRadius: '3px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: '#fff',
                      textDecoration: 'none',
                      transition: 'background-color 0.15s ease',
                      '&:hover': { bgcolor: '#D45509' },
                      '@media print': { display: 'none' },
                    }}
                  >
                    Umów spotkanie
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
                { label: 'Termin',     value: '7–13 maja 2026' },
                { label: 'Lokalizacja',value: 'Messe Düsseldorf, Niemcy' },
                { label: 'Partnerzy', value: '4 stoiska w 3 halach' },
                { label: 'Branża',    value: 'Technologie pakowania' },
              ].map(({ label, value }) => (
                <Box key={label}>
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

        {/* ── Partners ── */}
        <Box sx={{ py: { xs: 6, md: 10 }, '@media print': { py: 4 } }}>
          <Container maxWidth="lg">
            <Box sx={{ mb: { xs: 6, md: 8 } }}>
              <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 1.5 }}>
                Partnerzy technologiczni MadejPak
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.4rem', md: '1.75rem' },
                  fontWeight: 800,
                  letterSpacing: '-0.025em',
                  color: 'var(--dim-85)',
                  lineHeight: 1.2,
                  maxWidth: 580,
                }}
              >
                Cztery stoiska, jedna misja — nowoczesne technologie pakowania
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 6, md: 2 } }}>
              {PARTNERS.map((partner, i) => (
                <PartnerBlock key={partner.name} partner={partner} index={i} />
              ))}
            </Box>
          </Container>
        </Box>

        {/* ── Contact + useful links (screen only) ── */}
        <Box sx={{
          bgcolor: BG_ALT,
          borderTop: `1px solid ${BORDER}`,
          py: { xs: 10, md: 14 },
          '@media print': { display: 'none' },
        }}>
          <Container maxWidth="lg">
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 5, md: 12 },
              alignItems: 'start',
            }}>
              <Box>
                <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                  Kontakt
                </Typography>
                <Typography
                  variant="h2"
                  sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.025em', mb: 2.5 }}
                >
                  Planujesz wizytę<br />na Interpack 2026?
                </Typography>
                <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.8, color: TEXT_DIM, mb: 4 }}>
                  Skontaktuj się z nami wcześniej — umówimy spotkanie na stoisku partnera,
                  przygotujemy materiały dopasowane do Twojej branży i odpowiemy na pytania.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
                  {[
                    { label: 'Adam Madej',             value: '+48 603 664 755', href: 'tel:+48603664755' },
                    { label: 'Bartłomiej Zyznawski',   value: '+48 697 097 997', href: 'tel:+48697097997' },
                    { label: 'E-mail',                 value: 'biuro@madejpak.pl', href: 'mailto:biuro@madejpak.pl' },
                  ].map(({ label, value, href }) => (
                    <Box key={label}>
                      <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dim-45)', mb: 0.4 }}>
                        {label}
                      </Typography>
                      <Typography
                        component="a"
                        href={href}
                        sx={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--dim-75)', textDecoration: 'none', '&:hover': { color: ACCENT } }}
                      >
                        {value}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.75, color: TEXT_DIM, mb: 3, fontStyle: 'italic' }}>
                  Jeśli są Państwo zainteresowani odwiedzeniem stoisk naszych partnerów technologicznych na targach, prosimy o kontakt — istnieje możliwość udostępnienia bezpłatnych wejściówek.
                </Typography>
                <Box
                  component={Link}
                  href="/kontakt"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: 3.5,
                    py: 1.5,
                    bgcolor: ACCENT,
                    borderRadius: '3px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    textDecoration: 'none',
                    transition: 'background-color 0.15s ease',
                    '&:hover': { bgcolor: '#D45509' },
                  }}
                >
                  Napisz do nas
                </Box>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {/* Stand summary */}
                <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
                  <Box sx={{ px: 3.5, py: 2.5, borderBottom: `1px solid ${BORDER}` }}>
                    <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: TEXT_DIM }}>
                      Kliknij po wiecej informacji o stoiskach:
                    </Typography>
                  </Box>
                  {PARTNERS.map(({ name, logo, hall, stand, interpackUrl }, idx) => (
                    <Box
                      key={name}
                      component="a"
                      href={interpackUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: 3.5,
                        py: 1.75,
                        borderBottom: idx < PARTNERS.length - 1 ? `1px solid ${BORDER}` : 'none',
                        textDecoration: 'none',
                        transition: 'background-color 0.15s ease',
                        '&:hover': { bgcolor: 'var(--surface-03)' },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        {logo
                          ? <img src={logo} alt={name} style={{ maxHeight: 22, maxWidth: 64, objectFit: 'contain', objectPosition: 'left' }} />
                          : <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--dim-75)' }}>{name}</Typography>
                        }
                      </Box>
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: ACCENT }}>{hall} / {stand}</Typography>
                        <Typography sx={{ fontSize: '0.65rem', color: TEXT_DIM }}>Interpack →</Typography>
                      </Box>
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
                    { label: 'Wskazówki dojazdu', desc: 'Jak dotrzeć na Messe Düsseldorf', href: 'https://www.interpack.com/en/Visit/Preparations/Arrival' },
                    { label: 'Mapa obiektu', desc: 'Plan hal i stoisk targowych', href: 'https://www.interpack.com/en/Visit/Preparations/Floor_Plan_Site_Map' },
                  ].map(({ label, desc, href }, idx, arr) => (
                    <Box
                      key={label}
                      component="a"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: 3.5,
                        py: 1.75,
                        borderBottom: idx < arr.length - 1 ? `1px solid ${BORDER}` : 'none',
                        textDecoration: 'none',
                        transition: 'background-color 0.15s ease',
                        '&:hover': { bgcolor: 'var(--surface-03)' },
                      }}
                    >
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
                  Kontakt MadejPak
                </Typography>
                <Typography sx={{ fontSize: '0.78rem', color: '#444', lineHeight: 1.8 }}>
                  PPHU MadejPak Sp. z o.o.<br />
                  Dziewin 333, 32-708 Dziewin<br />
                  tel. +48 12 345 43 97<br />
                  biuro@madejpak.pl · madejpak.pl
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', mb: 1 }}>
                  Stoiska partnerów
                </Typography>
                {PARTNERS.map(({ name, hall, stand }) => (
                  <Typography key={name} sx={{ fontSize: '0.78rem', color: '#444', lineHeight: 1.8 }}>
                    {name} — {hall} / {stand}
                  </Typography>
                ))}
              </Box>
              <Box>
                <Typography sx={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', mb: 1 }}>
                  Przydatne linki
                </Typography>
                <Typography sx={{ fontSize: '0.78rem', color: '#444', lineHeight: 1.8 }}>
                  Dojazd: interpack.com/en/Visit/Preparations/Arrival<br />
                  Mapa: interpack.com/en/Visit/Preparations/Floor_Plan_Site_Map
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
