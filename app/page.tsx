import { getPackagesForDashboard } from "@/app/lib/database/package";
import { TourPackageDetail } from "@/app/lib/definitions";
import Carousel from "@/app/ui/carousel";
import Navbar from "@/app/ui/navbar";
import Destination from "@/app/ui/user/destination";
import Footer from "@/app/ui/user/footer";
import PackageCard from "@/app/ui/user/package-card";

export default async function Home() {
  const packages = await getPackagesForDashboard();
  return (
    <main>
      <Navbar/>
      <Carousel/>
      <Destination/>
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-left my-8">Paket Travel</h3>
        <PackageContainerContent packages={packages}/>
      </div>
      {/*<div className="container mx-auto">*/}
      {/*  <h3 className="text-2xl font-bold text-left my-8">Alamat Kantor</h3>*/}
      {/*</div>*/}
      <Footer/>
    </main>
  );
}

function PackageContainerContent({packages}: {
  packages: TourPackageDetail[]
}) {
  if (packages.length > 0) {
    return (
      <div className="flex flex-wrap">
        {packages.map((paket) => (
          <PackageCard key={paket.id} paket={paket}/>
        ))}
      </div>
    )
  }

  return (
    <div className="w-full border border-gray-300 p-4 rounded-lg flex justify-center">
      <p className="content-center">Tidak ada paket tersedia</p>
    </div>
  )
}
