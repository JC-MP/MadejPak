'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

// Note: metadata export is not compatible with 'use client' — move to a layout or server component if needed.
// Metadata is defined below as a named export for reference; in practice wrap this page in a server component.

const BG      = 'var(--bg)';
const BG_ALT  = 'var(--bg-alt)';
const BG_CARD = 'var(--bg-card)';
const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

// ─── Shared helpers ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
      {children}
    </Typography>
  );
}

// ─── MachineSelector icons ───────────────────────────────────────────────────

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

// ─── MachineSelector data (translated) ───────────────────────────────────────

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
    label: 'Bulk & granulated',
    examples: 'sugar, salt, flour, grains, coffee, granulates, cereals, seeds, bird feed, cat litter',
    machines: [
      { href: '/en/maszyny/wazenie-i-dozowanie',      label: 'Weighing & dosing',                 machineIcon: 'weighing',    reason: 'Precise portioning of bulk product before packaging — linear and multihead weighers.' },
      { href: '/en/maszyny/pionowe-maszyny-pakujace', label: 'Vertical packaging machines (VFFS)', machineIcon: 'vffs',        reason: 'Forming a bag from film and filling with bulk product — output up to several hundred packs per minute.' },
      { href: '/en/maszyny/workowanie',               label: 'Bagging',                            machineIcon: 'bagging',     reason: 'For weights from 1 to 50 kg — open-mouth and FFS bags for bulk and granulated products.' },
      { href: '/en/maszyny/paletyzacja',              label: 'Palletising',                        machineIcon: 'palletizing', reason: 'Automatic stacking of bags and packs on pallets — robotic or layer-by-layer.' },
    ],
  },
  {
    id: 'snacki',
    iconId: 'snacks',
    label: 'Snacks & confectionery',
    examples: 'popcorn, breadsticks, crisps, wafers, cakes, bars, chocolate, biscuits, supplements',
    machines: [
      { href: '/en/maszyny/wazenie-i-dozowanie',      label: 'Multihead weighers',                      machineIcon: 'weighing',    reason: 'Fast weighing of irregular pieces and mixes — throughput above 100 weighings/min.' },
      { href: '/en/maszyny/pionowe-maszyny-pakujace', label: 'Vertical packaging machines (VFFS)',       machineIcon: 'vffs',        reason: 'Packaging in film pouches — ideal for dry snacks and granulated products.' },
      { href: '/en/maszyny/poziome-maszyny-pakujace', label: 'Horizontal packaging machines (flow-pack)', machineIcon: 'flowpack',    reason: 'Packaging bars, wafers and cakes in flow-pack — up to 300 packs per minute.' },
      { href: '/en/maszyny/paletyzacja',              label: 'Palletising',                              machineIcon: 'palletizing', reason: 'Gentle palletising of lightweight cartons and snack packs.' },
    ],
  },
  {
    id: 'piekarnicze',
    iconId: 'bread',
    label: 'Bread & bakery products',
    examples: 'bread, rolls, baguettes, packaged bread, tortillas, muffins',
    machines: [
      { href: '/en/maszyny/poziome-maszyny-pakujace', label: 'Horizontal packaging machines (flow-pack)', machineIcon: 'flowpack',    reason: 'Packaging bread in film with optional modified atmosphere (MAP) for longer freshness.' },
      { href: '/en/maszyny/transport-i-koniec-linii', label: 'Conveyors & end-of-line',                  machineIcon: 'conveyor',    reason: 'Conveyors adapted for delicate products — soft surfaces, appropriate speeds.' },
      { href: '/en/maszyny/paletyzacja',              label: 'Palletising',                              machineIcon: 'palletizing', reason: 'Robotic palletising of cartons and collective packs of bread.' },
      { href: '/en/maszyny/owijarki-do-palet',        label: 'Pallet wrappers',                         machineIcon: 'wrapping',    reason: 'Securing finished bread pallets before transport.' },
    ],
  },
  {
    id: 'swiezeimrozone',
    iconId: 'fresh',
    label: 'Vegetables, fruit & frozen',
    examples: 'fresh and frozen vegetables, fruit, raspberries, tomatoes, lettuce, mushrooms, frozen ready meals',
    machines: [
      { href: '/en/maszyny/wazenie-i-dozowanie',      label: 'Multihead weighers',                machineIcon: 'weighing',    reason: 'Fast and accurate dosing of irregular products — throughput above 100 weighings/min.' },
      { href: '/en/maszyny/pionowe-maszyny-pakujace', label: 'Vertical packaging machines (VFFS)', machineIcon: 'vffs',        reason: 'Packaging in film bags or pouches — for fresh, frozen and MAP products.' },
      { href: '/en/maszyny/paletyzacja',              label: 'Palletising',                        machineIcon: 'palletizing', reason: 'Robotic palletising systems for packs of variable weight and shape.' },
      { href: '/en/maszyny/transport-i-koniec-linii', label: 'Conveyors & end-of-line',            machineIcon: 'conveyor',    reason: 'Conveyors and sorters linking weighing, packaging and dispatch into one flow.' },
    ],
  },
  {
    id: 'miesonabialy',
    iconId: 'meat',
    label: 'Meat, dairy & chilled',
    examples: 'fresh and processed meat, cold cuts, fish, cheese, ice cream, butter, packaged eggs',
    machines: [
      { href: '/en/maszyny/poziome-maszyny-pakujace', label: 'Horizontal packaging machines (flow-pack)', machineIcon: 'flowpack',    reason: 'MAP or vacuum packaging — maintaining freshness while keeping line throughput.' },
      { href: '/en/maszyny/wazenie-i-dozowanie',      label: 'Weighing & dosing',                        machineIcon: 'weighing',    reason: 'Scales for wet and irregular products, in stainless steel for food-grade use.' },
      { href: '/en/maszyny/robotyzacja-pakowania',    label: 'Packaging robotics',                       machineIcon: 'robotics',    reason: 'Pick-and-place robots for refrigerated environments — high throughput with minimal staffing.' },
      { href: '/en/maszyny/paletyzacja',              label: 'Palletising',                              machineIcon: 'palletizing', reason: 'Palletisers for trays, cartons and collective packs in sanitary conditions.' },
    ],
  },
  {
    id: 'chemia',
    iconId: 'chemical',
    label: 'Fertilisers, chemicals & construction',
    examples: 'fertilisers, detergents, calcium chloride, mortar, cement, adhesives, cleaning agents',
    machines: [
      { href: '/en/maszyny/pionowe-maszyny-pakujace', label: 'Vertical packaging machines (VFFS)', machineIcon: 'vffs',        reason: 'Packaging fertilisers and chemical powders in pouches — construction resistant to aggressive media.' },
      { href: '/en/maszyny/workowanie',               label: 'Bagging',                            machineIcon: 'bagging',     reason: 'Open-mouth and FFS baggers for aggressive products — dust and corrosion resistant construction.' },
      { href: '/en/maszyny/paletyzacja',              label: 'Palletising',                        machineIcon: 'palletizing', reason: 'Robust palletisers for heavy 25–50 kg bags — robots and layer heads.' },
      { href: '/en/maszyny/owijarki-do-palet',        label: 'Pallet wrappers',                   machineIcon: 'wrapping',    reason: 'Stretch wrapping to secure pallets of chemical products for transport.' },
    ],
  },
  {
    id: 'kruszywa',
    iconId: 'aggregate',
    label: 'Aggregates & solid fuels',
    examples: 'wood pellets, coal, eco-pea coal, expanded clay, sand, decorative stones, sawdust, gravel',
    machines: [
      { href: '/en/maszyny/pionowe-maszyny-pakujace', label: 'Vertical packaging machines (VFFS)', machineIcon: 'vffs',        reason: 'Vertical machines for pellets, coal and aggregates in film bags — reinforced construction.' },
      { href: '/en/maszyny/workowanie',               label: 'BigBag & open-mouth bagging',        machineIcon: 'bagging',     reason: 'BigBag stations and baggers for coarse aggregates and high-granulation materials.' },
      { href: '/en/maszyny/wazenie-i-dozowanie',      label: 'Weighing & dosing',                  machineIcon: 'weighing',    reason: 'Hopper scales and weighing conveyors adapted for heavy and abrasive materials.' },
      { href: '/en/maszyny/paletyzacja',              label: 'Palletising',                        machineIcon: 'palletizing', reason: 'Layer or robotic palletisers for 10–50 kg aggregate bags.' },
    ],
  },
  {
    id: 'fmcg',
    iconId: 'fmcg',
    label: 'FMCG & industrial articles',
    examples: 'candle inserts, modelling clay, electrical fittings, welding wire, cloths, decorative articles',
    machines: [
      { href: '/en/maszyny/poziome-maszyny-pakujace', label: 'Horizontal packaging machines (flow-pack)', machineIcon: 'flowpack',    reason: 'Flow-pack for candle inserts, plastic articles and finished goods — euro-hook, print.' },
      { href: '/en/maszyny/robotyzacja-pakowania',    label: 'Packaging robotics',                       machineIcon: 'robotics',    reason: 'Manipulators and robots for non-standard shaped products — spools, cloths, fittings.' },
      { href: '/en/maszyny/transport-i-koniec-linii', label: 'Conveyors & end-of-line',                  machineIcon: 'conveyor',    reason: 'Belt and roller conveyors linking packaging with dispatch.' },
      { href: '/en/maszyny/paletyzacja',              label: 'Palletising',                              machineIcon: 'palletizing', reason: 'Palletising collective cartons of FMCG articles.' },
    ],
  },
  {
    id: 'plyny',
    iconId: 'liquid',
    label: 'Liquids & pastes',
    examples: 'oils, sauces, pastes, cosmetics, cleaning agents, paints, gels',
    machines: [
      { href: '/en/maszyny/poziome-maszyny-pakujace', label: 'Horizontal packaging machines', machineIcon: 'flowpack',    reason: 'Packaging sachets and pillow packs with liquids — adapted for sticky and wet products.' },
      { href: '/en/maszyny/robotyzacja-pakowania',    label: 'Packaging robotics',           machineIcon: 'robotics',    reason: 'Robots for loading products into cartons, handling bottling lines and trays.' },
      { href: '/en/maszyny/transport-i-koniec-linii', label: 'Conveyors & end-of-line',      machineIcon: 'conveyor',    reason: 'Stainless steel conveyors adapted for wet environments.' },
      { href: '/en/maszyny/paletyzacja',              label: 'Palletising',                  machineIcon: 'palletizing', reason: 'Palletising cartons and bottles with appropriate grippers and guidance systems.' },
    ],
  },
  {
    id: 'custom',
    iconId: 'custom',
    label: 'Non-standard product',
    examples: 'difficult product, special shape, aggressive medium, no catalogue machine available, industrial environment',
    machines: [
      { href: '/en/maszyny/madejpak',              label: 'MadejPak machines',       machineIcon: 'madejpak',    reason: 'Own machines designed from scratch for difficult applications with no ready-made market solution.' },
      { href: '/en/rozwiazania/projekty-custom',   label: 'Custom projects',         machineIcon: 'custom_proj', reason: 'We design and build non-standard workstations and lines for special products.' },
      { href: '/en/maszyny/robotyzacja-pakowania', label: 'Packaging robotics',      machineIcon: 'robotics',    reason: 'Robots with dedicated grippers for products with non-standard shapes and weights.' },
      { href: '/en/kontakt',                       label: 'Consult with us',         machineIcon: 'contact',     reason: 'Describe your product — we will analyse the process and propose the optimal solution.' },
    ],
  },
];

