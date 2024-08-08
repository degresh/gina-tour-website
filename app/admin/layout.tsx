import SideNav from "@/app/ui/admin/sidenav";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav/>
      </div>
      <div className="flex-grow p-4 md:overflow-y-auto">{children}</div>
    </div>
  )
}