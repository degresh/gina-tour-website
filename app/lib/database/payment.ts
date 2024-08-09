import { PaymentCreateRequest } from "@/app/lib/entity/payment-create-request";
import { sql } from "@vercel/postgres";

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