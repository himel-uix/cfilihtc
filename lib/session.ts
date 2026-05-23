import { SessionOptions } from "iron-session";

export interface AdminData {
    id: string;
    email: string;
    name: string;
}

export interface SessionData {
    admin?: AdminData;
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
