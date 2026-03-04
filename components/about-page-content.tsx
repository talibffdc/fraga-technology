"use client"

import { motion } from "framer-motion"
import SafeImage from "@/components/safe-image"
import Link from "next/link"
import {
  ArrowRight,
  Globe,
  Cpu,
  BarChart3,
  Shield,
  Handshake,
  Target,
  Monitor,
  Smartphone,
  Search,
  Megaphone,
  Palette,
  Share2,
} from "lucide-react"

const services = [
  {
    icon: Monitor,
    title: "Website Development",
    description:
      "Custom business websites, SaaS platforms, and scalable web applications.",
    href: "/services/website-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "High performance Android and iOS apps built for startups and enterprises.",
    href: "/services/mobile-app-development",
  },
  {
    icon: Search,
    title: "SEO Services",
    description:
      "Professional search engine optimization strategies that improve rankings and organic traffic.",
    href: "/services/seo-services",
  },
  {
    icon: Megaphone,
    title: "Meta Ads & Google Ads",
    description:
      "Performance marketing campaigns designed to generate leads and sales.",
    href: "/services/meta-ads",
  },
  {
    icon: Palette,
    title: "Graphics Design",
    description:
      "Modern brand identity, UI design, and marketing creatives.",
    href: "/services/graphics-design",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Strategic social media campaigns that grow brand awareness and engagement.",
    href: "/services/social-media-marketing",
  },
]

const whyChooseUs = [
  {
    icon: Target,
    title: "Strategy First Development",
    description:
      "We begin every project with clear business objectives to ensure technology supports growth.",
  },
  {
    icon: Globe,
    title: "Scalable Architecture",
    description:
      "Our systems are designed to grow with your business without technical limitations.",
  },
  {
    icon: Cpu,
    title: "AI & Automation Ready",
    description:
      "We integrate intelligent automation systems that improve efficiency.",
  },
  {
    icon: BarChart3,
    title: "Data Driven Decisions",
    description:
      "Analytics and insights help businesses understand performance and scale faster.",
  },
  {
    icon: Shield,
    title: "Security & Performance Focus",
    description:
      "Fast, secure, and optimized infrastructure ensures reliability.",
  },
  {
    icon: Handshake,
    title: "Long Term Partnership",
    description:
      "We support businesses even after product launch with continuous improvements.",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
}

export default function AboutPageContent() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden">
        <SafeImage
          src="/images/about-hero.jpg"
          alt="Fraga Technology office"
          fill
          priority
          fallbackText="About Fraga Technology"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/75" />
        <div className="relative z-10 px-6 py-32 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-4xl font-bold text-background md:text-5xl lg:text-6xl"
          >
            About Us
          </motion.h1>
          <motion.nav
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            aria-label="Breadcrumb"
            className="mt-4"
          >
            <ol className="flex items-center justify-center gap-2 text-sm text-background/70">
              <li>
                <Link href="/" className="transition-colors hover:text-background">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-background">About Us</li>
            </ol>
          </motion.nav>
        </div>
      </section>

      {/* Main Statement */}
      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-serif text-2xl font-bold leading-snug text-foreground md:text-3xl lg:text-4xl">
              <span className="text-balance">
                At Fraga Technology, we build powerful digital solutions for
                modern businesses — with innovation, reliability, and a
                commitment to delivering high-performance technology platforms.
              </span>
            </p>
            <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We help startups, enterprises, and global brands transform their
              ideas into scalable websites, mobile applications, and digital
              systems that drive real business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience + Who We Are */}
      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start gap-16 lg:flex-row lg:gap-24">
            {/* Left: Experience Number */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="flex shrink-0 flex-col"
            >
              <div className="flex items-end gap-4">
                <span className="font-serif text-[160px] font-bold leading-none text-foreground md:text-[200px]">
                  10
                </span>
                <span className="mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text font-serif text-6xl font-bold text-transparent md:mb-8 md:text-7xl">
                  +
                </span>
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Years of Digital Innovation
              </p>

              {/* Trust avatars */}
              <div className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    "bg-primary",
                    "bg-accent",
                    "bg-chart-1",
                    "bg-success",
                  ].map((bg, i) => (
                    <div
                      key={i}
                      className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-background ${bg}`}
                    >
                      <span className="text-xs font-bold text-background">
                        {["F", "T", "C", "G"][i]}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="max-w-[200px] text-xs leading-relaxed text-muted-foreground">
                  Trusted by startups, businesses, and growing brands worldwide.
                </p>
              </div>
            </motion.div>

            {/* Right: Who We Are */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex-1"
            >
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                About Fraga Technology
              </h2>
              <h3 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
                <span className="text-balance">Who We Are</span>
              </h3>
              <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  Fraga Technology is a global technology company specializing in
                  website development, mobile application development, and
                  digital marketing solutions.
                </p>
                <p>
                  Our mission is to help businesses build scalable digital
                  platforms that attract customers, automate processes, and
                  accelerate growth.
                </p>
                <p>
                  We work with startups, enterprises, and global brands across
                  India, the United States, Canada, the United Kingdom,
                  Australia, and the UAE.
                </p>
                <p>
                  Our team focuses on building fast, secure, and modern systems
                  that combine technology, design, and strategy to deliver
                  exceptional user experiences.
                </p>
              </div>
              <Link
                href="/#contact"
                className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-primary transition-all duration-300 hover:gap-4"
              >
                {"Let's build something extraordinary."}
                <ArrowRight className="h-5 w-5" />
              </Link>

              <div className="mt-10 overflow-hidden rounded-2xl">
                <SafeImage
                  src="/images/about-team.jpg"
                  alt="Fraga Technology team collaborating on web development projects"
                  width={800}
                  height={500}
                  fallbackText="Our Team"
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-secondary/50 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              <span className="text-balance">
                Modern Solutions for Modern Businesses
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
              >
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-2xl bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 transition-all duration-500 group-hover:from-primary group-hover:to-accent">
                    <service.icon className="h-7 w-7 text-primary transition-colors duration-500 group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-foreground px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="font-serif text-3xl font-bold leading-tight text-background md:text-4xl lg:text-5xl">
              <span className="text-balance">
                Why Businesses Choose Fraga Technology
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="group rounded-2xl border border-background/10 p-8 transition-all duration-500 hover:border-primary/30 hover:bg-background/5"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-background">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-background/60">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              <span className="text-balance">
                {"Let's Build Something Powerful Together"}
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Whether you need a high-performance website, mobile application, or
              digital marketing strategy, Fraga Technology helps businesses turn
              ideas into scalable digital platforms.
            </p>
            <Link
              href="/#contact"
              className="mt-10 inline-flex rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-105"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
