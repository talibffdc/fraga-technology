"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { TrendingUp, Users, Clock, Code2, Quote, ArrowUpRight } from "lucide-react"
import type { CaseStudy } from "@/lib/case-studies"
import { getCaseStudiesByIndustry } from "@/lib/case-studies"

export default function CaseStudyDetail({ caseStudy }: { caseStudy: CaseStudy }) {
  const relatedStudies = getCaseStudiesByIndustry(caseStudy.industry)
    .filter((cs) => cs.slug !== caseStudy.slug)
    .slice(0, 2)

  return (
    <section className="relative overflow-hidden">
      {/* Hero */}
      <div className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <svg viewBox="0 0 1200 600" className="h-full w-full" aria-hidden="true">
            <ellipse cx="600" cy="300" rx="500" ry="250" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <ellipse cx="600" cy="300" rx="350" ry="250" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <TrendingUp className="h-4 w-4" />
              {caseStudy.industry}
            </div>
            <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl mb-4">
              <span className="text-balance">{caseStudy.title}</span>
            </h1>
            <p className="text-lg text-muted-foreground">{caseStudy.tagline}</p>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-4"
          >
            {caseStudy.results.map((result, idx) => (
              <div key={idx} className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="mb-2 text-2xl font-bold text-primary">{result.value}</div>
                <p className="text-sm font-semibold text-foreground">{result.title}</p>
                {result.description && (
                  <p className="mt-1 text-xs text-muted-foreground">{result.description}</p>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          {/* Challenge & Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 grid gap-12 md:grid-cols-2"
          >
            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">The Challenge</h2>
              <p className="leading-relaxed text-muted-foreground">{caseStudy.challenge}</p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">Our Solution</h2>
              <p className="leading-relaxed text-muted-foreground">{caseStudy.solution}</p>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 rounded-2xl border border-border bg-card p-8"
          >
            <h2 className="mb-8 text-2xl font-bold text-foreground">Project Details</h2>
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Timeline</h3>
                </div>
                <p className="text-muted-foreground">{caseStudy.timeline}</p>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Team Size</h3>
                </div>
                <p className="text-muted-foreground">{caseStudy.teamSize}</p>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Technologies</h3>
                </div>
                <p className="text-sm text-muted-foreground">{caseStudy.technologies.slice(0, 3).join(", ")}</p>
              </div>
            </div>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-card to-card p-8 md:p-12"
          >
            <div className="mb-4 flex items-start gap-2">
              <Quote className="h-6 w-6 text-primary shrink-0 mt-1" />
            </div>
            <blockquote className="mb-6 text-lg leading-relaxed text-muted-foreground">
              {caseStudy.testimonial.text}
            </blockquote>
            <div>
              <p className="font-semibold text-foreground">{caseStudy.testimonial.author}</p>
              <p className="text-sm text-muted-foreground">
                {caseStudy.testimonial.position} at {caseStudy.testimonial.company}
              </p>
            </div>
          </motion.div>

          {/* Related Case Studies */}
          {relatedStudies.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16"
            >
              <h2 className="mb-8 text-2xl font-bold text-foreground">Related Case Studies</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {relatedStudies.map((study) => (
                  <Link key={study.slug} href={`/case-studies/${study.slug}`}>
                    <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
                      <div className="mb-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {study.service}
                      </div>
                      <h3 className="mb-2 font-semibold text-foreground group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                        {study.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                        Read More
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl border border-border bg-card p-12 text-center"
          >
            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              Ready for Your Success Story?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
              We&apos;re ready to help your business achieve similar results. Let&apos;s discuss your project and create a winning strategy together.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Schedule Consultation
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
      </div>
    </section>
  )
}
