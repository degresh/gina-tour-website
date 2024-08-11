import { PackageRegistrationCreateRequest } from "@/app/lib/entity/package-registration-create-request";
import { sql } from "@vercel/postgres";

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
                tanggal_pendaftaran
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
                ${Date.now()}
            )
            RETURNING id
        `;

        return Number(query.rows[0].id);
    } catch (error) {
        console.error("[REGISTRATION] Database Error", error);
        return null;
    }
}