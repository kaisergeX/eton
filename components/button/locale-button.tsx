'use client'
import {updateLocale} from '@/app/actions'
import {LOCALIZATION} from '@/configs'
import {LOCALES} from '@/constants'
import {useTransition, type PropsWithChildren} from 'react'

type LocaleButtonProps = PropsWithChildren<{
  currentLocale?: LOCALES
}>

export default function LocaleButton({
  currentLocale = LOCALIZATION.defaultLocale,
  children,
}: LocaleButtonProps) {
  const [isPending, startTransition] = useTransition()

  return (
    <button
      className="button capitalize"
      type="button"
      onClick={() =>
        startTransition(() =>
          updateLocale(currentLocale === LOCALES.EN ? LOCALES.VI : LOCALES.EN),
        )
      }
      disabled={isPending}
    >
      {children}
    </button>
  )
}
