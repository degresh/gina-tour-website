import { getPackages } from "@/app/lib/database/package";
import { TourPackage } from "@/app/lib/definitions";
import { DeleteFacility, UpdateFacility } from "@/app/ui/admin/facility/buttons";

export default async function PackageTable({ query, page}: {
  query: string;
  page: number;
}) {
  const packages: TourPackage[] = await getPackages(query, page);

  return(
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full table-auto text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
            <tr>
              <th scope="col" className="px-3 py-5 font-medium">
                Nama
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Deskripsi
              </th>
              <th scope="col" className="relative py-3 pl-6 pr-3">
                <span className="sr-only">Aksi</span>
              </th>
            </tr>
            </thead>
            <tbody className="bg-white">
            {packages?.map((tourPackage) => (
              <tr
                key={tourPackage.id}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-normal px-3 py-3">
                  {tourPackage.nama}
                </td>
                <td className="whitespace-normal px-3 py-3">
                  {tourPackage.deskripsi}
                </td>
                <td className="whitespace-normal py-3 pl-6 pr-3">
                  <div className="flex justify-end gap-3">
                    <UpdateFacility id={tourPackage.id}/>
                    <DeleteFacility id={tourPackage.id}/>
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