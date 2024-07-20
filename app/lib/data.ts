import { Account, Facility } from "@/app/lib/definitions";
import { sql } from "@vercel/postgres";

const ITEMS_PER_PAGE = 10;

export async function getOfficers(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const officers = await sql<Account>`
      SELECT * FROM akun
      WHERE
        (nama = 'petugas' OR nama = 'admin') OR
        nama ILIKE ${`%${query}%`}
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return officers.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function getFacilities(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const facilities = await sql<Facility>`
      SELECT * FROM fasilitas
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return facilities.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}