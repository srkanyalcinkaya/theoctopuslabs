import Cards from "@/app/components/cards"

const cardsData = [
    {
        title:"Chavinci Network",
        description:"Chavinci is a Layer 1 blockchain network utilizing the Proof of Stake v3.0 consensus algorithm and Modular Ledger Technology, designed to cater to both end users and businesses.",
        img:"/images/cha.svg"
    },
    {
        title:"LawLinkGlobal",
        description:"LawLinkGlobal is an innovative legal service platform operating on blockchain, connecting users with a global network of attorneys and facilitating professional interactions among lawyers.",
        img:"/images/llg.png"
    },
    {
        title:"Tabirle",
        description:"Describe your dream and let Tabirle’s AI interpret its meaning. With AI, we provide comprehensive dream analysis and visualization, helping you remember and share your dreams.",
        img:"/images/tabirle.png"
    },
    {
        title:"Salt and Partners",
        description:"Salt & Partners pioneers a unique partnership model, uniting consultants and lawyers from around the world to deliver seamless cross-border legal and consultancy services, creating an international network.",
        img:"/images/salt&partners.png"
    },
    {
        title:"Genesis Hukuk",
        description:"Genesis Law is a leading firm offering legal advice and support in blockchain technology. We combine expertise in law, technology, and project management to help clients navigate blockchain interactions securely and efficiently.",
        img:"/images/genesislaw.png"
    },
]


export default function Clients() {
    
    return (
        <section id="clients" className='relative max-w-6xl mx-auto px-2 md:px-4 '>

            <div className='pt-22  w-full  md:pt-28  flex flex-col justify-between gap-8'>
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