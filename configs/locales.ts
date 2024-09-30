import {LOCALES} from '@/constants'

export const LOCALIZATION = {
  // A list of all locales that are supported
  locales: Object.values(LOCALES),

  // If this locale is matched, pathnames work without a prefix (e.g. `/any`)
  defaultLocale: LOCALES.EN,
}

export type Locales = (typeof LOCALIZATION)['locales'][number]
