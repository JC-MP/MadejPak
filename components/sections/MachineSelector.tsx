'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

const ACCENT   = '#E8610A';
const BG_CARD  = 'var(--bg-card)';
const BG_ALT   = 'var(--bg-alt)';
const BORDER   = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

// ─── Icons ────────────────────────────────────────────────────────────────────
function Icon({ children }: { children: React.ReactNode }) {
  return (
    <Box component="svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      sx={{ width: 28, height: 28, flexShrink: 0 }}>
      {children}
    </Box>
  );
}

const ICONS: Record<string, React.ReactNode> = {
  grain:     <Icon><path d="M12 2a4 4 0 0 1 4 4c0 3-4 7-4 7S8 9 8 6a4 4 0 0 1 4-4z"/><path d="M12 13v9"/><path d="M9 18l3 3 3-3"/></Icon>,
  snacks:    <Icon><path d="M3 6h18v2a9 9 0 0 1-9 9 9 9 0 0 1-9-9V6z"/><path d="M12 17v3"/><path d="M8 21h8"/><path d="M7 6V4h10v2"/></Icon>,
  bread:     <Icon><path d="M4 13c0-4.4 3.6-8 8-8s8 3.6 8 8v1H4v-1z"/><path d="M4 14h16v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3z"/><path d="M9 14v5"/><path d="M15 14v5"/></Icon>,
  fresh:     <Icon><path d="M12 2C6 2 3 7 3 12s3 10 9 10 9-5 9-10S18 2 12 2z"/><path d="M12 6v6l4 2"/></Icon>,
  meat:      <Icon><path d="M12 2a5 5 0 0 1 5 5c0 5-5 9-5 15"/><path d="M7 7a5 5 0 0 0 5 5"/><path d="M17 7a5 5 0 0 1-5 5"/></Icon>,
  chemical:  <Icon><path d="M9 3h6"/><path d="M8.5 3v5.5L5 17a1 1 0 0 0 .93 1.36h12.14A1 1 0 0 0 19 17l-3.5-8.5V3"/><path d="M7.5 13.5h9"/></Icon>,
  aggregate: <Icon><circle cx="7" cy="17" r="3"/><circle cx="17" cy="17" r="3"/><path d="M3 17V7l4-4h10l4 4v10"/><path d="M12 13V5"/></Icon>,
  fmcg:      <Icon><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></Icon>,
  liquid:    <Icon><path d="M12 2v6"/><path d="M5 10a7 7 0 0 0 14 0H5z"/><path d="M8 22h8"/><path d="M12 18v4"/></Icon>,
  custom:    <Icon><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></Icon>,
};

