import { getAllLocations } from "@/lib/locations"
import { siteConfig } from "@/lib/site-config"
import { collectionPageSchema } from "@/lib/schemas"
import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { MapPin, ArrowUpRight, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Locations We Serve | Website Development & Digital Marketing | Fraga Technology",
  description:
    "Fraga Technology serves clients globally. Website development, SEO, Google Ads & digital marketing services for businesses in India, USA, UK, UAE, Canada & Australia.",
  keywords: [
    "website development company India",
    "web development USA",
    "digital marketing UK",
    "SEO services UAE",
    "web development Canada",
    "digital marketing Australia",
    "global web development company",
  ],
  openGraph: {
    title: "Locations We Serve | Fraga Technology",
    description:
      "We serve clients across India, USA, UK, UAE, Canada & Australia with world-class web development and digital marketing services.",
    url: `${siteConfig.url}/locations`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/locations`,
  },
}

export default function LocationsPage() {
  const locations = getAllLocations()

  // Group locations by country
  const groupedLocations = locations.reduce((acc, loc) => {
    if (!acc[loc.country]) {
      acc[loc.country] = []
    }
    acc[loc.country].push(loc)
    return acc
  }, {} as Record<string, typeof locations>)

  const schemaData = collectionPageSchema(
    "Locations We Serve",
    "Fraga Technology provides web development and digital marketing services globally",
    `${siteConfig.url}/locations`
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
              <Globe className="h-4 w-4" />
              Global Reach
            </div>
            <h1 className="font-serif text-4xl font-bold text-background md:text-5xl lg:text-6xl">
              <span className="text-balance">Locations We Serve</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-background/60">
              We deliver world-class web development and digital marketing services to businesses across 6 countries. Local expertise, global standards.
            </p>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            {Object.entries(groupedLocations).map(([country, locs]) => (
              <div key={country} className="mb-16 last:mb-0">
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                    {country}
                  </h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {locs.map((location) => (
                    <Link
                      key={location.slug}
                      href={`/locations/${location.slug}`}
                      className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
                    >
                      <h3 className="mb-3 font-serif text-xl font-bold text-foreground group-hover:text-primary">
                        {location.title}
                      </h3>
                      <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                        {location.tagline}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                        Learn More
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-primary to-accent p-8 text-center md:p-16">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
              <span className="text-balance">Ready to Work Together?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-primary-foreground/80">
              No matter where you are located, our team is ready to help you build a powerful digital presence.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:shadow-xl hover:scale-105"
              >
                Get Free Consultation
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
