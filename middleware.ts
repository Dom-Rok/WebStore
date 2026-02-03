import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'


export async function middleware(request: NextRequest) {
    // Get the pathname of the request (e.g. /product, /api/products)
    const path = request.nextUrl.pathname

    // Define protected routes that require authentication
    const isProtectedRoute =
        path.startsWith('/product')
        //|| path.startsWith('/api/products')  //nefunguju suggested



    // Skip  nechranenych
    if (!isProtectedRoute) {
        return NextResponse.next()
    }

    // Get token
    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET
    })
    console.log("token:",token)
    console.log('Protected route:', isProtectedRoute);
     // Redirect
    if (!token && isProtectedRoute) {
        const url = new URL('/login', request.url)
         url.searchParams.set('callbackUrl', request.url)
        return NextResponse.redirect(url)
    }


    return NextResponse.next()
}


export const config = {
    matcher: [

        '/((?!_next/static|_next/image|favicon.ico|public).*)',
    ],
}