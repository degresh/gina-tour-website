"use client";

import {
    ArrowUturnLeftIcon,
    BuildingOffice2Icon,
    BuildingOfficeIcon,
    ChartBarIcon,
    CreditCardIcon,
    IdentificationIcon,
    RocketLaunchIcon,
    Square3Stack3DIcon,
    UserGroupIcon
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    {
        name: 'Dashboard',
        href: '/admin',
        icon: ChartBarIcon
    },
    {
        name: 'Hotel',
        href: '/admin/hotel',
        icon: BuildingOfficeIcon
    },
    {
        name: 'Transportasi',
        href: '/admin/transportation',
        icon: RocketLaunchIcon
    },
    {
        name: 'Fasilitas',
        href: '/admin/facility',
        icon: BuildingOffice2Icon
    },
    {
        name: 'Metode Pembayaran',
        href: '/admin/payment-method',
        icon: CreditCardIcon
    },
    {
        name: 'Paket',
        href: '/admin/package',
        icon: Square3Stack3DIcon
    },
    {
        name: 'Pendaftaran',
        href: '/admin/registration',
        icon: IdentificationIcon,
    },
    {
        name: 'Pengembalian Dana',
        href: '/admin/refund',
        icon: ArrowUturnLeftIcon,
    },
    {
        name: 'Petugas',
        href: '/admin/officer',
        icon: UserGroupIcon
    },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                            {
                                "bg-sky-100 text-blue-600": pathname === link.href,
                            },
                        )}
                    >
                        <LinkIcon className="w-6"/>
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}