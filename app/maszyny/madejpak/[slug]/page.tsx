import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';
import { MADEJPAK_MACHINES, getMadejPakMachine } from '@/data/madejpakMachinesData';
import CaseStudyVideo from '@/components/realizacje/CaseStudyVideo';

// ─── Design tokens ──────────────────────────────────────────────────────────
const BG      = 'var(--bg)';
const BG_CARD = 'var(--bg-card)';
const BG_ALT  = 'var(--bg-alt)';
const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';
// Tło pod wizualizacje — stałe, ciemne w obu motywach, dopasowane do renderów
const RENDER_BG = '#111113';

export function generateStaticParams() {
  return MADEJPAK_MACHINES.map((m) => ({ slug: m.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const machine = getMadejPakMachine(slug);
  if (!machine) return {};

  const url = `${SITE_URL}/maszyny/madejpak/${machine.id}`;
  return {
    title: `${machine.name} | Maszyny MadejPak`,
    description: machine.desc,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: `${machine.name} | MadejPak`,
      description: machine.desc,
      images: [{ url: machine.image ? `${SITE_URL}${machine.image}` : OG_IMAGE, width: 1200, height: 630, alt: machine.name }],
    },
  };
}

function ArrowRight() {
  return (
    <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden="true"
      sx={{ width: 13, height: 13, flexShrink: 0 }}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  );
}

// Renderuje tekst z akapitu, zamieniając **fragment** na pogrubiony, jaśniejszy span
function renderRich(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <Box key={i} component="strong" sx={{ color: 'var(--text)', fontWeight: 700 }}>
        {part.slice(2, -2)}
      </Box>
    ) : (
      part
    ),
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1.25 }}>
      {items.map((item) => (
        <Box component="li" key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, color: TEXT_DIM, fontSize: '0.9rem', lineHeight: 1.6 }}>
          <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, mt: '7px' }} />
          {item}
        </Box>
      ))}
    </Box>
  );
}

