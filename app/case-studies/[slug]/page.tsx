import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/lib/case-studies"
import { siteConfig } from "@/lib/site-config"
import { breadcrumbSchema } from "@/lib/schemas"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CaseStudyDetail from "@/components/case-study-detail"

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)
  if (!caseStudy) return {}

  const ogImageUrl = `/api/og?title=${encodeURIComponent(caseStudy.title)}&description=${encodeURIComponent(caseStudy.tagline)}`

  return {
    title: `${caseStudy.title} | Case Study | Fraga Technology`,
    description: caseStudy.description,
    keywords: [
      caseStudy.industry,
      caseStudy.service,
      "case study",
      "success story",
      "project",
      ...caseStudy.technologies,
    ],
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.tagline,
      url: `${siteConfig.url}/case-studies/${caseStudy.slug}`,
      type: "article",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.title,
      description: caseStudy.tagline,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `${siteConfig.url}/case-studies/${caseStudy.slug}`,
    },
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)
  if (!caseStudy) notFound()

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Case Studies", url: `${siteConfig.url}/case-studies` },
    { name: caseStudy.title, url: `${siteConfig.url}/case-studies/${caseStudy.slug}` },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />
      <Header />
      <main className="min-h-screen pt-[72px]">
        <CaseStudyDetail caseStudy={caseStudy} />
      </main>
      <Footer />
    </>
  )
}
