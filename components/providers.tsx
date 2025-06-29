'use client';

import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from '@/components/theme-provider';
import i18n from '@/lib/i18n';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
    </ThemeProvider>
  );
}