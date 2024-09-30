'use server'

import {signIn} from '@/auth'
import {LOCALIZATION} from '@/configs'
import {COOKIE_NAME, LOCALES} from '@/constants'
import {cookies} from 'next/headers'

export async function getLocale(): Promise<LOCALES> {
  const localeCookie =
    (cookies().get(COOKIE_NAME.LOCALE)?.value as LOCALES) || LOCALES.EN

  return localeCookie && LOCALIZATION.locales.includes(localeCookie)
    ? localeCookie
    : LOCALIZATION.defaultLocale
}

export async function updateLocale(locale: LOCALES) {
  cookies().set(COOKIE_NAME.LOCALE, locale, {
    sameSite: 'strict',
    expires: Date.now() + 365 * 24 * 3600000, // 1 year from update date
  })
}

export const signInAction = signIn
