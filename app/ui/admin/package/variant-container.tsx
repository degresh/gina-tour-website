import { TourPackageVariant } from "@/app/lib/definitions";

export default function VariantContainer({ variants }: { variants: TourPackageVariant[] }) {
  if (variants.length < 1) {
    return (
      <div className="w-full border border-gray-300 p-4 rounded-lg flex justify-center">
        <p className="content-center">Belum ada variant</p>
      </div>
    )
  }

  return (
    <div>
      {variants.map((variant) => (
        <div key={variant.nama} className="border border-gray-300 p-4 mb-4 rounded-lg">
          <h3 className="text-lg font-bold">{variant.nama}</h3>
          <p className="text-gray-700">{variant.deskripsi}</p>
          <p className="text-gray-900 font-semibold">Harga: {variant.harga}</p>
        </div>
      ))}
    </div>
  )
}