import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getServiceCityBySlug } from "@/lib/service-cities"
import ServiceCityPageContent from "@/components/service-city-page-content"
import { siteConfig } from "@/lib/site-config"

const serviceCity = getServiceCityBySlug("seo-services-mumbai")

export const metadata: Metadata = serviceCity
  ? {
      title: serviceCity.metaTitle,
      description: serviceCity.metaDescription,
      keywords: serviceCity.keywords,
      alternates: {
        canonical: `${siteConfig.url}/services/${serviceCity.slug}`,
      },
      openGraph: {
        title: serviceCity.metaTitle,
        description: serviceCity.metaDescription,
        url: `${siteConfig.url}/services/${serviceCity.slug}`,
        siteName: siteConfig.name,
        locale: "en_IN",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: serviceCity.metaTitle,
        description: serviceCity.metaDescription,
      },
    }
  : {}

// JSON-LD Schemas for SEO Services Mumbai Page
function generateLocalBusinessSchema() {
  if (!serviceCity) return null

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/services/${serviceCity.slug}#localbusiness`,
    name: `${siteConfig.name} - ${serviceCity.serviceName} ${serviceCity.cityName}`,
    description: serviceCity.metaDescription,
    url: `${siteConfig.url}/services/${serviceCity.slug}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: serviceCity.cityName,
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "19.0760",
      longitude: "72.8777",
    },
    areaServed: serviceCity.localAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    priceRange: "₹₹-₹₹₹₹",
    openingHours: "Mo-Sa 09:00-19:00",
    sameAs: [siteConfig.social.linkedin, siteConfig.social.twitter, siteConfig.social.instagram],
  }
}

function generateServiceSchema() {
  if (!serviceCity) return null

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/services/${serviceCity.slug}#service`,
    name: `${serviceCity.serviceName} in ${serviceCity.cityName}`,
    description: serviceCity.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "City",
      name: serviceCity.cityName,
    },
    serviceType: serviceCity.serviceName,
    offers: serviceCity.pricing.map((pkg) => ({
      "@type": "Offer",
      name: pkg.type,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        price: pkg.price,
      },
      itemOffered: {
        "@type": "Service",
        name: pkg.type,
        description: pkg.features.join(", "),
      },
    })),
  }
}

function generateBreadcrumbSchema() {
  if (!serviceCity) return null

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteConfig.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: serviceCity.serviceName,
        item: `${siteConfig.url}/services/${serviceCity.serviceSlug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: `${serviceCity.serviceName} in ${serviceCity.cityName}`,
        item: `${siteConfig.url}/services/${serviceCity.slug}`,
      },
    ],
  }
}

function generateFaqSchema() {
  if (!serviceCity || !serviceCity.faqs.length) return null

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: serviceCity.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export default function SEOServicesMumbaiPage() {
  if (!serviceCity) {
    notFound()
  }

  const localBusinessSchema = generateLocalBusinessSchema()
  const serviceSchema = generateServiceSchema()
  const breadcrumbSchema = generateBreadcrumbSchema()
  const faqSchema = generateFaqSchema()

  return (
    <>
      {localBusinessSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      )}
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <ServiceCityPageContent serviceCity={serviceCity} />
    </>
  )
}
