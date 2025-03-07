"use client";

import React from 'react';
import { motion } from "framer-motion";
import BlogCard from "@/components/blog/BlogCard";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface BlogPageProps {
  posts: any[];
}

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  return (
    <motion.div
      className="w-full min-h-screen bg-gradient-to-b from-black to-[#1a1a1a] py-16 px-4 md:px-8"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div variants={fadeInUp} className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Blogs</h1>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Stay updated with our latest technology news, insights, and projects.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {posts?.map((post: any) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BlogPage; 