import { getPaymentMethodPages, getPagedPaymentMethods } from "@/app/lib/database/payment-method";
import Pagination from "@/app/ui/admin/pagination";
import PaymentMethodTable from "@/app/ui/admin/table/table-payment-method";
import { CreateButton } from "@/app/ui/button";
import Search from "@/app/ui/search";

export default async function Page({ searchParams }: {
    searchParams?: {
        query?: string;
        page?: string;
    }
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await getPaymentMethodPages(query);
    const paymentMethods = await getPagedPaymentMethods(query, currentPage);

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className="text-2xl">Methode Pembayaran</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Cari Metode Pembayaran..."/>
                <CreateButton href="/admin/payment-method/create" text="Tambah Metode Pembayaran"/>
            </div>
            { totalPages > 0 ? (
                <div className="flex grow flex-col h-full">
                    <div className="h-full grow md:block">
                        <PaymentMethodTable paymentMethods={paymentMethods}/>
                    </div>
                    <div className="mt-5 flex w-full justify-center">
                        <Pagination totalPages={totalPages}/>
                    </div>
                </div>
            ) : (
                <div className="w-full flex place-content-center">
                    <h2 className="self-center m-12">Tidak ada metode pembayaran tersedia</h2>
                </div>
            ) }
        </div>
    );
}