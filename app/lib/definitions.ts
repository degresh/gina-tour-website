export type Account = {
  id: number;
  nama: string;
  foto: string;
  email: string;
  telepon: string;
  role: 'admin' | 'petugas' | 'pengguna';
};

export type Facility = {
  id: number;
  foto: string;
  nama: string;
}

export type TourPackage = {
  id: number;
  nama: string;
  deskripsi: string;
}

export type TourPackageVariant = {
  id: number;
  id_paket: number;
  nama: string;
  deskripsi: string;
  harga: number;
}

export type TourPackageVariantInput = {
  nama: string;
  deskripsi: string;
  harga: string;
}