'use client';

import React, { useState, useId } from 'react';
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
import Link from 'next/link';

const BG       = 'var(--bg)';
const BG_LIGHT = 'var(--bg-card)';
const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
const TEXT_DIM = 'var(--dim-55)';

const CONTACT_SERVICE = {
  label: 'Breakdowns & technical support',
  phone: '+48 12 345 43 97 ext. 14',
  phonePlain: '+4812345439714',
  email: 'serwis@madejpak.pl',
};
const CONTACT_PARTS = {
  label: 'Spare parts & orders',
  phone: '+48 12 345 43 97 ext. 11',
  phonePlain: '+4812345439711',
  email: 'czescizamienne@madejpak.pl',
};
const CONTACT_MAIN = {
  label: 'General enquiries',
  phone: '+48 12 345 43 97',
  phonePlain: '+48123454397',
  email: 'biuro@madejpak.pl',
};

function ScopeIco({ d, d2 }: { d: string; d2?: string }) {
  return (
    <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 20, height: 20, color: 'inherit' }}>
      <path d={d} stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      {d2 && <path d={d2} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}
    </Box>
  );
}

const SERVICE_SCOPE = [
  {
    icon: <ScopeIco d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77Z" />,
    title: 'Machine service',
    desc: 'Diagnostics, fault removal and restoration of packaging machines at the installation site.',
  },
  {
    icon: <ScopeIco d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2Z" d2="M9 12h6M12 9v6" />,
    title: 'Packaging line service',
    desc: 'Complete production line support — from fault diagnosis to fault removal and restart.',
  },
  {
    icon: <ScopeIco d="M1.05 12A11 11 0 0 1 23 12M5 12a7 7 0 0 1 14 0M9 12a3 3 0 0 1 6 0" d2="M12 12h.01" />,
    title: 'Remote support / tele-service',
    desc: 'Fast remote assistance for operators and maintenance teams. Reduces downtime.',
  },
  {
    icon: <ScopeIco d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" d2="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />,
    title: 'Spare parts',
    desc: 'Access to original spare parts for MadejPak machines and partner machines.',
  },
  {
    icon: <ScopeIco d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />,
    title: 'Modernisations & upgrades',
    desc: 'Adapting existing machines and lines to new production requirements or formats.',
  },
  {
    icon: <ScopeIco d="M8 2v4M16 2v4M3 10h18M21 8v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" d2="M9 16l2 2 4-4" />,
    title: 'Planned maintenance',
    desc: 'Scheduled technical inspections to reduce the risk of unplanned downtime.',
  },
  {
    icon: <ScopeIco d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" d2="M9 12l2 2 4-4" />,
    title: 'Post-warranty service',
    desc: 'Full support after the warranty period ends, without interruption of service continuity.',
  },
  {
    icon: <ScopeIco d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" d2="M8 10h8M8 13h5" />,
    title: 'Technical consultations',
    desc: 'Advisory for maintenance teams on uptime management and optimal machine operation.',
  },
];

interface ServicePackage {
  tier: string;
  title: string;
  tagline: string;
  items: string[];
  cta: string;
}

const SERVICE_PACKAGES: ServicePackage[] = [
  {
    tier: '01',
    title: 'Basic Package',
    tagline: 'Standard service support for MadejPak machines and partner machines. Requests via form or email.',
    items: [
      'Request handling during business hours (Mon–Fri 8–16)',
      'Phone and email support',
      'Access to spare parts in stock',
      'Technical consultations and maintenance advisory',
      'Post-warranty service',
    ],
    cta: 'Ask about the package',
  },
  {
    tier: '02',
    title: 'Priority Package',
    tagline: 'Faster service path and extended remote support. Shorter response time per request.',
    items: [
      'Priority service request queue',
      'Faster response time — agreed individually',
      'Extended remote support (tele-service)',
      'Preferential organisation of plant visits',
      'Support for sourcing and express delivery of parts',
      'Everything in the Basic Package',
    ],
    cta: 'Ask about the package',
  },
  {
    tier: '03',
    title: 'Full Care Package',
    tagline: 'Dedicated care for a machine or line. Planned inspections, prevention and technical condition reporting.',
    items: [
      'Planned inspections at agreed intervals (quarterly / biannually)',
      'Inspection protocols and technical condition reports',
      'Support in planning service windows',
      'Modernisation and optimisation recommendations',
      'Extended technical support and advisory',
      'Everything in the Priority Package',
    ],
    cta: 'Discuss service care',
  },
];

