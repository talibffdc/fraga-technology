import Header from "@/components/header"
import Footer from "@/components/footer"
import SitemapContent from "@/components/sitemap-content"
import { siteConfig } from "@/lib/site-config"
import { breadcrumbSchema } from "@/lib/schemas"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sitemap | Fraga Technology | All Pages & Services",
  description:
    "Complete sitemap of Fraga Technology website. Browse all services, locations, industries, case studies, pricing, and blog posts for easy navigation.",
  keywords: [
    "fraga technology sitemap",
    "website sitemap",
    "all services",
    "all pages",
    "site navigation",
    "website structure",
  ],
  openGraph: {
    title: "Sitemap | Fraga Technology",
    description:
      "Browse all pages on Fraga Technology website including services, locations, industries, case studies, and blog posts.",
    url: `${siteConfig.url}/sitemap-html`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/sitemap-html`,
  },
}

export default function SitemapPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Sitemap", url: `${siteConfig.url}/sitemap-html` },
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
        <SitemapContent />
      </main>
      <Footer />
    </>
  )
}
