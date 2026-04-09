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
  "website-development-delhi": {
    slug: "website-development-delhi",
    serviceSlug: "website-development",
    citySlug: "delhi",
    serviceName: "Website Development",
    cityName: "Delhi",
    title: "Website Development Company in Delhi",
    metaTitle: "Website Development Company in Delhi | Web Design Services | Fraga Technology",
    metaDescription: "Looking for a trusted website development company in Delhi? Fraga Technology builds fast, SEO-optimized websites for businesses in Delhi NCR, Noida, Gurgaon & across the National Capital Region. Get a free quote today!",
    keywords: [
      "website development company Delhi",
      "web development company Delhi",
      "website design company Delhi",
      "ecommerce website development Delhi",
      "custom website development Delhi",
      "website developer Delhi",
      "web design Delhi",
      "website development services Delhi",
      "best website company in Delhi",
      "affordable website development Delhi",
      "WordPress development Delhi",
      "React website development Delhi",
      "website development Delhi NCR",
      "web development company Noida",
      "website design Gurgaon",
    ],
    heroTitle: "Professional Website Development Company in Delhi",
    heroDescription: "We build high-performance, SEO-optimized websites that help Delhi businesses attract more customers, generate leads, and grow revenue. From Connaught Place to Dwarka, we serve businesses across the National Capital Region.",
    introduction: `Delhi, India's national capital and a thriving commercial hub, is home to millions of businesses competing in one of the world's most dynamic markets. In this competitive landscape, having a professional website isn't just beneficial—it's essential for establishing credibility and capturing the attention of Delhi's digitally-savvy consumers.

Fraga Technology is a leading website development company in Delhi, trusted by startups, SMEs, and enterprises across Delhi NCR, Noida, Gurgaon, Rohini, Dwarka, and the entire National Capital Region. We specialize in creating fast, mobile-responsive, SEO-optimized websites that convert visitors into paying customers and help your business stand out in Delhi's crowded marketplace.

Whether you're a tech startup in Gurgaon Cyber Hub, an e-commerce brand in Noida, a professional services firm in Connaught Place, or a manufacturing company in Okhla, our Delhi website development team delivers custom solutions tailored to your specific industry, target audience, and business objectives.`,
    whyBusinessesNeed: {
      title: "Why Delhi Businesses Need a Professional Website",
      points: [
        "Delhi NCR has over 30 million residents and is India's largest internet user base—your customers are searching online daily",
        "The Delhi market is fiercely competitive—businesses without websites are invisible to millions of potential customers",
        "A professional website establishes instant credibility with Delhi's discerning and tech-savvy consumers",
        "Delhi's traffic congestion makes online presence crucial—customers prefer researching and connecting online before visiting",
        "Google searches like 'best [service] in Delhi' drive thousands of high-intent customers to websites every day",
        "E-commerce in Delhi NCR grew by over 35% last year—businesses without websites miss this massive revenue opportunity",
        "A website works 24/7, generating leads and inquiries while your competitors sleep",
        "Professional websites help you expand beyond Delhi to serve customers across North India and pan-India markets",
        "Government and corporate clients increasingly require vendors to have professional online presence",
        "Delhi's startup ecosystem demands digital presence for funding, partnerships, and customer acquisition",
      ],
    },
    services: [
      {
        title: "Custom Business Websites",
        description: "Unique, brand-aligned websites designed specifically for Delhi businesses. We create professional designs that reflect your brand identity while focusing on user experience and conversion optimization for the competitive Delhi NCR market.",
      },
      {
        title: "E-commerce Website Development",
        description: "Full-featured online stores with secure payment integration (Razorpay, PayU, Paytm, UPI), inventory management, and conversion-optimized checkout. Perfect for Delhi retailers looking to expand their reach across North India and beyond.",
      },
      {
        title: "Corporate & Enterprise Websites",
        description: "Sophisticated websites for Delhi's corporate sector—consulting firms, IT companies, government contractors, and large enterprises in Connaught Place, Nehru Place, and Gurgaon's corporate hubs.",
      },
      {
        title: "Startup Landing Pages",
        description: "High-converting landing pages for Delhi NCR's thriving startup ecosystem. Optimized for lead generation, investor pitches, and product launches in Gurgaon Cyber Hub, Noida Sector 62, and other startup hubs.",
      },
      {
        title: "Real Estate Websites",
        description: "Property listing websites with advanced search, virtual tours, and lead capture forms for Delhi NCR's booming real estate market. We serve developers, brokers, and agents across Delhi, Noida, Gurgaon, and Greater Noida.",
      },
      {
        title: "Educational Institution Websites",
        description: "Professional websites for Delhi's schools, colleges, coaching institutes, and ed-tech companies with student portals, online admissions, and course management features.",
      },
    ],
    websiteTypes: [
      {
        title: "Business & Corporate Websites",
        description: "Professional websites for established businesses that need to showcase their services, build credibility, and generate B2B or B2C leads in the competitive Delhi NCR market.",
      },
      {
        title: "E-commerce & Online Stores",
        description: "Full-featured online shopping platforms with product catalogs, secure checkout, inventory management, and integration with popular Indian payment gateways and logistics providers.",
      },
      {
        title: "Custom Web Applications",
        description: "Tailored web applications including customer portals, booking systems, CRM dashboards, ERP integrations, and industry-specific solutions for Delhi enterprises.",
      },
      {
        title: "Portfolio & Personal Websites",
        description: "Showcase websites for professionals, freelancers, artists, consultants, and entrepreneurs in Delhi looking to establish their personal brand and attract high-value clients.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Strategy",
        description: "We analyze your Delhi business goals, target audience, local competition, and industry requirements to create a strategic website roadmap tailored to the NCR market.",
      },
      {
        step: 2,
        title: "Design & Prototyping",
        description: "Our designers create custom UI/UX mockups aligned with your brand, incorporating feedback until you're 100% satisfied with the design direction.",
      },
      {
        step: 3,
        title: "Development",
        description: "Our developers build your website using modern technologies (React, Next.js, WordPress) with clean, maintainable code optimized for performance and scalability.",
      },
      {
        step: 4,
        title: "Testing & QA",
        description: "Rigorous testing across devices, browsers, and performance metrics ensures your website works flawlessly for all users across Delhi NCR and beyond.",
      },
      {
        step: 5,
        title: "Launch & Training",
        description: "We deploy your website, provide comprehensive training on content management, and ensure everything runs smoothly post-launch.",
      },
      {
        step: 6,
        title: "Ongoing Support",
        description: "Continuous maintenance, security updates, and technical support to keep your Delhi business website running at peak performance year-round.",
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
          "Google Maps integration",
          "1 month free support",
        ],
      },
      {
        type: "Professional Website",
        price: "₹50,000 - ₹1,50,000",
        features: [
          "10-25 pages",
          "Custom design",
          "CMS integration (WordPress/Custom)",
          "Advanced SEO optimization",
          "Lead capture forms",
          "Analytics & conversion tracking",
          "3 months free support",
        ],
      },
      {
        type: "E-commerce Website",
        price: "₹1,00,000 - ₹5,00,000",
        features: [
          "Unlimited products",
          "Multiple payment gateway integration",
          "Inventory management",
          "Order tracking & notifications",
          "Customer accounts & wishlists",
          "Shipping integration",
          "6 months free support",
        ],
      },
      {
        type: "Custom Web Application",
        price: "₹3,00,000+",
        features: [
          "Custom functionality & features",
          "Database architecture & integration",
          "User authentication & roles",
          "API development & integrations",
          "Third-party service connections",
          "Scalable infrastructure",
          "Ongoing maintenance plans",
        ],
      },
    ],
    whyChooseUs: [
      "150+ successful projects delivered for businesses across India, USA, UK, and UAE",
      "Expert team with 5+ years of experience in modern web technologies (React, Next.js, Node.js)",
      "Deep understanding of the Delhi NCR market and local business requirements",
      "Transparent pricing with no hidden costs—you know exactly what you're paying for",
      "SEO-optimized websites that rank higher on Google and drive organic traffic",
      "Fast turnaround times—most projects delivered within 2-6 weeks",
      "Dedicated project manager for seamless communication throughout development",
      "Post-launch support and maintenance to ensure your website stays updated and secure",
      "Local presence with understanding of Delhi's business culture and customer expectations",
    ],
    caseStudy: {
      title: "Delhi IT Services Company Increases Leads by 420%",
      industry: "IT Services & Consulting",
      challenge: "A growing IT services company based in Nehru Place was struggling with an outdated website that didn't reflect their technical expertise. Their site was slow, not mobile-friendly, and ranking poorly for competitive Delhi IT services keywords.",
      solution: "We built a modern, fast-loading corporate website with a clean professional design, detailed service pages optimized for local SEO, case study showcases, and integrated lead capture forms. The site included schema markup for local business and services, plus optimization for 'IT services in Delhi' related keywords.",
      results: [
        "420% increase in qualified leads within 4 months of launch",
        "Page 1 Google rankings for 30+ target keywords including 'IT consulting Delhi' and 'software development company Noida'",
        "70% reduction in bounce rate due to improved design and mobile experience",
        "Average session duration increased from 30 seconds to 3.5 minutes",
        "Website loading time reduced from 8 seconds to under 2 seconds",
        "40% increase in direct client inquiries through the website contact form",
      ],
    },
    localAreas: [
      "Delhi NCR",
      "Noida",
      "Gurgaon (Gurugram)",
      "Greater Noida",
      "Faridabad",
      "Ghaziabad",
      "Connaught Place",
      "Nehru Place",
      "Rohini",
      "Dwarka",
      "Saket",
      "Lajpat Nagar",
      "Karol Bagh",
      "Pitampura",
      "Janakpuri",
      "Okhla",
      "Vasant Kunj",
      "South Delhi",
    ],
    faqs: [
      {
        question: "How much does website development cost in Delhi?",
        answer: "Website development costs in Delhi vary based on complexity, features, and customization level. A basic business website starts from ₹25,000-₹50,000, professional websites with CMS range from ₹50,000-₹1,50,000, e-commerce websites cost ₹1,00,000-₹5,00,000, and custom web applications start from ₹3,00,000+. We provide detailed, transparent quotes after understanding your specific requirements. Contact us for a free consultation and accurate pricing for your Delhi business.",
      },
      {
        question: "How long does it take to build a website in Delhi?",
        answer: "The timeline depends on project scope and complexity. A basic business website typically takes 2-3 weeks, a professional website with custom design takes 3-5 weeks, an e-commerce site takes 6-10 weeks, and custom web applications can take 10-16+ weeks. We provide detailed project timelines during our initial consultation and keep you updated with regular progress reports throughout the development process.",
      },
      {
        question: "Which is the best website development company in Delhi?",
        answer: "The best website development company depends on your specific needs, budget, and industry. Look for a company with proven experience, a strong portfolio of successful projects, transparent pricing, and excellent client reviews. Fraga Technology has delivered 150+ projects with expertise in modern technologies like React, Next.js, and Node.js. We focus on building websites that drive measurable business results—not just aesthetically pleasing designs. Check our case studies and client testimonials to evaluate our track record.",
      },
      {
        question: "Do you provide website maintenance services in Delhi NCR?",
        answer: "Yes, we offer comprehensive website maintenance packages for Delhi NCR businesses starting from ₹5,000/month. This includes regular security updates, content updates, performance monitoring, daily/weekly backups, uptime monitoring, and dedicated technical support. We also offer one-time support services and emergency fixes as needed.",
      },
      {
        question: "Can you redesign my existing website?",
        answer: "Absolutely. We specialize in website redesigns that dramatically improve performance, user experience, and search engine rankings. We conduct a thorough audit of your current site, identify improvement areas, and create a modern design that aligns with your business goals while carefully preserving your existing SEO equity and rankings. Many of our Delhi clients have seen 200-400% improvement in leads and conversions after a professional redesign.",
      },
      {
        question: "Do you build mobile-friendly websites for Delhi businesses?",
        answer: "Yes, all websites we build are 100% mobile-responsive and optimized for all devices. With over 75% of Delhi NCR's internet users accessing websites via smartphones, we ensure your site provides an excellent user experience on mobile phones, tablets, and desktop computers. Mobile optimization, fast loading on 4G/5G networks, and touch-friendly interfaces are included in every project.",
      },
      {
        question: "Will my website rank on Google for Delhi-based searches?",
        answer: "We build all websites with comprehensive SEO best practices—proper heading structure, fast loading times, mobile responsiveness, local schema markup, and technical SEO optimization. We specifically optimize for local Delhi searches to help you rank for location-based keywords. While rankings depend on factors including competition and ongoing SEO efforts, our websites are built to rank. We also offer dedicated local SEO services for Delhi businesses wanting to accelerate their Google rankings and Google Maps visibility.",
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
