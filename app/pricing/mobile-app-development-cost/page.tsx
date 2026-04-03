import Header from "@/components/header"
import Footer from "@/components/footer"
import PricingPage from "@/components/pricing-page"
import { siteConfig } from "@/lib/site-config"
import { breadcrumbSchema, faqSchema } from "@/lib/schemas"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mobile App Development Cost in India | iOS & Android Pricing | Fraga Technology",
  description:
    "Transparent mobile app development pricing. MVP apps from ₹5,00,000. Mid-range apps from ₹10,00,000. Enterprise apps from ₹20,00,000+. Get your free quote.",
  keywords: [
    "mobile app development cost",
    "app development pricing India",
    "iOS app cost",
    "Android app cost",
    "app development cost",
    "MVP app cost",
    "custom app pricing",
  ],
  openGraph: {
    title: "Mobile App Development Cost | Fraga Technology",
    description:
      "Affordable mobile app development for iOS and Android. MVP apps, mid-range apps, and enterprise solutions.",
    url: `${siteConfig.url}/pricing/mobile-app-development-cost`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/pricing/mobile-app-development-cost`,
  },
}

export default function MobileAppCostPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Pricing", url: `${siteConfig.url}/pricing/mobile-app-development-cost` },
  ]

  const packages = [
    {
      name: "MVP Application",
      price: 500000,
      description: "Validate your idea with a minimum viable product",
      features: [
        "iOS and Android",
        "3-5 core features",
        "Simple design",
        "Backend API",
        "User authentication",
        "2 months development",
        "30 days free support",
        "App Store submissions",
      ],
      cta: "Start MVP",
    },
    {
      name: "Mid-Range App",
      price: 1000000,
      description: "Professional app with advanced features",
      features: [
        "iOS and Android",
        "8-12 features",
        "Professional UI/UX",
        "Complex backend",
        "Payment integration",
        "Analytics tracking",
        "Push notifications",
        "4 months development",
        "60 days free support",
      ],
      cta: "Get Quote",
      highlighted: true,
    },
    {
      name: "Enterprise App",
      price: "2000000+",
      description: "Full-featured app with custom requirements",
      features: [
        "iOS and Android",
        "15+ custom features",
        "Award-winning design",
        "Complex integrations",
        "Machine learning/AI",
        "Real-time sync",
        "Offline functionality",
        "6+ months development",
        "90 days free support",
        "Priority updates",
      ],
      cta: "Contact Us",
    },
  ]

  const costFactors = [
    {
      title: "Platform Choice",
      description:
        "Native iOS only = lower cost. Native Android only = lower cost. Both platforms = higher but covers more users.",
    },
    {
      title: "Feature Complexity",
      description:
        "Simple CRUD apps are cheaper. Geolocation, real-time sync, offline mode, and advanced features increase cost.",
    },
    {
      title: "Design Quality",
      description:
        "Templates are cheap. Custom design with animations and microinteractions requires more resources.",
    },
    {
      title: "Backend Requirements",
      description:
        "Simple backend is cheap. Complex backends with databases, APIs, real-time systems, and integrations add cost.",
    },
    {
      title: "Third-Party Integrations",
      description:
        "Maps, payment gateways, social logins, and other integrations require development time.",
    },
    {
      title: "Post-Launch Support",
      description:
        "App Store updates, bug fixes, feature additions, and ongoing maintenance require ongoing investment.",
    },
  ]

  const faqData = [
    {
      question: "What's the cheapest mobile app I can get?",
      answer:
        "An MVP (minimum viable product) app with basic features starts from ₹5,00,000. This is a simple, functional app to test your idea. It takes 2 months to develop for both iOS and Android using cross-platform tools.",
    },
    {
      question: "Should I go native or cross-platform?",
      answer:
        "Cross-platform (React Native, Flutter) is 30-40% cheaper and allows one codebase for iOS and Android. Native apps are better if you need platform-specific features. We recommend cross-platform for most startups.",
    },
    {
      question: "Can I use existing templates to reduce cost?",
      answer:
        "Yes! Using templates and pre-built components can reduce costs by 30-50%. However, your app might look generic. We recommend custom design for better user experience and differentiation.",
    },
    {
      question: "What's included in the development cost?",
      answer:
        "Design (UI/UX), development, API creation, testing, bug fixing, App Store submissions, and 30 days free support. Hosting, domain, and ongoing maintenance are additional.",
    },
    {
      question: "How long does app development take?",
      answer:
        "MVP apps take 2 months, mid-range apps take 4 months, and complex enterprise apps take 6+ months. Timeline depends on complexity, features, and your revision requests.",
    },
    {
      question: "What happens after launch?",
      answer:
        "We provide 30 days of free support for bugs and issues. After that, maintenance packages start from ₹15,000/month for updates, OS compatibility, and feature additions.",
    },
    {
      question: "Can you help with App Store submission?",
      answer:
        "Yes! We handle iOS App Store and Google Play Store submissions, screenshots, descriptions, and app optimization. This is included in our development cost.",
    },
    {
      question: "What if I need additional features later?",
      answer:
        "We can add features after launch. Feature addition costs depend on complexity. A simple feature might cost ₹20,000-50,000, while complex features cost ₹100,000+.",
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
          title="Mobile App Development Cost in India"
          description="Transparent pricing for professional iOS and Android apps. MVP apps from ₹5,00,000. Full-featured apps from ₹10,00,000. Enterprise solutions from ₹20,00,000+."
          pageSubtitle="What Affects App Development Pricing?"
          packages={packages}
          costFactors={costFactors}
          faqData={faqData}
        />
      </main>
      <Footer />
    </>
  )
}
