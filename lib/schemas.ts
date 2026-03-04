import { siteConfig } from "./site-config"
import type { BlogPost } from "./blog"

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "F.F.D.C",
      addressLocality: "Kannauj",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "sales",
        email: siteConfig.email,
        areaServed: siteConfig.targetCountries,
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ],
    knowsAbout: [
      "Website Development",
      "Mobile App Development",
      "SEO Services",
      "Meta Ads Management",
      "Google Ads Management",
      "Graphics Design",
      "Social Media Marketing",
      "Digital Marketing",
    ],
  }
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }
}

export function blogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.publishDate,
    dateModified: post.updatedDate || post.publishDate,
    image: post.featuredImage
      ? `${siteConfig.url}${post.featuredImage}`
      : `${siteConfig.url}/api/og?title=${encodeURIComponent(post.title)}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    keywords: post.keywords.join(", "),
  }
}

export function serviceSchema(service: {
  name: string
  description: string
  slug: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/services/${service.slug}`,
    areaServed: siteConfig.targetCountries.map((country) => ({
      "@type": "Country",
      name: country,
    })),
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs || faqs.length === 0) return null
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    image: `${siteConfig.url}/api/og`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "F.F.D.C",
      addressLocality: "Kannauj",
      addressRegion: "Uttar Pradesh",
      postalCode: "209725",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "27.0552",
      longitude: "79.9137",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: siteConfig.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: `${siteConfig.url}/services/${service.slug}`,
        },
      })),
    },
    areaServed: siteConfig.targetCountries.map((country) => ({
      "@type": "Country",
      name: country,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
    },
  }
}

export function collectionPageSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
