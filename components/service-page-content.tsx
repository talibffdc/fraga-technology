"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2,
  ChevronDown,
  ArrowUpRight,
  TrendingUp,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import type { ServiceData } from "@/lib/services"
import { getServiceNavItems } from "@/lib/services"

function FAQItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border-b border-border"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left"
        aria-expanded={open}
      >
        <h3 className="pr-4 text-base font-semibold text-foreground md:text-lg">
          {faq.question}
        </h3>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {faq.answer}
        </p>
      </div>
    </motion.div>
  )
}

function ServiceSidebar({ currentSlug }: { currentSlug: string }) {
  const serviceItems = getServiceNavItems()

  return (
    <div className="sticky top-28">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
        All Services
      </h3>
      <nav className="flex flex-col gap-1" aria-label="Service navigation">
        {serviceItems.map((item) => {
          const isActive = item.slug === currentSlug
          return (
            <Link
              key={item.slug}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {item.name.charAt(0)}
              </div>
              <span className="flex-1">{item.name}</span>
              {isActive && <ChevronRight className="h-4 w-4 text-primary" />}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default function ServicePageContent({ service }: { service: ServiceData }) {
  const pathname = usePathname()

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-foreground px-6 py-20 lg:px-8 lg:py-28">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm" aria-label="Breadcrumb">
            <Link
              href="/"
              className="text-background/50 transition-colors hover:text-background/80"
            >
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-background/30" />
            <Link
              href="/#solutions"
              className="text-background/50 transition-colors hover:text-background/80"
            >
              Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-background/30" />
            <span className="font-medium text-background">{service.title}</span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl font-bold leading-tight text-background md:text-5xl lg:text-6xl"
          >
            <span className="text-balance">{service.title}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-lg text-background/60"
          >
            {service.tagline}
          </motion.p>
        </div>
      </section>

      {/* Main content with sidebar */}
      <section className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-7xl gap-12 lg:gap-16">
          {/* Left Sidebar */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <ServiceSidebar currentSlug={service.slug} />
          </aside>

          {/* Main Content */}
          <div className="min-w-0 flex-1">
            {/* Service description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {service.tagline}
              </p>
              <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
                <span className="text-balance">Professional {service.title} Services</span>
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {service.description}
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {service.heroText}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-105"
                >
                  {service.ctaText}
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
                <a
                  href="tel:+919235000195"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card/50 px-8 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-card hover:shadow-lg"
                >
                  Call +91 9235000195
                </a>
              </div>
            </motion.div>

            {/* Service Features Grid */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                What We Offer
              </h2>
              <h3 className="mb-10 font-serif text-2xl font-bold text-foreground md:text-3xl">
                <span className="text-balance">Our {service.title} Capabilities</span>
              </h3>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="mb-2 text-base font-bold text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Service Outcomes Section */}
            {service.outcomes && service.outcomes.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Results You Get
                </h2>
                <h3 className="mb-10 font-serif text-2xl font-bold text-foreground md:text-3xl">
                  <span className="text-balance">What You Can Expect</span>
                </h3>
                <div className="grid gap-5 sm:grid-cols-2">
                  {service.outcomes.map((outcome, index) => (
                    <motion.div
                      key={outcome.title}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                        <TrendingUp className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-foreground">{outcome.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {outcome.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Location-Based Services */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20 rounded-2xl border border-border bg-card p-8 md:p-10"
            >
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Local Services
              </h2>
              <h3 className="mb-6 font-serif text-2xl font-bold text-foreground md:text-3xl">
                {service.title} by City
              </h3>
              <p className="mb-6 text-muted-foreground">
                We provide specialized {service.title.toLowerCase()} services across major Indian cities:
              </p>
              <div className="flex flex-wrap gap-3">
                {service.slug === "website-development" && (
                  <>
                    <Link
                      href="/services/website-development-mumbai"
                      className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                    >
                      Website Development Mumbai
                    </Link>
                    <Link
                      href="/services/website-development-delhi"
                      className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                    >
                      Website Development Delhi
                    </Link>
                  </>
                )}
                {service.slug === "seo-services" && (
                  <>
                    <Link
                      href="/services/seo-services-mumbai"
                      className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                    >
                      SEO Services Mumbai
                    </Link>
                    <Link
                      href="/services/seo-services-bangalore"
                      className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                    >
                      SEO Services Bangalore
                    </Link>
                  </>
                )}
                <Link
                  href="/cities/delhi"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  Delhi
                </Link>
                <Link
                  href="/cities/bangalore"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  Bangalore
                </Link>
                <Link
                  href="/cities/noida"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  Noida
                </Link>
                <Link
                  href="/cities/lucknow"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  Lucknow
                </Link>
              </div>
            </motion.section>

            {/* Industries served */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20 rounded-2xl border border-border bg-card p-8 md:p-10"
            >
              <h2 className="mb-6 font-serif text-2xl font-bold text-foreground md:text-3xl">
                Industries We Serve
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Real Estate", slug: "real-estate" },
                  { name: "Law Firms", slug: "law-firms" },
                  { name: "Healthcare", slug: "healthcare" },
                  { name: "SaaS Startups", slug: "saas" },
                  { name: "E-commerce", slug: "ecommerce" },
                  { name: "Marketing Agencies", slug: "marketing-agencies" },
                  { name: "Construction", slug: "construction" },
                  { name: "Insurance", slug: "insurance" },
                  { name: "Luxury Brands", slug: "luxury-brands" },
                ].map((industry) => (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
            </motion.section>

            {/* FAQ */}
            {service.faqs.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  FAQ
                </h2>
                <h3 className="mb-8 font-serif text-2xl font-bold text-foreground md:text-3xl">
                  Frequently Asked Questions
                </h3>
                <div className="border-t border-border">
                  {service.faqs.map((faq, index) => (
                    <FAQItem key={index} faq={faq} index={index} />
                  ))}
                </div>
              </motion.section>
            )}

            {/* CTA */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-gradient-to-br from-primary to-accent p-8 text-center md:p-16"
            >
              <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
                <span className="text-balance">Any questions? We&apos;re here to help.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-primary-foreground/80">
                Contact Fraga Technology today for a free consultation and custom
                quote for your {service.title.toLowerCase()} project.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:shadow-xl hover:scale-105"
                >
                  {service.ctaText}
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  )
}
