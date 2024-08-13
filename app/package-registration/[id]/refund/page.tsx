import { getPaymentByPackageRegistrationId } from "@/app/lib/database/payment";
import { getRefundByRegistrationId } from "@/app/lib/database/refund";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import PaymentContent from "@/app/ui/user/payment-content";
import RefundContent from "@/app/ui/user/refund-content";
import React from "react";

export default async function Page({params}: {params: {id: string}}) {
    const id = Number(params.id);

    const refunds = await getRefundByRegistrationId(id);

    return (
        <main className="flex flex-col h-full">
            <div className="flex-none mx-12">
                <Breadcrumbs
                    breadcrumbs={[
                        { label: 'Pendaftaran', href: '/package-registration' },
                        { label: 'Detail Pendaftaran', href: '/package-registration' },
                        { label: 'Pengembalian Dana', href: '/package-registration', active: true },
                    ]}
                />
            </div>
            <div className="grow h-dvh mx-12">
                <RefundContent
                    registrationId={id}
                    refunds={refunds}
                />
            </div>
        </main>
    )
}