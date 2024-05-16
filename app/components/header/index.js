"use client"
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react"
import { usePathname } from 'next/navigation';
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
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

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header className="w-full bg-primary flex justify-center  " ref={headerRef}>
                <div className="mx-auto container  w-full px-8 py-4">
                    <div className="flex justify-between items-center">

                        <div className="shrink-0  w-1/2 mr-4 ">
                            <Link href="/">
                                <img
                                    src="/images/theoctopuslabslogo.svg"
                                    alt="The Octopus Labs"

                                    className="w-auto h-auto "
                                />
                            </Link>
                        </div>
                        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden block focus:outline-none">
                            {isOpen ?
                                <RiCloseFill size={28} color="white" />
                                :
                                <RiMenu3Fill size={24} color="white" />
                            }
                        </button>
                        <nav className="md:block hidden">
                            <ul className="flex justify-end items-center  flex-wrap grow gap-3 ">
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

                        </nav>
                    </div>
                </div >

            </header>
            <ul className={`${isOpen ? 'fixed flex flex-col gap-12 items-center justify-center inset-0   z-[999] md:hidden  top-[4.7rem] w-full h-full border-r  bg-green-500/90 ease-in-out duration-500 text-white'
                : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 right-[-100%]'}`}>
                {
                    links.map((item, index) => (
                        <li key={index} className="relative">
                            <Link href={item.href} onClick={()=>setIsOpen(false)} className="font-medium text-xl border-b-0 group   text-white  py-2 px-3 md:px-5  ">

                                {item?.title}
                                <div className={`${pathname?.split("/")[1] == item.href?.split("/")[1] ? "w-full" : "w-0"} h-[1px]  bg-white w-0 absolute -bottom-1 group-hover:w-full transition-all   `} />
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}