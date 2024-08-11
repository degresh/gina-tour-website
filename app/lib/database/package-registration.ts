import { PackageRegistration } from "@/app/lib/entity/package-registration";
import { PackageRegistrationCreateRequest } from "@/app/lib/entity/package-registration-create-request";
import { QueryResultRow, sql } from "@vercel/postgres";

const ITEMS_PER_PAGE: number = 10;

export async function createPackageRegistration(request: PackageRegistrationCreateRequest): Promise<number | null> {
    try {
        const query = await sql`
            INSERT INTO pendaftaran (
                akun_id, 
                paket_id, 
                nama, 
                nama_ayah, 
                nama_ibu, 
                tempat_lahir, 
                tanggal_lahir, 
                jenis_kelamin,
                nomor_telepon, 
                email, 
                kelurahan, 
                kecamatan, 
                kabupaten, 
                kode_pos, 
                alamat, 
                pekerjaan, 
                pendidikan,
                tanggal_pendaftaran,
                status_pendaftaran,
                sudah_pergi_umrah,
                merokok,
                memiliki_penyakit,
                deskripsi_penyakit,
                membutuhkan_kursi_roda,
                passport_image_url,
                visa_image_url,
                photo_card_image_url,
                identity_card_image_url
            ) 
            VALUES (
                0, 
                ${request.packageVariantId}, 
                ${request.name}, 
                ${request.fatherName}, 
                ${request.motherName}, 
                ${request.placeOfBirth}, 
                ${request.dateOfBirth}, 
                ${request.gender},
                ${request.phone}, 
                ${request.email}, 
                ${request.ward}, 
                ${request.subDistrict}, 
                ${request.district}, 
                ${request.postalCode}, 
                ${request.address},
                ${request.job}, 
                ${request.education},
                ${Date.now()},
                'Pending',
                ${request.alreadyGoingUmroh},
                ${request.smoking},
                ${request.hasDisease},
                ${request.diseaseDescription},
                ${request.needWheelChair},
                ${request.passportImageUrl},
                ${request.visaImageUrl},
                ${request.photoCardImageUrl},
                ${request.identityCardImageUrl}
            )
            RETURNING id
        `;

        return Number(query.rows[0].id);
    } catch (error) {
        console.error("[REGISTRATION] Database Error", error);
        return null;
    }
}

export async function getRegistrationPages(keyword: string): Promise<number> {
    try {
        const query = await sql`
            SELECT COUNT(*) FROM pendaftaran 
            WHERE nama ILIKE ${`%${keyword}%`}
        `;

        return Math.ceil(Number(query.rows[0].count) / ITEMS_PER_PAGE)
    } catch (error) {
        console.error("[REGISTRATION] Database Error", error);
    }
}

export async function getPagedRegistrations(keyword: string, page: number) {
    try {
        const query = await sql`
            SELECT
                pendaftaran.id,
                pendaftaran.nama,
                pendaftaran.nomor_telepon,
                pendaftaran.email,
                pendaftaran.tanggal_pendaftaran,
                pendaftaran.status_pendaftaran,
                paket.nama as package_name,
                paket_varian.nama as package_variant_name
            FROM pendaftaran 
            INNER JOIN paket_varian ON paket_varian.id = pendaftaran.paket_id
            INNER JOIN paket ON paket.id = paket_varian.id_paket
            WHERE pendaftaran.nama ILIKE ${`%${keyword}%`}
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset(page)}
        `;

        return query.rows.map(convertRowToPackageRegistration);
    } catch (error) {
        console.error("[TRANSPORTATION] Database Error", error);
    }
}

/**
 * Internal methods
 */

function offset(currentPage: number): number {
    return (currentPage - 1) * ITEMS_PER_PAGE;
}

function convertRowToPackageRegistration(row: QueryResultRow): PackageRegistration {
    const timeInMillis = Number(row["tanggal_pendaftaran"]);
    const date = new Date(timeInMillis);

    console.log(row);

    return {
        id: row["id"],
        name: row["nama"],
        phone: row["nomor_telepon"],
        email: row["email"],
        registrationDate: date.toDateString(),
        registrationStatus: row["status_pendaftaran"],
        package: row["package_name"],
        packageVariant: row["package_variant_name"]
    }
}