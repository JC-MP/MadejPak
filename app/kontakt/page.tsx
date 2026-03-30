'use client';

import React, { useState, useId, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Alert from '@mui/material/Alert';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import CircularProgress from '@mui/material/CircularProgress';
import Image from 'next/image';
import Link from 'next/link';

// ─── Design tokens ─────────────────────────────────────────────────────────────
const BG       = 'var(--bg)';
const BG_LIGHT = '#1E1E21';
const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';

// ─── Contact data ──────────────────────────────────────────────────────────────
const CONTACT = {
  company:  'PPHU MADEJPAK SP. Z O.O.',
  address:  'Dziewin 333, 32-708 Dziewin',
  phone:    '+48 12 345 43 97',
  email:    'biuro@madejpak.pl',
  hours:    'Pn–Pt, 8:00–16:00',
  mapsHref: 'https://maps.app.goo.gl/AP9CnzAQiyth1NgE8',
} as const;

const INQUIRY_TYPES = [
  'Linia pakująca',
  'Maszyna pakująca',
  'Modernizacja linii',
  'Serwis',
  'Projekt custom',
  'Inne',
] as const;

// ─── Form types ────────────────────────────────────────────────────────────────
interface FormFields {
  name:        string;
  company:     string;
  email:       string;
  phone:       string;
  inquiryType: string;
  message:     string;
  consent:     boolean;
}

interface FormErrors {
  name?:        string;
  email?:       string;
  message?:     string;
  consent?:     string;
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

const INITIAL_FORM: FormFields = {
  name:        '',
  company:     '',
  email:       '',
  phone:       '',
  inquiryType: '',
  message:     '',
  consent:     false,
};

// ─── Submit handler — ready for Firebase / backend ────────────────────────────
// To connect Firebase:
//   import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
//   import { db } from '@/lib/firebase';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = 'service_aso22qi';
const EMAILJS_TEMPLATE_ID = 'template_ppuo1ll';
const EMAILJS_PUBLIC_KEY  = 'IAq3TNyMDLA3SxC62';

async function submitInquiry(data: FormFields): Promise<void> {
  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      from_name:  data.name,
      firma:      data.company,
      user_email: data.email,
      phone:      data.phone,
      produkt:    data.inquiryType,
      message:    data.message,
    },
    { publicKey: EMAILJS_PUBLIC_KEY },
  );
}

// ─── Shared TextField styles ───────────────────────────────────────────────────
const fieldSx = {
  '& .MuiOutlinedInput-root': {
    bgcolor: 'var(--surface-03)',
    fontSize: '0.95rem',
    '& fieldset': { borderColor: 'var(--dim-10)' },
    '&:hover fieldset': { borderColor: 'var(--dim-22)' },
    '&.Mui-focused fieldset': { borderColor: ACCENT, borderWidth: '1px' },
    '&.Mui-error fieldset': { borderColor: '#f87171' },
  },
  '& .MuiInputLabel-root': { color: 'var(--dim-45)', fontSize: '0.9rem' },
  '& .MuiInputLabel-root.Mui-focused': { color: ACCENT },
  '& .MuiInputLabel-root.Mui-error': { color: '#f87171' },
  '& .MuiFormHelperText-root': { mx: 0, mt: 0.75 },
  '& .MuiSelect-icon': { color: 'var(--dim-42)' },
};

// ─── Section label ─────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      sx={{
        fontSize: '0.7rem',
        fontWeight: 700,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: ACCENT,
        mb: { xs: 2, md: 3 },
      }}
    >
      {children}
    </Typography>
  );
}

