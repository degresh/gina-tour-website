import { getFacilities } from "@/app/lib/data";
import { DeleteFacility, UpdateFacility } from "@/app/ui/admin/facility/buttons";
import Image from "next/image";

export default async function FacilityTable({
                                             query,
                                             currentPage,
                                           }: {
  query: string;
  currentPage: number;
}) {
  const facilities = await getFacilities(query, currentPage);

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
              <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                Foto
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Nama
              </th>
              <th scope="col" className="relative py-3 pl-6 pr-3">
                <span className="sr-only">Aksi</span>
              </th>
            </tr>
            </thead>
            <tbody className="bg-white">
            {facilities?.map((facility, index) => (
                <tr
                    key={facility.id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    {index + 1}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <Image
                        src={facility.foto}
                        width={64}
                        height={64}
                        objectFit="contain"
                        alt={`${facility.nama}'s profile picture`}
                    />
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {facility.nama}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateFacility id={facility.id}/>
                      <DeleteFacility id={facility.id}/>
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