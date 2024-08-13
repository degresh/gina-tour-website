import { PackageRegistration } from "@/app/lib/entity/package-registration";
import Pagination from "@/app/ui/admin/pagination";
import TableRegistrationUser from "@/app/ui/user/table-registration-user";

export default function PackageRegistrationContent({ pages, registrations}: {
    pages: number,
    registrations: PackageRegistration[]
}) {
    return (
        <div className="flex-col h-full">
            <div className="h-full grow md:block">
                <TableRegistrationUser packageRegistrations={registrations}/>
            </div>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={pages}/>
            </div>
        </div>
    )
}