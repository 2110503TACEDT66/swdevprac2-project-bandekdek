import Link from "next/link";

export default function AddInformationButton({text, params}:{text:string, params?:string}) {
    return (
        <button className="rounded-md bg-red-500 hover:bg-red-800 px-2.5 py-2 mt-3 shadow-sm text-white">
            {text}
        </button>
    )
}