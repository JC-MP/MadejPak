'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

// ─── Design tokens ─────────────────────────────────────────────────────────────
const ACCENT  = '#E8610A';
const DARK    = '#0f0f10';
const DARK2   = '#18181a';
const BORDER  = 'var(--border)';

// ─── EmailJS ────────────────────────────────────────────────────────────────────
const EJS_SERVICE  = 'service_aso22qi';
const EJS_TEMPLATE = 'template_ppuo1ll';
const EJS_KEY      = 'IAq3TNyMDLA3SxC62';

const DAYS = [
  'Środa, 10 czerwca 2026',
];

const INTERESTS = [
  'Paletyzacja',
  'Pakowanie / flowpack',
  'Automatyzacja linii',
  'Wszystkie tematy',
];

// ─── Form types ─────────────────────────────────────────────────────────────────
interface RegForm {
  name: string;
  company: string;
  email: string;
  interest: string;
  headcount: string;
  consent: boolean;
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

const EMPTY: RegForm = { name: '', company: '', email: '', interest: '', headcount: '', consent: false };

// ─── Shared MUI field styles ────────────────────────────────────────────────────
const fieldSx = {
  '& .MuiOutlinedInput-root': {
    bgcolor: 'var(--surface-03)',
    fontSize: '0.95rem',
    '& fieldset': { borderColor: 'var(--dim-10)' },
    '&:hover fieldset': { borderColor: 'var(--dim-22)' },
    '&.Mui-focused fieldset': { borderColor: ACCENT, borderWidth: '1px' },
  },
  '& .MuiInputLabel-root': { color: 'var(--dim-45)', fontSize: '0.9rem' },
  '& .MuiInputLabel-root.Mui-focused': { color: ACCENT },
};

// ─── Small atoms ────────────────────────────────────────────────────────────────
function Label({ children }: { children: React.ReactNode }) {
  return (
    <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
      {children}
    </Typography>
  );
}

function Bullet({ text, dark = false }: { text: string; dark?: boolean }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, py: 0.85, borderBottom: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : BORDER}`, '&:last-child': { borderBottom: 'none' } }}>
      <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, mt: '8px' }} />
      <Typography sx={{ fontSize: '0.88rem', lineHeight: 1.65, color: dark ? 'rgba(255,255,255,0.65)' : 'var(--dim-68)' }}>
        {text}
      </Typography>
    </Box>
  );
}

function ImgSlot({ label, dark = false, aspectRatio = '4/3' }: { label: string; dark?: boolean; aspectRatio?: string }) {
  return (
    <Box sx={{
      width: '100%',
      aspectRatio,
      bgcolor: dark ? 'rgba(255,255,255,0.04)' : 'var(--surface-04)',
      border: `1px dashed ${dark ? 'rgba(255,255,255,0.1)' : 'var(--dim-12)'}`,
      borderRadius: '6px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1,
      p: 3,
    }}>
      <Box component="svg" viewBox="0 0 40 40" fill="none" sx={{ width: 36, height: 36, opacity: 0.25, color: dark ? '#fff' : 'currentColor' }}>
        <path d="M20 4C11.16 4 4 11.16 4 20s7.16 16 16 16 16-7.16 16-16S28.84 4 20 4zm-2 22v-8l8 4-8 4z" fill="currentColor" />
      </Box>
      <Typography sx={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.12em', textAlign: 'center', color: dark ? 'rgba(255,255,255,0.28)' : 'var(--dim-28)', textTransform: 'uppercase', maxWidth: 220 }}>
        {label}
      </Typography>
    </Box>
  );
}

function YtEmbed({ videoId, dark = false }: { videoId: string; dark?: boolean }) {
  return (
    <Box sx={{ width: '100%', aspectRatio: '16/9', borderRadius: '6px', overflow: 'hidden', bgcolor: dark ? 'rgba(0,0,0,0.35)' : '#111' }}>
      <Box
        component="iframe"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&color=white`}
        title="DOBOT — pokaz na żywo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        sx={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
      />
    </Box>
  );
}

function AnchorBtn({ href, children, outline = false }: { href: string; children: React.ReactNode; outline?: boolean }) {
  return (
    <Box
      component="a"
      href={href}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        px: 3.5,
        py: 1.5,
        bgcolor: outline ? 'transparent' : ACCENT,
        border: `1.5px solid ${outline ? 'rgba(255,255,255,0.35)' : 'transparent'}`,
        borderRadius: '3px',
        fontSize: '0.82rem',
        fontWeight: 700,
        letterSpacing: '0.07em',
        textTransform: 'uppercase',
        color: '#fff',
        textDecoration: 'none',
        transition: 'all 0.15s ease',
        '&:hover': outline
          ? { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.08)' }
          : { bgcolor: '#D45509' },
      }}
    >
      {children}
    </Box>
  );
}

