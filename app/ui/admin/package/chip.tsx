import { Facility } from "@/app/lib/definitions";

type ChipProps = {
  fasilitas: Facility;
  selected: boolean;
  onClick: (id: number) => void;
};

export default function Chip({ fasilitas, selected, onClick }: ChipProps) {
  return (
    <div
      className={`inline-block px-4 py-2 m-2 rounded-full cursor-pointer ${
        selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
      }`}
      onClick={() => onClick(fasilitas.id)}
    >
      {fasilitas.nama}
    </div>
  );
};