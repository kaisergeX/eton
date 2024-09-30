import {getLocale} from '@/app/actions'
import {getRequestConfig} from 'next-intl/server'

export default getRequestConfig(async () => {
  const locale = await getLocale()

  return {
    locale,
    messages: (await import(`./dictionaries/${locale}.json`)).default,
  }
})
