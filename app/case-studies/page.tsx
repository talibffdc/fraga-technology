import Header from "@/components/header"
import Footer from "@/components/footer"
import CaseStudiesIndex from "@/components/case-studies-index"
import { siteConfig } from "@/lib/site-config"
import { breadcrumbSchema } from "@/lib/schemas"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies | Success Stories | Fraga Technology",
  description:
    "See how Fraga Technology helped businesses grow. Case studies showcasing successful projects in e-commerce, SaaS, real estate, healthcare, and legal services with measurable results.",
  keywords: [
    "case studies",
    "success stories",
    "project portfolio",
    "client testimonials",
    "web development projects",
    "business growth",
  ],
  openGraph: {
    title: "Case Studies | Fraga Technology",
    description: "Discover how we helped clients achieve their business goals with measurable results.",
    url: `${siteConfig.url}/case-studies`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/case-studies`,
  },
}

export default function CaseStudiesPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Case Studies", url: `${siteConfig.url}/case-studies` },
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
        <CaseStudiesIndex />
      </main>
      <Footer />
    </>
  )
}
