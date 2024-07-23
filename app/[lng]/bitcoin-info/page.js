import { bitcoin_info_list } from "@/app/utils";
import Link from "next/link";
import { BsBoxArrowUpRight } from "react-icons/bs";
export default function Page() {
    return (
        <div className="mt-20 flex-col flex items-center justify-center">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-8 ">
                {
                    bitcoin_info_list.map(item => (
                        <Link href={item.href} key={item.id} className="group flex items-center justify-between p-4 shadow-md hover:shadow-lg transition-shadow delay-[50] ease-in-out rounded-2xl">
                            <div className="flex flex-col items-start gap-4">
                                <h2 className="text-2xl font-bold text-black">{item.title}</h2>
                                <p className="text-sm text-gray-500" >{item.content}</p>
                            </div>
                            <div className="ml-6 group-hover:text-primary">
                                <BsBoxArrowUpRight size={24} />
                            </div>
                        </Link>
                    ))
                }

            </div>

        </div>
    )
}