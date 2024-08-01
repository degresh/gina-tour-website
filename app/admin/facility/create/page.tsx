import Form from "@/app/ui/admin/facility/create-form";
import Breadcrumbs from "@/app/ui/breadcrumbs";

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Fasilitas', href: '/admin/facility' },
          {
            label: 'Buat Fasilitas',
            href: '/admin/facility/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}