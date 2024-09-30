import {cn} from '@/utils'
import {IconX} from '@tabler/icons-react'
import type {HTMLAttributes, MouseEventHandler, PropsWithChildren} from 'react'

type DialogHeaderProps = PropsWithChildren<{
  hideCloseButton?: boolean
  onClose?: MouseEventHandler<HTMLButtonElement>
}> &
  HTMLAttributes<HTMLElement>

export default function DialogHeader({
  className,
  onClose,
  hideCloseButton = false,
  children,
  ...dialogHeaderAttrs
}: DialogHeaderProps) {
  return (
    <header
      className={cn('flex-center-between gap-4 p-4', className)}
      {...dialogHeaderAttrs}
    >
      {children}
      {hideCloseButton || (
        <button type="button" onClick={onClose}>
          <IconX size="1.5rem" />
        </button>
      )}
    </header>
  )
}
