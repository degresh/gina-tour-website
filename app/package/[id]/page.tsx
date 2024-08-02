import { getPackageById } from "@/app/lib/database/package";
import { Button } from "@/app/ui/button";
import Navbar from "@/app/ui/navbar";
import Footer from "@/app/ui/user/footer";
import ViewChip from "@/app/ui/user/view-chip";
import Link from "next/link";
import React from "react";

export default async function Page({params}: { params: { id: string } }) {
  const id = params.id

  const paket = await getPackageById(Number(id));

  if (!paket) {
    return <div>Paket not found</div>;
  }

  return (
    <main>
      <Navbar/>
      <div className="min-h-screen flex flex-col items-center bg-gray-100">
        <div className="w-full h-full bg-white border border-gray-300 rounded-lg overflow-hidden m-8">
          <div className="p-6 border-b border-gray-300">
            <h1 className="text-4xl font-bold">{paket.name}</h1>
            <p className="mt-2 text-lg">{paket.description}</p>
          </div>
          <div className="p-6">
            <section className="mb-6">
              <h2 className="text-2xl font-semibold">Fasilitas yang Termasuk</h2>
              <div className="flex flex-wrap">
                {paket.includedFacilities.map((fasilitas) => (
                  <ViewChip
                    key={fasilitas.id}
                    fasilitas={fasilitas}
                  />
                ))}
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold">Fasilitas yang Tidak Termasuk</h2>
              <div className="flex flex-wrap">
                {paket.excludedFacilities.map((fasilitas) => (
                  <ViewChip
                    key={fasilitas.id}
                    fasilitas={fasilitas}
                  />
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">Pilihan Paket</h2>
              <ul className="list-disc list-inside mt-2">
                {paket.variants.map((variant) => (
                  <li key={variant.id}>
                    <span className="font-medium">{variant.nama}</span> - {new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR'
                  }).format(variant.harga)} (ID Paket: {variant.id_paket})
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <div className="flex justify-end p-8">
            <Link
              href="/"
              className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 mr-4"
            >
              Kembali
            </Link>
            <Button>Daftar Paket</Button>
          </div>
        </div>
      </div>
      <Footer/>
    </main>

  );
}