import React from 'react'

const Team = () => {
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
                    <p className='text-[#A8A8A8] font-rubik text-[18px] font-normal pt-4 tracking-[0.99px] '>TEAM</p>
                    <div className='flex items-center justify-between '>

                        <h2 className='font-syne font-bold text-[64px] text-white '>Our team</h2>
                        <p className='text-[#CECECE] font-rubik font-normal text-[20px] tracking-[1.1px]  w-1/3  '>Our goal is to cover customer needs in great-designed and reliable software.</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12  pt-10'>

                    <div className="border border-white flex flex-col items-center justify-between rounded-3xl p-5 text-center">


                        <img src="/rectangle-40@2x.png" alt="" className='  w-auto' />
                        <h3 className='text-white font-syne text-[32px] font-bold pt-3 '>Andry Ford </h3>
                        <p className='text-[#D4D4D4] font-rubik text-[14px] font-normal tracking-[0.77px] pt-4 '>Blockchain Developer</p>

                    </div>




                </div>
            </div>
        </section>
  )
}

export default Team