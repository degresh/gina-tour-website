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