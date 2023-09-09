import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(req) {

        if (req.nextUrl.pathname.startsWith("/admin") && req.nextauth.token?.role != "admin") {
            return NextResponse.rewrite(new URL('/auth?callbackUrl=' + req.nextUrl.pathname, req.url));
        };

    }, {
    callbacks: {
        authorized: ({ token }) => !!token
    }
}
)

export const config = { matcher: ["/admin/:path*", "/account/:path*", "/checkout/:path*"] }