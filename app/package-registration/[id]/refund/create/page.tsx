import Breadcrumbs from "@/app/ui/breadcrumbs";
import FormRefund from "@/app/ui/user/form-refund";
import React from "react";

export default async function Page({params}: { params: { id: string } }) {
    const registrationId: number = Number(params.id);

    return (
        <main className="flex flex-col">
            <div className="flex-none mx-12">
                <Breadcrumbs
                    breadcrumbs={[
                        {label: 'Pendaftaran', href: '/package-registration'},
                        {label: 'Detail Pendaftaran', href: '/package-registration'},
                        {label: 'Pengembalian Dana', href: '/package-registration'},
                        {label: 'Tambah Pengajuan', href: '/package-registration', active: true},
                    ]}
                />
            </div>
            <div className="grow h-lvh mx-12">
                <FormRefund registrationId={registrationId}/>
            </div>
        </main>
    );
}