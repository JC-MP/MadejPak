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
- **Repo**: /Users/jakubcholuj/Documents/GitHub/MadejPak — **to jest produkcja**

> ⚠️ Istnieje drugie, bardzo podobne repo: `/Users/jakubcholuj/Documents/GitHub/MP-strona-test`.
> To **starsza wersja testowa**. MadejPak zawiera treści, których tam nie ma (podstrony GSP,
> `/coboty-w-akcji`, wydarzenia 2026). Przy przenoszeniu czegokolwiek z MP-strona-test
> **porównuj pliki przed kopiowaniem** — zwłaszcza `app/sitemap.ts`. Pliki współdzielone
> łatać chirurgicznie, nigdy nie nadpisywać w całości.

## Struktura tras (app/)

| Ścieżka | Opis |
|---|---|
| `/` | Strona główna |
| `/maszyny` | Katalog maszyn |
| `/maszyny/poziome-maszyny-pakujace` | Poziome maszyny pakujące (flow pack) — **cel kampanii Ads** |
| `/maszyny/poziome-maszyny-pakujace/[model]` | Podstrony modeli: `gsp-45-s`, `gsp-50-s`, `gsp-55-s`, `gsp-65-evo` |
| `/maszyny/pionowe-maszyny-pakujace` | Pionowe maszyny pakujące |
| `/maszyny/madejpak` | **Maszyny własnej produkcji** — lista wg grup |
| `/maszyny/madejpak/[slug]` | Podstrona maszyny własnej — opis, galeria, wideo, realizacje (9 maszyn) |
| `/maszyny/partnerzy` | Maszyny partnerów |
| `/maszyny/paletyzacja` | Systemy paletyzacji |
| `/maszyny/robotyzacja-pakowania` | Robotyzacja, coboty |
| `/maszyny/wazenie-i-dozowanie` | Wagi wielogłowicowe |
| `/maszyny/transport-i-koniec-linii` | Podajniki, transport |
| `/maszyny/workowanie` | Workowanie, BigBag |
| `/maszyny/owijarki-do-palet` | Owijarki palet |
| `/maszyny/gotowe-linie-pakujace` | Gotowe linie |
| `/coboty-w-akcji` | Rezerwacja wizyt demo — trwa **do 31 sierpnia 2026** |
| `/kontakt` | Formularz kontaktowy |
| `/o-firmie` | O firmie |
| `/partnerzy` | Partnerzy (m.in. Essegi, GSP) |
| `/targi-i-wydarzenia` | Targi |
| `/serwis` | Serwis |
| `/realizacje` | Realizacje |
| `/rozwiazania` | Rozwiązania branżowe |
| `/branze` | Branże |

**Wersja angielska:** każda trasa ma odpowiednik pod `/en/...` (np. `/en/maszyny/madejpak/[slug]`).
Slugi są **wspólne dla obu języków** — zmiana sluga wymaga zmiany w obu miejscach naraz.

## Kluczowe pliki

- `lib/seo.config.ts` — SITE_URL, COMPANY, BLOCK_INDEXING (ustaw `false` na produkcji)
- `app/layout.tsx` — GTM (GTM-NRN8B8C), GA4 (G-03MEXQ4XPP), Consent Mode v2, JSON-LD Organization
- `app/robots.ts` — robots.txt; disallow: `/api/`, strony prawne, `/*?_rsc=*`
- `app/sitemap.ts` — sitemap.xml
- `next.config.ts` — 301 redirecty ze starego serwisu, nagłówki cache
- `components/ui/CookieConsent.tsx` — baner RODO z gtag consent update
- `components/navigation/Header.tsx` — nawigacja
- `components/Footer.tsx` — stopka
- `data/madejpakMachinesData.ts` / `data/madejpakMachinesDataEn.ts` — maszyny własne; **jedno źródło** dla listy i podstron, EN importuje typ z PL
- `data/realizacjeData.ts` — case studies; maszyny linkują do nich polem `slug` w `realizations`
- `components/realizacje/CaseStudyVideo.tsx` — osadzanie wideo (`youtubeId` przez youtube-nocookie)

