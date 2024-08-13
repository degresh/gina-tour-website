"use client";

import { submitUpdatePaymentStatus, submitUpdateRefundStatus } from "@/app/lib/actions";
import { Payment } from "@/app/lib/entity/payment";
import { Refund } from "@/app/lib/entity/refund";
import { Button } from "@/app/ui/button";
import Image from "next/image";
import React from "react";

export default function RefundContentDetail({refund}: {
    refund: Refund;
}) {
    const showAction = refund.status === "pending";

    async function updateRefundStatus(newStatus: string) {
        await submitUpdateRefundStatus(refund, newStatus);
    }

    return (
        <div className="w-full mt-4">
            <div className="flex flex-col content-center bg-white mt-6 mx-8 rounded-lg p-4 gap-4">
                <div className="w-full">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Alasan Pengembalian Dana
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={refund.reason}
                                readOnly={true}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Status
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={refund.status}
                                readOnly={true}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>
                {refund.rejectReason ? (<div className="w-full">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Nama
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={refund.rejectReason}
                                readOnly={true}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>) : (<div></div>)}

                {showAction ? (
                    <div>
                        <div className="my-8">
                            <hr/>
                        </div>

                        <div className="flex justify-end gap-4">
                            <Button
                                onClick={() => updateRefundStatus("ditolak")}
                                className="flex h-10 items-center rounded-lg px-4 text-sm text-white font-medium bg-blue-600 hover:bg-blue-400"
                            >
                                Tolak Pengembalian Dana
                            </Button>
                            <Button
                                onClick={() => updateRefundStatus("diterima")}
                                className="flex h-10 items-center rounded-lg px-4 text-sm text-white font-medium bg-blue-600 hover:bg-blue-400"
                            >
                                Konfirmasi Pengembalian Dana
                            </Button>
                        </div>
                    </div>
                ) : <div></div>
                }
            </div>
        </div>
    );
}