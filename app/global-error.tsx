'use client'

import type {ErrorCompProps} from '@/types'

export default function GlobalError({error, reset}: ErrorCompProps) {
  return (
    <html lang="en">
      <body className="flex-center font-inter h-[100dvh] flex-col gap-4">
        <div className="text-center">
          <h1>Something went wrong!</h1>
          <p className="text-center text-sm text-zinc-400">{error.digest}</p>
        </div>

        <button className="button" onClick={() => reset()}>
          Try again
        </button>
      </body>
    </html>
  )
}
