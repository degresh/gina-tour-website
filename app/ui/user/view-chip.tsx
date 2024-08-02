import { Facility } from "@/app/lib/definitions";

export default function ViewChip({fasilitas}: {
  fasilitas: Facility
}) {
  return (
    <div className="inline-block px-4 py-2 m-2 rounded-full cursor-pointer bg-blue-500 text-white">
      {fasilitas.nama}
    </div>
  );
}