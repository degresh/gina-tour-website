import { deletePaymentMethodById, getPaymentMethods } from "@/app/lib/database/payment-method";
import { PaymentMethod } from "@/app/lib/entity/payment-method";
import ButtonIconAction from "@/app/ui/button-icon-action";
import { TrashIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default async function PaymentMethodTable({query, page}: {
    query: string;
    page: number;
}) {
    const paymentMethods: PaymentMethod[] = await getPaymentMethods(query, page);

    async function onDeleteAction(paymentMethodId: number) {
        await deletePaymentMethodById(paymentMethodId);
    }

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <table className="hidden min-w-full table-auto text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                        <tr>
                            <th scope="col" className="relative py-3 pl-6 pr-3">
                                <span className="sr-only"></span>
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Gambar
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Bank
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Nama Rekening
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Nomor Rekening
                            </th>
                            <th scope="col" className="relative py-3 pl-6 pr-3">
                                <span className="sr-only">Aksi</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        {paymentMethods?.map((paymentMethod) => (
                            <tr
                                key={paymentMethod.id}
                                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                            >
                                <td className="whitespace-normal px-3 py-3">
                                    <Image
                                        src={paymentMethod.imageUrl}
                                        width={64}
                                        height={64}
                                        objectFit="contain"
                                        alt={`${paymentMethod.bankName}'s picture`}
                                    />
                                </td>
                                <td className="whitespace-normal px-3 py-3">
                                    {paymentMethod.bankName}
                                </td>
                                <td className="whitespace-normal px-3 py-3">
                                    {paymentMethod.accountName}
                                </td>
                                <td className="whitespace-normal px-3 py-3">
                                    {paymentMethod.accountNumber}
                                </td>
                                <td className="whitespace-normal py-3 pl-6 pr-3">
                                    <div className="flex justify-end gap-3">
                                        <ButtonIconAction
                                            action={() => onDeleteAction(paymentMethod.id)}
                                            icon={TrashIcon}
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