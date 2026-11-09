'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

// To samo konto i szablon EmailJS co pozostałe formularze ofertowe.
const EJS_SERVICE  = 'service_aso22qi';
const EJS_TEMPLATE = 'template_ppuo1ll';
const EJS_KEY      = 'IAq3TNyMDLA3SxC62';

const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

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

const COPY = {
  pl: {
    summary: 'Twoje odpowiedzi',
    name: 'Imię i nazwisko *', email: 'E-mail *', phone: 'Telefon', company: 'Firma',
    message: 'Dodatkowe informacje',
    consent: 'Wyrażam zgodę na przetwarzanie danych osobowych przez PPHU MadejPak Sp. z o.o. w celu obsługi zapytania.',
    privacy: 'Polityka prywatności',
    submit: 'Wyślij zapytanie',
    success: 'Dziękujemy! Odezwiemy się w ciągu 1 dnia roboczego.',
    error: 'Wystąpił błąd. Spróbuj ponownie lub zadzwoń: +48 123 454 397.',
    errName: 'Imię i nazwisko jest wymagane', errEmail: 'Adres e-mail jest wymagany',
    errEmailBad: 'Nieprawidłowy adres e-mail', errConsent: 'Zgoda jest wymagana',
    msgPhone: 'Telefon', none: 'nie podano',
  },
  en: {
    summary: 'Your answers',
    name: 'Full name *', email: 'E-mail *', phone: 'Phone', company: 'Company',
    message: 'Additional information',
    consent: 'I consent to the processing of my personal data by PPHU MadejPak Sp. z o.o. for the purpose of handling this enquiry.',
    privacy: 'Privacy policy',
    submit: 'Send enquiry',
    success: 'Thank you! We will get back to you within 1 working day.',
    error: 'An error occurred. Please try again or call: +48 123 454 397.',
    errName: 'Full name is required', errEmail: 'E-mail address is required',
    errEmailBad: 'Invalid e-mail address', errConsent: 'Consent is required',
    msgPhone: 'Phone', none: 'not provided',
  },
} as const;

export interface SummaryLine {
  label: string;
  value: string;
}

interface Form {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  consent: boolean;
}

const EMPTY: Form = { name: '', email: '', phone: '', company: '', message: '', consent: false };

export default function InquiryForm({
  lang,
  subject,
  summary = [],
  eventCategory,
  eventParams = {},
}: {
  lang: 'pl' | 'en';
  subject: string;
  summary?: SummaryLine[];
  eventCategory: string;
  eventParams?: Record<string, string>;
}) {
  const t = COPY[lang];
  const [form, setForm] = useState<Form>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  function set(field: keyof Form, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validate(): boolean {
    const e: Partial<Record<keyof Form, string>> = {};
    if (!form.name.trim()) e.name = t.errName;
    if (!form.email.trim()) e.email = t.errEmail;
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = t.errEmailBad;
    if (!form.consent) e.consent = t.errConsent;
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function submit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setState('loading');
    const lines = [
      ...summary.map((s) => `${s.label}: ${s.value}`),
      `${t.msgPhone}: ${form.phone || t.none}`,
    ];
    try {
      await emailjs.send(EJS_SERVICE, EJS_TEMPLATE, {
        from_name:  form.name,
        from_email: form.email,
        company:    form.company || '—',
        message:    `${lines.join('\n')}${form.message ? `\n\n${form.message}` : ''}`,
        produkt:    subject,
      }, EJS_KEY);
      setState('success');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag?.('event', 'generate_lead', { event_category: eventCategory, ...eventParams });
      setForm(EMPTY);
    } catch {
      setState('error');
    }
  }

  return (
    <Box component="form" onSubmit={submit} noValidate sx={{ bgcolor: 'var(--bg-card)', border: `1px solid ${BORDER}`, borderRadius: '4px', p: { xs: 2.5, md: 4 }, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      {summary.length > 0 && (
        <Box sx={{ px: 2, py: 1.5, borderLeft: `3px solid ${ACCENT}`, bgcolor: 'var(--surface-03)', borderRadius: '2px' }}>
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dim-55)', mb: 0.75 }}>
            {t.summary}
          </Typography>
          <Box component="dl" sx={{ m: 0, display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 1.5, rowGap: 0.4 }}>
            {summary.map((s) => (
              <Box key={s.label} sx={{ display: 'contents' }}>
                <Box component="dt" sx={{ fontSize: '0.82rem', color: TEXT_DIM }}>{s.label}</Box>
                <Box component="dd" sx={{ m: 0, fontSize: '0.84rem', fontWeight: 700, color: 'var(--text)' }}>{s.value}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {state === 'success' && <Alert severity="success">{t.success}</Alert>}
      {state === 'error' && <Alert severity="error">{t.error}</Alert>}

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
        <TextField fullWidth label={t.name} value={form.name} onChange={(e) => set('name', e.target.value)} error={!!errors.name} helperText={errors.name} sx={{ ...fieldSx, gridColumn: '1 / -1' }} />
        <TextField fullWidth label={t.email} type="email" value={form.email} onChange={(e) => set('email', e.target.value)} error={!!errors.email} helperText={errors.email} sx={fieldSx} />
        <TextField fullWidth label={t.phone} value={form.phone} onChange={(e) => set('phone', e.target.value)} sx={fieldSx} />
        <TextField fullWidth label={t.company} value={form.company} onChange={(e) => set('company', e.target.value)} sx={{ ...fieldSx, gridColumn: '1 / -1' }} />
      </Box>

      <TextField fullWidth label={t.message} multiline rows={3} value={form.message} onChange={(e) => set('message', e.target.value)} sx={fieldSx} />

      <FormControlLabel
        control={
          <Checkbox
            checked={form.consent}
            onChange={(e) => set('consent', e.target.checked)}
            sx={{ color: errors.consent ? 'error.main' : 'var(--dim-28)', '&.Mui-checked': { color: ACCENT }, p: 0.75 }}
          />
        }
        label={
          <Typography sx={{ fontSize: '0.78rem', color: TEXT_DIM, lineHeight: 1.5 }}>
            {t.consent}{' '}
            <Box component={Link} href="/polityka-prywatnosci" sx={{ color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              {t.privacy}
            </Box>
          </Typography>
        }
        sx={{ alignItems: 'flex-start', mr: 0 }}
      />
      {errors.consent && (
        <Typography sx={{ fontSize: '0.75rem', color: 'error.main', mt: -1.5 }}>{errors.consent}</Typography>
      )}

      <Button
        type="submit"
        variant="contained"
        disabled={state === 'loading'}
        disableElevation
        sx={{
          bgcolor: ACCENT, color: '#fff', fontWeight: 700, fontSize: '0.95rem',
          textTransform: 'none', py: 1.75, borderRadius: '6px',
          '&:hover': { bgcolor: '#D45509' },
          '&.Mui-disabled': { bgcolor: 'var(--dim-10)', color: 'var(--dim-28)' },
        }}
      >
        {state === 'loading' ? <CircularProgress size={22} sx={{ color: '#fff' }} /> : t.submit}
      </Button>
    </Box>
  );
}
