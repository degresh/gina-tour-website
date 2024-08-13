import { Account } from "@/app/lib/definitions";
import { sql } from "@vercel/postgres";

export async function getAccountByEmail(email: string): Promise<Account | null> {
    try {
        const account = await sql<Account>`
     SELECT * FROM akun WHERE email = ${email} LIMIT 1;
    `;
        return account.rows[0];
    } catch (error) {
        console.error("[ACCOUNT] Database Error", error);
        throw new Error('Failed to fetch account.');
    }
}

export async function createAccount(account: Account): Promise<boolean> {
    try {
        await sql`
            INSERT INTO akun (foto, email, telepon, nama, password, role)
            VALUES (${account.foto}, ${account.email}, ${account.telepon}, ${account.nama}, ${account.password}, ${account.role})    
        `;
    } catch (error) {
        console.error("[ACCOUNT] Database Error", error);
        return false;
    }
}