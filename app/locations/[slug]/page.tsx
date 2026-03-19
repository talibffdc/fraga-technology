import { getLocationBySlug, getAllLocationSlugs } from "@/lib/locations"
import { siteConfig } from "@/lib/site-config"
import { faqSchema, breadcrumbSchema } from "@/lib/schemas"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import LocationPageContent from "@/components/location-page-content"

interface LocationPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) return {}

  const ogImageUrl = `/api/og?title=${encodeURIComponent(location.metaTitle)}&description=${encodeURIComponent(location.metaDescription)}`

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: location.keywords,
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `${siteConfig.url}/locations/${location.slug}`,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: location.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDescription,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `${siteConfig.url}/locations/${location.slug}`,
    },
  }
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) notFound()

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Locations", url: `${siteConfig.url}/locations` },
    { name: location.country, url: `${siteConfig.url}/locations/${location.slug}` },
  ]

  const faqSchemaData = faqSchema(location.faqs)

  const locationServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Web Development & Digital Marketing - ${location.country}`,
    description: location.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/locations/${location.slug}`,
    areaServed: {
      "@type": "Country",
      name: location.country,
    },
  }

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(locationServiceSchema),
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
        <LocationPageContent location={location} />
      </main>
      <Footer />
    </>
  )
}
