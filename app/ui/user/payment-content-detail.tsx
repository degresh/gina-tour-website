import { Payment } from "@/app/lib/entity/payment";
import Image from "next/image";
import React from "react";

export default function PaymentContentDetail({payment}: {
    payment: Payment;
}) {
    return (
        <div className="w-full mt-4">
            <div className="flex flex-col content-center bg-white mt-6 mx-8 rounded-lg p-4 gap-4">
                <div className="w-full">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Tipe Pembayaran
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={payment.type}
                                readOnly={true}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Jumlah Pembayaran
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={
                                    new Intl.NumberFormat('id-ID', {
                                        style: 'currency',
                                        currency: 'IDR'
                                    }).format(payment.amount)
                                }
                                readOnly={true}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Status Pembayaran
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={payment.status}
                                readOnly={true}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>
                {payment.rejectReason ? (<div className="w-full">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Nama
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={payment.rejectReason}
                                readOnly={true}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>) : (<div></div>)}

                <div className="mb-4">
                    <label htmlFor="imagePassport" className="mb-2 block text-sm font-medium">
                        Bukti Pembayaran
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <Image
                                src={payment.url}
                                width={240}
                                height={240}
                                style={{objectFit: "fill"}}
                                alt="Gambar"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}