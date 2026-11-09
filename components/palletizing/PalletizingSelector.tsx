'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InquiryForm, { type SummaryLine } from '@/components/forms/InquiryForm';
import {
  COBOT_MAX_MASS_INDEX, CONDITION_IDS, CONDITION_REFERENCES, PRODUCT_IDS, PRODUCTS, PRODUCT_LINE_IMAGES, SELECT_EVENT, STAGE_IDS, VARIANT_MEDIA,
  type ConditionId, type PalLang, type ProductId, type RefCard, type StageId, type VariantId,
} from '@/data/palletizingSpec';
import type { PalCopy } from '@/data/palletizingData';

const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
const BG_CARD  = 'var(--bg-card)';
const TEXT_DIM = 'var(--dim-72)';
const RENDER_BG = '#111113';

const STAGE_HREF: Record<StageId, string | null> = {
  odbior: '/maszyny/madejpak/podajniki-tasmowe',
  pakowanie: null,
  paletyzacja: '/maszyny/madejpak/chwytaki-i-manipulatory',
  zabezpieczenie: '/maszyny/owijarki-do-palet',
};

function trackProduct(id: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).gtag?.('event', 'select_content', { content_type: 'paletyzacja_dobor', item_id: id });
}

function ProductIcon({ id }: { id: ProductId }) {
  const paths: Record<ProductId, React.ReactNode> = {
    'worki-ciezkie': <><path d="M7 5h10l2 4v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9l2-4z" /><path d="M5 9h14" /><path d="M9 14h6" /></>,
    'worki-sypkie': <><path d="M8 4h8l1 3c2 2 2 5 1 8l-1 5H7l-1-5c-1-3-1-6 1-8l1-3z" /><path d="M10 11h4" /></>,
    kartony: <><path d="M3 8l9-4 9 4v9l-9 4-9-4V8z" /><path d="M3 8l9 4 9-4" /><path d="M12 12v9" /></>,
    nietypowe: <><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="2.5" /><path d="M12 5v2M12 17v2M5 12h2M17 12h2" /></>,
  };
  return (
    <Box component="svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" sx={{ width: 30, height: 30, flexShrink: 0 }}>
      {paths[id]}
    </Box>
  );
}

function Chip({ active, onClick, disabled, checkbox, big, children }: { active: boolean; onClick?: () => void; disabled?: boolean; checkbox?: boolean; big?: boolean; children: React.ReactNode }) {
  return (
    <Box
      component="button"
      type="button"
      aria-pressed={active}
      disabled={disabled}
      onClick={onClick}
      sx={{
        display: 'inline-flex', alignItems: 'center', gap: 1, textAlign: 'left',
        px: big ? 1.75 : 1.5, py: 0.8, minHeight: big ? 46 : 36, borderRadius: '3px', cursor: disabled ? 'default' : 'pointer',
        border: `1px solid ${active ? ACCENT : BORDER}`,
        bgcolor: active ? `color-mix(in srgb, ${ACCENT} 12%, var(--bg-card))` : BG_CARD,
        color: active ? 'var(--text)' : TEXT_DIM, fontSize: big ? '0.98rem' : '0.92rem', fontWeight: active ? 700 : 500, fontFamily: 'inherit',
        transition: 'border-color 0.15s ease, background-color 0.15s ease',
        '&:hover': disabled ? {} : { borderColor: ACCENT },
        '&:focus-visible': { outline: `2px solid ${ACCENT}`, outlineOffset: 2 },
      }}
    >
      {checkbox && (
        <Box component="span" aria-hidden="true" sx={{
          width: 18, height: 18, flexShrink: 0, borderRadius: '3px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          border: `1.5px solid ${active ? (disabled ? 'var(--dim-45)' : ACCENT) : 'var(--dim-28)'}`,
          bgcolor: active ? (disabled ? 'var(--dim-45)' : ACCENT) : 'var(--bg)',
        }}>
          {active && (
            <Box component="svg" viewBox="0 0 12 12" sx={{ width: 12, height: 12 }}>
              <path d="M2.5 6.2l2.4 2.3 4.6-5" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </Box>
          )}
        </Box>
      )}
      {children}
    </Box>
  );
}

