import { TourPackageVariant } from "@/app/lib/definitions";
import { sql } from "@vercel/postgres";

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