interface ServiceFormFields {
  name:           string;
  company:        string;
  email:          string;
  phone:          string;
  requestType:    string;
  machineName:    string;
  serialNumber:   string;
  productionYear: string;
  description:    string;
  consent:        boolean;
}

interface ServiceFormErrors {
  name?:        string;
  email?:       string;
  requestType?: string;
  description?: string;
  consent?:     string;
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

const REQUEST_TYPES = [
  'Urgent breakdown (production stop)',
  'Breakdown / repair',
  'Spare parts',
  'Planned inspection',
  'Modernisation',
  'Technical support',
  'Service package enquiry',
  'Other',
] as const;

const INITIAL_FORM: ServiceFormFields = {
  name: '', company: '', email: '', phone: '',
  requestType: '', machineName: '', serialNumber: '',
  productionYear: '', description: '', consent: false,
};

async function submitServiceRequest(data: ServiceFormFields): Promise<void> {
  await new Promise((r) => setTimeout(r, 900));
  void data;
}

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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
      textTransform: 'uppercase', color: ACCENT, mb: { xs: 2, md: 3 } }}>
      {children}
    </Typography>
  );
}

function SectionHeading({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <Typography component="h2" id={id} sx={{ fontSize: { xs: '1.5rem', md: '2rem' },
      fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)', lineHeight: 1.2, mb: { xs: 5, md: 6 } }}>
      {children}
    </Typography>
  );
}

function ContactBlock({ label, phone, phonePlain, email }: { label: string; phone: string; phonePlain: string; email: string }) {
  return (
    <Box sx={{ py: { xs: 3.5, md: 4 }, display: 'flex', flexDirection: { xs: 'column', sm: 'row' },
      alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between',
      gap: { xs: 2.5, sm: 4 }, borderBottom: `1px solid ${BORDER}` }}>
      <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
        textTransform: 'uppercase', color: 'var(--dim-45)', minWidth: 160, flexShrink: 0 }}>
        {label}
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1.5, sm: 4 }}
        alignItems={{ xs: 'flex-start', sm: 'center' }} sx={{ flex: 1 }}>
        <Typography component="a" href={`tel:${phonePlain}`}
          sx={{ color: ACCENT, fontSize: '1rem', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.01em',
            '&:hover': { color: '#F07520' } }}>
          {phone}
        </Typography>
        <Typography component="a" href={`mailto:${email}`}
          sx={{ color: 'var(--dim-65)', fontSize: '0.9rem', textDecoration: 'none',
            '&:hover': { color: 'var(--text)', textDecoration: 'underline' } }}>
          {email}
        </Typography>
      </Stack>
      <Button component="a" href={`tel:${phonePlain}`} variant="outlined" size="small"
        sx={{ borderColor: 'var(--dim-16)', color: 'var(--dim-72)', textTransform: 'none',
          fontWeight: 600, fontSize: '0.8rem', px: 2.5, py: 1, minHeight: 40,
          borderRadius: '6px', whiteSpace: 'nowrap', flexShrink: 0,
          '&:hover': { borderColor: ACCENT, color: ACCENT, bgcolor: 'rgba(232,97,10,0.06)' } }}>
        Call
      </Button>
    </Box>
  );
}

