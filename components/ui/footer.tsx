import { Github, Linkedin, Send, Twitter } from "lucide-react"
import Link from "next/link"
import { Boxes } from "./background-boxes"


export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="h-96 relative w-full flex items-center justify-center overflow-hidden bg-black">
            <Boxes className="absolute -top-5/4 w-full h-full z-0" />
            <div className="flex flex-col max-w-sm items-center justify-center  rounded-lg relative z-20 ">

                <div className="container flex flex-col mx-auto">
                    <div className="flex flex-col items-center w-full my-20">
                        <div className="mb-8">
                            <Link href="/" className=" text-[#ff1d25] text-2xl md:text-3xl font-bold tracking-wider hover:opacity-90 transition-opacity flex items-center">
                                <span className="mr-2">The Octopus Labs</span>
                            </Link>
                        </div>
                        <div className="flex flex-col items-center gap-6 mb-8">
                            <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
                                <Link href="/blogs" className="text-white hover:text-gray-300">Blogs</Link>
                                <Link href="/#team" className="text-white hover:text-gray-300">Team</Link>
                                <Link href="/#clients" className="text-white hover:text-gray-300">Clients</Link>
                                <Link href="/#contact" className="text-white hover:text-gray-300">Contact</Link>
                            </div>
                            <div className="flex items-center gap-8">

                                <a href="https://x.com/TheOctopusLabs" className="text-white hover:text-rose-500">
                                    <Twitter />
                                </a>
                                <a href="https://github.com/TheOctopusLabs" className="text-white hover:text-rose-500">
                                    <Github />
                                </a>
                                <a href="t.me/theoctopuslabs" className="text-white hover:text-rose-500">
                                    <Send />
                                </a>
                                <a href="https://www.linkedin.com/company/the-octopus-labs" className="text-white hover:text-rose-500">
                                    <Linkedin />
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <p className="text-sm font-normal leading-7 text-center text-white">
                                {year} The Octopus Labs. All rights reserved.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap mb-5">
                    <div className="w-full max-w-full sm:w-3/4 mx-auto text-center">
                        <p className="text-xs text-white py-1">
                            Made with ❤️ by  <a href="https://github.com/srkanyalcinkaya" className="text-white hover:text-red-500" target="_blank">srkanyalcinkaya</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    )
}