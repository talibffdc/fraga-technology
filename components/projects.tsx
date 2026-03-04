"use client"

import { motion } from "framer-motion"
import SafeImage from "@/components/safe-image"

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute top-1/2 left-1/4 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Portfolio
          </h2>
          <h3 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
            <span className="text-balance">Recent</span>
            <br />
            <span className="relative inline-block text-balance">
              <span className="pointer-events-none absolute -left-10 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary to-accent md:h-12 md:w-12" />
              Projects
            </span>
          </h3>
        </motion.div>

        <div className="relative">
          {/* Dark hero banner */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group relative pb-20 md:pb-28 lg:pb-32"
          >
            <div className="overflow-hidden rounded-2xl">
              <SafeImage
                src="/images/project.jpg"
                alt="Fraga Technology web development project showcase - modern website and mobile app"
                width={1400}
                height={600}
                fallbackText="Project Showcase"
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Floating white card overlapping the hero */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative z-10 mx-4 -mt-32 md:mx-8 md:-mt-40 lg:mx-12 lg:-mt-44"
          >
            <div className="rounded-2xl border border-border/50 bg-card p-8 shadow-2xl md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <span className="mb-4 inline-block rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                    Web Development
                  </span>
                  <h4 className="mt-3 font-serif text-2xl font-bold text-foreground md:text-3xl">
                    E-commerce Platform for Luxury Brand
                  </h4>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                    A fully responsive e-commerce website built with modern web
                    technologies, featuring SEO-optimized pages, integrated payment
                    gateway, and a mobile-first design that increased online sales
                    by 200% in the first quarter.
                  </p>
                </div>
                <div className="flex flex-col gap-4 text-right">
                  <div>
                    <p className="text-sm text-muted-foreground">Industry</p>
                    <p className="text-lg font-bold text-foreground">Luxury Retail</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-lg font-bold text-foreground">Dubai, UAE</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
