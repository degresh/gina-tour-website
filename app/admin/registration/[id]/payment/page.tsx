import { getPaymentByPackageRegistrationId } from "@/app/lib/database/payment";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import PaymentContent from "@/app/ui/admin/payment-content";
import React from "react";

export default async function Page({params}: {params: {id: string}}) {
    const id = Number(params.id);

    const payments = await getPaymentByPackageRegistrationId(id);

    return (
        <main className="flex flex-col h-full">
            <div className="flex-none mx-12">
                <Breadcrumbs
                    breadcrumbs={[
                        { label: 'Pendaftaran', href: '/admin/registraion' },
                        { label: 'Detail Pendaftaran', href: '/admin/registration' },
                        { label: 'Pembayaran', href: '/admin/registration', active: true },
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