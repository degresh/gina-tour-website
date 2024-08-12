import { sql } from "@vercel/postgres";

export async function createPackageFacility(
  packageId: number,
  facilityId: number,
  status: string
): Promise<boolean> {
  try {
    await sql`
        INSERT INTO paket_fasilitas (paket_id, fasilitas_id, status)
        VALUES (${packageId}, ${facilityId}, ${status})
    `;

    return true;
  } catch (error) {
    console.error("[PACKAGE] Database Error", error);
    return false;
  }
}