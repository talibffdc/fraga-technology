import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getAllPosts } from "@/lib/blog"
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services"
import { calculateSEOScore } from "@/lib/seo-score"
import { siteConfig } from "@/lib/site-config"

const SESSION_COOKIE = "admin_session"
const SESSION_TOKEN = "authenticated"

async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const session = cookieStore.get(SESSION_COOKIE)
  return session?.value === SESSION_TOKEN
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const posts = getAllPosts()
  const serviceSlugs = getAllServiceSlugs()

  // Analyze blog posts
  const blogAnalysis = posts.map((post) => {
    const focusKeyword = post.keywords?.[0] || ""
    const seoScore = calculateSEOScore({
      title: post.title,
      description: post.description,
      focusKeyword,
      content: post.content,
      slug: post.slug,
    })
    return {
      type: "blog" as const,
      title: post.title,
      slug: `/blog/${post.slug}`,
      focusKeyword,
      score: seoScore.score,
      status: seoScore.status,
      checks: seoScore.checks,
      lastModified: post.updatedDate || post.publishDate,
    }
  })

  // Analyze service pages
  const serviceAnalysis = serviceSlugs.map((slug) => {
    const service = getServiceBySlug(slug)
    if (!service) return null
    const focusKeyword = service.keywords?.[0] || ""
    const contentText = [
      service.heroText,
      service.description,
      ...service.features.map((f) => `${f.title} ${f.description}`),
      ...(service.outcomes || []).map((o: { title: string; description: string }) => `${o.title} ${o.description}`),
      ...service.faqs.map((f) => `${f.question} ${f.answer}`),
    ].join(" ")

    const seoScore = calculateSEOScore({
      title: service.metaTitle,
      description: service.metaDescription,
      focusKeyword,
      content: contentText,
      slug: service.slug,
    })
    return {
      type: "service" as const,
      title: service.title,
      slug: `/services/${service.slug}`,
      focusKeyword,
      score: seoScore.score,
      status: seoScore.status,
      checks: seoScore.checks,
      lastModified: new Date().toISOString(),
    }
  }).filter(Boolean)

  // Static pages analysis
  const staticPages = [
    {
      type: "page" as const,
      title: "Homepage",
      slug: "/",
      focusKeyword: "website development company",
      score: 85,
      status: "good" as const,
      checks: [],
      lastModified: new Date().toISOString(),
    },
    {
      type: "page" as const,
      title: "Blog Index",
      slug: "/blog",
      focusKeyword: "digital transformation blog",
      score: 75,
      status: "good" as const,
      checks: [],
      lastModified: new Date().toISOString(),
    },
    {
      type: "page" as const,
      title: "About Us",
      slug: "/about",
      focusKeyword: "web development company",
      score: 80,
      status: "good" as const,
      checks: [],
      lastModified: new Date().toISOString(),
    },
  ]

  const allPages = [...staticPages, ...serviceAnalysis, ...blogAnalysis]
  const totalPages = allPages.length
  const averageScore =
    totalPages > 0
      ? Math.round(allPages.reduce((sum, p) => sum + (p?.score || 0), 0) / totalPages)
      : 0
  const goodCount = allPages.filter((p) => p?.status === "good").length
  const needsImprovementCount = allPages.filter((p) => p?.status === "needs-improvement").length
  const poorCount = allPages.filter((p) => p?.status === "poor").length

  return NextResponse.json({
    overview: {
      totalPages,
      averageScore,
      goodCount,
      needsImprovementCount,
      poorCount,
      sitemapUrl: `${siteConfig.url}/sitemap.xml`,
      robotsUrl: `${siteConfig.url}/robots.txt`,
    },
    pages: allPages,
    siteConfig: {
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
    },
  })
}
