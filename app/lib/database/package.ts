import { TourPackage } from "@/app/lib/definitions";
import { sql } from "@vercel/postgres";

const ITEMS_PER_PAGE: number = 10;

export async function createPackage(tourPackage: TourPackage): Promise<number | null> {
  try {
    console.log("hello from create packages")
    console.log(tourPackage);
    const query = await sql`
        INSERT INTO paket (nama, deskripsi)
        VALUES (${tourPackage.nama}, ${tourPackage.deskripsi})
        RETURNING id
    `;

    return query.rows[0].id;
  } catch (error) {
    console.error("[PACKAGE] Database Error", error);
    return null;
  }
}

export async function getPackages(
  query: string,
  currentPage: number
): Promise<TourPackage[]> {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const packages = await sql<TourPackage>`
        SELECT * FROM paket
        WHERE nama ILIKE ${`%${query}%`}
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return packages.rows;
  } catch (error) {
    console.error("[PACKAGE] Database Error", error);
    throw new Error('Failed to fetch packages.');
  }
}

export async function getPackageById(packageId: number): Promise<TourPackage> {
  try {
    const data = await sql<TourPackage>`
        SELECT * FROM paket
        WHERE id = ${packageId};
    `;
    return data.rows[0];
  } catch (error) {
    console.error("[PACKAGE] Database Error", error);
    throw new Error('');
  }
}

export async function updatePackage(tourPackage: TourPackage): Promise<boolean> {
  try {
    await sql`
        UPDATE paket 
        SET 
            nama = ${tourPackage.nama}, 
            deskripsi = ${tourPackage.deskripsi}
        WHERE id = ${tourPackage.id};
    `;
    return true;
  } catch (error) {
    console.error("[PACKAGE] Database Error", error);
    return false;
  }
}

export async function deletePackage(packageId: number): Promise<boolean> {
  try {
    await sql`
        DELETE FROM paket WHERE id = ${packageId};
    `;
    return true;
  } catch (error) {
    console.error("[PACKAGE] Database Error", error);
    return false;
  }
}