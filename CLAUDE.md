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
| `/maszyny/pactur-auto-60-unica`, `/maszyny/colimatic-thera-450` | Podstrony akcji promocyjnej (modal na stronie głównej) |
| `/maszyny/madejpak` | **Maszyny własnej produkcji** — lista wg grup |
| `/maszyny/madejpak/[slug]` | Podstrona maszyny własnej — opis, galeria, wideo, realizacje (9 maszyn) |
| `/maszyny/partnerzy` | Maszyny partnerów |
| `/maszyny/paletyzacja` | Gotowe stanowiska paletyzacji + dobór online (`?produkt=…#dobor` (worki-ciezkie, worki-sypkie, kartony, nietypowe) — wejścia z reklam) |
| `/maszyny/kartonowanie` | Formowanie, pakowanie i zaklejanie kartonów (same zakresy, bez nazwy producenta) |
| `/maszyny/robotyzacja-pakowania` | Robotyzacja, coboty |
| `/maszyny/wazenie-i-dozowanie` | Wagi wielogłowicowe |
| `/maszyny/transport-i-koniec-linii` | Podajniki, transport |
| `/maszyny/workowanie` | Workowanie, BigBag |
| `/maszyny/owijarki-do-palet` | Owijarki palet |
| `/maszyny/gotowe-linie-pakujace` | Gotowe linie |
| `/coboty-w-akcji` | Akcja zakończona 4.11.2026: strona z podziękowaniem, `noindex`, bez linków z serwisu i bez wpisu w sitemapie |
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

## Kampania na stronie głównej (modal)

- `data/campaignData.ts` — modal i przełączniki; `components/sections/CampaignPopup.tsx` — jeden wspólny mechanizm dla PL i EN.
- `data/campaignMachines.ts` + `components/campaign/` — treści i szablon podstron.
- `components/campaign/PromoBanner.tsx` — czerwony pasek: modal, podstrony maszyn, strona główna PL i EN.
- **LCP:** nie powiększać zdjęć ani tekstów w modalu. Większy element staje się LCP strony głównej (modal otwiera się po 3 s).
- **Wyłączenie modala:** `enabled: false` w `ACTIVE_CAMPAIGN`. **Nowa kampania:** nowy `id` i treści w `content`.
- **Maszyna sprzedana:** `promo: false` w `CAMPAIGN_MACHINES` (hasło znika z modala, podstrony, formularza i meta description, a wpis z listy wydarzeń).
- Akcje są też wpisami na `/targi-i-wydarzenia` i na stronie głównej: `data/eventsData.ts`, `eventType: 'promocja'` (teksty EN: `data/eventsDataEn.ts`). **Nie oznaczać ich schematem `Event`.**
- Hasło promocji podajemy bez kwot, rabatów, liczby sztuk i terminów dostawy.

## Paletyzacja i kartonowanie

- Treści: `data/palletizingData.ts` (+ reguły doboru w `data/palletizingSpec.ts`), `data/cartoningData.ts`; szablony w `components/palletizing/` i `components/cartoning/`.
- **Od partnerów** bierzemy tylko roboty (KUKA, cobot DOBOT dla lekkich kartonów), owijarki (Technowrapp) i maszyny do kartonów. Chwytaki, podajniki, bufory, magazyn palet i integracja — MadejPak.
- **Nigdy nie podajemy cen.** Producenta formowarek/zaklejarek nie nazywamy i nie pokazujemy jego zdjęć — tylko zakresy.
- Wydajności stanowisk paletyzacji nie są publikowane (zależą od procesu klienta) — dodać, gdy przyjdą od techników.
- `COBOT_MAX_MASS_INDEX` w `palletizingSpec.ts` — próg masy dla wariantu z cobotem, do potwierdzenia przez techników.
- Obrazy: rysunki 3D linii (`PRODUCT_LINE_IMAGES`) i zdjęcia wariantów (`VARIANT_MEDIA`) w `palletizingSpec.ts`, pliki w `public/images/palletizing/`. Filmy modułów: `MODULE_VIDEOS`.

## Zakończone: Coboty w Akcji

Akcja zakończona 4.11.2026. Pod `/coboty-w-akcji` jest krótkie podziękowanie z linkami do robotyzacji i kontaktu:
`noindex`, bez formularza, bez schematu `Event`, bez linków z serwisu i bez wpisu w sitemapie. Wpis na liście wydarzeń
ma status `past`. `CobotyConsentGate`, `CobotyConversion` i `CobotsBanner` zostały w repo, ale nic ich już nie używa.

## Przekierowania (next.config.ts)

Wszystkie stare URL-e ze starego serwisu mają 301 redirect. Nie dodawać przekierowania www→non-www w `next.config.ts` — obsługuje to Vercel Dashboard (308).

## SEO / Search Console

- Sitemap: https://madejpak.pl/sitemap.xml
- `/*?_rsc=*` zablokowane w robots.txt (parametry Next.js RSC)
- Strony prawne (`/polityka-prywatnosci`, `/polityka-cookies`, `/informacje-prawne`) zablokowane w robots.txt
- "Discovered — not indexed": normalne dla nowego serwisu, priorytetowe strony można zgłaszać ręcznie w Search Console
