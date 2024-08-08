import { ForwardRefExoticComponent, SVGProps } from "react";

export default function DashboardCard({ name, value, icon }: {
    name: string;
    value: number;
    icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref">>;
}) {
    const CardIcon = icon;
    return (
        <div className="grow basis-1/4 p-4 bg-blue-600 text-white rounded-lg space-y-4">
            <div className="flex flex-row items-center space-x-2">
                <CardIcon className="w-6 h-6 text-white"/>
                <h1>{name}</h1>
            </div>
            <h1 className="text-3xl">{value}</h1>
        </div>
    )
}