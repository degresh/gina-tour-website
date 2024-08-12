import PackageTable from "@/app/ui/admin/package/table";
import { CreateButton } from "@/app/ui/button";
import Search from "@/app/ui/search";

export default function Page({ searchParams }: {
  searchParams?: {
    query?: string;
    page?: string;
  }
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="w-full">
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl">Paket</h1>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Cari Paket..."/>
          <CreateButton href="/admin/package/create" text="Tambah Paket"/>
        </div>
        <PackageTable query={query} page={currentPage}/>
      </div>
    </div>
  );
}