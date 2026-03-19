import { getIndustryBySlug, getAllIndustrySlugs } from "@/lib/industries"
import { siteConfig } from "@/lib/site-config"
import { faqSchema, breadcrumbSchema } from "@/lib/schemas"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import IndustryPageContent from "@/components/industry-page-content"

interface IndustryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)
  if (!industry) return {}

  const ogImageUrl = `/api/og?title=${encodeURIComponent(industry.metaTitle)}&description=${encodeURIComponent(industry.metaDescription)}`

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: industry.keywords,
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `${siteConfig.url}/industries/${industry.slug}`,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: industry.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: industry.metaTitle,
      description: industry.metaDescription,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `${siteConfig.url}/industries/${industry.slug}`,
    },
  }
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)
  if (!industry) notFound()

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Industries", url: `${siteConfig.url}/industries` },
    { name: industry.title, url: `${siteConfig.url}/industries/${industry.slug}` },
  ]

  const faqSchemaData = faqSchema(industry.faqs)

  const industryServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${industry.title} Digital Services`,
    description: industry.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/industries/${industry.slug}`,
    areaServed: siteConfig.targetCountries.map((country) => ({
      "@type": "Country",
      name: country,
    })),
  }

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(industryServiceSchema),
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
        <IndustryPageContent industry={industry} />
      </main>
      <Footer />
    </>
  )
}
