"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2,
  ChevronDown,
  ArrowUpRight,
  MapPin,
  Building2,
  ChevronRight,
  Globe,
} from "lucide-react"
import { useState } from "react"
import type { LocationData } from "@/lib/locations"
import { getLocationNavItems } from "@/lib/locations"

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

function LocationSidebar({ currentSlug }: { currentSlug: string }) {
  const locationItems = getLocationNavItems()

  // Group locations by country
  const groupedLocations = locationItems.reduce((acc, loc) => {
    if (!acc[loc.country]) {
      acc[loc.country] = []
    }
    acc[loc.country].push(loc)
    return acc
  }, {} as Record<string, typeof locationItems>)

  return (
    <div className="sticky top-28">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
        Locations We Serve
      </h3>
      <nav className="flex flex-col gap-4" aria-label="Location navigation">
        {Object.entries(groupedLocations).map(([country, locs]) => (
          <div key={country}>
            <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
              <Globe className="h-3 w-3" />
              {country}
            </p>
            <div className="flex flex-col gap-1">
              {locs.map((item) => {
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
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      <MapPin className="h-3.5 w-3.5" />
                    </div>
                    <span className="flex-1 truncate">{item.slug.charAt(0).toUpperCase() + item.slug.slice(1)}</span>
                    {isActive && <ChevronRight className="h-4 w-4 text-primary" />}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* CTA */}
      <div className="mt-8 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-6">
        <h4 className="font-semibold text-foreground">Work With Us</h4>
        <p className="mt-2 text-sm text-muted-foreground">
          Get a free consultation for your location-specific project.
        </p>
        <Link
          href="/#contact"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          Contact Us
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

export default function LocationPageContent({ location }: { location: LocationData }) {
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
              href="/locations"
              className="text-background/50 transition-colors hover:text-background/80"
            >
              Locations
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-background/30" />
            <span className="font-medium text-background">{location.country}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary">
              <MapPin className="h-4 w-4" />
              {location.country}
            </span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-serif text-4xl font-bold leading-tight text-background md:text-5xl lg:text-6xl"
          >
            <span className="text-balance">{location.title}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl text-lg text-background/60"
          >
            {location.tagline}
          </motion.p>
        </div>
      </section>

      {/* Main content with sidebar */}
      <section className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-7xl gap-12 lg:gap-16">
          {/* Left Sidebar */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <LocationSidebar currentSlug={location.slug} />
          </aside>

          {/* Main Content */}
          <div className="min-w-0 flex-1">
            {/* Location description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
                <span className="text-balance">Digital Services for {location.country} Businesses</span>
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {location.description}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-105"
                >
                  {location.ctaText}
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

            {/* Hero Text */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20 rounded-2xl border border-border bg-gradient-to-br from-card to-secondary/30 p-8 md:p-10"
            >
              <p className="text-lg leading-relaxed text-muted-foreground">
                {location.heroText}
              </p>
            </motion.section>

            {/* Why Choose Us */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Why Choose Us
              </h2>
              <h3 className="mb-8 font-serif text-2xl font-bold text-foreground md:text-3xl">
                <span className="text-balance">Why {location.country} Businesses Trust Us</span>
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {location.whyChooseUs.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm text-muted-foreground">{reason}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Services */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Our Services
              </h2>
              <h3 className="mb-10 font-serif text-2xl font-bold text-foreground md:text-3xl">
                <span className="text-balance">Services We Offer in {location.country}</span>
              </h3>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {location.services.map((service, index) => (
                  <motion.div
                    key={service.title}
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
                      {service.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Industries */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20 rounded-2xl border border-border bg-card p-8 md:p-10"
            >
              <h2 className="mb-6 font-serif text-2xl font-bold text-foreground md:text-3xl">
                <span className="text-balance">Industries We Serve in {location.country}</span>
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {location.industries.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3 rounded-lg bg-secondary/50 px-4 py-3"
                  >
                    <Building2 className="h-4 w-4 shrink-0 text-primary" />
                    <p className="text-sm font-medium text-foreground">{industry}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* FAQ */}
            {location.faqs.length > 0 && (
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
                  Questions from {location.country} Clients
                </h3>
                <div className="border-t border-border">
                  {location.faqs.map((faq, index) => (
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
                <span className="text-balance">Ready to Grow Your {location.country} Business?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-primary-foreground/80">
                Contact Fraga Technology today for a free consultation and custom
                strategy tailored for {location.country} market.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:shadow-xl hover:scale-105"
                >
                  {location.ctaText}
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
