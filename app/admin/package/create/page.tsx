import { getAllFacilities } from "@/app/lib/data";
import { getHotels, getPagedHotels } from "@/app/lib/database/hotel";
import { getPagedTransportations, getTransportations } from "@/app/lib/database/transportation";
import Form from "@/app/ui/admin/package/create-form";
import Breadcrumbs from "@/app/ui/breadcrumbs";

export default async function Page() {
  const facilities = await getAllFacilities();
  const hotels = await getHotels();
  const transportations = await getTransportations();
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
        hotels = {hotels}
        transportations={transportations}
      />
    </main>
  )
}