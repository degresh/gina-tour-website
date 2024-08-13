'use server';

import { createAccount, getAccountByEmail } from "@/app/lib/database/account";
import { createPackage } from "@/app/lib/database/package";
import { createPackageFacility } from "@/app/lib/database/package-facility";
import { createPackageHotel } from "@/app/lib/database/package-hotel";
import {
    createPackageRegistration,
    getRegistrationById, getRegistrationPagesByAccountId,
    updateRegistrationStatus
} from "@/app/lib/database/package-registration";
import { createPackageTransportation } from "@/app/lib/database/package-transportation";
import { createPackageVariant } from "@/app/lib/database/package-variant";
import { createPayment, updatePaymentStatusById } from "@/app/lib/database/payment";
import { createPaymentMethod, deletePaymentMethodById } from "@/app/lib/database/payment-method";
import { createRefund, updateRefundStatusById } from "@/app/lib/database/refund";
import { createSchedule } from "@/app/lib/database/schedule";
import { Account, TourPackage, TourPackageVariant } from "@/app/lib/definitions";
import { PackageRegistrationCreateRequest } from "@/app/lib/entity/package-registration-create-request";
import { PackageVariant } from "@/app/lib/entity/package-variant";
import { Payment } from "@/app/lib/entity/payment";
import { PaymentCreateRequest } from "@/app/lib/entity/payment-create-request";
import { PaymentMethodCreateRequest } from "@/app/lib/entity/payment-method-create-request";
import { Refund } from "@/app/lib/entity/refund";
import { RefundCreateRequest } from "@/app/lib/entity/refund-create-request";
import { ScheduleCreateRequest } from "@/app/lib/entity/schedule-create-request";
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
    request: PackageRegistrationCreateRequest
) {
    await createPackageRegistration(request);
    redirect("/package-registration");
}

export async function authenticate(
    email: string,
    password: string
): Promise<Account | null> {
    const account: Account = await getAccountByEmail(email);

    if (account.password === password) {
        return account;
    }

    return null;
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

        if (payment.type === "full") {
            await updateRegistrationStatus(registration.id, "lunas");
        } else if (registration.registrationStatus === "menunggu-pembayaran") {
            await updateRegistrationStatus(registration.id, "menunggu-pelunasan");
        } else if (registration.registrationStatus === "menunggu-pelunasan") {
            await updateRegistrationStatus(registration.id, "lunas");
        }
    }

    revalidatePath(`/admin/registration/${payment.registrationId}/payment`);
    redirect(`/admin/registration/${payment.registrationId}/payment`);
}

export async function submitCreateRefundData(registrationId: number, reason: string) {
    const request: RefundCreateRequest = {
        registrationId: registrationId,
        reason: reason,
        status: 'pending',
        rejectReason: '',
        url: ''
    }
    await createRefund(request);

    revalidatePath(`/package-registration/${registrationId}/refund`);
    redirect(`/package-registration/${registrationId}/refund`);
}

export async function submitRegistrationData(formData: Object) {
    const account: Account = {
        id: "0",
        nama: formData["name"],
        foto: 'https://picsum.photos/200',
        email: formData["email"],
        telepon: formData["phone"],
        password: formData["password"],
        role: 'pengguna'
    }

    await createAccount(account);

    revalidatePath(`/login`);
    redirect(`/login`);
}

export async function submitUpdateRefundStatus(refund: Refund, newStatus: string) {
    await updateRefundStatusById(refund.id, newStatus);

    revalidatePath(`/admin/registration/${refund.registrationId}/refund`);
    redirect(`/admin/registration/${refund.registrationId}/refund`);
}

export async function submitScheduleData(request: ScheduleCreateRequest) {
    await createSchedule(request);

    revalidatePath(`/admin/schedule`);
    redirect(`/admin/schedule`);
}