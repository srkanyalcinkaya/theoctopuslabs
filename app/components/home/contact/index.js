"use client"
import React, { useState } from 'react'
export default function Contact({intl}) {
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
        <div id="contact" className='flex flex-col items-center justify-center mt-20 '>
            <div className="flex  justify-center max-w-xl w-full ">
                <form className='w-full flex flex-col  gap-6' onSubmit={handleSubmit}>
                    <h3 className='text-slate-900 text-2xl md:text-5xl font-bold '>{intl["contact"].title}</h3>
                    <p className=' text-[14px] font-normal text-slate-900/70   '>{intl["contact"].description}</p>
                    <div>
                        <input type="text" onChange={handleChange} value={form.name} name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5  dark:border-gray-600  dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-slate-900  placeholder:font-normal" placeholder={intl["contact"].name} />
                    </div>
                    <div>
                        <input type="email" onChange={handleChange} value={form.email} name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5  dark:border-gray-600  dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-slate-900  placeholder:font-normal" placeholder={intl["contact"].email} />
                    </div>
                    <div>
                        <textarea placeholder={intl["contact"]["how-can-help-you"]} onChange={handleChange} value={form.message} name="message" rows="4" cols="50" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5  dark:border-gray-600  dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-slate-900  placeholder:font-normal">

                        </textarea>
                    </div>


                    <button type='submit' className=' text-white  text-base font-bold rounded-full bg-secondary py-4 capitalize  '>{intl["contact"].submit}</button>
                </form>
            </div>
        </div>
    )
}