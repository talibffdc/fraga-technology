import { siteConfig } from "@/lib/site-config"

export interface IndustryService {
  title: string
  description: string
}

export interface IndustryData {
  slug: string
  title: string
  tagline: string
  description: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  heroText: string
  challenges: string[]
  services: IndustryService[]
  benefits: string[]
  faqs: { question: string; answer: string }[]
  ctaText: string
}

export const industries: Record<string, IndustryData> = {
  "real-estate": {
    slug: "real-estate",
    title: "Real Estate",
    tagline: "Digital Solutions for Real Estate Companies & Agents",
    description:
      "Fraga Technology provides specialized digital marketing and website development services for real estate companies, property developers, and real estate agents across India and internationally. We build property listing websites, integrate IDX/MLS feeds, create virtual tour experiences, and run targeted Google and Meta Ads campaigns that generate qualified buyer and seller leads.",
    metaTitle: "Real Estate Website Development & Digital Marketing | Fraga Technology",
    metaDescription:
      "Expert real estate website development and digital marketing services. Property listing sites, IDX integration, lead generation for realtors & developers. Call +91 9235000195",
    keywords: [
      "real estate website development India",
      "property listing website",
      "real estate digital marketing",
      "real estate SEO services",
      "real estate lead generation",
      "IDX website development",
      "real estate Google Ads",
      "property developer marketing"
    ],
    heroText:
      "We help real estate companies, property developers, and agents generate high-quality buyer and seller leads through professional websites, strategic SEO, and targeted paid advertising. Our real estate digital solutions are designed to showcase properties beautifully and convert visitors into inquiries.",
    challenges: [
      "Low online visibility in competitive real estate markets",
      "Difficulty generating qualified buyer and seller leads",
      "Outdated website that doesn't showcase properties effectively",
      "Poor local SEO rankings for property-related searches",
      "High cost-per-lead from inefficient advertising",
      "No system for nurturing leads through the sales cycle"
    ],
    services: [
      {
        title: "Real Estate Website Development",
        description: "Custom property listing websites with advanced search filters, virtual tours, mortgage calculators, and IDX/MLS integration for seamless property display."
      },
      {
        title: "Real Estate SEO",
        description: "Local SEO optimization targeting buyers searching for properties in your area. Rank for location + property type keywords that drive qualified traffic."
      },
      {
        title: "Google Ads for Real Estate",
        description: "Targeted Google Search and Display campaigns reaching buyers actively searching for properties. Remarketing campaigns keep your listings top-of-mind."
      },
      {
        title: "Meta Ads Lead Generation",
        description: "Facebook and Instagram campaigns with lead forms capturing buyer information. Lookalike audiences expand reach to similar prospects."
      },
      {
        title: "Property Virtual Tours",
        description: "360-degree virtual tour integration allowing buyers to explore properties online. Increase engagement and pre-qualify serious buyers."
      },
      {
        title: "CRM Integration",
        description: "Connect your website to real estate CRMs for automated lead routing, follow-up sequences, and agent assignment workflows."
      }
    ],
    benefits: [
      "Generate 3-5x more qualified property inquiries",
      "Rank on Page 1 for local property searches",
      "Reduce cost-per-lead with optimized ad campaigns",
      "Showcase properties with professional visual presentations",
      "Automate lead capture and follow-up processes",
      "Build brand authority in your target markets"
    ],
    faqs: [
      {
        question: "How much does a real estate website cost?",
        answer: "Real estate websites range from $2,000 for basic property listing sites to $10,000+ for custom platforms with IDX integration, virtual tours, and advanced features. We provide detailed quotes based on your specific requirements."
      },
      {
        question: "Can you integrate with my existing MLS/IDX feed?",
        answer: "Yes, we integrate with major MLS systems and IDX providers to automatically display property listings on your website. This includes filtering options, saved searches, and lead capture on listings."
      },
      {
        question: "How do you generate leads for real estate businesses?",
        answer: "We combine SEO (ranking for local property searches), Google Ads (targeting active buyers), and Meta Ads (reaching potential buyers/sellers) with optimized landing pages and lead capture forms to generate consistent, qualified leads."
      },
      {
        question: "Do you work with individual agents or only companies?",
        answer: "We work with both individual real estate agents and large property development companies. Our packages scale to match your business size and marketing budget."
      }
    ],
    ctaText: "Get Real Estate Marketing Quote"
  },
  "healthcare": {
    slug: "healthcare",
    title: "Healthcare",
    tagline: "Digital Solutions for Hospitals, Clinics & Medical Practices",
    description:
      "Fraga Technology delivers HIPAA-aware website development and digital marketing services for hospitals, clinics, doctors, dentists, and healthcare organizations. We build patient-focused websites with online appointment booking, create medical SEO strategies that rank for health-related searches, and run compliant advertising campaigns that attract new patients.",
    metaTitle: "Healthcare Website Development & Medical Marketing | Fraga Technology",
    metaDescription:
      "Healthcare website development and medical digital marketing. Patient portals, appointment booking, medical SEO, HIPAA-aware solutions. Call +91 9235000195",
    keywords: [
      "healthcare website development",
      "medical website design",
      "hospital website development",
      "healthcare digital marketing",
      "medical SEO services",
      "doctor website development",
      "clinic website design",
      "healthcare marketing India"
    ],
    heroText:
      "We help hospitals, clinics, and medical practices attract new patients through professional healthcare websites, medical SEO, and compliant digital advertising. Our healthcare solutions focus on building trust, streamlining patient acquisition, and establishing your practice as a trusted provider.",
    challenges: [
      "Difficulty attracting new patients in competitive healthcare markets",
      "Outdated website that doesn't build patient trust",
      "Poor rankings for medical services and condition searches",
      "No online appointment booking causing missed opportunities",
      "Strict advertising regulations limiting marketing options",
      "Patients choosing competitors with better online presence"
    ],
    services: [
      {
        title: "Healthcare Website Development",
        description: "Professional medical websites with doctor profiles, service pages, online appointment booking, patient portals, and mobile-responsive design that builds trust."
      },
      {
        title: "Medical SEO (YMYL Optimized)",
        description: "Specialized healthcare SEO following Google's YMYL (Your Money Your Life) guidelines. Rank for medical conditions, treatments, and 'doctor near me' searches."
      },
      {
        title: "Google Ads for Healthcare",
        description: "Compliant Google Ads campaigns for healthcare providers. Target patients searching for specific treatments, specialists, and emergency services."
      },
      {
        title: "Reputation Management",
        description: "Manage Google reviews and patient testimonials. Build credibility with positive reviews while addressing concerns professionally."
      },
      {
        title: "Patient Portal Development",
        description: "Secure patient portals for appointment scheduling, medical records access, prescription refills, and secure messaging with healthcare providers."
      },
      {
        title: "Telemedicine Integration",
        description: "Video consultation features allowing patients to connect with doctors remotely. Integrate with your existing EMR/EHR systems."
      }
    ],
    benefits: [
      "Attract 50-200% more new patient inquiries",
      "Rank for medical specialty and condition searches",
      "Reduce administrative burden with online booking",
      "Build patient trust with professional online presence",
      "Stay compliant with healthcare advertising regulations",
      "Compete effectively against larger healthcare systems"
    ],
    faqs: [
      {
        question: "How much does a healthcare website cost?",
        answer: "Healthcare websites range from $3,000 for clinic sites to $15,000+ for hospital websites with patient portals and telemedicine features. Compliance requirements and integration needs affect pricing."
      },
      {
        question: "Are your healthcare websites HIPAA compliant?",
        answer: "We build HIPAA-aware websites with secure forms, SSL encryption, and proper data handling. For full HIPAA compliance, we work with compliant hosting providers and can integrate with your existing compliant systems."
      },
      {
        question: "Can you help with healthcare Google Ads?",
        answer: "Yes, we manage Google Ads campaigns for healthcare providers following Google's healthcare advertising policies. This includes proper disclaimers, landing page compliance, and targeting restrictions."
      },
      {
        question: "How do you handle medical SEO differently?",
        answer: "Medical SEO requires E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals due to YMYL classification. We ensure author credentials, accurate medical information, citations, and proper schema markup."
      }
    ],
    ctaText: "Get Healthcare Marketing Quote"
  },
  "law-firms": {
    slug: "law-firms",
    title: "Law Firms",
    tagline: "Digital Marketing Solutions for Attorneys & Legal Practices",
    description:
      "Fraga Technology provides specialized website development and digital marketing for law firms, attorneys, and legal practices. We understand that legal marketing requires building trust, demonstrating expertise, and generating qualified case leads. Our legal marketing services include attorney websites, law firm SEO, Google Ads for lawyers, and content marketing that establishes your firm's authority.",
    metaTitle: "Law Firm Website Development & Legal Marketing | Fraga Technology",
    metaDescription:
      "Law firm website development and attorney digital marketing. Legal SEO, Google Ads for lawyers, case lead generation. Call +91 9235000195",
    keywords: [
      "law firm website development India",
      "attorney website design",
      "legal marketing services",
      "law firm SEO",
      "lawyer digital marketing",
      "legal lead generation",
      "Google Ads for lawyers",
      "law firm marketing"
    ],
    heroText:
      "We help law firms and attorneys attract qualified case leads through professional legal websites, strategic SEO for high-value practice areas, and targeted advertising campaigns. Our legal marketing expertise understands the unique compliance requirements and competitive dynamics of the legal industry.",
    challenges: [
      "Extremely competitive keywords with high cost-per-click",
      "Difficulty differentiating from other law firms online",
      "Attracting quality case leads, not tire-kickers",
      "Bar association advertising compliance requirements",
      "Building trust and credibility with potential clients",
      "Converting website visitors into consultations"
    ],
    services: [
      {
        title: "Law Firm Website Development",
        description: "Professional attorney websites showcasing practice areas, attorney profiles, case results, client testimonials, and clear calls-to-action for consultations."
      },
      {
        title: "Legal SEO Services",
        description: "Rank for high-intent legal searches like '[practice area] lawyer [city]'. Target long-tail keywords that indicate potential clients actively seeking legal help."
      },
      {
        title: "Google Ads for Lawyers",
        description: "Strategic Google Ads campaigns for legal services. Manage high-CPC keywords efficiently while maintaining compliance with bar advertising rules."
      },
      {
        title: "Legal Content Marketing",
        description: "Blog posts, legal guides, and FAQ content that demonstrates expertise, answers potential client questions, and improves organic search rankings."
      },
      {
        title: "Reputation Management",
        description: "Manage client reviews across Google, Avvo, and legal directories. Build social proof that influences potential clients during their research."
      },
      {
        title: "Case Intake Optimization",
        description: "Optimize lead capture forms, implement live chat, and integrate with case management software to never miss a qualified lead."
      }
    ],
    benefits: [
      "Generate consistent qualified case inquiries",
      "Rank for valuable practice area keywords",
      "Reduce cost-per-case-acquisition over time",
      "Build authority and trust with potential clients",
      "Stay compliant with legal advertising rules",
      "Convert more website visitors into consultations"
    ],
    faqs: [
      {
        question: "How much does a law firm website cost?",
        answer: "Law firm websites range from $3,000 for solo practitioners to $15,000+ for large firms with multiple practice areas, attorney profiles, and advanced features. Investment varies based on scope and functionality."
      },
      {
        question: "Do you understand legal advertising compliance?",
        answer: "Yes, we're familiar with bar advertising rules and ensure websites and ads comply with requirements. We include necessary disclaimers, avoid guarantees, and follow state bar guidelines for attorney advertising."
      },
      {
        question: "What makes legal SEO different?",
        answer: "Legal keywords are extremely competitive with high CPCs. We focus on long-tail keywords with clear intent, local SEO dominance, and content that demonstrates E-E-A-T signals Google requires for legal content."
      },
      {
        question: "How do you handle the high cost of legal Google Ads?",
        answer: "We use precise keyword targeting (avoiding broad match), strong negative keyword lists, high-quality ad copy for better Quality Scores, and optimized landing pages to maximize value from every click, even with $50-$200+ CPCs."
      }
    ],
    ctaText: "Get Legal Marketing Quote"
  }
}

/** Get all industries as an ordered array */
export function getAllIndustries(): IndustryData[] {
  return Object.values(industries)
}

/** Get all industry slugs */
export function getAllIndustrySlugs(): string[] {
  return Object.keys(industries)
}

/** Get single industry by slug */
export function getIndustryBySlug(slug: string): IndustryData | null {
  return industries[slug] || null
}

/** Navigation-friendly list of industries */
export function getIndustryNavItems(): { name: string; slug: string; href: string }[] {
  return Object.values(industries).map((i) => ({
    name: i.title,
    slug: i.slug,
    href: `/industries/${i.slug}`,
  }))
}
