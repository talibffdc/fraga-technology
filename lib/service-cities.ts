import { siteConfig } from "@/lib/site-config"

export interface ServiceCityFeature {
  title: string
  description: string
}

export interface ServiceCityPricing {
  type: string
  price: string
  features: string[]
}

export interface ServiceCityData {
  slug: string
  serviceSlug: string
  citySlug: string
  serviceName: string
  cityName: string
  title: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  heroTitle: string
  heroDescription: string
  introduction: string
  whyBusinessesNeed: {
    title: string
    points: string[]
  }
  services: ServiceCityFeature[]
  websiteTypes: ServiceCityFeature[]
  process: {
    step: number
    title: string
    description: string
  }[]
  pricing: ServiceCityPricing[]
  whyChooseUs: string[]
  caseStudy?: {
    title: string
    industry: string
    challenge: string
    solution: string
    results: string[]
  }
  localAreas: string[]
  faqs: { question: string; answer: string }[]
  ctaText: string
}

export const serviceCities: Record<string, ServiceCityData> = {
  "website-development-mumbai": {
    slug: "website-development-mumbai",
    serviceSlug: "website-development",
    citySlug: "mumbai",
    serviceName: "Website Development",
    cityName: "Mumbai",
    title: "Website Development Company in Mumbai",
    metaTitle: "Website Development Company in Mumbai | Web Design Services | Fraga Technology",
    metaDescription: "Looking for a trusted website development company in Mumbai? Fraga Technology builds fast, SEO-optimized websites for businesses in Andheri, Bandra, Navi Mumbai & across Mumbai. Get a free quote today!",
    keywords: [
      "website development company Mumbai",
      "web development company Mumbai",
      "website design company Mumbai",
      "ecommerce website development Mumbai",
      "custom website development Mumbai",
      "website developer Mumbai",
      "web design Mumbai",
      "website development services Mumbai",
      "best website company in Mumbai",
      "affordable website development Mumbai",
      "WordPress development Mumbai",
      "React website development Mumbai",
    ],
    heroTitle: "Professional Website Development Company in Mumbai",
    heroDescription: "We build high-performance, SEO-optimized websites that help Mumbai businesses attract more customers, generate leads, and grow revenue. From Andheri to Navi Mumbai, we serve businesses across the financial capital.",
    introduction: `Mumbai, India's financial capital and commercial powerhouse, is home to thousands of businesses competing for customer attention. In this dynamic market, having a professional website isn't just an option—it's a necessity for survival and growth.

Fraga Technology is a leading website development company in Mumbai, trusted by startups, SMEs, and enterprises across Andheri, Bandra, Navi Mumbai, Lower Parel, and the entire Mumbai Metropolitan Region. We specialize in creating fast, mobile-responsive, SEO-optimized websites that convert visitors into paying customers.

Whether you're a real estate firm in Worli, an e-commerce brand in Powai, or a professional services company in BKC, our Mumbai website development team delivers custom solutions tailored to your specific industry and business goals.`,
    whyBusinessesNeed: {
      title: "Why Mumbai Businesses Need a Professional Website",
      points: [
        "Mumbai has over 22 million residents and millions of daily internet users searching for local products and services",
        "Your competitors are already online—without a website, you're losing customers to digitally-savvy businesses",
        "A professional website establishes credibility and trust with Mumbai's discerning consumers",
        "Online presence is essential for reaching customers in Mumbai's traffic-heavy environment where convenience matters",
        "Google searches like 'best [service] in Mumbai' drive thousands of high-intent customers to websites daily",
        "E-commerce sales in Mumbai grew by over 30% last year—businesses without websites miss this massive opportunity",
        "A website works 24/7, generating leads and inquiries even when your physical office is closed",
        "Professional websites help you expand beyond Mumbai to serve customers across Maharashtra and India",
      ],
    },
    services: [
      {
        title: "Custom Business Websites",
        description: "Unique, brand-aligned websites designed specifically for Mumbai businesses. We create professional designs that reflect your brand identity while focusing on user experience and conversion optimization for the local market.",
      },
      {
        title: "E-commerce Website Development",
        description: "Full-featured online stores with secure payment integration (Razorpay, PayU, Paytm), inventory management, and conversion-optimized checkout. Perfect for Mumbai retailers looking to expand their reach across India.",
      },
      {
        title: "Corporate & Enterprise Websites",
        description: "Sophisticated websites for Mumbai's corporate sector—banks, consulting firms, BFSI companies, and large enterprises in BKC, Lower Parel, and Nariman Point.",
      },
      {
        title: "Startup Landing Pages",
        description: "High-converting landing pages for Mumbai's thriving startup ecosystem. Optimized for lead generation, investor pitches, and product launches in the competitive startup hub.",
      },
      {
        title: "Real Estate Websites",
        description: "Property listing websites with advanced search, virtual tours, and lead capture forms for Mumbai's booming real estate sector. We serve developers, brokers, and agents across MMRDA region.",
      },
      {
        title: "Restaurant & Hospitality Websites",
        description: "Visually stunning websites with online ordering, table reservations, and menu displays for Mumbai's vibrant food and hospitality industry.",
      },
    ],
    websiteTypes: [
      {
        title: "Business & Corporate Websites",
        description: "Professional websites for established businesses that need to showcase their services, build credibility, and generate B2B or B2C leads in the Mumbai market.",
      },
      {
        title: "E-commerce & Online Stores",
        description: "Full-featured online shopping platforms with product catalogs, secure checkout, inventory management, and integration with popular payment gateways used in India.",
      },
      {
        title: "Custom Web Applications",
        description: "Tailored web applications including customer portals, booking systems, CRM dashboards, and industry-specific solutions for Mumbai enterprises.",
      },
      {
        title: "Portfolio & Personal Websites",
        description: "Showcase websites for professionals, freelancers, artists, and consultants in Mumbai looking to establish their personal brand online.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Strategy",
        description: "We analyze your Mumbai business goals, target audience, local competition, and industry requirements to create a strategic website roadmap.",
      },
      {
        step: 2,
        title: "Design & Prototyping",
        description: "Our designers create custom UI/UX mockups aligned with your brand, incorporating feedback until you're 100% satisfied with the design direction.",
      },
      {
        step: 3,
        title: "Development",
        description: "Our developers build your website using modern technologies (React, Next.js, WordPress) with clean, maintainable code optimized for performance.",
      },
      {
        step: 4,
        title: "Testing & QA",
        description: "Rigorous testing across devices, browsers, and performance metrics ensures your website works flawlessly for all Mumbai users.",
      },
      {
        step: 5,
        title: "Launch & Training",
        description: "We deploy your website, provide comprehensive training on content management, and ensure everything runs smoothly post-launch.",
      },
      {
        step: 6,
        title: "Ongoing Support",
        description: "Continuous maintenance, security updates, and technical support to keep your Mumbai business website running at peak performance.",
      },
    ],
    pricing: [
      {
        type: "Basic Business Website",
        price: "₹25,000 - ₹50,000",
        features: [
          "5-10 pages",
          "Mobile responsive design",
          "Contact form integration",
          "Basic SEO setup",
          "Social media integration",
          "1 month free support",
        ],
      },
      {
        type: "Professional Website",
        price: "₹50,000 - ₹1,50,000",
        features: [
          "10-25 pages",
          "Custom design",
          "CMS integration",
          "Advanced SEO optimization",
          "Lead capture forms",
          "Analytics setup",
          "3 months free support",
        ],
      },
      {
        type: "E-commerce Website",
        price: "₹1,00,000 - ₹5,00,000",
        features: [
          "Unlimited products",
          "Payment gateway integration",
          "Inventory management",
          "Order tracking",
          "Customer accounts",
          "6 months free support",
        ],
      },
      {
        type: "Custom Web Application",
        price: "₹3,00,000+",
        features: [
          "Custom functionality",
          "Database integration",
          "User authentication",
          "API development",
          "Third-party integrations",
          "Ongoing maintenance plans",
        ],
      },
    ],
    whyChooseUs: [
      "150+ successful projects delivered for businesses across India, USA, UK, and UAE",
      "Expert team with 5+ years of experience in modern web technologies (React, Next.js, Node.js)",
      "Transparent pricing with no hidden costs—you know exactly what you're paying for",
      "SEO-optimized websites that rank higher on Google and drive organic traffic",
      "Fast turnaround times—most projects delivered within 2-6 weeks",
      "Dedicated project manager for seamless communication throughout development",
      "Post-launch support and maintenance to ensure your website stays updated and secure",
      "We understand the Mumbai market and build websites optimized for local business success",
    ],
    caseStudy: {
      title: "Mumbai Real Estate Firm Increases Leads by 340%",
      industry: "Real Estate",
      challenge: "A leading real estate developer in Mumbai was struggling with an outdated website that wasn't mobile-friendly and had poor search rankings. They were losing potential buyers to competitors with better online presence.",
      solution: "We built a modern, mobile-responsive property listing website with advanced search filters, virtual tour integration, and optimized landing pages for each property. The site included schema markup for real estate listings and local SEO optimization for Mumbai and surrounding areas.",
      results: [
        "340% increase in qualified leads within 6 months",
        "Page 1 Google rankings for 25+ target keywords including 'apartments in Andheri' and 'flats in Powai'",
        "65% reduction in bounce rate due to improved mobile experience",
        "Average time on site increased from 45 seconds to 4 minutes",
        "Direct property inquiries increased by 280%",
      ],
    },
    localAreas: [
      "Andheri",
      "Bandra",
      "Navi Mumbai",
      "Lower Parel",
      "BKC (Bandra Kurla Complex)",
      "Powai",
      "Worli",
      "Juhu",
      "Malad",
      "Goregaon",
      "Thane",
      "Borivali",
      "Kurla",
      "Chembur",
      "Vashi",
      "Panvel",
    ],
    faqs: [
      {
        question: "How much does website development cost in Mumbai?",
        answer: "Website development costs in Mumbai vary based on complexity and features. A basic business website starts from ₹25,000-₹50,000, professional websites with CMS range from ₹50,000-₹1,50,000, e-commerce websites cost ₹1,00,000-₹5,00,000, and custom web applications start from ₹3,00,000+. We provide detailed quotes after understanding your specific requirements. Contact us for a free consultation.",
      },
      {
        question: "How long does it take to build a website in Mumbai?",
        answer: "Timeline depends on project scope. A basic business website takes 2-3 weeks, a professional website with custom design takes 3-5 weeks, an e-commerce site takes 6-10 weeks, and custom web applications can take 10-16+ weeks. We provide detailed project timelines during our initial consultation and keep you updated throughout development.",
      },
      {
        question: "Which is the best website development company in Mumbai?",
        answer: "The best website development company depends on your specific needs. Look for a company with proven experience, a strong portfolio, transparent pricing, and good client reviews. Fraga Technology has delivered 150+ projects with expertise in modern technologies. We focus on building websites that drive business results—not just beautiful designs. Check our case studies and testimonials to see our track record.",
      },
      {
        question: "Do you provide website maintenance services in Mumbai?",
        answer: "Yes, we offer comprehensive website maintenance packages for Mumbai businesses starting from ₹5,000/month. This includes security updates, content updates, performance monitoring, regular backups, and technical support. We also offer one-time support services as needed.",
      },
      {
        question: "Can you redesign my existing website?",
        answer: "Absolutely. We specialize in website redesigns that improve performance, user experience, and SEO. We audit your current site, identify improvement areas, and create a modern design that aligns with your business goals while preserving your SEO equity. Many of our Mumbai clients have seen 200%+ improvement in leads after a redesign.",
      },
      {
        question: "Do you build mobile-friendly websites?",
        answer: "Yes, all websites we build are 100% mobile-responsive. With over 70% of Mumbai's internet users accessing websites via mobile devices, we ensure your site provides an excellent experience on smartphones, tablets, and desktops. Mobile optimization is included in every project.",
      },
      {
        question: "Will my website rank on Google?",
        answer: "We build all websites with SEO best practices—proper heading structure, fast loading times, mobile responsiveness, schema markup, and technical SEO. While rankings depend on many factors including competition and ongoing SEO efforts, our websites are built to rank. We also offer dedicated SEO services for businesses wanting to accelerate their Google rankings.",
      },
    ],
    ctaText: "Get Free Website Quote",
  },
}

export function getServiceCityBySlug(slug: string): ServiceCityData | undefined {
  return serviceCities[slug]
}

export function getAllServiceCitySlugs(): string[] {
  return Object.keys(serviceCities)
}

export function getServiceCityNavItems() {
  return Object.values(serviceCities).map((sc) => ({
    name: `${sc.serviceName} - ${sc.cityName}`,
    slug: sc.slug,
    href: `/services/${sc.slug}`,
  }))
}
