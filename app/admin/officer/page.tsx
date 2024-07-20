import OfficerTable from "@/app/ui/admin/officer/table";
import { CreateOfficer } from "@/app/ui/buttons";
import Search from "@/app/ui/search";

export default function Page({ searchParams } : {
  searchParams?: {
    query?: string;
    page?: string;
  }
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;


  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Petugas</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Cari Petugas..."/>
        <CreateOfficer/>
      </div>
      <OfficerTable query={query} currentPage={currentPage} />
    </div>
  );
}