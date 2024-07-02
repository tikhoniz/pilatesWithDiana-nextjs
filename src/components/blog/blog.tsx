import { useTranslations } from 'next-intl'

interface BlogProps {
  className?: string
}

const Blog = ({ className }: BlogProps) => {
  const t = useTranslations('BlogPage')
  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  )
}

export default Blog
