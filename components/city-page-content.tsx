"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2,
  ChevronDown,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"
import type { CityData } from "@/lib/cities"
import { getCityNavItems } from "@/lib/cities"

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

function CitySidebar({ currentSlug }: { currentSlug: string }) {
  const cityItems = getCityNavItems()

  return (
    <div className="sticky top-28">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
        Our Cities
      </h3>
      <nav className="flex flex-col gap-1" aria-label="City navigation">
        {cityItems.map((item) => {
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
              <span className="flex-1">{item.name}</span>
              {isActive && <ChevronRight className="h-4 w-4" />}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default function CityPageContent({ city }: { city: CityData }) {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <svg viewBox="0 0 1200 600" className="h-full w-full" aria-hidden="true">
            <ellipse cx="600" cy="300" rx="500" ry="250" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <ellipse cx="600" cy="300" rx="350" ry="250" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold text-primary">
              <MapPin className="h-4 w-4" />
              We Serve {city.name}
            </div>
            <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="text-balance">{city.name} Web Development & Digital Marketing Services</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {city.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+919235000195"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/919235000195?text=Hi%20Fraga%20Technology%2C%20I%27m%20interested%20in%20web%20development%20services%20in%20${city.name}"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition-all hover:bg-secondary"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
                Why Choose Us in {city.name}?
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {city.whyChooseUs.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{reason}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
                Our Services in {city.name}
              </h2>
              <div className="space-y-6">
                {city.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
                Frequently Asked Questions
              </h2>
              <div className="rounded-xl border border-border">
                {city.faqs.map((faq, index) => (
                  <FAQItem key={index} faq={faq} index={index} />
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-border bg-card p-12 text-center"
            >
              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                Ready to Grow in {city.name}?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
                Get a free consultation with our team. We&apos;ll discuss your project requirements and create a custom plan for your success in {city.name}.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="tel:+919235000195"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition-all hover:bg-secondary"
                >
                  Contact Form
                </a>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <CitySidebar currentSlug={city.slug} />
        </div>
      </div>
    </section>
  )
}
