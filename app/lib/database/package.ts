import { Facility, TourPackage, TourPackageDetail, TourPackageVariant } from "@/app/lib/definitions";
import { sql } from "@vercel/postgres";

const ITEMS_PER_PAGE: number = 10;

export async function createPackage(tourPackage: TourPackage): Promise<number | null> {
  try {
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

export async function getPackagesForDashboard() {
  try {
    const packages = await sql<TourPackageDetail>`
      SELECT
        p.id AS package_id,
        p.nama AS package_name,
        p.deskripsi AS package_description,
        f.id AS facility_id,
        f.foto AS facility_foto,
        f.nama AS facility_name,
        pf.status AS facility_status,
        pv.id AS variant_id,
        pv.id_paket AS variant_package_id,
        pv.nama AS variant_name,
        pv.deskripsi AS variant_description,
        pv.harga AS variant_price
      FROM paket p
      LEFT JOIN paket_fasilitas pf ON p.id = pf.paket_id
      LEFT JOIN fasilitas f ON pf.fasilitas_id = f.id
      LEFT JOIN paket_varian pv ON p.id = pv.id_paket
      ORDER BY p.id, pf.status, pv.id;
    `;

    return convertToTourPackageDetails(packages.rows);
  } catch (error) {
    console.error("[PACKAGE] Database Error", error);
    throw new Error('Failed to fetch packages.');
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

export async function getPackageById(packageId: number): Promise<TourPackageDetail> {
  try {
    const packages = await sql<TourPackageDetail>`
      SELECT
        p.id AS package_id,
        p.nama AS package_name,
        p.deskripsi AS package_description,
        f.id AS facility_id,
        f.foto AS facility_foto,
        f.nama AS facility_name,
        pf.status AS facility_status,
        pv.id AS variant_id,
        pv.id_paket AS variant_package_id,
        pv.nama AS variant_name,
        pv.deskripsi AS variant_description,
        pv.harga AS variant_price
      FROM paket p
      LEFT JOIN paket_fasilitas pf ON p.id = pf.paket_id
      LEFT JOIN fasilitas f ON pf.fasilitas_id = f.id
      LEFT JOIN paket_varian pv ON p.id = pv.id_paket
      WHERE p.id = ${packageId}
    `;

    return convertToTourPackageDetails(packages.rows, 0, false)[0];
  } catch (error) {
    console.error("[PACKAGE] Database Error", error);
    throw new Error('Failed to fetch packages.');
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

function convertToTourPackageDetails(rawData: any[], facilityLimit: number = 3, limited: boolean = true): TourPackageDetail[] {
  const resultMap = new Map<number, TourPackageDetail>();

  rawData.forEach(row => {
    // Ensure a TourPackageDetail object exists for this package_id
    if (!resultMap.has(row.package_id)) {
      resultMap.set(row.package_id, {
        id: row.package_id,
        name: row.package_name,
        description: row.package_description,
        includedFacilities: [],
        excludedFacilities: [],
        variants: []
      });
    }

    const packageDetail = resultMap.get(row.package_id)!;

    // Add facility details if they exist
    if (row.facility_id !== null) {
      const facility: Facility = {
        id: row.facility_id,
        foto: row.facility_foto,
        nama: row.facility_name
      };

      if (row.facility_status === 'termasuk') {
        if (packageDetail.includedFacilities.length < facilityLimit || !limited) {
          const existingIncluded = packageDetail.includedFacilities;
          const isDuplicate = existingIncluded.some(v => v.id === facility.id && v.nama === facility.nama);

          if (!isDuplicate) {
            packageDetail.includedFacilities.push(facility);
          }
        }
      } else if (row.facility_status === 'tidak termasuk') {
        if (packageDetail.excludedFacilities.length < facilityLimit || !limited) {
          const existingExcluded = packageDetail.excludedFacilities;
          const isDuplicate = existingExcluded.some(v => v.id === facility.id && v.nama === facility.nama);

          if (!isDuplicate) {
            packageDetail.excludedFacilities.push(facility);
          }
        }
      }
    }

    // Add variant details if they exist
    if (row.variant_id !== null) {
      const variant: TourPackageVariant = {
        id: row.variant_id,
        id_paket: row.variant_package_id,
        nama: row.variant_name,
        deskripsi: row.variant_description,
        harga: row.variant_price
      };

      const existingVariants = packageDetail.variants;
      const isDuplicate = existingVariants.some(v => v.id === variant.id && v.nama === variant.nama);

      if (!isDuplicate) {
        packageDetail.variants.push(variant);
      }
    }
  });

  return Array.from(resultMap.values());
}