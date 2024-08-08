import { TrashIcon } from "@heroicons/react/24/solid";

export default function ButtonIconAction({action}: {
    action: () => void;
}) {
    return (
        <button className="rounded-md border p-2 hover:bg-gray-100" onClick={action}>
            <span className="sr-only">Action</span>
            <TrashIcon className="w-5"/>
        </button>
    );
}