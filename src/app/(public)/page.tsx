import { getTranslations } from 'next-intl/server'

export default async function Home() {
  const t = await getTranslations('home')
  return (
    <div>
      <h4>{t('title')}</h4>
    </div>
  )
}