// ─── Contact info block ────────────────────────────────────────────────────────
function ContactInfoRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
      <Typography
        sx={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: 'var(--dim-45)' }}
      >
        {label}
      </Typography>
      <Box>{children}</Box>
    </Box>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [form, setForm]             = useState<FormFields>(INITIAL_FORM);
  const [errors, setErrors]         = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const formId = useId();

  // ── Anti-spam: honeypot + time check ─────────────────────────────────────
  const [honeypot, setHoneypot]  = useState('');
  const formLoadTime             = useRef<number>(0);
  useEffect(() => { formLoadTime.current = Date.now(); }, []);

  // ── Field handlers ────────────────────────────────────────────────────────
  const handleChange = (field: keyof FormFields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  // ── Validation ────────────────────────────────────────────────────────────
  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!form.name.trim())
      errs.name = 'Imię i nazwisko jest wymagane.';
    if (!form.email.trim())
      errs.email = 'Adres e-mail jest wymagany.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Podaj prawidłowy adres e-mail.';
    if (!form.message.trim())
      errs.message = 'Treść wiadomości jest wymagana.';
    else if (form.message.trim().length < 20)
      errs.message = 'Wiadomość jest zbyt krótka (min. 20 znaków).';
    if (!form.consent)
      errs.consent = 'Zgoda na kontakt jest wymagana.';
    return errs;
  }

  // ── Submit ────────────────────────────────────────────────────────────────
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Anti-spam: honeypot filled = bot
    if (honeypot) return;
    // Anti-spam: form submitted in under 3 seconds = bot
    if (Date.now() - formLoadTime.current < 3000) return;

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Focus first field with error
      const firstKey = Object.keys(errs)[0];
      document.getElementById(`${formId}-${firstKey}`)?.focus();
      return;
    }

    setSubmitState('loading');
    try {
      await submitInquiry(form);
      setSubmitState('success');
      setForm(INITIAL_FORM);
      setErrors({});
    } catch {
      setSubmitState('error');
    }
  }

  const isLoading = submitState === 'loading';

  return (
    <Box component="main" sx={{ bgcolor: BG, minHeight: '100vh' }}>
      {/* Fixed header spacer */}
      <Box sx={{ height: { xs: 60, md: 72 } }} />

      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <Box
        component="section"
        aria-labelledby="contact-heading"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          borderBottom: `1px solid ${BORDER}`,
          py: { xs: 6, md: 9 },
        }}
      >
        {/* Building image — right side, hidden on mobile */}
        <Box aria-hidden="true" sx={{
          display: { xs: 'none', md: 'block' },
          position: 'absolute', top: 0, right: 0,
          width: '46%', height: '100%', zIndex: 0, pointerEvents: 'none',
        }}>
          <Box sx={{
            position: 'absolute', inset: 0, zIndex: 1,
            background: [
              `linear-gradient(to right, var(--bg) 0%, color-mix(in srgb, var(--bg) 75%, transparent) 18%, color-mix(in srgb, var(--bg) 25%, transparent) 45%, transparent 100%)`,
              `linear-gradient(to bottom, color-mix(in srgb, var(--bg) 55%, transparent) 0%, transparent 20%, transparent 80%, color-mix(in srgb, var(--bg) 55%, transparent) 100%)`,
            ].join(', '),
          }} />
          <Image src="/images/other/kontakt-zdjeciebudynku.png" alt="" fill sizes="(max-width: 768px) 0vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.5 }} />
        </Box>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: 700 }}>
            <SectionLabel>Kontakt</SectionLabel>

            <Typography
              component="h1"
              id="contact-heading"
              sx={{
                fontSize: { xs: 'clamp(1.75rem, 6vw, 2.5rem)', md: '3rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                color: 'var(--text)',
                mb: { xs: 2.5, md: 3 },
              }}
            >
              Kontakt z MadejPak
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.05rem' },
                lineHeight: 1.75,
                color: 'var(--dim-58)',
                mb: { xs: 2, md: 2.5 },
                maxWidth: 580,
              }}
            >
              Skontaktuj się z nami, aby omówić linię pakującą, modernizację,
              maszynę lub projekt specjalny.
            </Typography>

            <Typography
              sx={{
                fontSize: '0.9rem',
                lineHeight: 1.7,
                color: 'var(--dim-65)',
                mb: { xs: 5, md: 6 },
                maxWidth: 520,
              }}
            >
              Obsługujemy firmy produkcyjne — dostarczamy technologie pakowania,
              integrację linii i wsparcie serwisowe.
            </Typography>

            {/* Quick CTA */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                component="a"
                href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                variant="contained"
                disableElevation
                sx={{
                  bgcolor: ACCENT,
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  px: 4,
                  py: 1.75,
                  minHeight: 52,
                  borderRadius: '6px',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    bgcolor: '#F07520',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 8px 24px rgba(232,97,10,0.3)',
                  },
                  transition: 'all 0.18s ease',
                }}
              >
                Zadzwoń: {CONTACT.phone}
              </Button>

              <Button
                component="a"
                href={`mailto:${CONTACT.email}`}
                variant="outlined"
                sx={{
                  borderColor: 'var(--dim-18)',
                  color: 'var(--dim-85)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  px: 4,
                  py: 1.75,
                  minHeight: 52,
                  borderRadius: '6px',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    borderColor: 'var(--dim-45)',
                    color: 'var(--text)',
                    bgcolor: 'var(--surface-04)',
                  },
                  transition: 'all 0.18s ease',
                }}
              >
                {CONTACT.email}
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* ── Section 2+3: Contact info + Form ────────────────────────────── */}
      <Box
        component="section"
        aria-label="Dane kontaktowe i formularz zapytania"
        sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${BORDER}` }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '1fr 1.5fr' },
              gap: { xs: 8, lg: 10 },
              alignItems: 'start',
            }}
          >
            {/* ── Left: Contact data ──────────────────────────────────── */}
            <Box>
              <SectionLabel>Dane kontaktowe</SectionLabel>

              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '1.875rem' },
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: 'var(--text)',
                  lineHeight: 1.2,
                  mb: { xs: 5, md: 6 },
                }}
              >
                Jesteśmy do dyspozycji
              </Typography>

              <Stack spacing={4.5}>
                <ContactInfoRow label="Firma">
                  <Typography sx={{ color: 'var(--dim-85)', fontSize: '0.95rem', fontWeight: 500 }}>
                    {CONTACT.company}
                  </Typography>
                </ContactInfoRow>

                <ContactInfoRow label="Adres">
                  <Typography
                    component="a"
                    href={CONTACT.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'var(--dim-85)',
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      display: 'inline-block',
                      '&:hover': { color: 'var(--text)', textDecoration: 'underline' },
                      '&:focus-visible': { outline: `2px solid ${ACCENT}`, outlineOffset: '2px', borderRadius: '2px' },
                    }}
                  >
                    {CONTACT.address}
                  </Typography>
                </ContactInfoRow>

                <ContactInfoRow label="Telefon">
                  <Typography
                    component="a"
                    href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                    sx={{
                      color: ACCENT,
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      letterSpacing: '0.01em',
                      '&:hover': { color: '#F07520' },
                      '&:focus-visible': { outline: `2px solid ${ACCENT}`, outlineOffset: '2px', borderRadius: '2px' },
                    }}
                  >
                    {CONTACT.phone}
                  </Typography>
                </ContactInfoRow>

                <ContactInfoRow label="E-mail">
                  <Typography
                    component="a"
                    href={`mailto:${CONTACT.email}`}
                    sx={{
                      color: 'var(--dim-85)',
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      '&:hover': { color: 'var(--text)', textDecoration: 'underline' },
                      '&:focus-visible': { outline: `2px solid ${ACCENT}`, outlineOffset: '2px', borderRadius: '2px' },
                    }}
                  >
                    {CONTACT.email}
                  </Typography>
                </ContactInfoRow>

                <ContactInfoRow label="Godziny kontaktu">
                  <Typography sx={{ color: 'var(--dim-85)', fontSize: '0.95rem' }}>
                    {CONTACT.hours}
                  </Typography>
                </ContactInfoRow>
              </Stack>
            </Box>

            {/* ── Right: Form ─────────────────────────────────────────── */}
            <Box>
              <SectionLabel>Formularz zapytania</SectionLabel>

              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '1.875rem' },
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: 'var(--text)',
                  lineHeight: 1.2,
                  mb: 3,
                }}
              >
                Wyślij zapytanie
              </Typography>

              {/* Co przygotować do zapytania */}
              <Box
                sx={{
                  bgcolor: 'var(--bg-alt)',
                  border: `1px solid ${BORDER}`,
                  borderLeft: `3px solid ${ACCENT}`,
                  borderRadius: '4px',
                  px: 3,
                  py: 2.5,
                  mb: { xs: 4, md: 5 },
                }}
              >
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, mb: 1.5 }}>
                  Co przyspieszy odpowiedź
                </Typography>
                <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                  {[
                    'Produkt i jego format (wymiary, waga, specyfika)',
                    'Oczekiwana wydajność (szt./min lub kg/h)',
                    'Typ opakowania (worek, flowpack, karton, paleta…)',
                    'Etap procesu, który chcesz zautomatyzować',
                    'Zdjęcia lub film z obecnego procesu — mile widziane',
                  ].map((item) => (
                    <Box key={item} component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                      <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: ACCENT, mt: '7px', flexShrink: 0 }} />
                      <Typography sx={{ fontSize: '0.82rem', color: 'var(--dim-65)', lineHeight: 1.55 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {submitState === 'success' ? (
                <Box
                  sx={{
                    p: { xs: 4, md: 5 },
                    border: `1px solid rgba(34,197,94,0.3)`,
                    borderRadius: '8px',
                    bgcolor: 'rgba(34,197,94,0.06)',
                    textAlign: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#4ade80', mb: 1.5 }}>
                    Zapytanie zostało wysłane
                  </Typography>
                  <Typography sx={{ color: 'var(--dim-58)', fontSize: '0.95rem', mb: 4 }}>
                    Skontaktujemy się najszybciej, jak to możliwe.
                  </Typography>
                  <Button
                    onClick={() => setSubmitState('idle')}
                    variant="outlined"
                    sx={{
                      borderColor: 'var(--dim-18)',
                      color: 'var(--dim-75)',
                      textTransform: 'none',
                      fontWeight: 600,
                      '&:hover': { borderColor: 'var(--dim-42)', color: 'var(--text)' },
                    }}
                  >
                    Wyślij kolejne zapytanie
                  </Button>
                </Box>
              ) : (
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Formularz kontaktowy"
                >
                  {/* Honeypot — niewidoczne dla ludzi, boty to wypełniają */}
                  <Box
                    component="input"
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    aria-hidden="true"
                    autoComplete="off"
                    sx={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden', opacity: 0 }}
                  />
                  {submitState === 'error' && (
                    <Alert
                      severity="error"
                      sx={{ mb: 4, bgcolor: 'rgba(239,68,68,0.1)', color: '#fca5a5',
                        border: '1px solid rgba(239,68,68,0.25)', '& .MuiAlert-icon': { color: '#f87171' } }}
                      onClose={() => setSubmitState('idle')}
                    >
                      Nie udało się wysłać wiadomości. Spróbuj ponownie lub zadzwoń bezpośrednio.
                    </Alert>
                  )}

                  {/* 2-col row: name + company */}
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                      gap: 2.5,
                      mb: 2.5,
                    }}
                  >
                    <TextField
                      id={`${formId}-name`}
                      label="Imię i nazwisko *"
                      value={form.name}
                      onChange={handleChange('name')}
                      error={!!errors.name}
                      helperText={errors.name}
                      disabled={isLoading}
                      fullWidth
                      autoComplete="name"
                      inputProps={{ 'aria-required': true, 'aria-invalid': !!errors.name }}
                      sx={fieldSx}
                    />
                    <TextField
                      id={`${formId}-company`}
                      label="Firma"
                      value={form.company}
                      onChange={handleChange('company')}
                      disabled={isLoading}
                      fullWidth
                      autoComplete="organization"
                      sx={fieldSx}
                    />
                  </Box>

                  {/* 2-col row: email + phone */}
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                      gap: 2.5,
                      mb: 2.5,
                    }}
                  >
                    <TextField
                      id={`${formId}-email`}
                      label="E-mail *"
                      type="email"
                      value={form.email}
                      onChange={handleChange('email')}
                      error={!!errors.email}
                      helperText={errors.email}
                      disabled={isLoading}
                      fullWidth
                      autoComplete="email"
                      inputProps={{ 'aria-required': true, 'aria-invalid': !!errors.email }}
                      sx={fieldSx}
                    />
                    <TextField
                      id={`${formId}-phone`}
                      label="Telefon"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange('phone')}
                      disabled={isLoading}
                      fullWidth
                      autoComplete="tel"
                      sx={fieldSx}
                    />
                  </Box>

                  {/* Inquiry type */}
                  <TextField
                    id={`${formId}-inquiryType`}
                    select
                    label="Typ zapytania"
                    value={form.inquiryType}
                    onChange={handleChange('inquiryType')}
                    disabled={isLoading}
                    fullWidth
                    sx={{ ...fieldSx, mb: 2.5 }}
                    SelectProps={{
                      MenuProps: {
                        PaperProps: {
                          sx: {
                            bgcolor: 'var(--bg-card)',
                            border: `1px solid ${BORDER}`,
                            '& .MuiMenuItem-root': {
                              fontSize: '0.9rem',
                              '&:hover': { bgcolor: 'var(--surface-05)' },
                              '&.Mui-selected': { bgcolor: 'rgba(232,97,10,0.12)', color: ACCENT },
                            },
                          },
                        },
                      },
                    }}
                  >
                    <MenuItem value="" disabled sx={{ color: 'var(--dim-45)', fontSize: '0.9rem' }}>
                      Wybierz typ zapytania
                    </MenuItem>
                    {INQUIRY_TYPES.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </TextField>

                  {/* Message */}
                  <TextField
                    id={`${formId}-message`}
                    label="Treść wiadomości *"
                    multiline
                    minRows={5}
                    value={form.message}
                    onChange={handleChange('message')}
                    error={!!errors.message}
                    helperText={errors.message}
                    disabled={isLoading}
                    fullWidth
                    inputProps={{ 'aria-required': true, 'aria-invalid': !!errors.message }}
                    sx={{ ...fieldSx, mb: 3 }}
                  />

                  {/* Consent */}
                  <Box sx={{ mb: 4 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          id={`${formId}-consent`}
                          checked={form.consent}
                          onChange={(e) => {
                            setForm((prev) => ({ ...prev, consent: e.target.checked }));
                            if (errors.consent) setErrors((prev) => ({ ...prev, consent: undefined }));
                          }}
                          disabled={isLoading}
                          sx={{
                            color: 'var(--dim-42)',
                            '&.Mui-checked': { color: ACCENT },
                            '&:focus-visible': { outline: `2px solid ${ACCENT}`, outlineOffset: '2px', borderRadius: '4px' },
                            p: 0.75,
                          }}
                        />
                      }
                      label={
                        <Typography sx={{ fontSize: '0.85rem', color: 'var(--dim-72)', lineHeight: 1.6 }}>
                          Wyrażam zgodę na przetwarzanie moich danych osobowych w celu odpowiedzi na zapytanie,
                          zgodnie z{' '}
                          <Box
                            component={Link}
                            href="/polityka-prywatnosci"
                            sx={{ color: 'var(--dim-72)', '&:hover': { color: 'var(--text)' } }}
                          >
                            polityką prywatności
                          </Box>
                          . *
                        </Typography>
                      }
                      sx={{ alignItems: 'flex-start', mx: 0 }}
                    />
                    {errors.consent && (
                      <FormHelperText error sx={{ mx: 0, mt: 0.5, fontSize: '0.8rem' }}>
                        {errors.consent}
                      </FormHelperText>
                    )}
                  </Box>

                  <Button
                    type="submit"
                    variant="contained"
                    disableElevation
                    disabled={isLoading}
                    fullWidth
                    sx={{
                      bgcolor: ACCENT,
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      py: 1.875,
                      minHeight: 54,
                      borderRadius: '6px',
                      transition: 'background-color 0.18s ease, transform 0.18s ease',
                      '&:hover:not(:disabled)': { bgcolor: '#F07520', transform: 'translateY(-1px)' },
                      '&:active': { transform: 'translateY(0)' },
                      '&:disabled': { bgcolor: 'rgba(232,97,10,0.35)', color: 'var(--dim-65)' },
                    }}
                  >
                    {isLoading ? (
                      <Stack direction="row" alignItems="center" spacing={1.5}>
                        <CircularProgress size={18} sx={{ color: 'var(--dim-72)' }} />
                        <span>Wysyłanie…</span>
                      </Stack>
                    ) : (
                      'Wyślij zapytanie'
                    )}
                  </Button>

                  <Typography sx={{ mt: 2, fontSize: '0.78rem', color: 'var(--dim-25)', textAlign: 'center' }}>
                    Pola oznaczone * są wymagane
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Section 4: Map / Location ────────────────────────────────────── */}
      <Box
        component="section"
        aria-label="Lokalizacja"
        sx={{ py: { xs: 6, md: 8 }, borderBottom: `1px solid ${BORDER}` }}
      >
        <Container maxWidth="xl">
          <SectionLabel>Lokalizacja</SectionLabel>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.6fr 1fr' },
              gap: { xs: 5, md: 8 },
              alignItems: 'start',
            }}
          >
            <Box
              sx={{
                width: '100%',
                aspectRatio: { xs: '4/3', md: '21/9' },
                borderRadius: '8px',
                overflow: 'hidden',
                border: `1px solid ${BORDER}`,
              }}
            >
              <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.1639272634807!2d20.437473876991373!3d50.07901271403789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b9c11cb7c65%3A0x63f37e03c8726c6f!2sMadejPak!5e1!3m2!1spl!2spl!4v1774339859004!5m2!1spl!2spl"
                title="Lokalizacja MadejPak — Dziewin 333"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sx={{ width: '100%', height: '100%', border: 0, display: 'block' }}
              />
            </Box>

            {/* Address details */}
            <Stack spacing={4}>
              <Box>
                <Typography sx={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--dim-45)', mb: 1.5 }}>
                  Adres
                </Typography>
                <Typography sx={{ color: 'var(--text)', fontSize: '1.05rem', fontWeight: 600, lineHeight: 1.5, mb: 0.5 }}>
                  {CONTACT.company}
                </Typography>
                <Typography sx={{ color: 'var(--dim-58)', fontSize: '0.95rem' }}>
                  {CONTACT.address}
                </Typography>
              </Box>

              <Box>
                <Typography sx={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--dim-45)', mb: 1.5 }}>
                  Dojazd
                </Typography>
                <Typography sx={{ color: 'var(--dim-58)', fontSize: '0.9rem', lineHeight: 1.75 }}>
                  15 km od Bochni
                </Typography>
              </Box>

              <Button
                component="a"
                href={CONTACT.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                sx={{
                  borderColor: 'var(--dim-16)',
                  color: 'var(--dim-72)',
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  py: 1.5,
                  borderRadius: '6px',
                  alignSelf: 'flex-start',
                  '&:hover': { borderColor: 'var(--dim-42)', color: 'var(--text)', bgcolor: 'var(--surface-04)' },
                }}
              >
                Otwórz w Google Maps →
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* ── Section 5: Trust strip ───────────────────────────────────────── */}
      <Box
        component="section"
        aria-label="O firmie MadejPak"
        sx={{ py: { xs: 7, md: 9 } }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              justifyContent: 'space-between',
              gap: { xs: 4, md: 6 },
              borderTop: `1px solid ${BORDER}`,
              pt: { xs: 7, md: 9 },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: '1.125rem', md: '1.25rem' },
                  fontWeight: 700,
                  color: 'var(--text)',
                  mb: 1,
                }}
              >
                25 lat doświadczenia w technologii pakowania
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: 'var(--dim-65)' }}>
                Obsługujemy przemysł produkcyjny od 1999 roku.
              </Typography>
            </Box>

            <Stack
              direction="row"
              flexWrap="wrap"
              useFlexGap
              gap={{ xs: 2.5, md: 4 }}
              sx={{ flexShrink: 0 }}
            >
              {['Integracja linii', 'Automatyzacja', 'Robotyzacja', 'Serwis'].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--dim-28)',
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
