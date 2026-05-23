import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { sessionOptions, SessionData } from "@/lib/session";

export async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    if (pathname.startsWith("/dashboard")) {
        const session = await getIronSession<SessionData>(request, NextResponse.next(), sessionOptions);

        if (!session.admin) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

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
