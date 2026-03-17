import { NextResponse } from 'next/server'

export function middleware(request) {
    const { pathname } = request.nextUrl

    // Allow home page and Next.js internal routes
    if (
        pathname === '/' ||
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/static') ||
        pathname.includes('.') // Allow static files (images, fonts, etc.)
    ) {
        return NextResponse.next()
    }

    // Redirect all other routes to home page
    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
