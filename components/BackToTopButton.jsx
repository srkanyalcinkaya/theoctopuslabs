"use client"
import React, { useEffect, useState } from 'react';

const BackToTopButton = () => {
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

                // <button
                //     onClick={scrollToTop}
                //     style={{
                //         position: 'fixed',
                //         padding: '1rem 2rem',
                //         fontSize: '20px',
                //         bottom: '40px',
                //         right: '40px',
                //         backgroundColor: '#0C9',
                //         color: '#fff',
                //         textAlign: 'center',
                //         zIndex: "999"
                //     }}
                // >
                //     Scroll to top
                // </button>
               <button id="to-top-button"  onClick={scrollToTop} title="Go To Top" className=" fixed z-90 bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-blue-500/50 text-white text-5xl font-bold">↑</button>

                

            }
        </>
    );
};

export default BackToTopButton;
