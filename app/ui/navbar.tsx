"use client";

import NavbarAction from "@/app/ui/navbar-action";
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
    return (
        <nav className="flex w-full items-center justify-between bg-zinc-50">
            <Link href="/">
                <Image
                    className="me-2"
                    src="/logo gina tour.png"
                    alt="TE Logo"
                    width={64}
                    height={64}
                    loading="lazy"
                />
            </Link>
            <NavbarAction/>
        </nav>
    );
};

export default Navbar;
