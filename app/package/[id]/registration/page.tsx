import { getPackageVariantByPackageId } from "@/app/lib/database/package-variant";
import { Button } from "@/app/ui/button";
import PackageRegistrationVariant from "@/app/ui/user/package-registration-variant";
import Link from "next/link";
import React from "react";

export default async function Page({params}: {
    params: { id: string }
}) {

    const id = params.id

    const packageVariants = await getPackageVariantByPackageId(Number(id));

    if (!packageVariants) {
        return <div>Paket tidak ditemukan</div>;
    }

    return (
        <div className="flex flex-col content-center items-center justify-center bg-zinc-50">
            <h3 className="text-2xl">Form Pendaftaran Travel</h3>
            <form className="w-full mt-4">
                <div className="flex flex-col content-center bg-white mt-6 mx-8 rounded-lg p-4 gap-4">

                    <div className="w-full">
                        <label htmlFor="email" className="mb-2 block text-sm font-medium">
                            Pilihan Paket
                        </label>
                        <PackageRegistrationVariant packageVariants={packageVariants}/>
                    </div>

                    <div className="my-8">
                        <hr/>
                    </div>

                    <div className="w-full">
                        <label htmlFor="email" className="mb-2 block text-sm font-medium">
                            Nama
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

                    <div className="w-full">
                        <label htmlFor="email" className="mb-2 block text-sm font-medium">
                            Nama Ayah
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

                    <div className="w-full">
                        <label htmlFor="email" className="mb-2 block text-sm font-medium">
                            Nama Ibu
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

                    <div className="flex flex-row w-full mb-4 gap-4">
                        <div className="grow">
                            <label htmlFor="email" className="mb-2 block text-sm font-medium">
                                Tempat Lahir
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
                        <div className="grow">
                            <label htmlFor="email" className="mb-2 block text-sm font-medium">
                                Tanggal Lahir
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
                    </div>

                    <div className="w-full">
                        <label htmlFor="email" className="mb-2 block text-sm font-medium">
                            Nomor Telepon
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
                            <label htmlFor="email" className="mb-2 block text-sm font-medium">
                                Kelurahan
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
                        <div className="grow">
                            <label htmlFor="email" className="mb-2 block text-sm font-medium">
                                Kecamatan
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
                    </div>

                    <div className="flex flex-row w-full mb-4 gap-4">
                        <div className="grow">
                            <label htmlFor="email" className="mb-2 block text-sm font-medium">
                                Kota / Kabupaten
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
                        <div className="grow">
                            <label htmlFor="email" className="mb-2 block text-sm font-medium">
                                Kode Pos
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
                    </div>

                    <div className="w-full">
                        <label htmlFor="email" className="mb-2 block text-sm font-medium">
                            Alamat Lengkap
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

                    <div className="w-full">
                        <label htmlFor="email" className="mb-2 block text-sm font-medium">
                            Pekerjaan / Jabatan
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

                    <div className="w-full">
                        <label htmlFor="email" className="mb-2 block text-sm font-medium">
                            Pendidikan Terakhir
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

                    <div className="flex justify-end gap-4">
                        <Link
                            href="/"
                            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                        >
                            Batal
                        </Link>
                        <Button
                            className="flex h-10 items-center rounded-lg px-4 text-sm text-white font-medium bg-blue-600 hover:bg-blue-400"
                        >
                            Daftar Paket
                        </Button>
                    </div>

                </div>
            </form>
        </div>
    )
}