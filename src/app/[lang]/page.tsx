import { useTranslations } from 'next-intl'
import cls from './page.module.css'

export default function Home() {
  const t = useTranslations('HomePage')

  return (
    <main className={cls.main}>
      <h1 className="visually-hidden">{t('title')}</h1>
      Online тренировки по направлению Пилатес в любом комфортном для Вас месте.
      'Живые' групповые и персональные классы. Для любого возраста и уровня
      подготовки.
    </main>
  )
}
