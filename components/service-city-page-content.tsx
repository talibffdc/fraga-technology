"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2,
  ChevronDown,
  ArrowUpRight,
  MapPin,
  Phone,
  ChevronRight,
  Building2,
  Clock,
  Shield,
  TrendingUp,
  Star,
} from "lucide-react"
import { useState } from "react"
import type { ServiceCityData } from "@/lib/service-cities"
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
          open ? "max-h-[500px] pb-6" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {faq.answer}
        </p>
      </div>
    </motion.div>
  )
}

function ServiceSidebar({ currentServiceSlug }: { currentServiceSlug: string }) {
  const serviceItems = getServiceNavItems()

  return (
    <div className="sticky top-28">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
        All Services
      </h3>
      <nav className="flex flex-col gap-1" aria-label="Service navigation">
        {serviceItems.map((item) => {
          const isActive = item.slug === currentServiceSlug
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

      {/* Contact Card */}
      <div className="mt-8 rounded-2xl border border-border bg-card p-6">
        <h4 className="mb-4 font-semibold text-foreground">Need Help?</h4>
        <p className="mb-4 text-sm text-muted-foreground">
          Get a free consultation for your project
        </p>
        <a
          href="tel:+919235000195"
          className="mb-3 flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <Phone className="h-4 w-4" />
          +91 9235000195
        </a>
        <Link
          href="/contact"
          className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}

export default function ServiceCityPageContent({ serviceCity }: { serviceCity: ServiceCityData }) {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-foreground px-6 py-20 lg:px-8 lg:py-28">
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
              href="/services"
              className="text-background/50 transition-colors hover:text-background/80"
            >
              Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-background/30" />
            <Link
              href={`/services/${serviceCity.serviceSlug}`}
              className="text-background/50 transition-colors hover:text-background/80"
            >
              {serviceCity.serviceName}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-background/30" />
            <span className="font-medium text-background">{serviceCity.cityName}</span>
          </nav>

          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-2 text-sm font-medium text-background"
          >
            <MapPin className="h-4 w-4" />
            Serving {serviceCity.cityName} & Surrounding Areas
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl font-bold leading-tight text-background md:text-5xl lg:text-6xl"
          >
            <span className="text-balance">{serviceCity.heroTitle}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-3xl text-lg leading-relaxed text-background/70"
          >
            {serviceCity.heroDescription}
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-105"
            >
              {serviceCity.ctaText}
              <ArrowUpRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:+919235000195"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-background/30 bg-background/10 px-8 py-4 text-base font-semibold text-background backdrop-blur-sm transition-all duration-300 hover:bg-background/20"
            >
              <Phone className="h-5 w-5" />
              Call +91 9235000195
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-wrap items-center gap-8 border-t border-background/10 pt-8"
          >
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
              <span className="text-sm text-background/70">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-background/50" />
              <span className="text-sm text-background/70">150+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-background/50" />
              <span className="text-sm text-background/70">5+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-background/50" />
              <span className="text-sm text-background/70">100% Secure</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-7xl gap-12 lg:gap-16">
          {/* Left Sidebar */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <ServiceSidebar currentServiceSlug={serviceCity.serviceSlug} />
          </aside>

          {/* Main Content */}
          <div className="min-w-0 flex-1">
            {/* Introduction */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="mb-6 font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
                <span className="text-balance">{serviceCity.serviceName} Company in {serviceCity.cityName}</span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                {serviceCity.introduction.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.section>

            {/* Why Businesses Need Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Why It Matters
              </h2>
              <h3 className="mb-8 font-serif text-2xl font-bold text-foreground md:text-3xl">
                <span className="text-balance">{serviceCity.whyBusinessesNeed.title}</span>
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {serviceCity.whyBusinessesNeed.points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex gap-3"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm leading-relaxed text-muted-foreground">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Services Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Our Services
              </h2>
              <h3 className="mb-8 font-serif text-2xl font-bold text-foreground md:text-3xl">
                <span className="text-balance">{serviceCity.serviceName} Services in {serviceCity.cityName}</span>
              </h3>
              <div className="grid gap-5 sm:grid-cols-2">
                {serviceCity.services.map((service, index) => (
                  <motion.div
                    key={index}
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

            {/* Types of Websites */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Website Types
              </h2>
              <h3 className="mb-8 font-serif text-2xl font-bold text-foreground md:text-3xl">
                <span className="text-balance">Types of Websites We Build in {serviceCity.cityName}</span>
              </h3>
              <div className="grid gap-5 sm:grid-cols-2">
                {serviceCity.websiteTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30"
                  >
                    <h4 className="mb-2 text-base font-bold text-foreground">{type.title}</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">{type.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Development Process */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Our Process
              </h2>
              <h3 className="mb-8 font-serif text-2xl font-bold text-foreground md:text-3xl">
                <span className="text-balance">How We Build Your Website</span>
              </h3>
              <div className="space-y-4">
                {serviceCity.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4 rounded-xl border border-border bg-card p-6"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-lg font-bold text-primary-foreground">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-foreground">{step.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Pricing Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Pricing
              </h2>
              <h3 className="mb-8 font-serif text-2xl font-bold text-foreground md:text-3xl">
                <span className="text-balance">{serviceCity.serviceName} Pricing in {serviceCity.cityName}</span>
              </h3>
              <div className="grid gap-5 sm:grid-cols-2">
                {serviceCity.pricing.map((pkg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
                  >
                    <h4 className="text-lg font-bold text-foreground">{pkg.type}</h4>
                    <p className="mt-2 text-2xl font-bold text-primary">{pkg.price}</p>
                    <ul className="mt-4 space-y-2">
                      {pkg.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-center text-sm text-muted-foreground">
                * Prices are indicative. Get a custom quote based on your specific requirements.{" "}
                <Link href="/contact" className="font-medium text-primary hover:underline">
                  Contact us for a free consultation
                </Link>
                .
              </p>
            </motion.section>

            {/* Why Choose Us */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Why Choose Us
              </h2>
              <h3 className="mb-8 font-serif text-2xl font-bold text-foreground md:text-3xl">
                <span className="text-balance">Why Choose Fraga Technology in {serviceCity.cityName}?</span>
              </h3>
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  {serviceCity.whyChooseUs.map((reason, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex gap-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm leading-relaxed text-muted-foreground">{reason}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Case Study */}
            {serviceCity.caseStudy && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Case Study
                </h2>
                <h3 className="mb-8 font-serif text-2xl font-bold text-foreground md:text-3xl">
                  <span className="text-balance">{serviceCity.caseStudy.title}</span>
                </h3>
                <div className="rounded-2xl border border-border bg-gradient-to-br from-card to-card/50 p-8">
                  <div className="mb-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {serviceCity.caseStudy.industry}
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-2 font-semibold text-foreground">Challenge</h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">{serviceCity.caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="mb-2 font-semibold text-foreground">Solution</h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">{serviceCity.caseStudy.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="mb-3 font-semibold text-foreground">Results</h4>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {serviceCity.caseStudy.results.map((result, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <p className="text-sm font-medium text-foreground">{result}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>
            )}

            {/* Local Areas */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Areas We Serve
              </h2>
              <h3 className="mb-6 font-serif text-2xl font-bold text-foreground md:text-3xl">
                <span className="text-balance">{serviceCity.serviceName} Services Across {serviceCity.cityName}</span>
              </h3>
              <p className="mb-6 text-muted-foreground">
                We provide {serviceCity.serviceName.toLowerCase()} services to businesses across {serviceCity.cityName} and surrounding areas including:
              </p>
              <div className="flex flex-wrap gap-2">
                {serviceCity.localAreas.map((area, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Internal Links */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="mb-6 font-serif text-xl font-bold text-foreground">
                Related Services
              </h3>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/services/${serviceCity.serviceSlug}`}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  {serviceCity.serviceName}
                </Link>
                <Link
                  href="/services/seo-services"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  SEO Services
                </Link>
                <Link
                  href="/services/mobile-app-development"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  Mobile App Development
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-primary bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                >
                  Contact Us
                </Link>
              </div>
            </motion.section>

            {/* FAQ Section */}
            {serviceCity.faqs.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  FAQ
                </h2>
                <h3 className="mb-8 font-serif text-2xl font-bold text-foreground md:text-3xl">
                  <span className="text-balance">Frequently Asked Questions</span>
                </h3>
                <div className="rounded-2xl border border-border">
                  <div className="divide-y divide-border px-6">
                    {serviceCity.faqs.map((faq, index) => (
                      <FAQItem key={index} faq={faq} index={index} />
                    ))}
                  </div>
                </div>
              </motion.section>
            )}

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-gradient-to-br from-primary to-accent p-8 text-center md:p-16"
            >
              <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
                <span className="text-balance">Ready to Build Your Website in {serviceCity.cityName}?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-primary-foreground/80">
                Get a free consultation and custom quote for your {serviceCity.serviceName.toLowerCase()} project. 
                We&apos;ll discuss your requirements and create a plan for your business success.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:shadow-xl hover:scale-105"
                >
                  {serviceCity.ctaText}
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
                <a
                  href="tel:+919235000195"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </div>
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  )
}
