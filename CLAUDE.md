# MadejPak — Claude Code Context

## Firma

**PPHU MadejPak Sp. z o.o.**
- Strona: https://madejpak.pl
- Email: biuro@madejpak.pl
- Tel: +48 123 454 397
- Adres: Dziewin 333, 32-708 Dziewin (woj. małopolskie)
- NIP: 868-198-64-42
- Założona: 2000
- Profil: projektowanie i integracja linii pakujących, automatyka, robotyzacja, maszyny dla przemysłu — **własna produkcja maszyn**

## Stack techniczny

- **Framework**: Next.js 15 (App Router), TypeScript
- **UI**: MUI (Material UI) — komponenty Box, Typography, Button, Grid2 itp.
- **Deployment**: Vercel
- **Formularze**: EmailJS
- **Repo**: /Users/jakubcholuj/Documents/GitHub/MadejPak

## Struktura tras (app/)

| Ścieżka | Opis |
|---|---|
| `/` | Strona główna |
| `/maszyny` | Katalog maszyn |
| `/maszyny/poziome-maszyny-pakujace` | Poziome maszyny pakujące (flow pack) — **cel kampanii Ads** |
| `/maszyny/pionowe-maszyny-pakujace` | Pionowe maszyny pakujące |
| `/maszyny/paletyzacja` | Systemy paletyzacji |
| `/maszyny/wazenie-i-dozowanie` | Wagi wielogłowicowe |
| `/maszyny/transport-i-koniec-linii` | Podajniki, transport |
| `/maszyny/gotowe-linie-pakujace` | Gotowe linie |
| `/coboty-w-akcji` | Rezerwacja wizyt demo (8–19 czerwca 2026) |
| `/kontakt` | Formularz kontaktowy |
| `/o-firmie` | O firmie |
| `/partnerzy` | Partnerzy (m.in. Essegi, GSP) |
| `/targi-i-wydarzenia` | Targi |
| `/serwis` | Serwis |
| `/realizacje` | Realizacje |
| `/rozwiazania` | Rozwiązania branżowe |
| `/branze` | Branże |

## Kluczowe pliki

- `lib/seo.config.ts` — SITE_URL, COMPANY, BLOCK_INDEXING (ustaw `false` na produkcji)
- `app/layout.tsx` — GTM (GTM-NRN8B8C), GA4 (G-03MEXQ4XPP), Consent Mode v2, JSON-LD Organization
- `app/robots.ts` — robots.txt; disallow: `/api/`, strony prawne, `/*?_rsc=*`
- `app/sitemap.ts` — sitemap.xml
- `next.config.ts` — 301 redirecty ze starego serwisu, nagłówki cache
- `components/ui/CookieConsent.tsx` — baner RODO z gtag consent update
- `components/navigation/Header.tsx` — nawigacja
- `components/Footer.tsx` — stopka

## Marketing / Analytics

### Google Analytics 4
- **Property ID**: G-03MEXQ4XPP
- **Consent Mode v2**: wdrożone — domyślnie `denied`, update po akcji użytkownika w CookieConsent
- **Kluczowe zdarzenie**: `generate_lead` — wysyłane po poprawnym wysłaniu formularza na `/kontakt`
- **GA4 → Ads**: po pojawieniu się `generate_lead` w GA4, oznaczyć jako kluczowe zdarzenie i zaimportować do Google Ads jako konwersję

### Google Tag Manager
- **Container ID**: GTM-NRN8B8C

### Google Ads
- **Kampania**: Performance Max — "Poziome maszyny pakujące | Flow Pack"
- **Cel**: ruch na `/maszyny/poziome-maszyny-pakujace`
- **Budżet**: 35 zł/dzień
- **Display path**: `maszyny / flow-pack`
- **Status**: aktywna (oczekująca na akceptację Google przy uruchomieniu)
- **TODO**: podłączyć GA4 konwersję `generate_lead` do kampanii Ads po pojawieniu się danych

### Google Business Profile
- Profil firmy: PPHU MadejPak Sp. z o.o.
- Opis zaktualizowany (własna produkcja maszyn, brak wzmianki o DOBOT)
- Email w GBP nie jest obsługiwany przez Google

### CHD / Agencja
- CHD może prowadzić kampanie Ads dla MadejPak przez MCC (Google Ads Manager)
- Rozliczenie: refaktura lub MadejPak płaci bezpośrednio
- MadejPak powinien zachować własne konto Ads (dane historyczne)

## Wydarzenie: Coboty w Akcji (czerwiec 2026)

- **Daty**: 8–19 czerwca 2026 (dni robocze, pn–pt)
- **Godziny slotów**: 9:00, 12:00, 14:00
- **Strona**: `/coboty-w-akcji`
- **Rejestracja**: formularz EmailJS z wyborem dnia + godziny
- **Uwaga**: daty celowo nie są ujawniane w SEO (meta description/title) do momentu potwierdzenia terminów

## Przekierowania (next.config.ts)

Wszystkie stare URL-e ze starego serwisu mają 301 redirect. Nie dodawać przekierowania www→non-www w `next.config.ts` — obsługuje to Vercel Dashboard (308).

## SEO / Search Console

- Sitemap: https://madejpak.pl/sitemap.xml
- `/*?_rsc=*` zablokowane w robots.txt (parametry Next.js RSC)
- Strony prawne (`/polityka-prywatnosci`, `/polityka-cookies`, `/informacje-prawne`) zablokowane w robots.txt
- "Discovered — not indexed": normalne dla nowego serwisu, priorytetowe strony można zgłaszać ręcznie w Search Console
