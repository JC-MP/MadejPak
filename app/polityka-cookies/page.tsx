import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Polityka Cookies',
  description: 'Polityka plików cookies serwisu madejpak.pl — informacje o rodzajach cookies i sposobach zarządzania nimi.',
  alternates: { canonical: `${SITE_URL}/polityka-cookies` },
  openGraph: {
    url: `${SITE_URL}/polityka-cookies`,
    title: 'Polityka cookies | MadejPak',
    description: 'Polityka cookies serwisu MadejPak.',
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

function UL({ items }: { items: string[] }) {
  return (
    <Box component="ul" sx={{ m: 0, pl: '1.5rem', mb: 1.5 }}>
      {items.map((item, i) => (
        <Box component="li" key={i}
          sx={{ fontSize: '0.95rem', color: 'var(--dim-72)', lineHeight: 1.8, mb: 0.5 }}>
          {item}
        </Box>
      ))}
    </Box>
  );
}

function CookieTable({ rows }: { rows: { name: string; type: string; purpose: string; retention: string }[] }) {
  return (
    <Box sx={{ overflowX: 'auto', mb: 2.5 }}>
      <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
        <Box component="thead">
          <Box component="tr" sx={{ bgcolor: 'var(--bg-alt)' }}>
            {['Nazwa / wzorzec', 'Typ', 'Cel', 'Czas przechowywania'].map((h) => (
              <Box component="th" key={h}
                sx={{ px: 2, py: 1.25, textAlign: 'left', fontWeight: 600,
                  color: 'var(--dim-72)', border: '1px solid var(--border)', whiteSpace: 'nowrap' }}>
                {h}
              </Box>
            ))}
          </Box>
        </Box>
        <Box component="tbody">
          {rows.map((r, i) => (
            <Box component="tr" key={i} sx={{ '&:hover': { bgcolor: 'var(--surface-03)' } }}>
              <Box component="td" sx={{ px: 2, py: 1.25, border: '1px solid var(--border)', color: 'var(--text)', fontWeight: 500 }}>{r.name}</Box>
              <Box component="td" sx={{ px: 2, py: 1.25, border: '1px solid var(--border)', color: 'var(--dim-58)' }}>{r.type}</Box>
              <Box component="td" sx={{ px: 2, py: 1.25, border: '1px solid var(--border)', color: 'var(--dim-58)' }}>{r.purpose}</Box>
              <Box component="td" sx={{ px: 2, py: 1.25, border: '1px solid var(--border)', color: 'var(--dim-58)', whiteSpace: 'nowrap' }}>{r.retention}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default function PolitykaCookiesPage() {
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
            Polityka Cookies
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

            <P>
              Niniejsza Polityka Cookies wyjaśnia, czym są pliki cookies, jakie rodzaje
              stosujemy w serwisie madejpak.pl oraz jak możesz nimi zarządzać.
            </P>

            <H2>1. Czym są pliki cookies?</H2>
            <P>
              Pliki cookies (ciasteczka) to małe pliki tekstowe zapisywane na Twoim urządzeniu
              (komputerze, smartfonie, tablecie) przez przeglądarkę internetową podczas odwiedzin
              serwisu. Umożliwiają one serwisowi zapamiętanie informacji o Twojej wizycie —
              takich jak preferowany język, ustawienia wyglądu czy dane logowania — dzięki czemu
              kolejna wizyta może być wygodniejsza.
            </P>
            <P>
              Cookies nie są programami komputerowymi, nie mogą być uruchamiane ani
              przenoszone na inne urządzenia. Nie zawierają wirusów ani złośliwego oprogramowania.
            </P>

            <H2>2. Jakie cookies używamy</H2>

            <Typography component="h3"
              sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', mt: 3, mb: 1 }}>
              2.1 Niezbędne (techniczne)
            </Typography>
            <P>
              Wymagane do prawidłowego działania serwisu. Nie można ich wyłączyć, ponieważ
              są konieczne do świadczenia usług drogą elektroniczną. Nie przechowują żadnych
              informacji umożliwiających identyfikację osoby.
            </P>
            <CookieTable rows={[
              { name: 'mp-theme', type: 'Niezbędny', purpose: 'Zapamiętuje wybraną przez użytkownika wersję kolorystyczną serwisu (tryb jasny / ciemny)', retention: 'Trwały (localStorage)' },
              { name: '__next_*', type: 'Niezbędny', purpose: 'Wewnętrzne pliki frameworka Next.js wymagane do działania aplikacji', retention: 'Sesja' },
            ]} />

            <Typography component="h3"
              sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', mt: 3, mb: 1 }}>
              2.2 Analityczne / statystyczne
            </Typography>
            <P>
              Pomagają nam zrozumieć, w jaki sposób użytkownicy korzystają z serwisu, dzięki
              czemu możemy go ulepszać. Dane zbierane przez te cookies są agregowane i anonimowe.
            </P>
            <CookieTable rows={[
              { name: '_ga, _ga_*', type: 'Analityczny', purpose: 'Google Analytics — mierzenie ruchu w serwisie i zachowań użytkowników (dane anonimizowane)', retention: 'Do 2 lat' },
              { name: '_gid', type: 'Analityczny', purpose: 'Google Analytics — rozróżnianie użytkowników', retention: '24 godziny' },
              { name: '_gat', type: 'Analityczny', purpose: 'Google Analytics — ograniczanie częstości żądań', retention: '1 minuta' },
            ]} />

            <Typography component="h3"
              sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', mt: 3, mb: 1 }}>
              2.3 Funkcjonalne
            </Typography>
            <P>
              Umożliwiają serwisowi zapamiętanie wyborów dokonanych przez użytkownika
              (np. ustawień regionalnych) w celu zapewnienia bardziej spersonalizowanej obsługi.
            </P>
            <CookieTable rows={[
              { name: 'mp-consent', type: 'Funkcjonalny', purpose: 'Zapamiętuje decyzję użytkownika dotyczącą zgody na cookies', retention: '12 miesięcy' },
            ]} />

            <H2>3. Cookies podmiotów trzecich</H2>
            <P>
              W serwisie mogą być wykorzystywane cookies podmiotów zewnętrznych, w tym:
            </P>
            <UL items={[
              'Google Analytics (Google LLC) — analityka serwisu. Polityka prywatności: policies.google.com/privacy',
              'Google Maps — wyświetlanie mapy z lokalizacją firmy (jeśli aktywna). Polityka prywatności: policies.google.com/privacy',
              'YouTube (Google LLC) — odtwarzanie materiałów wideo (jeśli osadzone). Polityka prywatności: policies.google.com/privacy',
            ]} />
            <P>
              Nie ponosimy odpowiedzialności za politykę prywatności podmiotów zewnętrznych.
              Zachęcamy do zapoznania się z ich politykami cookies przed skorzystaniem z serwisu.
            </P>

            <H2>4. Jak zarządzać plikami cookies?</H2>
            <P>
              Możesz kontrolować pliki cookies na kilka sposobów:
            </P>

            <Typography component="h3"
              sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', mt: 3, mb: 1 }}>
              Ustawienia przeglądarki
            </Typography>
            <P>
              Większość przeglądarek internetowych domyślnie akceptuje cookies. Możesz jednak
              zmienić te ustawienia, aby blokować cookies lub informować o ich wysyłaniu.
              Informacje o zarządzaniu cookies w popularnych przeglądarkach:
            </P>
            <UL items={[
              'Google Chrome: Ustawienia → Prywatność i bezpieczeństwo → Pliki cookie i inne dane witryn',
              'Mozilla Firefox: Opcje → Prywatność i bezpieczeństwo → Ciasteczka i dane witryn',
              'Microsoft Edge: Ustawienia → Pliki cookie i uprawnienia witryn',
              'Safari: Preferencje → Prywatność → Zarządzanie danymi witryn',
            ]} />
            <P>
              Wyłączenie lub ograniczenie plików cookies może wpłynąć na funkcjonalność
              serwisu lub uniemożliwić korzystanie z niektórych jego funkcji.
            </P>

            <Typography component="h3"
              sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', mt: 3, mb: 1 }}>
              Rezygnacja z Google Analytics
            </Typography>
            <P>
              Możesz zrezygnować ze śledzenia przez Google Analytics, instalując wtyczkę
              dostępną pod adresem:{' '}
              <Box component="a" href="https://tools.google.com/dlpage/gaoptout"
                target="_blank" rel="noopener noreferrer"
                sx={{ color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                tools.google.com/dlpage/gaoptout
              </Box>.
            </P>

            <H2>5. Zmiany Polityki Cookies</H2>
            <P>
              Zastrzegamy sobie prawo do zmiany niniejszej Polityki Cookies w dowolnym czasie.
              Wszelkie zmiany będą publikowane na tej stronie wraz z nową datą aktualizacji.
            </P>

            <H2>6. Kontakt</H2>
            <P>
              W przypadku pytań dotyczących niniejszej Polityki Cookies prosimy o kontakt:
              e-mail:{' '}
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
              <Box component={Link} href="/informacje-prawne"
                sx={{ fontSize: '0.875rem', color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Informacje prawne →
              </Box>
            </Box>

          </Box>
        </Container>
      </Box>
    </Box>
  );
}
