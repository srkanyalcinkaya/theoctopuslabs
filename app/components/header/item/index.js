import Link from "next/link";
import { usePathname } from "next/navigation";

export default async function Item({ data, setIsOpen, intl }) {
    const pathname = usePathname()

    return (
        <li className="relative">
            <Link href={data.href} className="font-medium text-base border-b-0 group   text-white  py-2 px-3 md:px-5  ">

                {intl["header"][data.key]}
                <div className={`${pathname?.split("/")[1] == data.href?.split("/")[1] ? "w-full" : "w-0"} h-[1px]  bg-white w-0 absolute -bottom-1 group-hover:w-full transition-all   `} />
            </Link>
        </li>
    )
}