"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import Link from "next/link"
import { getServiceNavItems } from "@/lib/services"
import { getAllIndustries } from "@/lib/industries"

const staticLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
]

const industryItems = getAllIndustries().map((ind) => ({
  name: ind.title,
  slug: ind.slug,
  href: `/industries/${ind.slug}`,
}))

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const industriesRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const serviceItems = getServiceNavItems()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  function handleMouseEnter(dropdown: 'services' | 'industries') {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    if (dropdown === 'services') setServicesOpen(true)
    if (dropdown === 'industries') setIndustriesOpen(true)
  }

  function handleMouseLeave(dropdown: 'services' | 'industries') {
    timeoutRef.current = setTimeout(() => {
      if (dropdown === 'services') setServicesOpen(false)
      if (dropdown === 'industries') setIndustriesOpen(false)
    }, 200)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/90 backdrop-blur-xl shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/#home" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
            <span className="text-lg font-bold text-primary-foreground">F</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight tracking-tight text-foreground">
              Fraga
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Technology
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {staticLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}

          {/* Services dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={() => handleMouseLeave('services')}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-1/2 top-full mt-3 w-[320px] -translate-x-1/2 rounded-2xl border border-border bg-card/95 p-2 shadow-xl backdrop-blur-xl"
                >
                  {/* Arrow */}
                  <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 rounded-tl border-l border-t border-border bg-card/95" />

                  <div className="relative flex flex-col gap-0.5">
                    {serviceItems.map((item, index) => (
                      <motion.div
                        key={item.slug}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.03 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setServicesOpen(false)}
                          className="group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 hover:bg-primary/5"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 transition-all duration-200 group-hover:from-primary/20 group-hover:to-accent/20">
                            <span className="text-xs font-bold text-primary">
                              {item.name.charAt(0)}
                            </span>
                          </div>
                          <span className="text-sm font-medium text-foreground transition-colors duration-200 group-hover:text-primary">
                            {item.name}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-1 border-t border-border pt-2">
                    <Link
                      href="/#solutions"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center justify-center rounded-xl px-4 py-2.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/5"
                    >
                      View All Services
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries dropdown */}
          <div
            ref={industriesRef}
            className="relative"
            onMouseEnter={() => handleMouseEnter('industries')}
            onMouseLeave={() => handleMouseLeave('industries')}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
              onClick={() => setIndustriesOpen(!industriesOpen)}
              aria-expanded={industriesOpen}
              aria-haspopup="true"
            >
              Industries
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${
                  industriesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {industriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-1/2 top-full mt-3 w-[280px] -translate-x-1/2 rounded-2xl border border-border bg-card/95 p-2 shadow-xl backdrop-blur-xl"
                >
                  <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 rounded-tl border-l border-t border-border bg-card/95" />
                  <div className="relative flex flex-col gap-0.5">
                    {industryItems.map((item, index) => (
                      <motion.div
                        key={item.slug}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.03 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIndustriesOpen(false)}
                          className="group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 hover:bg-primary/5"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 transition-all duration-200 group-hover:from-primary/20 group-hover:to-accent/20">
                            <span className="text-xs font-bold text-primary">
                              {item.name.charAt(0)}
                            </span>
                          </div>
                          <span className="text-sm font-medium text-foreground transition-colors duration-200 group-hover:text-primary">
                            {item.name}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-1 border-t border-border pt-2">
                    <Link
                      href="/industries"
                      onClick={() => setIndustriesOpen(false)}
                      className="flex items-center justify-center rounded-xl px-4 py-2.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/5"
                    >
                      View All Industries
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {staticLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+919235000195"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
            +91 9235000195
          </a>
          <Link
            href="/#contact"
            className="rounded-full bg-gradient-to-r from-primary to-accent px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
          >
            Get a Quote
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-card/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Mobile navigation">
              <Link
                href="/#home"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
              >
                About
              </Link>

              {/* Mobile services accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-0.5 pb-2 pl-4">
                        {serviceItems.map((item) => (
                          <Link
                            key={item.slug}
                            href={item.href}
                            onClick={() => {
                              setMobileOpen(false)
                              setMobileServicesOpen(false)
                            }}
                            className="rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Industries accordion */}
              <div>
                <button
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  Industries
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      mobileIndustriesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileIndustriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-0.5 pb-2 pl-4">
                        {industryItems.map((item) => (
                          <Link
                            key={item.slug}
                            href={item.href}
                            onClick={() => {
                              setMobileOpen(false)
                              setMobileIndustriesOpen(false)
                            }}
                            className="rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {staticLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+919235000195"
                className="mt-2 flex items-center gap-2 px-4 py-3 text-base font-medium text-muted-foreground"
              >
                <Phone className="h-4 w-4" />
                +91 9235000195
              </a>
              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-center text-base font-semibold text-primary-foreground"
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
