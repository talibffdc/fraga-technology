import Header from "@/components/header"
import Footer from "@/components/footer"
import PricingPage from "@/components/pricing-page"
import { siteConfig } from "@/lib/site-config"
import { breadcrumbSchema, faqSchema } from "@/lib/schemas"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Website Development Cost in India 2026 | Fraga Technology",
  description:
    "Transparent website development pricing in India. Basic websites start from ₹40,000. E-commerce from ₹80,000. Enterprise solutions from ₹150,000+. Free custom quote today.",
  keywords: [
    "website development cost India",
    "web development pricing",
    "website cost",
    "how much does a website cost",
    "affordable website development",
    "website price comparison",
    "custom website cost",
  ],
  openGraph: {
    title: "Website Development Cost in India | Fraga Technology",
    description: "Transparent pricing for website development. Get your free custom quote today.",
    url: `${siteConfig.url}/pricing/website-development-cost`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/pricing/website-development-cost`,
  },
}

export default function WebsiteDevelopmentCostPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Pricing", url: `${siteConfig.url}/pricing/website-development-cost` },
  ]

  const packages = [
    {
      name: "Basic Business Website",
      price: 40000,
      description: "Perfect for startups and small businesses",
      features: [
        "5-8 web pages",
        "Responsive design",
        "SEO optimization",
        "SSL certificate",
        "Contact form",
        "30 days free support",
        "Monthly hosting (3 months free)",
      ],
      cta: "Get Started",
    },
    {
      name: "Professional Website",
      price: 80000,
      description: "For growing businesses with more complexity",
      features: [
        "10-15 web pages",
        "Advanced responsive design",
        "Blog system",
        "SEO optimization",
        "Analytics integration",
        "Email marketing setup",
        "60 days free support",
        "CMS for easy updates",
        "Performance optimization",
      ],
      cta: "Get Quote",
      highlighted: true,
    },
    {
      name: "Custom Enterprise Website",
      price: "150,000+",
      description: "For enterprises with specific requirements",
      features: [
        "20+ custom pages",
        "Custom functionality",
        "CRM integration",
        "Advanced security",
        "Payment gateway integration",
        "API development",
        "90 days free support",
        "Custom admin panel",
        "Priority support",
      ],
      cta: "Contact Us",
    },
  ]

  const costFactors = [
    {
      title: "Number of Pages",
      description: "More pages = higher cost. Basic site: 5-8 pages. Professional: 10-15 pages.",
    },
    {
      title: "Design Complexity",
      description: "Custom designs cost more than templates. Animation and interactive elements add cost.",
    },
    {
      title: "Functionality",
      description: "E-commerce, CRM, APIs, integrations, and custom features increase development time.",
    },
    {
      title: "CMS & Admin Panel",
      description: "Content management systems and admin panels for managing content add to cost.",
    },
    {
      title: "SEO & Marketing",
      description: "SEO optimization, meta tags, structured data, and marketing setup add value.",
    },
    {
      title: "Ongoing Maintenance",
      description: "Hosting, domain, updates, and support require ongoing investment.",
    },
  ]

  const faqData = [
    {
      question: "How much does a basic website cost?",
      answer:
        "A basic business website with 5-8 pages starts from ₹40,000 (approximately $500 USD). This includes responsive design, SEO optimization, SSL certificate, and contact forms.",
    },
    {
      question: "What's included in the website cost?",
      answer:
        "Our pricing typically includes design, development, SEO optimization, SSL certificate, content migration, testing, deployment, and 30 days of free support. Hosting and domain are additional.",
    },
    {
      question: "Why do website costs vary so much?",
      answer:
        "Website costs depend on complexity, number of pages, custom functionality, integrations, design intricacy, and ongoing support. A simple brochure site costs less than a complex e-commerce platform with custom features.",
    },
    {
      question: "Can I get a website for less than ₹40,000?",
      answer:
        "Our minimum for professional, custom websites is ₹40,000. This ensures quality design and development. Budget alternatives like Wix or WordPress.com are cheaper but less flexible and professional.",
    },
    {
      question: "What about ongoing hosting and maintenance costs?",
      answer:
        "Hosting costs ₹2,000-5,000/year depending on your website traffic and requirements. Maintenance packages start from ₹5,000/month for updates, security, and support.",
    },
    {
      question: "Is there a payment plan available?",
      answer:
        "Yes! We offer flexible payment plans: 30% advance, 40% on milestone completion, 30% on final delivery. For larger projects, we can discuss custom payment schedules.",
    },
    {
      question: "How long does website development take?",
      answer:
        "A basic website takes 2-4 weeks, professional websites take 4-8 weeks, and custom enterprise solutions take 8-16 weeks depending on complexity and revisions.",
    },
    {
      question: "Will my website be SEO-optimized?",
      answer:
        "Yes! All our websites include SEO optimization: keyword research, meta tags, schema markup, structured data, responsive design, and fast loading times. We can also add dedicated SEO services for additional investment.",
    },
  ]

  const faqSchemaData = faqSchema(faqData)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />
      {faqSchemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchemaData),
          }}
        />
      )}
      <Header />
      <main className="min-h-screen pt-[72px]">
        <PricingPage
          title="Website Development Cost in India"
          description="Transparent, affordable pricing for professional websites. Starting from ₹40,000 for basic business websites to custom enterprise solutions. Get your free quote today."
          pageSubtitle="What Affects Website Pricing?"
          packages={packages}
          costFactors={costFactors}
          faqData={faqData}
        />
      </main>
      <Footer />
    </>
  )
}
