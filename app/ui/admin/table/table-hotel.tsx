import { getPagedHotels } from "@/app/lib/database/hotel";
import ButtonIconAction from "@/app/ui/button-icon-action";
import ButtonIconNav from "@/app/ui/button-icon-nav";
import { PencilIcon } from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default async function TableHotel({ query, page }: {
    query: string;
    page: number;
}) {
    const hotels = await getPagedHotels(query, page);

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
                                Gambar
                            </th>
                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                Nama
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Deskripsi
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Grade
                            </th>
                            <th scope="col" className="relative py-3 pl-6 pr-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        {hotels?.map((hotel, index) => (
                            <tr
                                key={hotel.id}
                                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                            >
                                <td className="whitespace-nowrap px-3 py-3">
                                    {index + 1}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    <Image
                                        src={hotel.imageUrl}
                                        width={64}
                                        height={64}
                                        objectFit="contain"
                                        alt={`${hotel.name}'s picture`}
                                    />
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {hotel.name}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {hotel.description}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {hotel.grade}
                                </td>
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex justify-end gap-3">
                                        <ButtonIconNav href="" icon={EyeIcon}/>
                                        <ButtonIconNav href="" icon={PencilIcon}/>
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