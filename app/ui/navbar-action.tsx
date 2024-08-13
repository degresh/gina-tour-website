import { Account } from "@/app/lib/definitions";
import { decodeFromBase64 } from "next/dist/build/webpack/loaders/utils";
import Link from "next/link";

const menus = [
    {
        href: "/login",
        name: "Login",
        role: null
    },
    {
        href: "/registration",
        name: "Registration",
        role: null
    },
    {
        href: "/package-registration",
        name: "Pendaftaran",
        role: "pengguna"
    },
    {
        href: "/admin",
        name: "Admin",
        role: "admin"
    }
]

export default function NavbarAction() {
    const localStorage = window.localStorage.getItem("token");

    if (localStorage) {
        const userData = JSON.parse(decodeFromBase64(localStorage));
        const availableMenus = menus.filter(menu => menu.role === userData["role"]);

        return (
            <div className="flex items-center">
                {availableMenus.map((menu, index) => (
                    <Link
                        key={index}
                        href={menu.href}
                        passHref
                    >
                        <button
                            type="button"
                            className="me-3 rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
                        >
                            {menu.name}
                        </button>
                    </Link>
                ))}
            </div>
        )
    }

    return (
        <div className="flex items-center">
            <Link href="/login" passHref>
                <button
                    type="button"
                    className="me-3 rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
                >
                    Login
                </button>
            </Link>
            <Link href="/registration">
                <button
                    type="button"
                    className="me-3 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                >
                    Daftar
                </button>
            </Link>
        </div>
    )
}