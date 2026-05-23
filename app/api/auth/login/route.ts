import { NextRequest, NextResponse } from "next/server";
import { authenticateAdmin, sessionOptions, SessionData } from "@/lib/auth";
import { getIronSession } from "iron-session";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
        }

        const admin = await authenticateAdmin(email, password);

        if (!admin) {
            return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
        }

        const response = NextResponse.json({ success: true, admin });
        const session = await getIronSession<SessionData>(request, response, sessionOptions);
        session.admin = admin;
        await session.save();

        return response;
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json({ error: "Failed to login" }, { status: 500 });
    }
}
