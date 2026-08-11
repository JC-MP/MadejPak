import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Polityka Prywatności',
  description: 'Polityka prywatności PPHU MadejPak Sp. z o.o. — informacje o przetwarzaniu danych osobowych zgodnie z RODO.',
  alternates: { canonical: `${SITE_URL}/polityka-prywatnosci` },
  openGraph: {
    url: `${SITE_URL}/polityka-prywatnosci`,
    title: 'Polityka prywatności | MadejPak',
    description: 'Polityka prywatności serwisu MadejPak.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'MadejPak' }],
  },
};

const ACCENT = '#E8610A';

function H2({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      component="h2"
      sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' }, fontWeight: 700, color: 'var(--text)', mt: 5, mb: 1.5 }}
    >
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

export default function PolitykaPrywatnosciPage() {
  return (
    <Box sx={{ bgcolor: 'var(--bg)', minHeight: '100vh', color: 'var(--text)' }}>
      <Box sx={{ height: { xs: 60, md: 72 } }} />

      {/* Hero */}
      <Box sx={{ bgcolor: 'var(--bg-alt)', borderBottom: '1px solid var(--border)', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box
            component={Link}
            href="/"
            sx={{ fontSize: '0.8rem', color: 'var(--dim-45)', textDecoration: 'none',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              '&:hover': { color: ACCENT }, display: 'inline-block', mb: 3 }}
          >
            ← Wróć na stronę główną
          </Box>
          <Typography component="h1"
            sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' }, fontWeight: 800,
              letterSpacing: '-0.02em', color: 'var(--text)', mb: 1.5 }}>
            Polityka Prywatności
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
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych
              przekazywanych przez Użytkowników w związku z korzystaniem z serwisu internetowego
              dostępnego pod adresem madejpak.pl.
            </P>

            <H2>1. Administrator Danych Osobowych</H2>
            <P>
              Administratorem Twoich danych osobowych jest <strong>PPHU MADEJPAK SP. Z O.O.</strong>
              z siedzibą pod adresem: Dziewin 333, 32-708 Dziewin, e-mail: biuro@madejpak.pl,
              tel.: +48 12 345 43 97.
            </P>

            <H2>2. Jakie dane zbieramy</H2>
            <P>
              W zależności od sposobu korzystania z serwisu możemy zbierać następujące dane:
            </P>
            <UL items={[
              'Imię i nazwisko — podawane dobrowolnie w formularzach kontaktowych',
              'Adres e-mail — niezbędny do udzielenia odpowiedzi na zapytanie',
              'Numer telefonu — podawany dobrowolnie w celu ułatwienia kontaktu',
              'Nazwa firmy i stanowisko — w kontekście zapytań ofertowych B2B',
              'Treść wiadomości — opis zapytania lub zgłoszenia serwisowego',
              'Dane techniczne — adres IP, typ przeglądarki, czas wizyty (logi serwera)',
            ]} />

            <H2>3. Cele i podstawy prawne przetwarzania danych</H2>
            <P>
              Twoje dane osobowe przetwarzamy w następujących celach:
            </P>
            <UL items={[
              'Odpowiedź na zapytania przesłane przez formularz kontaktowy lub e-mail — podstawa: art. 6 ust. 1 lit. b RODO (wykonanie umowy lub podjęcie działań na żądanie przed jej zawarciem)',
              'Obsługa zapytań ofertowych i prowadzenie korespondencji handlowej — podstawa: art. 6 ust. 1 lit. b i f RODO (prawnie uzasadniony interes administratora)',
              'Realizacja zgłoszeń serwisowych — podstawa: art. 6 ust. 1 lit. b RODO',
              'Wypełnianie obowiązków prawnych (np. podatkowych, rachunkowych) — podstawa: art. 6 ust. 1 lit. c RODO',
              'Prowadzenie analityki serwisu w celach statystycznych — podstawa: art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes polegający na poprawie jakości usług)',
            ]} />

            <H2>4. Okres przechowywania danych</H2>
            <P>
              Dane osobowe przechowujemy przez okres niezbędny do realizacji celu, w którym zostały
              zebrane, a następnie przez czas wymagany przepisami prawa lub do momentu upływu
              przedawnienia ewentualnych roszczeń:
            </P>
            <UL items={[
              'Dane z formularzy kontaktowych i korespondencja — do 3 lat od ostatniego kontaktu',
              'Dane związane z umowami i fakturami — 5 lat od końca roku podatkowego',
              'Logi serwera — do 12 miesięcy',
            ]} />

            <H2>5. Odbiorcy danych</H2>
            <P>
              Twoje dane osobowe mogą być przekazywane wyłącznie podmiotom, które zapewniają
              odpowiedni poziom ochrony danych, w tym:
            </P>
            <UL items={[
              'Dostawcom usług IT (hosting, poczta elektroniczna, oprogramowanie CRM) — działającym na podstawie umów powierzenia przetwarzania danych',
              'Podmiotom świadczącym usługi księgowe i prawne — w zakresie niezbędnym do wykonania tych usług',
              'Organom publicznym — wyłącznie gdy obowiązek przekazania danych wynika z przepisów prawa',
            ]} />
            <P>
              Nie sprzedajemy ani nie udostępniamy Twoich danych osobowych podmiotom trzecim
              w celach marketingowych bez Twojej wyraźnej zgody.
            </P>

            <H2>6. Twoje prawa</H2>
            <P>
              W związku z przetwarzaniem Twoich danych osobowych przysługują Ci następujące prawa:
            </P>
            <UL items={[
              'Prawo dostępu do danych — możesz uzyskać informację o tym, jakie dane przetwarzamy',
              'Prawo do sprostowania danych — jeśli dane są nieprawidłowe lub niekompletne',
              'Prawo do usunięcia danych („prawo do bycia zapomnianym") — w przypadkach wskazanych w art. 17 RODO',
              'Prawo do ograniczenia przetwarzania — w przypadkach wskazanych w art. 18 RODO',
              'Prawo do przenoszenia danych — gdy podstawą przetwarzania jest zgoda lub umowa',
              'Prawo do sprzeciwu — wobec przetwarzania opartego na prawnie uzasadnionym interesie administratora',
              'Prawo do wycofania zgody — w każdej chwili, bez wpływu na zgodność z prawem przetwarzania sprzed jej wycofania',
            ]} />
            <P>
              Aby skorzystać z powyższych praw, skontaktuj się z nami pisemnie na adres:{' '}
              <Box component="a" href="mailto:biuro@madejpak.pl"
                sx={{ color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                biuro@madejpak.pl
              </Box>.
              Odpowiemy bez zbędnej zwłoki, nie później niż w ciągu 30 dni.
            </P>

            <H2>7. Prawo do złożenia skargi</H2>
            <P>
              Jeśli uważasz, że przetwarzanie Twoich danych osobowych narusza przepisy RODO,
              masz prawo złożyć skargę do organu nadzorczego — Prezesa Urzędu Ochrony Danych
              Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa,{' '}
              <Box component="a" href="https://uodo.gov.pl" target="_blank" rel="noopener noreferrer"
                sx={{ color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                uodo.gov.pl
              </Box>.
            </P>

            <H2>8. Bezpieczeństwo danych</H2>
            <P>
              Stosujemy odpowiednie techniczne i organizacyjne środki bezpieczeństwa w celu ochrony
              Twoich danych osobowych przed nieuprawnionym dostępem, ujawnieniem, zmianą lub
              zniszczeniem. Serwis korzysta z szyfrowanego połączenia HTTPS.
            </P>

            <H2>9. Pliki cookies</H2>
            <P>
              Serwis używa plików cookies. Szczegółowe informacje dotyczące plików cookies
              znajdziesz w naszej{' '}
              <Box component={Link} href="/polityka-cookies"
                sx={{ color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Polityce Cookies
              </Box>.
            </P>

            <H2>10. Zmiany Polityki Prywatności</H2>
            <P>
              Zastrzegamy sobie prawo do zmiany niniejszej Polityki Prywatności. Wszelkie zmiany
              będą publikowane na tej stronie wraz z datą aktualizacji. Zachęcamy do regularnego
              sprawdzania treści niniejszej Polityki.
            </P>

            <H2>11. Kontakt</H2>
            <P>
              W sprawach dotyczących ochrony danych osobowych możesz skontaktować się z nami:
            </P>
            <UL items={[
              'E-mail: biuro@madejpak.pl',
              'Telefon: +48 12 345 43 97',
              'Adres: PPHU MADEJPAK SP. Z O.O., Dziewin 333, 32-708 Dziewin',
            ]} />

            {/* Back link */}
            <Box sx={{ mt: 8, pt: 4, borderTop: '1px solid var(--border)', display: 'flex', gap: 3, flexWrap: 'wrap' }}>
              <Box component={Link} href="/polityka-cookies"
                sx={{ fontSize: '0.875rem', color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Polityka Cookies →
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
