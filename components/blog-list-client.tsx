"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Clock, Tag } from "lucide-react"
import type { BlogPostMeta } from "@/lib/blog"

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogListClient({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <div className="flex flex-col gap-6">
      {posts.map((post, index) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="group block rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <Tag className="mr-1.5 h-3 w-3" aria-hidden="true" />
                  {post.category}
                </span>
                <span className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="mr-1.5 h-3 w-3" aria-hidden="true" />
                  {formatDate(post.publishDate)}
                </span>
                <span className="flex items-center text-xs text-muted-foreground">
                  <Clock className="mr-1.5 h-3 w-3" aria-hidden="true" />
                  {post.readingTime}
                </span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-foreground transition-colors group-hover:text-primary md:text-3xl">
                {post.title}
              </h2>
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
                {post.description}
              </p>
              <div className="flex items-center text-sm font-semibold text-primary">
                Read Article
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  )
}
