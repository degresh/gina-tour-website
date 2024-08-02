import LoginForm from "@/app/ui/login-form";
import Navbar from "@/app/ui/navbar";
import Footer from "@/app/ui/user/footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen mt-16">
        <LoginForm />
      </div>
      <Footer />
    </div>
  )
}