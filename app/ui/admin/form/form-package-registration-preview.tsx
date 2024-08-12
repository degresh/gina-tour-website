"use client"

import { submitRegistrationStatus } from "@/app/lib/actions";
import { PackageRegistrationDetail } from "@/app/lib/entity/package-registration-detail";
import { Button } from "@/app/ui/button";
import Image from "next/image";
import React from "react";

export default function FormPackageRegistrationPreview({registrationDetail}: {
    registrationDetail: PackageRegistrationDetail
}) {

    async function updateRegistrationStatus(newStatus: string) {
        await submitRegistrationStatus(registrationDetail.id, newStatus);
    }

    return (
        <div className="w-full mt-4">
            <div className="flex flex-col content-center bg-white mt-6 mx-8 rounded-lg p-4 gap-4">

                <div
                    className={`grow basis-1/4 border rounded-lg border-gray-300`}>
                    <div className="p-4">
                        <h2 className="text-lg font-bold">{registrationDetail.packageName}</h2>
                        <h3 className="text-lg font-bold mt-2">{registrationDetail.packageVariantName}</h3>
                        <p className="text-gray-700">{registrationDetail.packageVariantDescription}</p>
                        <span> {
                            new Intl.NumberFormat('id-ID', {
                                style: 'currency',
                                currency: 'IDR'
                            }).format(registrationDetail.packageVariantPrice)
                        } </span>
                    </div>
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
                                value={registrationDetail.name}
                                readOnly={true}
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
                                value={registrationDetail.fatherName}
                                readOnly={true}
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
                                value={registrationDetail.motherName}
                                readOnly={true}
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
                                    value={registrationDetail.placeOfBirth}
                                    readOnly={true}
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
                                    value={registrationDetail.dateOfBirth}
                                    readOnly={true}
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
                                value={registrationDetail.gender}
                                readOnly={true}
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
                                value={registrationDetail.phone}
                                readOnly={true}
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
                                value={registrationDetail.email}
                                readOnly={true}
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
                                    value={registrationDetail.ward}
                                    readOnly={true}
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
                                    value={registrationDetail.subDistrict}
                                    readOnly={true}
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
                                    value={registrationDetail.district}
                                    readOnly={true}
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
                                    value={registrationDetail.postalCode}
                                    readOnly={true}
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
                                value={registrationDetail.address}
                                readOnly={true}
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
                                value={registrationDetail.job}
                                readOnly={true}
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
                                value={registrationDetail.education}
                                readOnly={true}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <hr/>
                </div>

                <div className="w-full">
                    <label htmlFor="alreadyGoingUmroh" className="mb-2 block text-sm font-medium">
                        Pernah Pergi Umroh
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <select
                                id="alreadyGoingUmroh"
                                name="alreadyGoingUmroh"
                                defaultValue={registrationDetail.alreadyGoingUmroh}
                                disabled={true}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            >
                                <option value="Ya">Ya</option>
                                <option value="Tidak">Tidak</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="smoking" className="mb-2 block text-sm font-medium">
                        Merokok
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <select
                                id="smoking"
                                name="smoking"
                                defaultValue={registrationDetail.smoking}
                                disabled={true}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            >
                                <option value="Ya">Ya</option>
                                <option value="Tidak">Tidak</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="hasDisease" className="mb-2 block text-sm font-medium">
                        Memiliki Penyakit
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <select
                                id="hasDisease"
                                name="hasDisease"
                                defaultValue={registrationDetail.hasDisease}
                                disabled={true}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            >
                                <option value="Ya">Ya</option>
                                <option value="Tidak">Tidak</option>
                            </select>
                        </div>
                    </div>
                </div>

                {registrationDetail.diseaseDescription ? (<div className="w-full">
                    <label htmlFor="diseaseDescription" className="mb-2 block text-sm font-medium">
                        Keterangan Penyakit
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="diseaseDescription"
                                name="diseaseDescription"
                                type="text"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>) : <div></div>
                }

                <div className="w-full">
                    <label htmlFor="needWheelChair" className="mb-2 block text-sm font-medium">
                        Kebutuhan Kursi Roda
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <select
                                id="needWheelChair"
                                name="needWheelChair"
                                defaultValue={registrationDetail.needWheelChair}
                                disabled={true}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            >
                                <option value="Ya">Ya</option>
                                <option value="Tidak">Tidak</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <hr/>
                </div>

                <div className="mb-4">
                    <label htmlFor="imagePassport" className="mb-2 block text-sm font-medium">
                        Passport
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <Image
                                src={registrationDetail.passportImageUrl}
                                width={240}
                                height={240}
                                objectFit="contain"
                                alt="Gambar"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="imageVisa" className="mb-2 block text-sm font-medium">
                        Visa
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <Image
                                src={registrationDetail.visaImageUrl}
                                width={240}
                                height={240}
                                objectFit="contain"
                                alt="Gambar"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="photoCard" className="mb-2 block text-sm font-medium">
                        Pas Foto
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <Image
                                src={registrationDetail.photoCardImageUrl}
                                width={240}
                                height={240}
                                objectFit="contain"
                                alt="Gambar"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="identityPhoto" className="mb-2 block text-sm font-medium">
                        KTP
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <Image
                                src={registrationDetail.identityCardImageUrl}
                                width={240}
                                height={240}
                                objectFit="contain"
                                alt="Gambar"
                            />
                        </div>
                    </div>
                </div>

                {registrationDetail.registrationStatus === "Pending" ? (
                    <div>
                        <div className="my-8">
                            <hr/>
                        </div>

                        <div className="flex justify-end gap-4">
                            <Button
                                onClick={() => updateRegistrationStatus("ditolak")}
                                className="flex h-10 items-center rounded-lg px-4 text-sm text-white font-medium bg-blue-600 hover:bg-blue-400"
                            >
                                Tolak Pendaftaran
                            </Button>
                            <Button
                                onClick={() => updateRegistrationStatus("menunggu-pembayaran")}
                                className="flex h-10 items-center rounded-lg px-4 text-sm text-white font-medium bg-blue-600 hover:bg-blue-400"
                            >
                                Konfirmasi Pendaftaran
                            </Button>
                        </div>
                    </div>
                ) : <div></div>
                }

            </div>
        </div>
    );
}