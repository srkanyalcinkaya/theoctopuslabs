import Cards from "@/app/components/cards"

const cardsData = [
    {
        title:"Chavinci Network",
        description:"Payment platform that enables seamless transactions between blockchain and the banking system.",
        img:"/images/cha.svg"
    }
]


export default function Clients() {
    
    return (
        <section id="clients" className='relative max-w-6xl mx-auto px-2 md:px-4 '>

            <div className='pt-22  w-full  md:pt-28  flex flex-col justify-between'>
                <div className='pt-32 text-start'>
                    <h2 className='font-bold text-3xl md:text-5xl text-black '>Our clients</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-6 w-full '>

                    {
                        cardsData.map(item=>(
                            <Cards item={item} key={item.title} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}