'use client';

import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { ColorModeProvider, useColorMode } from './ColorModeContext';

const FONT_FAMILY = [
  'Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif',
].join(',');

const COMMON_OVERRIDES = {
  '*, *::before, *::after': { boxSizing: 'border-box' },
  body: { overflowX: 'hidden', backgroundColor: 'var(--bg)', color: 'var(--text)' },
};

const darkTheme = createTheme({
  palette: { mode: 'dark', background: { default: '#18181A' }, primary: { main: '#E8610A' } },
  typography: { fontFamily: FONT_FAMILY },
  components: { MuiCssBaseline: { styleOverrides: COMMON_OVERRIDES } },
});

const lightTheme = createTheme({
  palette: { mode: 'light', background: { default: '#ffffff' }, primary: { main: '#E8610A' } },
  typography: { fontFamily: FONT_FAMILY },
  components: { MuiCssBaseline: { styleOverrides: COMMON_OVERRIDES } },
});

function MuiThemeWrapper({ children }: { children: React.ReactNode }) {
  const { mode } = useColorMode();
  return (
    <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ColorModeProvider>
      <MuiThemeWrapper>{children}</MuiThemeWrapper>
    </ColorModeProvider>
  );
}
