export type EventType = 'targi' | 'dni-otwarte';

export interface TradeEvent {
  id: string;
  name: string;
  dateLabel: string;
  dateStart: string;      // YYYY-MM-DD, do sortowania
  city: string;
  venue?: string;
  country: string;
  zajawka: string;        // 1–2 zdania na karcie home
  opis: string;           // 2–4 zdania na podstronie
  partners?: string[];
  boothInfo?: string;
  teamNote?: string;
  highlights?: string[];
  eventType: EventType;
  status: 'upcoming' | 'past';
}

export const EVENTS: TradeEvent[] = [
  // ─── 2025 ────────────────────────────────────────────────────────────────
  {
    id: 'maintenance-symas-2025',
    name: 'MAINTENANCE & SYMAS® 2025',
    dateLabel: '15–16 października 2025',
    dateStart: '2025-10-15',
    city: 'Kraków',
    country: 'Polska',
    zajawka:
      'MadejPak uczestniczył w targach technologii utrzymania ruchu i systemów automatyki przemysłowej w Krakowie.',
    opis:
      'MAINTENANCE & SYMAS® to wydarzenie branżowe skupiające dostawców i producentów z obszaru utrzymania ruchu, diagnostyki i automatyki przemysłowej. MadejPak uczestniczył w targach w Krakowie w październiku 2025.',
    eventType: 'targi',
    status: 'past',
  },
  {
    id: 'taropak-2025',
    name: 'Taropak 2025',
    dateLabel: '24–26 września 2025',
    dateStart: '2025-09-24',
    city: 'Poznań',
    venue: 'Międzynarodowe Targi Poznańskie',
    country: 'Polska',
    zajawka:
      'MadejPak prezentował rozwiązania dla linii pakujących — maszynę poziomą ze zgrzewem ultradźwiękowym i pokazy paletyzacji na żywo. Stoisko 51, Hala 6.',
    opis:
      'Na Taropak 2025 MadejPak zaprezentował nowoczesne rozwiązania dla linii pakujących: maszynę poziomą ze zgrzewem ultradźwiękowym oraz pokazy paletyzacji na żywo. Wydarzenie było okazją do rozmów i konsultacji z zespołem ekspertów. Targi odbyły się w kontekście 25-lecia działalności firmy.',
    boothInfo: 'Stoisko 51, Hala 6',
    highlights: [
      'Maszyna pozioma ze zgrzewem ultradźwiękowym',
      'Pokazy paletyzacji na żywo',
      'Konsultacje z zespołem ekspertów',
    ],
    eventType: 'targi',
    status: 'past',
  },
  {
    id: 'ipack-ima-2025',
    name: 'IPACK-IMA 2025',
    dateLabel: '27–30 maja 2025',
    dateStart: '2025-05-27',
    city: 'Mediolan',
    venue: 'Fiera Milano Rho',
    country: 'Włochy',
    zajawka:
      'Targi technologii pakowania w Mediolanie. Przedstawiciele MadejPak obecni 28–29 maja na stoiskach partnerów: Concetti, Essegi i Tecno Pack Group – GSP.',
    opis:
      'IPACK-IMA to jedno z wiodących wydarzeń branżowych w Europie, obejmujące technologie pakowania, przetwarzania i logistyki. Przedstawiciele MadejPak uczestniczyli w targach 28–29 maja 2025, odwiedzając stoiska kluczowych partnerów technologicznych — Concetti, Essegi oraz Tecno Pack Group – GSP.',
    partners: ['Concetti', 'Essegi', 'Tecno Pack Group – GSP'],
    teamNote: 'Przedstawiciele MadejPak obecni 28–29 maja 2025',
    eventType: 'targi',
    status: 'past',
  },
  {
    id: 'iba-2025',
    name: 'IBA 2025',
    dateLabel: '18–22 maja 2025',
    dateStart: '2025-05-18',
    city: 'Düsseldorf',
    venue: 'Messe Düsseldorf',
    country: 'Niemcy',
    zajawka:
      'Wiodące targi branży piekarniczej, cukierniczej i przekąsek. MadejPak obecny przy stoisku partnera Tecno Pack S.p.A.',
    opis:
      'IBA to kluczowe wydarzenie dla branży piekarniczej, cukierniczej i producentów przekąsek. MadejPak uczestniczył w targach przy stoisku partnera technologicznego Tecno Pack S.p.A. — producenta maszyn pakujących dla sektora spożywczego.',
    partners: ['Tecno Pack S.p.A.'],
    eventType: 'targi',
    status: 'past',
  },

  // ─── 2024 ────────────────────────────────────────────────────────────────
  {
    id: 'dni-otwarte-2024',
    name: 'Dni Otwarte MadejPak 2024',
    dateLabel: '22 maja 2024',
    dateStart: '2024-05-22',
    city: 'Dziewina',
    country: 'Polska',
    zajawka:
      'MadejPak zaprosił klientów i partnerów na Dni Otwarte w siedzibie firmy w Dziewinie — prezentacja rozwiązań i rozmowy z zespołem.',
    opis:
      'Dni Otwarte MadejPak 2024 odbyły się 22 maja w siedzibie firmy w Dziewinie. Wydarzenie umożliwiło klientom i partnerom zapoznanie się z ofertą firmy, obejrzenie maszyn i rozwiązań oraz bezpośrednią rozmowę z zespołem MadejPak.',
    eventType: 'dni-otwarte',
    status: 'past',
  },

  // ─── 2023 ────────────────────────────────────────────────────────────────
  {
    id: 'dni-otwarte-2023',
    name: 'Dni Otwarte MadejPak 2023',
    dateLabel: '15–16 listopada 2023',
    dateStart: '2023-11-15',
    city: 'Dziewina',
    country: 'Polska',
    zajawka:
      'Dwudniowe Dni Otwarte w siedzibie MadejPak w Dziewinie — prezentacja oferty i możliwość bezpośredniej rozmowy z zespołem.',
    opis:
      'Dni Otwarte MadejPak 2023 odbyły się 15 i 16 listopada w siedzibie firmy w Dziewinie. Wydarzenie było okazją do zapoznania się z aktualną ofertą maszyn i rozwiązań pakujących oraz spotkania z ekspertami MadejPak.',
    eventType: 'dni-otwarte',
    status: 'past',
  },
  {
    id: 'warsaw-industry-automatica-2023',
    name: 'Warsaw Industry Automatica 2023',
    dateLabel: '9–11 maja 2023',
    dateStart: '2023-05-09',
    city: 'Warszawa',
    country: 'Polska',
    zajawka:
      'Na stoisku B3.01 (Hala B) MadejPak prezentował paletyzację robotyczną, pionową maszynę Essegi i poziomą maszynę General System Pack.',
    opis:
      'Na Warsaw Industry Automatica 2023 MadejPak zaprezentował poglądową linię paletyzacji robotycznej, pionową maszynę pakującą Essegi oraz poziomą maszynę pakującą General System Pack. Stoisko B3.01 na hali B umożliwiało obserwację maszyn w działaniu i rozmowy z zespołem.',
    partners: ['KUKA', 'Essegi', 'General System Pack'],
    boothInfo: 'Stoisko B3.01, Hala B',
    highlights: [
      'Poglądowa paletyzacja robotyczna',
      'Pionowa maszyna pakująca Essegi',
      'Pozioma maszyna pakująca General System Pack',
    ],
    eventType: 'targi',
    status: 'past',
  },
  {
    id: 'warsaw-pack-2023',
    name: 'Warsaw Pack 2023',
    dateLabel: '18–20 kwietnia 2023',
    dateStart: '2023-04-18',
    city: 'Warszawa',
    country: 'Polska',
    zajawka:
      'MadejPak na targach Warsaw Pack. Stoisko B3.01, Hala B.',
    opis:
      'MadejPak uczestniczył w targach Warsaw Pack 2023 w Warszawie. Stoisko B3.01 na hali B.',
    boothInfo: 'Stoisko B3.01, Hala B',
    eventType: 'targi',
    status: 'past',
  },

  // ─── 2022 ────────────────────────────────────────────────────────────────
  {
    id: 'foodtech-expo-2022',
    name: 'FoodTech Expo 2022',
    dateLabel: '1 grudnia 2022',
    dateStart: '2022-12-01',
    city: 'Polska',
    country: 'Polska',
    zajawka:
      'MadejPak na targach FoodTech Expo — prezentacja maszyn pakujących i systemów paletyzacji we współpracy z partnerami: General System Pack, Essegi i Concetti.',
    opis:
      'Na FoodTech Expo 2022 MadejPak prezentował maszyny pakujące i systemy paletyzacji we współpracy z partnerami technologicznymi. Oferta obejmowała poziome maszyny pakujące General System Pack, pionowe maszyny Essegi oraz linie pakujące Concetti.',
    partners: ['General System Pack', 'Essegi', 'Concetti'],
    eventType: 'targi',
    status: 'past',
  },

  // ─── 2021 ────────────────────────────────────────────────────────────────
  {
    id: 'taropak-2021',
    name: 'TaroPak 2021',
    dateLabel: '6 grudnia 2021',
    dateStart: '2021-12-06',
    city: 'Poznań',
    venue: 'Międzynarodowe Targi Poznańskie',
    country: 'Polska',
    zajawka:
      'MadejPak na Taropak 2021. Stoisko nr 76, Pawilon 6.',
    opis:
      'MadejPak uczestniczył w Taropak 2021 na Międzynarodowych Targach Poznańskich. Stoisko nr 76 w Pawilonie 6.',
    boothInfo: 'Stoisko 76, Pawilon 6',
    eventType: 'targi',
    status: 'past',
  },

  // ─── 2019 ────────────────────────────────────────────────────────────────
  {
    id: 'bakepol-2019',
    name: 'Bakepol 2019',
    dateLabel: '12–14 września 2019',
    dateStart: '2019-09-12',
    city: 'Kraków',
    country: 'Polska',
    zajawka:
      'MadejPak na targach Bakepol w Krakowie — wydarzenie dla branży piekarniczej i cukierniczej.',
    opis:
      'MadejPak uczestniczył w targach Bakepol 2019 w Krakowie — branżowym wydarzeniu skierowanym do sektora piekarniczego i cukierniczego.',
    eventType: 'targi',
    status: 'past',
  },
];
