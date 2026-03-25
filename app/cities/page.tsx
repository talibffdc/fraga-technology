import Header from "@/components/header"
import Footer from "@/components/footer"
import CitiesIndex from "@/components/cities-index"
import { siteConfig } from "@/lib/site-config"
import { breadcrumbSchema } from "@/lib/schemas"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Development Services in Indian Cities | Fraga Technology",
  description:
    "Explore our web development, digital marketing, and SEO services across Indian cities. Serving Delhi, Noida, Bangalore, Lucknow, Kannauj, and 20+ cities with local expertise.",
  keywords: [
    "web development services cities",
    "website development India cities",
    "digital marketing cities India",
    "web developer near me",
    "local web development services",
  ],
  openGraph: {
    title: "Web Development Services in Indian Cities | Fraga Technology",
    description:
      "Professional web development and digital services across India. Local expertise in 20+ cities.",
    url: `${siteConfig.url}/cities`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/cities`,
  },
}

export default function CitiesPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Cities", url: `${siteConfig.url}/cities` },
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
        <CitiesIndex />
      </main>
      <Footer />
    </>
  )
}
