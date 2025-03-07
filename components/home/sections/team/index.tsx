"use client"
import React from "react"
import { motion } from "framer-motion"
import { Image as DatoImage } from "react-datocms";
import Link from "next/link";



const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
}

export default function Team({ authors = [] }: { authors: any }) {
    // Use API data if available, otherwise use default data
    const teamMembers = authors && authors.map((author: any) => ({
        name: author.name || author.title || "Name Not Specified",
        role: author.role || author.position || author.bio || "Position Not Specified",
        image: author.image || author.picture.responsiveImage || "/images/team/default.jpg",
        social: {
            twitter: author.twitter || "#",
            linkedin: author.linkedin || "#",
            github: author.github || "#"
        },
        slug: author.slug
    }))
    return (
        <section id="team" className="py-20 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden">
            {/* Technology background animation */}
            <div className="absolute inset-0 z-0">
                <svg width="100%" height="100%" className="absolute opacity-5">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ff1d25" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {Array.from({ length: 5 }).map((_, index) => (
                    <motion.div
                        key={index}
                        className="absolute w-96 h-96 rounded-full bg-[#ff1d25]"
                        style={{
                            filter: 'blur(150px)',
                            opacity: 0.03,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [0, 50, 0],
                            y: [0, 30, 0],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                ))}
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
                        <span className="text-[#ff1d25]">Expert</span> Team
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        With our innovative and experienced team, we solve the most complex technology problems.
                    </p>
                    <div className="w-20 h-1 bg-[#ff1d25] mx-auto mt-6"></div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {teamMembers.map((member: any, index: number) => (
                        <Link href={`/author/${member.slug}`}>
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden group"
                            >
                                <div className="relative overflow-hidden">
                                    {/* <img
                                    src={member.image.src}
                                    alt={member.name}
                                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                                /> */}
                                    <div className="w-full aspect-square overflow-hidden">
                                        <DatoImage
                                            data={member.image}
                                            objectFit="cover"
                                            className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                                            style={{ width: "100%", height: "100%" }}
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                                        <div className="flex gap-4">
                                            <a href={member.social.twitter} className="w-8 h-8 rounded-full bg-[#ff1d25] flex items-center justify-center text-white hover:bg-white hover:text-[#ff1d25] transition-all duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                                </svg>
                                            </a>
                                            <a href={member.social.linkedin} className="w-8 h-8 rounded-full bg-[#ff1d25] flex items-center justify-center text-white hover:bg-white hover:text-[#ff1d25] transition-all duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                    <rect x="2" y="9" width="4" height="12"></rect>
                                                    <circle cx="4" cy="4" r="2"></circle>
                                                </svg>
                                            </a>
                                            <a href={member.social.github} className="w-8 h-8 rounded-full bg-[#ff1d25] flex items-center justify-center text-white hover:bg-white hover:text-[#ff1d25] transition-all duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-0 bg-[#ff1d25] text-white px-3 py-1 text-sm font-medium">
                                        {member.role}
                                    </div>
                                </div>
                                <div className="p-4 text-center">

                                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-[#ff1d25] transition-colors duration-300">{member.name}</h3>

                                    <p className="text-gray-400 text-sm">{member.role}</p>
                                    <motion.div
                                        className="w-0 h-0.5 bg-[#ff1d25] mx-auto mt-3 group-hover:w-16 transition-all duration-300"
                                        whileHover={{ width: "4rem" }}
                                    />
                                </div>
                            </motion.div>
                        </Link>
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
                        // href={`/team`}
                        href={`/#`}
                        className="px-8 py-3 bg-transparent text-[#ff1d25] font-medium rounded-full inline-flex items-center gap-2 border border-[#ff1d25] hover:bg-[#ff1d25] hover:text-white transition-all duration-300"
                    >
                        Meet Our Entire Team
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