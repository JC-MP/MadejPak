'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

const EJS_SERVICE  = 'service_aso22qi';
const EJS_TEMPLATE = 'template_ppuo1ll';
const EJS_KEY      = 'IAq3TNyMDLA3SxC62';

const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';
const BG_CARD  = 'var(--bg-card)';
const BG_ALT   = 'var(--bg-alt)';

const MODELS_LIST = [
  'GSP 45 S',
  'GSP 50 S',
  'GSP 55 S',
  'GSP 55 S BB',
  'GSP 75 S',
  'GSP 65 EVO',
  'GSP 65 EVO BB',
  'GSP 600 TR BB-E',
  'Nie wiem – potrzebuję doradztwa',
];

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

interface Form {
  name: string;
  email: string;
  phone: string;
  company: string;
  model: string;
  message: string;
  consent: boolean;
}

const EMPTY: Form = { name: '', email: '', phone: '', company: '', model: '', message: '', consent: false };

export default function LeadForm({ defaultModel = '' }: { defaultModel?: string }) {
  const [form, setForm] = useState<Form>({ ...EMPTY, model: defaultModel });
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  function set(field: keyof Form, value: string | boolean) {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  }

  function validate(): boolean {
    const e: Partial<Record<keyof Form, string>> = {};
    if (!form.name.trim()) e.name = 'Imię i nazwisko jest wymagane';
    if (!form.email.trim()) e.email = 'Adres e-mail jest wymagany';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Nieprawidłowy adres e-mail';
    if (!form.consent) e.consent = 'Zgoda jest wymagana';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function submit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setState('loading');
    try {
      await emailjs.send(EJS_SERVICE, EJS_TEMPLATE, {
        from_name:  form.name,
        from_email: form.email,
        company:    form.company || '—',
        message:    `Model: ${form.model || 'nie podano'}\nTelefon: ${form.phone || 'nie podano'}${form.message ? `\n\n${form.message}` : ''}`,
        produkt:    'ZAPYTANIE — Poziome maszyny pakujące (Flow Pack GSP)',
      }, EJS_KEY);
      setState('success');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag?.('event', 'generate_lead', { event_category: 'flowpack_inquiry' });
      setForm(EMPTY);
    } catch {
      setState('error');
    }
  }

  return (
    <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 10, md: 14 } }}>
      <Container maxWidth="xl">
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 6, md: 10 },
          alignItems: 'start',
        }}>

          {/* Lewa kolumna – tekst */}
          <Box>
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
              Zapytanie o maszynę
            </Typography>
            <Typography component="h2" sx={{
              fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
              letterSpacing: '-0.02em', color: 'var(--text)', lineHeight: 1.2, mb: 3,
            }}>
              Zapytaj o maszynę flow pack GSP
            </Typography>
            <Typography sx={{ fontSize: '0.95rem', color: TEXT_DIM, lineHeight: 1.8, mb: 4 }}>
              Pomożemy dobrać właściwy model do Twojego produktu, wydajności i wymagań pakowania.
              Odpowiadamy zwykle w ciągu 1 dnia roboczego.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                'Dobór modelu do produktu i wydajności',
                'Wycena i czas realizacji',
                'Możliwość demonstracji maszyny',
                'Wsparcie integracji z linią produkcyjną',
              ].map(item => (
                <Box key={item} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, mt: '8px', flexShrink: 0 }} />
                  <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.6 }}>{item}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Prawa kolumna – formularz */}
          <Box component="form" onSubmit={submit} noValidate sx={{
            bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px',
            p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', gap: 2.5,
          }}>

            {state === 'success' && (
              <Alert severity="success">
                Dziękujemy! Odezwiemy się w ciągu 1 dnia roboczego.
              </Alert>
            )}
            {state === 'error' && (
              <Alert severity="error">
                Wystąpił błąd. Spróbuj ponownie lub zadzwoń: +48 123 454 397.
              </Alert>
            )}

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
              <TextField
                fullWidth label="Imię i nazwisko *"
                value={form.name} onChange={e => set('name', e.target.value)}
                error={!!errors.name} helperText={errors.name}
                sx={{ ...fieldSx, gridColumn: '1 / -1' }}
              />
              <TextField
                fullWidth label="E-mail *" type="email"
                value={form.email} onChange={e => set('email', e.target.value)}
                error={!!errors.email} helperText={errors.email}
                sx={fieldSx}
              />
              <TextField
                fullWidth label="Telefon"
                value={form.phone} onChange={e => set('phone', e.target.value)}
                sx={fieldSx}
              />
              <TextField
                fullWidth label="Firma"
                value={form.company} onChange={e => set('company', e.target.value)}
                sx={{ ...fieldSx, gridColumn: '1 / -1' }}
              />
            </Box>

            <TextField
              select fullWidth label="Model, który Cię interesuje"
              value={form.model} onChange={e => set('model', e.target.value)}
              sx={fieldSx}
            >
              {MODELS_LIST.map(m => (
                <MenuItem key={m} value={m}>{m}</MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth label="Dodatkowe informacje" multiline rows={3}
              value={form.message} onChange={e => set('message', e.target.value)}
              sx={fieldSx}
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={form.consent}
                  onChange={e => set('consent', e.target.checked)}
                  sx={{ color: errors.consent ? 'error.main' : 'var(--dim-28)', '&.Mui-checked': { color: ACCENT }, p: 0.75 }}
                />
              }
              label={
                <Typography sx={{ fontSize: '0.78rem', color: TEXT_DIM, lineHeight: 1.5 }}>
                  Wyrażam zgodę na przetwarzanie danych osobowych przez PPHU MadejPak Sp.&nbsp;z&nbsp;o.o.
                  w celu obsługi zapytania.{' '}
                  <Box component={Link} href="/polityka-prywatnosci"
                    sx={{ color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                    Polityka prywatności
                  </Box>
                </Typography>
              }
              sx={{ alignItems: 'flex-start', mr: 0 }}
            />
            {errors.consent && (
              <Typography sx={{ fontSize: '0.75rem', color: 'error.main', mt: -1.5 }}>
                {errors.consent}
              </Typography>
            )}

            <Button
              type="submit" variant="contained" disabled={state === 'loading'} disableElevation
              sx={{
                bgcolor: ACCENT, color: '#fff', fontWeight: 700, fontSize: '0.95rem',
                textTransform: 'none', py: 1.75, borderRadius: '6px',
                '&:hover': { bgcolor: '#F07520' },
                '&.Mui-disabled': { bgcolor: 'var(--dim-10)', color: 'var(--dim-28)' },
              }}
            >
              {state === 'loading'
                ? <CircularProgress size={22} sx={{ color: '#fff' }} />
                : 'Wyślij zapytanie'}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
