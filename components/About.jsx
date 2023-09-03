import React from 'react'
const About = () => {
    return (
        <section className='relative max-w-6xl mx-auto px-2 md:px-4 '>
            <div className="z-10 right-[50%] top-0 absolute">
                <svg xmlns="http://www.w3.org/2000/svg" width="917" height="651" viewBox="0 0 917 651" fill="none">
                    <g filter="url(#filter0_f_101_462)">
                        <path d="M485.187 449.805C580.282 443.548 642.347 408.446 702.715 326.776C825.011 161.329 110.485 108.772 209.995 290.534C272.738 405.139 363.72 457.796 485.187 449.805Z" fill="white" fillOpacity="0.18" />
                    </g>
                    <defs>
                        <filter id="filter0_f_101_462" x="0.454956" y="-23.6465" width="916.391" height="674.24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_101_462" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className='pt-28 md:pt-32  flex flex-col justify-between'>
                <div className='pt-32 flex flex-col items-start justify-start'>
                    <p className='text-[#A8A8A8] font-rubik text-[18px] font-normal pt-4 tracking-[0.99px] '>ABOUT US</p>
                    <h2 className='font-syne font-bold text-[64px] text-white '>Why are we the <br /> best option for you?</h2>
                    {/* <button className='uppercase text-black font-rubik text-[13px] font-bold rounded-[32.5px] bg-white py-6 px-10 mt-6 tracking-[1.625px]'>Start BUILDING</button> */}
                </div>
                <div className='flex items-center justify-between space-x-10 py-6 '>
                   
                    <div className='bg-[url("/background3@2x.png")] bg-cover   transition ease-in-out delay-150  max-w-[339px] min-h-[548px] bg-gray-600/40 hover:bg-gray-400/30 rounded-3xl flex flex-col justify-around items-center   p-4 hover:translate-y-[-24px]'>
                        
                        <img src="/26@2x.png" className=' ' alt="" />
                        <h3 className='text-white text-[40px] font-bold font-syne text-center '>Design</h3>
                        <p className='text-[#F6F6F6] font-rubik text-[14px] font-normal tracking-[0.99px] text-center items-start'>Our designs are functional and will always be useful.</p>
                    </div>
                    <div className=' bg-[url("/background1@2x.png")] bg-cover transition ease-in-out delay-150 max-w-[339px] min-h-[548px] bg-gray-600/40 hover:bg-gray-400/30 rounded-3xl flex flex-col justify-around items-center   p-4 hover:translate-y-[-24px]'>
                        
                        <img src="/1@2x.png" className=' ' alt="" />
                        <h3 className='text-white text-[40px] font-bold font-syne text-center '>Usability</h3>
                        <p className='text-[#F6F6F6] font-rubik text-[14px] font-normal tracking-[0.99px] text-center items-start'>We are listening to our users' feedback and making changes based on their needs.</p>
                    </div>
                    <div className='bg-[url("/background2@2x.png")] bg-cover transition ease-in-out delay-150 max-w-[339px] min-h-[548px] bg-gray-600/40 hover:bg-gray-400/30 rounded-3xl flex flex-col justify-around items-center   p-4 hover:translate-y-[-24px]'>
                        
                        <img src="/36@2x.png" className=' ' alt="" />
                        <h3 className='text-white text-[40px] font-bold font-syne text-center '>Engineering</h3>
                        <p className='text-[#F6F6F6] font-rubik text-[14px] font-normal tracking-[0.99px] text-center items-start'>We are committed to providing our clients with the best possible technology solutions.</p>
                    </div>
                    
                    

                   
                </div>
            </div>
        </section>
    )
}

export default About