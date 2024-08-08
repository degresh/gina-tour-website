"use client";

import { createPackageWrap } from "@/app/lib/actions";
import { Facility, TourPackage, TourPackageVariant } from "@/app/lib/definitions";
import { Hotel } from "@/app/lib/entity/hotel";
import { Transportation } from "@/app/lib/entity/transportation";
import Chip from "@/app/ui/admin/package/chip";
import Modals from "@/app/ui/admin/package/create-add-variant-modal";
import HotelContainer from "@/app/ui/admin/package/hotel-container";
import TransportationContainer from "@/app/ui/admin/package/transportation-container";
import VariantContainer from "@/app/ui/admin/package/variant-container";
import { Button } from "@/app/ui/button";
import { Button as NextButton, DateRangePicker } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";

export default function Form({includedFacilities, excludedFacilities, hotels, transportations}: {
    includedFacilities: Facility[],
    excludedFacilities: Facility[],
    hotels: Hotel[],
    transportations: Transportation[]
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

    const [selectedHotelIds, setSelectedHotelIds] = useState<number[]>([]);

    const handleHotelClick = (id: number) => {
        setSelectedHotelIds((prev) =>
            prev.includes(id) ? prev.filter((hotelId) => hotelId !== id) : [...prev, id]
        )
    }

    const [selectedTransportationIds, setSelectedTransportationIds] = useState<number[]>([]);

    const handleTransportationClick = (id: number) => {
        setSelectedTransportationIds((prev) =>
            prev.includes(id) ? prev.filter((transportationId) => transportationId !== id) : [...prev, id]
        )
    }

    const [period, setPeriod] = useState({})

    return (
        <div>
            <form action={async (formData) => {
                const tourPackage: TourPackage = {
                    id: 0,
                    nama: formData.get("name").toString(),
                    deskripsi: formData.get("description").toString(),
                    period: `${period["start"]} - ${period["end"]}`
                }

                await createPackageWrap(
                    tourPackage,
                    variants,
                    selectedIncludedFacilities,
                    selectedExcludedFacilities,
                    selectedHotelIds,
                    selectedTransportationIds
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
                            Periode Pendaftaran
                        </label>
                        <DateRangePicker
                            labelPlacement="outside"
                            color="default"
                            onChange={setPeriod}
                            className="rounded-md bg-white border border-gray-300"
                            calendarProps={{
                                classNames: {
                                    base: "bg-gray-300",
                                    headerWrapper: "pt-4 bg-gray-300",
                                    prevButton: "border-1 border-default-200 rounded-small",
                                    nextButton: "border-1 border-default-200 rounded-small",
                                    gridHeader: "bg-gray-500 shadow-none border-b-1 border-default-100",
                                },
                            }}
                        />
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
                                Pilihan Paket
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
                        <div className="flex justify-between content-center items-end">
                            <div className="text-sm font-medium">
                                Pilihan Hotel
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <HotelContainer
                                hotels={hotels}
                                selectedHotels={selectedHotelIds}
                                onClick={handleHotelClick}
                            />
                        </div>
                    </div>
                </div>

                <div className="rounded-md bg-gray-50 p-4 md:p-6">
                    <div className="mb-4">
                        <div className="flex justify-between content-center items-end">
                            <div className="text-sm font-medium">
                                Pilihan Transportasi
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <TransportationContainer
                                transportations={transportations}
                                selectedTransportations={selectedTransportationIds}
                                onClick={handleTransportationClick}
                            />
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
