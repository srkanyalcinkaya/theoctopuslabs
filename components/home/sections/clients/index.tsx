"use client"
import React from "react"
import { motion } from "framer-motion"
import { PinContainer } from "@/components/ui/3d-pin";
import Link from "next/link";
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


const clients = [
    {
        name: "Your Wallet",
        logo: "/images/clients/yourwallet-logo.png",
        description: "Software Development & Wallet Solutions",
        href:"https://yourwallet.tr/"
    },
    {
        name: "Chavinci Network",
        logo: "/images/clients/cha.svg",
        description: "Software Development & Blockchain Solutions",
        href:"https://chavinci.com/"
    },
    {
        name: "LawLinkGlobal",
        logo: "/images/clients/llg-bg-logo.png",
        description: "Blockchain Solutions & Web Development",
        href:"https://www.lawlinkglobal.com/"
    },
    {
        name: "Oğul Sigorta",
        logo: "/images/clients/ogulsigorta-logo.png",
        description: "Web Development & CMS",
        href:"https://www.ogulsigorta.com/"
    },
    {
        name: "Coolhub Bag",
        logo: "/images/clients/coolhub-logo.webp",
        description: "Web Development & Cloud Solutions",
        href:"https://www.coolhub-bag.com/"
    },
    {
        name: "Salt & Partners",
        logo: "/images/clients/salt&partners.png",
        description: "Web Development",
        href:"https://www.saltandpartners.com/"
    },
    {
        name: "Chavinci Wallet",
        logo: "/images/clients/cha.svg",
        description: "Mobile Applications & Blockchain Solutions",
        href:"https://chavinci.com/"
    },
    {
        name: "Genesis Hukuk",
        logo: "/images/clients/genesislaw.png",
        description: "Web Development",
        href:"https://www.genesishukuk.com/"
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5
        }
    }
}

export default function Clients() {
    return (
        <section id="clients" className="py-20 bg-black relative overflow-hidden">
            {/* Technology background animation */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full">
                    {Array.from({ length: 30 }).map((_, index) => (
                        <motion.div
                            key={index}
                            className="absolute w-1 h-1 rounded-full bg-[#ff1d25]"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                opacity: Math.random() * 0.5 + 0.1,
                            }}
                            animate={{
                                opacity: [0.1, 0.5, 0.1],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 2 + Math.random() * 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        <span className="text-[#ff1d25]">Trusted</span> Clients
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Companies worldwide trust our technology solutions.
                    </p>
                    <div className="w-20 h-1 bg-[#ff1d25] mx-auto mt-6"></div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                        >
                            <PinContainer
                                title={client.name}
                                href={client.href}
                                containerClassName="mx-auto"
                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                                        {client.name}
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal">
                                        <span className="text-slate-500">
                                            {client.description}
                                        </span>
                                    </div>
                                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-gray-900 via-black to-[#ff1d25]/20 p-6 border border-gray-800 group hover:border-[#ff1d25] transition-all duration-300">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="w-20 h-20 flex items-center justify-center bg-black/30 rounded-full p-4 group-hover:bg-[#ff1d25]/10 transition-all duration-300">
                                                <img src={client.logo} alt={client.name} className="w-full h-full object-contain"  />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-0 h-0.5 bg-[#ff1d25] mt-4 mx-auto group-hover:w-16 transition-all duration-300"></div>
                                </div>
                            </PinContainer>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Link
                        // href={`/case-studies`}
                        href={`/#`}
                        className="px-8 py-3 bg-[#ff1d25] text-white font-medium rounded-full inline-flex items-center gap-2 hover:bg-[#e01921] transition-all duration-300 shadow-lg shadow-[#ff1d25]/20"
                    >
                        Explore Our Case Studies
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
} 