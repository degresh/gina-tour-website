import { getAccountByEmail } from "@/app/lib/database/account";
import { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login'
    },
    callbacks: {
        authorized({auth, request: {nextUrl}}) {
            const isLoggedIn = !!auth?.user;
            const isOnAdmin = nextUrl.pathname.startsWith("/admin");

            // if (isOnAdmin) {
            //     return isLoggedIn;
            // } else if (isLoggedIn) {
            //     // return Response.redirect(new URL("/admin", nextUrl));
            // }

            return true;
        }
    },
    providers: []
} satisfies NextAuthConfig;