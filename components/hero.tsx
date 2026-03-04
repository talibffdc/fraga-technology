"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 lg:px-8"
    >
      <div className="pointer-events-none absolute top-1/4 right-0 h-[500px] w-[500px] translate-x-1/3 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 rounded-full bg-gradient-to-tr from-accent/10 to-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground"
        >
          Website Development Company | App Development | SEO Services
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-[110px]"
        >
          <span className="block text-balance">We Build</span>
          <span className="block text-balance">
            the{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Future
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Fraga Technology is a leading web development and digital marketing
          company serving businesses in India, USA, UK, Canada, Australia, and
          UAE. From startup websites to enterprise mobile apps, we deliver
          results that drive growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/#solutions"
            className="inline-flex rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-105"
          >
            Explore Our Services
          </Link>
          <Link
            href="/#contact"
            className="inline-flex rounded-full border border-border bg-card/50 px-8 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-card hover:shadow-lg"
          >
            Free Consultation
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground">150+</span> Projects Delivered
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground">6+</span> Countries Served
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground">50+</span> Happy Clients
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-2 w-2 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
