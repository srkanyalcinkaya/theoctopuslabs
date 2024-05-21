'use client'
import Cards from "@/app/components/cards"


const cardsData = [
    {
        key: "chavinci-network",
        img: "/images/cha.svg"
    },
    {
        key: "lawlinkglobal",
        img: "/images/llg.png"
    },
    {
        key: "tabirle",
        img: "/images/tabirle.png"
    },
    {
        key: "salt-and-partners",
        img: "/images/salt&partners.png"
    },
    {
        key: "genesis-law",
        img: "/images/genesislaw.png"
    },
];

export default function Clients({ intl }) {
    
    return (
        <section id="clients" className='relative max-w-6xl mx-auto px-2 md:px-4 '>

            <div className='pt-22  w-full  md:pt-28  flex flex-col justify-between gap-8'>
                <div className='pt-32 text-start'>
                    <h2 className='font-bold text-3xl md:text-5xl text-black '>{intl["clients"].title}</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-6 w-full '>

                    {
                        cardsData.map(item => (
                            <Cards item={item} intl={intl} key={item.title} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}