import { getHotelPages } from "@/app/lib/database/hotel";
import Pagination from "@/app/ui/admin/pagination";
import TableHotel from "@/app/ui/admin/table/table-hotel";
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
    const totalPages = await getHotelPages(query);

    console.log(totalPages);

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className="text-2xl">Hotel</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Cari Hotel..."/>
                <CreateOfficer/>
            </div>
            <div className="flex grow flex-col h-full">
                <div className="h-full grow md:block">
                    <TableHotel query={query} page={currentPage}/>
                </div>
                <div className="mt-5 flex w-full justify-center">
                    <Pagination totalPages={totalPages}/>
                </div>
            </div>
        </div>
    );
}