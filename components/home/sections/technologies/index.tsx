"use client"
import React from "react"
import { motion } from "framer-motion";
import Link from "next/link";

const technologies = [
  {
    name: "React",
    icon: "/images/react-icon.svg",
    description: "JavaScript library for modern user interfaces"
  },
  {
    name: "Next.js",
    icon: "/images/nextjs-icon.svg",
    description: "Production framework based on React"
  },
  {
    name: "Node.js",
    icon: "/images/nodejs-icon.svg",
    description: "JavaScript runtime environment"
  },
  {
    name: "TypeScript",
    icon: "/images/typescript-icon.svg",
    description: "Type safety for JavaScript"
  },
  {
    name: "React Native",
    icon: "/images/react-icon.svg",
    description: "Cross-platform mobile app development framework for iOS and Android"
  },
  {
    name: "MongoDB",
    icon: "/images/mongodb-icon.svg",
    description: "NoSQL database"
  },
  {
    name: "Solidity",
    icon: "/images/solidity-icon.svg",
    description: "Smart contract programming language for Ethereum"
  },
  {
    name: "AWS",
    icon: "/images/aws-icon.svg",
    description: "Amazon's cloud computing platform"
  },
  {
    name: "Python",
    icon: "/images/python-icon.svg",
    description: "General-purpose programming language"
  },
  {
    name: "Solana",
    icon: "/images/solana-icon.svg",
    description: "High-performance blockchain platform"
  },
  {
    name: "BNB Chain",
    icon: "/images/bnb-icon.svg",
    description: "Binance's blockchain network"
  },
  {
    name: "Bitcoin",
    icon: "/images/bitcoin-icon.svg",
    description: "First and most popular cryptocurrency"
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
}

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}



export default function Technologies() {
  return (
    <section id="technologies" className="py-20 bg-black relative overflow-hidden">
      {/* Technology background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-40 h-40 border border-[#ff1d25]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              animate={{
                rotate: [0, 90],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-[#ff1d25]">Technological</span> Solutions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide modern and scalable solutions using the latest technologies.
          </p>
          <div className="w-20 h-1 bg-[#ff1d25] mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-[#ff1d25] transition-all duration-300 group"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg bg-black/50 flex items-center justify-center group-hover:bg-[#ff1d25]/10 transition-all duration-300">
                  <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#ff1d25] transition-all duration-300">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </div>
              </div>
              <motion.div
                className="w-0 h-0.5 bg-[#ff1d25] mt-4 group-hover:w-full transition-all duration-500"
                whileHover={{ width: "100%" }}
              />
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
            // href={`/services`}
            href={`/#`}
            className="px-8 py-3 bg-transparent text-[#ff1d25] font-medium rounded-full inline-flex items-center gap-2 border border-[#ff1d25] hover:bg-[#ff1d25] hover:text-white transition-all duration-300"
          >
            Explore All Our Technologies
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