// ─── Machine icons (larger, for card header) ─────────────────────────────────
function MachineIcon({ id }: { id: string }) {
  const paths: Record<string, React.ReactNode> = {
    vffs:       <><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M6 6h12l2 4v26a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10l2-4z"/><path d="M4 14h16"/><path d="M4 22h16"/><path d="M10 30h4"/></>,
    flowpack:   <><rect x="2" y="10" width="20" height="14" rx="2"/><path d="M2 17h20"/><path d="M7 10V6l3-2 3 2v4"/><path d="M22 17h2v4h-2"/><path d="M0 17h2v4H0"/></>,
    bagging:    <><path d="M8 2h8l2 6H6L8 2z"/><path d="M5 8h14l1 4v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V12l1-4z"/><path d="M9 16h6"/><path d="M9 20h6"/></>,
    palletizing:<><rect x="2" y="4" width="6" height="6" rx="1"/><rect x="10" y="4" width="6" height="6" rx="1"/><rect x="18" y="4" width="6" height="6" rx="1"/><rect x="6" y="12" width="6" height="6" rx="1"/><rect x="14" y="12" width="6" height="6" rx="1"/><rect x="2" y="20" width="20" height="3" rx="1"/><path d="M1 23h22v3H1z"/></>,
    wrapping:   <><rect x="6" y="6" width="12" height="14" rx="1"/><path d="M4 6c0 0 2-2 8-2s8 2 8 2"/><path d="M3 8s-1 2-1 5 1 5 1 5"/><path d="M21 8s1 2 1 5-1 5-1 5"/><path d="M4 18s2 2 8 2 8-2 8-2"/><path d="M10 2v4"/><path d="M14 2v4"/></>,
    robotics:   <><circle cx="12" cy="4" r="2"/><path d="M12 6v4"/><path d="M8 10h8v6H8z"/><path d="M8 13H4l-2 3v3h4"/><path d="M16 13h4l2 3v3h-4"/><path d="M9 16v6"/><path d="M15 16v6"/><path d="M7 22h10"/></>,
    conveyor:   <><rect x="1" y="8" width="22" height="10" rx="1"/><circle cx="4" cy="20" r="2"/><circle cx="20" cy="20" r="2"/><path d="M4 18v2"/><path d="M20 18v2"/><path d="M4 22h16"/><path d="M5 8V6h14v2"/><path d="M7 12h10"/></>,
    weighing:   <><path d="M12 2l3 6H9l3-6z"/><path d="M3 8h18"/><path d="M5 8l-2 12h18L19 8"/><path d="M8 14h8"/><path d="M9 18h6"/><path d="M10 22h4"/></>,
    madejpak:   <><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M16.9 16.9l2.1 2.1M4.9 19.1l2.1-2.1M16.9 7.1l2.1-2.1"/><circle cx="12" cy="12" r="7" strokeDasharray="3 2"/></>,
    lines:      <><rect x="1" y="4" width="4" height="4" rx="1"/><rect x="7" y="4" width="4" height="4" rx="1"/><rect x="13" y="4" width="4" height="4" rx="1"/><rect x="19" y="4" width="4" height="4" rx="1"/><path d="M3 8v4h18V8"/><path d="M12 12v4"/><rect x="8" y="16" width="8" height="5" rx="1"/></>,
    custom_proj:<><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></>,
    contact:    <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></>,
  };
  return (
    <Box component="svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      sx={{ width: 56, height: 56, color: ACCENT, opacity: 0.85 }}>
      {paths[id] ?? paths['madejpak']}
    </Box>
  );
}