const FORMAT_PATHS = [
  { label: 'Film bag (VFFS)',            sub: 'bulk, granulates, frozen',                    href: '/en/maszyny/pionowe-maszyny-pakujace' },
  { label: 'Flow-pack / horizontal',     sub: 'bars, bread, finished articles',              href: '/en/maszyny/poziome-maszyny-pakujace' },
  { label: 'Open-mouth bag / Big Bag',   sub: '1–50 kg, aggregates, chemicals, feed',        href: '/en/maszyny/workowanie' },
  { label: 'Pallet',                     sub: 'layer or robotic palletising',                href: '/en/maszyny/paletyzacja' },
  { label: 'Stretch film on pallet',     sub: 'securing for transport',                      href: '/en/maszyny/owijarki-do-palet' },
  { label: 'Robotic packaging',          sub: 'pick-and-place, case packing, handling',      href: '/en/maszyny/robotyzacja-pakowania' },
  { label: 'Ready-made packaging line',  sub: 'configured machine sets',                     href: '/en/maszyny/gotowe-linie-pakujace' },
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
          <span>Learn more</span>
          <Box className="arrow"><ArrowRight /></Box>
        </Box>
      </Box>
    </Box>
  );
}

// ─── Inline MachineSelector (EN) ─────────────────────────────────────────────

