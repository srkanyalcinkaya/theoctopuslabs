"use client";

import React from 'react';
import { Image } from 'react-datocms';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { formatDate } from '@/lib/utils';
import { StructuredText, StructuredTextGraphQlResponse } from 'react-datocms';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import BlogCard from './BlogCard';
import { cn } from '@/lib/utils';

interface ResponsiveImage {
  alt?: string;
  aspectRatio: number;
  base64?: string;
  height: number;
  sizes: string;
  src: string;
  srcSet: string;
  title?: string;
  webpSrcSet: string;
  width: number;
}

interface Tag {
  slug: string;
  tag: string;
}

interface Author {
  name: string;
  bio: string;
  description: string;
  slug: string;
  picture: {
    responsiveImage: ResponsiveImage;
  };
}

interface ImageBlock {
  __typename: 'ImageBlockRecord';
  id: string;
  image: {
    responsiveImage: ResponsiveImage;
  };
}

interface Post {
  title: string;
  slug: string;
  content: StructuredTextGraphQlResponse;
  date: string;
  coverImage: {
    responsiveImage: ResponsiveImage;
  };
  tags: Tag[];
  author: Author;
}

interface MorePost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  coverImage: {
    responsiveImage: ResponsiveImage;
  };
  author: Author;
}

interface BlogDetailProps {
  data: {
    post: Post;
    morePosts: MorePost[];
  };
}

// DatoCMS Image component to handle image blocks
const DatocmsImage = ({ data, className }: { data: ResponsiveImage; className?: string }) => {
  return (
    <div className="my-8">
      <Image
        data={data}
        className={cn("rounded-lg mx-auto", className)}
      />
    </div>
  );
};

// Cover Image component
const CoverImage = ({ title, responsiveImage, slug }: { title: string; responsiveImage: ResponsiveImage; slug?: string }) => {
  const image = (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <Image
        data={{
          ...responsiveImage,
          alt: `Cover Image for ${title}`,
        }}
        className={cn("w-full", {
          "hover:opacity-90 transition-opacity duration-200": slug,
        })}
      />
    </div>
  );

  return (
    <div className="mx-auto max-w-3xl">
      {slug ? (
        <Link href={`/blog/${slug}`} aria-label={title}>{image}</Link>
      ) : (
        image
      )}
    </div>
  );
};

export const BlogDetail: React.FC<BlogDetailProps> = ({ data }) => {
  const { post, morePosts } = data;

  return (
    <motion.div
      className="w-full min-h-screen bg-gradient-to-b from-black to-[#1a1a1a] py-16 px-4 md:px-8"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="container mx-auto">
        <motion.div variants={fadeInUp} className="mb-8 container mx-auto px-5 max-w-5xl">
          <Link href="/blogs" className="text-red-400 hover:text-red-300 flex items-center gap-2 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to all blogs
          </Link>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-12 container mx-auto px-5 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center">
              {post.author.picture && (
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 ring-2 ring-red-500/30">
                  <Image
                    data={post.author.picture.responsiveImage}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div>
                <p className="text-white font-medium">{post.author.name}</p>
                <p className="text-gray-400 text-sm">{formatDate(post.date)}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 ml-auto">
              {post.tags && post.tags.map((tag) => (
                <span
                  key={tag.slug}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-red-900/30 text-red-300"
                >
                  {tag.tag}
                </span>
              ))}
            </div>
          </div>

          {post.coverImage && (
            <div className="mb-12">
              <CoverImage
                title={post.title}
                responsiveImage={post.coverImage.responsiveImage}
              />
            </div>
          )}
        </motion.div>

        <motion.div variants={fadeInUp}>
          <div className="max-w-2xl mx-auto">
            <div className="prose prose-lg prose-invert" id="main-content">
              {post.content && (
                <StructuredText
                  data={post.content}
                  renderBlock={({ record }: { record: any }) => {
                    if (record.__typename === 'ImageBlockRecord') {
                      return (
                        <div className="max-w-2xl mx-auto my-8">
                          <Image
                            data={(record as ImageBlock).image.responsiveImage}
                            className="rounded-lg mx-auto w-full"
                          />
                        </div>
                      );
                    }

                    return (
                      <>
                        <p>Don&apos;t know how to render a block!</p>
                        <pre>{JSON.stringify(record, null, 2)}</pre>
                      </>
                    );
                  }}
                />
              )}
            </div>
          </div>
        </motion.div>

        {morePosts && morePosts.length > 0 && (
          <motion.div variants={fadeInUp} className="mt-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {morePosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}; 