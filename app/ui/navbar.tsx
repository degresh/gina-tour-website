"use client";

import NavbarAction from "@/app/ui/navbar-action";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 z-50 flex w-full items-center justify-between bg-zinc-50">
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
