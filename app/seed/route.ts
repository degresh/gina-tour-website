import { db } from "@vercel/postgres";

const client = await db.connect();

async function createTableAkun() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS akun(
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      foto VARCHAR(255) NOT NULL,
      email VARCHAR(128) NOT NULL,
      telepon VARCHAR(16) NOT NULL,
      nama VARCHAR(56) NOT NULL,
      password VARCHAR(32) NOT NULL,
      role VARCHAR(8) NOT NULL
    );
  `;
}

async function createTableFasilitas() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS fasilitas(
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      foto VARCHAR(255),
      nama VARCHAR(56) NOT NULL,
      deskripsi TEXT
    );
  `;
}

async function createTablePaket() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS paket(
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      nama VARCHAR(56) NOT NULL,
      deskripsi TEXT NOT NULL
    );
  `;
}

async function createTablePaketVarian() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS paket_varian(
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      id_paket INT NOT NULL,
      nama VARCHAR(56) NOT NULL,
      deskripsi TEXT NOT NULL,
      harga INT NOT NULL
    );
  `;
}

async function createTablePaketFasilitas() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS paket_fasilitas(
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      paket_id INT NOT NULL,
      fasilitas_id INT NOT NULL,
      status VARCHAR(16) NOT NULL
    );
  `;
}

async function createTablePendaftaran() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS pendaftaran(
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      akun_id INT NOT NULL,
      paket_id INT NOT NULL,
      nama VARCHAR(56) NOT NULL,
      nama_ayah VARCHAR(56) NOT NULL,
      nama_ibu VARCHAR(56) NOT NULL,
      tempat_lahir VARCHAR(56) NOT NULL,
      tanggal_lahir VARCHAR(56) NOT NULL,
      jenis_kelamin VARCHAR(56) NOT NULL,
      tanggal_pendaftaran BIGINT NOT NULL,
      status_pendaftaran VARCHAR(56) NOT NULL
    );
  `;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await createTableAkun();
    await createTableFasilitas();
    await createTablePaket();
    await createTablePaketVarian();
    await createTablePaketFasilitas();
    await createTablePendaftaran();
    await client.sql`COMMIT`;
    return Response.json({ message: 'Database seeded successfully' });
  } catch (e) {
    console.log(e);
    await client.sql`ROLLBACK`;
    return Response.json({ e }, { status: 500 })
  }
}