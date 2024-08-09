"use client"

import { createRegistration } from "@/app/lib/actions";
import { createPackageRegistration } from "@/app/lib/database/package-registration";
import { createPayment } from "@/app/lib/database/payment";
import { PackageRegistrationCreateRequest } from "@/app/lib/entity/package-registration-create-request";
import { PackageVariant } from "@/app/lib/entity/package-variant";
import { PaymentCreateRequest } from "@/app/lib/entity/payment-create-request";
import { Button } from "@/app/ui/button";
import PackageRegistrationVariant from "@/app/ui/user/package-registration-variant";
import Link from "next/link";
import React, { useState } from "react";

export default function FormPackageRegistration({variants}: {
    variants: PackageVariant[]
}) {
    const [selectedVariantId, setSelectedVariantId] = useState<number>(0);

    return (
        <form
            className="w-full mt-4"
            action={ async (formData) => {
                const request: PackageRegistrationCreateRequest = {
                    packageVariantId: selectedVariantId,
                    name: formData.get("name").toString(),
                    fatherName: formData.get("fatherName").toString(),
                    motherName: formData.get("motherName").toString(),
                    placeOfBirth: formData.get("placeOfBirth").toString(),
                    dateOfBirth: formData.get("dateOfBirth").toString(),
                    gender: formData.get("gender").toString(),
                    phone: formData.get("phone").toString(),
                    email: formData.get("email").toString(),
                    ward: formData.get("ward").toString(),
                    subDistrict: formData.get("subDistrict").toString(),
                    district: formData.get("district").toString(),
                    postalCode: formData.get("postalCode").toString(),
                    address: formData.get("address").toString(),
                    job: formData.get("job").toString(),
                    education: formData.get("education").toString(),
                };

                await createRegistration(request, variants, selectedVariantId);
            }}
        >
            <div className="flex flex-col content-center bg-white mt-6 mx-8 rounded-lg p-4 gap-4">

                <div className="w-full">
                    <label className="mb-2 block text-sm font-medium">
                        Pilihan Paket
                    </label>
                    <PackageRegistrationVariant
                        packageVariants={variants}
                        selectedId={selectedVariantId}
                        onSelect={setSelectedVariantId}
                    />
                </div>

                <div className="my-8">
                    <hr/>
                </div>

                <div className="w-full">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Nama
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="fatherName" className="mb-2 block text-sm font-medium">
                        Nama Ayah
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="fatherName"
                                name="fatherName"
                                type="text"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="motherName" className="mb-2 block text-sm font-medium">
                        Nama Ibu
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="motherName"
                                name="motherName"
                                type="text"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row w-full mb-4 gap-4">
                    <div className="grow">
                        <label htmlFor="placeOfBirth" className="mb-2 block text-sm font-medium">
                            Tempat Lahir
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="placeOfBirth"
                                    name="placeOfBirth"
                                    type="text"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grow">
                        <label htmlFor="dateOfBirth" className="mb-2 block text-sm font-medium">
                            Tanggal Lahir
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    type="date"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="gender" className="mb-2 block text-sm font-medium">
                        Jenis Kelamin
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="gender"
                                name="gender"
                                type="phone"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                        Nomor Telepon
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                name="phone"
                                type="phone"
                                id="phone"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Email
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <hr/>
                </div>

                <div className="flex flex-row w-full mb-4 gap-4">
                    <div className="grow">
                        <label htmlFor="ward" className="mb-2 block text-sm font-medium">
                            Kelurahan
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="ward"
                                    name="ward"
                                    type="text"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grow">
                        <label htmlFor="subDistrict" className="mb-2 block text-sm font-medium">
                            Kecamatan
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="subDistrict"
                                    name="subDistrict"
                                    type="text"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row w-full mb-4 gap-4">
                    <div className="grow">
                        <label htmlFor="district" className="mb-2 block text-sm font-medium">
                            Kota / Kabupaten
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="district"
                                    name="district"
                                    type="text"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grow">
                        <label htmlFor="postalCode" className="mb-2 block text-sm font-medium">
                            Kode Pos
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="postalCode"
                                    name="postalCode"
                                    type="text"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="address" className="mb-2 block text-sm font-medium">
                        Alamat Lengkap
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="address"
                                name="address"
                                type="text"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <hr/>
                </div>

                <div className="w-full">
                    <label htmlFor="job" className="mb-2 block text-sm font-medium">
                        Pekerjaan / Jabatan
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="job"
                                name="job"
                                type="text"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="education" className="mb-2 block text-sm font-medium">
                        Pendidikan Terakhir
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="education"
                                name="education"
                                type="text"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <hr/>
                </div>

                <div className="flex justify-end gap-4">
                    <Link
                        href="/"
                        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                    >
                        Batal
                    </Link>
                    <Button
                        type="submit"
                        className="flex h-10 items-center rounded-lg px-4 text-sm text-white font-medium bg-blue-600 hover:bg-blue-400"
                    >
                        Daftar Paket
                    </Button>
                </div>

            </div>
        </form>
    )
}