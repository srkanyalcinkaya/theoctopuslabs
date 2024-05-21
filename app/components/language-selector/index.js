"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useState } from "react"
import { getLangNameFromCode } from "language-name-map"

const LanguageSelector = ({ lng }) => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const pathArray = pathname.split("/")
    const currentLocale = pathArray[1] //will be a SiteLocale because of the middleware redirect rules

    const pathString = pathArray.splice(2, pathArray.length).join("/")

    const languages = [
        "tr",
        "en"
    ]
    return (
        <div className="relative">
            <div
                onClick={() => {
                    isOpen ? setIsOpen(false) : setIsOpen(true)
                }}
                onBlur={() =>
                    setTimeout(() => {
                        setIsOpen(false)
                    }, 100)
                }
                className="ml-4 inline-flex justify-center  w-28 items-center overflow-hidden rounded-md bg-white transition duration-100 hover:bg-gray-200 active:scale-95 active:bg-gray-300 "
            >
                <button className="inline-flex cursor-pointer items-center text-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-gray-800">
                    {getLangNameFromCode(currentLocale)?.name || currentLocale}
                </button>
            </div>

            <div
                className={
                    "absolute end-0 z-10 ml-4 mt-1 w-full rounded-md border border-gray-100 bg-white shadow-lg" +
                    (isOpen ? "" : " hidden")
                }
                role="menu"
            >
                {languages.map((locale,index) => {
                    return (
                        <div
                            key={index}
                            className="inline-flex w-full cursor-pointer items-end justify-start rounded- text-sm font-medium text-gray-900 hover:bg-gray-100"
                        >
                            <a
                                href={"/" + locale + "/" + pathString}
                                className="block px-4 py-2 text-sm text-gray-700 w-full text-center rounded-lg  hover:bg-gray-600  hover:text-white"
                                role="menuitem"
                            >
                                <div className="inline-flex">
                                    {getLangNameFromCode(locale)?.name || currentLocale}
                                </div>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default LanguageSelector

