import { getPagedRegistrations } from "@/app/lib/database/package-registration";
import FormSchedule from "@/app/ui/admin/form/form-schedule";
import Breadcrumbs from "@/app/ui/breadcrumbs";

export default async function Page() {
    const registrations = await getPagedRegistrations("", 1, 25)
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Penjadwalan', href: '/admin/schedule' },
                    {
                        label: 'Buat Penjadwalan',
                        href: '/admin/schedule/create',
                        active: true,
                    },
                ]}
            />
            <FormSchedule
                registrations={registrations}
            />
        </main>
    )
}