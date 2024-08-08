import { getOfficers } from "@/app/lib/data";
import { DeleteOfficer, UpdateOfficer } from "@/app/ui/buttons";
import Image from "next/image";

export default async function OfficerTable({ query, currentPage,}: {
  query: string;
  currentPage: number;
}) {
  const officers = await getOfficers(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
            <tr>
              <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                Petugas
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Email
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Telepon
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Jabatan
              </th>
              <th scope="col" className="relative py-3 pl-6 pr-3">
                <span className="sr-only">Aksi</span>
              </th>
            </tr>
            </thead>
            <tbody className="bg-white">
            {officers?.map((officer) => (
              <tr
                key={officer.id}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={officer.foto}
                      className="rounded-full"
                      width={24}
                      height={24}
                      alt={`${officer.nama}'s profile picture`}
                    />
                    <p>{officer.nama}</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {officer.email}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {officer.telepon}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {officer.role}
                </td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex justify-end gap-3">
                    <UpdateOfficer id={Number(officer.id)}/>
                    <DeleteOfficer id={Number(officer.id)}/>
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