function PackageCard({ pkg, highlighted }: { pkg: ServicePackage; highlighted?: boolean }) {
  return (
    <Box sx={{ position: 'relative', border: `1px solid ${highlighted ? ACCENT : BORDER}`,
      borderTop: `3px solid ${highlighted ? ACCENT : 'var(--dim-12)'}`,
      borderRadius: '4px', p: { xs: 3.5, md: 4 },
      bgcolor: highlighted ? 'rgba(232,97,10,0.04)' : BG_LIGHT,
      display: 'flex', flexDirection: 'column' }}>
      <Typography sx={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em',
        textTransform: 'uppercase', color: highlighted ? ACCENT : 'var(--dim-28)', mb: 2 }}>
        {pkg.tier}
      </Typography>
      <Typography sx={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text)',
        letterSpacing: '-0.01em', mb: 1.5 }}>
        {pkg.title}
      </Typography>
      <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.6, mb: 3.5, flex: 0 }}>
        {pkg.tagline}
      </Typography>
      <Box sx={{ borderTop: `1px solid ${BORDER}`, pt: 3, mb: 3.5, flex: 1 }}>
        <Stack spacing={1.75}>
          {pkg.items.map((item) => (
            <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
              <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden="true"
                sx={{ width: 14, height: 14, mt: '3px', flexShrink: 0, color: highlighted ? ACCENT : 'var(--dim-42)' }}>
                <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round" />
              </Box>
              <Typography sx={{ fontSize: '0.875rem', color: 'var(--dim-72)', lineHeight: 1.55 }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
      <Button component={Link} href="#form" variant={highlighted ? 'contained' : 'outlined'}
        disableElevation fullWidth
        sx={highlighted ? {
          bgcolor: ACCENT, color: '#fff', fontWeight: 700, textTransform: 'none',
          fontSize: '0.875rem', py: 1.5, borderRadius: '6px', minHeight: 48,
          '&:hover': { bgcolor: '#F07520' },
        } : {
          borderColor: 'var(--dim-16)', color: 'var(--dim-72)', fontWeight: 600,
          textTransform: 'none', fontSize: '0.875rem', py: 1.5, borderRadius: '6px', minHeight: 48,
          '&:hover': { borderColor: 'var(--dim-35)', color: 'var(--text)', bgcolor: 'var(--surface-04)' },
        }}>
        {pkg.cta}
      </Button>
    </Box>
  );
}

function ServiceForm() {
  const [form, setForm]               = useState<ServiceFormFields>(INITIAL_FORM);
  const [errors, setErrors]           = useState<ServiceFormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const formId = useId();

  const handleChange = (field: keyof ServiceFormFields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field as keyof ServiceFormErrors])
        setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  function validate(): ServiceFormErrors {
    const errs: ServiceFormErrors = {};
    if (!form.name.trim())        errs.name = 'Full name is required.';
    if (!form.email.trim())       errs.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Please enter a valid email address.';
    if (!form.requestType)        errs.requestType = 'Please select a request type.';
    if (!form.description.trim()) errs.description = 'Description is required.';
    else if (form.description.trim().length < 15)
      errs.description = 'Description is too short (min. 15 characters).';
    if (!form.consent)            errs.consent = 'Consent to contact is required.';
    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstKey = Object.keys(errs)[0];
      document.getElementById(`${formId}-${firstKey}`)?.focus();
      return;
    }
    setSubmitState('loading');
    try {
      await submitServiceRequest(form);
      setSubmitState('success');
      setForm(INITIAL_FORM);
      setErrors({});
    } catch {
      setSubmitState('error');
    }
  }

  const isLoading = submitState === 'loading';

  if (submitState === 'success') {
    return (
      <Box sx={{ p: { xs: 4, md: 5 }, border: `1px solid rgba(34,197,94,0.3)`,
        borderRadius: '8px', bgcolor: 'rgba(34,197,94,0.06)', textAlign: 'center' }}>
        <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#4ade80', mb: 1.5 }}>
          Request submitted
        </Typography>
        <Typography sx={{ color: TEXT_DIM, fontSize: '0.95rem', mb: 4 }}>
          We will contact you regarding your request. For urgent cases call the service line directly.
        </Typography>
        <Button onClick={() => setSubmitState('idle')} variant="outlined"
          sx={{ borderColor: 'var(--dim-18)', color: 'var(--dim-75)', textTransform: 'none', fontWeight: 600,
            '&:hover': { borderColor: 'var(--dim-42)', color: 'var(--text)' } }}>
          Submit another request
        </Button>
      </Box>
    );
  }

  const col2 = { display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5, mb: 2.5 };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate aria-label="Service request form">
      {submitState === 'error' && (
        <Alert severity="error" onClose={() => setSubmitState('idle')} sx={{ mb: 4,
          bgcolor: 'rgba(239,68,68,0.1)', color: '#fca5a5',
          border: '1px solid rgba(239,68,68,0.25)', '& .MuiAlert-icon': { color: '#f87171' } }}>
          Could not submit the request. Please try again or call the service line directly.
        </Alert>
      )}

      <Box sx={col2}>
        <TextField id={`${formId}-name`} label="Full name *"
          value={form.name} onChange={handleChange('name')}
          error={!!errors.name} helperText={errors.name}
          disabled={isLoading} fullWidth autoComplete="name"
          slotProps={{ htmlInput: { 'aria-required': true, 'aria-invalid': !!errors.name } }}
          sx={fieldSx} />
        <TextField id={`${formId}-company`} label="Company"
          value={form.company} onChange={handleChange('company')}
          disabled={isLoading} fullWidth autoComplete="organization" sx={fieldSx} />
      </Box>

      <Box sx={col2}>
        <TextField id={`${formId}-email`} label="E-mail *" type="email"
          value={form.email} onChange={handleChange('email')}
          error={!!errors.email} helperText={errors.email}
          disabled={isLoading} fullWidth autoComplete="email"
          slotProps={{ htmlInput: { 'aria-required': true, 'aria-invalid': !!errors.email } }}
          sx={fieldSx} />
        <TextField id={`${formId}-phone`} label="Phone" type="tel"
          value={form.phone} onChange={handleChange('phone')}
          disabled={isLoading} fullWidth autoComplete="tel" sx={fieldSx} />
      </Box>

      <TextField id={`${formId}-requestType`} select label="Request type *"
        value={form.requestType} onChange={handleChange('requestType')}
        error={!!errors.requestType} helperText={errors.requestType}
        disabled={isLoading} fullWidth
        slotProps={{
          htmlInput: { 'aria-required': true },
          select: { MenuProps: { PaperProps: { sx: { bgcolor: 'var(--bg-card)', border: `1px solid ${BORDER}`,
            '& .MuiMenuItem-root': { fontSize: '0.9rem',
              '&:hover': { bgcolor: 'var(--surface-05)' },
              '&.Mui-selected': { bgcolor: 'rgba(232,97,10,0.12)', color: ACCENT } } } } } },
        }}
        sx={{ ...fieldSx, mb: 2.5 }}>
        <MenuItem value="" disabled sx={{ color: 'var(--dim-45)', fontSize: '0.9rem' }}>
          Select request type
        </MenuItem>
        {REQUEST_TYPES.map((t) => <MenuItem key={t} value={t}>{t}</MenuItem>)}
      </TextField>

      <Box sx={col2}>
        <TextField id={`${formId}-machineName`} label="Machine / line name"
          value={form.machineName} onChange={handleChange('machineName')}
          disabled={isLoading} fullWidth sx={fieldSx} />
        <TextField id={`${formId}-serialNumber`} label="Serial number"
          value={form.serialNumber} onChange={handleChange('serialNumber')}
          disabled={isLoading} fullWidth sx={fieldSx} />
      </Box>

      <Box sx={{ mb: 2.5, maxWidth: { sm: '50%' }, pr: { sm: 1.25 } }}>
        <TextField id={`${formId}-productionYear`} label="Year of manufacture"
          value={form.productionYear} onChange={handleChange('productionYear')}
          disabled={isLoading} fullWidth
          slotProps={{ htmlInput: { inputMode: 'numeric', pattern: '[0-9]{4}' } }}
          sx={fieldSx} />
      </Box>

      <TextField id={`${formId}-description`} label="Description of problem / need *"
        multiline minRows={5}
        value={form.description} onChange={handleChange('description')}
        error={!!errors.description} helperText={errors.description}
        disabled={isLoading} fullWidth
        slotProps={{ htmlInput: { 'aria-required': true, 'aria-invalid': !!errors.description } }}
        sx={{ ...fieldSx, mb: 3 }} />

      <Box sx={{ mb: 4 }}>
        <FormControlLabel
          control={
            <Checkbox id={`${formId}-consent`} checked={form.consent}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, consent: e.target.checked }));
                if (errors.consent) setErrors((prev) => ({ ...prev, consent: undefined }));
              }}
              disabled={isLoading}
              sx={{ color: 'var(--dim-42)', '&.Mui-checked': { color: ACCENT },
                '&:focus-visible': { outline: `2px solid ${ACCENT}`, outlineOffset: '2px', borderRadius: '4px' }, p: 0.75 }} />
          }
          label={
            <Typography sx={{ fontSize: '0.85rem', color: 'var(--dim-72)', lineHeight: 1.6 }}>
              I consent to the processing of my personal data for the purpose of handling the service request,
              in accordance with the{' '}
              <Box component={Link} href="/polityka-prywatnosci"
                sx={{ color: 'var(--dim-72)', '&:hover': { color: 'var(--text)' } }}>
                privacy policy
              </Box>. *
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

      <Button type="submit" variant="contained" disableElevation disabled={isLoading} fullWidth
        sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, fontSize: '0.95rem',
          textTransform: 'none', py: 1.875, minHeight: 54, borderRadius: '6px',
          transition: 'background-color 0.18s ease, transform 0.18s ease',
          '&:hover:not(:disabled)': { bgcolor: '#F07520', transform: 'translateY(-1px)' },
          '&:active': { transform: 'translateY(0)' },
          '&:disabled': { bgcolor: 'rgba(232,97,10,0.35)', color: 'var(--dim-65)' } }}>
        {isLoading ? (
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <CircularProgress size={18} sx={{ color: 'var(--dim-72)' }} />
            <span>Sending…</span>
          </Stack>
        ) : 'Submit request'}
      </Button>

      <Typography sx={{ mt: 2, fontSize: '0.78rem', color: 'var(--dim-25)', textAlign: 'center' }}>
        Fields marked * are required
      </Typography>
    </Box>
  );
}

