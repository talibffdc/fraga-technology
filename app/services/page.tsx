import Header from "@/components/header"
import Footer from "@/components/footer"
import ServicesIndex from "@/components/services-index"
import { siteConfig } from "@/lib/site-config"
import { breadcrumbSchema } from "@/lib/schemas"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Development Services | Fraga Technology | India Based",
  description:
    "Comprehensive web development services including website development, mobile app development, SEO, and digital marketing. Serving startups, SMEs, and enterprises across 6 countries.",
  keywords: [
    "web development services",
    "website development company",
    "mobile app development",
    "digital marketing services",
    "SEO services India",
    "Google Ads management",
    "Meta Ads services",
    "web design services",
  ],
  openGraph: {
    title: "Web Development Services | Fraga Technology",
    description:
      "Explore our comprehensive web development, mobile app, SEO, and digital marketing services tailored for your business growth.",
    url: `${siteConfig.url}/services`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
}

export default function ServicesPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
  ]

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Development and Digital Services",
    description: "Comprehensive web development, mobile app development, SEO, and digital marketing services",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/services`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />
      <Header />
      <main className="min-h-screen pt-[72px]">
        <ServicesIndex />
      </main>
      <Footer />
    </>
  )
}