function ArrowRight() {
  return (
    <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden="true"
      sx={{ width: 13, height: 13, flexShrink: 0, transition: 'transform 0.15s ease' }}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
interface MachineRec {
  href:        string;
  label:       string;
  reason:      string;
  machineIcon: string;
}

interface ProductType {
  id:       string;
  iconId:   string;
  label:    string;
  examples: string;
  machines: MachineRec[];
}

const PRODUCT_TYPES: ProductType[] = [
  {
    id: 'sypkie',
    iconId: 'grain',
    label: 'Sypkie i granulowane',
    examples: 'cukier, sól, mąka, kasze, kawa, granulaty, zboże, nasiona, karma dla ptaków, żwirek',
    machines: [
      { href: '/maszyny/wazenie-i-dozowanie',      label: 'Ważenie i dozowanie',            machineIcon: 'weighing',    reason: 'Precyzyjne porcjowanie produktu sypkiego przed zapakowaniem — wagi liniowe i wielogłowicowe.' },
      { href: '/maszyny/pionowe-maszyny-pakujace', label: 'Pionowe maszyny pakujące (VFFS)', machineIcon: 'vffs',        reason: 'Formowanie worka z folii i napełnianie produktem sypkim — wydajność do kilkuset opakowań na minutę.' },
      { href: '/maszyny/workowanie',               label: 'Workowanie',                      machineIcon: 'bagging',     reason: 'Dla gramatur od 1 do 50 kg — worki open-mouth i FFS do produktów sypkich i granulowanych.' },
      { href: '/maszyny/paletyzacja',              label: 'Paletyzacja',                     machineIcon: 'palletizing', reason: 'Automatyczne układanie worków i paczek na palety — robotyczna lub warstwowa.' },
    ],
  },
  {
    id: 'snacki',
    iconId: 'snacks',
    label: 'Przekąski i słodycze',
    examples: 'popcorn, paluszki, chrupki, wafle, sękacze, batony, czekolada, ciastka, suplementy',
    machines: [
      { href: '/maszyny/wazenie-i-dozowanie',      label: 'Wagi wielogłowicowe',             machineIcon: 'weighing',    reason: 'Szybkie ważenie nieregularnych kawałków i mieszanek — wydajność powyżej 100 ważeń/min.' },
      { href: '/maszyny/pionowe-maszyny-pakujace', label: 'Pionowe maszyny pakujące (VFFS)',  machineIcon: 'vffs',        reason: 'Pakowanie w torebki foliowe — idealne dla suchych przekąsek i produktów granulowanych.' },
      { href: '/maszyny/poziome-maszyny-pakujace', label: 'Poziome maszyny pakujące (flow-pack)', machineIcon: 'flowpack', reason: 'Pakowanie batonów, wafli i sękaczów w flow-pack — do 300 opakowań na minutę.' },
      { href: '/maszyny/paletyzacja',              label: 'Paletyzacja',                     machineIcon: 'palletizing', reason: 'Delikatna paletyzacja lekkich kartonów i opakowań z przekąskami.' },
    ],
  },
  {
    id: 'piekarnicze',
    iconId: 'bread',
    label: 'Pieczywo i wyroby piekarnicze',
    examples: 'chleb, bułki, bagietki, pieczywo pakowane, tortille, muffiny',
    machines: [
      { href: '/maszyny/poziome-maszyny-pakujace', label: 'Poziome maszyny pakujące (flow-pack)', machineIcon: 'flowpack',    reason: 'Pakowanie pieczywa w folię z możliwością modyfikowanej atmosfery (MAP) dla dłuższej świeżości.' },
      { href: '/maszyny/transport-i-koniec-linii', label: 'Transport i koniec linii',             machineIcon: 'conveyor',    reason: 'Przenośniki dostosowane do delikatnych produktów — miękkie powierzchnie, odpowiednie prędkości.' },
      { href: '/maszyny/paletyzacja',              label: 'Paletyzacja',                          machineIcon: 'palletizing', reason: 'Robotyczna paletyzacja kartonów i opakowań zbiorczych z pieczywem.' },
      { href: '/maszyny/owijarki-do-palet',        label: 'Owijarki do palet',                    machineIcon: 'wrapping',    reason: 'Zabezpieczenie gotowych palet z pieczywem przed transportem.' },
    ],
  },
  {
    id: 'swiezeimrozone',
    iconId: 'fresh',
    label: 'Warzywa, owoce i mrożonki',
    examples: 'warzywa świeże i mrożone, owoce, maliny, pomidory, sałaty, grzyby, mrożone dania gotowe',
    machines: [
      { href: '/maszyny/wazenie-i-dozowanie',      label: 'Wagi wielogłowicowe',            machineIcon: 'weighing',    reason: 'Szybkie i dokładne dozowanie nieregularnych produktów — wydajność powyżej 100 ważeń/min.' },
      { href: '/maszyny/pionowe-maszyny-pakujace', label: 'Pionowe maszyny pakujące (VFFS)', machineIcon: 'vffs',        reason: 'Pakowanie w worki foliowe lub torebki — do produktów świeżych, mrożonych i MAP.' },
      { href: '/maszyny/paletyzacja',              label: 'Paletyzacja',                     machineIcon: 'palletizing', reason: 'Robotyczne systemy paletyzacji dla opakowań o zmiennej wadze i kształcie.' },
      { href: '/maszyny/transport-i-koniec-linii', label: 'Transport i koniec linii',        machineIcon: 'conveyor',    reason: 'Przenośniki i sortowniki łączące ważenie, pakowanie i ekspedycję w jeden ciąg.' },
    ],
  },
  {
    id: 'miesonabialy',
    iconId: 'meat',
    label: 'Mięso, nabiał i chłodnicze',
    examples: 'mięso świeże i przetworzone, wędliny, ryby, sery, lody, masło, jajka w opakowaniu',
    machines: [
      { href: '/maszyny/poziome-maszyny-pakujace', label: 'Poziome maszyny pakujące (flow-pack)', machineIcon: 'flowpack',    reason: 'Pakowanie w MAP lub próżni — zachowanie świeżości przy zachowaniu wydajności linii.' },
      { href: '/maszyny/wazenie-i-dozowanie',      label: 'Ważenie i dozowanie',                  machineIcon: 'weighing',    reason: 'Wagi do produktów wilgotnych i nieregularnych, w wykonaniu inox do celów spożywczych.' },
      { href: '/maszyny/robotyzacja-pakowania',    label: 'Robotyzacja pakowania',                machineIcon: 'robotics',    reason: 'Roboty do pick-and-place w środowiskach chłodniczych — wysoka wydajność przy minimalnej obsłudze.' },
      { href: '/maszyny/paletyzacja',              label: 'Paletyzacja',                          machineIcon: 'palletizing', reason: 'Paletyzatory do tacek, kartonów i opakowań zbiorczych w warunkach sanitarnych.' },
    ],
  },
  {
    id: 'chemia',
    iconId: 'chemical',
    label: 'Nawozy, chemia i budownictwo',
    examples: 'nawozy, detergenty, chlorek wapnia, zaprawy budowlane, cement, kleje, środki czyszczące',
    machines: [
      { href: '/maszyny/pionowe-maszyny-pakujace', label: 'Pionowe maszyny pakujące (VFFS)', machineIcon: 'vffs',        reason: 'Pakowanie nawozów i proszków chemicznych w torebki — odporne na agresywne media wykonania.' },
      { href: '/maszyny/workowanie',               label: 'Workowanie',                      machineIcon: 'bagging',     reason: 'Workownice open-mouth i FFS do produktów agresywnych — wykonanie odporne na pył i korozję.' },
      { href: '/maszyny/paletyzacja',              label: 'Paletyzacja',                     machineIcon: 'palletizing', reason: 'Solidne paletyzatory do ciężkich worków 25–50 kg — roboty i głowice warstwowe.' },
      { href: '/maszyny/owijarki-do-palet',        label: 'Owijarki do palet',               machineIcon: 'wrapping',    reason: 'Owijanie stretch do zabezpieczenia palet z produktami chemicznymi na transport.' },
    ],
  },
  {
    id: 'kruszywa',
    iconId: 'aggregate',
    label: 'Kruszywa i paliwa stałe',
    examples: 'pelet drzewny, węgiel, ekogroszek, keramzyt, piasek, kamienie ozdobne, trociny, żwir',
    machines: [
      { href: '/maszyny/pionowe-maszyny-pakujace', label: 'Pionowe maszyny pakujące (VFFS)', machineIcon: 'vffs',        reason: 'Maszyny pionowe do peletu, węgla i kruszyw w workach foliowych — wzmocnione wykonanie.' },
      { href: '/maszyny/workowanie',               label: 'Workowanie BigBag i worki',       machineIcon: 'bagging',     reason: 'Stacje BigBag i workownice do grubych kruszyw i materiałów o dużej granulacji.' },
      { href: '/maszyny/wazenie-i-dozowanie',      label: 'Ważenie i dozowanie',             machineIcon: 'weighing',    reason: 'Wagi zasobnikowe i przenośniki ważące dostosowane do ciężkich i ściernych materiałów.' },
      { href: '/maszyny/paletyzacja',              label: 'Paletyzacja',                     machineIcon: 'palletizing', reason: 'Paletyzatory warstwowe lub robotyczne do worków 10–50 kg z kruszywami.' },
    ],
  },
  {
    id: 'fmcg',
    iconId: 'fmcg',
    label: 'Artykuły FMCG i przemysłowe',
    examples: 'wkłady zniczowe, plastelina, glina modelarska, osprzęt elektryczny, drut spawalniczy, ścierki, artykuły dekoracyjne',
    machines: [
      { href: '/maszyny/poziome-maszyny-pakujace', label: 'Poziome maszyny pakujące (flow-pack)', machineIcon: 'flowpack',    reason: 'Flow-pack do wkładów zniczowych, artykułów plastycznych i gotowych wyrobów — eurowieszak, nadruk.' },
      { href: '/maszyny/robotyzacja-pakowania',    label: 'Robotyzacja pakowania',               machineIcon: 'robotics',    reason: 'Manipulatory i roboty do produktów o niestandardowych kształtach — szpule, ścierki, osprzęt.' },
      { href: '/maszyny/transport-i-koniec-linii', label: 'Transport i koniec linii',            machineIcon: 'conveyor',    reason: 'Przenośniki taśmowe i rolkowe łączące pakowanie z ekspedycją.' },
      { href: '/maszyny/paletyzacja',              label: 'Paletyzacja',                         machineIcon: 'palletizing', reason: 'Paletyzacja kartonów zbiorczych z artykułami FMCG.' },
    ],
  },
  {
    id: 'plyny',
    iconId: 'liquid',
    label: 'Płyny i pasty',
    examples: 'oleje, sosy, pasty, kosmetyki, środki czyszczące, farby, żele',
    machines: [
      { href: '/maszyny/poziome-maszyny-pakujace', label: 'Poziome maszyny pakujące', machineIcon: 'flowpack',    reason: 'Pakowanie saszetek i poduszeczek z płynami — dostosowanie do produktów lepkich i mokrych.' },
      { href: '/maszyny/robotyzacja-pakowania',    label: 'Robotyzacja pakowania',    machineIcon: 'robotics',    reason: 'Roboty do wkładania produktów do kartonów, obsługi linii butelkowania i tacek.' },
      { href: '/maszyny/transport-i-koniec-linii', label: 'Transport i koniec linii', machineIcon: 'conveyor',    reason: 'Przenośniki ze stali nierdzewnej przystosowane do środowisk mokrych.' },
      { href: '/maszyny/paletyzacja',              label: 'Paletyzacja',              machineIcon: 'palletizing', reason: 'Paletyzacja kartonów i butelek z odpowiednimi chwytakami i systemami prowadzenia.' },
    ],
  },
  {
    id: 'custom',
    iconId: 'custom',
    label: 'Produkt niestandardowy',
    examples: 'trudny produkt, specjalny kształt, agresywne medium, brak maszyny z katalogu, środowisko przemysłowe',
    machines: [
      { href: '/maszyny/madejpak',              label: 'Maszyny MadejPak',      machineIcon: 'madejpak',    reason: 'Własne maszyny projektowane od podstaw dla trudnych aplikacji bez gotowego rozwiązania na rynku.' },
      { href: '/rozwiazania/projekty-custom',   label: 'Projekty custom',       machineIcon: 'custom_proj', reason: 'Projektujemy i budujemy niestandardowe stanowiska i linie dla produktów specjalnych.' },
      { href: '/maszyny/robotyzacja-pakowania', label: 'Robotyzacja pakowania', machineIcon: 'robotics',    reason: 'Roboty z dedykowanymi chwytakami do produktów o niestandardowych kształtach i wagach.' },
      { href: '/kontakt',                       label: 'Skonsultuj z nami',     machineIcon: 'contact',     reason: 'Opisz nam swój produkt — przeanalizujemy proces i zaproponujemy optymalne rozwiązanie.' },
    ],
  },
];

// ─── Format-based navigation ─────────────────────────────────────────────────
const FORMAT_PATHS = [
  { label: 'Worek foliowy (VFFS)',        sub: 'sypkie, granulaty, mrożonki',        href: '/maszyny/pionowe-maszyny-pakujace' },
  { label: 'Flow-pack / poziomy',          sub: 'batony, pieczywo, artykuły gotowe',   href: '/maszyny/poziome-maszyny-pakujace' },
  { label: 'Worek otwarty / Big Bag',      sub: '1–50 kg, kruszywa, chemia, pasze',    href: '/maszyny/workowanie' },
  { label: 'Paleta',                        sub: 'paletyzacja warstw lub robotyczna',    href: '/maszyny/paletyzacja' },
  { label: 'Folia stretch na palecie',      sub: 'zabezpieczenie do transportu',        href: '/maszyny/owijarki-do-palet' },
  { label: 'Opakowanie robotyczne',         sub: 'pick-and-place, kartonowanie, handling', href: '/maszyny/robotyzacja-pakowania' },
  { label: 'Gotowa linia pakująca',         sub: 'skonfigurowane zestawy maszyn',       href: '/maszyny/gotowe-linie-pakujace' },
];

// ─── Machine card ─────────────────────────────────────────────────────────────
function MachineCard({ rec }: { rec: MachineRec }) {
  return (
    <Box component={Link} href={rec.href}
      sx={{
        display: 'flex', flexDirection: 'column',
        bgcolor: BG_CARD, border: `1px solid ${BORDER}`,
        borderRadius: '4px', overflow: 'hidden', textDecoration: 'none',
        transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
        '&:hover': { boxShadow: '0 8px 32px rgba(0,0,0,0.12)', borderColor: ACCENT },
        '&:hover .arrow': { transform: 'translateX(3px)' },
        '&:hover .machine-icon': { opacity: 1, transform: 'scale(1.08)' },
      }}>
      {/* Icon box */}
      <Box sx={{
        height: 140, bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Box className="machine-icon" sx={{ opacity: 0.7, transition: 'opacity 0.2s ease, transform 0.2s ease' }}>
          <MachineIcon id={rec.machineIcon} />
        </Box>
      </Box>
      <Box sx={{ p: { xs: 2.5, md: 3 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography component="h3"
          sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.3, mb: 1.5 }}>
          {rec.label}
        </Typography>
        <Typography sx={{ fontSize: '0.85rem', color: TEXT_DIM, lineHeight: 1.7, flex: 1, mb: 2.5 }}>
          {rec.reason}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, color: ACCENT, fontSize: '0.8rem', fontWeight: 600 }}>
          <span>Zobacz więcej</span>
          <Box className="arrow"><ArrowRight /></Box>
        </Box>
      </Box>
    </Box>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function MachineSelector() {
  const [selected, setSelected] = useState<string | null>(null);
  const resultsRef = React.useRef<HTMLDivElement>(null);

  const active = PRODUCT_TYPES.find((p) => p.id === selected) ?? null;

  function handleSelect(id: string) {
    const isActive = selected === id;
    setSelected(isActive ? null : id);
    if (!isActive) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {/* Label */}
        <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
          Dobierz maszyny
        </Typography>

        <Typography component="h2"
          sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: 2 }}>
          Co chcesz pakować?
        </Typography>
        <Typography sx={{ fontSize: '0.95rem', color: TEXT_DIM, lineHeight: 1.7, mb: { xs: 5, md: 6 }, maxWidth: 560 }}>
          Wybierz typ produktu — pokażemy, które maszyny będą dla Ciebie odpowiednie.
        </Typography>

        {/* Product type grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }, gap: { xs: 1.5, md: 2 }, mb: { xs: 6, md: 8 } }}>
          {PRODUCT_TYPES.map((pt) => {
            const isActive = selected === pt.id;
            return (
              <Box key={pt.id} component="button" onClick={() => handleSelect(pt.id)}
                sx={{
                  display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1.5,
                  p: { xs: 2, md: 2.5 }, cursor: 'pointer', textAlign: 'left',
                  bgcolor: isActive ? `color-mix(in srgb, ${ACCENT} 10%, var(--bg-card))` : BG_CARD,
                  border: `1px solid ${isActive ? ACCENT : BORDER}`,
                  borderRadius: '4px', transition: 'all 0.15s ease',
                  color: isActive ? ACCENT : 'var(--text)',
                  '&:hover': { borderColor: ACCENT, color: ACCENT },
                }}>
                <Box sx={{ color: isActive ? ACCENT : TEXT_DIM }}>
                  {ICONS[pt.iconId]}
                </Box>
                <Typography sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, fontWeight: 700, lineHeight: 1.3, color: 'inherit' }}>
                  {pt.label}
                </Typography>
                <Typography sx={{ fontSize: '0.78rem', fontWeight: 500, color: TEXT_DIM, lineHeight: 1.5, display: { xs: 'none', md: 'block' } }}>
                  {pt.examples}
                </Typography>
                {/* Machine count hint */}
                <Typography sx={{ fontSize: '0.72rem', fontWeight: 600, color: isActive ? ACCENT : 'var(--dim-40)', mt: 'auto', pt: 0.5 }}>
                  {pt.machines.length} maszyny →
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* Recommendations */}
        {active && (
          <Box ref={resultsRef} sx={{ scrollMarginTop: '90px', animation: 'fadeIn 0.25s ease', '@keyframes fadeIn': { from: { opacity: 0, transform: 'translateY(8px)' }, to: { opacity: 1, transform: 'translateY(0)' } } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4, pb: 3, borderBottom: `1px solid ${BORDER}` }}>
              <Box sx={{ width: 4, height: 24, bgcolor: ACCENT, borderRadius: 2, flexShrink: 0 }} />
              <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>
                Rekomendowane maszyny dla: <Box component="span" sx={{ color: ACCENT }}>{active.label}</Box>
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' }, gap: { xs: 2, md: 2.5 }, mb: 5 }}>
              {active.machines.map((rec) => (
                <MachineCard key={rec.href} rec={rec} />
              ))}
            </Box>

            {/* Not sure CTA */}
            <Box sx={{ bgcolor: BG_ALT, border: `1px solid ${BORDER}`, borderRadius: '4px', p: { xs: 3, md: 4 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between', gap: 3 }}>
              <Box>
                <Typography sx={{ fontSize: '1rem', fontWeight: 700, mb: 0.75 }}>
                  Nie jesteś pewien, które rozwiązanie pasuje?
                </Typography>
                <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.6 }}>
                  Opisz nam swój produkt i proces — dobierzemy maszyny i przygotujemy wycenę.
                </Typography>
              </Box>
              <Button component={Link} href="/kontakt" variant="contained" disableElevation
                sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, textTransform: 'none', px: 3.5, py: 1.5, borderRadius: '6px', fontSize: '0.9rem', whiteSpace: 'nowrap', flexShrink: 0, '&:hover': { bgcolor: '#d4560a' } }}>
                Skontaktuj się
              </Button>
            </Box>
          </Box>
        )}

        {/* Format-based path — visible when nothing selected */}
        {!active && (
          <Box sx={{ borderTop: `1px solid ${BORDER}`, pt: { xs: 5, md: 6 } }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
              Lub wybierz wg formatu opakowania
            </Typography>
            <Typography sx={{ fontSize: '0.88rem', color: TEXT_DIM, mb: 3.5 }}>
              Znasz format opakowania, ale nie wiesz, jaka maszyna go obsłuży? Wybierz bezpośrednio.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              {FORMAT_PATHS.map((f) => (
                <Box
                  key={f.href}
                  component={Link}
                  href={f.href}
                  sx={{
                    display: 'flex', flexDirection: 'column',
                    px: 2.5, py: 1.75,
                    bgcolor: BG_CARD, border: `1px solid ${BORDER}`,
                    borderRadius: '4px', textDecoration: 'none',
                    transition: 'border-color 0.15s ease, background-color 0.15s ease',
                    '&:hover': { borderColor: ACCENT, bgcolor: `color-mix(in srgb, ${ACCENT} 5%, var(--bg-card))` },
                  }}
                >
                  <Typography sx={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text)', mb: 0.25 }}>
                    {f.label}
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: TEXT_DIM }}>
                    {f.sub}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box sx={{ mt: 4, pt: 4, borderTop: `1px solid ${BORDER}`, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' }, gap: 2 }}>
              <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, maxWidth: 460 }}>
                Wolisz porozmawiać z doradcą? Dobierzemy maszyny po produkcie, wydajności i formacie opakowania.
              </Typography>
              <Button component={Link} href="/kontakt" variant="outlined" disableElevation
                sx={{ borderColor: BORDER, color: 'var(--text)', fontWeight: 600, textTransform: 'none', px: 3, py: 1.25, borderRadius: '6px', fontSize: '0.875rem', whiteSpace: 'nowrap', flexShrink: 0, '&:hover': { borderColor: ACCENT, color: ACCENT } }}>
                Napisz do nas
              </Button>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
}
