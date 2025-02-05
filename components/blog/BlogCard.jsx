import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiClock, FiCalendar } from "react-icons/fi";

const BlogCard = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.div
        whileHover={{ y: -5, scale: 1.01 }}
        className="relative group h-full"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 rounded-2xl blur-md opacity-20 group-hover:opacity-30 transition-opacity" />

        {/* Card Content */}
        <div className="relative bg-gradient-to-r from-slate-900/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 h-full flex flex-col">
          {/* Image */}
          {post.image && (
            <div className="aspect-video relative rounded-xl overflow-hidden mb-6">
              <Image
                src={post.image}
                alt={post.title}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
              {post.title}
            </h3>
            <p className="text-blue-300/80 text-sm mb-6">{post.excerpt}</p>
          </div>

          {/* Footer */}
          <div className="flex flex-wrap gap-4 text-sm text-blue-300/80">
            <div className="flex items-center gap-2">
              <FiCalendar className="text-blue-400" />
              <time>{post.date}</time>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="text-blue-400" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default BlogCard;
