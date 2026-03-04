"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Clock, Tag, User, ChevronRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog"

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function renderMarkdown(content: string) {
  const lines = content.split("\n")
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="mb-4 mt-10 text-xl font-bold text-foreground"
        >
          {line.slice(4)}
        </h3>
      )
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="mb-4 mt-12 font-serif text-2xl font-bold text-foreground md:text-3xl"
        >
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\*:\s*(.+)$/)
      if (match) {
        elements.push(
          <li key={i} className="mb-2 ml-4 text-base leading-relaxed text-muted-foreground">
            <strong className="text-foreground">{match[1]}</strong>: {match[2]}
          </li>
        )
      } else {
        const text = line.slice(2).replace(/\*\*(.+?)\*\*/g, "$1")
        elements.push(
          <li key={i} className="mb-2 ml-4 text-base leading-relaxed text-muted-foreground">
            {text}
          </li>
        )
      }
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="mb-2 ml-4 text-base leading-relaxed text-muted-foreground">
          {line.slice(2)}
        </li>
      )
    } else if (line.match(/^\d+\.\s/)) {
      const text = line.replace(/^\d+\.\s/, "")
      const boldMatch = text.match(/^\*\*(.+?)\*\*:\s*(.+)$/)
      if (boldMatch) {
        elements.push(
          <li key={i} className="mb-2 ml-4 list-decimal text-base leading-relaxed text-muted-foreground">
            <strong className="text-foreground">{boldMatch[1]}</strong>: {boldMatch[2]}
          </li>
        )
      } else {
        elements.push(
          <li key={i} className="mb-2 ml-4 list-decimal text-base leading-relaxed text-muted-foreground">
            {text}
          </li>
        )
      }
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="mb-4 text-base font-semibold leading-relaxed text-foreground">
          {line.slice(2, -2)}
        </p>
      )
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      const rendered = line
        .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>')
        .replace(/\*(.+?)\*/g, "<em>$1</em>")
      elements.push(
        <p
          key={i}
          className="mb-4 text-base leading-relaxed text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: rendered }}
        />
      )
    }
    i++
  }

  return elements
}

export default function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <article className="mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Breadcrumbs */}
        <nav className="mb-8 flex items-center text-sm text-muted-foreground" aria-label="Breadcrumb">
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="mx-2 h-3.5 w-3.5" aria-hidden="true" />
          <Link href="/blog" className="transition-colors hover:text-foreground">
            Blog
          </Link>
          <ChevronRight className="mx-2 h-3.5 w-3.5" aria-hidden="true" />
          <span className="truncate text-foreground">{post.title}</span>
        </nav>

        {/* Meta */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
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
          <span className="flex items-center text-xs text-muted-foreground">
            <User className="mr-1.5 h-3 w-3" aria-hidden="true" />
            {post.author}
          </span>
        </div>

        {/* Title */}
        <h1 className="mb-6 font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
          <span className="text-balance">{post.title}</span>
        </h1>

        {/* Description */}
        <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
          {post.description}
        </p>

        <div className="mb-10 h-px bg-border" />

        {/* Content */}
        <div className="prose-custom">
          {renderMarkdown(post.content)}
        </div>

        {/* FAQs */}
        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-16">
            <div className="mb-8 h-px bg-border" />
            <h2 className="mb-8 font-serif text-2xl font-bold text-foreground md:text-3xl">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-6">
              {post.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <h3 className="mb-3 text-lg font-bold text-foreground">
                    {faq.question}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back to blog */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full border border-border bg-card/50 px-8 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-card hover:shadow-lg"
          >
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </motion.div>
    </article>
  )
}
