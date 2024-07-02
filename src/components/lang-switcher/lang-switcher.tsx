'use client';

import LangSwitcherIcon from '@/assets/vector/language.svg';
import { classNames } from '@/lib/classNames/classNames';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import cls from './lang-switcher.module.css';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const langActive = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const nextLang = langActive === 'ru' ? 'en' : 'ru';

  let newPath: string | string[] = pathname.split('/');
  newPath.splice(1, 1, nextLang);
  newPath = newPath.join('/');

  const handleChange = () => {
    router.replace(newPath);
  };

  return (
    <button
      className={classNames(cls.LangSwitcher, {}, [className])}
      onClick={handleChange}
    >
      <LangSwitcherIcon />
      {nextLang}
    </button>
  );
};
