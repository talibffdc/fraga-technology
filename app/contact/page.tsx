import Header from "@/components/header"
import Footer from "@/components/footer"
import Contact from "@/components/contact"
import { siteConfig } from "@/lib/site-config"
import { faqSchema, breadcrumbSchema } from "@/lib/schemas"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Fraga Technology | Get Your Free Web Development Consultation",
  description:
    "Get in touch with Fraga Technology for web development, SEO services, and digital marketing. Free consultation, quick response. Call +91 9235000195 or WhatsApp us now.",
  keywords: [
    "contact fraga technology",
    "web development consultation",
    "contact web developer India",
    "get website quote",
    "web development inquiry",
  ],
  openGraph: {
    title: "Contact Fraga Technology | Get Your Free Consultation",
    description:
      "Ready to start your project? Contact us today for a free consultation on web development, SEO, and digital marketing.",
    url: `${siteConfig.url}/contact`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
}

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Contact", url: `${siteConfig.url}/contact` },
  ]

  const faqData = [
    {
      question: "What is your response time?",
      answer:
        "We typically respond to inquiries within 2-4 business hours during working days. For urgent requests, you can call us directly at +91 9235000195 or message on WhatsApp.",
    },
    {
      question: "Do you offer free consultations?",
      answer:
        "Yes! We offer a free initial consultation to understand your project requirements, goals, and budget. This helps us provide an accurate quote and implementation timeline.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "We offer flexible payment options: 30% advance to start the project, 40% upon milestone completion, and 30% on final delivery. We also accept installment plans for larger projects.",
    },
    {
      question: "Can you provide references from previous clients?",
      answer:
        "Absolutely! We have 150+ successful projects across various industries. Visit our portfolio page to see case studies and testimonials from satisfied clients.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer:
        "Yes, we provide free support for 30 days after launch. After that, we offer affordable maintenance packages starting from Rs 5,000/month for regular updates and support.",
    },
  ]

  const faqSchemaData = faqSchema(faqData)

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Fraga Technology",
    description: "Get in touch with Fraga Technology for web development and digital services",
    url: `${siteConfig.url}/contact`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+91-9235000195",
      email: "hello@fraga.technology",
      areaServed: ["IN", "US", "UK", "CA", "AU", "AE"],
      availableLanguage: ["en", "hi"],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />
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
        <Contact />
      </main>
      <Footer />
    </>
  )
}
