import { Hotel } from "@/app/lib/entity/hotel";
import { StarIcon } from "@heroicons/react/24/solid";

export default function HotelContainer({hotels, selectedHotels, onClick}: {
    hotels: Hotel[],
    selectedHotels: number[],
    onClick: (id: number) => void
}) {
    if (hotels.length < 1) {
        return (
            <div className="w-full border border-gray-300 p-4 rounded-lg flex justify-center">
                <p className="content-center">Tidak ada hotel yang tersedia</p>
            </div>
        )
    }

    return (
        <div className="flex flex-wrap gap-4">
            {
                hotels.map((hotel) => {
                    const isSelected = selectedHotels.includes(hotel.id);
                    return (
                        <div
                            key={hotel.id}
                            onClick={() => onClick(hotel.id)}
                            className={`basis-1/4 border rounded-lg ${
                                isSelected ? 'border-blue-600 bg-blue-200' : 'border-gray-300'
                            }`}>
                            <div className="p-4">
                                <h3 className="text-lg font-bold mt-2">{hotel.name}</h3>
                                <p className="text-gray-700">{hotel.description}</p>
                                <div className="text-gray-900 font-semibold flex gap-2 mt-2">
                                    <StarIcon width={24} height={24}/>
                                    {hotel.grade}
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    );
}