import { getAllFacilities } from "@/app/lib/data";
import Form from "@/app/ui/admin/package/create-form";
import Breadcrumbs from "@/app/ui/breadcrumbs";

export default async function Page() {
  const facilities = await getAllFacilities()
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Paket', href: '/admin/package' },
          {
            label: 'Buat Paket',
            href: '/admin/package/create',
            active: true,
          },
        ]}
      />
      <Form
        includedFacilities={facilities}
        excludedFacilities={facilities}
      />
    </main>
  )
}