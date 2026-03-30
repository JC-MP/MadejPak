export interface NavSubItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavSubItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Rozwiązania',
    href: '/rozwiazania',
    children: [
      { label: 'Integracja linii pakujących', href: '/rozwiazania/integracja-linii-pakujacych' },
      { label: 'Automatyzacja pakowania',     href: '/rozwiazania/automatyzacja-pakowania' },
      { label: 'Robotyzacja pakowania',       href: '/rozwiazania/robotyzacja-pakowania' },
      { label: 'Projekty custom',             href: '/rozwiazania/projekty-custom' },
    ],
  },
  {
    label: 'Maszyny',
    href: '/maszyny',
    children: [
      { label: 'Maszyny MadejPak',      href: '/maszyny/madejpak' },
      { label: 'Maszyny partnerów',     href: '/maszyny/partnerzy' },
      { label: 'Gotowe linie pakujące', href: '/maszyny/gotowe-linie-pakujace' },
    ],
  },
  {
    label: 'Serwis',
    href: '/serwis',
    children: [
      { label: 'Serwis maszyn',          href: '/serwis#zakres' },
      { label: 'Modernizacje linii',     href: '/serwis#modernizacje' },
      { label: 'Wsparcie techniczne',    href: '/serwis#wsparcie-techniczne' },
      { label: 'Obsługa pogwarancyjna',  href: '/serwis#formularz' },
    ],
  },
  { label: 'Realizacje', href: '/realizacje' },
  {
    label: 'Branże',
    href: '/branze',
  },
  { label: 'Partnerzy', href: '/partnerzy' },
  { label: 'O firmie', href: '/o-firmie' },
  { label: 'Kontakt',  href: '/kontakt' },
];

export const EN_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/en' },
  {
    label: 'Solutions',
    href: '/en/rozwiazania',
    children: [
      { label: 'Packaging Line Integration', href: '/en/rozwiazania/integracja-linii-pakujacych' },
      { label: 'Packaging Automation',       href: '/en/rozwiazania/automatyzacja-pakowania' },
      { label: 'Packaging Robotics',         href: '/en/rozwiazania/robotyzacja-pakowania' },
      { label: 'Custom Projects',            href: '/en/rozwiazania/projekty-custom' },
    ],
  },
  {
    label: 'Machines',
    href: '/en/maszyny',
    children: [
      { label: 'MadejPak Machines',    href: '/en/maszyny/madejpak' },
      { label: 'Partner Machines',     href: '/en/maszyny/partnerzy' },
      { label: 'Ready Packaging Lines', href: '/en/maszyny/gotowe-linie-pakujace' },
    ],
  },
  {
    label: 'Service',
    href: '/en/serwis',
    children: [
      { label: 'Machine Service',       href: '/en/serwis#zakres' },
      { label: 'Line Upgrades',         href: '/en/serwis#modernizacje' },
      { label: 'Technical Support',     href: '/en/serwis#wsparcie-techniczne' },
      { label: 'Post-warranty Support', href: '/en/serwis#formularz' },
    ],
  },
  { label: 'Case Studies', href: '/en/realizacje' },
  { label: 'Industries',   href: '/en/branze' },
  { label: 'Partners',     href: '/en/partnerzy' },
  { label: 'About',        href: '/en/o-firmie' },
  { label: 'Contact',      href: '/en/kontakt' },
];
