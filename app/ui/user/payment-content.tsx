import { Payment } from "@/app/lib/entity/payment";
import { CreateButton } from "@/app/ui/button";
import ButtonIconNav from "@/app/ui/button-icon-nav";
import TablePaymentUser from "@/app/ui/user/table/table-payment-user";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function PaymentContent({registrationId, payments}: {
    registrationId: number;
    payments: Payment[];
}) {
    if (payments === null || payments.length === 0) {
        return (
            <div className="flex flex-col grow gap-4 items-center">
                <h3>Belum Terdapat data Pembayaran</h3>
                <ButtonIconNav href="payment/create" icon={PlusIcon}/>
            </div>
        )
    } else {
        const containSettlement: boolean = payments.some(payment => payment.type === "pelunasan" && payment.status !== "rejected")
        return (
            <div>
                {containSettlement ? (<div></div>) : (<div className="flex justify-end">
                    <CreateButton href="payment/create" text="Tambah Pembayaran"/>
                </div>)}
                <TablePaymentUser packageRegistrationId={registrationId}/>
            </div>
        )
    }
}