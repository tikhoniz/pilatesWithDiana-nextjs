import Hero from '@/components/hero/hero';
import { GenerateMetadataProps } from '@/types/metadata';
import { getTranslations } from 'next-intl/server';
import cls from './page.module.css';

export async function generateMetadata({
  params: { lang },
}: GenerateMetadataProps) {
  const t = await getTranslations({ lang, namespace: 'Metadata' });

  return {
    title: t('homePage.title'),
    description: t('homePage.description'),
  };
}

export default function Home() {
  return (
    <main className={cls.main}>
      <Hero />
    </main>
  );
}
