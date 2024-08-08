import { Providers } from "@/app/providers";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import "@/app/ui/global.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Gina Tour",
    description: "Tour & Travel Company.",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SessionProvider>
            <html lang="en">
            <body className={inter.className}>
            <Providers>
                {children}
            </Providers>

            </body>
            </html>
        </SessionProvider>
    );
}
