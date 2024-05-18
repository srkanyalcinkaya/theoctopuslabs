import Cards from "../../cards"

const cardsData =[
    {
        title:"ReactJS",
        description:"React is a front-end JavaScript library for building user interfaces based on UI components.",
        img:"/images/image-2@2x.png"
    },
    {
        title:"React Native",
        description:"React Native is an UI software framework for developing applications for Android, iOS, macOS and other popular platforms.",
        img:"/images/image-2@2x.png"
    },
    {
        title:"NextJS",
        description:"Next.js is a powerful React framework that enables server-side rendering, static site generation, and provides a robust development environment for building scalable, high-performance web applications.",
        img:"/images/nextjs.png"
    },
    {
        title:"Blockchain",
        description:"Blockchain is a decentralized database technology that is mostly used developing cryptocurrencies like Bitcoin or Ethereum.",
        img:"/images/image-3@2x.png"
    },
    {
        title:"NodeJS",
        description:"A common task for a web server can be to open a file on the server and return the content to the client.",
        img:"/images/image-5@2x.png"
    },
    {
        title:"Figma",
        description:"Figma is a collaborative browser-based interface design tool for creating user interfaces.",
        img:"/images/image-4@2x.png"
    },
    {
        title: "Solidity",
        description: "Solidity is a statically-typed programming language designed for developing smart contracts that run on the Ethereum blockchain.",
        img: "/images/solidity.svg"
    },
    {
        title: "Web3",
        description: "Web3.js is a JavaScript library that allows developers to interact with the Ethereum blockchain, enabling tasks like querying blockchain data and making transactions.",
        img: "/images/web3js.png"
    },
    {
        title: "Ethers",
        description: "Ethers.js is a JavaScript library designed for interacting with the Ethereum blockchain and its ecosystem, focusing on simplicity, security, and performance.",
        img: "/images/etherjs.svg"
    },
    {
        title: "Flask",
        description: "Flask is a lightweight WSGI web application framework in Python. It is designed with simplicity and flexibility in mind, making it easy to get started quickly and scale up to more complex applications.",
        img: "/images/flask.png"
    }
]

export default function Technologies() {


    return (
        <section className='relative max-w-6xl mx-auto px-2 md:px-4 '>
            <div className='pt-22    md:pt-28  flex flex-col justify-between'>
                <div className='pt-32  flex flex-col items-start justify-start'>
                    <div className='flex md:flex-row flex-col text-start items-start md:items-center  justify-between md:gap-0 gap-2'>

                        <h2 className=' font-bold text-3xl md:text-6xl  text-slate-900 '>The technologies <br className="md:block hidden"/> that we use</h2>
                        <p className='text-slate-600 font-rubik font-normal text-sm md:text-base md:w-1/3  '>We believe that engineering is a powerful tool that can be used to improve the world, and we are committed to using our skills to make a difference.</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  pt-10 place-items-start'>
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