import { sql } from "@vercel/postgres";

export async function createPackageHotel(
    packageId: number,
    hotelId: number
): Promise<boolean> {
    try {
        await sql`
            INSERT INTO paket_hotel (paket_id, hotel_id)
            VALUES (${packageId}, ${hotelId})
        `;

        return true;
    } catch (error) {
        console.error("[PACKAGE] Database Error", error);
        return false;
    }
}