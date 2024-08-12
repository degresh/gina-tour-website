import { getTransportationPages } from "@/app/lib/database/transportation";
import Pagination from "@/app/ui/admin/pagination";
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
    const totalPages = await getTransportationPages(query);

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className="text-2xl">Transportasi</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Cari Transportasi..."/>
                <CreateOfficer/>
            </div>
            <div className="flex grow flex-col h-full">
                <div className="h-full grow md:block">
                    <TableTransportation query={query} page={currentPage}/>
                </div>
                <div className="mt-5 flex w-full justify-center">
                    <Pagination totalPages={totalPages}/>
                </div>
            </div>
        </div>
    );
}