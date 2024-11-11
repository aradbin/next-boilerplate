import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

const protectedRoutes = ['/dashboard']
const publicRoutes = ['/login', '/register', '/']

export default async function middleware(req: NextRequest) {
  const currentRoute = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(currentRoute)
  const isPublicRoute = publicRoutes.includes(currentRoute)

  const session = cookies().get('session')?.value

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }

  return NextResponse.next()
}
