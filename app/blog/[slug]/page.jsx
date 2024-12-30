"use client";

import { motion } from "framer-motion";
import { getPost } from "@/data/blog";
import ReactMarkdown from 'react-markdown';
import MDXComponents from "@/components/blog/MDXComponents";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function BlogPost({ params }) {
  const post = getPost(params.slug);

  if (!post) return <div>Post not found</div>;

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-primary via-background to-background py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Geri Dönüş Butonu */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-colors group"
            >
              <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Blog</span>
            </Link>
          </motion.div>

          {/* Post Header */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-blue-400/80">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readingTime} min read</span>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Post Content */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="prose prose-invert prose-blue max-w-none"
          >
            <ReactMarkdown components={MDXComponents}>
              {post.content}
            </ReactMarkdown>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
} 