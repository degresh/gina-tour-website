import { getRegistrationPages } from "@/app/lib/database/package-registration";
import Pagination from "@/app/ui/admin/pagination";
import TableRegistration from "@/app/ui/admin/table/table-registration";
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
      <div className="w-full">
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