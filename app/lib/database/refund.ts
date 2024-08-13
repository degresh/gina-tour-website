import { Refund } from "@/app/lib/entity/refund";
import { RefundCreateRequest } from "@/app/lib/entity/refund-create-request";
import { QueryResultRow, sql } from "@vercel/postgres";

export async function createRefund(request: RefundCreateRequest): Promise<boolean> {
    try {
        await sql`
            INSERT INTO refund (
                registration_id,
                reason,
                status,
                reject_reason,
                url
            )
            VALUES (
                ${request.registrationId},
                ${request.reason},
                ${request.status},
                ${request.rejectReason},
                ${request.url}
            );
        `;
        return true;
    } catch (error) {
        console.error("[REFUND] Database Error", error);
        return false;
    }
}

export async function getRefundByRegistrationId(registrationId: number): Promise<Refund[] | null> {
    try {
        const query = await sql`
            SELECT * FROM refund
            WHERE registration_id = ${registrationId}
        `;

        if (query.rows.length > 0) {
            return query.rows.map(convertRowToRefund);
        } else {
            return null;
        }
    } catch (error) {
        console.error("[REFUND] Database Error", error);
        return null;
    }
}

export async function updateRefundStatusById(id: number, newStatus: string): Promise<boolean> {
    try {
        await sql`
            UPDATE refund
            SET status = ${newStatus}
            WHERE id = ${id}
        `;

        return true;
    } catch (error) {
        console.error("[REFUND] Database Error", error);
        return null;
    }
}

/**
 * Internal methods
 */

function convertRowToRefund(row: QueryResultRow): Refund {
    return {
        id: row["id"],
        registrationId: row["registration_id"],
        reason: row["reason"],
        status: row["status"],
        rejectReason: row["reject_reason"],
        url: row["url"],
    }
}