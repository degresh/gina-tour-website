import { getRegistrationById } from "@/app/lib/database/package-registration";
import FormPackageRegistrationPreview from "@/app/ui/user/form-package-registration-preview";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import Link from "next/link";
import React from "react";

export default async function Page({params}: { params: { id: string } }) {
    const id = params.id;
    const registrationDetail = await getRegistrationById(Number(id))

    const showActions =
        registrationDetail.registrationStatus !== "pending" &&
        registrationDetail.registrationStatus !== "ditolak";

    return (
        <main>
            <div className="mx-12">
                <div className="flex justify-between items-center">
                    <Breadcrumbs
                        breadcrumbs={[
                            {label: 'Riwayat Pendaftaran', href: '/package-registration'},
                            {
                                label: 'Detail Riwayat Pendaftaran',
                                href: `/package-registration/${id}`,
                                active: true,
                            },
                        ]}
                    />
                    {showActions ? (
                        <div className="flex gap-2">
                            <Link
                                href={id + "/refund"}
                                className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                            >
                                Pengembalian Dana
                            </Link>
                            <Link
                                href={id + "/payment"}
                                className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                            >
                                Pembayaran
                            </Link>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
            <FormPackageRegistrationPreview
                registrationDetail={registrationDetail}
            />
        </main>
    )
}