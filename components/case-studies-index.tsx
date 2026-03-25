"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, TrendingUp, Users, Award } from "lucide-react"
import { getAllCaseStudies } from "@/lib/case-studies"

export default function CaseStudiesIndex() {
  const caseStudies = getAllCaseStudies()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Award className="h-4 w-4" />
            Success Stories
          </div>
          <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">Proven Results for Leading Brands</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Discover how we&apos;ve helped businesses across industries achieve remarkable growth through strategic web development and digital marketing.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20 grid gap-6 sm:grid-cols-3"
        >
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <div className="mb-2 flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground">150+</div>
            <p className="mt-2 text-sm text-muted-foreground">Projects Delivered</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <div className="mb-2 flex items-center justify-center">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground">50+</div>
            <p className="mt-2 text-sm text-muted-foreground">Happy Clients</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <div className="mb-2 flex items-center justify-center">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground">6+</div>
            <p className="mt-2 text-sm text-muted-foreground">Years Experience</p>
          </div>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {caseStudies.map((study) => (
            <motion.div key={study.slug} variants={itemVariants}>
              <Link href={`/case-studies/${study.slug}`}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  {/* Image Placeholder */}
                  <div className="relative h-48 w-full bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <TrendingUp className="mx-auto mb-2 h-8 w-8 text-primary" />
                        <p className="text-xs text-muted-foreground">{study.industry}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6">
                    <div className="mb-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {study.service}
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                      {study.description}
                    </p>

                    {/* Key Results */}
                    <div className="mb-6 space-y-2 border-t border-border pt-4">
                      {study.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          <span className="text-sm font-semibold text-foreground">{result.value}</span>
                          <span className="text-xs text-muted-foreground">{result.title}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                      Read Case Study
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Hover Gradient */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 rounded-2xl border border-border bg-card p-12 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            Ready to Become a Success Story?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Let&apos;s discuss how we can help your business achieve similar results. Schedule a free consultation with our team.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Get Free Consultation
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/919235000195"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition-all hover:bg-secondary"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
