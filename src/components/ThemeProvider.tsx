'use client';

import { createContext, useEffect, useMemo } from 'react';

const ThemeContext = createContext<undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    root.dataset.theme = 'dark';
    root.style.colorScheme = 'dark';
  }, []);

  // No-op provider retained for compatibility if consumed elsewhere later
  const value = useMemo(() => undefined, []);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
