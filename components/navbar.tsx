'use client'

import {useState, type ReactNode} from 'react'
import Dialog from './dialog'

export default function Navbar({localeSwitcher}: {localeSwitcher?: ReactNode}) {
  const [openLocale, setOpenLocale] = useState(false)

  return (
    <>
      <div>
        <button
          className="button-secondary"
          type="button"
          onClick={() => setOpenLocale(true)}
        >
          🌏
        </button>
      </div>

      <Dialog open={openLocale} onClose={() => setOpenLocale(false)}>
        <Dialog.Header
          className="font-semibold"
          onClose={() => setOpenLocale(false)}
        >
          Choose your locale
        </Dialog.Header>
        <article className="p-4">{localeSwitcher}</article>
        <Dialog.Footer>Footer</Dialog.Footer>
      </Dialog>
    </>
  )
}
