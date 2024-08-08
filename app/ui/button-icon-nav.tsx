import Link from "next/link";
import { ForwardRefExoticComponent, SVGProps } from "react";

export default function ButtonIconNav({ href, icon }: {
    href: string;
    icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref">>;
}) {
    const IconButton = icon;
    return (
        <Link href={href} className="rounded-md border p-2 hover:bg-gray-100">
            <IconButton className="w-5"/>
        </Link>
    );
}