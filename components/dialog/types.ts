import type {PropsWithChildren, DialogHTMLAttributes} from 'react'

type DialogCustomProps = {
  backdropProps?: {
    /** @default rgba(0,0,0,0.4) */
    background?: string
    /** @default 0 */
    blur?: string | number
    /** @default 1 */
    opacity?: number
  }
  /**
   * @default "modal"
   * @description
   * `modal`
   *
   * Act as a normal dialog.
   * It will be rendered on the top-layer with a backdrop.
   *
   * Everything other than the drawer and
   * its contents will be ignored by the browsers and can't be interact with.
   * ___
   * `non-modal`
   *
   * It has no backdrop and also doesn't render on the top-layer.
   * It can not be closed by pressing the `ESC` key.
   *
   * The content below the non-modal drawer can be interacted.
   *
   * {@link https://developer.mozilla.org/docs/Web/HTML/Element/dialog#accessibility_considerations Read more}
   *
   */
  drawerMode?: 'non-modal' | 'modal'
  /**
   * If `true`, disable a default behavior of `<dialog>` element:
   *
   * Browser won't autofocus on the first nested focusable element anymore.
   * @default false
   */
  preventFocus?: boolean
  /**
   * If `true`, the drawer won't close when users press `Escape` key or click/tap on the backdrop.
   * @default false
   */
  preventClose?: boolean
}

export type DialogProps = PropsWithChildren<
  DialogCustomProps &
    Omit<
      DialogHTMLAttributes<HTMLDialogElement>,
      keyof DialogCustomProps | 'tabIndex' | 'autoFocus'
    >
>
