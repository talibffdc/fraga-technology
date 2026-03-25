"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"

interface MidPageCTAProps {
  title?: string
  description?: string
  ctaText?: string
}

export default function MidPageCTA({
  title = "Ready to Transform Your Business?",
  description = "Get a free consultation with our experts. We'll discuss your project requirements and create a custom strategy for your success.",
  ctaText = "Get Free Consultation",
}: MidPageCTAProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden px-6 py-16 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg viewBox="0 0 1200 600" className="h-full w-full" aria-hidden="true">
          <ellipse cx="600" cy="300" rx="500" ry="250" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <ellipse cx="600" cy="300" rx="350" ry="250" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card to-card p-8 md:p-12 lg:p-16">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm font-semibold text-primary"
          >
            <Zap className="h-4 w-4" />
            Limited Time Offer
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-4 text-3xl font-bold text-foreground md:text-4xl"
          >
            <span className="text-balance">{title}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              {ctaText}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/919235000195?text=Hi%20Fraga%20Technology%2C%20I%27m%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-8 py-4 font-semibold text-primary transition-all hover:bg-primary/10"
            >
              WhatsApp Us
            </a>
          </motion.div>

          {/* Trust Signal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-8 flex flex-col items-center gap-4 border-t border-border pt-8 sm:flex-row sm:justify-center"
          >
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold text-foreground">150+ Projects Delivered</p>
              <p className="text-xs text-muted-foreground">Trusted by startups and enterprises</p>
            </div>
            <div className="hidden h-12 w-px bg-border sm:block" />
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold text-foreground">6+ Years Experience</p>
              <p className="text-xs text-muted-foreground">Proven track record of success</p>
            </div>
            <div className="hidden h-12 w-px bg-border sm:block" />
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold text-foreground">24/7 Support</p>
              <p className="text-xs text-muted-foreground">Always here to help</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
