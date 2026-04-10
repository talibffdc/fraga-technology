import { getServiceCityBySlug } from "@/lib/service-cities"
import { siteConfig } from "@/lib/site-config"
import { faqSchema, breadcrumbSchema } from "@/lib/schemas"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ServiceCityPageContent from "@/components/service-city-page-content"

const SLUG = "website-development-bangalore"

export async function generateMetadata(): Promise<Metadata> {
  const serviceCity = getServiceCityBySlug(SLUG)
  if (!serviceCity) return {}

  const ogImageUrl = `/api/og?title=${encodeURIComponent(serviceCity.metaTitle)}&description=${encodeURIComponent(serviceCity.metaDescription)}`

  return {
    title: serviceCity.metaTitle,
    description: serviceCity.metaDescription,
    keywords: serviceCity.keywords,
    openGraph: {
      title: serviceCity.metaTitle,
      description: serviceCity.metaDescription,
      url: `${siteConfig.url}/services/${serviceCity.slug}`,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: serviceCity.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: serviceCity.metaTitle,
      description: serviceCity.metaDescription,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `${siteConfig.url}/services/${serviceCity.slug}`,
    },
  }
}

export default function ServiceCityPage() {
  const serviceCity = getServiceCityBySlug(SLUG)
  if (!serviceCity) notFound()

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: serviceCity.serviceName, url: `${siteConfig.url}/services/${serviceCity.serviceSlug}` },
    { name: serviceCity.title, url: `${siteConfig.url}/services/${serviceCity.slug}` },
  ]

  const faqSchemaData = faqSchema(serviceCity.faqs)

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.name} - ${serviceCity.cityName}`,
    description: serviceCity.metaDescription,
    url: `${siteConfig.url}/services/${serviceCity.slug}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: serviceCity.cityName,
      containedInPlace: {
        "@type": "State",
        name: "Karnataka",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: serviceCity.serviceName,
      itemListElement: serviceCity.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "52",
      bestRating: "5",
    },
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceCity.serviceName} in ${serviceCity.cityName}`,
    description: serviceCity.heroDescription,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "City",
      name: serviceCity.cityName,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${serviceCity.serviceName} Packages`,
      itemListElement: serviceCity.pricing.map((pkg, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: pkg.type,
        },
        price: pkg.price,
        priceCurrency: "INR",
        position: index + 1,
      })),
    },
  }

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
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
        <ServiceCityPageContent serviceCity={serviceCity} />
      </main>
      <Footer />
    </>
  )
}
