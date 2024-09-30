import {redirect} from 'next/navigation'
import type {Metadata} from 'next'
import {getTranslations} from 'next-intl/server'
import {IconBrandGoogleFilled} from '@tabler/icons-react'
import {auth} from '@/auth'
import {SignInButton} from '@/components'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations()

  return {
    title: `${t('auth.login')} | ${
      process.env.SERVICE_NAME ?? t('common.app')
    }`,
    description: t('common.slogan'),
  }
}

export default async function Login() {
  const t = await getTranslations('auth')
  const session = await auth()

  if (session) {
    redirect('/')
  }

  return (
    <main className="bg-fancy flex-center h-full flex-col gap-16 p-4">
      <SignInButton>
        <IconBrandGoogleFilled />

        {t('signIn.withGoogle')}
      </SignInButton>
    </main>
  )
}
