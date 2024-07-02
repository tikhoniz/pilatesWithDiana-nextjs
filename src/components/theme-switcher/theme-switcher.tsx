'use client';

import DarkThemeIcon from '@/assets/vector/theme-dark.svg';
import LightThemeIcon from '@/assets/vector/theme-light.svg';
import { classNames } from '@/lib/classNames/classNames';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import cls from './theme-switcher.module.css';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const [currentTheme, setCurrentTheme] = useState('');
  const { setTheme, theme } = useTheme();

  const changeTheme = (theme: string) => {
    setTheme(theme);
  };

  useEffect(() => {
    if (theme) setCurrentTheme(theme);
  }, [theme]);

  return (
    <div className={cls.ThemeSwitcher}>
      <button
        className={classNames(
          cls.button,
          { [cls.active]: 'light' === currentTheme },
          [className],
        )}
        onClick={() => changeTheme('light')}
      >
        <LightThemeIcon />
      </button>
      <button
        className={classNames(
          cls.button,
          { [cls.active]: 'dark' === currentTheme },
          [className],
        )}
        onClick={() => changeTheme('dark')}
      >
        <DarkThemeIcon />
      </button>
    </div>
  );
};
