import { getAccountByEmail } from "@/app/lib/database/account";
import { authConfig } from "@/auth.config";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({
                        email: z.string().email(),
                        password: z.string().min(6)
                    })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data
                    const account = await getAccountByEmail(email);

                    if (account?.password != password) {
                        return null;
                    }

                    if (!account) return null;

                    return account;
                }

                console.log('Invalid credentials');
                return null;
            },
        }),
    ],
});