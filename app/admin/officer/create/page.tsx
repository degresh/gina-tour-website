import Form from "@/app/ui/admin/officer/create-form";
import Breadcrumbs from "@/app/ui/breadcrumbs";

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Petugas', href: '/admin/officer' },
          {
            label: 'Buat Petugas',
            href: '/admin/officer/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}