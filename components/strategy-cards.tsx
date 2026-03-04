"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, Code2, Rocket } from "lucide-react"

const strategies = [
  {
    icon: Search,
    title: "Discovery & Research",
    description:
      "We analyze your market, competitors, and target audience to create a data-driven strategy tailored to your industry and business goals.",
  },
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    description:
      "Our team crafts a comprehensive roadmap covering web development, SEO strategy, and digital marketing campaigns with clear milestones.",
  },
  {
    icon: Code2,
    title: "Design & Development",
    description:
      "We build high-performance websites, mobile apps, and marketing assets using modern technologies and SEO best practices.",
  },
  {
    icon: Rocket,
    title: "Launch & Optimize",
    description:
      "After launch, we continuously monitor performance, optimize campaigns, and scale your digital presence for maximum ROI.",
  },
]

export default function StrategyCards() {
  return (
    <section id="strategy" className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Process
          </h2>
          <h3 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">How we deliver results</span>
          </h3>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 transition-all duration-500 group-hover:from-primary group-hover:to-accent">
                <strategy.icon className="h-7 w-7 text-primary transition-colors duration-500 group-hover:text-primary-foreground" />
              </div>
              <h4 className="mb-3 text-lg font-bold text-foreground">
                {strategy.title}
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {strategy.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Industries we serve */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Industries We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Real Estate",
              "Law Firms",
              "Healthcare",
              "SaaS Startups",
              "E-commerce",
              "Marketing Agencies",
              "Construction",
              "Insurance",
              "Luxury Brands",
            ].map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
              >
                {industry}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