## Maszyny własne MadejPak

Dane w `data/madejpakMachinesData.ts` (+ `...En.ts`). Jeden wpis = jedna podstrona.

- **Kolejność sekcji** ustawia jawnie `MADEJPAK_GROUPS` (nie kolejność wpisów) — maszyny specjalne zamykają listę.
- **`youtubeId: null`** ⇒ sekcja „Maszyna w ruchu" się nie renderuje. Po wrzuceniu filmów na YT wystarczy wpisać ID.
- **`image: null`** ⇒ karta pokazuje ikonę SVG zamiast zdjęcia (tak działają `felcarki` i `liczenie-i-pakowanie`).
- **`realizations[].slug`** ⇒ karta realizacji staje się linkiem do `/realizacje/[slug]`. Bez sluga to zwykła karta.

### ⚠️ Wizualizacje są celowo ciemne

Rendery w `public/images/machines/madejpak/` mają ciemną, niskokontrastową ekspozycję **celowo** —
chronią rozwiązania konstrukcyjne przed konkurencją. To decyzja biznesowa, nie błąd renderu.

- **Nie rozjaśniać, nie podbijać kontrastu.**
- **Nie wycinać tła / nie robić przezroczystych PNG** — odsłoniłoby to chronione detale.
- Prezentowane na stałym ciemnym kafelku (`RENDER_BG`), niezależnie od motywu strony
  (light jest domyślny — `--bg: #ffffff` w `app/globals.css`).
- Komunikacja ma być atmosferyczna/premium, **nie katalogowo-specyfikacyjna** — materiał świadomie nie pokazuje szczegółów.

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

## Wydarzenie: Coboty w Akcji

- **Termin**: trwa **do 31 sierpnia 2026**, dni robocze, termin uzgadniany indywidualnie
- **Godziny slotów**: 9:00, 12:00, 14:00
- **Strona**: `/coboty-w-akcji`
- **Rejestracja**: formularz EmailJS — pole daty (`min` = jutro, `max` = `CAMPAIGN_END`) + wybór godziny.
  Walidacja odrzuca weekendy i terminy po końcu kampanii.

### Przedłużanie / zmiana terminu — data żyje w 6 plikach

Zmiana terminu wymaga edycji **wszystkich** poniższych, inaczej serwis zaczyna podawać sprzeczne daty
(tak było wcześniej: `eventsData` mówił „10 czerwca", landing „15–26 czerwca", a CLAUDE.md „8–19 czerwca"):

1. `data/eventsData.ts` — `dateLabel`, `dateStart`, `zajawka`, `opis`
2. `app/coboty-w-akcji/page.tsx` — `CAMPAIGN_END` + teksty (hero, „Terminy", stopka, kafel z datą)
3. `app/coboty-w-akcji/layout.tsx` — `DESCRIPTION`, OG/Twitter title+description
4. `app/coboty-w-akcji/layout.tsx` — **JSON-LD `startDate` / `endDate`** (łatwo przeoczyć; zły `endDate` = Google pokazuje wydarzenie jako zakończone)
5. `components/sections/CobotsBanner.tsx`
6. `components/ui/CobotyConsentGate.tsx`

`dateStart` w `eventsData.ts` jest ustawiony na **koniec** kampanii (`2026-08-31`), żeby wpis trzymał się
góry listy wydarzeń przez cały czas jej trwania — semantycznie to nadużycie pola, świadome.

## Przekierowania (next.config.ts)

Wszystkie stare URL-e ze starego serwisu mają 301 redirect. Nie dodawać przekierowania www→non-www w `next.config.ts` — obsługuje to Vercel Dashboard (308).

## SEO / Search Console

- Sitemap: https://madejpak.pl/sitemap.xml
- `/*?_rsc=*` zablokowane w robots.txt (parametry Next.js RSC)
- Strony prawne (`/polityka-prywatnosci`, `/polityka-cookies`, `/informacje-prawne`) zablokowane w robots.txt
- "Discovered — not indexed": normalne dla nowego serwisu, priorytetowe strony można zgłaszać ręcznie w Search Console
