import { getCityBySlug, getAllCitySlugs } from "@/lib/cities"
import { siteConfig } from "@/lib/site-config"
import { faqSchema, breadcrumbSchema } from "@/lib/schemas"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CityPageContent from "@/components/city-page-content"

interface CityPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { slug } = await params
  const city = getCityBySlug(slug)
  if (!city) return {}

  const ogImageUrl = `/api/og?title=${encodeURIComponent(city.metaTitle)}&description=${encodeURIComponent(city.metaDescription)}`

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    keywords: city.keywords,
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `${siteConfig.url}/cities/${city.slug}`,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: city.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: city.metaTitle,
      description: city.metaDescription,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `${siteConfig.url}/cities/${city.slug}`,
    },
  }
}

export default async function CityPage({ params }: CityPageProps) {
  const { slug } = await params
  const city = getCityBySlug(slug)
  if (!city) notFound()

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Cities", url: `${siteConfig.url}/cities` },
    { name: city.name, url: `${siteConfig.url}/cities/${city.slug}` },
  ]

  const faqSchemaData = faqSchema(city.faqs)

  const cityServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Web Development & Digital Marketing - ${city.name}`,
    description: city.description,
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cityServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />
      {faqSchemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchemaData),
          }}
        />
      )}
      <main className="min-h-screen pt-[72px]">
        <CityPageContent city={city} />
      </main>
      <Footer />
    </>
  )
}
