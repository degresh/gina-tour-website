import { getPagedRegistrations } from "@/app/lib/database/package-registration";
import { getPagedTransportations } from "@/app/lib/database/transportation";
import ButtonIconNav from "@/app/ui/button-icon-nav";
import { EyeIcon, PencilIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default async function TableRegistration({query, page}: {
    query: string;
    page: number;
}) {
    const packageRegistrations = await getPagedRegistrations(query, page);

    function onDeleteAction() {

    }

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
                                Nama
                            </th>
                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                Telepon
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Email
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Tanggal Pendaftaran
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Status Pendaftaran
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Paket
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Varian Paket
                            </th>
                            <th scope="col" className="relative py-3 pl-6 pr-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        {packageRegistrations?.map((packageRegistration, index) => (
                            <tr
                                key={packageRegistration.id}
                                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                            >
                                <td className="whitespace-nowrap px-3 py-3">
                                    {index + 1}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {packageRegistration.name}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {packageRegistration.phone}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {packageRegistration.email}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {packageRegistration.registrationDate}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {packageRegistration.registrationStatus}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {packageRegistration.package}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {packageRegistration.packageVariant}
                                </td>

                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex justify-end gap-3">
                                        <ButtonIconNav href={"registration/" + packageRegistration.id.toString()} icon={EyeIcon}/>
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