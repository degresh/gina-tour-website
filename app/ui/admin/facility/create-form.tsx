'use client';

import { createFacility } from "@/app/lib/actions";
import { Button } from "@/app/ui/button";
import { PutBlobResult } from "@vercel/blob";
import Link from "next/link";
import React, { useRef } from "react";

export default function Form() {
  const inputFileRef: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const inputNameRef: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={ async (event) => {
        event.preventDefault();

        // @ts-ignore
        const file = inputFileRef.current.files[0];
        const response = await fetch(
          `/api/upload?filename=${file.name}`,
          {
            method: 'POST',
            body: file,
          },
        );

        const newBlob = (await response.json()) as PutBlobResult;

        const name = inputNameRef.current?.value

        // @ts-ignore
        await createFacility(newBlob.url, name);
      }}
    >
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        {/* Facility Photo */}
        <div className="mb-4">
          <label htmlFor="photo" className="mb-2 block text-sm font-medium">
            Foto
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="photo"
                name="photo"
                ref={inputFileRef}
                type="file"
                placeholder="Masukkan gambar fasilitas"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                alt="gambar petugas"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Facility Name */}
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Nama
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                ref={inputNameRef}
                placeholder="Masukkan nama fasilitas"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/admin/facility"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Buat Fasilitas</Button>
      </div>
    </form>
  )
}