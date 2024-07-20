'use client';

import { Button } from "@/app/ui/button";
import Link from "next/link";
import React from "react";

export default function Form() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

 return (
   <form>
     <div className="rounded-md bg-gray-50 p-4 md:p-6">

       {/* Officer Name */}
       <div className="mb-4">
         <label htmlFor="name" className="mb-2 block text-sm font-medium">
           Nama
         </label>
         <div className="relative mt-2 rounded-md">
           <div className="relative">
             <input
               id="name"
               name="name"
               type="text"
               placeholder="Masukkan nama petugas"
               className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
             />
           </div>
         </div>
       </div>

       {/* Officer Email */}
       <div className="mb-4">
         <label htmlFor="email" className="mb-2 block text-sm font-medium">
           Email
         </label>
         <div className="relative mt-2 rounded-md">
           <div className="relative">
             <input
               id="email"
               name="email"
               type="email"
               placeholder="Masukkan email petugas"
               className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
             />
           </div>
         </div>
       </div>

       {/* Officer Phone */}
       <div className="mb-4">
         <label htmlFor="phone" className="mb-2 block text-sm font-medium">
           Phone
         </label>
         <div className="relative mt-2 rounded-md">
           <div className="relative">
             <input
               id="phone"
               name="phone"
               type="phone"
               placeholder="Masukkan nomor telepon petugas"
               className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
             />
           </div>
         </div>
       </div>

       {/* Officer Phone */}
       <div className="mb-4">
         <label htmlFor="phone" className="mb-2 block text-sm font-medium">
           Phone
         </label>
         <div className="relative mt-2 rounded-md">
           <div className="relative">
             <input
               id="phone"
               name="phone"
               type="phone"
               placeholder="Masukkan nomor telepon petugas"
               className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
             />
           </div>
         </div>
       </div>

       {/* Officer Password */}
       <div className="mb-4">
         <label htmlFor="password" className="mb-2 block text-sm font-medium">
           Kata Sandi
         </label>
         <div className="relative mt-2 rounded-md">
           <div className="relative">
             <input
               id="password"
               name="password"
               placeholder="Masukkan kata sandi petugas (digunakan untuk akses website)"
               className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
               type={isVisible ? "text" : "password"}
             />
           </div>
         </div>
       </div>

       {/* Officer Photo */}
       <div className="mb-4">
         <label htmlFor="photo" className="mb-2 block text-sm font-medium">
           Foto
         </label>
         <div className="relative mt-2 rounded-md">
           <div className="relative">
             <input
               id="photo"
               name="photo"
               type="file"
               placeholder="Masukkan gambar (untuk profile petugas)"
               className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
               alt="gambar petugas"
             />
           </div>
         </div>
       </div>
     </div>
     <div className="mt-6 flex justify-end gap-4">
       <Link
         href="/admin/officer"
         className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
       >
         Cancel
       </Link>
       <Button type="submit">Buat Petugas</Button>
     </div>
   </form>
 )
}