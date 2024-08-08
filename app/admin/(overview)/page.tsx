import { getFacilityCount } from "@/app/lib/database/facility";
import { getHotelCount, getHotels } from "@/app/lib/database/hotel";
import { getPackageCount } from "@/app/lib/database/package";
import { getTransportationCount } from "@/app/lib/database/transportation";
import DashboardCard from "@/app/ui/admin/dashboard-card";
import {
    ArrowUturnLeftIcon,
    BuildingOffice2Icon, BuildingOfficeIcon,
    IdentificationIcon, RocketLaunchIcon,
    Square3Stack3DIcon,
    UserGroupIcon
} from "@heroicons/react/24/solid";
import React from "react";

export default async function Page() {
    const hotelCount = await getHotelCount();
    const transportationCount = await getTransportationCount();
    const facilityCount = await getFacilityCount();
    const packageCount = await getPackageCount();

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className="text-2xl">Dashboard</h1>
            </div>
            <div className="grid grid-cols-4 mt-4 items-center justify-between gap-2">
                <DashboardCard name="Hotel" value={hotelCount} icon={BuildingOfficeIcon}/>
                <DashboardCard name="Transportasi" value={transportationCount} icon={RocketLaunchIcon}/>
                <DashboardCard name="Fasilitas" value={facilityCount} icon={BuildingOffice2Icon}/>
                <DashboardCard name="Paket" value={packageCount} icon={Square3Stack3DIcon}/>
                <DashboardCard name="Pendaftaran" value={3} icon={IdentificationIcon}/>
                <DashboardCard name="Pengembalian Dana" value={32} icon={ArrowUturnLeftIcon}/>
            </div>
        </div>
    );
}