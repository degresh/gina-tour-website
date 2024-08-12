"use client";

import { submitPaymentMethod } from "@/app/lib/actions";
import { createPaymentMethod } from "@/app/lib/database/payment-method";
import { PaymentMethodCreateRequest } from "@/app/lib/entity/payment-method-create-request";
import { Button } from "@/app/ui/button";
import { PutBlobResult } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useRef } from "react";

export default function FormPaymentMethod() {
    const imageFileRef: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

    return (
        <form
            className="w-full mt-4"
            action={async (formData) => {
                const imageFile = imageFileRef.current.files[0];
                const imageFileResponse = await fetch(`/api/upload?filename=${imageFile.name}`, {
                    method: 'POST',
                    body: imageFile
                });
                const imageFileBlob = (await imageFileResponse.json()) as PutBlobResult;

                const request: PaymentMethodCreateRequest = {
                    imageUrl: imageFileBlob.url,
                    bankName: formData.get("bankName").toString(),
                    accountName: formData.get("accountName").toString(),
                    accountNumber: formData.get("accountNumber").toString()
                };

                await submitPaymentMethod(request);
            }}
        >
            <div className="flex flex-col content-center bg-white mt-6 mx-8 rounded-lg p-4 gap-4">
                <div className="mb-4">
                    <label htmlFor="image" className="mb-2 block text-sm font-medium">
                        Gambar Bank
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="image"
                                name="image"
                                ref={imageFileRef}
                                type="file"
                                accept="image/png, image/jpeg"
                                placeholder="Masukkan gambar"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                alt="Gambar Bank"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="bankName" className="mb-2 block text-sm font-medium">
                        Nama Bank
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="bankName"
                                name="bankName"
                                type="text"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="accountName" className="mb-2 block text-sm font-medium">
                        Nama Akun Bank
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="accountName"
                                name="accountName"
                                type="text"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="accountNumber" className="mb-2 block text-sm font-medium">
                        Nomor Rekening
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="accountNumber"
                                name="accountNumber"
                                type="text"
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
                        href="/admin/payment-method"
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