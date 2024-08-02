import Navbar from "@/app/ui/navbar";
import RegistrationForm from "@/app/ui/user/account-registration-form";
import Footer from "@/app/ui/user/footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen mt-16">
        <RegistrationForm />
      </div>
      <Footer />
    </div>
  )
}