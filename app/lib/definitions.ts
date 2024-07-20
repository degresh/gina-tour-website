export type Account = {
  id: number;
  nama: string;
  foto: string;
  email: string;
  telepon: string;
  role: 'admin' | 'petugas' | 'pengguna';
};