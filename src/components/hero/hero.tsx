import bgImage from '@/assets/images/home-cover-image.webp';
import { classNames } from '@/lib/classNames/classNames';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import cls from './hero.module.css';

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  const t = useTranslations('HomePage');

  return (
    <div className={classNames(cls.Hero, {}, [className])}>
      <h1 className={classNames(cls.titleBlock, {}, ['absolute-centered'])}>
        <span className={cls.subtitle}>{t('hero.subtitle')}</span>
        <span className={cls.title}>{t('hero.title')}</span>
      </h1>
      <Image fill src={bgImage} alt="" className={cls.image} />
    </div>
  );
};

export default Hero;
