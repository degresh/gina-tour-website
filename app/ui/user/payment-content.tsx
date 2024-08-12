import { Payment } from "@/app/lib/entity/payment";
import ButtonIconNav from "@/app/ui/button-icon-nav";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function PaymentContent({ payments }: {
    payments: Payment[];
}) {
    if (payments === null || payments.length === 0) {
        return (
            <div className="flex flex-col grow gap-4 items-center">
                <h3>Belum Terdapat data Pembayaran</h3>
                <ButtonIconNav href="payment/create" icon={PlusIcon} />
            </div>
        )
    }
}