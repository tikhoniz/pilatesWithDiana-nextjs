import Hero from '@/components/hero/hero';
import { useTranslations } from 'next-intl';
import cls from './page.module.css';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <main className={cls.main}>
      <Hero />
      <h1 className="visually-hidden">{t('title')}</h1>
    </main>
  );
}
