import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { connectDB } from "@/lib/mongodb";
import { sessionOptions, SessionData, hashPassword } from "@/lib/auth";
import { Admin } from "@/lib/models/Admin";

export async function PUT(request: NextRequest) {
    try {
        const sessionResponse = new NextResponse();
        const session = await getIronSession<SessionData>(request, sessionResponse, sessionOptions);

        if (!session.admin) {
            return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
        }

        const body = await request.json();
        const { email, name, currentPassword, newPassword } = body;

        await connectDB();

        const admin = await Admin.findById(session.admin.id);
        if (!admin) {
            return NextResponse.json({ error: "Admin not found" }, { status: 404 });
        }

        const updates: Record<string, string> = {};

        if (email && email !== admin.email) {
            const existing = await Admin.findOne({ email, _id: { $ne: admin._id } });
            if (existing) {
                return NextResponse.json({ error: "Email already in use" }, { status: 409 });
            }
            updates.email = email;
        }

        if (name) {
            updates.name = name;
        }

        if (newPassword) {
            if (!currentPassword) {
                return NextResponse.json({ error: "Current password is required" }, { status: 400 });
            }
            const bcryptjs = await import("bcryptjs");
            const valid = await bcryptjs.compare(currentPassword, admin.password);
            if (!valid) {
                return NextResponse.json({ error: "Current password is incorrect" }, { status: 401 });
            }
            updates.password = await hashPassword(newPassword);
        }

        if (Object.keys(updates).length === 0) {
            return NextResponse.json({ error: "No changes provided" }, { status: 400 });
        }

        await Admin.findByIdAndUpdate(admin._id, updates);

        const updatedAdmin = {
            id: session.admin.id,
            email: updates.email || session.admin.email,
            name: updates.name || session.admin.name,
        };

        session.admin = updatedAdmin;
        await session.save();

        const json = NextResponse.json({ success: true, admin: updatedAdmin });
        const cookieHeader = sessionResponse.headers.get("Set-Cookie");
        if (cookieHeader) {
            json.headers.set("Set-Cookie", cookieHeader);
        }
        return json;
    } catch (error) {
        console.error("Profile update error:", error);
        return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
    }
}
