import { getRegistrationById } from "@/app/lib/database/package-registration";
import { getPaymentByPackageRegistrationId } from "@/app/lib/database/payment";
import { getPagedPaymentMethods, getPaymentMethods } from "@/app/lib/database/payment-method";
import { PackageRegistrationDetail } from "@/app/lib/entity/package-registration-detail";
import { Payment } from "@/app/lib/entity/payment";
import { PaymentMethod } from "@/app/lib/entity/payment-method";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import PaymentActionContent from "@/app/ui/user/payment-action-content";
import React from "react";

export default async function Page({params}: {params: {id: string}}) {
    const id: number = Number(params.id);
    const paymentMethods: PaymentMethod[] = await getPaymentMethods();
    const payments: Payment[] = await getPaymentByPackageRegistrationId(id);
    const registration: PackageRegistrationDetail = await getRegistrationById(id);

    return (
        <main className="flex flex-col">
            <div className="flex-none mx-12">
                <Breadcrumbs
                    breadcrumbs={[
                        { label: 'Riwayat Pendaftaran', href: '/package-registration' },
                        { label: 'Detail Riwayat Pendaftaran', href: `/package-registration/${id}` },
                        { label: 'Pembayaran', href: `/package-registration/${id}/payment`},
                        { label: 'Buat Pembayaran', href: `/package-registration/${id}/payment/create`, active: true },
                    ]}
                />
            </div>
            <div className="grow h-lvh mx-12">
                <PaymentActionContent
                    paymentMethods={paymentMethods}
                    payments={payments}
                    registrationDetail={registration}
                />
            </div>
        </main>
    );
}