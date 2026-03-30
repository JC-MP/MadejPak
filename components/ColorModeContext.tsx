'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

type Mode = 'light' | 'dark';

interface ColorModeCtx {
  mode: Mode;
  toggle: () => void;
}

const ColorModeContext = createContext<ColorModeCtx>({ mode: 'light', toggle: () => {} });

export function ColorModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>('light');

  // Sync with what the inline init-script already set on <html>
  useEffect(() => {
    const attr = document.documentElement.getAttribute('data-theme');
    setMode(attr === 'dark' ? 'dark' : 'light');
  }, []);

  const toggle = useCallback(() => {
    setMode((prev) => {
      const next: Mode = prev === 'light' ? 'dark' : 'light';
      try { localStorage.setItem('mp-theme', next); } catch {}
      if (next === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
      return next;
    });
  }, []);

  return (
    <ColorModeContext.Provider value={{ mode, toggle }}>
      {children}
    </ColorModeContext.Provider>
  );
}

export const useColorMode = () => useContext(ColorModeContext);
