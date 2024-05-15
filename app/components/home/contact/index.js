"use client"
import React, { useState } from 'react'
export default function Contact() {
    function valuetext(value) {
        return `$${value}`
    }
    const [value, setValue] = React.useState([10000, 15000])

    const handleChanges = (event, newValue) => {
        setValue(newValue)
    }




    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        bugdet: `$${value[0]} - $${value[1]}`
    })


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(form);
    };
    return (
        <div className=' flex flex-col items-center justify-center mt-20 '>
            <div className="flex  justify-center max-w-xl w-full ">
                <form className='w-full flex flex-col  gap-6' onSubmit={handleSubmit}>
                    <h3 className='text-slate-900 text-2xl md:text-5xl font-bold '>Let`s talk!</h3>
                    <p className=' text-[14px] font-normal text-slate-900/70   '>Lt's discuss what you need and how we can help you!</p>
                    <div>
                        <input type="text" onChange={handleChange} value={form.name} name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5  dark:border-gray-600  dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-slate-900  placeholder:font-normal" placeholder="Your Name*" />
                    </div>
                    <div>
                        <input type="email" onChange={handleChange} value={form.email} name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5  dark:border-gray-600  dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-slate-900  placeholder:font-normal" placeholder="Your Email*" />
                    </div>
                    <div>
                        <textarea placeholder='How can we help?*' onChange={handleChange} value={form.message} name="message" rows="4" cols="50" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5  dark:border-gray-600  dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-slate-900  placeholder:font-normal">

                        </textarea>
                    </div>


                    <button type='submit' className=' text-white  text-base font-bold rounded-full bg-secondary py-4 capitalize  '>submit</button>
                </form>
            </div>
            {/* <div className='flex items-center justify-between w-full'>

                <img src="/logothe.png" alt="" />
                <div className=' flex items-center justify-center space-x-6  '>
                    <div className='border border-white p-1 rounded-md '>

                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M8.79236 6.75L9.12564 4.57828H7.04181V3.16898C7.04181 2.57484 7.33291 1.9957 8.26619 1.9957H9.21353V0.146719C9.21353 0.146719 8.35384 0 7.53189 0C5.8158 0 4.69408 1.04016 4.69408 2.92313V4.57828H2.7865V6.75H4.69408V12H7.04181V6.75H8.79236Z" fill="white" />
                        </svg>
                    </div>
                    <div className='border border-white p-1 rounded-md '>

                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M3.10031 10.5H0.923438V3.48985H3.10031V10.5ZM2.0107 2.5336C1.31461 2.5336 0.75 1.95704 0.75 1.26095C0.75 0.926588 0.882824 0.605923 1.11925 0.369496C1.35568 0.133068 1.67634 0.000244141 2.0107 0.000244141C2.34506 0.000244141 2.66573 0.133068 2.90215 0.369496C3.13858 0.605923 3.27141 0.926588 3.27141 1.26095C3.27141 1.95704 2.70656 2.5336 2.0107 2.5336ZM11.2477 10.5H9.07547V7.08751C9.07547 6.27423 9.05906 5.23126 7.94367 5.23126C6.81187 5.23126 6.63844 6.11485 6.63844 7.02892V10.5H4.46391V3.48985H6.55172V4.4461H6.58219C6.87281 3.89532 7.58273 3.31407 8.64188 3.31407C10.845 3.31407 11.25 4.76485 11.25 6.64923V10.5H11.2477Z" fill="white" />
                        </svg>
                    </div>
                    <div className='border border-white p-1 rounded-md '>

                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M11.2195 2.31098L9.63515 9.78285C9.51562 10.3102 9.20391 10.4414 8.76094 10.193L6.34687 8.4141L5.18203 9.53441C5.05312 9.66332 4.94531 9.77113 4.69687 9.77113L4.87031 7.31254L9.34453 3.26957C9.53906 3.09613 9.30234 3.00004 9.04219 3.17348L3.51094 6.65629L1.12969 5.91098C0.611717 5.74926 0.602342 5.39301 1.2375 5.14457L10.5516 1.55629C10.9828 1.39457 11.3602 1.65238 11.2195 2.31098Z" fill="white" />
                        </svg>
                    </div>
                    <div className='border border-white p-1 rounded-md '>

                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M10.7665 3.55588C10.7741 3.66247 10.7741 3.76909 10.7741 3.87568C10.7741 7.12693 8.2995 10.8731 3.77665 10.8731C2.38324 10.8731 1.08884 10.4696 0 9.76909C0.197977 9.79191 0.388312 9.79953 0.593906 9.79953C1.74363 9.79953 2.80202 9.41122 3.6472 8.74878C2.56598 8.72593 1.65989 8.01781 1.3477 7.04319C1.5 7.06602 1.65227 7.08125 1.81219 7.08125C2.03299 7.08125 2.25382 7.05078 2.45939 6.99751C1.33249 6.76906 0.487289 5.77923 0.487289 4.5838V4.55335C0.814687 4.73609 1.19543 4.8503 1.59895 4.86552C0.936516 4.42388 0.502523 3.67009 0.502523 2.81729C0.502523 2.36045 0.624328 1.94166 0.837539 1.57618C2.0482 3.06856 3.86801 4.04316 5.90859 4.14978C5.87053 3.96704 5.84768 3.7767 5.84768 3.58634C5.84768 2.231 6.94413 1.12695 8.30707 1.12695C9.01519 1.12695 9.65477 1.42391 10.104 1.9036C10.6598 1.79701 11.1928 1.59141 11.6649 1.3097C11.4822 1.88077 11.0939 2.36047 10.5837 2.66502C11.0786 2.61174 11.5583 2.47466 12 2.28432C11.665 2.77161 11.2462 3.2056 10.7665 3.55588Z" fill="white" />
                        </svg>
                    </div>
                    <div className='border border-white p-1 rounded-md '>

                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M1.2018 3.53042L6 5.92922L10.7982 3.53042C10.7804 3.22469 10.6465 2.93732 10.4237 2.72716C10.2009 2.517 9.90625 2.39997 9.6 2.40002H2.4C2.09375 2.39997 1.79907 2.517 1.5763 2.72716C1.35354 2.93732 1.21956 3.22469 1.2018 3.53042Z" fill="white" />
                            <path d="M10.8 4.87085L6 7.27085L1.2 4.87085V8.40005C1.2 8.71831 1.32643 9.02353 1.55147 9.24858C1.77651 9.47362 2.08174 9.60005 2.4 9.60005H9.6C9.91826 9.60005 10.2235 9.47362 10.4485 9.24858C10.6736 9.02353 10.8 8.71831 10.8 8.40005V4.87085Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div> */}
            {/* <p className='font-bold text-[16px]  text-white '>Privacy Policy</p> */}
        </div>
    )
}