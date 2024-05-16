import React from 'react'
import TeamItem from './team-item'

export default function Team () {
    return (
        <section id="team" className=' max-w-6xl mx-auto px-2 md:px-4 '>
            
            <div className='pt-22    md:pt-28  flex flex-col justify-between'>
                <div className='pt-32 flex flex-col items-start justify-'>
                    <div className='flex flex-col md:flex-row items-start md:items-center justify-between w-full'>
                        <h2 className='font-syne font-bold text-3xl md:text-4xl text-black '>Our team</h2>
                        <p className='text-black  font-normal text-lg md:w-1/3  '>Our goal is to cover customer needs in great-designed and reliable software.</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12  pt-10'>
                    <TeamItem/>
                </div>
            </div>
        </section>
    )
}

