import { CreateFacility } from "@/app/ui/admin/facility/buttons";
import FacilityTable from "@/app/ui/admin/facility/table";
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
        <h1 className="text-2xl">Fasilitas</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Cari Fasilitas..."/>
        <CreateFacility/>
      </div>
      <FacilityTable query={query} currentPage={currentPage} />
    </div>
  );
}