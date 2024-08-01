'use server';

import { createPackage } from "@/app/lib/database/package";
import { createPackageFacility } from "@/app/lib/database/package-facility";
import { createPackageVariant } from "@/app/lib/database/package-variant";
import { TourPackage, TourPackageVariant } from "@/app/lib/definitions";
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

export async function createPackageWrap(
  tourPackage: TourPackage,
  variants: TourPackageVariant[],
  includedFacilitiesId: number[],
  excludedFacilitiesId: number[]
) {
  const packageId = await createPackage(tourPackage);

  if (packageId != null) {
    variants.forEach((variant) => {
      createPackageVariant(packageId, variant);
    });

    includedFacilitiesId.forEach((includedId) => {
      createPackageFacility(
        packageId, includedId, "termasuk"
      )
    });

    excludedFacilitiesId.forEach((excludedId) => {
      createPackageFacility(
        packageId, excludedId, "tidak termasuk"
      )
    });
  }

  revalidatePath("/admin/package");
  redirect("/admin/package");
}