export default function ServiceEnPage() {
  return (
    <Box component="main" sx={{ bgcolor: BG, minHeight: '100vh' }}>
      <Box sx={{ height: { xs: 60, md: 72 } }} />

      {/* ── Hero ── */}
      <Box component="section" aria-labelledby="service-heading"
        sx={{ position: 'relative', overflow: 'hidden', borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Box aria-hidden="true" sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', top: 0, right: 0,
          width: '48%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
          <Box sx={{ position: 'absolute', inset: 0, zIndex: 1,
            background: [
              `linear-gradient(to right, var(--bg) 0%, color-mix(in srgb, var(--bg) 80%, transparent) 20%, color-mix(in srgb, var(--bg) 30%, transparent) 45%, transparent 100%)`,
              `linear-gradient(to bottom, color-mix(in srgb, var(--bg) 60%, transparent) 0%, transparent 20%, transparent 80%, color-mix(in srgb, var(--bg) 60%, transparent) 100%)`,
            ].join(', ') }} />
          <Box component="img" src="/images/other/serwis.png" alt=""
            sx={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.55 }} />
        </Box>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <SectionLabel>Service</SectionLabel>
          <Typography component="h1" id="service-heading" sx={{
            fontSize: { xs: 'clamp(1.75rem, 6vw, 2.5rem)', md: '3rem' },
            fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.025em',
            color: 'var(--text)', mb: { xs: 2.5, md: 3 }, maxWidth: 760 }}>
            Service for machines and packaging lines
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', md: '1.05rem' }, lineHeight: 1.75,
            color: TEXT_DIM, mb: 2, maxWidth: 620 }}>
            We service MadejPak machines, technology partner machines (GSP, Essegi, Concetti,
            Technowrapp) and integrated packaging lines with KUKA robots and cobots.
          </Typography>
          <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--dim-65)',
            mb: { xs: 5, md: 6 }, maxWidth: 520 }}>
            Diagnostics, fault removal, tele-service, planned inspections and modernisations.
            One contact for the whole line — regardless of how many machines from different manufacturers it includes.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button component={Link} href="#form" variant="contained" disableElevation sx={{
              bgcolor: ACCENT, color: '#fff', fontWeight: 700, fontSize: '0.95rem',
              textTransform: 'none', px: 4, py: 1.75, minHeight: 52, borderRadius: '6px',
              '&:hover': { bgcolor: '#F07520', transform: 'translateY(-1px)', boxShadow: '0 8px 24px rgba(232,97,10,0.3)' },
              transition: 'all 0.18s ease' }}>
              Submit a service request
            </Button>
            <Button component="a" href={`tel:${CONTACT_SERVICE.phonePlain}`} variant="outlined" sx={{
              borderColor: 'var(--dim-18)', color: 'var(--dim-85)', fontWeight: 600,
              fontSize: '0.95rem', textTransform: 'none', px: 4, py: 1.75, minHeight: 52, borderRadius: '6px',
              '&:hover': { borderColor: 'var(--dim-45)', color: 'var(--text)', bgcolor: 'var(--surface-04)' },
              transition: 'all 0.18s ease' }}>
              Contact service
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* ── Service scope ── */}
      <Box component="section" id="scope" aria-labelledby="scope-heading"
        sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="xl">
          <SectionLabel>Service scope</SectionLabel>
          <SectionHeading id="scope-heading">What MadejPak service covers</SectionHeading>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' },
            gap: 0, border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
            {SERVICE_SCOPE.map((item, i) => (
              <Box key={item.title} sx={{ p: { xs: 3, md: 3.5 },
                borderRight: { xs: 'none', sm: i % 2 === 0 ? `1px solid ${BORDER}` : 'none', lg: i % 4 !== 3 ? `1px solid ${BORDER}` : 'none' },
                borderBottom: `1px solid ${BORDER}`,
                '&:hover': { bgcolor: 'var(--surface-03)' }, transition: 'background-color 0.15s ease' }}>
                <Box sx={{ width: 40, height: 40, borderRadius: '9px', bgcolor: 'rgba(232,97,10,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, color: ACCENT }}>
                  {item.icon}
                </Box>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', mb: 1.25 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: '0.85rem', color: TEXT_DIM, lineHeight: 1.65 }}>
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Quick contact ── */}
      <Box component="section" id="technical-support" aria-labelledby="contact-heading"
        sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="xl">
          <SectionLabel>Quick contact</SectionLabel>
          <SectionHeading id="contact-heading">Service contacts</SectionHeading>
          <Box>
            <ContactBlock {...CONTACT_SERVICE} />
            <ContactBlock {...CONTACT_PARTS} />
            <ContactBlock {...CONTACT_MAIN} />
          </Box>
        </Container>
      </Box>

      {/* ── Service packages ── */}
      <Box component="section" aria-labelledby="packages-heading"
        sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="xl">
          <SectionLabel>Service care</SectionLabel>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'flex-end' },
            mb: { xs: 5, md: 6 }, gap: 3 }}>
            <Typography component="h2" id="packages-heading" sx={{ fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)', lineHeight: 1.2 }}>
              MadejPak service packages
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.7, maxWidth: 400, flexShrink: 0 }}>
              Long-term service care means machine reliability and better control over maintenance costs.
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
            gap: { xs: 3, md: 2.5 }, alignItems: 'stretch' }}>
            {SERVICE_PACKAGES.map((pkg, i) => (
              <PackageCard key={pkg.tier} pkg={pkg} highlighted={i === 2} />
            ))}
          </Box>
          <Typography sx={{ mt: 4, fontSize: '0.82rem', color: 'var(--dim-28)', textAlign: 'center' }}>
            Package scope and terms agreed individually. Get in touch to discuss details.
          </Typography>
        </Container>
      </Box>

      {/* ── Parts & modernisations ── */}
      <Box component="section" id="modernisations" aria-labelledby="parts-heading"
        sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 6, md: 10 }, alignItems: 'start' }}>
            <Box>
              <SectionLabel>Spare parts</SectionLabel>
              <Typography component="h2" id="parts-heading" sx={{ fontSize: { xs: '1.375rem', md: '1.75rem' },
                fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)', lineHeight: 1.25, mb: 3 }}>
                Original spare parts
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: TEXT_DIM, lineHeight: 1.8, mb: 4 }}>
                We provide access to original spare parts for MadejPak machines and partner machines.
                Fast delivery and safe replacement guarantee a return to full operation without unnecessary delay.
              </Typography>
              <Stack spacing={2}>
                {[
                  'Original spare parts for MadejPak machines',
                  'Parts for partner machines and integrated lines',
                  'Fast identification by serial number',
                  'Technical support during replacement and installation',
                ].map((item) => (
                  <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: ACCENT, mt: '8px', flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '0.9rem', color: 'var(--dim-65)', lineHeight: 1.6 }}>{item}</Typography>
                  </Box>
                ))}
              </Stack>
              <Button component="a" href={`mailto:${CONTACT_PARTS.email}`} variant="outlined" sx={{
                mt: 4, borderColor: 'var(--dim-16)', color: 'var(--dim-72)', textTransform: 'none',
                fontWeight: 600, fontSize: '0.875rem', px: 3, py: 1.5, borderRadius: '6px', minHeight: 48,
                '&:hover': { borderColor: ACCENT, color: ACCENT, bgcolor: 'rgba(232,97,10,0.06)' } }}>
                Ask about spare parts
              </Button>
            </Box>
            <Box>
              <SectionLabel>Modernisations</SectionLabel>
              <Typography component="h2" sx={{ fontSize: { xs: '1.375rem', md: '1.75rem' },
                fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)', lineHeight: 1.25, mb: 3 }}>
                Modernisations & line upgrades
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: TEXT_DIM, lineHeight: 1.8, mb: 4 }}>
                Existing machines and packaging lines can be adapted to new formats, new products or
                increased throughput requirements. Modernisation is often a more cost-effective
                alternative to purchasing a new line.
              </Typography>
              <Stack spacing={2}>
                {[
                  'Adaptation to new formats and products',
                  'Increasing throughput of existing lines',
                  'Integration of new automation elements',
                  'Replacement of obsolete control modules',
                  'Expansion of lines with new work stations',
                ].map((item) => (
                  <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: ACCENT, mt: '8px', flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '0.9rem', color: 'var(--dim-65)', lineHeight: 1.6 }}>{item}</Typography>
                  </Box>
                ))}
              </Stack>
              <Button component={Link} href="#form" variant="outlined" sx={{
                mt: 4, borderColor: 'var(--dim-16)', color: 'var(--dim-72)', textTransform: 'none',
                fontWeight: 600, fontSize: '0.875rem', px: 3, py: 1.5, borderRadius: '6px', minHeight: 48,
                '&:hover': { borderColor: ACCENT, color: ACCENT, bgcolor: 'rgba(232,97,10,0.06)' } }}>
                Ask about a modernisation
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Service request form ── */}
      <Box component="section" id="form" aria-labelledby="form-heading"
        sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1.75fr' },
            gap: { xs: 6, lg: 10 }, alignItems: 'start' }}>
            <Box>
              <SectionLabel>Request form</SectionLabel>
              <Typography component="h2" id="form-heading" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' },
                fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)', lineHeight: 1.2, mb: 3 }}>
                Submit a service request or ask for support
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: TEXT_DIM, lineHeight: 1.8, mb: 5 }}>
                Fill in the form to report a service issue, order spare parts or enquire about a service package.
                We will reply to the provided email address.
              </Typography>
              <Box sx={{ p: 3, border: `1px solid rgba(232,97,10,0.25)`,
                borderLeft: `3px solid ${ACCENT}`, borderRadius: '4px', bgcolor: 'rgba(232,97,10,0.04)' }}>
                <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: ACCENT, mb: 1.5 }}>
                  Urgent breakdown?
                </Typography>
                <Typography sx={{ fontSize: '0.875rem', color: 'var(--dim-58)', mb: 2, lineHeight: 1.6 }}>
                  For breakdowns affecting production continuity call directly:
                </Typography>
                <Typography component="a" href={`tel:${CONTACT_SERVICE.phonePlain}`} sx={{
                  color: 'var(--text)', fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
                  display: 'block', mb: 0.5, '&:hover': { color: ACCENT } }}>
                  {CONTACT_SERVICE.phone}
                </Typography>
                <Typography sx={{ fontSize: '0.8rem', color: 'var(--dim-45)' }}>
                  Service & Tele-Service
                </Typography>
              </Box>
            </Box>
            <Box>
              <ServiceForm />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Trust strip ── */}
      <Box component="section" aria-label="About MadejPak service" sx={{ py: { xs: 7, md: 9 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between',
            gap: { xs: 4, md: 6 } }}>
            <Box>
              <Typography sx={{ fontSize: { xs: '1.125rem', md: '1.25rem' }, fontWeight: 700, color: 'var(--text)', mb: 1 }}>
                25 years of experience in packaging technology
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: 'var(--dim-65)' }}>
                Warranty service, post-warranty, spare parts, technical support and modernisations.
              </Typography>
            </Box>
            <Stack direction="row" flexWrap="wrap" useFlexGap gap={{ xs: 2.5, md: 4 }} sx={{ flexShrink: 0 }}>
              {['Warranty', 'Post-warranty', 'Spare parts', 'Tele-service', 'Modernisations'].map((item) => (
                <Typography key={item} sx={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--dim-28)' }}>
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
