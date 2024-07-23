"use client"
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react"
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import LanguageSelector from "../language-selector";
import { usePathname } from "next/navigation";

export default function Header({ lng, intl }) {
    const pathname = usePathname()
    const headerRef = useRef(null);
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
            key: "blogs",
            href: `/${lng}/blogs`,
            separator: true
        },
        {
            key: "bitcoin-info",
            href: `/${lng}/bitcoin-info`,
            separator: true
        },
        {
            key: "team",
            href: `/${lng}/home/#team`,
            separator: false
        },
        {
            key: "clients",
            href: `/${lng}/home/#clients`,
            separator: false
        },
        {
            key: "contact",
            href: `/${lng}/home/#contact`,
            separator: false
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
                            <ul className="flex justify-end items-center  flex-wrap grow gap-6 ">
                                {
                                    links.map((item) => (
                                       <li className="relative" key={item.key}>
                                            <Link href={item.href} className="font-medium text-base border-b-0 group   text-white    ">

                                                {intl["header"][item.key]}
                                                <div className={`${item.separator && (pathname?.split("/")[2] == item.href?.split("/")[2] ? "w-full" : "w-0")} h-[1px]  bg-white w-0 absolute -bottom-1 group-hover:w-full transition-all   `} />
                                            </Link>
                                        </li>
                                    ))
                                }
                                
                            </ul>

                        </nav>
                        <LanguageSelector lng={lng} />
                    </div>
                </div >

            </header>
            <ul className={`${isOpen ? 'fixed flex flex-col gap-12 items-center justify-center inset-0   z-[999] md:hidden  top-[4.4rem] w-full h-full border-r  bg-green-500/90 ease-in-out duration-500 text-white'
                : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 right-[-100%]'}`}>
                {
                    links.map((item) => (
                        <li className="relative" key={item.key}>
                            <Link href={item.href} onClick={()=> setIsOpen(false)} className="font-medium text-base border-b-0 group   text-white  py-2 px-3 md:px-5  ">

                                {intl["header"][item.key]}
                                <div className={`${item.separator && (pathname?.split("/")[2] == item.href?.split("/")[2] ? "w-full" : "w-0")} h-[1px]  bg-white w-0 absolute -bottom-1 group-hover:w-full transition-all   `} />
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

