import type { Metadata } from "next";
import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _hindSiliguri = Hind_Siliguri({
    subsets: ["bengali"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "CFILIHTC - Men's Supplement Solutions",
    description: "Premium men's vitamins and supplements for optimal health and vitality",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <head>
                <Script
                    id="gtm-data-layer"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            window.dataLayer.push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                        `,
                    }}
                />
                <Script
                    id="gtm-script"
                    strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtm.js?id=GTM-NVB42XZB"
                />
            </head>
            <body className="font-sans antialiased">
                {children}
                <Toaster />
                {process.env.NODE_ENV === "production" && <Analytics />}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-NVB42XZB"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    />
                </noscript>
            </body>
        </html>
    );
}
