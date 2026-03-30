'use client';

import Box from '@mui/material/Box';
import { usePathname, useRouter } from 'next/navigation';

const ACCENT  = '#E8610A';
const LOCALES = ['pl', 'en'] as const;
type Locale = (typeof LOCALES)[number];

// Derive active locale from pathname — /en/... → 'en', everything else → 'pl'
function useLocale(): Locale {
  const pathname = usePathname();
  return pathname.startsWith('/en') ? 'en' : 'pl';
}

// Switch between /en/... and /... (Polish is the root, no /pl/ prefix)
function localePath(locale: Locale, pathname: string): string {
  const withoutEn = pathname.startsWith('/en') ? pathname.slice(3) || '/' : pathname;
  return locale === 'en' ? `/en${withoutEn === '/' ? '' : withoutEn}` : withoutEn;
}

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router   = useRouter();
  const active   = useLocale();

  return (
    <Box
      role="group"
      aria-label="Wybór języka"
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: 36,
        borderRadius: '6px',
        border: '1px solid var(--border)',
        bgcolor: 'var(--surface-04)',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      {LOCALES.map((locale, i) => (
        <Box
          key={locale}
          component="button"
          onClick={() => router.push(localePath(locale, pathname))}
          aria-label={locale === 'pl' ? 'Wersja polska' : 'English version'}
          aria-pressed={active === locale}
          sx={{
            px: 1.5,
            height: '100%',
            fontSize: '0.72rem',
            fontWeight: active === locale ? 700 : 400,
            color: active === locale ? ACCENT : 'var(--dim-42)',
            bgcolor: 'transparent',
            border: 'none',
            borderLeft: i > 0 ? '1px solid var(--border)' : 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            lineHeight: 1,
            transition: 'color 0.15s ease',
            '&:hover': {
              color: active === locale ? ACCENT : 'var(--dim-65)',
            },
            '&:focus-visible': {
              outline: `2px solid ${ACCENT}`,
              outlineOffset: '-2px',
            },
          }}
        >
          {locale}
        </Box>
      ))}
    </Box>
  );
}
