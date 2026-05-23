import { SessionOptions } from "iron-session";
import { connectDB } from "./mongodb";
import bcryptjs from "bcryptjs";

interface Admin {
    id: string;
    email: string;
    name: string;
}

export interface SessionData {
    admin?: Admin;
}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            IRON_PASSWORD: string;
        }
    }
}

export const sessionOptions: SessionOptions = {
    password: process.env.IRON_PASSWORD || "a-secret-with-at-least-32-characters-long",
    cookieName: "admin_session",
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        sameSite: "lax",
    },
};

const DEFAULT_ADMIN = {
    id: "1",
    email: "admin@cfilihtc.com",
    password: "admin@123", // Default password, should be changed
    name: "Super Admin",
};

export async function verifyPassword(plainPassword: string, hashedPassword: string) {
    return await bcryptjs.compare(plainPassword, hashedPassword);
}

export async function hashPassword(password: string) {
    return await bcryptjs.hash(password, 10);
}

export async function authenticateAdmin(email: string, password: string): Promise<Admin | null> {
    try {
        // For demo, use default admin
        if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
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
