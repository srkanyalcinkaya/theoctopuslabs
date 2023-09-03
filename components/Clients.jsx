import React from 'react'
// TECHNOLOGIES
const Clients = () => {
  return (
    <section className='relative max-w-6xl mx-auto px-2 md:px-4 '>
            <div className="z-10 left-[30%] top-0 absolute">
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
            <div className='pt-22    md:pt-28  flex flex-col justify-between'>
                <div className='pt-32 flex flex-col items-start justify-start'>
                    <p className='text-[#A8A8A8] font-rubik text-[18px] font-normal pt-4 tracking-[0.99px] '>CLIENTS</p>
                    <h2 className='font-syne font-bold text-[64px] text-white '>Our clients</h2>
                    {/* <button className='uppercase text-black font-rubik text-[13px] font-bold rounded-[32.5px] bg-white py-6 px-10 mt-6 tracking-[1.625px]'>Start BUILDING</button> */}
                </div>
                <div className='flex items-center justify-between space-x-10 py-6 '>
                   
                    <div className="hover:translate-y-[-24px] transition ease-in-out delay-150 bg-[url('/background@2x.png')] w-[334px] h-[207px] bg-no-repeat bg-cover p-5    ">
                        <div className='flex items-center justify-between'>

                        <img src="/image-1@2x.png" alt="" className='h-[77px] w-[77px]'/>
                        <h3 className='text-white font-syne text-[40px] font-bold  '>Chavinci </h3>
                        </div>
                        <p className='text-[#D4D4D4] font-rubik text-[16px] font-normal tracking-[0.99px] pt-4 '>Payment platform that enables seamless transactions between blockchain and the banking system.</p>
                        
                    </div>
                    
                    
                    

                   
                </div>
            </div>
        </section>
  )
}

export default Clients