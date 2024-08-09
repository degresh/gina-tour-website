import { getAccountByEmail } from "@/app/lib/database/account";
import { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login'
    },
    callbacks: {
        authorized({ auth, request: { nextUrl }}) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/admin');

            if (isOnDashboard) {
                return isLoggedIn;
            } else if (isLoggedIn) {
                getAccountByEmail(auth.user.email)
                    .then((account) => {
                        if (account.role == "pengguna") {
                            return Response.redirect(new URL("/", nextUrl));
                        } else {
                            return Response.redirect(new URL("/admin", nextUrl));
                        }
                    });
            }

            return true;
        }
    },
    providers: []
} satisfies NextAuthConfig;