"use client";

import { submitScheduleData } from "@/app/lib/actions";
import { PackageRegistration } from "@/app/lib/entity/package-registration";
import { ScheduleCreateRequest } from "@/app/lib/entity/schedule-create-request";
import TableRegistrationPreview from "@/app/ui/admin/table/table-registration-preview";
import { Button } from "@/app/ui/button";
import Link from "next/link";
import React from "react";

export default function FormSchedule({registrations}: {
    registrations: PackageRegistration[]
}) {

    return (
        <form
            className="w-full mt-4"
            action={async (formData) => {
                const request: ScheduleCreateRequest = {
                    date: formData.get("scheduleDate").toString(),
                    quota: formData.get("scheduleQuota").toString(),
                    members: registrations.map(r => r.id)
                };

                await submitScheduleData(request);
            }}
        >
            <div className="w-full">
                <label htmlFor="scheduleDate" className="mb-2 block text-sm font-medium">
                    Tanggal Pemberangkatan
                </label>
                <div className="relative mt-2 rounded-md">
                    <div className="relative">
                        <input
                            id="scheduleDate"
                            name="scheduleDate"
                            type="date"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full mt-4">
                <label htmlFor="scheduleQuota" className="mb-2 block text-sm font-medium">
                    Kuota
                </label>
                <div className="relative mt-2 rounded-md">
                    <div className="relative">
                        <input
                            id="scheduleQuota"
                            name="scheduleQuota"
                            type="number"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                        />
                    </div>
                </div>
            </div>

            <div className="my-8">
                <hr/>
            </div>

            <div className="w-full">
                <label htmlFor="scheduleQuota" className="mb-2 block text-sm font-medium">
                    Daftar Peserta
                </label>
                <TableRegistrationPreview registrations={registrations}/>
            </div>

            <div className="my-8">
                <hr/>
            </div>

            <div className="flex justify-end gap-4">
                <Link
                    href="/admin/schedule"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Batal
                </Link>
                <Button
                    type="submit"
                    className="flex h-10 items-center rounded-lg px-4 text-sm text-white font-medium bg-blue-600 hover:bg-blue-400"
                >
                    Simpan
                </Button>
            </div>

        </form>
    );
}