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
            jenis_kelamin VARCHAR(8) NOT NULL,
            nomor_telepon VARCHAR(16) NOT NULL,
            email VARCHAR(80) NOT NULL,
            kelurahan VARCHAR(56) NOT NULL,
            kecamatan VARCHAR(56) NOT NULL,
            kabupaten VARCHAR(56) NOT NULL,
            kode_pos VARCHAR(5) NOT NULL,
            alamat TEXT NOT NULL,
            pekerjaan VARCHAR(56) NOT NULL,
            pendidikan VARCHAR(24) NOT NULL,
            tanggal_pendaftaran BIGINT NOT NULL
        );
  `;
}

async function createTableHotel() {
    await client.sql`
        CREATE TABLE Hotel (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            description TEXT,
            imageUrl VARCHAR(255),
            grade INT
        );
    `;
}

async function createTablePaketHotel() {
    await client.sql`
        CREATE TABLE paket_hotel (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            paket_id INT,
            hotel_id INT,
            FOREIGN KEY (paket_id) REFERENCES paket(id),
            FOREIGN KEY (hotel_id) REFERENCES hotel(id)
        );
    `;
}

async function createTablePaketTransportation() {
    await client.sql`
        CREATE TABLE paket_transportation (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            paket_id INT,
            transportation_id INT,
            FOREIGN KEY (paket_id) REFERENCES paket(id),
            FOREIGN KEY (transportation_id) REFERENCES transportation(id)
        );
    `;
}

async function createTablePayment() {
    await client.sql`
        CREATE TABLE payment (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            registration_id INT,
            amount DECIMAL(10, 2) NOT NULL,
            status VARCHAR(50) NOT NULL,
            reject_reason TEXT,
            type VARCHAR(50) NOT NULL,
            url VARCHAR(255),
            FOREIGN KEY (registration_id) REFERENCES pendaftaran(id)
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
        await createTableHotel();
        await client.sql`COMMIT`;
        return Response.json({message: 'Database seeded successfully'});
    } catch (e) {
        console.log(e);
        await client.sql`ROLLBACK`;
        return Response.json({e}, {status: 500})
    }
}