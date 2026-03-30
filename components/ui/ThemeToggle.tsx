'use client';

import Box from '@mui/material/Box';
import { useColorMode } from '@/components/ColorModeContext';

// Sun icon
function SunIcon() {
  return (
    <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden="true"
      sx={{ width: 18, height: 18 }}>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </Box>
  );
}

// Moon icon
function MoonIcon() {
  return (
    <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden="true"
      sx={{ width: 18, height: 18 }}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  );
}

export default function ThemeToggle() {
  const { mode, toggle } = useColorMode();

  return (
    <Box
      component="button"
      onClick={toggle}
      aria-label={mode === 'light' ? 'Przełącz na tryb ciemny' : 'Przełącz na tryb jasny'}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        borderRadius: '6px',
        border: '1px solid var(--border)',
        bgcolor: 'var(--surface-04)',
        color: 'var(--dim-65)',
        cursor: 'pointer',
        flexShrink: 0,
        transition: 'background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease',
        '&:hover': {
          bgcolor: 'var(--surface-08)',
          color: 'var(--text)',
          borderColor: 'var(--dim-18)',
        },
        '&:focus-visible': {
          outline: '2px solid #E8610A',
          outlineOffset: '2px',
        },
      }}
    >
      {mode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Box>
  );
}