export default async function MachineDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const machine = getMadejPakMachine(slug);
  if (!machine) notFound();

  const others = MADEJPAK_MACHINES.filter((m) => m.id !== machine.id).slice(0, 3);

  return (
    <Box component="main" sx={{ bgcolor: BG, color: 'var(--text)' }}>

      {/* ── Hero ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 8 }, alignItems: 'center' }}>
            <Box>
              <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 2, mb: 1, display: 'block' }}>
                {machine.group}
              </Typography>
              <Typography variant="h1" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, fontWeight: 800, lineHeight: 1.2, mb: 3 }}>
                {machine.name}
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, fontSize: '1.05rem', lineHeight: 1.8, mb: 4 }}>
                {machine.desc}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Box component={Link} href={`/kontakt?maszyna=${encodeURIComponent(machine.name)}`}
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: ACCENT, color: '#fff', px: 3.5, py: 1.5, borderRadius: 1.5, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { bgcolor: '#c9520a' } }}>
                  Zapytaj o tę maszynę <ArrowRight />
                </Box>
                <Box component={Link} href="/maszyny/madejpak"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, border: `1px solid ${BORDER}`, color: 'var(--text)', px: 3.5, py: 1.5, borderRadius: 1.5, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}>
                  Wszystkie maszyny MadejPak
                </Box>
              </Box>
            </Box>
            {machine.youtubeId ? (
              <Box>
                <CaseStudyVideo youtubeId={machine.youtubeId} />
                <Typography sx={{ mt: 1.5, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT }}>
                  Wideo maszyny
                </Typography>
              </Box>
            ) : machine.image ? (
              <Box sx={{ position: 'relative', aspectRatio: '16 / 9', bgcolor: RENDER_BG, borderRadius: 2, overflow: 'hidden', border: `1px solid ${BORDER}` }}>
                <Image
                  src={machine.image}
                  alt={`${machine.name} — wizualizacja maszyny MadejPak`}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            ) : null}
          </Box>
        </Container>
      </Box>

      {/* ── Opis + zastosowanie/korzyści ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.3fr 1fr' }, gap: { xs: 5, md: 8 } }}>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.85rem' }, fontWeight: 700, mb: 3 }}>
                Jak to działa i co daje w linii
              </Typography>
              {machine.longDesc.map((p) => (
                <Typography key={p} variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.85, mb: 2.5 }}>
                  {renderRich(p)}
                </Typography>
              ))}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `3px solid ${ACCENT}`, borderRadius: 2, p: 3.5 }}>
                <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, color: ACCENT, letterSpacing: '0.12em', textTransform: 'uppercase', mb: 2.5 }}>
                  Zastosowanie
                </Typography>
                <Bullets items={machine.applications} />
              </Box>
              <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3.5 }}>
                <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, color: ACCENT, letterSpacing: '0.12em', textTransform: 'uppercase', mb: 2.5 }}>
                  Korzyści
                </Typography>
                <Bullets items={machine.benefits} />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Galeria ── */}
      {machine.gallery.length > 1 && (
        <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
          <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.85rem' }, fontWeight: 700, mb: 1.5 }}>
              Wizualizacje
            </Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 4, maxWidth: 640 }}>
              Ujęcia konstrukcji z różnych perspektyw.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 2.5 }}>
              {machine.gallery.map((src, i) => (
                <Box key={src} sx={{ position: 'relative', aspectRatio: '16 / 9', bgcolor: RENDER_BG, borderRadius: 1.5, overflow: 'hidden', border: `1px solid ${BORDER}` }}>
                  <Image
                    src={src}
                    alt={`${machine.name} — wizualizacja ${i + 1}`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      )}

      {/* ── Integracja z linią ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 8 }, alignItems: 'start' }}>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.85rem' }, fontWeight: 700, mb: 2.5 }}>
                Integracja z linią
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.85 }}>
                Maszyna trafia do linii jako zsynchronizowany element, nie osobny zakup. Odpowiadamy za wpięcie
                mechaniczne i elektryczne, uruchomienie oraz serwis — również tam, gdzie sąsiednie urządzenia
                pochodzą od innych producentów.
              </Typography>
            </Box>
            <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3.5 }}>
              <Bullets items={machine.integration} />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Realizacje ── */}
      {machine.realizations.length > 0 && (
        <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
          <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 3, mb: 5 }}>
              <Box>
                <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.85rem' }, fontWeight: 700, mb: 1 }}>
                  Przykładowe realizacje
                </Typography>
                <Typography variant="body1" sx={{ color: TEXT_DIM, maxWidth: 560 }}>
                  Wdrożenia, w których to urządzenie pracuje jako element linii.
                </Typography>
              </Box>
              <Box component={Link} href="/realizacje"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, color: ACCENT, fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', flexShrink: 0 }}>
                Wszystkie realizacje <ArrowRight />
              </Box>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2.5 }}>
              {machine.realizations.map((r) => (
                <Box
                  key={r.label}
                  {...(r.slug ? { component: Link, href: `/realizacje/${r.slug}` } : {})}
                  sx={{
                    bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`,
                    borderRadius: 1.5, p: 3, textDecoration: 'none', color: 'var(--text)',
                    display: 'block',
                    ...(r.slug && {
                      transition: 'border-color 0.15s ease',
                      '&:hover': { borderColor: ACCENT },
                      '&:hover .rel-cta': { color: ACCENT },
                    }),
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.75, fontSize: '0.95rem' }}>
                    {r.label}
                  </Typography>
                  <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.65, fontSize: '0.82rem' }}>
                    {r.scope}
                  </Typography>
                  {r.slug && (
                    <Box className="rel-cta" sx={{ mt: 1.75, display: 'inline-flex', alignItems: 'center', gap: 0.75, fontSize: '0.8rem', fontWeight: 600, color: TEXT_DIM, transition: 'color 0.15s ease' }}>
                      Czytaj więcej <ArrowRight />
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      )}

      {/* ── Inne maszyny ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.6rem' }, fontWeight: 700, mb: 4 }}>
            Inne maszyny MadejPak
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 2.5 }}>
            {others.map((m) => (
              <Box key={m.id} component={Link} href={`/maszyny/madejpak/${m.id}`}
                sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, overflow: 'hidden', textDecoration: 'none', color: 'var(--text)', display: 'flex', flexDirection: 'column', '&:hover': { borderColor: ACCENT } }}>
                {m.image && (
                  <Box sx={{ position: 'relative', aspectRatio: '16 / 9', bgcolor: RENDER_BG, borderBottom: `1px solid ${BORDER}` }}>
                    <Image src={m.image} alt={m.shortName} fill loading="lazy" sizes="33vw" style={{ objectFit: 'cover' }} />
                  </Box>
                )}
                <Box sx={{ p: 3 }}>
                  <Typography variant="body1" sx={{ fontWeight: 700, fontSize: '0.95rem', mb: 0.5 }}>
                    {m.shortName}
                  </Typography>
                  <Typography variant="body2" sx={{ color: TEXT_DIM, fontSize: '0.8rem' }}>
                    {m.group}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box sx={{ bgcolor: BG }}>
        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 3, p: { xs: 4, md: 6 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, justifyContent: 'space-between', gap: 4 }}>
            <Box sx={{ maxWidth: 560 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.7rem' }, fontWeight: 700, mb: 1.5 }}>
                Potrzebujesz tego urządzenia pod swój proces?
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>
                Opisz produkt, wydajność i układ linii — przygotujemy propozycję rozwiązania dopasowaną
                do realnych warunków w Twoim zakładzie.
              </Typography>
            </Box>
            <Box component={Link} href={`/kontakt?maszyna=${encodeURIComponent(machine.name)}`}
              sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: ACCENT, color: '#fff', px: 4, py: 1.75, borderRadius: 1.5, fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', flexShrink: 0, '&:hover': { bgcolor: '#c9520a' } }}>
              Wyślij zapytanie <ArrowRight />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Breadcrumb ── */}
      <Box sx={{ bgcolor: 'var(--bg-alt)', borderTop: `1px solid var(--border)` }}>
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <Typography variant="body2" sx={{ color: 'var(--dim-72)', display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap', fontSize: '0.8rem' }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link href="/maszyny" style={{ color: 'inherit', textDecoration: 'none' }}>Maszyny</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link href="/maszyny/madejpak" style={{ color: 'inherit', textDecoration: 'none' }}>Maszyny MadejPak</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <span>{machine.shortName}</span>
          </Typography>
        </Container>
      </Box>

    </Box>
  );
}
