"use client"
import { useState, useEffect, useRef } from "react"
import { Link } from 'react-scroll';
// import Link from "next/link"
// import Logo from "./logo"
// import MobileMenu from "./mobile-menu"

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
    return (
        <header className="w-full  " ref={headerRef}>
            <div className="mx-auto max-w-6xl px-2 md:px-4 py-4">
                <div className="md:h-20 flex justify-between items-center">
                    {/* Site Branding */}
                    <div className="shrink-0  mr-4 ">
                        <a href="/" className="block ">
                            <img src="/logothe.png" alt="" />
                        </a>
                    </div>
                    <nav className="grow flex  ">
                        <ul className="flex justify-end items-center  flex-wrap grow text-[14px] ">
                            <li>
                                <a href="/" className="font-medium  text-white  py-2 px-3 md:px-5  ">HOME</a>
                            </li>
                            <li><a href="/" className="font-medium text-white  py-2 px-3 md:px-5  ">FIELD</a></li>
                            <li>
                                <Link to="contact" spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={800} className="inline-flex cursor-pointer font-bold py-[15px] px-[35px] text-white items-center rounded-[30px]  border-2 border-[#ffffff]/30 bg-[#030304]/30 ">
                                    CONTACT
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </header>
    )
}
