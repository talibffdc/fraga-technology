"use client"

import { motion } from "framer-motion"
import SafeImage from "@/components/safe-image"
import { ArrowRight } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex shrink-0 items-center gap-6"
          >
            <div className="flex items-center gap-6">
              <span className="font-serif text-[140px] font-bold leading-none text-foreground md:text-[200px]">
                6
              </span>
              <div className="flex items-center gap-4">
                <div className="h-24 w-px bg-border md:h-32" />
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground [writing-mode:vertical-lr]">
                  Countries We Serve
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About Fraga Technology
            </h2>
            <h3 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              <span className="text-balance">
                Your trusted web development and digital marketing partner
              </span>
            </h3>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Fraga Technology is a full-service website development company and
              digital marketing agency headquartered in India. We specialize in
              building high-performance websites, mobile applications, and
              data-driven marketing campaigns for businesses across India, USA,
              UK, Canada, Australia, and UAE. From SaaS startups to real estate
              companies, law firms, and e-commerce brands, we deliver solutions
              that convert visitors into customers.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-primary transition-all duration-300 hover:gap-4"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </a>

            <div className="mt-10 overflow-hidden rounded-2xl">
              <SafeImage
                src="/images/about.jpg"
                alt="Fraga Technology team collaborating on web development and digital marketing projects"
                width={800}
                height={500}
                fallbackText="About Fraga Technology"
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
