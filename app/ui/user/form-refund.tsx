"use client";

import { submitCreateRefundData } from "@/app/lib/actions";
import { Button } from "@/app/ui/button";
import Link from "next/link";
import React from "react";

export default function FormRefund({registrationId}: {
    registrationId: number
}) {
    return (
        <form
            className="w-full mt-4"
            action={async (formData) => {
                await submitCreateRefundData(registrationId, formData.get("reason").toString());
            }}
        >
            <div className="flex flex-col content-center bg-white mt-6 mx-8 rounded-lg p-4 gap-4">
                <div className="w-full">
                    <label htmlFor="reason" className="mb-2 block text-sm font-medium">
                        Alasan Pengajuan Pengembalian Dana
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <textarea
                                id="reason"
                                name="reason"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <hr/>
                </div>

                <div className="flex justify-end gap-4">
                    <Link
                        href="/"
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

            </div>
        </form>
    );
}