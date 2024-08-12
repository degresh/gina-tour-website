import { getRegistrationById } from "@/app/lib/database/package-registration";
import FormPackageRegistrationPreview from "@/app/ui/admin/form/form-package-registration-preview";
import Breadcrumbs from "@/app/ui/breadcrumbs";

export default async function Page({params}: {params: {id: string}}) {
    const id = params.id;
    const registrationDetail = await getRegistrationById(Number(id))

    console.log(registrationDetail);

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Pendaftaran', href: '/admin/registration' },
                    {
                        label: 'Detail Pendaftaran',
                        href: '/admin/registration',
                        active: true,
                    },
                ]}
            />
            <FormPackageRegistrationPreview
                registrationDetail={registrationDetail}
            />
        </main>
    )
}