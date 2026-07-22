import { notFound } from 'next/navigation';
import CaseStudyVideo from '@/components/realizacje/CaseStudyVideo';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import type { Metadata } from 'next';
import { REALIZACJE } from '@/data/realizacjeData';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

// ─── Design tokens ──────────────────────────────────────────────────────────
const BG      = 'var(--bg)';
const BG_CARD = 'var(--bg-card)';
const BG_ALT  = 'var(--bg-alt)';
const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

// ─── Static params ───────────────────────────────────────────────────────────
export function generateStaticParams() {
  return REALIZACJE.filter((r) => r.status === 'pelne').map((r) => ({ slug: r.slug }));
}

// ─── Metadata ────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = REALIZACJE.find((r) => r.slug === slug);
  if (!item || item.status !== 'pelne') return { title: 'Realizacja | MadejPak' };

  const title = `${item.klient} — ${item.tytul}`;
  return {
    title,
    description: item.zajawka,
    alternates: { canonical: `${SITE_URL}/realizacje/${slug}` },
    openGraph: {
      url:         `${SITE_URL}/realizacje/${slug}`,
      title:       `${title} | MadejPak`,
      description: item.zajawka,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }],
    },
  };
}

// ─── Arrow icon ──────────────────────────────────────────────────────────────
function ArrowRight() {
  return (
    <Box
      component="svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      sx={{ width: 13, height: 13, flexShrink: 0 }}
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Box>
  );
}

// ─── Section block ────────────────────────────────────────────────────────────
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: ACCENT,
          mb: 2,
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}

