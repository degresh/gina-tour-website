import Carousel from "@/app/ui/carousel";
import Navbar from "@/app/ui/navbar";
import Destination from "@/app/ui/user/destination";
import Footer from "@/app/ui/user/footer";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Carousel/>
      <Destination/>
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-left my-8">Paket Travel</h3>
      </div>
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-left my-8">Alamat Kantor</h3>
      </div>
      <Footer/>
    </main>
  );
}
