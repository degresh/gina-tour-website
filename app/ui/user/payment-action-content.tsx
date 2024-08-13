"use client"

import { submitCreatePaymentData } from "@/app/lib/actions";
import { PackageRegistrationDetail } from "@/app/lib/entity/package-registration-detail";
import { Payment } from "@/app/lib/entity/payment";
import { PaymentCreateRequest } from "@/app/lib/entity/payment-create-request";
import { PaymentMethod } from "@/app/lib/entity/payment-method";
import { Button } from "@/app/ui/button";
import { PutBlobResult } from "@vercel/blob";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function PaymentActionContent({paymentMethods, payments, registrationDetail}: {
    paymentMethods: PaymentMethod[];
    payments?: Payment[];
    registrationDetail: PackageRegistrationDetail
}) {
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>(paymentMethods[0]);
    const [paymentType, setPaymentType] = useState<string>("dp");
    const [paymentTotal, setPaymentTotal] = useState<number>((20 / 100) * registrationDetail.packageVariantPrice);

    const paymentImageRef: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

    const shouldSettlement = payments?.some(payment => payment.type === "dp");

    useEffect(() => {
        if (shouldSettlement) {
            setPaymentType("pelunasan");
            setPaymentTotal((80 / 100) * registrationDetail.packageVariantPrice);
        }
    }, [paymentType, paymentTotal, shouldSettlement, registrationDetail.packageVariantPrice]);

    return (
        <div className="grid grid-cols-2 gap-2 h-lvh">
            <div className="flex flex-col items-center m-8 p-8">
                <h2 className="text-2xl">Metode Pembayaran</h2>
                <div className="flex gap-8 mt-16">
                    {paymentMethods.map((paymentMethod) => {
                        const isSelected = selectedMethod.id == paymentMethod.id;
                        return (
                            <div
                                key={paymentMethod.id}
                                className={`border rounded-2xl ${
                                    isSelected ? 'border-blue-600' : 'border-gray-300'
                                }`}
                                onClick={() => setSelectedMethod(paymentMethod)}
                            >
                                <Image
                                    src={paymentMethod.imageUrl}
                                    width={64}
                                    height={64}
                                    objectFit="contain"
                                    className="rounded-2xl"
                                    alt={`${paymentMethod.bankName}'s picture`}
                                />
                            </div>
                        )
                    })}
                </div>
                <div className="flex flex-col items-center mt-24 gap-4">
                    <h1 className="text-4xl">{selectedMethod.accountNumber}</h1>
                    <h3 className="text-xl">{selectedMethod.accountName}</h3>
                </div>
            </div>
            <div className="bg-blue-200 rounded-2xl flex flex-col items-center m-8 p-8">
                <div
                    className={`w-full border rounded-lg border-gray-500`}>
                    <div className="p-4">
                        <h2 className="text-lg font-bold">{registrationDetail.packageName}</h2>
                        <h3 className="text-lg font-bold mt-2">{registrationDetail.packageVariantName}</h3>
                        <p className="text-gray-700">{registrationDetail.packageVariantDescription}</p>
                        <span> {
                            new Intl.NumberFormat('id-ID', {
                                style: 'currency',
                                currency: 'IDR'
                            }).format(registrationDetail.packageVariantPrice)
                        } </span>
                    </div>
                </div>
                <form
                    className="w-full mt-4"
                    action={async () => {
                        const paymentImageFile = paymentImageRef.current.files[0];
                        const paymentImageFileResponse = await fetch(`/api/upload?filename=${paymentImageFile.name}`, {
                            method: 'POST',
                            body: paymentImageFile
                        });
                        const paymentImageBlob = (await paymentImageFileResponse.json()) as PutBlobResult;

                        const request: PaymentCreateRequest = {
                            registrationId: registrationDetail.id,
                            amount: paymentTotal,
                            status: "pending",
                            rejectReason: "",
                            type: paymentType,
                            url: paymentImageBlob.url
                        };

                        await submitCreatePaymentData(request);
                    }}
                >
                    <div className="w-full">
                        <label htmlFor="paymentType" className="mb-2 block text-sm font-medium">
                            Tipe Pembayaran
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <select
                                    id="paymentType"
                                    name="paymentType"
                                    value={paymentType}
                                    disabled={shouldSettlement}
                                    onChange={(event) => {
                                        event.preventDefault();
                                        const eventValue = event.target.value;

                                        if (!shouldSettlement) {
                                            setPaymentType(eventValue);
                                        }

                                        if (eventValue === "dp") {
                                            setPaymentTotal((20 / 100) * registrationDetail.packageVariantPrice);
                                        } else if (eventValue === "full") {
                                            setPaymentTotal(registrationDetail.packageVariantPrice);
                                        }
                                    }}
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                                >
                                    {shouldSettlement ? (
                                        <option value="pelunasan">Pelunasan</option>
                                    ) : <div></div>}
                                    <option value="dp">Dp</option>
                                    <option value="full">Full</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-2">
                        <label htmlFor="paymentTotal" className="mb-2 block text-sm font-medium">
                            Total Bayar
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="paymentTotal"
                                    name="paymentTotal"
                                    type="text"
                                    value={
                                        new Intl.NumberFormat('id-ID', {
                                            style: 'currency',
                                            currency: 'IDR'
                                        }).format(paymentTotal)
                                    }
                                    readOnly={true}
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <label htmlFor="identityPhoto" className="mb-2 block text-sm font-medium">
                            Bukti Pembayaran
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="identityPhoto"
                                    name="identityPhoto"
                                    ref={paymentImageRef}
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    placeholder="Masukkan gambar"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 bg-white placeholder:text-gray-500"
                                    alt="Gambar Bukti Pembayaran"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-8 flex justify-end">
                        <Button
                            type="submit"
                            className="flex h-10 items-center justify-end rounded-lg text-sm text-white font-medium bg-blue-600 hover:bg-blue-400"
                        >
                            Simpan
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}