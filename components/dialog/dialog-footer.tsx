import type {HTMLAttributes, PropsWithChildren} from 'react'

export default function DialogFooter({
  children,
  ...dialogFooterAttrs
}: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  return (
    <footer className="p-4" {...dialogFooterAttrs}>
      {children}
    </footer>
  )
}
