import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { getServiceNavItems } from "@/lib/services"
import { getIndustryNavItems } from "@/lib/industries"

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#solutions" },
  { label: "Portfolio", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
  { label: "Sitemap", href: "/sitemap" },
]

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/fragatechnology" },
  { label: "Twitter", href: "https://twitter.com/fragatechnology" },
  { label: "Instagram", href: "https://instagram.com/fragatechnology" },
  { label: "Facebook", href: "https://facebook.com/fragatechnology" },
]

export default function Footer() {
  const serviceLinks = getServiceNavItems().map((s) => ({
    label: s.name,
    href: s.href,
  }))

  const industryLinks = getIndustryNavItems().map((i) => ({
    label: i.name,
    href: i.href,
  }))

  return (
    <footer className="bg-foreground px-6 py-16 text-background lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* CTA Area */}
        <div className="mb-16 flex flex-col items-start justify-between gap-8 border-b border-background/10 pb-16 md:flex-row md:items-center">
          <div>
            <h3 className="font-serif text-3xl font-bold leading-tight text-background md:text-4xl lg:text-5xl">
              <span className="text-balance">Ready to build your digital future?</span>
            </h3>
            <p className="mt-4 max-w-lg text-base text-background/60">
              Partner with Fraga Technology for expert web development, mobile
              app development, SEO, and digital marketing services.
            </p>
          </div>
          <Link
            href="/#contact"
            className="flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-primary/25"
          >
            Start a Project
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>

        {/* 5-Column Layout */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo + Description */}
          <div>
            <Link href="/#home" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                <span className="text-lg font-bold text-primary-foreground">F</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight tracking-tight text-background">
                  Fraga
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-background/50">
                  Technology
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/50">
              We Build the Future. Expert web development, mobile app
              development, SEO services, and digital marketing for businesses
              worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.15em] text-background/40">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 transition-colors duration-300 hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - dynamic */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.15em] text-background/40">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 transition-colors duration-300 hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries - dynamic */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.15em] text-background/40">
              Industries
            </h4>
            <ul className="flex flex-col gap-3">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 transition-colors duration-300 hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Contact */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.15em] text-background/40">
              Connect
            </h4>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 transition-colors duration-300 hover:text-background"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-sm text-background/40">
              <p>contact@fragatechnology.com</p>
              <p className="mt-1">fragatechnology@gmail.com</p>
              <p className="mt-2">+91 9235000195</p>
              <p className="mt-1">F.F.D.C Kannauj, India</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-background/10 pt-8 text-center">
          <p className="text-sm text-background/40">
            &copy; {new Date().getFullYear()} Fraga Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
