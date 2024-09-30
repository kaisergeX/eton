import {
  forwardRef,
  useCallback,
  useEffect,
  type MouseEventHandler,
  type ReactEventHandler,
} from 'react'
import {cn, useDOMRef} from '@/utils'
import {useBackDropStyling} from './useBackDropStyling'
import DialogHeader from './dialog-header'
import type DialogFooter from './dialog-footer'
import type {DialogProps} from './types'

const Dialog = forwardRef<HTMLDialogElement, DialogProps>((props, ref) => {
  const {
    drawerMode = 'modal',
    open = false,

    preventFocus = false,
    preventClose = false,

    className,
    backdropProps,

    onMouseDown,
    children,
    ...htmlDialogAttributes
  } = props
  const dialogRef = useDOMRef(ref)

  useBackDropStyling(dialogRef, backdropProps)

  const handleCloseDrawer = useCallback(
    (dialogReturnValue?: string) => {
      if (typeof document === 'undefined' || !dialogRef.current) {
        return
      }

      dialogRef.current.close(dialogReturnValue)
    },
    [dialogRef],
  )

  const handleMouseDown = useCallback<MouseEventHandler<HTMLDialogElement>>(
    (e) => {
      if (!dialogRef.current) {
        return
      }

      onMouseDown?.(e)
      if (!(e.target instanceof HTMLDialogElement) || preventClose) {
        return
      }

      // Close the drawer if the user click to the dialog elements itself (eg: the backdrop)
      if (e.target.nodeName === 'DIALOG') {
        handleCloseDrawer('dismiss')
      }
    },
    [dialogRef, onMouseDown, preventClose, handleCloseDrawer],
  )

  const handleCancelDrawer = useCallback<ReactEventHandler<HTMLDialogElement>>(
    (e) => preventClose && e.preventDefault(),
    [preventClose],
  )

  useEffect(() => {
    if (typeof document === 'undefined' || !dialogRef.current) {
      return
    }

    const DrawerElement = dialogRef.current
    if (open) {
      if (preventFocus) {
        DrawerElement.setAttribute('inert', '')
      }

      DrawerElement[drawerMode === 'modal' ? 'showModal' : 'show']()
      DrawerElement.removeAttribute('inert')
      return
    }

    handleCloseDrawer()
  }, [open, dialogRef, preventFocus, handleCloseDrawer, drawerMode])

  return (
    <dialog
      {...htmlDialogAttributes}
      ref={dialogRef}
      className={cn('dialog rounded-lg', className)}
      onMouseDown={handleMouseDown}
      onCancel={handleCancelDrawer}
    >
      {children}
    </dialog>
  )
})

Dialog.displayName = 'Dialog'

export default Dialog as typeof Dialog & {
  Header: typeof DialogHeader
  Footer: typeof DialogFooter
}
