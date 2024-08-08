import { TourPackageVariant } from "@/app/lib/definitions";
import { PackageVariant } from "@/app/lib/entity/package-variant";
import { QueryResultRow, sql } from "@vercel/postgres";

export async function createPackageVariant(idPaket: number, variant: TourPackageVariant): Promise<boolean> {
    try {
        await sql`
        INSERT INTO paket_varian (id_paket, nama, deskripsi, harga)
        VALUES (${idPaket}, ${variant.nama}, ${variant.deskripsi}, ${variant.harga})
    `;

        return true;
    } catch (error) {
        console.error("[PACKAGE] Database Error", error);
        return false;
    }
}

export async function getPackageVariantByPackageId(packageId: number) {
    try {
        const query = await sql`
            SELECT * FROM paket_varian
            WHERE id_paket = ${packageId};
        `;
        return query.rows.map((row) => convertRowToPackageVariant((row)));
    } catch (error) {
        console.error("[PACKAGE] Database Error", error);
    }
}

/**
 * Internal methods
 */

function convertRowToPackageVariant(row: QueryResultRow): PackageVariant {
    return {
        id: row["id"],
        name: row["nama"],
        description: row["deskripsi"],
        price: row["harga"],
    }
}