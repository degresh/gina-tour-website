import { getRefundById } from "@/app/lib/database/refund";
import RefundContentDetail from "@/app/ui/admin/refund-content-detail";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import React from "react";

export default async function Page({params}: { params: { code: string } }) {
    const refund = await getRefundById(Number(params.code));
    return (
        <main className="flex flex-col h-dvh">
            <div className="flex-none mx-12">
                <Breadcrumbs
                    breadcrumbs={[
                        {label: 'Pendaftaran', href: '/admin/registraion'},
                        {label: 'Detail Pendaftaran', href: '/admin/registration'},
                        {label: 'Pengembalian Dana', href: '/admin/registration'},
                        {label: 'Detail', href: '/admin/registration', active: true},
                    ]}
                />
            </div>
            <div className="grow h-dvh mx-12">
                <RefundContentDetail
                    refund={refund}
                />
            </div>
        </main>
    );
}