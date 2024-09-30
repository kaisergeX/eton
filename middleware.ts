import {auth} from '@/auth'
import {
  NextResponse,
  type MiddlewareConfig,
  type NextRequest,
} from 'next/server'

const redirectToSignIn = (req: NextRequest) =>
  NextResponse.redirect(new URL('/login', req.nextUrl.origin))

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== '/login') {
    return redirectToSignIn(req)
  }
})

export const config: MiddlewareConfig = {
  // Skip all paths that should not be authenticated
  matcher: ['/((?!api/auth/.*|_next|.*\\..*).*)'],
}
