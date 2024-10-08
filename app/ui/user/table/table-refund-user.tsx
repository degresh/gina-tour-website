import { Refund } from "@/app/lib/entity/refund";
import ButtonIconNav from "@/app/ui/button-icon-nav";
import { EyeIcon } from "@heroicons/react/24/outline";

export default async function TableRefundUser({refunds}: {
    refunds: Refund[]
}) {

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                        <tr>
                            <th scope="col" className="relative py-3 pl-6 pr-3">
                                <span className="sr-only"></span>
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Alasan Pengembalian Dana
                            </th>
                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                Status
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Keterangan
                            </th>
                            <th scope="col" className="relative py-3 pl-6 pr-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        {refunds?.map((refund, index) => (
                            <tr
                                key={refund.id}
                                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                            >
                                <td className="whitespace-nowrap px-3 py-3">
                                    {index + 1}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {refund.reason}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {refund.status}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {refund.rejectReason}
                                </td>
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex justify-end gap-3">
                                        <ButtonIconNav
                                            href={"refund/" + refund.id.toString()}
                                            icon={EyeIcon}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}