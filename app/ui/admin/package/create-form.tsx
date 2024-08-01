"use client";

import { createPackageWrap } from "@/app/lib/actions";
import { createPackage } from "@/app/lib/database/package";
import { Facility, TourPackage, TourPackageVariant } from "@/app/lib/definitions";
import Chip from "@/app/ui/admin/package/chip";
import Modals from "@/app/ui/admin/package/create-add-variant-modal";
import VariantContainer from "@/app/ui/admin/package/variant-container";
import { Button } from "@/app/ui/button";
import { Button as NextButton } from "@nextui-org/react";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { useState } from 'react';

export default function Form({includedFacilities, excludedFacilities}: {
  includedFacilities: Facility[],
  excludedFacilities: Facility[]
}) {
  const [showModal, setShowModal] = useState(false);
  const [variants, setVariants] = useState<TourPackageVariant[]>([]);

  const handleVariantSubmit = (formData: TourPackageVariant | null) => {
    setShowModal(false);

    if (formData !== null) {
      setVariants([...variants, formData]);
    }

  };

  const [selectedIncludedFacilities, setSelectedIncludedFacilities] = useState<number[]>([]);
  const [selectedExcludedFacilities, setSelectedExcludedFacilities] = useState<number[]>([]);

  const handleIncludedFacilitiesClick = (id: number) => {
    setSelectedIncludedFacilities((prev) =>
      prev.includes(id) ? prev.filter((fasilitasId) => fasilitasId !== id) : [...prev, id]
    );
  };

  const handleExcludedFacilitiesClick = (id: number) => {
    setSelectedExcludedFacilities((prev) =>
      prev.includes(id) ? prev.filter((fasilitasId) => fasilitasId !== id) : [...prev, id]
    );
  };

  return(
    <div>
      <form action={async (formData) => {
        const tourPackage: TourPackage = {
          id: 0,
          nama: formData.get("name").toString(),
          deskripsi: formData.get("description").toString(),
        }

        await createPackageWrap(
          tourPackage,
          variants,
          selectedIncludedFacilities,
          selectedExcludedFacilities
        );
      }}>
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
                  placeholder="Masukkan nama paket"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Deskripsi
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Masukkan deskripsi paket"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          <div className="mb-4">
            <div className="flex justify-between content-center items-end">
              <div className="text-sm font-medium">
                Varian Paket
              </div>
              <NextButton
                onClick={() => setShowModal(true)}
                className="bg-transparent text-blue-500 hover:text-blue-700 text-sm font-medium border border-transparent rounded focus:outline-none">
                Tambah Varian Paket
              </NextButton>
            </div>
          </div>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <VariantContainer variants={variants}/>
            </div>
          </div>
        </div>

        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Fasilitas yang Termasuk
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <div className="flex flex-wrap">
                  {includedFacilities.map((fasilitas) => (
                    <Chip
                      key={fasilitas.id}
                      fasilitas={fasilitas}
                      selected={selectedIncludedFacilities.includes(fasilitas.id)}
                      onClick={handleIncludedFacilitiesClick}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Fasilitas yang Tidak Termasuk
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <div className="flex flex-wrap">
                  {excludedFacilities.map((fasilitas) => (
                    <Chip
                      key={fasilitas.id}
                      fasilitas={fasilitas}
                      selected={selectedExcludedFacilities.includes(fasilitas.id)}
                      onClick={handleExcludedFacilitiesClick}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/admin/package"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Batal
          </Link>
          <Button type="submit">Buat Paket</Button>
        </div>
      </form>
      <Modals showModal={showModal} onSubmit={handleVariantSubmit}/>
    </div>
  );
}
