import { connectDB } from "./mongodb";
import bcryptjs from "bcryptjs";
import { Admin } from "./models/Admin";
import type { AdminData, SessionData } from "./session";
import { sessionOptions } from "./session";

export type { AdminData, SessionData };
export { sessionOptions };

const DEFAULT_ADMIN = {
    id: "1",
    email: "admin@cfilihtc.com",
    password: "admin@123",
    name: "Super Admin",
};

export async function verifyPassword(plainPassword: string, hashedPassword: string) {
    return await bcryptjs.compare(plainPassword, hashedPassword);
}

export async function hashPassword(password: string) {
    return await bcryptjs.hash(password, 10);
}

export async function seedDefaultAdmin() {
    try {
        await connectDB();
        const existing = await Admin.findOne({ email: DEFAULT_ADMIN.email });
        if (!existing) {
            const hashed = await hashPassword(DEFAULT_ADMIN.password);
            await Admin.create({
                email: DEFAULT_ADMIN.email,
                password: hashed,
                name: DEFAULT_ADMIN.name,
            });
        }
    } catch (error) {
        console.error("Seed admin error:", error);
    }
}

export async function authenticateAdmin(email: string, password: string): Promise<AdminData | null> {
    try {
        await connectDB();

        const admin = await Admin.findOne({ email });
        if (admin) {
            const valid = await verifyPassword(password, admin.password);
            if (!valid) return null;
            return {
                id: admin._id.toString(),
                email: admin.email,
                name: admin.name,
            };
        }

        if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
            await seedDefaultAdmin();
            return {
                id: DEFAULT_ADMIN.id,
                email: DEFAULT_ADMIN.email,
                name: DEFAULT_ADMIN.name,
            };
        }

        return null;
    } catch (error) {
        console.error("Auth error:", error);
        return null;
    }
}
