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
  },
  "saas": {
    slug: "saas",
    title: "SaaS & Startups",
    tagline: "Digital Growth Solutions for SaaS Companies & Tech Startups",
    description:
      "Fraga Technology provides specialized web development and digital marketing services for SaaS companies, tech startups, and software businesses. We understand the unique challenges of scaling a SaaS business—from building high-converting landing pages to implementing product-led growth strategies. Our team helps SaaS companies acquire users, reduce churn, and scale efficiently through targeted digital marketing campaigns.",
    metaTitle: "SaaS Website Development & Marketing | Startup Digital Agency | Fraga Technology",
    metaDescription:
      "SaaS website development and startup marketing services. Landing pages, product marketing, SEO & paid ads for software companies. Call +91 9235000195",
    keywords: [
      "SaaS website development",
      "startup marketing agency",
      "SaaS digital marketing",
      "software company website",
      "SaaS landing page design",
      "B2B SaaS marketing",
      "startup growth marketing",
      "product-led growth agency"
    ],
    heroText:
      "We help SaaS companies and tech startups build compelling digital experiences that convert visitors into paying customers. From high-converting landing pages to comprehensive growth marketing campaigns, our team combines startup DNA with marketing expertise to accelerate your growth trajectory.",
    challenges: [
      "High customer acquisition costs eating into runway",
      "Low trial-to-paid conversion rates",
      "Difficulty explaining complex products simply",
      "Competing against well-funded competitors for keywords",
      "Long sales cycles slowing revenue growth",
      "Website not effectively demonstrating product value"
    ],
    services: [
      {
        title: "SaaS Website Development",
        description: "High-performance websites built for conversion. Feature tours, pricing pages, integrations pages, and documentation sites optimized for user acquisition."
      },
      {
        title: "Landing Page Design",
        description: "Conversion-optimized landing pages for campaigns, features, and use cases. A/B testing ready with fast load times for paid traffic."
      },
      {
        title: "SaaS SEO Strategy",
        description: "Bottom-of-funnel SEO targeting high-intent buyers. Competitor comparison pages, alternative pages, and feature-specific content that drives trials."
      },
      {
        title: "Google Ads for SaaS",
        description: "Search campaigns targeting software buyers. Competitor keywords, problem-aware queries, and branded defense with optimized trial signup flows."
      },
      {
        title: "Content Marketing",
        description: "Thought leadership content, blog posts, and resource pages that attract your ICP. SEO-driven content strategy aligned with buyer journey."
      },
      {
        title: "Product Marketing",
        description: "Feature announcements, product launches, and messaging strategy that resonates with your target audience and differentiates from competitors."
      }
    ],
    benefits: [
      "Increase trial signups by 2-3x with optimized funnels",
      "Reduce customer acquisition cost over time with SEO",
      "Build authority in your product category",
      "Compete effectively against larger competitors",
      "Create scalable, repeatable growth channels",
      "Accelerate time-to-revenue for new features"
    ],
    faqs: [
      {
        question: "How is SaaS marketing different from other industries?",
        answer: "SaaS marketing focuses on user acquisition, activation, and retention. Metrics like CAC, LTV, trial conversion rates, and churn matter more than vanity metrics. We optimize for product signups and activation rather than just traffic."
      },
      {
        question: "Can you help with our product messaging?",
        answer: "Yes, we help SaaS companies clarify their value proposition, positioning, and messaging. We create messaging that resonates with your ICP and differentiates from competitors—crucial for both website copy and advertising."
      },
      {
        question: "What's your experience with SaaS companies?",
        answer: "We've worked with B2B SaaS companies, developer tools, and tech startups across various stages. We understand product-led growth, freemium models, and enterprise sales cycles."
      },
      {
        question: "Do you integrate with tools like Segment, Amplitude, or Mixpanel?",
        answer: "Yes, we implement proper analytics tracking including Segment, Amplitude, Mixpanel, and other product analytics tools. We ensure conversion tracking is accurate for data-driven optimization."
      }
    ],
    ctaText: "Get SaaS Growth Strategy"
  },
  "ecommerce": {
    slug: "ecommerce",
    title: "E-commerce",
    tagline: "Digital Solutions for Online Stores & E-commerce Brands",
    description:
      "Fraga Technology provides comprehensive ecommerce website development and digital marketing services for online retailers, D2C brands, and marketplace sellers. We build high-converting online stores and implement marketing strategies that drive sales, increase average order value, and build customer loyalty. From Shopify customizations to custom ecommerce platforms, we help brands sell more online.",
    metaTitle: "Ecommerce Website Development | Online Store Marketing | Fraga Technology",
    metaDescription:
      "Ecommerce website development and online store marketing. Shopify, WooCommerce, custom stores. SEO, Google Shopping & Meta Ads. Call +91 9235000195",
    keywords: [
      "ecommerce website development",
      "online store development India",
      "Shopify development",
      "WooCommerce development",
      "ecommerce digital marketing",
      "Google Shopping ads",
      "ecommerce SEO services",
      "D2C brand marketing"
    ],
    heroText:
      "We help e-commerce brands build beautiful, high-converting online stores and implement marketing strategies that drive consistent revenue growth. From product page optimization to multi-channel advertising, our team maximizes your store's potential across every customer touchpoint.",
    challenges: [
      "High cart abandonment rates killing revenue",
      "Rising cost per acquisition on paid channels",
      "Struggling to compete with marketplace giants",
      "Low organic visibility for product searches",
      "Poor mobile conversion rates despite high traffic",
      "Difficulty building repeat purchase behavior"
    ],
    services: [
      {
        title: "Ecommerce Website Development",
        description: "Custom online stores built on Shopify, WooCommerce, or headless architecture. Optimized checkout flows, product pages, and category navigation."
      },
      {
        title: "Shopify Development",
        description: "Custom Shopify themes, app integrations, and store optimizations. Shopify Plus expertise for high-volume merchants."
      },
      {
        title: "Ecommerce SEO",
        description: "Product page optimization, category SEO, and technical ecommerce SEO. Rank for buying-intent product searches and compete with marketplaces."
      },
      {
        title: "Google Shopping Ads",
        description: "Product feed optimization, Shopping campaign management, and Performance Max campaigns. Maximize ROAS with strategic bidding and audience targeting."
      },
      {
        title: "Meta Ads for Ecommerce",
        description: "Facebook and Instagram advertising with dynamic product ads, catalog sales campaigns, and retargeting for abandoned carts."
      },
      {
        title: "Conversion Rate Optimization",
        description: "A/B testing, checkout optimization, and UX improvements that increase conversion rates and average order value."
      }
    ],
    benefits: [
      "Increase conversion rates by 30-50%",
      "Reduce cart abandonment with optimized checkout",
      "Achieve 3-5x ROAS on advertising campaigns",
      "Rank for profitable product keywords",
      "Build sustainable direct-to-consumer channel",
      "Increase customer lifetime value with retention marketing"
    ],
    faqs: [
      {
        question: "Which ecommerce platform do you recommend?",
        answer: "It depends on your needs. Shopify is excellent for most D2C brands with its ecosystem and ease of use. WooCommerce offers more flexibility for WordPress users. For high-scale custom needs, we build headless ecommerce solutions. We help you choose based on your products, budget, and growth plans."
      },
      {
        question: "How much does an ecommerce website cost?",
        answer: "Ecommerce websites range from $2,000 for basic Shopify stores to $15,000+ for custom platforms. Pricing depends on product catalog size, custom features, integrations, and design complexity. Contact us for a detailed quote."
      },
      {
        question: "Can you help with product photography and content?",
        answer: "We focus on web development and marketing rather than product photography. However, we can recommend trusted partners for product photography and provide guidance on ecommerce content best practices."
      },
      {
        question: "Do you work with marketplace sellers?",
        answer: "Yes, we help brands selling on Amazon, Flipkart, and other marketplaces build their own D2C presence. We create strategies to diversify away from marketplace dependence while maintaining marketplace revenue."
      }
    ],
    ctaText: "Get Ecommerce Growth Quote"
  },
  "marketing-agencies": {
    slug: "marketing-agencies",
    title: "Marketing Agencies",
    tagline: "White-Label Digital Solutions for Marketing Agencies",
    description:
      "Fraga Technology partners with marketing agencies, advertising firms, and creative studios to provide white-label web development and digital marketing services. We become your silent technical partner—building websites, managing SEO campaigns, and executing paid ads under your brand while you focus on client relationships and strategy.",
    metaTitle: "White-Label Web Development for Marketing Agencies | Fraga Technology",
    metaDescription:
      "White-label website development and digital marketing for agencies. Expand your service offerings without hiring. Reliable agency partner. Call +91 9235000195",
    keywords: [
      "white label web development",
      "agency partner web development",
      "white label SEO services",
      "marketing agency outsourcing",
      "white label digital marketing",
      "agency web development partner",
      "outsource web development India",
      "white label PPC management"
    ],
    heroText:
      "We help marketing agencies expand their service offerings without the overhead of hiring developers or SEO specialists. Our white-label partnership model lets you deliver exceptional web development, SEO, and paid advertising results to your clients—all under your brand name.",
    challenges: [
      "Client needs exceeding your in-house capabilities",
      "Difficulty hiring reliable developers and SEO specialists",
      "Project backlogs causing client dissatisfaction",
      "High overhead costs of maintaining technical staff",
      "Inconsistent quality from freelancers",
      "Missing revenue opportunities due to limited services"
    ],
    services: [
      {
        title: "White-Label Website Development",
        description: "Custom websites delivered under your brand. We handle development while you manage the client relationship. Clean handoff with documentation."
      },
      {
        title: "White-Label SEO Services",
        description: "Complete SEO execution including audits, on-page optimization, content creation, and link building. Branded reports for your clients."
      },
      {
        title: "White-Label PPC Management",
        description: "Google Ads and Meta Ads campaign management under your agency name. We optimize, you present the results to clients."
      },
      {
        title: "Agency Overflow Support",
        description: "Scale up during busy periods without permanent hires. We integrate with your workflow to handle project overflow seamlessly."
      },
      {
        title: "Dedicated Development Team",
        description: "Dedicated developers working exclusively on your agency's projects. Acts as an extension of your in-house team."
      },
      {
        title: "Technical Consulting",
        description: "Expert consultation for complex client projects. We help you scope, estimate, and plan technical solutions confidently."
      }
    ],
    benefits: [
      "Expand service offerings without hiring overhead",
      "Never turn down client projects due to capacity",
      "Maintain quality with reliable delivery partner",
      "Increase profit margins with cost-effective outsourcing",
      "Scale up or down based on workload",
      "Focus on sales while we handle execution"
    ],
    faqs: [
      {
        question: "How does white-label partnership work?",
        answer: "We work behind the scenes as your technical team. All deliverables are unbranded or branded with your agency name. Your clients never know we exist—you maintain full client ownership and relationships."
      },
      {
        question: "What's your turnaround time for projects?",
        answer: "Typical website projects take 2-4 weeks depending on complexity. SEO campaigns show results within 3-6 months. We provide clear timelines upfront and communicate proactively on progress."
      },
      {
        question: "Do you sign NDAs?",
        answer: "Absolutely. We sign comprehensive NDAs and confidentiality agreements. Your client relationships and business information remain completely protected."
      },
      {
        question: "How do you handle client communication?",
        answer: "You remain the single point of contact for your clients. We communicate only with you, providing updates, reports, and deliverables that you present to clients under your brand."
      }
    ],
    ctaText: "Become Agency Partner"
  },
  "construction": {
    slug: "construction",
    title: "Construction",
    tagline: "Digital Marketing Solutions for Construction & Contracting Companies",
    description:
      "Fraga Technology provides website development and digital marketing services for construction companies, general contractors, home builders, and specialty trades. We help construction businesses establish professional online presence, generate qualified leads for residential and commercial projects, and build trust with potential clients through compelling project portfolios.",
    metaTitle: "Construction Company Website Development & Marketing | Fraga Technology",
    metaDescription:
      "Construction website development and contractor marketing. Project portfolios, lead generation, local SEO for builders & contractors. Call +91 9235000195",
    keywords: [
      "construction company website",
      "contractor website development",
      "construction digital marketing",
      "home builder website",
      "construction SEO services",
      "contractor lead generation",
      "construction company marketing",
      "builder website design"
    ],
    heroText:
      "We help construction companies, contractors, and home builders attract high-value project leads through professional websites, local SEO dominance, and targeted advertising. Our construction marketing expertise turns your completed projects into powerful sales tools that win new business.",
    challenges: [
      "Relying solely on word-of-mouth and referrals",
      "No professional online presence to showcase work",
      "Losing bids to competitors with better marketing",
      "Difficulty reaching homeowners planning projects",
      "No system for capturing and following up on leads",
      "Website doesn't reflect quality of your craftsmanship"
    ],
    services: [
      {
        title: "Construction Website Development",
        description: "Professional contractor websites with project galleries, service pages, testimonials, and lead capture forms. Mobile-optimized for clients checking you out from job sites."
      },
      {
        title: "Project Portfolio Showcase",
        description: "Stunning before/after galleries, project case studies with details, and video walkthroughs that demonstrate your craftsmanship and win client trust."
      },
      {
        title: "Local SEO for Contractors",
        description: "Dominate local search results for contractor searches in your service area. Google Business Profile optimization and location-based keyword targeting."
      },
      {
        title: "Google Ads for Construction",
        description: "Targeted campaigns reaching homeowners and businesses actively searching for contractors. Service-specific and location-specific ad targeting."
      },
      {
        title: "Reputation Management",
        description: "Build and manage Google reviews that influence hiring decisions. Automated review requests and professional response management."
      },
      {
        title: "Lead Management System",
        description: "CRM integration to capture, track, and follow up on every lead. Never lose a potential project due to missed communication."
      }
    ],
    benefits: [
      "Generate consistent project leads beyond referrals",
      "Showcase work quality to win more bids",
      "Dominate local search in your service area",
      "Build trust before the first meeting",
      "Attract higher-value residential and commercial projects",
      "Professional online presence matching your workmanship"
    ],
    faqs: [
      {
        question: "How much does a construction company website cost?",
        answer: "Construction websites range from $2,500 for standard contractor sites to $8,000+ for custom builds with extensive project galleries and lead management features. Investment depends on your scope and functionality needs."
      },
      {
        question: "How do you showcase our projects effectively?",
        answer: "We create compelling project galleries with professional photos, before/after sliders, project details (scope, timeline, budget range), and client testimonials. Video walkthroughs can also be integrated for major projects."
      },
      {
        question: "Can you help us get more Google reviews?",
        answer: "Yes, we implement automated review request systems that reach out to satisfied clients at the right time. We also help you respond professionally to reviews and manage your online reputation."
      },
      {
        question: "What's the best way to generate construction leads online?",
        answer: "The most effective approach combines local SEO (ranking for 'contractor near me' searches), Google Ads (targeting active searchers), and a strong Google Business Profile. We develop a strategy based on your services, service area, and budget."
      }
    ],
    ctaText: "Get Construction Marketing Quote"
  },
  "insurance": {
    slug: "insurance",
    title: "Insurance",
    tagline: "Digital Marketing Solutions for Insurance Agents & Agencies",
    description:
      "Fraga Technology delivers website development and digital marketing services for insurance agents, agencies, and brokers. We help insurance professionals generate qualified leads, build trust online, and compete effectively in a highly regulated industry. Our insurance marketing services include agent websites, local SEO, compliant advertising, and lead generation campaigns.",
    metaTitle: "Insurance Agent Website Development & Marketing | Fraga Technology",
    metaDescription:
      "Insurance website development and agent marketing. Lead generation, local SEO, compliant advertising for insurance agents & agencies. Call +91 9235000195",
    keywords: [
      "insurance agent website",
      "insurance agency marketing",
      "insurance lead generation",
      "insurance SEO services",
      "insurance digital marketing",
      "insurance agent website design",
      "insurance Google Ads",
      "insurance broker marketing"
    ],
    heroText:
      "We help insurance agents and agencies generate qualified leads through professional websites, local SEO, and compliant digital advertising. Our insurance marketing expertise navigates industry regulations while delivering measurable growth in policy inquiries and client acquisition.",
    challenges: [
      "Highly competitive market with established players",
      "Strict advertising regulations and compliance requirements",
      "Difficulty standing out from other local agents",
      "Generating quality leads, not just quote shoppers",
      "Building trust in an industry with skeptical consumers",
      "Carrier restrictions on marketing and branding"
    ],
    services: [
      {
        title: "Insurance Agent Website Development",
        description: "Professional agent websites with quote request forms, service explanations, testimonials, and carrier information. Compliant with industry regulations."
      },
      {
        title: "Insurance SEO",
        description: "Local SEO targeting insurance searches in your market. Rank for 'insurance agent near me' and specific policy type searches in your service area."
      },
      {
        title: "Compliant Google Ads",
        description: "Insurance advertising that follows Google's financial services policies. Targeted campaigns for specific insurance products and local markets."
      },
      {
        title: "Lead Generation Campaigns",
        description: "Multi-channel lead generation combining SEO, paid ads, and social media. Quality-focused targeting to attract serious buyers, not just price shoppers."
      },
      {
        title: "Content Marketing",
        description: "Educational content explaining insurance concepts, coverage options, and buying guides. Builds trust and improves search rankings."
      },
      {
        title: "Review & Reputation Management",
        description: "Build Google reviews that influence insurance buying decisions. Testimonials and social proof that establish credibility."
      }
    ],
    benefits: [
      "Generate consistent qualified policy leads",
      "Build trust with educational content",
      "Dominate local insurance searches",
      "Stay compliant with industry regulations",
      "Differentiate from competing agents",
      "Reduce dependence on purchased leads"
    ],
    faqs: [
      {
        question: "How do you handle insurance advertising compliance?",
        answer: "We stay current with insurance advertising regulations and Google's financial services policies. All ad copy, landing pages, and claims are reviewed for compliance. We work within carrier guidelines and state insurance department requirements."
      },
      {
        question: "Can you generate leads for specific insurance types?",
        answer: "Yes, we create targeted campaigns for specific products—auto, home, life, health, commercial, etc. Each product has different search patterns and audience targeting strategies."
      },
      {
        question: "How much does an insurance agent website cost?",
        answer: "Insurance agent websites typically range from $2,000 to $6,000 depending on features, carrier integrations, and quote functionality. We provide detailed quotes based on your specific needs."
      },
      {
        question: "How do you generate quality leads, not just quote shoppers?",
        answer: "We target keywords indicating serious buying intent, use qualifying questions in lead forms, and focus on building trust through content before pushing for quotes. This attracts people ready to buy, not just comparison shopping."
      }
    ],
    ctaText: "Get Insurance Marketing Quote"
  },
  "luxury-brands": {
    slug: "luxury-brands",
    title: "Luxury Brands",
    tagline: "Premium Digital Experiences for Luxury & High-End Brands",
    description:
      "Fraga Technology creates sophisticated digital experiences for luxury brands, premium products, and high-end services. We understand that luxury marketing requires a different approach—one that emphasizes exclusivity, craftsmanship storytelling, and aspirational positioning rather than discount-driven tactics. Our luxury brand services include bespoke website development, premium content creation, and targeted campaigns reaching affluent audiences.",
    metaTitle: "Luxury Brand Website Development & Digital Marketing | Fraga Technology",
    metaDescription:
      "Luxury brand website development and premium digital marketing. Bespoke designs, affluent audience targeting, brand storytelling. Call +91 9235000195",
    keywords: [
      "luxury brand website development",
      "luxury digital marketing",
      "premium brand website design",
      "high-end brand marketing",
      "luxury ecommerce development",
      "affluent audience marketing",
      "luxury brand storytelling",
      "premium product marketing"
    ],
    heroText:
      "We create digital experiences worthy of luxury brands—where every pixel reflects the craftsmanship and exclusivity your brand represents. From bespoke website development to targeted campaigns reaching affluent audiences, we help premium brands maintain their prestige while driving qualified engagement.",
    challenges: [
      "Maintaining brand prestige in digital environments",
      "Reaching affluent audiences without mass-market tactics",
      "Balancing exclusivity with accessibility",
      "Creating digital experiences matching physical brand quality",
      "Storytelling that conveys heritage and craftsmanship",
      "Competing for attention without discounting brand value"
    ],
    services: [
      {
        title: "Bespoke Website Development",
        description: "Custom-crafted websites with meticulous attention to typography, spacing, imagery, and interaction design. Every detail reflects your brand's premium positioning."
      },
      {
        title: "Luxury E-commerce",
        description: "High-end online shopping experiences with premium product presentation, white-glove checkout flows, and VIP customer account features."
      },
      {
        title: "Brand Storytelling",
        description: "Compelling narratives around heritage, craftsmanship, and brand values. Content that evokes emotion and aspiration rather than just features."
      },
      {
        title: "Affluent Audience Targeting",
        description: "Digital advertising reaching high-net-worth individuals through premium placements, contextual targeting, and affluent audience segments."
      },
      {
        title: "Visual Content Creation",
        description: "Art direction and visual content strategy maintaining brand consistency across digital touchpoints. Photography guidelines and asset management."
      },
      {
        title: "Exclusive Launch Campaigns",
        description: "Product launch campaigns creating anticipation and exclusivity. Limited availability messaging and VIP early access programs."
      }
    ],
    benefits: [
      "Digital presence matching your physical brand experience",
      "Reach affluent audiences with precision targeting",
      "Tell your brand story with sophistication",
      "Maintain exclusivity while expanding reach",
      "Create aspirational digital experiences",
      "Drive qualified engagement, not mass traffic"
    ],
    faqs: [
      {
        question: "How do you maintain luxury positioning online?",
        answer: "We focus on quality over quantity—exceptional design, premium imagery, sophisticated copywriting, and exclusive offers rather than discounts. Every touchpoint reinforces brand prestige."
      },
      {
        question: "How do you reach affluent audiences digitally?",
        answer: "We use premium ad placements, affluent audience data segments, contextual targeting on luxury publications, and platforms where high-net-worth individuals spend time. No mass-market tactics."
      },
      {
        question: "What makes luxury website development different?",
        answer: "Luxury websites require meticulous attention to every detail—typography, white space, image quality, loading transitions, micro-interactions. We obsess over details that create an elevated experience."
      },
      {
        question: "How much does a luxury brand website cost?",
        answer: "Luxury brand websites typically start at $10,000 and can exceed $50,000 for complex e-commerce with custom features. The investment reflects the attention to detail and custom craftsmanship required."
      }
    ],
    ctaText: "Discuss Luxury Brand Strategy"
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
