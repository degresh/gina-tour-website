import { getRegistrationPages } from "@/app/lib/database/package-registration";
import { getPagedSchedules, getSchedulePages } from "@/app/lib/database/schedule";
import Pagination from "@/app/ui/admin/pagination";
import TableRegistration from "@/app/ui/admin/table/table-registration";
import ScheduleTable from "@/app/ui/admin/table/table-schedule";
import { CreateButton } from "@/app/ui/button";
import Search from "@/app/ui/search";

export default async function Page({searchParams}: {
    searchParams?: {
        query?: string;
        page?: string;
    }
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await getSchedulePages();
    const schedules = await getPagedSchedules(currentPage);

    console.log(schedules);

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className="text-2xl">Penjadwalan</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Cari Penjadwalan..."/>
                <CreateButton href="/admin/schedule/create" text="Tambah Jadwal"/>
            </div>
            <div className="flex grow flex-col h-full">
                <div className="h-full grow md:block">
                    <ScheduleTable schedules={schedules}/>
                </div>
                <div className="mt-5 flex w-full justify-center">
                    <Pagination totalPages={totalPages}/>
                </div>
            </div>
        </div>
    );
}