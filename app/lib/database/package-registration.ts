import { PackageRegistration } from "@/app/lib/entity/package-registration";
import { PackageRegistrationCreateRequest } from "@/app/lib/entity/package-registration-create-request";
import { PackageRegistrationDetail } from "@/app/lib/entity/package-registration-detail";
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
                ${request.accountId},
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
                'pending',
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

export async function getRegistrationPagesByAccountId(accountId: number, keyword: string): Promise<number> {
    try {
        const query = await sql`
            SELECT COUNT(*) FROM pendaftaran 
            WHERE nama ILIKE ${`%${keyword}%`} AND akun_id = ${accountId}
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

export async function getPagedRegistrationsByAccountId(accountId: number, keyword: string, page: number) {
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
            WHERE pendaftaran.nama ILIKE ${`%${keyword}%`} AND pendaftaran.akun_id = ${accountId}
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset(page)}
        `;

        return query.rows.map(convertRowToPackageRegistration);
    } catch (error) {
        console.error("[TRANSPORTATION] Database Error", error);
    }
}

export async function getRegistrationById(id: number): Promise<PackageRegistrationDetail> {
    try {
        const query = await sql`
            SELECT
                pendaftaran.id,
                pendaftaran.nama,
                pendaftaran.nama_ayah,
                pendaftaran.nama_ibu,
                pendaftaran.tempat_lahir,
                pendaftaran.tanggal_lahir,
                pendaftaran.jenis_kelamin,
                pendaftaran.nomor_telepon,
                pendaftaran.email,
                pendaftaran.kelurahan,
                pendaftaran.kecamatan,
                pendaftaran.kabupaten,
                pendaftaran.kode_pos,
                pendaftaran.alamat,
                pendaftaran.pekerjaan,
                pendaftaran.pendidikan,
                pendaftaran.tanggal_pendaftaran,
                pendaftaran.status_pendaftaran,
                pendaftaran.sudah_pergi_umrah,
                pendaftaran.merokok,
                pendaftaran.memiliki_penyakit,
                pendaftaran.deskripsi_penyakit,
                pendaftaran.membutuhkan_kursi_roda,
                pendaftaran.passport_image_url,
                pendaftaran.visa_image_url,
                pendaftaran.photo_card_image_url,
                pendaftaran.identity_card_image_url,
                paket.nama as package_name,
                paket_varian.nama as package_variant_name,
                paket_varian.deskripsi as package_variant_description,
                paket_varian.harga as package_variant_price
            FROM pendaftaran 
            INNER JOIN paket_varian ON paket_varian.id = pendaftaran.paket_id
            INNER JOIN paket ON paket.id = paket_varian.id_paket
            WHERE pendaftaran.id = ${id}
        `;

        return convertRowToPackageRegistrationDetail(query.rows[0]);
    } catch (error) {
        console.error("[TRANSPORTATION] Database Error", error);
    }
}

export async function updateRegistrationStatus(id: number, newStatus: string) {
    try {
        await sql`
            UPDATE pendaftaran 
            SET status_pendaftaran = ${newStatus}
            WHERE id = ${id}
        `;
        return true;
    } catch (error) {
        console.error("[REGISTRATION] Database Error", error);
        return false;
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

function convertRowToPackageRegistrationDetail(row: QueryResultRow): PackageRegistrationDetail {
    const timeInMillis = Number(row["pendaftaran.tanggal_pendaftaran"]);
    const date = new Date(timeInMillis);

    return {
        id: row["id"],
        name: row["nama"],
        fatherName: row["nama_ayah"],
        motherName: row["nama_ibu"],
        placeOfBirth: row["tempat_lahir"],
        dateOfBirth: row["tanggal_lahir"],
        gender: row["jenis_kelamin"],
        phone: row["nomor_telepon"],
        email: row["email"],
        ward: row["kelurahan"],
        subDistrict: row["kecamatan"],
        district: row["kabupaten"],
        postalCode: row["kode_pos"],
        address: row["alamat"],
        job: row["pekerjaan"],
        education: row["pendidikan"],
        alreadyGoingUmroh: row["sudah_pergi_umrah"],
        smoking: row["merokok"],
        hasDisease: row["memiliki_penyakit"],
        diseaseDescription: row["deskripsi_penyakit"],
        needWheelChair: row["membutuhkan_kursi_roda"],
        passportImageUrl: row["passport_image_url"],
        visaImageUrl: row["visa_image_url"],
        photoCardImageUrl: row["photo_card_image_url"],
        identityCardImageUrl: row["identity_card_image_url"],
        packageName: row["package_name"],
        packageVariantName: row["package_variant_name"],
        packageVariantDescription: row["package_variant_description"],
        packageVariantPrice: row["package_variant_price"],
        registrationStatus: row["status_pendaftaran"],
        registrationDate: row["tanggal_pendaftaran"]
    }
}