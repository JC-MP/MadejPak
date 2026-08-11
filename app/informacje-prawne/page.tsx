import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Informacje Prawne',
  description: 'Informacje prawne dotyczące PPHU MadejPak Sp. z o.o. — dane rejestrowe, odpowiedzialność, własność intelektualna.',
  alternates: { canonical: `${SITE_URL}/informacje-prawne` },
  openGraph: {
    url: `${SITE_URL}/informacje-prawne`,
    title: 'Informacje prawne | MadejPak',
    description: 'Informacje prawne serwisu MadejPak.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'MadejPak' }],
  },
};

const ACCENT = '#E8610A';

function H2({ children }: { children: React.ReactNode }) {
  return (
    <Typography component="h2"
      sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' }, fontWeight: 700, color: 'var(--text)', mt: 5, mb: 1.5 }}>
      {children}
    </Typography>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <Typography sx={{ fontSize: '0.95rem', color: 'var(--dim-72)', lineHeight: 1.8, mb: 1.5 }}>
      {children}
    </Typography>
  );
}

function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 2, py: 1.25,
      borderBottom: '1px solid var(--border)', '&:last-child': { borderBottom: 'none' } }}>
      <Typography sx={{ fontSize: '0.875rem', color: 'var(--dim-45)', fontWeight: 600 }}>
        {label}
      </Typography>
      <Typography sx={{ fontSize: '0.875rem', color: 'var(--text)' }}>
        {value}
      </Typography>
    </Box>
  );
}

export default function InformacjePrawnePage() {
  return (
    <Box sx={{ bgcolor: 'var(--bg)', minHeight: '100vh', color: 'var(--text)' }}>
      <Box sx={{ height: { xs: 60, md: 72 } }} />

      {/* Hero */}
      <Box sx={{ bgcolor: 'var(--bg-alt)', borderBottom: '1px solid var(--border)', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box component={Link} href="/"
            sx={{ fontSize: '0.8rem', color: 'var(--dim-45)', textDecoration: 'none',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              '&:hover': { color: ACCENT }, display: 'inline-block', mb: 3 }}>
            ← Wróć na stronę główną
          </Box>
          <Typography component="h1"
            sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' }, fontWeight: 800,
              letterSpacing: '-0.02em', color: 'var(--text)', mb: 1.5 }}>
            Informacje Prawne
          </Typography>
          <Typography sx={{ color: 'var(--dim-55)', fontSize: '0.9rem' }}>
            Ostatnia aktualizacja: styczeń 2025
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 800 }}>

            <H2>1. Dane identyfikacyjne podmiotu</H2>
            <Box sx={{ bgcolor: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: '8px', p: { xs: 2.5, md: 3.5 }, mb: 3 }}>
              <DataRow label="Nazwa firmy" value="PPHU MADEJPAK SP. Z O.O." />
              <DataRow label="Adres siedziby" value="Dziewin 333, 32-708 Dziewin" />
              <DataRow label="Telefon" value="+48 12 345 43 97" />
              <DataRow label="E-mail" value="biuro@madejpak.pl" />
              <DataRow label="Godziny pracy" value="Poniedziałek – Piątek, 8:00–16:00" />
            </Box>

            <H2>2. Właściciel i operator serwisu</H2>
            <P>
              Właścicielem i operatorem serwisu internetowego madejpak.pl jest
              PPHU MADEJPAK SP. Z O.O. z siedzibą w Dziewin 333, 32-708 Dziewin.
            </P>

            <H2>3. Własność intelektualna</H2>
            <P>
              Wszelkie treści zamieszczone w serwisie madejpak.pl, w tym teksty, grafiki,
              zdjęcia, logotypy, ikony, filmy oraz układ graficzny (szata graficzna) są
              chronione prawem autorskim i stanowią własność intelektualną
              PPHU MADEJPAK SP. Z O.O. lub zostały użyte za zgodą właścicieli praw.
            </P>
            <P>
              Kopiowanie, reprodukowanie, modyfikowanie lub dystrybucja jakichkolwiek
              treści z serwisu bez uprzedniej pisemnej zgody jest zabronione, z wyjątkiem
              przypadków wyraźnie dozwolonych przez obowiązujące przepisy prawa
              (np. cytowanie na potrzeby informacyjne z podaniem źródła).
            </P>
            <P>
              Znaki towarowe i logotypy partnerów oraz klientów prezentowane na stronie
              są własnością ich odpowiednich właścicieli i zostały użyte wyłącznie
              w celach informacyjnych.
            </P>

            <H2>4. Odpowiedzialność za treści</H2>
            <P>
              PPHU MADEJPAK SP. Z O.O. dokłada wszelkich starań, aby informacje
              zawarte w serwisie były aktualne, rzetelne i kompletne. Jednakże treści
              mają charakter wyłącznie informacyjny i nie stanowią oferty handlowej
              w rozumieniu przepisów Kodeksu cywilnego, chyba że wyraźnie wskazano inaczej.
            </P>
            <P>
              Zastrzegamy sobie prawo do zmiany, aktualizacji lub usunięcia treści serwisu
              w dowolnym czasie bez uprzedniego powiadomienia. Nie ponosimy odpowiedzialności
              za decyzje podjęte na podstawie informacji zawartych w serwisie bez wcześniejszej
              bezpośredniej konsultacji z naszymi specjalistami.
            </P>

            <H2>5. Linki zewnętrzne</H2>
            <P>
              Serwis może zawierać odnośniki do zewnętrznych stron internetowych, które nie
              są pod naszą kontrolą. Nie ponosimy odpowiedzialności za treści, politykę
              prywatności ani praktyki zewnętrznych serwisów. Przed skorzystaniem
              z zewnętrznego serwisu zalecamy zapoznanie się z jego regulaminem
              i polityką prywatności.
            </P>

            <H2>6. Dostępność serwisu</H2>
            <P>
              Staramy się zapewnić ciągłość działania serwisu, jednak nie gwarantujemy
              jego nieprzerwanego funkcjonowania. Zastrzegamy sobie prawo do przeprowadzania
              prac serwisowych, aktualizacji lub przerw technicznych. W takich przypadkach
              postaramy się z wyprzedzeniem poinformować o planowanych przerwach.
            </P>

            <H2>7. Prawo właściwe</H2>
            <P>
              Niniejszy serwis i wszelkie kwestie prawne z nim związane podlegają
              prawu polskiemu. Wszelkie spory wynikające z korzystania z serwisu
              będą rozstrzygane przez sądy polskie właściwe dla siedziby
              PPHU MADEJPAK SP. Z O.O.
            </P>

            <H2>8. Kontakt w sprawach prawnych</H2>
            <P>
              Wszelkie zapytania dotyczące informacji prawnych, w tym kwestii
              własności intelektualnej, prosimy kierować na adres:{' '}
              <Box component="a" href="mailto:biuro@madejpak.pl"
                sx={{ color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                biuro@madejpak.pl
              </Box>.
            </P>

            {/* Related links */}
            <Box sx={{ mt: 8, pt: 4, borderTop: '1px solid var(--border)', display: 'flex', gap: 3, flexWrap: 'wrap' }}>
              <Box component={Link} href="/polityka-prywatnosci"
                sx={{ fontSize: '0.875rem', color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Polityka Prywatności →
              </Box>
              <Box component={Link} href="/polityka-cookies"
                sx={{ fontSize: '0.875rem', color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Polityka Cookies →
              </Box>
            </Box>

          </Box>
        </Container>
      </Box>
    </Box>
  );
}
