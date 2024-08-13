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

            // if (isLoggedIn && isOnAdmin) {
            //     getAccountByEmail(auth.user.email)
            //     .then((account) => {
            //         if (account.role == "admin") {
            //             return Response.redirect(new URL("/admin", nextUrl));
            //         } else {
            //         }
            //     });
            // } else if (isLoggedIn) {
            //     return Response.redirect(new URL(nextUrl.pathname, nextUrl));
            // }


            return true;
        }
    },
    providers: []
} satisfies NextAuthConfig;