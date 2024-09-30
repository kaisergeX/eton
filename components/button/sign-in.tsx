'use client'
import {signInAction} from '@/app/actions'
import {useSearchParams} from 'next/navigation'
import {
  useTransition,
  type ButtonHTMLAttributes,
  type PropsWithChildren,
} from 'react'

export default function SignInButton({
  disabled = false,
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()
  const callbackUrl = `/${searchParams.get('callbackUrl') || ''}`

  const handleSignIn = () =>
    startTransition(() => signInAction('google', {redirect: true, callbackUrl}))

  return (
    <button
      className="button"
      type="button"
      onClick={handleSignIn}
      {...props}
      disabled={disabled || isPending}
    >
      {children}
    </button>
  )
}
