"use client"
import React, { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export default function BackToTopButton() {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };
    useEffect(() => {

        window.addEventListener('scroll', toggleVisible);
    }, [])


    return (
        <>
            {visible &&
                <button
                    id="to-top-button"
                    onClick={scrollToTop}
                    title="Go To Top"
                    className=" fixed z-[999] bottom-8 right-8 border-0 flex items-center justify-center md:w-16 md:h-16 w-8 h-8 rounded-full drop-shadow-md bg-secondary/80 text-white">
                    <MdKeyboardDoubleArrowUp className="md:h-8 md:w-8 w-4 h-4"/>
                </button>
            }
        </>
    );
};

