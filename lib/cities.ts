import { siteConfig } from "@/lib/site-config"

export interface CityData {
  slug: string
  name: string
  state: string
  tagline: string
  description: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  heroText: string
  whyChooseUs: string[]
  services: { title: string; description: string }[]
  faqs: { question: string; answer: string }[]
  ctaText: string
}

export const cities: Record<string, CityData> = {
  delhi: {
    slug: "delhi",
    name: "Delhi",
    state: "Delhi",
    tagline: "Web Development & Digital Marketing Company in Delhi | Professional IT Solutions",
    description:
      "Fraga Technology is a leading web development company in Delhi, serving startups, SMEs, and enterprises across India's capital region. We specialize in custom website development, mobile app development, SEO services, and digital marketing tailored for Delhi businesses. Our team understands Delhi's competitive market and delivers scalable solutions that drive growth.",
    metaTitle: "Web Development Company in Delhi | Website Development Services | Fraga Technology",
    metaDescription:
      "Top web development company in Delhi. Custom websites, mobile apps, SEO & digital marketing for Delhi businesses. Free consultation: +91 9235000195",
    keywords: [
      "web development company Delhi",
      "website development Delhi",
      "web developer in Delhi",
      "website designer Delhi",
      "SEO company Delhi",
      "digital marketing agency Delhi",
      "mobile app development Delhi",
      "ecommerce development Delhi",
    ],
    heroText:
      "As a premier web development company in Delhi, we empower businesses across India's capital with cutting-edge digital solutions. From startup landing pages to complex enterprise applications, we deliver websites and apps that convert visitors into customers. Our team combines technical expertise with deep understanding of Delhi's competitive market.",
    whyChooseUs: [
      "Local presence in Delhi with deep understanding of the local market and business landscape",
      "Proven track record with 50+ successful projects across Delhi-based businesses",
      "Quick response time and local support for Delhi clients",
      "Competitive pricing without compromising on quality",
      "Expert team fluent in English and Hindi for seamless communication",
      "Commitment to delivering world-class digital solutions for Delhi entrepreneurs",
    ],
    services: [
      {
        title: "Website Development",
        description:
          "Custom, SEO-optimized websites tailored for Delhi businesses. From corporate sites to ecommerce platforms, we build websites that rank on Google and drive conversions.",
      },
      {
        title: "Mobile App Development",
        description:
          "Native iOS and Android apps for Delhi startups and enterprises. User-centric design with robust functionality and scalable architecture.",
      },
      {
        title: "SEO Services",
        description:
          "Complete SEO solutions targeting Delhi and national keywords. On-page optimization, link building, and monthly performance tracking.",
      },
      {
        title: "Google Ads Management",
        description:
          "Strategic Google Ads campaigns optimized for Delhi audiences. Lead generation, ecommerce, and brand awareness campaigns with proven ROI.",
      },
      {
        title: "Social Media Marketing",
        description:
          "Instagram, Facebook, and LinkedIn marketing for Delhi brands. Content creation, community management, and influencer partnerships.",
      },
    ],
    faqs: [
      {
        question: "How much does web development cost in Delhi?",
        answer:
          "Web development costs in Delhi vary based on complexity. A basic business website starts from Rs 40,000, ecommerce sites from Rs 80,000, and custom applications from Rs 150,000+. We offer transparent pricing with no hidden costs. Contact us for a free detailed quote.",
      },
      {
        question: "Can you meet in person for project discussions?",
        answer:
          "Absolutely! We're based in Delhi and can meet at cafes, our office, or your location. We prefer in-person meetings for project kickoff and milestone reviews to ensure alignment.",
      },
      {
        question: "What's your typical project timeline?",
        answer:
          "A typical business website takes 2-4 weeks, ecommerce platforms take 4-8 weeks, and custom applications are timeline-dependent. We'll provide detailed project timelines during our initial consultation.",
      },
      {
        question: "Do you provide ongoing support after launch?",
        answer:
          "Yes, we offer comprehensive maintenance packages starting from Rs 5,000/month including updates, security, performance monitoring, and technical support.",
      },
    ],
    ctaText: "Get Free Delhi Consultation",
  },
  noida: {
    slug: "noida",
    name: "Noida",
    state: "Uttar Pradesh",
    tagline: "Web Development & IT Services Company in Noida | Digital Solutions",
    description:
      "Fraga Technology delivers expert web development and digital marketing services to businesses across Noida. We serve the thriving Noida tech ecosystem with custom websites, mobile apps, SEO, and digital marketing solutions. Our team understands Noida's startup culture and enterprise requirements.",
    metaTitle: "Web Development Company in Noida | Website Development Services | Fraga Technology",
    metaDescription:
      "Leading web development company in Noida. Custom websites, apps, and digital marketing. Serving Noida startups and enterprises. Free consultation.",
    keywords: [
      "web development company Noida",
      "website development Noida",
      "web developer Noida",
      "digital marketing Noida",
      "SEO services Noida",
      "mobile app development Noida",
    ],
    heroText:
      "Noida businesses partner with Fraga Technology for innovative web development and digital marketing solutions. We understand Noida's growing tech ecosystem and deliver scalable solutions for startups and enterprises. Our team is just hours away for quick collaboration and local support.",
    whyChooseUs: [
      "Proximity to Noida tech sector with understanding of startup and enterprise needs",
      "Quick onsite meetings and local support for Noida businesses",
      "Experience with Noida-based startups and IT companies",
      "Flexible engagement models from full-time projects to ongoing support",
      "Competitive pricing with transparent project estimates",
    ],
    services: [
      {
        title: "Website Development",
        description:
          "Modern, responsive websites for Noida businesses. Optimized for Google rankings and user conversions.",
      },
      {
        title: "Startup MVP Development",
        description:
          "Fast, cost-effective MVP development for Noida startups. Get to market quickly with our agile development approach.",
      },
      {
        title: "SEO Services",
        description: "SEO optimization to help Noida businesses rank higher on Google and attract more customers.",
      },
      {
        title: "Google Ads Management",
        description: "PPC campaigns targeting Noida audiences for lead generation and sales growth.",
      },
      {
        title: "Digital Marketing",
        description:
          "Complete digital marketing strategies for Noida companies including content, social media, and email marketing.",
      },
    ],
    faqs: [
      {
        question: "Can you help our Noida startup launch quickly?",
        answer:
          "Yes! We specialize in fast MVP development for startups. Our agile process gets your product to market in weeks, not months. We understand startup constraints and deliver lean, effective solutions.",
      },
      {
        question: "Do you work with Noida IT companies?",
        answer:
          "Yes, we regularly collaborate with Noida-based IT companies for additional development capacity, specialized skills, and project support.",
      },
      {
        question: "What payment options do you offer?",
        answer:
          "We offer flexible payment terms: 30% advance, 40% on milestone completion, 30% on delivery. We also accept installment plans for larger projects.",
      },
      {
        question: "How do you handle project management?",
        answer:
          "We use industry-standard tools like Jira, Asana, and Slack for transparent project tracking. Regular standup meetings and progress reports keep you updated.",
      },
    ],
    ctaText: "Start Your Noida Project",
  },
  bangalore: {
    slug: "bangalore",
    name: "Bangalore",
    state: "Karnataka",
    tagline: "Web Development & Digital Marketing Company in Bangalore | Tech Solutions",
    description:
      "Fraga Technology serves Bangalore's vibrant tech ecosystem with expert web development, mobile app development, and digital marketing services. We partner with startups, IT companies, and enterprises across Bangalore to deliver innovative digital solutions.",
    metaTitle: "Web Development Company in Bangalore | Website Development Services | Fraga Technology",
    metaDescription:
      "Expert web development in Bangalore. Custom websites, mobile apps, SEO & digital marketing for Bangalore startups and enterprises.",
    keywords: [
      "web development company Bangalore",
      "website development Bangalore",
      "web developer Bangalore",
      "digital marketing Bangalore",
      "startup development Bangalore",
      "mobile app development Bangalore",
    ],
    heroText:
      "Bangalore's technology leaders choose Fraga Technology for world-class web development and digital marketing. We serve the city's thriving startup ecosystem and established enterprises with scalable, innovative solutions.",
    whyChooseUs: [
      "Deep understanding of Bangalore's competitive tech market",
      "Experience with Bangalore startups, unicorns, and enterprises",
      "Collaborative approach with Bangalore-based teams",
      "Competitive pricing with premium quality delivery",
      "Access to specialized tech talent and expertise",
    ],
    services: [
      {
        title: "Website Development",
        description:
          "High-performance websites for Bangalore businesses with modern tech stack and SEO optimization.",
      },
      {
        title: "Mobile App Development",
        description: "iOS and Android apps for Bangalore startups with user-centric design and robust architecture.",
      },
      {
        title: "Startup Consulting",
        description: "Strategic guidance for Bangalore startups on technology choices, MVP development, and scaling.",
      },
      {
        title: "SEO Services",
        description: "Bangalore-focused SEO to help your business rank higher and attract quality customers.",
      },
      {
        title: "Digital Marketing",
        description:
          "Complete digital marketing for Bangalore companies including brand building and lead generation.",
      },
    ],
    faqs: [
      {
        question: "Do you have experience with Bangalore startups?",
        answer:
          "Yes! We've worked with numerous Bangalore startups from seed stage to Series A. We understand startup constraints, growth stages, and funding cycles.",
      },
      {
        question: "Can we do pair programming or tech collaboration?",
        answer:
          "Absolutely. We regularly collaborate with Bangalore tech teams for additional capacity, code reviews, and knowledge sharing.",
      },
      {
        question: "What's your approach to Bangalore's competitive market?",
        answer:
          "We focus on differentiation, user experience, and SEO to help Bangalore companies stand out. We analyze competitors and position your product for success.",
      },
      {
        question: "Do you support flexible engagement models?",
        answer:
          "Yes, we offer flexible models from full-time dedicated teams, to part-time augmentation, to project-based work for Bangalore companies.",
      },
    ],
    ctaText: "Startup Your Bangalore Growth",
  },
  lucknow: {
    slug: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    tagline: "Web Development & Digital Services in Lucknow | Business Growth Solutions",
    description:
      "Fraga Technology brings expert web development and digital marketing to Lucknow businesses. We deliver affordable, high-quality digital solutions tailored for Lucknow's growing business ecosystem.",
    metaTitle: "Web Development Company in Lucknow | Website Development Services | Fraga Technology",
    metaDescription:
      "Professional web development in Lucknow. Affordable websites, mobile apps, and digital marketing for Lucknow businesses.",
    keywords: [
      "web development company Lucknow",
      "website development Lucknow",
      "web developer Lucknow",
      "digital marketing Lucknow",
      "SEO services Lucknow",
    ],
    heroText:
      "Lucknow businesses discover affordable, professional web development and digital marketing with Fraga Technology. We help local businesses compete online with modern websites and marketing strategies.",
    whyChooseUs: [
      "Local presence with understanding of Lucknow business market",
      "Affordable pricing tailored for Lucknow businesses",
      "Local support and quick response times",
      "Experience helping Lucknow businesses grow online",
      "Bilingual support in English and Hindi",
    ],
    services: [
      {
        title: "Website Development",
        description: "Affordable, professional websites for Lucknow businesses with local market focus.",
      },
      {
        title: "Mobile App Development",
        description: "Custom apps for Lucknow entrepreneurs and businesses.",
      },
      {
        title: "SEO Services",
        description: "Local SEO to help Lucknow businesses rank on Google and attract customers.",
      },
      {
        title: "Google Ads Management",
        description: "Affordable PPC campaigns for Lucknow businesses to generate leads.",
      },
      {
        title: "Digital Marketing",
        description: "Complete marketing support for Lucknow companies.",
      },
    ],
    faqs: [
      {
        question: "Are your prices affordable for Lucknow businesses?",
        answer:
          "Yes! We offer competitive pricing tailored for Lucknow's market. We believe quality digital solutions should be affordable for all business sizes.",
      },
      {
        question: "Can you help my traditional business go digital?",
        answer:
          "Absolutely. We help Lucknow's traditional businesses transition to digital with affordable websites, online storefronts, and digital marketing.",
      },
      {
        question: "Do you provide local support?",
        answer:
          "Yes, we're based nearby and can provide local support, meetings, and quick response times for Lucknow clients.",
      },
    ],
    ctaText: "Get Affordable Website",
  },
  kannauj: {
    slug: "kannauj",
    name: "Kannauj",
    state: "Uttar Pradesh",
    tagline: "Web Development & Digital Marketing Services in Kannauj | Fraga Technology HQ",
    description:
      "Fraga Technology is headquartered in Kannauj and serves local businesses and clients worldwide with affordable, professional web development and digital marketing services.",
    metaTitle: "Web Development Company Kannauj | Website Development Services | Fraga Technology",
    metaDescription:
      "Professional web development services in Kannauj. Affordable websites and digital marketing for local and international clients.",
    keywords: [
      "web development Kannauj",
      "website design Kannauj",
      "digital marketing Kannauj",
      "web services Kannauj",
    ],
    heroText:
      "Based in Kannauj, Fraga Technology brings world-class web development and digital marketing expertise to local businesses and clients worldwide. We're committed to helping Kannauj businesses succeed online.",
    whyChooseUs: [
      "Locally based with direct access to our team",
      "Affordable pricing with professional quality",
      "Serving Kannauj businesses for years",
      "Commitment to community growth",
    ],
    services: [
      {
        title: "Website Development",
        description: "Professional websites for Kannauj businesses.",
      },
      {
        title: "Digital Marketing",
        description: "Marketing services for local business growth.",
      },
      {
        title: "SEO Services",
        description: "Help Kannauj businesses rank on Google.",
      },
      {
        title: "Web Support",
        description: "Ongoing maintenance and support services.",
      },
    ],
    faqs: [
      {
        question: "Can I meet your team in person?",
        answer:
          "Yes! We're based in Kannauj and welcome meetings with local businesses. Visit our office for project discussions and collaboration.",
      },
      {
        question: "Do you serve international clients?",
        answer:
          "Yes, while based in Kannauj, we serve clients worldwide with affordable, professional digital solutions.",
      },
    ],
    ctaText: "Contact Kannauj Office",
  },
}

export function getCityBySlug(slug: string): CityData | undefined {
  return cities[slug]
}

export function getAllCitySlugs(): string[] {
  return Object.keys(cities)
}

export function getCityNavItems(): Array<{ name: string; slug: string; href: string }> {
  return Object.values(cities).map((city) => ({
    name: city.name,
    slug: city.slug,
    href: `/cities/${city.slug}`,
  }))
}

export function getAllCities(): CityData[] {
  return Object.values(cities)
}

export function getCitiesByCountry(countryName: string): Array<{ name: string; slug: string; href: string }> {
  return Object.values(cities)
    .filter((city) => {
      // Map country names to city filtering logic
      // Currently all cities are in India, adjust as more countries add cities
      if (countryName === "India") {
        return true
      }
      // Add more country mappings as cities expand to other countries
      return false
    })
    .map((city) => ({
      name: city.name,
      slug: city.slug,
      href: `/cities/${city.slug}`,
    }))
}
