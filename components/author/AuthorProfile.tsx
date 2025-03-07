"use client"

import { motion } from 'framer-motion';
import BlogCard from "@/components/blog/BlogCard";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
}

interface AuthorProfileProps {
    name: string;
    bio: string;
    picture: any;
    description: string;
    posts: any[];
}

export default function AuthorProfile({ name, bio, picture, description, posts }: AuthorProfileProps) {
    return (
        <motion.div 
            className="pt-20 w-full bg-gradient-to-b from-black to-[#1a1a1a] min-h-screen py-10"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            <motion.div 
                className="max-w-4xl mx-auto px-6"
                variants={fadeInUp}
            >
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        <motion.div 
                            className="flex-shrink-0"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                alt={name}
                                src={picture.responsiveImage.src}
                                className="rounded-lg w-32 h-32 object-cover border-2 border-red-400"
                            />
                        </motion.div>
                        <div className="flex flex-col">
                            <h1 className="text-3xl font-bold text-white mb-2">{name}</h1>
                            <p className="text-lg text-red-300 mb-4">{bio}</p>
                            <p className="text-gray-300">{description}</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                className="max-w-5xl mx-auto mt-16  "
                variants={fadeInUp}
            >
                <h2 className="text-4xl font-bold text-white mb-10 border-b border-red-500 pb-4">
                    {name.trim().split(" ")[0]}'s Articles
                </h2>
                
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post: any) => (
                            <motion.div 
                                key={post.slug} 
                                variants={fadeInUp}
                                className="h-full"
                            >
                                <BlogCard post={post} />
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <motion.div 
                        className="text-center text-gray-400 py-10"
                        variants={fadeInUp}
                    >
                        This author doesn't have any blog posts yet.
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
} 