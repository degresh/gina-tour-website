'use server';

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteOfficer(id: number) {

}

export async function createFacility(imageUrl: string, name: string) {
  try {
    await sql`
      INSERT INTO fasilitas (foto, nama)
      VALUES (${imageUrl}, ${name})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  revalidatePath("/admin/facility");
  redirect("/admin/facility");
}