"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react"
import { usePathname } from 'next/navigation';
import { RiMenu3Fill } from "react-icons/ri";
export default function Header() {
    const headerRef = useRef(null);
    const pathname = usePathname()
    const handleStickyHeader = () => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current?.classList.add("sticky_header")
            } else {
                headerRef.current?.classList.remove("sticky_header")
            }
        })
    }


    useEffect(() => {
        handleStickyHeader()

        return () => {
            window.removeEventListener("scroll", handleStickyHeader)
        }
    }, [])

    const links = [
        {
            title: "Blogs",
            href: "/blogs"
        },
        {
            title: "Team",
            href: "#team",
        },
        {
            title: "Clients",
            href: "/#clients",
        },
        {
            title: "Contact",
            href: "/#contact",
        }

    ]

    return (
        <header className="w-full bg-primary flex justify-center  " ref={headerRef}>
            <div className="mx-auto container  w-full px-8 py-4">
                <div className="flex justify-between items-center">

                    <div className="shrink-0  mr-4 ">
                        <Link href="/">
                            <img
                                src="/images/theoctopuslabslogo.svg"
                                alt="The Octopus Labs"
                                
                                className="w-auto h-auto "
                            />
                        </Link>
                    </div>
                    <nav className="">
                        <ul className="md:flex hidden justify-end items-center  flex-wrap grow gap-3 ">
                            {
                                links.map((item, index) => (
                                    <li key={index} className="relative">
                                        <Link href={item.href} className="font-medium text-base border-b-0 group   text-white  py-2 px-3 md:px-5  ">

                                            {item?.title}
                                            <div className={`${pathname?.split("/")[1] == item.href?.split("/")[1] ? "w-full" : "w-0"} h-[1px]  bg-white w-0 absolute -bottom-1 group-hover:w-full transition-all   `} />
                                        </Link>
                                    </li>
                                ))
                            }
                            {/* <li>
                                <Link to="#contact" spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={800} className="inline-flex cursor-pointer font-bold py-[15px] px-[35px] text-white items-center rounded-[30px]  border-2 border-[#ffffff]/30 bg-[#030304]/30 ">
                                    CONTACT
                                </Link>
                            </li> */}
                        </ul>
                        <div className="md:hidden block cursor-pointer">
                            <RiMenu3Fill size={24} color="white"/>
                        </div>
                    </nav>
                </div>
            </div>

        </header>
    )
}