'use server';

import { createPackage } from "@/app/lib/database/package";
import { createPackageFacility } from "@/app/lib/database/package-facility";
import { createPackageHotel } from "@/app/lib/database/package-hotel";
import { createPackageTransportation } from "@/app/lib/database/package-transportation";
import { createPackageVariant } from "@/app/lib/database/package-variant";
import { TourPackage, TourPackageVariant } from "@/app/lib/definitions";
import { signIn } from "@/auth";
import { sql } from "@vercel/postgres";
import { AuthError } from "next-auth";
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
  excludedFacilitiesId: number[],
  selectedHotelIds: number[],
  selectedTransportationIds: number[]
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

    selectedHotelIds.forEach((hotelId) => {
      createPackageHotel(packageId, hotelId);
    });

    selectedTransportationIds.forEach((transportationId) => {
      createPackageTransportation(packageId, transportationId);
    });

  }

  revalidatePath("/admin/package");
  redirect("/admin/package");
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}