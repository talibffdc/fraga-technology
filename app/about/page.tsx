import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutPageContent from "@/components/about-page-content"
import { siteConfig } from "@/lib/site-config"
import { breadcrumbSchema } from "@/lib/schemas"

export const metadata: Metadata = {
  title:
    "About Fraga Technology | Web Development & Mobile App Development Company",
  description:
    "Learn about Fraga Technology, a global web development and mobile app development company helping startups and businesses build scalable digital platforms.",
  keywords: [
    "Fraga Technology",
    "website development company",
    "mobile app development company",
    "digital solutions company",
    "web development India",
    "app development USA",
  ],
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title:
      "About Fraga Technology | Web Development & Mobile App Development Company",
    description:
      "Learn about Fraga Technology, a global web development and mobile app development company helping startups and businesses build scalable digital platforms.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: `/api/og?title=${encodeURIComponent("About Fraga Technology")}`,
        width: 1200,
        height: 630,
        alt: "About Fraga Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Fraga Technology | Web Development & Mobile App Development Company",
    description:
      "Learn about Fraga Technology, a global web development and mobile app development company helping startups and businesses build scalable digital platforms.",
  },
}

const aboutOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fraga Technology",
  url: siteConfig.url,
  description: siteConfig.description,
  foundingDate: "2015",
  industry: "Technology / Software Development",
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "F.F.D.C",
    addressLocality: "Kannauj",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: siteConfig.targetCountries.map((country) => ({
    "@type": "Country",
    name: country,
  })),
  knowsAbout: [
    "Web Development",
    "Mobile App Development",
    "SEO Services",
    "Digital Marketing",
  ],
  sameAs: [
    siteConfig.social.linkedin,
    siteConfig.social.twitter,
    siteConfig.social.instagram,
    siteConfig.social.facebook,
  ],
}

export default function AboutPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "About Us", url: `${siteConfig.url}/about` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutOrganizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />
      <Header />
      <AboutPageContent />
      <Footer />
    </>
  )
}