// ─── Registration form ──────────────────────────────────────────────────────────
function RegFormSection() {
  const [form, setForm] = useState<RegForm>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof RegForm, string>>>({});
  const [state, setState] = useState<SubmitState>('idle');

  function validate() {
    const e: Partial<Record<keyof RegForm, string>> = {};
    if (!form.name.trim())    e.name    = 'Imię i nazwisko jest wymagane';
    if (!form.company.trim()) e.company = 'Nazwa firmy jest wymagana';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Podaj poprawny adres email';
    if (!form.consent) e.consent = 'Zgoda jest wymagana';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function field(key: keyof RegForm) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm(prev => ({ ...prev, [key]: e.target.value }));
      if (errors[key]) setErrors(prev => ({ ...prev, [key]: undefined }));
    };
  }

  async function submit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setState('loading');
    try {
      await emailjs.send(
        EJS_SERVICE, EJS_TEMPLATE,
        {
          from_name:  form.name,
          firma:      form.company,
          user_email: form.email,
          phone:      form.headcount ? `${form.headcount} os.` : '–',
          produkt:    'REJESTRACJA — Coboty w Akcji · Środa, 10 czerwca 2026',
          message:    `Obszar zainteresowania: ${form.interest || 'nie podano'}`,
        },
        { publicKey: EJS_KEY },
      );
      setState('success');
      setForm(EMPTY);
    } catch {
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <Box sx={{ textAlign: 'center', py: 6 }}>
        <Box sx={{ width: 56, height: 56, borderRadius: '50%', bgcolor: `${ACCENT}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 3 }}>
          <Box component="svg" viewBox="0 0 24 24" fill="none" sx={{ width: 28, height: 28, color: ACCENT }}>
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </Box>
        </Box>
        <Typography sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 800, letterSpacing: '-0.025em', color: 'var(--dim-85)', mb: 1.5 }}>
          Rejestracja przyjęta.
        </Typography>
        <Typography sx={{ fontSize: '0.92rem', color: 'var(--dim-55)', lineHeight: 1.75, maxWidth: 440, mx: 'auto' }}>
          Potwierdzenie wyślemy na podany adres email. Do zobaczenia w Dziewinie!
        </Typography>
      </Box>
    );
  }

  return (
    <Box component="form" onSubmit={submit} noValidate>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5, mb: 2.5 }}>
        <TextField label="Imię i nazwisko *" value={form.name} onChange={field('name')} error={!!errors.name} helperText={errors.name} sx={fieldSx} fullWidth />
        <TextField label="Firma *" value={form.company} onChange={field('company')} error={!!errors.company} helperText={errors.company} sx={fieldSx} fullWidth />
        <TextField label="Adres email *" type="email" value={form.email} onChange={field('email')} error={!!errors.email} helperText={errors.email} sx={fieldSx} fullWidth />
        <TextField select label="Obszar zainteresowania (opcjonalne)" value={form.interest} onChange={field('interest')} sx={fieldSx} fullWidth>
          <MenuItem value="">Brak preferencji</MenuItem>
          {INTERESTS.map(i => <MenuItem key={i} value={i}>{i}</MenuItem>)}
        </TextField>
        <TextField label="Liczba osób (opcjonalne)" value={form.headcount} onChange={field('headcount')} sx={fieldSx} fullWidth inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
      </Box>

      <FormControlLabel
        control={
          <Checkbox
            checked={form.consent}
            onChange={e => { setForm(prev => ({ ...prev, consent: e.target.checked })); if (errors.consent) setErrors(prev => ({ ...prev, consent: undefined })); }}
            sx={{ color: errors.consent ? '#f87171' : 'var(--dim-30)', '&.Mui-checked': { color: ACCENT }, pt: 0 }}
            size="small"
          />
        }
        label={
          <Typography sx={{ fontSize: '0.77rem', color: 'var(--dim-50)', lineHeight: 1.6 }}>
            Wyrażam zgodę na przetwarzanie moich danych osobowych przez PPHU MadejPak Sp. z o.o. w celu organizacji dni otwartych. Administratorem danych jest PPHU MadejPak Sp. z o.o., Dziewin 333, 32-708 Dziewin.
          </Typography>
        }
        sx={{ alignItems: 'flex-start', mb: 0.5, mr: 0 }}
      />
      {errors.consent && <FormHelperText error sx={{ ml: 0, mb: 1.5 }}>{errors.consent}</FormHelperText>}

      <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
        <Box
          component="button"
          type="submit"
          disabled={state === 'loading'}
          sx={{
            display: 'inline-flex', alignItems: 'center', gap: 1.5,
            px: 4, py: 1.75,
            bgcolor: ACCENT, border: 'none', borderRadius: '3px',
            fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase',
            color: '#fff', cursor: state === 'loading' ? 'not-allowed' : 'pointer',
            opacity: state === 'loading' ? 0.7 : 1,
            transition: 'background-color 0.15s',
            '&:hover:not(:disabled)': { bgcolor: '#D45509' },
          }}
        >
          {state === 'loading' && <CircularProgress size={15} sx={{ color: '#fff' }} />}
          {state === 'loading' ? 'Wysyłanie…' : 'Zarejestruj się'}
        </Box>
        {state === 'error' && (
          <Alert severity="error" sx={{ fontSize: '0.8rem', py: 0.5 }}>
            Błąd wysyłki. Zadzwoń: +48 12 345 43 97
          </Alert>
        )}
      </Box>
    </Box>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────────
export default function CobotsOpenDayPage() {
  return (
    <Box sx={{ bgcolor: 'var(--bg)', color: 'var(--text)' }}>
      <Box sx={{ height: { xs: 60, lg: 72 } }} />

      {/* ════════════════════════════════════════════════════════
          1. HERO
      ════════════════════════════════════════════════════════ */}
      <Box sx={{
        bgcolor: DARK,
        minHeight: { xs: '88vh', md: '96vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* subtle radial glow */}
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 70% at 75% 50%, rgba(232,97,10,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 10, md: 14 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: { xs: 8, lg: 10 }, alignItems: 'center' }}>

            {/* Left — headline */}
            <Box>
              <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: ACCENT, mb: 3.5 }}>
                Dni otwarte MadejPak + DOBOT · 10 czerwca 2026
              </Typography>
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: '3.75rem', sm: '5rem', md: '5.5rem', lg: '6rem' },
                  fontWeight: 800,
                  lineHeight: 0.95,
                  letterSpacing: '-0.04em',
                  color: '#fff',
                  mb: 3.5,
                }}
              >
                Coboty<br />
                <Box component="span" sx={{ color: ACCENT }}>w akcji.</Box>
              </Typography>
              <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 480, mb: 5.5 }}>
                Zobacz, jak automatyzacja realnie pracuje w produkcji — nie na filmie, nie na slajdach. Na działającym sprzęcie, w warunkach zbliżonych do Twojej linii.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <AnchorBtn href="#rejestracja">Zarejestruj się</AnchorBtn>
                <AnchorBtn href="#program" outline>Zobacz program</AnchorBtn>
              </Box>
            </Box>

            {/* Right — DOBOT CR product photo (transparent bg) */}
            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
              <Box sx={{ position: 'relative', width: '100%', aspectRatio: '3/2' }}>
                <Image src="/images/cobots/cr20a-transparent.png" alt="DOBOT CR — cobot przemysłowy" fill style={{ objectFit: 'contain', objectPosition: 'center center', transform: 'scale(2.03)', transformOrigin: 'center center' }} sizes="45vw" />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════════════════════
          2. INFO STRIP
      ════════════════════════════════════════════════════════ */}
      <Box sx={{ bgcolor: 'var(--bg-alt)', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, py: { xs: 4, md: 5 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 4, md: 6 }, alignItems: 'center' }}>
            {[
              { label: 'Termin', value: '10 czerwca 2026', note: 'Środa' },
              { label: 'Lokalizacja', value: 'k. Bochni', note: 'Siedziba MadejPak, Małopolska' },
              { label: 'Pokazy', value: 'CR20A + Nova 5', note: 'Dwa coboty DOBOT' },
              { label: 'Wstęp', value: 'Bezpłatny', note: 'Rejestracja wymagana' },
            ].map(({ label, value, note }) => (
              <Box key={label}>
                <Typography sx={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--dim-42)', mb: 0.4 }}>
                  {label}
                </Typography>
                <Typography sx={{ fontSize: { xs: '1rem', md: '1.15rem' }, fontWeight: 800, color: 'var(--dim-85)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  {value}
                </Typography>
                <Typography sx={{ fontSize: '0.68rem', color: 'var(--dim-38)', mt: 0.3 }}>{note}</Typography>
              </Box>
            ))}
            <Box sx={{ ml: 'auto' }}>
              <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 1.75, py: 0.75, bgcolor: `${ACCENT}12`, border: `1px solid ${ACCENT}38`, borderRadius: '3px' }}>
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: ACCENT, animation: 'cobot-pulse 2s infinite' }} />
                <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, color: ACCENT }}>Ograniczona liczba miejsc</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
        <style>{`@keyframes cobot-pulse{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>
      </Box>

      {/* ════════════════════════════════════════════════════════
          3a. CO ZOBACZYSZ — Nova 5
      ════════════════════════════════════════════════════════ */}
      <Box sx={{ py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 7, md: 12 }, alignItems: 'center' }}>
            <Box>
              <Label>DOBOT Nova 5 · 5 kg · zasięg 850 mm</Label>
              <Typography component="h2" sx={{ fontSize: { xs: '2.25rem', md: '3rem', lg: '3.5rem' }, fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.035em', color: 'var(--dim-85)', mb: 3 }}>
                Precyzja tam,<br />gdzie liczy się<br />każdy ruch.
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: 'var(--dim-58)', lineHeight: 1.85, mb: 3.5 }}>
                Nova 5 przejmuje powtarzalne zadania, które do tej pory robił człowiek — bez przerw, bez błędów i bez zmęczenia.
              </Typography>
              <Box>
                <Bullet text="Przenoszenie i układanie produktów" />
                <Bullet text="Praca z żywnością i delikatnymi materiałami" />
                <Bullet text="Automatyczne podawanie do maszyny flow-pack" />
              </Box>
            </Box>
            <YtEmbed videoId="FleAPh89MJo" />
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════════════════════
          3b. CO ZOBACZYSZ — CR20A (dark bg)
      ════════════════════════════════════════════════════════ */}
      <Box sx={{ bgcolor: DARK2, py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 7, md: 12 }, alignItems: 'center' }}>
            <Box sx={{ order: { xs: 2, md: 1 } }}>
              <YtEmbed videoId="e_vA7AjN0UQ" dark />
            </Box>
            <Box sx={{ order: { xs: 1, md: 2 } }}>
              <Label>DOBOT CR20A · 20 kg · zasięg 1700 mm</Label>
              <Typography component="h2" sx={{ fontSize: { xs: '2.25rem', md: '3rem', lg: '3.5rem' }, fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.035em', color: '#fff', mb: 3 }}>
                Paletyzacja.<br />Stabilnie,<br />całą dobę.
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.52)', lineHeight: 1.85, mb: 3.5 }}>
                Kartony, worki, ciężkie elementy — CR20A składa palety z dokładnością ±0,05 mm przez 24h bez przerwy. Bez zwolnień lekarskich.
              </Typography>
              <Box>
                <Bullet text="Paletyzacja kartonów i worków" dark />
                <Bullet text="Stabilna praca 24/7 — bez przestojów" dark />
                <Bullet text="Zastąpienie ciężkiej pracy manualnej" dark />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════════════════════
          3c. INTEGRACJA
      ════════════════════════════════════════════════════════ */}
      <Box sx={{ bgcolor: 'var(--bg-alt)', py: { xs: 10, md: 14 }, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 6, md: 8 }, maxWidth: 600 }}>
            <Label>Integracja</Label>
            <Typography component="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', color: 'var(--dim-85)' }}>
              Cobot tam,<br />gdzie potrzebujesz.
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' }, gap: 2.5 }}>
            {[
              { n: '01', title: 'Cobot + flowpack', body: 'Automatyczne podawanie produktów do maszyny pakującej — bez operatora przy podawaniu.' },
              { n: '02', title: 'Cobot + linia pakująca', body: 'Integracja z istniejącym parkiem maszynowym MadejPak bez przebudowy linii.' },
              { n: '03', title: 'Realne zastosowania', body: 'Pokazy w warunkach zbliżonych do produkcji — nie symulacje, nie demonstracje testowe.' },
            ].map(({ n, title, body }) => (
              <Box key={n} sx={{ bgcolor: 'var(--bg)', border: `1px solid ${BORDER}`, borderRadius: '4px', p: 3.5 }}>
                <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.14em', color: ACCENT, mb: 2 }}>{n}</Typography>
                <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dim-85)', mb: 1.25, lineHeight: 1.3 }}>{title}</Typography>
                <Typography sx={{ fontSize: '0.84rem', color: 'var(--dim-52)', lineHeight: 1.7 }}>{body}</Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ mt: 5 }}>
            <Box
              component="a"
              href="/maszyny/robotyzacja-pakowania"
              sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', color: ACCENT, textDecoration: 'none', '&:hover': { opacity: 0.75 } }}
            >
              Pełna oferta robotyzacji pakowania →
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════════════════════
          4. BIG QUOTE
      ════════════════════════════════════════════════════════ */}
      <Box sx={{ bgcolor: DARK, py: { xs: 12, md: 18 } }}>
        <Container maxWidth="md">
          <Typography sx={{ fontSize: { xs: '1.85rem', md: '3rem', lg: '3.75rem' }, fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.035em', color: '#fff', textAlign: 'center', mb: 2.5 }}>
            Automatyzacja, którą możesz wdrożyć bez przebudowy całej produkcji.
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.92rem', md: '1rem' }, color: 'rgba(255,255,255,0.4)', textAlign: 'center', lineHeight: 1.75 }}>
            Zwrot z inwestycji w ciągu 12 miesięcy. Wdrożenie w tydzień, nie w miesiące.
          </Typography>
        </Container>
      </Box>

      {/* ════════════════════════════════════════════════════════
          5. DLACZEGO TO MA ZNACZENIE
      ════════════════════════════════════════════════════════ */}
      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '280px 1fr' }, gap: { xs: 6, md: 10 }, alignItems: 'start' }}>
            <Box>
              <Label>Dlaczego to ma znaczenie</Label>
              <Typography component="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.85rem' }, fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.025em', color: 'var(--dim-85)' }}>
                Koszty rosną.<br />Ludzi brakuje.<br />Produkcja nie czeka.
              </Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5 }}>
              {[
                { icon: '↓', title: 'Niższe koszty pracy', body: 'Cobot nie potrzebuje etatu, urlopu ani nadgodzin.' },
                { icon: '↻', title: 'Pełna powtarzalność', body: 'Każdy ruch identyczny — zero błędów ludzkich, zero strat.' },
                { icon: '◎', title: 'Zero przestojów', body: 'Praca 24/7 bez przerw — trzy zmiany bez rekrutacji.' },
                { icon: '⟳', title: 'Szybki zwrot', body: '12 miesięcy — typowy ROI dla wdrożenia cobota DOBOT.' },
              ].map(({ icon, title, body }) => (
                <Box key={title} sx={{ p: 3, bgcolor: 'var(--bg-alt)', border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
                  <Typography sx={{ fontSize: '1.15rem', color: ACCENT, mb: 1.25, lineHeight: 1 }}>{icon}</Typography>
                  <Typography sx={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.75 }}>{title}</Typography>
                  <Typography sx={{ fontSize: '0.82rem', color: 'var(--dim-52)', lineHeight: 1.7 }}>{body}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════════════════════
          6. PROGRAM — NA ŻYWO
      ════════════════════════════════════════════════════════ */}
      <Box id="program" sx={{ bgcolor: 'var(--bg-alt)', py: { xs: 10, md: 14 }, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, scrollMarginTop: '80px' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 6, md: 12 }, alignItems: 'start' }}>
            <Box>
              <Label>Program pokazów</Label>
              <Typography component="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.03em', color: 'var(--dim-85)', mb: 2 }}>
                Nie prezentacja.<br />Realna praca maszyn.
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: 'var(--dim-52)', lineHeight: 1.8 }}>
                Każdy pokaz odbywa się na działającym sprzęcie, w warunkach zbliżonych do produkcji. Możesz zadawać pytania, patrzeć z bliska, prosić o powtórzenie.
              </Typography>
            </Box>
            <Box sx={{ bgcolor: 'var(--bg)', border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
              {[
                { n: '01', title: 'Paletyzacja', desc: 'CR20A układa kartony i worki na palety — w pełni automatycznie.' },
                { n: '02', title: 'Pick & place', desc: 'Nova 5 przenosi produkty między stanowiskami z precyzją ±0,05 mm.' },
                { n: '03', title: 'Pakowanie z flowpackiem', desc: 'Nova 5 podaje produkty do maszyny flow-pack bez operatora przy podawaniu.' },
                { n: '04', title: 'Programowanie cobota', desc: 'Zobaczysz, jak w kilka minut zmienić ścieżkę ruchu bez znajomości kodowania.' },
              ].map(({ n, title, desc }, idx, arr) => (
                <Box key={n} sx={{ display: 'flex', gap: 3, px: 3.5, py: 3, borderBottom: idx < arr.length - 1 ? `1px solid ${BORDER}` : 'none', alignItems: 'flex-start' }}>
                  <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, color: ACCENT, letterSpacing: '0.1em', mt: '3px', flexShrink: 0, width: 22 }}>
                    {n}
                  </Typography>
                  <Box>
                    <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.5, lineHeight: 1.3 }}>{title}</Typography>
                    <Typography sx={{ fontSize: '0.82rem', color: 'var(--dim-52)', lineHeight: 1.65 }}>{desc}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════════════════════
          7. DLA KOGO
      ════════════════════════════════════════════════════════ */}
      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <Label>Dla kogo</Label>
            <Typography component="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' }, fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.03em', color: 'var(--dim-85)' }}>
              Zapraszamy osoby decyzyjne<br />i techniczne.
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 2 }}>
            {[
              { title: 'Właściciele firm produkcyjnych', body: 'Chcesz zobaczyć, czy automatyzacja realnie się opłaci w Twojej skali.' },
              { title: 'Kierownicy produkcji', body: 'Szukasz konkretnego rozwiązania na problem wydajności lub braków kadrowych.' },
              { title: 'Inżynierowie procesu', body: 'Chcesz zobaczyć specyfikację techniczną i możliwości integracji cobota.' },
              { title: 'Osoby odpowiedzialne za automatyzację', body: 'Budujesz uzasadnienie biznesowe wdrożenia i potrzebujesz danych.' },
            ].map(({ title, body }) => (
              <Box key={title} sx={{ p: 3, border: `1px solid ${BORDER}`, borderRadius: '4px', bgcolor: 'var(--bg-card)' }}>
                <Box sx={{ width: 30, height: 30, borderRadius: '50%', bgcolor: `${ACCENT}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: ACCENT }} />
                </Box>
                <Typography sx={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.75, lineHeight: 1.35 }}>{title}</Typography>
                <Typography sx={{ fontSize: '0.78rem', color: 'var(--dim-52)', lineHeight: 1.7 }}>{body}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════════════════════
          7b. CENA
      ════════════════════════════════════════════════════════ */}
      <Box sx={{ bgcolor: DARK, py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 6, md: 10 } }}>
            <Label>Koszt wdrożenia</Label>
            <Typography component="h2" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.5rem' }, fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em', color: '#fff', mb: 2.5 }}>
              Tańsze niż myślisz.
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.95rem', md: '1.05rem' }, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, maxWidth: 520 }}>
              Cobot to nie milionowa inwestycja. To sprzęt, który zwraca się w ciągu roku — i od tej chwili pracuje za darmo.
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }, gap: 2 }}>
            {[
              {
                icon: '≠',
                title: 'Nie robotyka przemysłowa',
                body: 'Klasyczny robot przemysłowy kosztuje wielokrotnie więcej i wymaga specjalistycznej instalacji. Cobot DOBOT to inna kategoria — mniejszy próg wejścia, szybsze wdrożenie.',
              },
              {
                icon: '↩',
                title: 'Zwrot w ~12 miesięcy',
                body: 'Przy zastosowaniach takich jak paletyzacja czy pick & place ROI wynosi typowo 12 miesięcy. Po tym czasie cobot generuje oszczędności bez dodatkowych kosztów.',
              },
              {
                icon: '÷',
                title: 'Jeden zakup, nie etat na lata',
                body: 'Cobot nie bierze urlopu, nie choruje i nie potrzebuje nadgodzin. Jednorazowy koszt zamiast comiesięcznych wydatków przez kolejne lata.',
              },
            ].map(({ icon, title, body }) => (
              <Box key={title} sx={{ bgcolor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', p: { xs: 3, md: 4 } }}>
                <Typography sx={{ fontSize: '1.5rem', color: ACCENT, mb: 2, lineHeight: 1 }}>{icon}</Typography>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', mb: 1.25, lineHeight: 1.3 }}>{title}</Typography>
                <Typography sx={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.48)', lineHeight: 1.8 }}>{body}</Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ mt: 6, pt: 5, borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between', gap: 3 }}>
            <Typography sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, color: 'rgba(255,255,255,0.38)', lineHeight: 1.75, maxWidth: 480 }}>
              Na wydarzeniu omówimy wycenę i ROI dla konkretnych zastosowań — przynieś swój case, wyliczymy razem.
            </Typography>
            <AnchorBtn href="#rejestracja">Zarejestruj się</AnchorBtn>
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════════════════════
          8. MIEJSCE I TERMIN
      ════════════════════════════════════════════════════════ */}
      <Box sx={{ bgcolor: DARK2, py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 7, md: 12 }, alignItems: 'start' }}>
            <Box>
              <Label>Miejsce i termin</Label>
              <Typography component="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.035em', color: '#fff', mb: 4 }}>
                Małopolska.<br />10 czerwca 2026.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                {[
                  { label: 'Adres', val: 'Dziewin 333, 32-708 Dziewin' },
                  { label: 'Data', val: '10 czerwca 2026 · Środa' },
                  { label: 'Czas trwania', val: 'ok. 2–3 godziny na grupę' },
                  { label: 'Wstęp', val: 'Bezpłatny · Po rejestracji' },
                ].map(({ label, val }) => (
                  <Box key={label}>
                    <Typography sx={{ fontSize: '0.57rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', mb: 0.4 }}>{label}</Typography>
                    <Typography sx={{ fontSize: '0.95rem', fontWeight: 600, color: 'rgba(255,255,255,0.75)', lineHeight: 1.4 }}>{val}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box sx={{ px: 3.5, py: 3.5, bgcolor: ACCENT, borderRadius: '4px', display: 'inline-block' }}>
                <Typography sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                  Środa,<br />10 czerwca 2026
                </Typography>
              </Box>
              <Box
                component="a"
                href="#rejestracja"
                sx={{ display: 'inline-flex', alignItems: 'center', px: 3, py: 1.5, border: '1.5px solid rgba(255,255,255,0.25)', borderRadius: '3px', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'all 0.15s', '&:hover': { borderColor: '#fff', color: '#fff' }, alignSelf: 'flex-start' }}
              >
                Zarejestruj się →
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════════════════════
          9. FORMULARZ
      ════════════════════════════════════════════════════════ */}
      <Box id="rejestracja" sx={{ py: { xs: 10, md: 16 }, scrollMarginTop: '80px' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '320px 1fr' }, gap: { xs: 7, md: 10 }, alignItems: 'start' }}>
            <Box>
              <Label>Rejestracja</Label>
              <Typography component="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.03em', color: 'var(--dim-85)', mb: 2 }}>
                Zarezerwuj<br />swoje miejsce.
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: 'var(--dim-52)', lineHeight: 1.8, mb: 3.5 }}>
                Rejestracja jest bezpłatna. Liczba miejsc w każdym dniu jest ograniczona. Po zapisie wyślemy potwierdzenie z dokładnymi informacjami.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                  { label: 'Telefon', val: '+48 12 345 43 97', href: 'tel:+48123454397' },
                  { label: 'Email', val: 'biuro@madejpak.pl', href: 'mailto:biuro@madejpak.pl' },
                ].map(({ label, val, href }) => (
                  <Box key={label}>
                    <Typography sx={{ fontSize: '0.57rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--dim-35)', mb: 0.4 }}>{label}</Typography>
                    <Typography component="a" href={href} sx={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--dim-65)', textDecoration: 'none', '&:hover': { color: ACCENT } }}>{val}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box sx={{ bgcolor: 'var(--bg-card)', border: `1px solid ${BORDER}`, borderRadius: '4px', p: { xs: 3, md: 5 } }}>
              <RegFormSection />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════════════════════
          10. O MADEJPAK
      ════════════════════════════════════════════════════════ */}
      <Box sx={{ bgcolor: 'var(--bg-alt)', py: { xs: 10, md: 14 }, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 6, md: 12 }, alignItems: 'center' }}>
            <Box>
              <Label>Organizator</Label>
              <Box sx={{ mb: 3 }}>
                <Image src="/MadejPakLogo.svg" alt="MadejPak" width={160} height={40} style={{ objectFit: 'contain', objectPosition: 'left' }} />
              </Box>
              <Typography component="h2" sx={{ fontSize: { xs: '1.3rem', md: '1.6rem' }, fontWeight: 800, lineHeight: 1.25, letterSpacing: '-0.02em', color: 'var(--dim-85)', mb: 2 }}>
                25 lat w technologiach pakowania.
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: 'var(--dim-55)', lineHeight: 1.85, mb: 3 }}>
                MadejPak to integrator i producent systemów pakowania — projektujemy linie, wdrażamy automatyzację i robotyzację, zapewniamy serwis i magazyn części.
              </Typography>
              <Box
                component="a"
                href="/maszyny/robotyzacja-pakowania"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', color: ACCENT, textDecoration: 'none', '&:hover': { opacity: 0.75 } }}
              >
                Robotyzacja pakowania — oferta →
              </Box>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              {[
                { val: '25+', label: 'lat doświadczenia' },
                { val: '200+', label: 'wdrożeń' },
                { val: 'Własna', label: 'produkcja i integracja' },
                { val: 'Własny', label: 'serwis i magazyn części' },
              ].map(({ val, label }) => (
                <Box key={label} sx={{ p: { xs: 2.5, md: 3 }, bgcolor: 'var(--bg)', border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
                  <Typography sx={{ fontSize: { xs: '1.5rem', md: '1.85rem' }, fontWeight: 800, color: ACCENT, letterSpacing: '-0.03em', lineHeight: 1 }}>{val}</Typography>
                  <Typography sx={{ fontSize: '0.78rem', color: 'var(--dim-52)', mt: 0.5, lineHeight: 1.45 }}>{label}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════════════════════
          11. PARTNER — DOBOT
      ════════════════════════════════════════════════════════ */}
      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '260px 1fr' }, gap: { xs: 6, md: 12 }, alignItems: 'center' }}>
            <Box>
              <Label>Partner technologiczny</Label>
              <Box sx={{ mb: 2.5 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/partnerzy/dobot.png" alt="DOBOT Robotics"
                  onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  style={{ maxHeight: 44, maxWidth: 160, objectFit: 'contain', objectPosition: 'left' }}
                />
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: '#0063B8', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  DOBOT
                  <Box component="span" sx={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--dim-42)', letterSpacing: '0.04em', ml: 1 }}>Robotics</Box>
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '0.85rem', color: 'var(--dim-52)', lineHeight: 1.8 }}>
                Największy eksporter robotów współpracujących w Chinach. 100 000+ cobotów globalnie, wejście na giełdę w Hongkongu.
              </Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' }, gap: 2 }}>
              {[
                { title: 'Globalny producent', body: 'Obecność w ponad 50 krajach. Oddziały w USA, Japonii, Niemczech.' },
                { title: 'Szybkie wdrożenia', body: 'Od zakupu do uruchomienia — tygodnie. 45 minut szkolenia operatora.' },
                { title: 'Dla MŚP i przemysłu', body: 'Coboty dostępne cenowo dla małych i średnich firm produkcyjnych.' },
              ].map(({ title, body }) => (
                <Box key={title} sx={{ p: 3, bgcolor: 'var(--bg-card)', border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#0063B8', mb: 2 }} />
                  <Typography sx={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.75 }}>{title}</Typography>
                  <Typography sx={{ fontSize: '0.78rem', color: 'var(--dim-52)', lineHeight: 1.7 }}>{body}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════════════════════
          11b. HUMANOIDY — DOBOT ATOM
      ════════════════════════════════════════════════════════ */}
      <Box sx={{ bgcolor: 'var(--bg-alt)', py: { xs: 10, md: 14 }, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 6, md: 12 }, alignItems: 'center' }}>
            <Box>
              <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 1.5, py: 0.6, bgcolor: `${ACCENT}10`, border: `1px solid ${ACCENT}30`, borderRadius: '3px', mb: 3 }}>
                <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, animation: 'cobot-pulse 2s infinite' }} />
                <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: ACCENT }}>
                  W planach
                </Typography>
              </Box>
              <Typography component="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.035em', color: 'var(--dim-85)', mb: 2.5 }}>
                Następny krok:<br />roboty humanoidalne.
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: 'var(--dim-55)', lineHeight: 1.85, mb: 3.5 }}>
                Planujemy wdrożenie integracji robotów humanoidalnych DOBOT ATOM do końca roku lub w roku 2026. ATOM to 28-stopniowy robot zaprojektowany do pracy w rzeczywistych warunkach przemysłowych — tam, gdzie cobot już nie wystarczy.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 4 }}>
                {[
                  '28 stopni swobody — pełna zręczność rąk i palców',
                  'Praca w niestrukturyzowanym środowisku — bez przebudowy stanowiska',
                  'Montaż, pakowanie, obsługa maszyn — tam, gdzie dziś pracuje człowiek',
                ].map(t => (
                  <Box key={t} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, mt: '8px' }} />
                    <Typography sx={{ fontSize: '0.85rem', color: 'var(--dim-58)', lineHeight: 1.65 }}>{t}</Typography>
                  </Box>
                ))}
              </Box>
              <Box
                component="a"
                href="https://www.dobot-robots.com/products/humanoid-robots/atom.html"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', color: ACCENT, textDecoration: 'none', '&:hover': { opacity: 0.75 } }}
              >
                DOBOT ATOM — strona producenta →
              </Box>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', aspectRatio: '600/479', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image src="/images/cobots/dobot-atom.png" alt="DOBOT ATOM — robot humanoidalny" fill style={{ objectFit: 'contain' }} sizes="(max-width: 900px) 90vw, 45vw" />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════════════════════
          12. BOTTOM CTA
      ════════════════════════════════════════════════════════ */}
      <Box sx={{ bgcolor: DARK, py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' }, gap: 5 }}>
            <Box sx={{ maxWidth: 540 }}>
              <Typography component="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' }, fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.03em', color: '#fff', mb: 1.5 }}>
                Zostały ostatnie miejsca.
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>
                Zarejestruj się teraz — potwierdzenie otrzymasz w ciągu 48h.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, flexShrink: 0 }}>
              <AnchorBtn href="#rejestracja">Zarejestruj się</AnchorBtn>
              <Box
                component="a"
                href="tel:+48123454397"
                sx={{ display: 'inline-flex', alignItems: 'center', px: 3.5, py: 1.5, border: '1.5px solid rgba(255,255,255,0.22)', borderRadius: '3px', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'all 0.15s', '&:hover': { borderColor: 'rgba(255,255,255,0.5)', color: '#fff' } }}
              >
                +48 12 345 43 97
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

    </Box>
  );
}
