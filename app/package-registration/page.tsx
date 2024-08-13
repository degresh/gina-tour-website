import {
    getPagedRegistrationsByAccountId,
    getRegistrationPagesByAccountId
} from "@/app/lib/database/package-registration";
import Pagination from "@/app/ui/admin/pagination";
import Search from "@/app/ui/search";
import TableRegistrationUser from "@/app/ui/user/table-registration-user";

export default async function Page({searchParams}: {
    searchParams?: {
        query?: string;
        page?: string;
    }
}) {
    const account = JSON.parse(window.localStorage.getItem("token"));
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await getRegistrationPagesByAccountId(account.id, query);
    const packageRegistrations = await getPagedRegistrationsByAccountId(account.id, query, currentPage);

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
                    <TableRegistrationUser packageRegistrations={packageRegistrations}/>
                </div>
                <div className="mt-5 flex w-full justify-center">
                    <Pagination totalPages={totalPages}/>
                </div>
            </div>
        </div>
    );
}