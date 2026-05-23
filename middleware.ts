import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { sessionOptions, SessionData } from "@/lib/auth";

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Protect dashboard routes
    if (pathname.startsWith("/dashboard")) {
        const session = await getIronSession<SessionData>(request, NextResponse.next(), sessionOptions);

        if (!session.admin) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    // Redirect logged-in users from login page to dashboard
    if (pathname === "/login") {
        const session = await getIronSession<SessionData>(request, NextResponse.next(), sessionOptions);

        if (session.admin) {
            return NextResponse.redirect(new URL("/dashboard", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/login"],
};
