import { PaymentMethod } from "@/app/lib/entity/payment-method";
import { PaymentMethodCreateRequest } from "@/app/lib/entity/payment-method-create-request";
import { QueryResultRow, sql } from "@vercel/postgres";

const ITEMS_PER_PAGE: number = 10;

export async function createPaymentMethod(request: PaymentMethodCreateRequest): Promise<boolean> {
    try {
        await sql`
            INSERT INTO payment_method (image_url, bank_name, account_name, account_number)
            VALUES (${request.imageUrl}, ${request.bankName}, ${request.accountName}, ${request.accountNumber})
        `;
        return true;
    } catch (error) {
        console.error("[PAYMENT METHOD] Database Error", error);
        return false;
    }
}

export async function getPaymentMethods(keyword: string, page: number): Promise<PaymentMethod[]> {
    const offset = (page - 1) * ITEMS_PER_PAGE;

    try {
        const query = await sql`
            SELECT * FROM payment_method
            WHERE bank_name ILIKE ${`%${keyword}%`}
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;

        if (query.rowCount > 0) {
            return query.rows.map(convertRowToPaymentMethod);
        } else {
            return null;
        }
    } catch (error) {
        console.error("[PAYMENT METHOD] Database Error", error);
        return null;
    }
}

export async function getPaymentMethodPages(keyword: string): Promise<number> {
    try {
        const query = await sql`
            SELECT COUNT(*) FROM payment_method 
            WHERE name ILIKE ${`%${keyword}%`}
        `;

        return Math.ceil(Number(query.rows[0].count) / ITEMS_PER_PAGE)
    } catch (error) {
        console.error("[PAYMENT METHOD] Database Error", error);
        return 0;
    }
}

export async function deletePaymentMethodById(paymentMethodId: number): Promise<boolean> {
    try {
        await sql`
            DELETE FROM payment_method
            WHERE id = ${paymentMethodId};
        `;

        return true;
    } catch (error) {
        console.error("[PAYMENT METHOD] Database Error", error);
        return false;
    }
}

/**
 * Internal method
 */

function convertRowToPaymentMethod(row: QueryResultRow): PaymentMethod {
    return {
        id: row["id"],
        imageUrl: row["image_url"],
        bankName: row["bank_name"],
        accountName: row["account_name"],
        accountNumber: row["account_number"]
    }
}