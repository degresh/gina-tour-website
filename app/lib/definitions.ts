export type Account = {
  id: number;
  nama: string;
  foto: string;
  email: string;
  telepon: string;
  password: string
  role: 'admin' | 'petugas' | 'pengguna';
};

export type Facility = {
  id: number;
  foto: string;
  nama: string;
};

export type TourPackage = {
  id: number;
  nama: string;
  deskripsi: string;
  period: string;
};

export type TourPackageVariant = {
  id: number;
  id_paket: number;
  nama: string;
  deskripsi: string;
  harga: number;
};

export type TourPackageDetail = {
  id: number;
  name: string;
  description: string;
  includedFacilities: Facility[];
  excludedFacilities: Facility[];
  variants: TourPackageVariant[];
};