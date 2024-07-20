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