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
    const registrationId: number = Number(params.id);
    const paymentMethods: PaymentMethod[] = await getPaymentMethods();
    const payments: Payment[] = await getPaymentByPackageRegistrationId(registrationId);
    const registration: PackageRegistrationDetail = await getRegistrationById(registrationId);

    return (
        <main className="flex flex-col">
            <div className="flex-none mx-12">
                <Breadcrumbs
                    breadcrumbs={[
                        {label: 'Pendaftaran', href: '/package-registration'},
                        {label: 'Detail Pendaftaran', href: '/package-registration'},
                        {label: 'Pembayaran', href: '/package-registration'},
                        {label: 'Tambah Pembayaran', href: '/package-registration', active: true},
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