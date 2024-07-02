import { classNames } from '@/lib/classNames/classNames';
import { LangSwitcher } from '../lang-switcher/lang-switcher';
import { ThemeSwitcher } from '../theme-switcher/theme-switcher';
import cls from './header.module.css';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={classNames(cls.Header, {}, [className])}>
      <div className={cls.switchers}>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
