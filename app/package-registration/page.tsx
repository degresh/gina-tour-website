import { getHotelPages } from "@/app/lib/database/hotel";
import { getRegistrationPages } from "@/app/lib/database/package-registration";
import { getTransportationPages } from "@/app/lib/database/transportation";
import Pagination from "@/app/ui/admin/pagination";
import TableHotel from "@/app/ui/admin/table/table-hotel";
import TableRegistration from "@/app/ui/admin/table/table-registration";
import TableTransportation from "@/app/ui/admin/table/table-transportation";
import { CreateOfficer } from "@/app/ui/buttons";
import Search from "@/app/ui/search";

export default async function Page({searchParams}: {
    searchParams?: {
        query?: string;
        page?: string;
    }
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await getRegistrationPages(query);

    return (
        <div className="p-12">
            <div className="flex w-full items-center justify-between">
                <h1 className="text-2xl">Pendaftaran</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Cari Pendaftaran..."/>
            </div>
            <div className="flex grow flex-col h-full">
                <div className="h-full grow md:block">
                    <TableRegistration query={query} page={currentPage}/>
                </div>
                <div className="mt-5 flex w-full justify-center">
                    <Pagination totalPages={totalPages}/>
                </div>
            </div>
        </div>
    );
}