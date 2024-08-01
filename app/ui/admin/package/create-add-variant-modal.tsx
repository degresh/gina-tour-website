import { TourPackageVariant } from "@/app/lib/definitions";
import { Button } from "@/app/ui/button";
import React, { useState } from "react";

type FormProps = {
  showModal: boolean;
  onSubmit: (formData: TourPackageVariant | null) => void;
};

export default function Modals({showModal, onSubmit}: FormProps) {
  const initialFormData: TourPackageVariant = {
    id: 0,
    id_paket: 0,
    nama: '',
    deskripsi: '',
    harga: 0,
  };

  const [formData, setFormData] = useState<TourPackageVariant>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    console.log(name + ' : ' + value);
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
      resetForm()
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <div>
      {/* Vertically centered modal */}
      {showModal && (
        <div
          className="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-black bg-opacity-50 flex justify-center items-center"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-modal="true"
        >
          <div
            className="relative flex min-h-[calc(100%-1rem)] w-auto min-w-[calc(50%-1rem)] items-center min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
            <div
              className="relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none">
              <div
                className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 p-4 dark:border-white/10">
                {/* Modal title */}
                <h5 className="text-xl font-medium leading-normal text-surface"
                    id="exampleModalCenterTitle">
                  Tambah Varian
                </h5>
                {/* Close button */}
                <button
                  type="button"
                  className="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                  onClick={() => onSubmit(null)}
                  aria-label="Close"
                >
                  <span className="[&>svg]:h-6 [&>svg]:w-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </span>
                </button>
              </div>
              {/* Modal body */}
              <div className="relative p-4">
                <form onSubmit={handleSubmit}>
                  <div className="bg-gray-50">
                    <div className="mb-4">
                      <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Nama
                      </label>
                      <div className="relative mt-2 rounded-md">
                        <div className="relative">
                          <input
                            id="nama"
                            name="nama"
                            type="text"
                            placeholder="Masukkan nama paket"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            value={formData.nama}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50">
                    <div className="mb-4">
                      <label htmlFor="price" className="mb-2 block text-sm font-medium">
                        Harga
                      </label>
                      <div className="relative mt-2 rounded-md">
                        <div className="relative">
                          <input
                            id="harga"
                            name="harga"
                            type="number"
                            placeholder="Masukkan harga varian paket"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            value={formData.harga}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50">
                    <div className="mb-4">
                      <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Deskripsi
                      </label>
                      <div className="relative mt-2 rounded-md">
                        <div className="relative">
                          <input
                            id="deskripsi"
                            name="deskripsi"
                            type="text"
                            placeholder="Masukkan deskripsi paket"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            value={formData.deskripsi}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end gap-4">
                    <Button
                      onClick={() => onSubmit(null)}
                      className="flex h-10 items-center rounded-lg bg-gray-700 px-4 text-sm font-medium hover:bg-gray-900"
                    >
                      Batal
                    </Button>
                    <Button type="submit">Simpan</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};