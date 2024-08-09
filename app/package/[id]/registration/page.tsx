import { getPackageVariantByPackageId } from "@/app/lib/database/package-variant";
import FormPackageRegistration from "@/app/ui/user/form-package-registration";
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
            <FormPackageRegistration variants={packageVariants} />
        </div>
    )
}