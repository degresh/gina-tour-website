import { getPaymentByPackageRegistrationId } from "@/app/lib/database/payment";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import PaymentContent from "@/app/ui/user/payment-content";
import React from "react";

export default async function Page({params}: {params: {id: string}}) {
    const id = Number(params.id);

    const payments = await getPaymentByPackageRegistrationId(id);

    return (
        <main className="flex flex-col h-full">
            <div className="flex-none mx-12">
                <Breadcrumbs
                    breadcrumbs={[
                        { label: 'Riwayat Pendaftaran', href: '/package-registration' },
                        { label: 'Detail Riwayat Pendaftaran', href: `/package-registration/${id}` },
                        { label: 'Pembayaran', href: `/package-registration/${id}/payment`, active: true },
                    ]}
                />
            </div>
            <div className="grow h-dvh mx-12">
                <PaymentContent
                    registrationId={id}
                    payments={payments}
                />
            </div>
        </main>
    )
}