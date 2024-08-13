import { getPaymentById } from "@/app/lib/database/payment";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import PaymentContentDetail from "@/app/ui/user/payment-content-detail";
import React from "react";

export default async function Page({params}: { params: { code: string } }) {
    const payment = await getPaymentById(Number(params.code));
    return (
        <main className="flex flex-col h-dvh">
            <div className="flex-none mx-12">
                <Breadcrumbs
                    breadcrumbs={[
                        {label: 'Pendaftaran', href: '/package-registration'},
                        {label: 'Detail Pendaftaran', href: '/package-registration'},
                        {label: 'Pembayaran', href: '/package-registration'},
                        {label: 'Detail', href: '/package-registration', active: true},
                    ]}
                />
            </div>
            <div className="grow h-dvh mx-12">
                <PaymentContentDetail
                    payment={payment}
                />
            </div>
        </main>
    );
}