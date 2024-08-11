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