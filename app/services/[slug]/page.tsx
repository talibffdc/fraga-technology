import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services"
import { siteConfig } from "@/lib/site-config"
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ServicePageContent from "@/components/service-page-content"

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  const ogImageUrl = `/api/og?title=${encodeURIComponent(service.metaTitle)}&description=${encodeURIComponent(service.metaDescription)}`

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `${siteConfig.url}/services/${service.slug}`,
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/#solutions` },
    { name: service.title, url: `${siteConfig.url}/services/${service.slug}` },
  ]

  const faqSchemaData = faqSchema(service.faqs)

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: service.title,
              description: service.description,
              slug: service.slug,
            })
          ),
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
        <ServicePageContent service={service} />
      </main>
      <Footer />
    </>
  )
}
