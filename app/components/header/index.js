"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react"
export default function Header() {
    const headerRef = useRef(null);

    const handleStickyHeader = () => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add("sticky_header")
            } else {
                headerRef.current.classList.remove("sticky_header")
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
        <header className="w-full bg-primary " ref={headerRef}>
            <div className="mx-auto max-w-6xl px-2 md:px-4 md:py-6 py-2">
                <div className=" flex justify-between items-center">

                    <div className="shrink-0  mr-4 ">
                        <Link href="/">
                            <Image
                                src="/images/theoctopuslabslogo.png"
                                alt="The Octopus Labs"
                                width={500}
                                height={500}
                                className="h-auto w-auto"
                            />
                        </Link>
                    </div>
                    <nav className="md:block hidden  ">
                        <ul className="flex justify-end items-center  flex-wrap grow gap-3 ">
                            {
                                links.map((item, index) => (
                                    <li key={index} className="relative">
                                        <Link href={item.href} className="font-medium text-base border-b-0 group   text-white  py-2 px-3 md:px-5  ">

                                            {item?.title}
                                            <div className="h-[1px]  bg-white w-0 absolute -bottom-1 group-hover:w-full transition-all   " />
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
                    </nav>
                </div>
            </div>

        </header>
    )
}