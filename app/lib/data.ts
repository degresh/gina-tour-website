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
        (role = 'petugas' OR role = 'admin') AND
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
      WHERE  nama ILIKE ${`%${query}%`}
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return facilities.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function getAllFacilities(): Promise<Facility[]> {
  try {
    const facilities = await sql<Facility>`
      SELECT * FROM fasilitas
    `;

    return facilities.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}