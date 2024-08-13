import { getPaymentById } from "@/app/lib/database/payment";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import PaymentContentDetail from "@/app/ui/admin/payment-content-detail";
import React from "react";

export default async function Page({params}: { params: { code: string } }) {
    const payment = await getPaymentById(Number(params.code));
    return (
        <main className="flex flex-col h-dvh">
            <div className="flex-none mx-12">
                <Breadcrumbs
                    breadcrumbs={[
                        {label: 'Pendaftaran', href: '/admin/registraion'},
                        {label: 'Detail Pendaftaran', href: '/admin/registration'},
                        {label: 'Pembayaran', href: '/admin/registration'},
                        {label: 'Detail', href: '/admin/registration', active: true},
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