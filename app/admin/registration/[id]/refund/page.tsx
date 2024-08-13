import { getRefundByRegistrationId } from "@/app/lib/database/refund";
import Breadcrumbs from "@/app/ui/breadcrumbs";
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
                        { label: 'Pendaftaran', href: '/admin/registration' },
                        { label: 'Detail Pendaftaran', href: `/admin/registration/${id}` },
                        { label: 'Pengembalian Dana', href: `/admin/registration/${id}/refund`, active: true },
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