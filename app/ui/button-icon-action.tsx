import { ForwardRefExoticComponent, SVGProps } from "react";

export default function ButtonIconAction({ action, icon }: {
    action: () => void;
    icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref">>;
}) {
    const IconButton = icon;
    return (
        <button className="rounded-md border p-2 hover:bg-gray-100" onClick={action}>
            <span className="sr-only">Action</span>
            <IconButton className="w-5"/>
        </button>
    );
}