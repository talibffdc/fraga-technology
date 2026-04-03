import Header from "@/components/header"
import Footer from "@/components/footer"
import PricingPage from "@/components/pricing-page"
import { siteConfig } from "@/lib/site-config"
import { breadcrumbSchema, faqSchema } from "@/lib/schemas"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "E-Commerce Website Cost in India | Shopify & Custom Stores | Fraga Technology",
  description:
    "Transparent e-commerce website pricing. Shopify stores from ₹80,000. WooCommerce from ₹100,000. Custom platforms from ₹150,000+. Start selling online today.",
  keywords: [
    "ecommerce website cost",
    "online store cost",
    "Shopify store development cost",
    "WooCommerce development cost",
    "ecommerce platform pricing",
    "online shop cost India",
  ],
  openGraph: {
    title: "E-Commerce Website Cost | Fraga Technology",
    description: "Affordable e-commerce store development. Shopify, WooCommerce, and custom platforms.",
    url: `${siteConfig.url}/pricing/ecommerce-website-cost`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/pricing/ecommerce-website-cost`,
  },
}

export default function EcommerceCostPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Pricing", url: `${siteConfig.url}/pricing/ecommerce-website-cost` },
  ]

  const packages = [
    {
      name: "Shopify Basic Store",
      price: 80000,
      description: "Perfect for new e-commerce businesses",
      features: [
        "Shopify setup & customization",
        "Up to 100 products",
        "Professional theme design",
        "Payment gateway integration",
        "Mobile-optimized checkout",
        "Product reviews enabled",
        "Email notifications",
        "30 days free support",
      ],
      cta: "Launch Store",
    },
    {
      name: "Professional E-Commerce",
      price: 150000,
      description: "For growing online retailers",
      features: [
        "Custom Shopify/WooCommerce setup",
        "Up to 1000 products",
        "Advanced product filtering",
        "Shipping integrations",
        "Inventory management",
        "Email marketing setup",
        "Analytics & reporting",
        "60 days free support",
        "SEO optimization",
      ],
      cta: "Get Quote",
      highlighted: true,
    },
    {
      name: "Enterprise E-Commerce",
      price: "250,000+",
      description: "For large online retailers with complex needs",
      features: [
        "Custom platform development",
        "Unlimited products",
        "Advanced inventory system",
        "Wholesale portal",
        "CRM integration",
        "Multiple payment gateways",
        "Subscription products",
        "90 days free support",
        "Priority support & updates",
      ],
      cta: "Contact Us",
    },
  ]

  const costFactors = [
    {
      title: "Number of Products",
      description:
        "100 products are easier than 10,000. Bulk product uploads and management increase complexity.",
    },
    {
      title: "Platform Choice",
      description:
        "Shopify is quick to setup. WooCommerce is more flexible but requires hosting. Custom platforms offer full control.",
    },
    {
      title: "Payment Gateways",
      description:
        "Single payment gateway vs. multiple options. International payment support adds complexity.",
    },
    {
      title: "Shipping Integration",
      description:
        "Simple shipping vs. complex shipping rules, multiple carriers, and international shipping.",
    },
    {
      title: "Design & Branding",
      description:
        "Using default theme is cheaper. Custom design, custom illustrations, and branding add to cost.",
    },
    {
      title: "Marketing Features",
      description:
        "Email marketing, promotions, discount codes, loyalty programs, and customer segmentation features.",
    },
  ]

  const faqData = [
    {
      question: "How much does a Shopify store cost?",
      answer:
        "Setting up a professional Shopify store with custom design and integrations starts from ₹80,000. This covers design, product setup, payment integration, and initial optimization. Shopify's monthly subscription is additional (₹2,900-8,000+).",
    },
    {
      question: "Should I choose Shopify or WooCommerce?",
      answer:
        "Shopify is best if you want a quick, managed solution with no hosting hassles. WooCommerce is better if you want more control and have existing WordPress site. We recommend Shopify for most new e-commerce businesses.",
    },
    {
      question: "What payment methods do you integrate?",
      answer:
        "We integrate with Stripe, PayPal, Razorpay, Square, Amazon Pay, Google Pay, and Apple Pay. This ensures customers can pay however they prefer.",
    },
    {
      question: "How many products can I add?",
      answer:
        "Most e-commerce platforms can handle thousands of products. Cost depends on your product count and whether you need bulk upload tools and advanced inventory management.",
    },
    {
      question: "What about shipping and logistics?",
      answer:
        "We integrate with major shipping providers (ShipRocket, Delhivery, Fedex). Automated shipping rates and label generation are included in professional plans.",
    },
    {
      question: "Can you help with SEO for my online store?",
      answer:
        "Yes! All our e-commerce stores include SEO optimization: product keyword optimization, meta tags, schema markup, and sitemap. We also offer dedicated SEO services for additional investment.",
    },
    {
      question: "What's included in ongoing support?",
      answer:
        "Support includes product updates, customer support troubleshooting, payment issues, shipping problems, and technical maintenance. Maintenance packages start from ₹10,000/month.",
    },
    {
      question: "Can you migrate my existing store?",
      answer:
        "Yes! We can migrate from other platforms (WooCommerce, Magento, BigCommerce) while preserving products, customer data, and SEO rankings.",
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
          title="E-Commerce Website Cost in India"
          description="Transparent pricing for professional online stores. Shopify stores from ₹80,000. WooCommerce from ₹100,000. Custom enterprise platforms from ₹250,000+."
          pageSubtitle="What Affects E-Commerce Pricing?"
          packages={packages}
          costFactors={costFactors}
          faqData={faqData}
        />
      </main>
      <Footer />
    </>
  )
}
