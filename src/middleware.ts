import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

// const publicRoutes = ['/']
const authRoutes = ['/login', '/register']
const protectedRoutes = ['/dashboard']

export default async function middleware(req: NextRequest) {
  const currentRoute = req.nextUrl.pathname
  // const isPublicRoute = publicRoutes.includes(currentRoute)
  const isAuthRoute = authRoutes.includes(currentRoute)
  const isProtectedRoute = protectedRoutes.includes(currentRoute)

  const session = cookies().get('access')?.value

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }

  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  }

  return NextResponse.next()
}
