"use client";

import React from 'react';
import { Image } from 'react-datocms';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
  post: {
    title?: string;
    slug?: string;
    excerpt?: string;
    date: string;
    coverImage?: {
      responsiveImage?: any;
    };
    tags?: {
      slug?: string;
      tag?: string;
    }[];
    author?: {
      name?: string;
      slug?: string;
      picture?: {
        responsiveImage?: any;
      };
    };
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-[#111] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-800 flex flex-col h-full"
    >
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden group">
        <div className="relative w-full overflow-hidden aspect-[16/9]">
          {post.coverImage && post.coverImage.responsiveImage && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full relative"
              >
                <Image
                  data={post.coverImage.responsiveImage}
                  className="object-cover"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}
                />
              </motion.div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-1 line-clamp-1 drop-shadow-lg">
                  {post.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags && post.tags.slice(0, 2).map((tag) => (
                    <span 
                      key={tag.slug} 
                      className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-500/80 text-white shadow-lg"
                    >
                      {tag.tag}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </Link>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex flex-wrap gap-2 mb-3 mt-1">
          {post.tags && post.tags.map((tag) => (
            <span 
              key={tag.slug} 
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-red-900/30 text-red-300"
            >
              {tag.tag}
            </span>
          ))}
        </div>
        
        <Link href={`/blogs/${post.slug}`}>
          <h3 className="text-xl font-bold text-white mb-2 hover:text-red-400 transition-colors">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800">
          <div className="flex items-center">
            {post?.author?.picture && post.author.picture.responsiveImage && (
              <div className="w-8 h-8 rounded-full overflow-hidden mr-2 ring-2 ring-red-500/30">
                <Image
                  data={post.author.picture.responsiveImage}
                  className="w-full h-full object-cover"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            )}
            <span className="text-sm text-gray-300">{post?.author?.name}</span>
          </div>
          <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-md">
            {formatDate(post.date)}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard; 