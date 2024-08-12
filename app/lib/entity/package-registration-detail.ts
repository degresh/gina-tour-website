export type PackageRegistrationDetail = {
    id: number;
    name: string;
    fatherName: string;
    motherName: string;
    placeOfBirth: string;
    dateOfBirth: string;
    gender: string;
    phone: string;
    email: string;
    ward: string;
    subDistrict: string;
    district: string;
    postalCode: string;
    address: string;
    job: string;
    education: string;
    alreadyGoingUmroh: string;
    smoking: string;
    hasDisease: string;
    diseaseDescription?: string;
    needWheelChair: string;
    passportImageUrl: string;
    visaImageUrl: string;
    photoCardImageUrl: string;
    identityCardImageUrl: string;
    packageName: string;
    packageVariantName: string;
    packageVariantDescription: string;
    packageVariantPrice: number;
    registrationStatus: string;
    registrationDate: string;
}

/**
 *  pendaftaran.nama_ibu,
 *                 pendaftaran.tempat_lahir,
 *                 pendaftaran.tanggal_lahir,
 *                 pendaftaran.jenis_kelamin,
 *                 pendaftaran.nomor_telepon,
 *                 pendaftaran.email,
 *                 pendaftaran.kelurahan,
 *                 pendaftaran.kecamatan,
 *                 pendaftaran.kabupaten,
 *                 pendaftaran.kode_pos,
 *                 pendaftaran.alamat,
 *                 pendaftaran.pekerjaan,
 *                 pendaftaran.pendidikan,
 *                 pendaftaran.tanggal_pendaftaran,
 *                 pendaftaran.status_pendaftaran,
 *                 pendaftaran.sudah_pergi_umrah,
 *                 pendaftaran.merokok,
 *                 pendaftaran.memiliki_penyakit,
 *                 pendaftaran.deskripsi_penyakit,
 *                 pendaftaran.membutuhkan_kursi_roda,
 *                 pendaftaran.passport_image_url,
 *                 pendaftaran.visa_image_url,
 *                 pendaftaran.photo_card_image_url,
 *                 pendaftaran.identity_card_image_url,
 *                 paket.nama as package_name,
 *                 paket_varian.nama as package_variant_name,
 *                 paket_varian.deskripsi as package_variant_description,
 *                 paket_varian.harga as package_variant_price
 */