"use client";

import { Schedule } from "@/app/lib/entity/schedule";
import ButtonIconNav from "@/app/ui/button-icon-nav";
import { EyeIcon } from "@heroicons/react/24/outline";

export default function ScheduleTable({schedules}: {
    schedules: Schedule[]
}) {
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
                                Tanggal Pemberangkatan
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Kuota
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Jumlah Peserta
                            </th>
                            <th scope="col" className="relative py-3 pl-6 pr-3">
                                <span className="sr-only">Aksi</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        {schedules?.map((schedule: Schedule, index: number) => (
                            <tr
                                key={schedule.id}
                                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                            >
                                <td className="whitespace-nowrap px-3 py-3">
                                    {index + 1}
                                </td>

                                <td className="whitespace-normal px-3 py-3">
                                    {schedule.date}
                                </td>
                                <td className="whitespace-normal px-3 py-3">
                                    {schedule.quota}
                                </td>
                                <td className="whitespace-normal px-3 py-3">
                                    {schedule.members} Peserta
                                </td>
                                <td className="whitespace-normal py-3 pl-6 pr-3">
                                    <div className="flex justify-end gap-3">
                                        <ButtonIconNav href={"schedule/" + schedule.id.toString()} icon={EyeIcon}/>
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