function StepLabel({ children }: { children: React.ReactNode }) {
  return <Typography component="h3" sx={{ fontSize: { xs: '1.05rem', md: '1.15rem' }, fontWeight: 800, lineHeight: 1.35, color: 'var(--dim-85)', mb: 1.5 }}>{children}</Typography>;
}

function GroupLabel({ label, hint }: { label: string; hint?: string }) {
  return (
    <Box sx={{ mb: 0.9 }}>
      <Typography sx={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--dim-85)' }}>{label}</Typography>
      {hint && <Typography sx={{ fontSize: '0.86rem', lineHeight: 1.5, color: 'var(--dim-72)', mt: 0.25 }}>{hint}</Typography>}
    </Box>
  );
}

function OptionGroup({ label, hint, options, value, onChange }: { label: string; hint?: string; options: { id: string; label: string }[]; value: string | null; onChange: (v: string | null) => void }) {
  return (
    <Box>
      <GroupLabel label={label} hint={hint} />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
        {options.map((o) => (
          <Chip key={o.id} active={value === o.id} onClick={() => onChange(value === o.id ? null : o.id)}>{o.label}</Chip>
        ))}
      </Box>
    </Box>
  );
}

export default function PalletizingSelector({ lang, copy, refs }: { lang: PalLang; copy: PalCopy; refs: Record<string, RefCard> }) {
  const t = copy.selector;
  const prefix = lang === 'en' ? '/en' : '';
  const [product, setProduct] = useState<ProductId | null>(null);
  const [stages, setStages] = useState<Set<StageId>>(new Set(STAGE_IDS));
  const [mass, setMass] = useState<string | null>(null);
  const [throughput, setThroughput] = useState<string | null>(null);
  const [pallet, setPallet] = useState<string | null>(null);
  const [lines, setLines] = useState<string | null>(null);
  const [conditions, setConditions] = useState<Set<ConditionId>>(new Set());
  const [custom, setCustom] = useState('');
  const [variant, setVariant] = useState<VariantId | null>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  function choose(p: ProductId) {
    setProduct(p);
    trackProduct(p);
  }

  // Wejście z reklamy (?produkt=...) albo z kart pakietów niżej na stronie.
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('produkt');
    if (fromUrl && (PRODUCT_IDS as string[]).includes(fromUrl)) setProduct(fromUrl as ProductId);
    const onSelect = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      if (!(PRODUCT_IDS as string[]).includes(id)) return;
      setProduct(id as ProductId);
      trackProduct(id);
    };
    window.addEventListener(SELECT_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_EVENT, onSelect);
  }, []);

  const massIndex = mass ? copy.massOptions.findIndex((o) => o.id === mass) : -1;
  const variants = useMemo<VariantId[]>(() => {
    if (!product) return [];
    return PRODUCTS[product].variants.filter((v) => v !== 'cobot' || massIndex <= COBOT_MAX_MASS_INDEX);
  }, [product, massIndex]);

  useEffect(() => {
    if (variant && !variants.includes(variant)) setVariant(null);
  }, [variant, variants]);

  function toggleStage(s: StageId) {
    if (s === 'paletyzacja') return;
    const turningOn = !stages.has(s);
    setStages((prev) => {
      const next = new Set(prev);
      if (next.has(s)) next.delete(s); else next.add(s);
      return next;
    });
    // Wariant „z owijarką” i etap zabezpieczenia palety muszą się zgadzać w zapytaniu.
    if (s === 'zabezpieczenie') {
      if (!turningOn && variant === 'owijarka') setVariant('paletyzacja');
      if (turningOn && variant === 'paletyzacja') setVariant('owijarka');
    }
  }

  function toggleCondition(c: ConditionId) {
    setConditions((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c); else next.add(c);
      return next;
    });
  }

  function reset() {
    setProduct(null); setStages(new Set(STAGE_IDS)); setMass(null); setThroughput(null);
    setPallet(null); setLines(null); setConditions(new Set()); setCustom(''); setVariant(null);
  }

  function pickVariant(v: VariantId) {
    setVariant(v);
    if (v !== 'cobot') {
      setStages((prev) => {
        const next = new Set(prev);
        if (v === 'owijarka') next.add('zabezpieczenie'); else next.delete('zabezpieczenie');
        return next;
      });
    }
    requestAnimationFrame(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }

  const isCustom = product === 'nietypowe';
  const pulseKey = [product, [...stages].join(','), mass, throughput, pallet, lines, [...conditions].join(','), custom.trim() ? 'c' : ''].join('|');
  const palletisingKey: VariantId | 'custom' = isCustom ? 'custom' : variant ?? (variants.includes('paletyzacja') ? 'paletyzacja' : variants[0] ?? 'paletyzacja');

  const references = useMemo(() => {
    if (!product) return [];
    const slugs = [...PRODUCTS[product].references, ...[...conditions].flatMap((c) => CONDITION_REFERENCES[c])];
    return [...new Set(slugs)].map((s) => refs[s]).filter(Boolean);
  }, [product, conditions, refs]);

  const summary: SummaryLine[] = [];
  if (product) {
    summary.push({ label: copy.form.summaryProduct, value: copy.products[product].name });
    if (isCustom && custom.trim()) summary.push({ label: copy.form.summaryCustom, value: custom.trim() });
    summary.push({ label: copy.form.summaryStages, value: STAGE_IDS.filter((s) => stages.has(s)).map((s) => t.stageLabels[s]).join(', ') });
    if (variant) summary.push({ label: copy.form.summaryVariant, value: copy.variants[variant].name });
    const opt = (list: { id: string; label: string }[], id: string | null) => list.find((o) => o.id === id)?.label;
    const extra: [string, string | undefined][] = [
      [t.massLabel, opt(copy.massOptions, mass)],
      [t.throughputLabel, opt(copy.throughputOptions, throughput)],
      [t.palletLabel, opt(copy.palletOptions, pallet)],
      [t.linesLabel, opt(copy.linesOptions, lines)],
      [t.conditionsLabel, conditions.size ? CONDITION_IDS.filter((c) => conditions.has(c)).map((c) => copy.conditions[c]).join(', ') : undefined],
    ];
    extra.forEach(([label, value]) => { if (value) summary.push({ label, value }); });
  }

  const subject = product
    ? `${copy.form.subject}: ${copy.products[product].name}${variant ? ` / ${copy.variants[variant].name}` : ''}`
    : copy.form.subject;

  return (
    <Box id="dobor" component="section" sx={{ scrollMarginTop: '80px', py: { xs: 7, md: 10 }, bgcolor: 'var(--bg-alt)', borderBottom: `1px solid ${BORDER}` }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 4, md: 5 }, maxWidth: 720 }}>
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 1.5 }}>{t.eyebrow}</Typography>
          <Typography component="h2" sx={{ fontSize: { xs: '1.45rem', md: '2rem' }, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, color: 'var(--text)', mb: 1.5 }}>{t.title}</Typography>
          <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.7, color: TEXT_DIM }}>{t.lead}</Typography>
        </Box>

        <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '6px', p: { xs: 2, sm: 3, md: 4 }, display: 'flex', flexDirection: 'column', gap: { xs: 3.5, md: 4.5 } }}>
          {/* Krok 1 */}
          <Box>
            <StepLabel>{t.step1}</StepLabel>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 1.25 }}>
              {PRODUCT_IDS.map((id) => {
                const active = product === id;
                return (
                  <Box
                    key={id}
                    component="button"
                    type="button"
                    aria-pressed={active}
                    onClick={() => choose(id)}
                    sx={{
                      position: 'relative', display: 'flex', alignItems: 'flex-start', gap: 1.5, textAlign: 'left', p: 2, pr: 4.5, borderRadius: '4px', cursor: 'pointer', fontFamily: 'inherit',
                      border: `1px solid ${active ? ACCENT : BORDER}`, borderTop: `3px solid ${active ? ACCENT : 'var(--surface-08)'}`,
                      bgcolor: active ? `color-mix(in srgb, ${ACCENT} 8%, var(--bg-card))` : 'var(--bg)',
                      color: active ? ACCENT : 'var(--dim-55)', transition: 'border-color 0.15s ease, background-color 0.15s ease',
                      '&:hover': { borderColor: ACCENT },
                      '&:focus-visible': { outline: `2px solid ${ACCENT}`, outlineOffset: 2 },
                    }}
                  >
                    <ProductIcon id={id} />
                    <Box>
                      <Typography sx={{ fontSize: '1.04rem', fontWeight: 800, color: 'var(--dim-85)', lineHeight: 1.3, mb: 0.4 }}>{copy.products[id].name}</Typography>
                      <Typography sx={{ fontSize: '0.88rem', color: TEXT_DIM, lineHeight: 1.45 }}>{copy.products[id].examples}</Typography>
                    </Box>
                    {active && (
                      <Box component="span" aria-hidden="true" sx={{ position: 'absolute', top: 10, right: 10, width: 26, height: 26, borderRadius: '50%', bgcolor: ACCENT, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 800 }}>✓</Box>
                    )}
                  </Box>
                );
              })}
            </Box>
            {isCustom && (
              <TextField
                fullWidth
                label={t.customLabel}
                placeholder={t.customPlaceholder}
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                sx={{ mt: 2, maxWidth: 520, '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: ACCENT }, '& .MuiInputLabel-root.Mui-focused': { color: ACCENT } }}
              />
            )}
          </Box>

          {product && (
            <>
              {/* Krok 2 */}
              <Box>
                <StepLabel>{t.step2}</StepLabel>
                <Typography sx={{ fontSize: '0.92rem', color: TEXT_DIM, mt: -0.75, mb: 1.5 }}>{t.step2Hint}</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 0.75 }}>
                  {STAGE_IDS.map((s, i) => (
                    <React.Fragment key={s}>
                      {i > 0 && <Box component="span" aria-hidden="true" sx={{ display: { xs: 'none', sm: 'inline' }, color: 'var(--dim-28)', px: 0.25 }}>→</Box>}
                      <Chip checkbox big active={stages.has(s)} disabled={s === 'paletyzacja'} onClick={() => toggleStage(s)}>
                        {t.stageLabels[s]}{s === 'paletyzacja' ? ` (${t.required})` : ''}
                      </Chip>
                    </React.Fragment>
                  ))}
                </Box>
              </Box>

              {/* Krok 3 */}
              <Box>
                <StepLabel>{t.step3}</StepLabel>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 2.25, md: 3 } }}>
                  <OptionGroup label={t.massLabel} hint={t.massHint} options={copy.massOptions} value={mass} onChange={setMass} />
                  <OptionGroup label={t.throughputLabel} hint={t.throughputHint} options={copy.throughputOptions} value={throughput} onChange={setThroughput} />
                  <OptionGroup label={t.palletLabel} options={copy.palletOptions} value={pallet} onChange={setPallet} />
                  <OptionGroup label={t.linesLabel} options={copy.linesOptions} value={lines} onChange={setLines} />
                  <Box>
                    <GroupLabel label={t.conditionsLabel} hint={t.conditionsHint} />
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                      {CONDITION_IDS.map((c) => (
                        <Chip key={c} checkbox active={conditions.has(c)} onClick={() => toggleCondition(c)}>{copy.conditions[c]}</Chip>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </>
          )}
        </Box>

        {product && (
          // Przypięty do dołu ekranu, dopóki wynik jest niżej; potem zostaje nad wynikiem.
          <Box sx={{ position: 'sticky', bottom: { xs: 14, md: 22 }, zIndex: 5, display: 'flex', justifyContent: 'center', mt: 2.5, pointerEvents: 'none' }}>
            <Box
              key={pulseKey}
              component="button"
              type="button"
              onClick={() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              sx={{
                pointerEvents: 'auto', display: 'inline-flex', alignItems: 'center', gap: 1, px: 2.75, minHeight: 48, borderRadius: '999px',
                border: 'none', cursor: 'pointer', fontFamily: 'inherit', bgcolor: ACCENT, color: '#fff', fontSize: { xs: '0.88rem', md: '0.95rem' }, fontWeight: 800,
                boxShadow: '0 12px 30px -10px rgba(0,0,0,0.5)', transition: 'background-color 0.15s ease',
                animation: 'mpProposalPulse 0.45s ease',
                '@keyframes mpProposalPulse': { '0%': { transform: 'scale(0.95)' }, '60%': { transform: 'scale(1.05)' }, '100%': { transform: 'scale(1)' } },
                '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
                '&:hover': { bgcolor: '#D45509' },
                '&:focus-visible': { outline: '2px solid #fff', outlineOffset: -4 },
              }}
            >
              {t.seeProposal}: {copy.products[product].name}
              <Box component="span" aria-hidden="true" sx={{ fontSize: '1.05rem' }}>↓</Box>
            </Box>
          </Box>
        )}

        {product && (
          <Box ref={resultRef} aria-live="polite" sx={{ mt: { xs: 3, md: 4 }, scrollMarginTop: '90px' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: 1.5, mb: 2.5 }}>
              <Typography component="h3" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.01em' }}>
                {t.resultTitle}: {copy.products[product].name}
              </Typography>
              <Box component="button" type="button" onClick={reset} sx={{ background: 'none', border: 'none', p: 0, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.8rem', color: 'var(--dim-55)', textDecoration: 'underline', '&:hover': { color: 'var(--dim-85)' } }}>
                {t.reset}
              </Box>
            </Box>
            <Typography sx={{ fontSize: '0.92rem', lineHeight: 1.7, color: TEXT_DIM, mb: 3, maxWidth: 820 }}>{copy.products[product].intro}</Typography>
            {PRODUCT_LINE_IMAGES[product] && copy.products[product].line && (
              <Box component="figure" sx={{ m: 0, mb: 4, maxWidth: 900 }}>
                <Box sx={{ position: 'relative', aspectRatio: `${PRODUCT_LINE_IMAGES[product]!.width} / ${PRODUCT_LINE_IMAGES[product]!.height}`, bgcolor: '#fff', border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
                  <Image src={PRODUCT_LINE_IMAGES[product]!.src} alt={copy.products[product].line!.alt} fill sizes="(max-width: 960px) 100vw, 900px" style={{ objectFit: 'contain' }} />
                </Box>
                <Typography component="figcaption" sx={{ fontSize: '0.8rem', color: 'var(--dim-55)', mt: 1 }}>{copy.products[product].line!.caption}</Typography>
              </Box>
            )}

            {/* Linia: co dostarczamy na każdym etapie */}
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dim-55)', mb: 1.25 }}>{t.deliveredTitle}</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 1.25, mb: 4 }}>
              {STAGE_IDS.map((s, i) => {
                const on = stages.has(s);
                const text = s === 'pakowanie' ? t.packingByProduct[product] : s === 'paletyzacja' ? t.palletisingByVariant[palletisingKey] : t.stageDelivered[s];
                const href = s === 'pakowanie' ? PRODUCTS[product].packingHref : STAGE_HREF[s];
                return (
                  <Box key={s} sx={{ p: 2, borderRadius: '4px', border: `1px solid ${on ? `color-mix(in srgb, ${ACCENT} 45%, transparent)` : BORDER}`, bgcolor: on ? BG_CARD : 'transparent', opacity: on ? 1 : 0.6 }}>
                    <Typography sx={{ fontSize: '0.66rem', fontWeight: 800, letterSpacing: '0.1em', color: on ? ACCENT : 'var(--dim-45)', mb: 0.5 }}>
                      {String(i + 1).padStart(2, '0')} · {t.stageLabels[s].toUpperCase()}
                    </Typography>
                    <Typography sx={{ fontSize: '0.86rem', fontWeight: on ? 700 : 500, color: on ? 'var(--dim-85)' : TEXT_DIM, lineHeight: 1.45 }}>
                      {on ? text : t.notIncluded}
                    </Typography>
                    {on && href && (
                      <Box component={Link} href={`${prefix}${href}`} sx={{ display: 'inline-block', mt: 0.75, fontSize: '0.76rem', fontWeight: 700, color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                        {lang === 'en' ? 'More' : 'Więcej'} →
                      </Box>
                    )}
                  </Box>
                );
              })}
            </Box>

            {/* Warianty */}
            {isCustom ? (
              <Box sx={{ p: { xs: 2.5, md: 3 }, mb: 4, borderLeft: `3px solid ${ACCENT}`, bgcolor: BG_CARD, borderRadius: '2px' }}>
                <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--dim-85)' }}>{t.customResult}</Typography>
              </Box>
            ) : (
              <>
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dim-55)', mb: 1.25 }}>{t.variantsTitle}</Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: `repeat(${variants.length}, 1fr)` }, gap: 2, mb: 4 }}>
                  {variants.map((v) => {
                    const active = variant === v;
                    const vc = copy.variants[v];
                    return (
                      <Box key={v} sx={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', p: { xs: 2.25, md: 2.75 }, bgcolor: BG_CARD, borderRadius: '4px', border: `1px solid ${active ? ACCENT : BORDER}`, borderTop: `3px solid ${active ? ACCENT : 'var(--surface-08)'}` }}>
                        <Box sx={{ position: 'relative', aspectRatio: '16 / 9', mx: { xs: -2.25, md: -2.75 }, mt: { xs: -2.25, md: -2.75 }, mb: 2, bgcolor: VARIANT_MEDIA[v].dark ? RENDER_BG : '#fff', borderBottom: `1px solid ${BORDER}` }}>
                          <Image src={VARIANT_MEDIA[v].image} alt={vc.imageAlt} fill sizes="(max-width: 900px) 100vw, 380px" style={{ objectFit: VARIANT_MEDIA[v].fit, padding: VARIANT_MEDIA[v].fit === 'contain' ? 8 : 0 }} />
                          {VARIANT_MEDIA[v].video && (
                            <Box component={Link} href={VARIANT_MEDIA[v].video!.startsWith('#') ? VARIANT_MEDIA[v].video! : `${prefix}${VARIANT_MEDIA[v].video}`} sx={{ position: 'absolute', left: 10, bottom: 10, px: 1, py: 0.45, bgcolor: 'rgba(0,0,0,0.75)', color: '#fff', borderRadius: '3px', fontSize: '0.74rem', fontWeight: 800, textDecoration: 'none', '&:hover': { bgcolor: ACCENT } }}>
                              ▶ {t.watchVideo}
                            </Box>
                          )}
                        </Box>
                        <Typography component="h4" sx={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--dim-85)', mb: 0.5 }}>{vc.name}</Typography>
                        <Typography sx={{ fontSize: '0.82rem', fontWeight: 600, color: ACCENT, mb: 1.5 }}>{vc.fit}</Typography>
                        {vc.note && (
                          <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.55, color: 'var(--dim-85)', bgcolor: 'var(--surface-03)', borderLeft: `3px solid ${ACCENT}`, px: 1.25, py: 1, mb: 1.75 }}>{vc.note}</Typography>
                        )}
                        <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0.75, mb: 2, flex: 1 }}>
                          {vc.items.map((it) => (
                            <Box component="li" key={it} sx={{ display: 'flex', gap: 1, fontSize: '0.84rem', color: TEXT_DIM, lineHeight: 1.5 }}>
                              <Box component="span" aria-hidden="true" sx={{ color: ACCENT, fontWeight: 800 }}>✓</Box>{it}
                            </Box>
                          ))}
                        </Box>
                        <Box
                          component="button"
                          type="button"
                          onClick={() => pickVariant(v)}
                          aria-pressed={active}
                          sx={{
                            minHeight: 42, borderRadius: '4px', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.84rem', fontWeight: 800,
                            border: `1px solid ${ACCENT}`, bgcolor: active ? ACCENT : 'transparent', color: active ? '#fff' : ACCENT,
                            transition: 'background-color 0.15s ease, color 0.15s ease',
                            '&:hover': { bgcolor: ACCENT, color: '#fff' },
                            '&:focus-visible': { outline: `2px solid ${ACCENT}`, outlineOffset: 2 },
                          }}
                        >
                          {active ? `✓ ${t.chosen}` : t.chooseVariant}
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </>
            )}

            {conditions.size > 0 && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75, mb: 4 }}>
                {[...new Set(CONDITION_IDS.filter((c) => conditions.has(c)).map((c) => t.conditionNote[c]))].map((note) => (
                  <Typography key={note} sx={{ fontSize: '0.86rem', color: 'var(--dim-85)', lineHeight: 1.6, pl: 1.5, borderLeft: `3px solid ${ACCENT}` }}>{note}</Typography>
                ))}
              </Box>
            )}

            {references.length > 0 && (
              <>
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dim-55)', mb: 1.25 }}>{t.referencesTitle}</Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }, gap: 1.5, mb: 4 }}>
                  {references.map((r) => (
                    <Box key={r.slug} component={Link} href={r.href} sx={{ display: 'grid', gridTemplateColumns: '84px 1fr', gap: 1.5, alignItems: 'center', p: 1.25, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', textDecoration: 'none', '&:hover': { borderColor: ACCENT } }}>
                      <Box sx={{ position: 'relative', height: 56, bgcolor: r.logoOnDark ? '#1d1d21' : '#fff', borderRadius: '3px' }}>
                        <Image src={r.logo} alt={r.klient} fill sizes="84px" style={{ objectFit: 'contain', padding: 6 }} />
                      </Box>
                      <Box sx={{ minWidth: 0 }}>
                        <Typography sx={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--dim-85)', lineHeight: 1.35 }}>{r.tytul}</Typography>
                        <Typography sx={{ fontSize: '0.74rem', color: ACCENT, fontWeight: 700, mt: 0.25 }}>
                          {r.video ? `▶ ${t.video} · ` : ''}{t.seeCase} →
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </>
            )}

            <Box ref={formRef} id="dobor-zapytanie" sx={{ scrollMarginTop: '90px', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 3fr' }, gap: { xs: 2.5, md: 5 }, alignItems: 'start' }}>
              <Box>
                <Typography component="h3" sx={{ fontSize: { xs: '1.2rem', md: '1.4rem' }, fontWeight: 800, color: 'var(--text)', mb: 1.25 }}>{t.formTitle}</Typography>
                <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.7, color: TEXT_DIM, mb: 1.5 }}>{t.formIntro}</Typography>
                <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.6, color: 'var(--dim-55)' }}>{t.resultNote}</Typography>
              </Box>
              <InquiryForm
                lang={lang}
                subject={subject}
                summary={summary}
                eventCategory="palletizing_selector"
                eventParams={{ product, ...(variant ? { variant } : {}) }}
              />
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
}
