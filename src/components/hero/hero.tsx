import { classNames } from '@/lib/classNames/classNames';
import Image from 'next/image';
import bgImage from '@/assets/images/home-cover-image.webp';
import cls from './hero.module.css';

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <div className={classNames(cls.Hero, {}, [className])}>
      <Image fill src={bgImage} alt="" className={cls.image} />
    </div>
  );
};

export default Hero;
