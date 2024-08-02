import { TourPackageDetail } from "@/app/lib/definitions";
import Link from "next/link";

export default function PackageCard({paket}: {paket: TourPackageDetail}) {
  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
  };

  return (
    <Link href={`/package/${paket.id}`} legacyBehavior>
      <div className="cursor-pointer border border-gray-300 p-6 m-4 rounded-lg shadow-lg w-full max-w-md bg-white hover:shadow-xl transition-shadow duration-300">
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-2">{paket.name}</h3>
          <p className="text-gray-700">{paket.description}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold">Fasilitas yang Termasuk:</h4>
          <ul className="list-disc list-inside text-gray-800">
            {paket.includedFacilities.map((facility) => (
              <li key={facility.id}>{facility.nama}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold ">Fasilitas yang Tidak Termasuk:</h4>
          <ul className="list-disc list-inside text-gray-800">
            {paket.excludedFacilities.map((facility) => (
              <li key={facility.id}>{facility.nama}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold ">Pilihan Paket:</h4>
          <ul className="list-disc list-inside text-gray-800">
            {paket.variants.map((variant) => (
              <li key={variant.id}>
                <span className="font-medium">{variant.nama}</span> - {formatRupiah(variant.harga)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}