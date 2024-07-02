'use client';

import { useTranslations } from 'next-intl';

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

const NotFoundPage = () => {
  const t = useTranslations('NotFoundPage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
};

export default NotFoundPage;
