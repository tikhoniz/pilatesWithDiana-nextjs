import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import ThemeProvider from '@/providers/theme-provider/theme-provider';
import { GenerateMetadataProps } from '@/types/metadata';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
  params: { lang: string };
}

export async function generateMetadata({
  params: { lang },
}: GenerateMetadataProps) {
  const t = await getTranslations({ lang, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function LocaleLayout({
  children,
  params,
}: Readonly<RootLayoutProps>) {
  const { lang } = params;
  const messages = useMessages();
  const theme = cookies().get('theme')?.value || 'light';

  return (
    <html
      lang={lang}
      className={theme}
      style={{ colorScheme: theme }}
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages} locale={lang}>
          <ThemeProvider attribute="class" defaultTheme={theme} enableSystem>
            <div className="wrapper-content">
              <Header />
              <div className="content">{children}</div>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
