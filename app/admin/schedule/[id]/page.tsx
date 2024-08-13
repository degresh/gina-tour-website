import Breadcrumbs from "@/app/ui/breadcrumbs";

export default async function Page({params}: { params: { id: string } }) {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Penjadwalan', href: '/admin/schedule' },
                    {
                        label: 'Detail Penjadwalan',
                        href: `/admin/schedule/${params.id}`,
                        active: true,
                    },
                ]}
            />
            {/*<FormSchedule*/}
            {/*    registrations={registrations}*/}
            {/*/>*/}
        </main>
    )
}