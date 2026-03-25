"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Check, ArrowRight, Phone, HelpCircle, ChevronDown } from "lucide-react"
import { useState } from "react"

interface PricingPackage {
  name: string
  price: string | number
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
}

interface PricingPageProps {
  title: string
  description: string
  pageSubtitle: string
  packages: PricingPackage[]
  faqData: { question: string; answer: string }[]
  costFactors?: { title: string; description: string }[]
}

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

export default function PricingPage({
  title,
  description,
  pageSubtitle,
  packages,
  faqData,
  costFactors,
}: PricingPageProps) {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg viewBox="0 0 1200 600" className="h-full w-full" aria-hidden="true">
          <ellipse cx="600" cy="300" rx="500" ry="250" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <ellipse cx="600" cy="300" rx="350" ry="250" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">{title}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </motion.div>

        {/* Cost Factors */}
        {costFactors && costFactors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-20"
          >
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
              {pageSubtitle}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {costFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <h3 className="mb-2 font-semibold text-foreground">{factor.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{factor.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Pricing Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="mb-12 text-center text-2xl font-bold text-foreground md:text-3xl">
            Our Packages
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                  pkg.highlighted
                    ? "border-primary bg-gradient-to-br from-primary/5 via-card to-card shadow-xl shadow-primary/10"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute top-0 right-0 bg-primary px-4 py-1 text-xs font-bold text-primary-foreground rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="mb-2 text-xl font-bold text-foreground">{pkg.name}</h3>
                  <p className="mb-6 text-sm text-muted-foreground">{pkg.description}</p>

                  <div className="mb-6">
                    <div className="text-3xl font-bold text-foreground">
                      {typeof pkg.price === "number" ? `₹${pkg.price.toLocaleString()}` : pkg.price}
                    </div>
                    {typeof pkg.price === "number" && (
                      <p className="text-xs text-muted-foreground mt-1">Starting price</p>
                    )}
                  </div>

                  <ul className="mb-8 space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Check className="h-5 w-5 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/#contact"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all ${
                      pkg.highlighted
                        ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
                        : "border border-border text-foreground hover:bg-secondary"
                    }`}
                  >
                    {pkg.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl rounded-xl border border-border">
            {faqData.map((faq, index) => (
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
          <HelpCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            Still Have Questions?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Our team is ready to discuss your specific requirements and create a custom package tailored to your needs.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:+919235000195"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition-all hover:bg-secondary"
            >
              Get Custom Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
