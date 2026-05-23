import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { connectDB } from "@/lib/mongodb";
import { sessionOptions, SessionData, hashPassword } from "@/lib/auth";
import { Admin } from "@/lib/models/Admin";

export async function POST(request: NextRequest) {
    try {
        const session = await getIronSession<SessionData>(request, NextResponse.next(), sessionOptions);
        if (!session.admin) {
            return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
        }

        const body = await request.json();
        const { name, email, password } = body;

        if (!name || !email || !password) {
            return NextResponse.json({ error: "Name, email, and password are required" }, { status: 400 });
        }

        if (password.length < 6) {
            return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 });
        }

        await connectDB();

        const existing = await Admin.findOne({ email });
        if (existing) {
            return NextResponse.json({ error: "An admin with this email already exists" }, { status: 409 });
        }

        const hashed = await hashPassword(password);
        await Admin.create({ name, email, password: hashed });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Create admin error:", error);
        return NextResponse.json({ error: "Failed to create admin" }, { status: 500 });
    }
}
