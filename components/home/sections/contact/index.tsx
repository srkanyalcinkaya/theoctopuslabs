"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [submitError, setSubmitError] = useState("")

    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitError("")

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            setSubmitSuccess(true)
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            })

            setTimeout(() => {
                setSubmitSuccess(false)
            }, 3000)
        } catch (error) {
            setSubmitError(error instanceof Error ? error.message : 'An error occurred while sending your message')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden">
            {/* Technology background animation */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full">
                    <svg width="100%" height="100%" className="absolute opacity-5">
                        <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M 0 50 L 50 50 L 50 0" fill="none" stroke="#ff1d25" strokeWidth="0.5" />
                            <circle cx="50" cy="50" r="3" fill="#ff1d25" opacity="0.3" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#circuit)" />
                    </svg>
                </div>

                {Array.from({ length: 3 }).map((_, index) => (
                    <motion.div
                        key={index}
                        className="absolute rounded-full bg-[#ff1d25]"
                        style={{
                            width: 300 + Math.random() * 300,
                            height: 300 + Math.random() * 300,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            filter: 'blur(150px)',
                            opacity: 0.03,
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
                        <span className="text-[#ff1d25]">Contact</span> Form
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Get in touch with us to discuss your projects or to learn more about our services.
                    </p>
                    <div className="w-20 h-1 bg-[#ff1d25] mx-auto mt-6"></div>
                </motion.div>

                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800">
                            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>

                            {submitError && (
                                <div className="mb-6 p-4 bg-red-900/30 border border-red-800 rounded-lg text-red-200">
                                    {submitError}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff1d25] focus:border-transparent text-white"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff1d25] focus:border-transparent text-white"
                                        placeholder="Enter your email address"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff1d25] focus:border-transparent text-white"
                                        placeholder="Enter subject"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff1d25] focus:border-transparent text-white resize-none"
                                        placeholder="Enter your message"
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${submitSuccess
                                            ? "bg-green-600 text-white"
                                            : "bg-[#ff1d25] text-white hover:bg-[#e01921]"
                                        }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting
                                        ? "Sending..."
                                        : submitSuccess
                                            ? "Message Sent!"
                                            : "Send"}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 