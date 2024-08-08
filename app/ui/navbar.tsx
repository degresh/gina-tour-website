"use client";

import NavbarAction from "@/app/ui/navbar-action";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 flex w-full flex-wrap items-center justify-between bg-zinc-50 shadow-dark-mild light:bg-neutral-700 ">
      <div className="flex w-full flex-wrap items-center justify-between ">
        <div>
          <Link href="/">
            <Image
              className="me-2"
              src="/logo gina tour.png"
              alt="TE Logo"
              width={64}
              height={64}
              loading="lazy"
            />
            {/*<a className="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0">*/}
            {/*  */}
            {/*</a>*/}
          </Link>
        </div>

        {/* Hamburger button for mobile view */}
        <button
          className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarSupportedContent4"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
          </span>
        </button>

        {/* Collapsible navbar container */}
        <div
          className={`${isOpen ? "block" : "hidden"} mt-2 flex-grow basis-[100%] items-center lg:mt-0 lg:flex lg:basis-auto`}
          id="navbarSupportedContent4"
        >
          {/* Left links */}
          <ul className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row">
            {/* Home link */}
            <li className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2">
              <Link href="/">
                Dashboard
                {/*<a className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2">*/}
                {/*  */}
                {/*</a>*/}
              </Link>
            </li>
          </ul>
          <NavbarAction />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
