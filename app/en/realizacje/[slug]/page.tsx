import { notFound } from 'next/navigation';
import CaseStudyVideo from '@/components/realizacje/CaseStudyVideo';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import type { Metadata } from 'next';
import { REALIZACJE } from '@/data/realizacjeData';
import { REALIZACJE_EN } from '@/data/realizacjeDataEn';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

const BG = 'var(--bg)', BG_CARD = 'var(--bg-card)', BG_ALT = 'var(--bg-alt)', ACCENT = '#E8610A', BORDER = 'var(--border)', TEXT_DIM = 'var(--dim-72)';

export function generateStaticParams() {
  return REALIZACJE.filter((r) => r.status === 'pelne').map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = REALIZACJE.find((r) => r.slug === slug);
  if (!item || item.status !== 'pelne') return { title: 'Case Study | MadejPak' };

  const enItem = REALIZACJE_EN.find((e) => e.slug === slug);
  const title = enItem?.tytul ?? item.tytul;
  return {
    title,
    description: enItem?.zajawka ?? item.zajawka,
    alternates: {
      canonical: `${SITE_URL}/en/realizacje/${slug}`,
      languages: {
        'pl': `${SITE_URL}/realizacje/${slug}`,
        'en': `${SITE_URL}/en/realizacje/${slug}`,
        'x-default': `${SITE_URL}/realizacje/${slug}`,
      },
    },
    openGraph: {
      url:         `${SITE_URL}/en/realizacje/${slug}`,
      title:       `${title} | MadejPak`,
      description: item.zajawka,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }],
    },
  };
}