function MachineSelectorEN() {
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
          Select machines
        </Typography>

        <Typography component="h2"
          sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: 2 }}>
          What do you want to package?
        </Typography>
        <Typography sx={{ fontSize: '0.95rem', color: TEXT_DIM, lineHeight: 1.7, mb: { xs: 5, md: 6 }, maxWidth: 560 }}>
          Select a product type — we will show you which machines are right for you.
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
                  {pt.machines.length} machines →
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
                Recommended machines for: <Box component="span" sx={{ color: ACCENT }}>{active.label}</Box>
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
                  Not sure which solution fits?
                </Typography>
                <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.6 }}>
                  Describe your product and process — we will select the machines and prepare a quote.
                </Typography>
              </Box>
              <Button component={Link} href="/en/kontakt" variant="contained" disableElevation
                sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, textTransform: 'none', px: 3.5, py: 1.5, borderRadius: '6px', fontSize: '0.9rem', whiteSpace: 'nowrap', flexShrink: 0, '&:hover': { bgcolor: '#d4560a' } }}>
                Contact us
              </Button>
            </Box>
          </Box>
        )}

        {/* Format-based path — visible when nothing selected */}
        {!active && (
          <Box sx={{ borderTop: `1px solid ${BORDER}`, pt: { xs: 5, md: 6 } }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
              Or browse by packaging format
            </Typography>
            <Typography sx={{ fontSize: '0.88rem', color: TEXT_DIM, mb: 3.5 }}>
              Do you know the packaging format but not which machine handles it? Browse directly.
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
                Prefer to talk to an advisor? We will select machines based on your product, throughput and packaging format.
              </Typography>
              <Button component={Link} href="/en/kontakt" variant="outlined" disableElevation
                sx={{ borderColor: BORDER, color: 'var(--text)', fontWeight: 600, textTransform: 'none', px: 3, py: 1.25, borderRadius: '6px', fontSize: '0.875rem', whiteSpace: 'nowrap', flexShrink: 0, '&:hover': { borderColor: ACCENT, color: ACCENT } }}>
                Write to us
              </Button>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MaszynyPageEN() {
  return (
    <Box sx={{ bgcolor: BG, minHeight: '100vh', color: 'var(--text)' }}>
      <Box sx={{ height: { xs: 60, md: 72 } }} />

      {/* Hero */}
      <Box sx={{ position: 'relative', overflow: 'hidden', bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Box aria-hidden="true" sx={{
          display: { xs: 'none', md: 'block' },
          position: 'absolute', top: 0, right: 0,
          width: '46%', height: '100%', zIndex: 0, pointerEvents: 'none',
        }}>
          <Box sx={{
            position: 'absolute', inset: 0, zIndex: 1,
            background: [
              `linear-gradient(to right, var(--bg-alt) 0%, color-mix(in srgb, var(--bg-alt) 75%, transparent) 18%, color-mix(in srgb, var(--bg-alt) 25%, transparent) 45%, transparent 100%)`,
              `linear-gradient(to bottom, color-mix(in srgb, var(--bg-alt) 55%, transparent) 0%, transparent 20%, transparent 80%, color-mix(in srgb, var(--bg-alt) 55%, transparent) 100%)`,
            ].join(', '),
          }} />
          <Image src="/images/other/maszyny-zdjecieogolnedopodstrony.jpg" alt="" fill sizes="(max-width: 768px) 0vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.5 }} />
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 14 } }}>
          <SectionLabel>Machines</SectionLabel>
          <Typography component="h1"
            sx={{ fontSize: { xs: '2rem', md: '3.2rem' }, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, mb: 3, maxWidth: 760 }}>
            Packaging machines matched to your process
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, color: TEXT_DIM, lineHeight: 1.8, maxWidth: 600, mb: 5 }}>
            We offer a full spectrum of packaging machines — our own production and from trusted partners.
            We select, integrate and commission systems for the food, chemical, construction and other industries.
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <Button component={Link} href="/en/kontakt" variant="contained" disableElevation
              sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, textTransform: 'none', px: 3.5, py: 1.5, borderRadius: '6px', fontSize: '0.95rem', '&:hover': { bgcolor: '#d4560a' } }}>
              Ask about a machine
            </Button>
            <Button component={Link} href="/en/rozwiazania" variant="outlined" disableElevation
              sx={{ borderColor: BORDER, color: 'var(--text)', fontWeight: 600, textTransform: 'none', px: 3.5, py: 1.5, borderRadius: '6px', fontSize: '0.95rem', '&:hover': { borderColor: ACCENT, color: ACCENT } }}>
              View solutions
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Interactive machine selector */}
      <MachineSelectorEN />

      {/* CTA bar */}
      <Box sx={{ bgcolor: BG_ALT, borderTop: `1px solid ${BORDER}`, py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between', gap: 4 }}>
            <Box>
              <Typography component="h2"
                sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: 1.5 }}>
                Looking for a ready-made packaging line?
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: TEXT_DIM, lineHeight: 1.7, maxWidth: 520 }}>
                We offer complete, pre-configured lines ready for deployment — browse them or get in touch with us.
              </Typography>
            </Box>
            <Button component={Link} href="/en/maszyny/gotowe-linie-pakujace" variant="contained" disableElevation
              sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, textTransform: 'none', px: 4, py: 1.75, borderRadius: '6px', fontSize: '0.95rem', whiteSpace: 'nowrap', flexShrink: 0, '&:hover': { bgcolor: '#d4560a' } }}>
              Ready-made packaging lines
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
