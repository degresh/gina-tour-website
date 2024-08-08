import { Providers } from "@/app/providers";
import Navbar from "@/app/ui/navbar";
import Footer from "@/app/ui/user/footer";
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
            <body className='flex flex-col'>
            <Providers>
                <header className="flex-none">
                    <Navbar />
                </header>
                <main className="grow">
                    {children}
                </main>
                <footer className="flex-none">
                    <Footer />
                </footer>
            </Providers>

            </body>
            </html>
        </SessionProvider>
    );
}
