export type ServerError = {
  digest: string | number
} & Error

export type ErrorCompProps = Readonly<{
  error: ServerError
  reset: () => void
}>
