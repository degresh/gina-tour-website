import { Refund } from "@/app/lib/entity/refund";
import { CreateButton } from "@/app/ui/button";
import ButtonIconNav from "@/app/ui/button-icon-nav";
import TableRefundUser from "@/app/ui/user/table/table-refund-user";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function RefundContent({registrationId, refunds}: {
    registrationId: number;
    refunds: Refund[];
}) {
    if (refunds === null || refunds.length === 0) {
        return (
            <div className="flex flex-col grow gap-4 items-center">
                <h3>Belum Terdapat Data Pengembalian</h3>
                <ButtonIconNav href="refund/create" icon={PlusIcon}/>
            </div>
        )
    } else {
        const containSettlement: boolean = refunds.some(refund => refund.status === "pending" || refund.status === "diterima")

        return (
            <div>
                {containSettlement ? (<div></div>) : (<div className="flex justify-end">
                    <CreateButton href="refund/create" text="Tambah Pengajuan"/>
                </div>)}
                <TableRefundUser refunds={refunds}/>
            </div>
        )
    }
}