import { sql } from "@vercel/postgres";

export async function getFacilityCount() {
    try {
        const query = await sql`
            SELECT COUNT(*) FROM fasilitas
        `;

        return Number(query.rows[0].count);
    } catch (error) {
        console.error("[TRANSPORTATION] Database Error", error);
    }
}