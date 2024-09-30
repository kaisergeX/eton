import type {Metadata} from 'next'
import localFont from 'next/font/local'
import type {PropsWithChildren} from 'react'
import {useLocale} from 'next-intl'
import {getTranslations} from 'next-intl/server'
import {cn} from '@/utils'

import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('common')

  return {
    title: process.env.SERVICE_NAME ?? t('app'),
    description: t('slogan'),
  }
}

export default function RootLayout({children}: PropsWithChildren) {
  const locale = useLocale()

  return (
    <html lang={locale}>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          'flex h-dvh flex-col transition-[height]',
        )}
      >
        {children}
      </body>
    </html>
  )
}
