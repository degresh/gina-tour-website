import { Transportation } from "@/app/lib/entity/transportation";
import Image from "next/image";

export default function TransportationContainer({transportations, selectedTransportations, onClick}: {
    transportations: Transportation[],
    selectedTransportations: number[],
    onClick: (id: number) => void
}) {
    if (transportations.length < 1) {
        return (
            <div className="w-full border border-gray-300 p-4 rounded-lg flex justify-center">
                <p className="content-center">Tidak ada transportasi yang tersedia</p>
            </div>
        )
    }

    return (
        <div className="flex flex-wrap gap-4">
            {
                transportations.map((transportation) => {
                    const isSelected = selectedTransportations.includes(transportation.id);
                    return (
                        <div
                            key={transportation.id}
                            onClick={() => onClick(transportation.id)}
                            className={`basis-1/4 border rounded-lg ${
                                isSelected ? 'border-blue-600 bg-blue-200' : 'border-gray-300'
                            }`}>
                            <div className="p-4">
                                <h3 className="text-lg font-bold mt-2">{transportation.name}</h3>
                                <p className="text-gray-700">{transportation.description}</p>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}