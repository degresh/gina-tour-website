import { Payment } from "@/app/lib/entity/payment";
import { PaymentCreateRequest } from "@/app/lib/entity/payment-create-request";
import { QueryResultRow, sql } from "@vercel/postgres";

export async function createPayment(request: PaymentCreateRequest) {
    try {
        await sql`
            INSERT INTO payment (
                registration_id, 
                amount, 
                status, 
                reject_reason, 
                type, 
                url
            ) 
            VALUES (
                ${request.registrationId}, 
                ${request.amount}, 
                ${request.status}, 
                ${request.rejectReason}, 
                ${request.type}, 
                ${request.url}
            )
        `;

        return true;
    } catch (error) {
        console.error("[PAYMENT] Database Error", error);
        return false;
    }
}

export async function getPaymentByPackageRegistrationId(registrationId: number): Promise<Payment[] | null> {
    try {
        const query = await sql`
            SELECT * FROM payment 
            WHERE registration_id = ${registrationId}
        `;

        if (query.rows.length > 0) {
            return query.rows.map(convertRowToPayment);
        } else {
            return null;
        }
    } catch (error) {
        console.error("[PAYMENT] Database Error", error);
        return null;
    }
}

export async function getPaymentById(paymentId: number): Promise<Payment | null> {
    try {
        const query = await sql`
            SELECT * FROM payment 
            WHERE id = ${paymentId}
        `;

        if (query.rows.length > 0) {
            return convertRowToPayment(query.rows[0]);
        } else {
            return null;
        }
    } catch (error) {
        console.error("[PAYMENT] Database Error", error);
        return null;
    }
}

/**
 * Internal Methods
 */

function convertRowToPayment(row: QueryResultRow): Payment {
    return {
        id: row["id"],
        registrationId: row["registration_id"],
        amount: row["amount"],
        status: row["status"],
        rejectReason: row["reject_reason"],
        type: row["type"],
        url: row["url"],
    }
}