import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { sessionOptions, SessionData } from "@/lib/session";

export async function GET(request: NextRequest) {
    try {
        const session = await getIronSession<SessionData>(request, NextResponse.next(), sessionOptions);
        if (!session.admin) {
            return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
        }
        return NextResponse.json({ admin: session.admin });
    } catch (error) {
        console.error("Session error:", error);
        return NextResponse.json({ error: "Failed to get session" }, { status: 500 });
    }
}
