"use client"
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
    const pathname = usePathname()
    const headerRef = useRef<HTMLElement | null>(null);
    const handleStickyHeader = () => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current?.classList.add("sticky_header")
            } else {
                headerRef.current?.classList.remove("sticky_header")
            }
        })
    }

    console.log(pathname)
    useEffect(() => {
        handleStickyHeader()

        return () => {
            window.removeEventListener("scroll", handleStickyHeader)
        }
    }, [])

    const links = [
        {
            key: "blogs",
            href: `/blogs`,
            separator: true
        },
        // {
        //     key: "bitcoin-info",
        //     href: `/bitcoin-info`,
        //     separator: true
        // },
        {
            key: "team",
            href: `/#team`,
            separator: false
        },
        {
            key: "clients",
            href: `/#clients`,
            separator: false
        },
        {
            key: "contact",
            href: `/#contact`,
            separator: false
        }

    ]

    // Type definitions for translations
    type HeaderKeys = "blogs" | "team" | "clients" | "contact";

    interface IntlType {
        header: Record<HeaderKeys, string>;
    }

    const intl: IntlType = {
        header: {
            "blogs": "Blogs",
            "team": "Our Team",
            "clients": "Clients",
            "contact": "Contact"
        }
    }

    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <header className="w-full flex justify-center transition-all duration-300" ref={headerRef}>
                <div className="mx-auto container w-full px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div className="shrink-0 mr-4">
                            <Link href="/" className="font-ppNeueMachina text-[#ff1d25] text-2xl md:text-3xl font-bold tracking-wider hover:opacity-90 transition-opacity flex items-center">
                                <span className="mr-2">The Octopus Labs</span>
                            </Link>
                        </div>
                        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden block focus:outline-none z-[1000] relative">
                            {isOpen ?
                                <X size={28} className="text-[#ff1d25]" />
                                :
                                <Menu size={24} className="text-[#ff1d25]" />
                            }
                        </button>
                        <nav className="md:block hidden">
                            <ul className="flex justify-end items-center flex-wrap grow gap-8">
                                {
                                    links.map((item) => (
                                        <li className="relative" key={item.key}>
                                            <Link href={item.href} className="font-medium text-base group text-[#ff1d25] transition-colors duration-300 py-2 px-1">
                                                {intl.header[item.key as HeaderKeys]}
                                                <div className={`${item.separator && (pathname == item.href ? "w-full" : "w-0")} h-[2px] hover_hover bg-[#ff1c24d9] w-0 absolute -bottom-1 left-0 group-hover:w-full transition-all duration-300`} />
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                        <div className="md:hidden block">
                        </div>
                    </div>
                </div>
            </header>
            <div className={`${isOpen ? 'fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm' : 'hidden'} md:hidden`}></div>
            <ul className={`${isOpen ? 'fixed flex flex-col gap-8 items-center justify-center inset-0 z-[999] md:hidden top-0 w-[80%] h-full border-r bg-[#ff1d25] shadow-xl ease-in-out duration-300 text-white'
                : 'ease-in-out w-[80%] duration-300 fixed top-0 bottom-0 right-[-100%]'}`}>
                <div className="absolute top-6 left-6">
                    <Link href="/" onClick={() => setIsOpen(false)} className="font-ppNeueMachina text-white text-xl font-bold tracking-wider">
                        The Octopus Labs
                    </Link>
                </div>
                {
                    links.map((item) => (
                        <li className="relative" key={item.key}>
                            <Link href={item.href} onClick={() => setIsOpen(false)} className="font-medium text-base border-b-0 group text-white py-2 px-3 md:px-5 hover:scale-110 transition-transform duration-300">
                                {intl.header[item.key as HeaderKeys]}
                                <div className="h-[2px] bg-white w-0 absolute -bottom-1 left-0 group-hover:w-full transition-all duration-300" />
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

