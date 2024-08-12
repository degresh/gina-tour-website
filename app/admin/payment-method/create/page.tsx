import FormPaymentMethod from "@/app/ui/admin/form/form-payment-method";
import Breadcrumbs from "@/app/ui/breadcrumbs";

export default async function Page() {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Metode Pembayaran', href: '/admin/payment-method' },
                    {
                        label: 'Tambah Metode Pembayaran',
                        href: '/admin/payment-method/create',
                        active: true,
                    },
                ]}
            />
            <FormPaymentMethod />
        </main>
    )
}