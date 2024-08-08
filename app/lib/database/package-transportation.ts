import { sql } from "@vercel/postgres";

export async function createPackageTransportation(
    packageId: number,
    transportationId: number
): Promise<boolean> {
    try {
        await sql`
            INSERT INTO paket_transportation (paket_id, transportation_id)
            VALUES (${packageId}, ${transportationId})
        `;

        return true;
    } catch (error) {
        console.error("[PACKAGE] Database Error", error);
        return false;
    }
}