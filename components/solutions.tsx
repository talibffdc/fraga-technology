"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { getServiceNavItems } from "@/lib/services"

export default function Solutions() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const serviceItems = getServiceNavItems()

  const solutions = serviceItems.map((item, index) => ({
    id: String(index + 1).padStart(2, "0"),
    title: item.name,
    href: item.href,
  }))

  return (
    <section id="solutions" className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Services
          </h2>
          <h3 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">Web development services and digital solutions</span>
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            From company website development to mobile app development and SEO
            services, we provide end-to-end technology solutions for businesses
            worldwide.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onMouseEnter={() => setHoveredId(solution.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative border-b border-border py-8 transition-all duration-500 first:border-t md:py-10"
            >
              <Link href={solution.href} className="flex items-center gap-6 md:gap-10">
                <div className="relative w-12 overflow-hidden md:w-16">
                  <motion.span
                    animate={{
                      x: hoveredId === solution.id ? 0 : -60,
                      opacity: hoveredId === solution.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute left-0 top-0 text-2xl font-bold text-primary md:text-3xl"
                  >
                    {solution.id}
                  </motion.span>
                  <motion.span
                    animate={{
                      x: hoveredId === solution.id ? 60 : 0,
                      opacity: hoveredId === solution.id ? 0 : 1,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-2xl font-bold text-muted-foreground/30 md:text-3xl"
                  >
                    {solution.id}
                  </motion.span>
                </div>

                <div className="flex flex-1 items-center gap-8">
                  <h4 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary md:text-2xl">
                    {solution.title}
                  </h4>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-border transition-all duration-500 group-hover:border-primary group-hover:bg-primary md:h-14 md:w-14">
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:text-primary-foreground md:h-6 md:w-6" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
