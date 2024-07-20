// components/Footer.js

import Link from "next/link";
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-zinc-50 text-center text-surface light:bg-neutral-700 light:text-black">
      <div className="container pt-9">
        {/* Social media icons container */}
        <div className="mb-6 flex justify-center space-x-2">
          <Link
            href="#!"
            type="button"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 light:text-black light:hover:bg-secondary-900"
            data-twe-ripple-init>
            <span className="[&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 320 512">
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </span>
          </Link>

          <Link
            href="#!"
            type="button"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 light:text-black light:hover:bg-secondary-900"
            data-twe-ripple-init>
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </span>
          </Link>

          <Link
            href="#!"
            type="button"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 light:text-black light:hover:bg-secondary-900"
            data-twe-ripple-init>
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 488 512">
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
            </span>
          </Link>

          <Link
            href="#!"
            type="button"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 light:text-black light:hover:bg-secondary-900"
            data-twe-ripple-init>
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </span>
          </Link>

          <Link
            href="#!"
            type="button"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 light:text-black light:hover:bg-secondary-900"
            data-twe-ripple-init>
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 384 512">
                <path d="M192 24C85.3 24 0 109.3 0 216c0 103.2 70.5 188.3 165.5 212.1-2.4-16.7-3.6-33.8-3.6-51.1 0-50.7 17.6-83.8 51.7-83.8 23.6 0 37.1 17.7 37.1 39.6 0 24.4-13.7 55.3-36.6 55.3-15.8 0-27.1-9.8-31.5-19.1-1.6-4.1-3.2-8.5-5.3-12.5-8.8-18.7-21.8-38.8-38.1-56.8-10.8-11.5-20.8-22.4-26.6-28.2 0 0 0 0 0 0 0 0-3.7-0.7-6.6-0.7-17.2 0-32.7 11.6-42.6 22.4-7.1 7.6-16.4 15.7-24.4 19.9-4.2 1.8-6.5 1.8-6.5 1.8-4.7 0-10.5 1.1-14.8 2.2-2.9 0.7-6.3 0.4-8.4-1.3-4.2-3-7.2-7.9-7.2-13.5 0-0.1 0-0.2 0-0.3-0.3-22.8-0.2-39.1-0.2-39.1s0-39.8 8.1-49.6c14.4-15.2 32.5-15.2 50.8-15.2 21.7 0 31.2 2.6 31.2 2.6 1.4 2.4 4.2 8.1 6.2 12.6 13.5 27.5 37.5 58.1 55.8 76.6 15.4 15.8 27.9 23.3 43.4 23.3 27.1 0 34.7-12.8 34.7-30.2 0-21.6-10.2-39.3-37.1-39.3-26.7 0-40.4 17.5-40.4 50.1 0 4.8 0.3 9.7 0.8 14.4-1.8 0.6-3.6 1.2-5.4 1.8-12.1 4.4-23.6 6.6-35.2 6.6-27.5 0-41.6-11.6-41.6-40.1 0-15.5 8.1-26.8 26.7-26.8 6.8 0 13.4 1.7 19.4 4.8 12.2 5.7 21.7 18.1 27.5 28.4 11.8 21.6 15.9 35.3 15.9 60.8 0 30.3-16.4 50.6-51.2 50.6-16.7 0-36.4-4.7-56.2-13.6-6.7-2.7-12.4-5.9-15.6-9.7 0 0 0 0 0 0-0.3-0.2-0.5-0.4-0.7-0.6-12.4-12.4-12.4-34.6-12.4-40.5z" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Footer content */}
        <div className="mb-6 text-sm text-neutral-700 light:text-neutral-200">
          <p>&copy; {new Date().getFullYear()} PT. Harapan Gina Pratama. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
