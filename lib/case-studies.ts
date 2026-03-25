export interface CaseStudyMetrics {
  title: string
  value: string
  description?: string
}

export interface CaseStudy {
  slug: string
  title: string
  tagline: string
  description: string
  industry: string
  service: string
  technologies: string[]
  clientLogoAlt: string
  coverImageAlt: string
  challenge: string
  solution: string
  results: CaseStudyMetrics[]
  testimonial: {
    text: string
    author: string
    position: string
    company: string
  }
  timeline: string
  teamSize: string
  images: {
    cover: string
    process1?: string
    process2?: string
  }
}

export const caseStudies: Record<string, CaseStudy> = {
  "ecommerce-fashion-brand": {
    slug: "ecommerce-fashion-brand",
    title: "E-Commerce Fashion Brand - 150% Revenue Growth",
    tagline: "Transformed a Traditional Fashion Brand into a Thriving Online Business",
    description:
      "A premium fashion brand was struggling with declining foot traffic in physical stores. We built a custom Shopify store with integrated inventory management, personalized recommendations, and strategic marketing that increased online revenue from ₹5 lakhs to ₹12.5 lakhs within 6 months.",
    industry: "Fashion & Retail",
    service: "E-Commerce Development",
    technologies: ["Shopify", "Liquid", "API Integration", "Payment Gateways"],
    clientLogoAlt: "Fashion brand logo",
    coverImageAlt: "E-commerce fashion website showcase",
    challenge:
      "The client had built a strong brand through physical stores but lacked online presence. Their existing website was outdated and didn't support e-commerce. They needed a modern, conversion-optimized online store that could handle growing demand.",
    solution:
      "We designed and developed a custom Shopify store with: advanced product filtering, virtual try-on recommendations, integrated payment gateways (Stripe & Razorpay), real-time inventory sync, email marketing automation, and mobile-first design. We also implemented strategic SEO and Google Shopping integration.",
    results: [
      { title: "Revenue Increase", value: "150%", description: "Grew from ₹5L to ₹12.5L in 6 months" },
      { title: "Conversion Rate", value: "3.8%", description: "Up from industry average of 2%" },
      { title: "AOV Increase", value: "₹4,500", description: "Average Order Value improved by 45%" },
      { title: "Customer Retention", value: "42%", description: "Repeat purchase rate within 3 months" },
    ],
    testimonial: {
      text: "Fraga Technology completely transformed our business. Their expertise in e-commerce and digital marketing turned our online store into a major revenue driver. The team was responsive, professional, and exceeded our expectations.",
      author: "Priya Sharma",
      position: "Founder & CEO",
      company: "Fashion Brand",
    },
    timeline: "6 months",
    teamSize: "4 team members",
    images: {
      cover: "/case-studies/fashion-ecommerce.jpg",
    },
  },
  "saas-startup-platform": {
    slug: "saas-startup-platform",
    title: "SaaS Startup - From Idea to 500+ Users",
    tagline: "Launched a Subscription-Based Project Management Platform",
    description:
      "A team of founders with a great idea but limited technical expertise approached us. We built their entire SaaS platform from scratch, handling architecture, database design, payment integration, and user onboarding. The platform now has 500+ paid users and is generating ₹50+ lakhs in ARR.",
    industry: "SaaS & Technology",
    service: "SaaS Platform Development",
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    clientLogoAlt: "SaaS startup logo",
    coverImageAlt: "SaaS platform dashboard interface",
    challenge:
      "The founders had validated their idea with 100+ beta users but needed a production-ready platform. They faced challenges with: scalability, subscription billing complexity, user onboarding, and integrations with popular productivity tools.",
    solution:
      "We designed a scalable multi-tenant architecture on AWS, implemented subscription billing with Stripe, created an intuitive user dashboard, built API for third-party integrations, and developed a comprehensive onboarding flow. We also set up analytics to track user behavior and feature adoption.",
    results: [
      { title: "Paying Users", value: "500+", description: "Growing by 15% month-over-month" },
      { title: "Monthly Recurring Revenue", value: "₹50L+", description: "Achieving profitability targets" },
      { title: "Churn Rate", value: "2.5%", description: "Below industry average" },
      { title: "Customer Satisfaction", value: "4.8/5", description: "Average rating across reviews" },
    ],
    testimonial: {
      text: "Working with Fraga Technology was a game-changer. They didn't just build software, they understood our business and helped us create a product that customers genuinely love. The quality of their work and their ability to solve complex problems is exceptional.",
      author: "Amit Patel",
      position: "Co-founder",
      company: "SaaS Startup",
    },
    timeline: "4 months for MVP, 12 months for full platform",
    teamSize: "5 developers + 1 designer",
    images: {
      cover: "/case-studies/saas-platform.jpg",
    },
  },
  "real-estate-property-portal": {
    slug: "real-estate-property-portal",
    title: "Real Estate Portal - 10,000+ Active Listings",
    tagline: "Built a Comprehensive Property Listing Platform",
    description:
      "A real estate group wanted to create their own property portal to reduce dependence on third-party listing platforms. We developed a full-featured platform with advanced search, virtual tours integration, CRM system, and automated lead distribution that now manages 10,000+ active listings.",
    industry: "Real Estate",
    service: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Matterport API", "AWS"],
    clientLogoAlt: "Real estate company logo",
    coverImageAlt: "Property listing portal interface",
    challenge:
      "Managing 10,000+ property listings across multiple agents was complex. They needed a platform that could handle large datasets, provide advanced search capabilities, integrate virtual tours, and automate lead distribution to the right agents.",
    solution:
      "We built a scalable property portal with: real-time database synchronization, advanced filtering (price, location, size, amenities), Matterport 3D tour integration, AI-powered property recommendations, CRM for lead management, and automated lead distribution logic.",
    results: [
      { title: "Active Listings", value: "10,000+", description: "Across all agents" },
      { title: "Leads Captured", value: "2,000+/month", description: "Average monthly leads" },
      { title: "Lead Response Time", value: "5 mins", description: "Average response improved from 2 hours" },
      { title: "Virtual Tour Usage", value: "68%", description: "Of all property viewings" },
    ],
    testimonial: {
      text: "The platform Fraga built has been transformative. Our agents love the CRM, our customers appreciate the virtual tours, and our business has grown significantly. The team was incredibly responsive to our requirements and feedback.",
      author: "Rajesh Kumar",
      position: "Director",
      company: "Real Estate Group",
    },
    timeline: "6 months",
    teamSize: "6 developers + 2 designers",
    images: {
      cover: "/case-studies/real-estate-portal.jpg",
    },
  },
  "healthcare-clinic-portal": {
    slug: "healthcare-clinic-portal",
    title: "Healthcare Clinic - Patient Portal & Appointments",
    tagline: "HIPAA-Compliant Clinic Management Platform",
    description:
      "A chain of 5 healthcare clinics needed a centralized platform for patient management, appointment booking, and medical records. We built a HIPAA-compliant portal that reduced appointment no-shows by 45% and improved patient satisfaction significantly.",
    industry: "Healthcare",
    service: "Healthcare Web Development",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS KMS", "Twilio"],
    clientLogoAlt: "Healthcare clinic logo",
    coverImageAlt: "Patient portal interface design",
    challenge:
      "Managing patient appointments, medical records, and clinic operations was scattered across multiple systems. They needed a unified, secure, HIPAA-compliant platform that patients and doctors could use easily.",
    solution:
      "We developed a comprehensive clinic management system with: secure patient portals with encrypted records, online appointment booking with automated reminders, doctor scheduling system, prescription management, payment integration, and telemedicine capabilities.",
    results: [
      { title: "No-Show Reduction", value: "45%", description: "Through automated reminders" },
      { title: "Appointment Efficiency", value: "40%", description: "Faster scheduling and management" },
      { title: "Patient Satisfaction", value: "4.9/5", description: "Average rating" },
      { title: "Administrative Time", value: "-50%", description: "Reduction in manual work" },
    ],
    testimonial: {
      text: "The patient portal and clinic management system have been excellent. Our staff is more efficient, patients are happier, and we're delivering better care. The security and compliance with healthcare regulations is exactly what we needed.",
      author: "Dr. Anita Sharma",
      position: "Medical Director",
      company: "Healthcare Clinic Chain",
    },
    timeline: "5 months",
    teamSize: "4 developers + 1 designer",
    images: {
      cover: "/case-studies/healthcare-portal.jpg",
    },
  },
  "law-firm-seo": {
    slug: "law-firm-seo",
    title: "Law Firm SEO - 300% Traffic Growth",
    tagline: "Dominated Local Search Rankings for Legal Services",
    description:
      "A mid-sized law firm specializing in personal injury was losing clients to competitors ranking higher on Google. Our comprehensive SEO strategy brought them to the top of local search results, resulting in 300% traffic increase and 40% more consultations.",
    industry: "Legal Services",
    service: "SEO Services",
    technologies: ["Content Optimization", "Local SEO", "Schema Markup", "Link Building"],
    clientLogoAlt: "Law firm logo",
    coverImageAlt: "Law firm website ranking showcase",
    challenge:
      "The firm had a well-built website but minimal organic visibility. Their competitors dominated search results for key terms like 'personal injury lawyer near me' and practice-area-specific keywords. They needed a strategic SEO approach.",
    solution:
      "We implemented: comprehensive keyword research, on-page optimization, technical SEO improvements, content creation strategy, local SEO optimization, citation building across legal directories, and strategic link building from authority sources.",
    results: [
      { title: "Organic Traffic", value: "+300%", description: "From 500 to 2,000+ monthly visits" },
      { title: "Keyword Rankings", value: "50+ top-10", description: "Rankings for target keywords" },
      { title: "Consultations", value: "+40%", description: "Increase in qualified consultations" },
      { title: "Average Client Value", value: "+25%", description: "Better quality leads" },
    ],
    testimonial: {
      text: "The results from Fraga Technology's SEO work have been remarkable. We're now the top choice when people search for personal injury lawyers in our area. The team's expertise in legal SEO is unparalleled, and the ROI has been exceptional.",
      author: "Michael Johnson",
      position: "Partner",
      company: "Law Firm",
    },
    timeline: "4 months to see significant results",
    teamSize: "2 SEO specialists + content team",
    images: {
      cover: "/case-studies/law-firm-seo.jpg",
    },
  },
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies[slug]
}

export function getAllCaseStudySlugs(): string[] {
  return Object.keys(caseStudies)
}

export function getAllCaseStudies(): CaseStudy[] {
  return Object.values(caseStudies)
}

export function getCaseStudiesByIndustry(industry: string): CaseStudy[] {
  return Object.values(caseStudies).filter((cs) => cs.industry === industry)
}

export function getCaseStudiesByService(service: string): CaseStudy[] {
  return Object.values(caseStudies).filter((cs) => cs.service === service)
}
