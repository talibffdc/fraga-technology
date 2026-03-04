import { getAllPostsMeta } from "@/lib/blog"
import { siteConfig } from "@/lib/site-config"
import { collectionPageSchema, breadcrumbSchema } from "@/lib/schemas"
import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogListClient from "@/components/blog-list-client"

export const metadata: Metadata = {
  title: "Blog",
  description: `Insights, strategies, and thought leadership from ${siteConfig.name}. Stay ahead with our expert articles on digital transformation, cloud architecture, and enterprise innovation.`,
  keywords: [
    "digital transformation blog",
    "enterprise strategy insights",
    "technology consulting articles",
    "business innovation",
  ],
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description: `Insights, strategies, and thought leadership from ${siteConfig.name}.`,
    url: `${siteConfig.url}/blog`,
    type: "website",
    images: [
      {
        url: `/api/og?title=${encodeURIComponent("Blog & Insights")}&description=${encodeURIComponent("Expert articles on digital transformation and enterprise strategy")}`,
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
}

export const dynamic = "force-dynamic"

export default function BlogPage() {
  const posts = getAllPostsMeta()

  const blogBreadcrumbs = breadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
  ])

  const blogCollection = collectionPageSchema(
    `Blog | ${siteConfig.name}`,
    `Insights, strategies, and thought leadership from ${siteConfig.name}.`,
    `${siteConfig.url}/blog`
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogBreadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollection) }}
      />
      <Header />
      <main className="min-h-screen px-6 pt-32 pb-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16">
            <Link
              href="/"
              className="mb-6 inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Back to Home
            </Link>
            <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="text-balance">Blog & Insights</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Expert perspectives on digital transformation, technology strategy, and enterprise innovation.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card p-12 text-center">
              <p className="text-lg text-muted-foreground">
                No blog posts yet. Check back soon for new insights.
              </p>
            </div>
          ) : (
            <BlogListClient posts={posts} />
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
