import Link from "next/link"
import { services } from "@/lib/services"
import { serviceCities } from "@/lib/service-cities"
import { cities } from "@/lib/cities"
import { locations } from "@/lib/locations"
import { industries } from "@/lib/industries"
import { industryServices } from "@/lib/industry-services"
import { caseStudies } from "@/lib/case-studies"
import { getAllPostsMeta } from "@/lib/blog"

interface SitemapSectionProps {
  title: string
  children: React.ReactNode
}

function SitemapSection({ title, children }: SitemapSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="mb-6 border-b border-border pb-3 text-xl font-bold text-foreground md:text-2xl">
        {title}
      </h2>
      {children}
    </section>
  )
}

interface SitemapLinkProps {
  href: string
  children: React.ReactNode
}

function SitemapLink({ href, children }: SitemapLinkProps) {
  return (
    <li>
      <Link
        href={href}
        className="text-muted-foreground transition-colors duration-200 hover:text-primary hover:underline"
      >
        {children}
      </Link>
    </li>
  )
}

export default function SitemapContent() {
  const blogPosts = getAllPostsMeta()

  // Core Pages
  const corePages = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "All Services", href: "/services" },
    { name: "All Industries", href: "/industries" },
    { name: "All Locations", href: "/locations" },
    { name: "All Cities", href: "/cities" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
  ]

  // Pricing Pages
  const pricingPages = [
    { name: "Website Development Cost", href: "/pricing/website-development-cost" },
    { name: "Mobile App Development Cost", href: "/pricing/mobile-app-development-cost" },
    { name: "E-commerce Website Cost", href: "/pricing/ecommerce-website-cost" },
  ]

  // Services from lib/services.ts
  const servicesList = Object.values(services).map((service) => ({
    name: service.title,
    href: `/services/${service.slug}`,
  }))

  // Service + City Pages from lib/service-cities.ts
  const serviceCitiesList = Object.values(serviceCities).map((sc) => ({
    name: `${sc.serviceName} in ${sc.cityName}`,
    href: `/services/${sc.slug}`,
  }))

  // Cities from lib/cities.ts
  const citiesList = Object.values(cities).map((city) => ({
    name: city.name,
    href: `/cities/${city.slug}`,
  }))

  // Locations from lib/locations.ts
  const locationsList = Object.values(locations).map((location) => ({
    name: location.country,
    href: `/locations/${location.slug}`,
  }))

  // Industries from lib/industries.ts
  const industriesList = Object.values(industries).map((industry) => ({
    name: industry.title,
    href: `/industries/${industry.slug}`,
  }))

  // Industry Services from lib/industry-services.ts
  const industryServicesList = Object.values(industryServices).map((is) => ({
    name: is.title,
    href: `/industry-services/${is.slug}`,
  }))

  // Case Studies from lib/case-studies.ts
  const caseStudiesList = Object.values(caseStudies).map((cs) => ({
    name: cs.title,
    href: `/case-studies/${cs.slug}`,
  }))

  // Blog Posts from content/blog
  const blogPostsList = blogPosts.map((post) => ({
    name: post.title,
    href: `/blog/${post.slug}`,
  }))

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Sitemap
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground md:text-lg">
            Browse all pages on our website. Find services, locations, industries, case studies, and blog posts.
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="px-6 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column */}
            <div>
              {/* Core Pages */}
              <SitemapSection title="Core Pages">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {corePages.map((page) => (
                    <SitemapLink key={page.href} href={page.href}>
                      {page.name}
                    </SitemapLink>
                  ))}
                </ul>
              </SitemapSection>

              {/* Services */}
              <SitemapSection title="Services">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {servicesList.map((service) => (
                    <SitemapLink key={service.href} href={service.href}>
                      {service.name}
                    </SitemapLink>
                  ))}
                </ul>
              </SitemapSection>

              {/* Service + City Pages */}
              <SitemapSection title="Service + City Pages">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {serviceCitiesList.map((sc) => (
                    <SitemapLink key={sc.href} href={sc.href}>
                      {sc.name}
                    </SitemapLink>
                  ))}
                </ul>
              </SitemapSection>

              {/* Cities */}
              <SitemapSection title="Cities">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {citiesList.map((city) => (
                    <SitemapLink key={city.href} href={city.href}>
                      {city.name}
                    </SitemapLink>
                  ))}
                </ul>
              </SitemapSection>

              {/* Locations */}
              <SitemapSection title="Locations">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {locationsList.map((location) => (
                    <SitemapLink key={location.href} href={location.href}>
                      {location.name}
                    </SitemapLink>
                  ))}
                </ul>
              </SitemapSection>
            </div>

            {/* Right Column */}
            <div>
              {/* Industries */}
              <SitemapSection title="Industries">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {industriesList.map((industry) => (
                    <SitemapLink key={industry.href} href={industry.href}>
                      {industry.name}
                    </SitemapLink>
                  ))}
                </ul>
              </SitemapSection>

              {/* Industry Services */}
              <SitemapSection title="Industry Services">
                <ul className="grid gap-2">
                  {industryServicesList.map((is) => (
                    <SitemapLink key={is.href} href={is.href}>
                      {is.name}
                    </SitemapLink>
                  ))}
                </ul>
              </SitemapSection>

              {/* Case Studies */}
              <SitemapSection title="Case Studies">
                <ul className="grid gap-2">
                  {caseStudiesList.map((cs) => (
                    <SitemapLink key={cs.href} href={cs.href}>
                      {cs.name}
                    </SitemapLink>
                  ))}
                </ul>
              </SitemapSection>

              {/* Pricing Pages */}
              <SitemapSection title="Pricing Pages">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {pricingPages.map((page) => (
                    <SitemapLink key={page.href} href={page.href}>
                      {page.name}
                    </SitemapLink>
                  ))}
                </ul>
              </SitemapSection>

              {/* Blog */}
              <SitemapSection title="Blog">
                <ul className="grid gap-2">
                  {blogPostsList.length > 0 ? (
                    blogPostsList.map((post) => (
                      <SitemapLink key={post.href} href={post.href}>
                        {post.name}
                      </SitemapLink>
                    ))
                  ) : (
                    <li className="text-muted-foreground">No blog posts yet.</li>
                  )}
                </ul>
              </SitemapSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