// ─── Bullet list ─────────────────────────────────────────────────────────────
function BulletList({ items }: { items: string[] }) {
  return (
    <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
      {items.map((item) => (
        <Box
          key={item}
          component="li"
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 1.5,
            py: 0.75,
            borderBottom: `1px solid ${BORDER}`,
            '&:last-child': { borderBottom: 'none' },
          }}
        >
          <Box
            aria-hidden="true"
            sx={{
              width: 5,
              height: 5,
              borderRadius: '50%',
              bgcolor: ACCENT,
              flexShrink: 0,
              mt: '7px',
            }}
          />
          <Typography sx={{ fontSize: '0.875rem', lineHeight: 1.65, color: TEXT_DIM }}>
            {item}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default async function RealizacjaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = REALIZACJE.find((r) => r.slug === slug);

  if (!item || item.status !== 'pelne') notFound();

  return (
    <Box sx={{ bgcolor: BG, minHeight: '100vh', color: 'var(--text)' }}>
      {/* Nav spacer */}
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ── Hero ── */}
      <Box sx={{ borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          {/* Back link */}
          <Box
            component={Link}
            href="/realizacje"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              fontSize: '0.78rem',
              color: TEXT_DIM,
              textDecoration: 'none',
              mb: 4,
              transition: 'color 0.15s ease',
              '&:hover': { color: 'var(--dim-72)' },
            }}
          >
            <Box
              component="svg"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              sx={{ width: 13, height: 13 }}
            >
              <path
                d="M13 8H3M7 4L3 8l4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Box>
            Realizacje
          </Box>

          {/* Branza + tags */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
            {item.branzaLabel && (
              <Box
                sx={{
                  px: 1.5,
                  py: 0.4,
                  border: `1px solid ${BORDER}`,
                  borderRadius: '2px',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: TEXT_DIM,
                }}
              >
                {item.branzaLabel}
              </Box>
            )}
            {/* HIDDEN: video badge — przywróć usuwając komentarz
            {item.hasVideo && (
              <Box sx={{ px: 1.5, py: 0.4, bgcolor: `${ACCENT}22`, border: `1px solid ${ACCENT}60`, borderRadius: '2px', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT }}>
                ▶ VIDEO
              </Box>
            )}
            HIDDEN */}
            {item.typyProjektu.map((typ) => (
              <Box
                key={typ}
                sx={{
                  px: 1.5,
                  py: 0.4,
                  bgcolor: 'var(--surface-04)',
                  border: `1px solid ${BORDER}`,
                  borderRadius: '2px',
                  fontSize: '0.65rem',
                  color: 'var(--dim-42)',
                  letterSpacing: '0.04em',
                }}
              >
                {typ.replace(/-/g, ' ')}
              </Box>
            ))}
          </Box>

          {/* HIDDEN: klient — przywróć usuwając komentarz
          <Typography
            sx={{
              fontSize: '0.9rem',
              fontWeight: 600,
              color: ACCENT,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              mb: 1.5,
            }}
          >
            {item.klient}
          </Typography>
          HIDDEN */}

          {/* Title */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '1.75rem', md: '2.5rem', lg: '3rem' },
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: 'var(--dim-85)',
              maxWidth: '780px',
              mb: 4,
            }}
          >
            {item.tytul}
          </Typography>

          {/* Lead */}
          {item.lead && (
            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.75,
                color: 'var(--dim-72)',
                maxWidth: '680px',
              }}
            >
              {item.lead}
            </Typography>
          )}
        </Container>
      </Box>

      {(item.youtubeId || item.hasVideo) && (
        <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 4, md: 6 } }}>
          <Container maxWidth="lg">
            <CaseStudyVideo
              youtubeId={item.youtubeId}
              src={item.youtubeId ? undefined : (item.videoPath ?? `/videos/${item.slug}.mp4`)}
            />
          </Container>
        </Box>
      )}

      {/* ── Main content ── */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '1fr 380px' },
              gap: { xs: 6, lg: 10 },
              alignItems: 'start',
            }}
          >
            {/* ── Left column: narrative ── */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {item.sytuacjaWyjsciowa && (
                <Section title="Sytuacja wyjściowa">
                  <Typography
                    sx={{ fontSize: '0.9rem', lineHeight: 1.75, color: TEXT_DIM }}
                  >
                    {item.sytuacjaWyjsciowa}
                  </Typography>
                </Section>
              )}

              {item.wyzwanie && (
                <Section title="Wyzwanie">
                  <Typography
                    sx={{ fontSize: '0.9rem', lineHeight: 1.75, color: TEXT_DIM }}
                  >
                    {item.wyzwanie}
                  </Typography>
                </Section>
              )}

              {item.zakresRealizacji && item.zakresRealizacji.length > 0 && (
                <Section title="Zakres realizacji">
                  <BulletList items={item.zakresRealizacji} />
                </Section>
              )}
            </Box>

            {/* ── Right sidebar ── */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {/* Efekty */}
              {item.efekty && item.efekty.length > 0 && (
                <Box
                  sx={{
                    bgcolor: BG_CARD,
                    border: `1px solid ${BORDER}`,
                    borderLeft: `3px solid ${ACCENT}`,
                    borderRadius: '4px',
                    p: { xs: 3, md: 3.5 },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: ACCENT,
                      mb: 2.5,
                    }}
                  >
                    Efekty wdrożenia
                  </Typography>
                  <BulletList items={item.efekty} />
                </Box>
              )}

              {/* Technologie */}
              {item.technologie && item.technologie.length > 0 && (
                <Box
                  sx={{
                    bgcolor: BG_CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: '4px',
                    p: { xs: 3, md: 3.5 },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: TEXT_DIM,
                      mb: 2,
                    }}
                  >
                    Technologie i rozwiązania
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                    {item.technologie.map((tech) => (
                      <Typography
                        key={tech}
                        sx={{ fontSize: '0.82rem', lineHeight: 1.55, color: TEXT_DIM }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              )}

              {/* Partnerzy */}
              {item.partnerzy && item.partnerzy.length > 0 && (
                <Box
                  sx={{
                    bgcolor: BG_CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: '4px',
                    p: { xs: 3, md: 3.5 },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: TEXT_DIM,
                      mb: 2,
                    }}
                  >
                    Partnerzy technologiczni
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {item.partnerzy.map((partner) => (
                      <Box
                        key={partner}
                        sx={{
                          px: 1.75,
                          py: 0.6,
                          bgcolor: `${ACCENT}15`,
                          border: `1px solid ${ACCENT}40`,
                          borderRadius: '3px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: ACCENT,
                          letterSpacing: '0.04em',
                        }}
                      >
                        {partner}
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}

              {item.url && (
                <Box component="a" href={item.url} target="_blank" rel="noopener noreferrer" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, fontSize: '0.78rem', color: TEXT_DIM, textDecoration: 'none', transition: 'color 0.15s ease', '&:hover': { color: 'var(--dim-65)' } }}>
                  Strona klienta: {item.klient}
                  <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden="true" sx={{ width: 11, height: 11 }}>
                    <path d="M6 3H3v10h10v-3M9 3h4v4M13 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Tags strip ── */}
      {item.tagi.length > 0 && (
        <Box sx={{ borderTop: `1px solid ${BORDER}`, py: 4, bgcolor: BG_ALT }}>
          <Container maxWidth="lg">
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
              <Typography
                sx={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: TEXT_DIM,
                  mr: 1,
                }}
              >
                Tagi:
              </Typography>
              {item.tagi.map((tag) => (
                <Box
                  key={tag}
                  sx={{
                    px: 1.5,
                    py: 0.4,
                    bgcolor: 'var(--surface-04)',
                    border: `1px solid ${BORDER}`,
                    borderRadius: '2px',
                    fontSize: '0.72rem',
                    color: 'var(--dim-42)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {tag}
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      )}

      {/* ── CTA ── */}
      <Box sx={{ bgcolor: BG_ALT, borderTop: `1px solid ${BORDER}`, py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 580 }}>
            <Typography
              sx={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: ACCENT,
                mb: 2,
              }}
            >
              Twój projekt
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.6rem', md: '2rem' },
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                mb: 2,
              }}
            >
              Masz podobny problem do rozwiązania?
            </Typography>
            <Typography
              sx={{
                fontSize: '0.95rem',
                lineHeight: 1.75,
                color: TEXT_DIM,
                mb: 4,
              }}
            >
              Każdy projekt MadejPak zaczyna się od analizy procesu. Opowiedz nam o swojej
              produkcji — wspólnie zaprojektujemy rozwiązanie dopasowane do skali i warunków.
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
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--text)',
                textDecoration: 'none',
                transition: 'background-color 0.15s ease',
                '&:hover': { bgcolor: '#D45509' },
              }}
            >
              Porozmawiajmy o projekcie
              <ArrowRight />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
