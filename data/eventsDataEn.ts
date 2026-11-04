import { EVENTS, type TradeEvent } from './eventsData';

// Teksty EN wydarzeń — klucz to `id` z eventsData.ts. Daty, status, partnerzy,
// typ i wideo zostają z danych PL; tu tylko pola wyświetlane na stronach /en.
type EventTextEn = Pick<TradeEvent, 'name' | 'dateLabel' | 'city' | 'country' | 'zajawka' | 'opis'> &
  Partial<Pick<TradeEvent, 'venue' | 'boothInfo' | 'teamNote' | 'highlights' | 'invitationUrl'>>;

const EVENT_TEXT_EN: Record<string, EventTextEn> = {
  'akcja-promocyjna-pactur-auto-60-unica': {
    name: 'Promotion: Pactur AUTO 60 UNICA',
    dateLabel: 'while stocks last',
    city: 'MadejPak offer',
    venue: 'Automatic shrink wrapping',
    country: 'Poland',
    zajawka:
      'Promotional price on an automatic L-sealer with a separate shrink tunnel, while stocks last. Less manual work and better pack appearance.',
    opis:
      'The Pactur AUTO 60 UNICA is an automatic L-sealer with a separate shrink tunnel that reduces manual film wrapping and improves pack appearance. We offer the machine in this configuration at a promotional price, while stocks last. Tell us what you pack and we will check whether it suits your production.',
    highlights: [
      'Automatic product detection and transfer',
      'Separate, longer tunnel for even film shrinkage',
      'Stand-alone operation or work in a line',
      'Service and integration by MadejPak',
    ],
    invitationUrl: '/en/maszyny/pactur-auto-60-unica',
  },
  'akcja-promocyjna-colimatic-thera-450': {
    name: 'Promotion: Colimatic THERA 450',
    dateLabel: 'while stocks last',
    city: 'MadejPak offer',
    venue: 'Thermoforming, vacuum and MAP',
    country: 'Poland',
    zajawka:
      'Promotional price on an automatic thermoformer with a vacuum and MAP system and a gas installation, while stocks last. Up to 1,680 packs/h in a specified configuration.',
    opis:
      'The Colimatic THERA 450 automatically forms and packs food products. The offered configuration has a vacuum and MAP packaging system with a gas installation. We offer the machine in this configuration at a promotional price, while stocks last. Tell us what you pack and we will check whether it suits your production.',
    highlights: [
      'Vacuum and MAP in one machine, with a gas installation',
      'Up to 1,680 packs/h with a 200 × 150 mm format',
      'Hinged forming and sealing stations',
      'Service and integration by MadejPak',
    ],
    invitationUrl: '/en/maszyny/colimatic-thera-450',
  },
  'dni-otwarte-coboty-2026': {
    name: 'MadejPak Open Days — Cobots in Action',
    dateLabel: 'June – November 2026',
    city: 'Dziewin',
    venue: 'MadejPak headquarters',
    country: 'Poland',
    zajawka:
      'Live DOBOT cobot demos at our headquarters: CR20A palletising, Nova 5 pick & place, integration with a flow-pack machine. The campaign has ended.',
    opis:
      'MadejPak + DOBOT Open Days were aimed at company owners, production managers and engineers who wanted to see live how cobots work in real production conditions. The DOBOT CR20A (20 kg, 1700 mm reach) showed carton and bag palletising, and the Nova 5 (5 kg, 850 mm reach) demonstrated precise pick & place and automatic feeding of a flow-pack machine. The campaign has ended. You can ask us about packaging robotics at any time.',
    highlights: [
      'DOBOT CR20A — carton and bag palletising, 24/7 operation',
      'DOBOT Nova 5 — product pick & place, integration with a flow-pack machine',
      'Real-time cobot programming — no coding skills needed',
      'Consultations with MadejPak and DOBOT experts',
    ],
  },
  'interpack-2026': {
    name: 'Interpack 2026',
    dateLabel: '7–13 May 2026',
    city: 'Düsseldorf',
    venue: 'Messe Düsseldorf',
    country: 'Germany',
    zajawka:
      'MadejPak at the world’s largest packaging trade fair — on the stands of our technology partners in Düsseldorf, four stands in three halls.',
    opis:
      'Interpack is the world’s largest packaging trade fair, held every three years in Düsseldorf. At Interpack 2026 MadejPak was present on the stands of four technology partners: Tecno Pack (Halle 5 / F22), EsseGi (Halle 12 / D07), Concetti (Halle 12 / B10) and Vimco (Halle 13 / C59), which showed new packaging, bagging and palletising machines.',
    boothInfo: 'Halle 5/F22 · Halle 12/D07 · Halle 12/B10 · Halle 13/C59',
    teamNote: 'MadejPak on the stands of its technology partners.',
    highlights: [
      'Tecno Pack / GSP — flow-pack, VFFS, robotic palletising, autonomous ATL truck (Halle 5 / F22)',
      'EsseGi — vertical bagging machines of the EVO/Syncro and F series, Siemens MTP1000 panel (Halle 12 / D07)',
      'Concetti — IMF āles pet food bagging, Big Bag, C-LAB, CHECK service (Halle 12 / B10)',
      'Vimco — secondary packaging machines, box erecting, wrap-around, top-load (Halle 13 / C59)',
    ],
  },
  'maintenance-symas-2026': {
    name: 'SYMAS® & MAINTENANCE 2026',
    dateLabel: '14–15 October 2026',
    city: 'Kraków',
    venue: 'EXPO Kraków',
    country: 'Poland',
    zajawka:
      'Thank you for visiting stand B33! At the fair in Kraków we showed the Essegi F1000 vertical packaging machine live — watch a short video recap.',
    opis:
      'The 17th International Fair of Bulk Material Processing, Storage and Handling (SYMAS) and the 17th International Fair of Maintenance, Production Planning and Optimisation (MAINTENANCE) took place on 14–15 October 2026 at EXPO Kraków. On stand B33 we showed the Essegi F1000 vertical packaging machine live and talked about automation, robotics and packaging line integration. Thank you for all the meetings and new contacts!',
    boothInfo: 'Stand B33',
    highlights: [
      'Essegi F1000 vertical packaging machine — live demo on both days of the fair',
      'Talks on automation and packaging line integration',
      'Consultations with the MadejPak engineering team',
    ],
    invitationUrl: '/en/zaproszenie-symas-2026',
  },
  'maintenance-symas-2025': {
    name: 'MAINTENANCE & SYMAS® 2025',
    dateLabel: '15–16 October 2025',
    city: 'Kraków',
    country: 'Poland',
    zajawka: 'MadejPak took part in the maintenance technology and industrial automation fair in Kraków.',
    opis:
      'MAINTENANCE & SYMAS® is an industry event bringing together suppliers and manufacturers in maintenance, diagnostics and industrial automation. MadejPak took part in the fair in Kraków in October 2025.',
  },
  'taropak-2025': {
    name: 'Taropak 2025',
    dateLabel: '24–26 September 2025',
    city: 'Poznań',
    venue: 'Poznań International Fair',
    country: 'Poland',
    zajawka:
      'MadejPak presented solutions for packaging lines — a horizontal machine with ultrasonic sealing and live palletising demos. Stand 51, Hall 6.',
    opis:
      'At Taropak 2025 MadejPak presented modern solutions for packaging lines: a horizontal machine with ultrasonic sealing and live palletising demos. The event was an opportunity for talks and consultations with our team of experts. The fair took place in the year of the company’s 25th anniversary.',
    boothInfo: 'Stand 51, Hall 6',
    highlights: ['Horizontal machine with ultrasonic sealing', 'Live palletising demos', 'Consultations with our team of experts'],
  },
  'ipack-ima-2025': {
    name: 'IPACK-IMA 2025',
    dateLabel: '27–30 May 2025',
    city: 'Milan',
    venue: 'Fiera Milano Rho',
    country: 'Italy',
    zajawka:
      'Packaging technology fair in Milan. MadejPak representatives were present on 28–29 May on the stands of our partners: Concetti, Essegi and Tecno Pack Group – GSP.',
    opis:
      'IPACK-IMA is one of Europe’s leading industry events covering packaging, processing and logistics technologies. MadejPak representatives attended the fair on 28–29 May 2025, visiting the stands of key technology partners — Concetti, Essegi and Tecno Pack Group – GSP.',
    teamNote: 'MadejPak representatives present on 28–29 May 2025',
  },
  'iba-2025': {
    name: 'IBA 2025',
    dateLabel: '18–22 May 2025',
    city: 'Düsseldorf',
    venue: 'Messe Düsseldorf',
    country: 'Germany',
    zajawka:
      'The leading trade fair for the bakery, confectionery and snack industries. MadejPak present at the stand of partner Tecno Pack S.p.A.',
    opis:
      'IBA is a key event for the bakery, confectionery and snack industries. MadejPak attended the fair at the stand of its technology partner Tecno Pack S.p.A. — a manufacturer of packaging machines for the food sector.',
  },
  'dni-otwarte-2024': {
    name: 'MadejPak Open Days 2024',
    dateLabel: '22 May 2024',
    city: 'Dziewin',
    country: 'Poland',
    zajawka:
      'MadejPak invited customers and partners to Open Days at the company headquarters in Dziewin — a presentation of solutions and talks with the team.',
    opis:
      'MadejPak Open Days 2024 took place on 22 May at the company headquarters in Dziewin. The event let customers and partners get to know the company’s offer, see machines and solutions, and talk directly with the MadejPak team.',
  },
  'dni-otwarte-2023': {
    name: 'MadejPak Open Days 2023',
    dateLabel: '15–16 November 2023',
    city: 'Dziewin',
    country: 'Poland',
    zajawka:
      'Two-day Open Days at MadejPak headquarters in Dziewin — a presentation of the offer and a chance to talk directly with the team.',
    opis:
      'MadejPak Open Days 2023 took place on 15 and 16 November at the company headquarters in Dziewin. The event was an opportunity to see the current range of packaging machines and solutions and to meet MadejPak experts.',
  },
  'warsaw-industry-automatica-2023': {
    name: 'Warsaw Industry Automatica 2023',
    dateLabel: '9–11 May 2023',
    city: 'Warsaw',
    country: 'Poland',
    zajawka:
      'On stand B3.01 (Hall B) MadejPak presented robotic palletising, an Essegi vertical machine and a General System Pack horizontal machine.',
    opis:
      'At Warsaw Industry Automatica 2023 MadejPak presented a demonstration robotic palletising line, an Essegi vertical packaging machine and a General System Pack horizontal packaging machine. Stand B3.01 in Hall B let visitors see the machines in operation and talk to the team.',
    boothInfo: 'Stand B3.01, Hall B',
    highlights: ['Demonstration robotic palletising', 'Essegi vertical packaging machine', 'General System Pack horizontal packaging machine'],
  },
  'warsaw-pack-2023': {
    name: 'Warsaw Pack 2023',
    dateLabel: '18–20 April 2023',
    city: 'Warsaw',
    country: 'Poland',
    zajawka: 'MadejPak at the Warsaw Pack fair. Stand B3.01, Hall B.',
    opis: 'MadejPak took part in Warsaw Pack 2023 in Warsaw. Stand B3.01 in Hall B.',
    boothInfo: 'Stand B3.01, Hall B',
  },
  'foodtech-expo-2022': {
    name: 'FoodTech Expo 2022',
    dateLabel: '1 December 2022',
    city: 'Poland',
    country: 'Poland',
    zajawka:
      'MadejPak at FoodTech Expo — packaging machines and palletising systems presented together with our partners: General System Pack, Essegi and Concetti.',
    opis:
      'At FoodTech Expo 2022 MadejPak presented packaging machines and palletising systems together with its technology partners. The range included General System Pack horizontal packaging machines, Essegi vertical machines and Concetti packaging lines.',
  },
  'taropak-2021': {
    name: 'TaroPak 2021',
    dateLabel: '6 December 2021',
    city: 'Poznań',
    venue: 'Poznań International Fair',
    country: 'Poland',
    zajawka: 'MadejPak at Taropak 2021. Stand no. 76, Pavilion 6.',
    opis: 'MadejPak took part in Taropak 2021 at the Poznań International Fair. Stand no. 76 in Pavilion 6.',
    boothInfo: 'Stand 76, Pavilion 6',
  },
  'bakepol-2019': {
    name: 'Bakepol 2019',
    dateLabel: '12–14 September 2019',
    city: 'Kraków',
    country: 'Poland',
    zajawka: 'MadejPak at the Bakepol fair in Kraków — an event for the bakery and confectionery industry.',
    opis: 'MadejPak took part in Bakepol 2019 in Kraków — an industry event for the bakery and confectionery sector.',
  },
};

// Lista wydarzeń dla stron /en. Linki do zaproszeń PL nie przechodzą do EN —
// tylko te z EVENT_TEXT_EN (strony, które mają wersję angielską).
export const EVENTS_EN: TradeEvent[] = EVENTS.map((e) => {
  const t = EVENT_TEXT_EN[e.id];
  return t ? { ...e, ...t, invitationUrl: t.invitationUrl } : { ...e, invitationUrl: undefined };
});
