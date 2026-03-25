"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2,
  ChevronDown,
  ArrowUpRight,
  Zap,
  Phone,
  Target,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"
import type { IndustryService } from "@/lib/industry-services"
import { getIndustryServicesNavItems } from "@/lib/industry-services"

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

function IndustrySidebar({ currentSlug }: { currentSlug: string }) {
  const items = getIndustryServicesNavItems()

  return (
    <div className="sticky top-28">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
        Industry Solutions
      </h3>
      <nav className="flex flex-col gap-1" aria-label="Industry solutions navigation">
        {items.map((item) => {
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
                <Target className="h-3.5 w-3.5" />
              </div>
              <span className="flex-1 line-clamp-2">{item.title}</span>
              {isActive && <ChevronRight className="h-4 w-4" />}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default function IndustryServiceContent({ industryService }: { industryService: IndustryService }) {
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
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Zap className="h-4 w-4" />
              {industryService.industry}
            </div>
            <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="text-balance">{industryService.title}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {industryService.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+919235000195"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                <Phone className="h-4 w-4" />
                Schedule Consultation
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition-all hover:bg-secondary"
              >
                Get Details
                <ArrowUpRight className="h-4 w-4" />
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
            {/* Pain Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
                Challenges in {industryService.industry}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {industryService.painPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="rounded-xl border border-border/50 bg-card/50 p-6"
                  >
                    <h3 className="mb-2 font-semibold text-foreground">{point.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-16"
            >
              <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
                Our Solutions
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {industryService.solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                  >
                    <CheckCircle2 className="mb-4 h-6 w-6 text-primary" />
                    <h3 className="mb-2 font-semibold text-foreground">{solution.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{solution.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
                Key Features
              </h2>
              <div className="space-y-4">
                {industryService.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4 rounded-xl border border-border bg-card p-6"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16"
            >
              <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
                Frequently Asked Questions
              </h2>
              <div className="rounded-xl border border-border">
                {industryService.faqs.map((faq, index) => (
                  <FAQItem key={index} faq={faq} index={index} />
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-2xl border border-border bg-card p-12 text-center"
            >
              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                Ready to Transform Your {industryService.industry} Business?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
                Our experts are ready to discuss how we can help you achieve your business goals with tailored solutions.
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
          <IndustrySidebar currentSlug={industryService.slug} />
        </div>
      </div>
    </section>
  )
}
