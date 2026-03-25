"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MapPin, ArrowUpRight, Phone } from "lucide-react"
import { getAllCities } from "@/lib/cities"

export default function CitiesIndex() {
  const cities = getAllCities()

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
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold text-primary">
            <MapPin className="h-4 w-4" />
            Serving Across India
          </div>
          <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">Web Development Services Across India</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Professional web development, mobile app development, SEO, and digital marketing services tailored for your city. Find local expertise with global quality.
          </p>
        </motion.div>

        {/* Cities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cities.map((city) => (
            <motion.div key={city.slug} variants={itemVariants}>
              <Link href={`/cities/${city.slug}`}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  {/* Location Icon */}
                  <div className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    <MapPin className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="mb-2 text-2xl font-bold text-foreground">{city.name}</h3>
                    <p className="mb-4 text-sm font-medium text-muted-foreground">{city.state}</p>
                    <p className="mb-6 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {city.description}
                    </p>

                    {/* Services Preview */}
                    <ul className="mb-6 space-y-1">
                      {city.services.slice(0, 2).map((service, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground">
                          • {service.title}
                        </li>
                      ))}
                      {city.services.length > 2 && (
                        <li className="text-xs text-muted-foreground">
                          • +{city.services.length - 2} more services
                        </li>
                      )}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                      Explore Services
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 rounded-2xl border border-border bg-card p-12 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            Don&apos;t See Your City?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            We serve businesses across India and internationally. Contact us to discuss your project requirements and we&apos;ll create a custom solution for your location.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:+919235000195"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              <Phone className="h-4 w-4" />
              Call Us Now
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition-all hover:bg-secondary"
            >
              Get Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
