'use server';

import { createPackage } from "@/app/lib/database/package";
import { createPackageFacility } from "@/app/lib/database/package-facility";
import { createPackageHotel } from "@/app/lib/database/package-hotel";
import {
    createPackageRegistration,
    getRegistrationById,
    updateRegistrationStatus
} from "@/app/lib/database/package-registration";
import { createPackageTransportation } from "@/app/lib/database/package-transportation";
import { createPackageVariant } from "@/app/lib/database/package-variant";
import { createPayment, updatePaymentStatusById } from "@/app/lib/database/payment";
import { createPaymentMethod, deletePaymentMethodById } from "@/app/lib/database/payment-method";
import { TourPackage, TourPackageVariant } from "@/app/lib/definitions";
import { PackageRegistrationCreateRequest } from "@/app/lib/entity/package-registration-create-request";
import { PackageVariant } from "@/app/lib/entity/package-variant";
import { Payment } from "@/app/lib/entity/payment";
import { PaymentCreateRequest } from "@/app/lib/entity/payment-create-request";
import { PaymentMethodCreateRequest } from "@/app/lib/entity/payment-method-create-request";
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

export async function createRegistration(
    request: PackageRegistrationCreateRequest,
    variants: PackageVariant[],
    selectedVariantId: number
) {

    console.log(request);

    const registrationId = await createPackageRegistration(request);
    const selectedVariant = variants.find((variant) => variant.id == selectedVariantId);

    const paymentRequest: PaymentCreateRequest = {
        registrationId: registrationId,
        amount: selectedVariant.price,
        status: 'UNPAID',
        rejectReason: '',
        type: 'dp',
        url: ''
    };

    await createPayment(paymentRequest);

    redirect(`/package/registered/${registrationId}/payment`);
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

export async function submitRegistrationStatus(registrationId: number, status: string) {
    await updateRegistrationStatus(registrationId, status);

    revalidatePath("/admin/registration");
    redirect("/admin/registration");
}

export async function submitPaymentMethod(request: PaymentMethodCreateRequest) {
    await createPaymentMethod(request);

    revalidatePath("/admin/payment-method");
    redirect("/admin/payment-method");
}

export async function submitDeletePaymentMethodById(id: number) {
    await deletePaymentMethodById(id);
    revalidatePath("/admin/payment-method");
}

export async function submitCreatePaymentData(data: PaymentCreateRequest) {
    await createPayment(data);

    revalidatePath(`/package-registration/${data.registrationId}/payment`);
    redirect(`/package-registration/${data.registrationId}/payment`);
}

export async function submitUpdatePaymentStatus(payment: Payment, newStatus: string) {
    const success = await updatePaymentStatusById(payment.id, newStatus);

    if (success && newStatus === "diterima") {
        const registration = await getRegistrationById(payment.registrationId);

        if (registration.registrationStatus === "menunggu-pembayaran") {
            await updateRegistrationStatus(registration.id, "menunggu-pelunasan");
        } else if (registration.registrationStatus === "menunggu-pelunasan") {
            await updateRegistrationStatus(registration.id, "lunas");
        }
    }

    revalidatePath(`/admin/registration/${payment.registrationId}/payment`);
    redirect(`/admin/registration/${payment.registrationId}/payment`);
}