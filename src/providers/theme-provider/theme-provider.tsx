'use client';

import { setCookie } from 'cookies-next';
import { ThemeProvider as Provider, useTheme } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';
import { useEffect } from 'react';

// Application theme provider
function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <Provider enableColorScheme {...props}>
      <ThemeProviderHelper />
      {children}
    </Provider>
  );
}

// Helper component to set theme in cookie
function ThemeProviderHelper() {
  const { theme } = useTheme();
  useEffect(() => {
    setCookie('theme', theme, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
      path: '/',
    });
  }, [theme]);

  return null;
}

export default ThemeProvider;