function ArrowRight() {
  return (
    <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden="true" sx={{ width: 13, height: 13, flexShrink: 0 }}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box>
      <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
      {items.map((item) => (
        <Box key={item} component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, py: 0.75, borderBottom: `1px solid ${BORDER}`, '&:last-child': { borderBottom: 'none' } }}>
          <Box aria-hidden="true" sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, mt: '7px' }} />
          <Typography sx={{ fontSize: '0.875rem', lineHeight: 1.65, color: TEXT_DIM }}>{item}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default async function RealizacjaEnPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = REALIZACJE.find((r) => r.slug === slug);

  if (!item || item.status !== 'pelne') notFound();

  const enItem = REALIZACJE_EN.find((e) => e.slug === slug);
  const tytul = enItem?.tytul ?? item.tytul;
  const lead = enItem?.lead ?? item.lead;
  const sytuacjaWyjsciowa = enItem?.sytuacjaWyjsciowa ?? item.sytuacjaWyjsciowa;
  const wyzwanie = enItem?.wyzwanie ?? item.wyzwanie;
  const zakresRealizacji = enItem?.zakresRealizacji ?? item.zakresRealizacji;
  const efekty = enItem?.efekty ?? item.efekty;
  const technologie = enItem?.technologie ?? item.technologie;

  return (
    <Box sx={{ bgcolor: BG, minHeight: '100vh', color: 'var(--text)' }}>
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* Hero */}
      <Box sx={{ borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          {/* Back link */}
          <Box component={Link} href="/en/realizacje" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, fontSize: '0.78rem', color: TEXT_DIM, textDecoration: 'none', mb: 4, transition: 'color 0.15s ease', '&:hover': { color: 'var(--dim-72)' } }}>
            <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden="true" sx={{ width: 13, height: 13 }}>
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </Box>
            Case Studies
          </Box>

          {/* Industry + tags */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
            {item.branzaLabel && (
              <Box sx={{ px: 1.5, py: 0.4, border: `1px solid ${BORDER}`, borderRadius: '2px', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: TEXT_DIM }}>
                {item.branzaLabel}
              </Box>
            )}
            {item.typyProjektu.map((typ) => (
              <Box key={typ} sx={{ px: 1.5, py: 0.4, bgcolor: 'var(--surface-04)', border: `1px solid ${BORDER}`, borderRadius: '2px', fontSize: '0.65rem', color: 'var(--dim-42)', letterSpacing: '0.04em' }}>
                {typ.replace(/-/g, ' ')}
              </Box>
            ))}
          </Box>

          {/* Title */}
          <Typography variant="h1" sx={{ fontSize: { xs: '1.75rem', md: '2.5rem', lg: '3rem' }, fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--dim-85)', maxWidth: '780px', mb: 4 }}>
            {tytul}
          </Typography>

          {/* Lead */}
          {lead && (
            <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.75, color: 'var(--dim-72)', maxWidth: '680px' }}>
              {lead}
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

      {/* Main content */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 380px' }, gap: { xs: 6, lg: 10 }, alignItems: 'start' }}>
            {/* Left: narrative */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {sytuacjaWyjsciowa && (
                <Section title="Starting situation">
                  <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.75, color: TEXT_DIM }}>{sytuacjaWyjsciowa}</Typography>
                </Section>
              )}
              {wyzwanie && (
                <Section title="Challenge">
                  <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.75, color: TEXT_DIM }}>{wyzwanie}</Typography>
                </Section>
              )}
              {zakresRealizacji && zakresRealizacji.length > 0 && (
                <Section title="Project scope">
                  <BulletList items={zakresRealizacji} />
                </Section>
              )}
            </Box>

            {/* Right sidebar */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {efekty && efekty.length > 0 && (
                <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: '4px', p: { xs: 3, md: 3.5 } }}>
                  <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
                    Implementation results
                  </Typography>
                  <BulletList items={efekty} />
                </Box>
              )}

              {technologie && technologie.length > 0 && (
                <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', p: { xs: 3, md: 3.5 } }}>
                  <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: TEXT_DIM, mb: 2 }}>
                    Technologies & solutions
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                    {technologie.map((tech) => (
                      <Typography key={tech} sx={{ fontSize: '0.82rem', lineHeight: 1.55, color: TEXT_DIM }}>{tech}</Typography>
                    ))}
                  </Box>
                </Box>
              )}

              {item.partnerzy && item.partnerzy.length > 0 && (
                <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', p: { xs: 3, md: 3.5 } }}>
                  <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: TEXT_DIM, mb: 2 }}>
                    Technology partners
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {item.partnerzy.map((partner) => (
                      <Box key={partner} sx={{ px: 1.75, py: 0.6, bgcolor: `${ACCENT}15`, border: `1px solid ${ACCENT}40`, borderRadius: '3px', fontSize: '0.75rem', fontWeight: 600, color: ACCENT, letterSpacing: '0.04em' }}>
                        {partner}
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Tags strip */}
      {item.tagi.length > 0 && (
        <Box sx={{ borderTop: `1px solid ${BORDER}`, py: 4, bgcolor: BG_ALT }}>
          <Container maxWidth="lg">
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: TEXT_DIM, mr: 1 }}>Tags:</Typography>
              {item.tagi.map((tag) => (
                <Box key={tag} sx={{ px: 1.5, py: 0.4, bgcolor: 'var(--surface-04)', border: `1px solid ${BORDER}`, borderRadius: '2px', fontSize: '0.72rem', color: 'var(--dim-42)', letterSpacing: '0.04em' }}>{tag}</Box>
              ))}
            </Box>
          </Container>
        </Box>
      )}

      {/* CTA */}
      <Box sx={{ bgcolor: BG_ALT, borderTop: `1px solid ${BORDER}`, py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 580 }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
              Your project
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em', mb: 2 }}>
              Have a similar problem to solve?
            </Typography>
            <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.75, color: TEXT_DIM, mb: 4 }}>
              Every MadejPak project starts with a process analysis. Tell us about your production — together we will design a solution tailored to your scale and conditions.
            </Typography>
            <Box component={Link} href="/en/kontakt" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 3.5, py: 1.5, bgcolor: ACCENT, borderRadius: '3px', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text)', textDecoration: 'none', transition: 'background-color 0.15s ease', '&:hover': { bgcolor: '#D45509' } }}>
              Let&apos;s talk about your project
              <ArrowRight />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
