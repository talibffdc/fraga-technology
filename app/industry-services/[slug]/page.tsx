import { getIndustryServiceBySlug, getAllIndustryServiceSlugs } from "@/lib/industry-services"
import { siteConfig } from "@/lib/site-config"
import { faqSchema, breadcrumbSchema } from "@/lib/schemas"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import IndustryServiceContent from "@/components/industry-service-content"

interface IndustryServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllIndustryServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: IndustryServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const industryService = getIndustryServiceBySlug(slug)
  if (!industryService) return {}

  const ogImageUrl = `/api/og?title=${encodeURIComponent(industryService.metaTitle)}&description=${encodeURIComponent(industryService.metaDescription)}`

  return {
    title: industryService.metaTitle,
    description: industryService.metaDescription,
    keywords: industryService.keywords,
    openGraph: {
      title: industryService.metaTitle,
      description: industryService.metaDescription,
      url: `${siteConfig.url}/industry-services/${industryService.slug}`,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: industryService.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: industryService.metaTitle,
      description: industryService.metaDescription,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `${siteConfig.url}/industry-services/${industryService.slug}`,
    },
  }
}

export default async function IndustryServicePage({ params }: IndustryServicePageProps) {
  const { slug } = await params
  const industryService = getIndustryServiceBySlug(slug)
  if (!industryService) notFound()

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Industry Solutions", url: `${siteConfig.url}/industry-services` },
    { name: industryService.title, url: `${siteConfig.url}/industry-services/${industryService.slug}` },
  ]

  const faqSchemaData = faqSchema(industryService.faqs)

  return (
    <>
      <Header />
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
        <IndustryServiceContent industryService={industryService} />
      </main>
      <Footer />
    </>
  )
}
