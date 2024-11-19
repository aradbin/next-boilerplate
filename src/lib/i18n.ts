'use server'

import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'

export default getRequestConfig(async () => {
  const locale = await getLocale()

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default,
  }
})

export async function getLocale() {
  return cookies().get('locale')?.value || 'en'
}

export async function setLocale(locale: string) {
  cookies().set('locale', locale)
}
