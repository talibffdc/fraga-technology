import { getAllIndustries } from "@/lib/industries"
import { siteConfig } from "@/lib/site-config"
import { collectionPageSchema } from "@/lib/schemas"
import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Building2, ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Industries We Serve | Website Development & Digital Marketing | Fraga Technology",
  description:
    "Specialized web development and digital marketing for Real Estate, Healthcare, Law Firms, SaaS, and E-commerce businesses. Industry-specific solutions that drive results.",
  keywords: [
    "real estate website development",
    "healthcare digital marketing",
    "law firm website development",
    "SaaS marketing agency",
    "ecommerce website development",
    "industry digital solutions",
  ],
  openGraph: {
    title: "Industries We Serve | Fraga Technology",
    description:
      "Industry-specific web development and digital marketing solutions for Real Estate, Healthcare, Law Firms, SaaS, and E-commerce.",
    url: `${siteConfig.url}/industries`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/industries`,
  },
}

export default function IndustriesPage() {
  const industries = getAllIndustries()

  const schemaData = collectionPageSchema(
    "Industries We Serve",
    "Fraga Technology provides specialized web development and digital marketing services for multiple industries",
    `${siteConfig.url}/industries`
  )

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
      <main className="min-h-screen pt-[72px]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-foreground px-6 py-20 lg:px-8 lg:py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="relative mx-auto max-w-7xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm font-semibold text-primary">
              <Building2 className="h-4 w-4" />
              Industry Expertise
            </div>
            <h1 className="font-serif text-4xl font-bold text-background md:text-5xl lg:text-6xl">
              <span className="text-balance">Industries We Serve</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-background/60">
              We deliver industry-specific digital solutions that understand your unique challenges, compliance requirements, and growth opportunities.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="mb-3 font-serif text-2xl font-bold text-foreground group-hover:text-primary">
                    {industry.title}
                  </h2>
                  <p className="mb-2 text-sm font-medium text-primary">
                    {industry.tagline}
                  </p>
                  <p className="mb-6 line-clamp-3 text-sm text-muted-foreground">
                    {industry.heroText}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    Explore Solutions
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-primary to-accent p-8 text-center md:p-16">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
              <span className="text-balance">Don't See Your Industry?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-primary-foreground/80">
              We work with businesses across all industries. Our strategies adapt to your unique market and business model.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:shadow-xl hover:scale-105"
              >
                Discuss Your Industry
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
