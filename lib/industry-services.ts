export interface IndustryService {
  slug: string
  title: string
  industry: string
  service: string
  tagline: string
  description: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  heroText: string
  painPoints: { title: string; description: string }[]
  solutions: { title: string; description: string }[]
  features: { title: string; description: string }[]
  faqs: { question: string; answer: string }[]
  ctaText: string
}

export const industryServices: Record<string, IndustryService> = {
  "web-development-real-estate": {
    slug: "web-development-real-estate",
    title: "Web Development for Real Estate",
    industry: "Real Estate",
    service: "Web Development",
    tagline: "Professional Real Estate Websites | Property Listing Platforms | Lead Generation",
    description:
      "Fraga Technology specializes in building high-converting real estate websites and property listing platforms that showcase properties beautifully and generate qualified leads. Our solutions help real estate agents, brokers, and developers establish a strong online presence.",
    metaTitle: "Web Development for Real Estate | Property Listing Websites | Fraga Technology",
    metaDescription:
      "Expert real estate website development. Property listing platforms, agent portfolios, lead generation. Increase property sales with professional websites.",
    keywords: [
      "real estate website development",
      "property listing website",
      "real estate website builder",
      "property portal development",
      "real estate lead generation",
      "MLS website development",
      "real estate CRM integration",
      "property showcase website",
    ],
    heroText:
      "Real estate professionals choose Fraga Technology to build beautiful, conversion-focused websites that showcase properties and generate qualified leads. Our real estate websites feature advanced search, virtual tours, property filtering, and integrated CRM systems.",
    painPoints: [
      {
        title: "Outdated Website Design",
        description:
          "Old websites don't attract serious buyers and hurt your credibility. Modern, professional design is essential.",
      },
      {
        title: "Poor Lead Capture",
        description:
          "Many real estate websites fail to convert visitors into leads. We optimize for maximum lead generation.",
      },
      {
        title: "Difficult Property Management",
        description:
          "Managing listings manually is time-consuming. Our CMS integrations streamline property updates.",
      },
      {
        title: "Limited Mobile Experience",
        description:
          "With most property searches on mobile, a responsive site is crucial for capturing busy buyers.",
      },
    ],
    solutions: [
      {
        title: "Advanced Property Search",
        description: "Intuitive filtering by price, location, size, amenities helping buyers find their perfect property.",
      },
      {
        title: "Virtual Tours & 3D Visualization",
        description:
          "Interactive property tours, drone photography integration, and 3D floor plans to showcase properties.",
      },
      {
        title: "Lead Management System",
        description:
          "Automated lead capture, CRM integration, and follow-up workflows to convert inquiries into sales.",
      },
      {
        title: "Responsive Mobile Design",
        description:
          "Beautiful property websites optimized for smartphones, tablets, and desktops for full accessibility.",
      },
      {
        title: "SEO for Real Estate",
        description:
          "Optimization for local real estate keywords and property-specific searches to attract qualified buyers.",
      },
      {
        title: "Agent Portfolios",
        description:
          "Showcase agent listings, testimonials, and expertise to build trust with potential clients.",
      },
    ],
    features: [
      {
        title: "Property Management Dashboard",
        description: "Easy-to-use admin panel for agents to add, edit, and manage property listings.",
      },
      {
        title: "Advanced Filtering System",
        description: "Buyers can filter properties by location, price, bedrooms, amenities, and more.",
      },
      {
        title: "Virtual Tour Integration",
        description: "Support for Matterport tours, 360-degree photos, and video walkthroughs.",
      },
      {
        title: "CRM Integration",
        description: "Connect with real estate CRMs like Follow Up Boss, Zoho CRM, or custom systems.",
      },
      {
        title: "Mortgage Calculator",
        description: "Interactive tools helping buyers understand financing options and affordability.",
      },
      {
        title: "Neighborhood Information",
        description:
          "Schools, amenities, crime rates, and lifestyle information to help buyers make decisions.",
      },
    ],
    faqs: [
      {
        question: "What features do real estate websites need?",
        answer:
          "Key features include property search filters, virtual tours, agent profiles, lead capture forms, mortgage calculators, and neighborhood information. Our real estate websites include all of these optimized for lead generation.",
      },
      {
        question: "How can I integrate my MLS data?",
        answer:
          "We can integrate your MLS data directly into your website for automatic updates. Properties sync from your MLS feed, saving manual data entry and keeping listings current.",
      },
      {
        question: "Can you add virtual tours?",
        answer:
          "Yes! We integrate Matterport 3D tours, YouTube video walkthroughs, 360-degree photos, and drone footage. Virtual tours increase buyer engagement and property viewings.",
      },
      {
        question: "How does lead capture work?",
        answer:
          "Visitors can request information, schedule tours, or get mortgage pre-qualification. These leads automatically go to your CRM for follow-up. We optimize forms for maximum conversion.",
      },
      {
        question: "Is your website mobile-friendly?",
        answer:
          "Absolutely. Over 70% of real estate searches happen on mobile. Our websites are fully responsive with touch-optimized interfaces for easy mobile browsing.",
      },
    ],
    ctaText: "Get Your Real Estate Website",
  },
  "web-development-healthcare": {
    slug: "web-development-healthcare",
    title: "Web Development for Healthcare",
    industry: "Healthcare",
    service: "Web Development",
    tagline: "Medical Practice Websites | Healthcare Portals | Patient Management Systems",
    description:
      "Fraga Technology builds HIPAA-compliant healthcare websites and patient management systems for hospitals, clinics, and individual practitioners. Our solutions focus on patient convenience, data security, and regulatory compliance.",
    metaTitle: "Web Development for Healthcare | Medical Practice Websites | Fraga Technology",
    metaDescription:
      "Healthcare website development with HIPAA compliance. Patient portals, appointment booking, medical records. Trusted by hospitals and clinics.",
    keywords: [
      "healthcare website development",
      "medical practice website",
      "patient portal development",
      "healthcare web application",
      "telemedicine platform",
      "HIPAA compliant website",
      "clinic management system",
      "appointment booking system",
    ],
    heroText:
      "Healthcare providers choose Fraga Technology for secure, patient-friendly websites and portals. Our healthcare solutions include appointment booking, patient records management, telemedicine capabilities, and complete HIPAA compliance.",
    painPoints: [
      {
        title: "Patient Data Security",
        description: "Healthcare data requires strict security and compliance measures. Mishandling patient data can have serious consequences.",
      },
      {
        title: "Administrative Burden",
        description:
          "Manual appointment scheduling and record management consume valuable clinical time that could be spent on patient care.",
      },
      {
        title: "Poor Patient Experience",
        description:
          "Outdated websites and cumbersome processes discourage patients from seeking care. Modern convenience is expected.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "HIPAA, GDPR, and other healthcare regulations require careful website design and data handling practices.",
      },
    ],
    solutions: [
      {
        title: "HIPAA-Compliant Architecture",
        description:
          "Secure data encryption, access controls, and audit trails ensuring patient data protection and regulatory compliance.",
      },
      {
        title: "Patient Portal",
        description:
          "Secure patient access to medical records, test results, appointment history, and ability to request prescriptions.",
      },
      {
        title: "Online Appointment Booking",
        description:
          "Automated scheduling system that reduces administrative burden and improves patient convenience.",
      },
      {
        title: "Telemedicine Integration",
        description:
          "Secure video consultations, chat capabilities, and remote patient monitoring integrated into the patient portal.",
      },
      {
        title: "Staff Management System",
        description:
          "Manage doctors, nurses, and staff schedules, credentials, and availability for efficient operations.",
      },
      {
        title: "Prescription Management",
        description:
          "Digital prescription creation, transmission to pharmacies, and patient prescription history tracking.",
      },
    ],
    features: [
      {
        title: "Secure Patient Login",
        description: "Two-factor authentication and encryption for secure access to patient portals and records.",
      },
      {
        title: "Medical Records Management",
        description: "Digital storage and organization of patient medical histories, test results, and treatment plans.",
      },
      {
        title: "Appointment Reminders",
        description: "Automated SMS and email reminders reducing no-shows and improving patient attendance.",
      },
      {
        title: "Insurance Integration",
        description:
          "Verification of insurance coverage, deductibles, and co-pays to streamline billing processes.",
      },
      {
        title: "Prescription Tracking",
        description: "Track prescribed medications, refills, and pharmacy interactions for patient safety.",
      },
      {
        title: "Doctor Reviews & Ratings",
        description:
          "Patient testimonials and ratings building trust and reputation while providing feedback.",
      },
    ],
    faqs: [
      {
        question: "Is your website HIPAA compliant?",
        answer:
          "Yes. Our healthcare websites are built with HIPAA compliance as a core requirement. We implement encryption, secure authentication, audit logging, and other security measures to protect patient data.",
      },
      {
        question: "Can you integrate with our existing EHR system?",
        answer:
          "Yes! We can integrate with most major EHR systems (Epic, Cerner, Athena, etc.) or create a standalone HIPAA-compliant solution.",
      },
      {
        question: "How do telemedicine consultations work?",
        answer:
          "Our platform includes secure video conferencing, allowing doctors to conduct virtual consultations. Patients can access consultations through the patient portal with ease.",
      },
      {
        question: "What about data privacy and security?",
        answer:
          "We use SSL encryption, regular security audits, secure authentication, role-based access control, and encrypted backups. Patient data is treated with the highest security standards.",
      },
      {
        question: "Can patients message their doctors?",
        answer:
          "Yes, our patient portal includes secure messaging allowing patients to ask non-urgent questions and doctors to respond, improving communication.",
      },
    ],
    ctaText: "Build Your Healthcare Website",
  },
  "seo-law-firms": {
    slug: "seo-law-firms",
    title: "SEO for Law Firms",
    industry: "Legal Services",
    service: "SEO Services",
    tagline: "Law Firm SEO | Legal Services Marketing | Attorney Lead Generation",
    description:
      "Fraga Technology specializes in SEO for law firms, helping attorneys attract high-value clients through organic search. Our legal SEO strategies target clients searching for your specific practice areas and geographic locations.",
    metaTitle: "SEO for Law Firms | Legal Services Marketing | Fraga Technology",
    metaDescription:
      "Law firm SEO specialists. Attract clients searching for legal services. Location-based targeting, practice area optimization, and attorney reputation management.",
    keywords: [
      "SEO for law firms",
      "legal services SEO",
      "attorney marketing",
      "law firm lead generation",
      "personal injury lawyer SEO",
      "family law SEO",
      "criminal defense SEO",
      "lawyer local SEO",
    ],
    heroText:
      "Law firms partner with Fraga Technology to dominate search results for their practice areas and locations. Our legal SEO strategies focus on attracting high-intent clients searching for specific legal services in your geographic area.",
    painPoints: [
      {
        title: "Low Client Inquiries",
        description:
          "Without strong SEO, potential clients go to competitors who rank higher. Most legal searches happen on Google.",
      },
      {
        title: "Local Market Dominance Needed",
        description:
          "Law firms serve specific geographic areas. You need to dominate local search for your practice areas.",
      },
      {
        title: "Content Expertise Required",
        description:
          "Demonstrating legal expertise through content builds trust, but many law firms lack resources for consistent publishing.",
      },
      {
        title: "Reputation Management",
        description:
          "Online reviews and reputation significantly impact client decisions. You need active management and response.",
      },
    ],
    solutions: [
      {
        title: "Local SEO Optimization",
        description:
          "Optimize your firm for 'lawyer near me', '[Practice Area] lawyer [City]' and local search results.",
      },
      {
        title: "Practice Area Targeting",
        description:
          "Create SEO-optimized content for each practice area (personal injury, family law, criminal defense, etc).",
      },
      {
        title: "Attorney Bios & Expertise",
        description:
          "Showcase attorney credentials, experience, and achievements to build trust and authority.",
      },
      {
        title: "Blog & Content Strategy",
        description:
          "Publish authoritative legal content, case studies, and FAQs that answer client questions and improve rankings.",
      },
      {
        title: "Reviews & Reputation",
        description:
          "Manage Google Reviews, Avvo ratings, and online reputation to build client trust and SEO signals.",
      },
      {
        title: "Technical SEO",
        description:
          "Ensure your website is technically optimized for search engines and provides excellent user experience.",
      },
    ],
    features: [
      {
        title: "Local Citation Building",
        description: "Ensure your firm appears in legal directories, Avvo, and local business directories.",
      },
      {
        title: "Practice Area Pages",
        description: "Dedicated, optimized pages for each practice area targeting specific legal keywords.",
      },
      {
        title: "Client Testimonials",
        description: "Showcase successful cases and client testimonials building trust with prospective clients.",
      },
      {
        title: "Monthly Reporting",
        description:
          "Detailed monthly reports showing ranking improvements, traffic growth, and lead generation metrics.",
      },
      {
        title: "Competitive Analysis",
        description: "Track competitor rankings and SEO strategies to maintain competitive advantage.",
      },
      {
        title: "Lead Tracking",
        description: "Monitor which keywords and pages generate the most inquiries for ROI analysis.",
      },
    ],
    faqs: [
      {
        question: "How long does law firm SEO take to show results?",
        answer:
          "Local SEO results typically appear in 2-3 months, while competitive keywords may take 4-6 months. We focus on sustainable, long-term rankings rather than quick fixes.",
      },
      {
        question: "What practice areas do you have experience with?",
        answer:
          "We have experience optimizing for personal injury, family law, criminal defense, DUI, bankruptcy, employment law, and more. Each practice area has unique SEO opportunities.",
      },
      {
        question: "How do you generate leads for law firms?",
        answer:
          "We target high-intent keywords (people actively searching for your legal services), optimize for local search, build your online reputation, and ensure your website converts visitors into inquiries.",
      },
      {
        question: "Can you improve my Google Reviews rating?",
        answer:
          "We help you strategically request reviews from satisfied clients and respond professionally to all reviews, building your reputation and SEO rankings.",
      },
      {
        question: "Do you handle attorney bios and credentials?",
        answer:
          "Yes, we create compelling attorney bios highlighting credentials, experience, and achievements. We ensure proper Schema markup for attorney structured data.",
      },
    ],
    ctaText: "Get Law Firm SEO Strategy",
  },
  "ecommerce-shopify": {
    slug: "ecommerce-shopify",
    title: "Shopify E-Commerce Development",
    industry: "E-Commerce",
    service: "E-Commerce Development",
    tagline: "Professional Shopify Store Setup | E-Commerce Website Development | Online Sales Growth",
    description:
      "Fraga Technology builds high-converting Shopify stores that turn visitors into paying customers. Our e-commerce expertise includes store setup, payment integration, product optimization, and SEO.",
    metaTitle: "Shopify Store Development | E-Commerce Website Building | Fraga Technology",
    metaDescription:
      "Expert Shopify development for your online store. Setup, customization, payment integration, and sales optimization. Start selling online today.",
    keywords: [
      "Shopify store development",
      "ecommerce website builder",
      "Shopify expert",
      "online store development",
      "Shopify customization",
      "Shopify theme development",
      "ecommerce SEO",
      "Shopify apps integration",
    ],
    heroText:
      "E-commerce businesses partner with Fraga Technology to build beautiful, converting Shopify stores. We handle everything from store setup and product pages to payment integration and marketing optimization.",
    painPoints: [
      {
        title: "Poor Store Design",
        description:
          "Generic Shopify templates don't stand out. Custom design is essential for brand differentiation and conversions.",
      },
      {
        title: "Low Conversion Rates",
        description:
          "Many e-commerce stores fail to convert browsers into buyers. Strategic UX and optimization can significantly boost sales.",
      },
      {
        title: "Limited Product Discovery",
        description:
          "Poor categorization and search functionality make it hard for customers to find products they want.",
      },
      {
        title: "Missing Mobile Optimization",
        description:
          "With 60%+ mobile traffic, slow mobile stores lose sales. Mobile performance is critical for e-commerce.",
      },
    ],
    solutions: [
      {
        title: "Custom Shopify Store Design",
        description:
          "Beautiful, brand-aligned Shopify stores built for conversion. Every element designed to guide customers to purchase.",
      },
      {
        title: "Payment Gateway Integration",
        description:
          "Seamless integration with Stripe, PayPal, Apple Pay, Google Pay, and international payment methods.",
      },
      {
        title: "Product Page Optimization",
        description:
          "High-converting product pages with clear descriptions, professional photography, reviews, and strategic CTAs.",
      },
      {
        title: "Shopping Cart Optimization",
        description:
          "Reduce cart abandonment with simplified checkout, multiple payment options, and guest checkout capabilities.",
      },
      {
        title: "Inventory Management",
        description:
          "Automated inventory tracking, stock alerts, and integration with your fulfillment systems.",
      },
      {
        title: "E-Commerce SEO",
        description:
          "Optimize for product keywords, implement Schema markup, and improve visibility in search results.",
      },
    ],
    features: [
      {
        title: "Product Filters & Search",
        description: "Advanced filtering by price, size, color, rating helping customers quickly find what they want.",
      },
      {
        title: "Customer Reviews",
        description: "Display product reviews and ratings building trust and providing social proof.",
      },
      {
        title: "Email Marketing",
        description: "Abandoned cart recovery, welcome series, and promotional campaigns to boost repeat purchases.",
      },
      {
        title: "Analytics Integration",
        description: "Track visitor behavior, conversion paths, and sales metrics to identify optimization opportunities.",
      },
      {
        title: "App Integrations",
        description:
          "Connect with Zapier, Mailchimp, Klaviyo, and hundreds of apps to automate your business.",
      },
      {
        title: "Shipping Configuration",
        description: "Multiple shipping zones, rates, and carriers. Support for local pickup and digital products.",
      },
    ],
    faqs: [
      {
        question: "Can you migrate my store to Shopify?",
        answer:
          "Yes! We regularly migrate stores from WooCommerce, BigCommerce, and other platforms. We preserve your product data, customer history, and SEO rankings during migration.",
      },
      {
        question: "What payment methods do you support?",
        answer:
          "We integrate with all major payment gateways: Stripe, PayPal, Square, Razorpay, and international payment methods for global customers.",
      },
      {
        question: "How do you optimize for conversions?",
        answer:
          "We optimize product pages, simplify checkout, add trust signals (reviews, security badges), implement exit-intent offers, and analyze visitor behavior to improve sales.",
      },
      {
        question: "Can you help with marketing?",
        answer:
          "Yes, we set up email marketing, Google Shopping, Facebook Pixel, and provide recommendations for Google Ads and social media strategies.",
      },
      {
        question: "What about mobile optimization?",
        answer:
          "Our Shopify stores are fully optimized for mobile with fast loading times, touch-friendly interfaces, and mobile-first design.",
      },
    ],
    ctaText: "Launch Your Shopify Store",
  },
  "web-development-saas": {
    slug: "web-development-saas",
    title: "SaaS Platform Development",
    industry: "SaaS & Technology",
    service: "Web Development",
    tagline: "Scalable SaaS Application Development | Software-as-a-Service Platforms",
    description:
      "Fraga Technology builds scalable SaaS applications and platforms from concept to scale. Our expertise includes user dashboards, subscription management, API development, and cloud infrastructure.",
    metaTitle: "SaaS Platform Development | Software-as-a-Service Development | Fraga Technology",
    metaDescription:
      "Expert SaaS development for startups and enterprises. Scalable platforms with subscription billing, user management, and analytics.",
    keywords: [
      "SaaS development",
      "SaaS platform development",
      "subscription software development",
      "web application development",
      "cloud application development",
      "multi-tenant SaaS",
      "SaaS MVP development",
      "SaaS architecture",
    ],
    heroText:
      "SaaS founders and entrepreneurs choose Fraga Technology to build scalable, user-friendly platforms. Our SaaS expertise includes architecture design, subscription management, user onboarding, and growth strategies.",
    painPoints: [
      {
        title: "Complex Architecture Requirements",
        description:
          "SaaS applications require scalable infrastructure, multi-tenancy, security, and reliability. Building this correctly is crucial.",
      },
      {
        title: "Subscription Billing",
        description:
          "Implementing recurring billing, payment processing, invoicing, and financial reporting is complex and error-prone.",
      },
      {
        title: "User Onboarding",
        description:
          "Poor onboarding leads to high churn. You need smooth signup, setup, and initial value delivery.",
      },
      {
        title: "Scaling Challenges",
        description:
          "As users grow, your platform must handle increased load, maintain performance, and ensure uptime.",
      },
    ],
    solutions: [
      {
        title: "Scalable Architecture",
        description:
          "Cloud-native design using AWS, Google Cloud, or Azure for automatic scaling, reliability, and performance.",
      },
      {
        title: "Multi-Tenant Platform",
        description:
          "Secure, isolated customer environments with data privacy and customization capabilities.",
      },
      {
        title: "Subscription Billing",
        description:
          "Integrated billing with Stripe or Paddle including metering, proration, and financial reporting.",
      },
      {
        title: "User Dashboard",
        description:
          "Intuitive dashboards showing customers their usage, accounts, billing, and key metrics.",
      },
      {
        title: "API Development",
        description:
          "RESTful or GraphQL APIs enabling integrations and allowing customers to build on your platform.",
      },
      {
        title: "Analytics & Reporting",
        description:
          "Track user behavior, feature usage, and revenue metrics to identify growth opportunities.",
      },
    ],
    features: [
      {
        title: "Role-Based Access Control",
        description: "Granular permissions allowing customers to manage team access and user roles.",
      },
      {
        title: "Data Security",
        description:
          "Encryption at rest and in transit, regular security audits, compliance with SOC2, GDPR, and other standards.",
      },
      {
        title: "API Rate Limiting",
        description: "Protect your infrastructure while allowing customers fair usage of APIs.",
      },
      {
        title: "Webhook Support",
        description: "Real-time event notifications enabling customers to integrate with their systems.",
      },
      {
        title: "Usage Analytics",
        description:
          "Track feature adoption and usage metrics to guide product development and customer success.",
      },
      {
        title: "Uptime Monitoring",
        description: "99.9% uptime SLA with status pages and incident notifications.",
      },
    ],
    faqs: [
      {
        question: "Can you build an MVP quickly?",
        answer:
          "Yes! We specialize in SaaS MVPs. We can build functional prototypes in 4-8 weeks, allowing you to validate your idea and attract early users.",
      },
      {
        question: "How do you handle subscription billing?",
        answer:
          "We integrate with Stripe or Paddle handling monthly/annual billing, usage-based pricing, invoicing, and dunning management automatically.",
      },
      {
        question: "What about security and compliance?",
        answer:
          "We build with security first, implementing encryption, authentication, audit logging, and helping you achieve SOC2 and GDPR compliance.",
      },
      {
        question: "Can you help with deployment and DevOps?",
        answer:
          "Yes, we handle cloud deployment, CI/CD pipelines, monitoring, and infrastructure management so you can focus on product development.",
      },
      {
        question: "What's included in ongoing support?",
        answer:
          "Performance monitoring, security updates, bug fixes, and performance optimization. We're here to support your growth.",
      },
    ],
    ctaText: "Build Your SaaS Platform",
  },
  "web-development-marketing-agencies": {
    slug: "web-development-marketing-agencies",
    title: "Web Development for Marketing Agencies",
    industry: "Marketing Agencies",
    service: "Web Development",
    tagline: "White-Label Website Development for Agencies | Agency Partner Solutions",
    description:
      "Fraga Technology provides white-label website development services for marketing agencies looking to expand their service offerings. We build custom websites under your brand while you focus on client relationships and strategy.",
    metaTitle: "White-Label Web Development for Agencies | Fraga Technology",
    metaDescription:
      "White-label website development for marketing agencies. Expand your services without hiring developers. Reliable agency partner.",
    keywords: [
      "white label web development",
      "agency web development partner",
      "white label website development",
      "agency outsourcing partner",
      "web development for agencies",
      "scalable agency solutions",
      "agency website development",
    ],
    heroText:
      "Marketing agencies partner with Fraga Technology to deliver exceptional web development without maintaining in-house technical teams. We handle design, development, and deployment while you maintain client relationships and brand presence.",
    painPoints: [
      {
        title: "Client Requests Exceeding Capacity",
        description:
          "When clients need custom websites, you're forced to decline or hire contractors, straining resources.",
      },
      {
        title: "Hiring & Training Overhead",
        description:
          "Maintaining full-time developers is expensive and complex. Skill gaps lead to quality issues.",
      },
      {
        title: "Project Backlogs",
        description:
          "Limited development capacity means delayed projects, unhappy clients, and lost opportunities.",
      },
      {
        title: "Quality Control",
        description:
          "Freelancers lack consistency. You need reliable partners who match your quality standards.",
      },
    ],
    solutions: [
      {
        title: "White-Label Development",
        description:
          "Custom websites built under your brand name. Seamless handoff with documentation and training.",
      },
      {
        title: "Scalable Capacity",
        description:
          "Expand or reduce development workload based on your client needs without permanent hires.",
      },
      {
        title: "Quality Assurance",
        description:
          "Every project undergoes rigorous testing and QA before delivery, maintaining your reputation.",
      },
      {
        title: "Fast Turnaround",
        description:
          "Standard websites delivered in 2-3 weeks, complex projects in 4-6 weeks.",
      },
      {
        title: "Branded Deliverables",
        description:
          "Estimates, proposals, and documentation all branded with your agency name.",
      },
      {
        title: "Ongoing Support",
        description:
          "Post-launch support and maintenance options available for long-term client success.",
      },
    ],
    features: [
      {
        title: "Custom Design",
        description: "Tailored designs matching your brand and client requirements.",
      },
      {
        title: "Responsive Development",
        description: "Mobile-first design ensuring perfect functionality across all devices.",
      },
      {
        title: "SEO-Ready",
        description: "Built with SEO best practices for improved search visibility.",
      },
      {
        title: "CMS Integration",
        description: "Content management systems allowing clients to update their sites independently.",
      },
      {
        title: "Performance Optimization",
        description: "Fast-loading sites with optimized images and efficient code.",
      },
      {
        title: "Security",
        description: "SSL certificates, secure hosting, and regular security updates included.",
      },
    ],
    faqs: [
      {
        question: "How does white-label partnership work?",
        answer:
          "You maintain the client relationship. We handle all technical work behind the scenes. Deliverables are branded with your agency name. Your clients never know we exist.",
      },
      {
        question: "What project types do you handle?",
        answer:
          "Corporate websites, portfolios, small business sites, landing pages, and e-commerce stores. We have expertise across all common web project types.",
      },
      {
        question: "What's your typical turnaround time?",
        answer:
          "Standard websites: 2-3 weeks. Complex projects: 4-6 weeks. Expedited timelines available at premium rates.",
      },
      {
        question: "Do you sign NDAs?",
        answer:
          "Yes, we sign comprehensive NDAs protecting your client relationships and confidential information.",
      },
      {
        question: "Can you handle rush projects?",
        answer:
          "Yes, we can accelerate timelines for rush projects at premium rates. Contact us to discuss your timeline.",
      },
    ],
    ctaText: "Become Our Agency Partner",
  },
  "web-development-construction": {
    slug: "web-development-construction",
    title: "Web Development for Construction Companies",
    industry: "Construction",
    service: "Web Development",
    tagline: "Professional Contractor Websites | Project Portfolio Sites | Lead Generation",
    description:
      "Fraga Technology builds professional websites for construction companies, contractors, and builders. Our construction websites showcase project work, generate qualified leads, and establish authority in competitive markets.",
    metaTitle: "Construction Company Website Development | Fraga Technology",
    metaDescription:
      "Professional contractor website development. Project portfolios, lead generation, local SEO for construction companies.",
    keywords: [
      "construction company website",
      "contractor website development",
      "construction website design",
      "home builder website",
      "contractor portfolio website",
      "construction lead generation",
      "contractor SEO",
      "construction business website",
    ],
    heroText:
      "Construction companies choose Fraga Technology to build professional websites that showcase their work and generate qualified project leads. Our construction websites help contractors win more bids and establish credibility with potential clients.",
    painPoints: [
      {
        title: "No Online Presence",
        description:
          "Many contractors rely solely on referrals. An outdated or non-existent website hurts credibility.",
      },
      {
        title: "Lost Leads",
        description:
          "Potential clients find competitors online while you're invisible. You're losing projects you don't know about.",
      },
      {
        title: "Poor Project Showcase",
        description:
          "Your best work isn't being shown. Project portfolios are essential for winning competitive bids.",
      },
      {
        title: "Competitive Disadvantage",
        description:
          "Competitors with better websites appear more professional and trustworthy to potential clients.",
      },
    ],
    solutions: [
      {
        title: "Professional Project Gallery",
        description:
          "Beautiful before/after galleries, project case studies, and video walkthroughs showcasing your best work.",
      },
      {
        title: "Lead Capture System",
        description:
          "Optimized contact forms and quote request systems capturing interested prospects automatically.",
      },
      {
        title: "Service Pages",
        description:
          "Detailed service pages explaining your expertise, process, and capabilities to potential clients.",
      },
      {
        title: "Testimonials & Reviews",
        description:
          "Social proof from satisfied clients building trust and credibility with prospects.",
      },
      {
        title: "Mobile Optimization",
        description:
          "Mobile-friendly design for contractors and clients reviewing your work from job sites.",
      },
      {
        title: "SEO Foundation",
        description:
          "Built with local SEO best practices to help you rank for contractor searches in your area.",
      },
    ],
    features: [
      {
        title: "Project Portfolio Management",
        description: "Easy-to-update project galleries with photos, videos, and project details.",
      },
      {
        title: "Service Pages",
        description: "Dedicated pages for each service (roofing, plumbing, electrical, etc.) targeting specific searches.",
      },
      {
        title: "Before/After Galleries",
        description: "Stunning before/after sliders showcasing transformation and quality of work.",
      },
      {
        title: "Testimonial Section",
        description: "Client testimonials and Google reviews integrated into your site building trust.",
      },
      {
        title: "Contact Forms",
        description: "Multiple contact options (phone, email, quote request) capturing leads effectively.",
      },
      {
        title: "Google Business Integration",
        description: "Google Business Profile integration with map and review display.",
      },
    ],
    faqs: [
      {
        question: "How should we showcase our projects?",
        answer:
          "Professional photo galleries with before/after sliders, detailed project descriptions, client testimonials, and results achieved. This builds trust and demonstrates quality.",
      },
      {
        question: "Can you help with SEO for contractors?",
        answer:
          "Yes, our websites are built with local SEO foundation. Your site will be optimized for 'contractor near me' and service-specific searches in your area.",
      },
      {
        question: "How much does a contractor website cost?",
        answer:
          "Construction websites range from $2,500 for basic sites to $7,000+ for advanced portfolio sites. Investment depends on complexity and features needed.",
      },
      {
        question: "Can you help us get Google reviews?",
        answer:
          "We implement automated review request systems that reach satisfied clients at the right time, helping you build a strong online reputation.",
      },
      {
        question: "Is the website easy to update?",
        answer:
          "Yes, your website includes a simple admin panel where you can add new projects, update services, and manage content without technical knowledge.",
      },
    ],
    ctaText: "Get Your Contractor Website",
  },
  "web-development-insurance": {
    slug: "web-development-insurance",
    title: "Web Development for Insurance Agents & Agencies",
    industry: "Insurance",
    service: "Web Development",
    tagline: "Professional Insurance Agent Websites | Lead Generation Platform",
    description:
      "Fraga Technology builds professional websites for insurance agents and agencies. Our insurance websites help agents generate qualified leads, build client trust, and establish authority in competitive insurance markets.",
    metaTitle: "Insurance Agent Website Development | Fraga Technology",
    metaDescription:
      "Professional insurance agent website development. Lead generation, compliance-ready design, agent portfolios.",
    keywords: [
      "insurance agent website",
      "insurance agency website development",
      "insurance broker website",
      "insurance lead generation website",
      "insurance website design",
      "agent portfolio website",
      "insurance professional website",
      "agency website development",
    ],
    heroText:
      "Insurance agents and agencies trust Fraga Technology to build professional websites that generate qualified leads while maintaining industry compliance. Our insurance websites help agents stand out and win more clients.",
    painPoints: [
      {
        title: "Low Online Visibility",
        description:
          "Many agents are invisible online while competitors dominate search results and attract clients.",
      },
      {
        title: "Trust Issues",
        description:
          "Potential clients are skeptical of insurance sales. Your website must build credibility and trust.",
      },
      {
        title: "Lead Generation",
        description:
          "You need a steady stream of qualified leads, not just quote shoppers. Your website should filter and qualify.",
      },
      {
        title: "Compliance Concerns",
        description:
          "Insurance advertising is heavily regulated. Your website must comply with all rules and carrier requirements.",
      },
    ],
    solutions: [
      {
        title: "Agent Portfolio",
        description:
          "Professional agent profiles, credentials, testimonials, and specializations helping clients choose to work with you.",
      },
      {
        title: "Quote Request System",
        description:
          "Smart quote forms that qualify leads and route them to appropriate agents or products.",
      },
      {
        title: "Educational Content",
        description:
          "Guides and articles explaining insurance concepts, helping clients understand coverage and make informed decisions.",
      },
      {
        title: "Compliance-Ready Design",
        description:
          "Websites built with insurance advertising compliance in mind, following Google and carrier guidelines.",
      },
      {
        title: "Product Pages",
        description:
          "Dedicated pages for each insurance product (auto, home, life, health, commercial) with clear benefits.",
      },
      {
        title: "Contact Optimization",
        description:
          "Multiple contact methods optimized for lead capture without being pushy or non-compliant.",
      },
    ],
    features: [
      {
        title: "Agent Profiles",
        description: "Detailed agent bios, photos, credentials, specializations, and testimonials.",
      },
      {
        title: "Product Guides",
        description: "Educational content explaining coverage options and helping clients make decisions.",
      },
      {
        title: "Quote Request Forms",
        description: "Intelligent forms that gather necessary information and qualify leads effectively.",
      },
      {
        title: "Customer Testimonials",
        description: "Social proof from satisfied clients building trust and credibility.",
      },
      {
        title: "Compliance Certificates",
        description: "Display of licenses, certifications, and compliance badges building authority.",
      },
      {
        title: "Blog/News Section",
        description: "Update clients on industry news, policy changes, and insurance tips regularly.",
      },
    ],
    faqs: [
      {
        question: "How do you handle insurance advertising compliance?",
        answer:
          "Our websites are designed with insurance regulations in mind. We follow Google financial services policies, state insurance department rules, and carrier brand guidelines throughout.",
      },
      {
        question: "Can we target specific insurance products?",
        answer:
          "Yes, each insurance product (auto, home, life, health, commercial) gets dedicated pages with product-specific content and calls-to-action.",
      },
      {
        question: "How do you build trust on an insurance website?",
        answer:
          "Through agent profiles, client testimonials, educational content, transparency, clear contact information, and professional design that conveys credibility.",
      },
      {
        question: "What's included in quote request handling?",
        answer:
          "Quote forms can be customized per product, automatically route to specific agents, send confirmation emails, and integrate with your CRM for lead tracking.",
      },
      {
        question: "How much does an insurance agent website cost?",
        answer:
          "Insurance websites range from $2,000 for single-agent sites to $6,000+ for multi-agent agency websites with advanced features.",
      },
    ],
    ctaText: "Build Your Insurance Website",
  },
  "ecommerce-luxury-brands": {
    slug: "ecommerce-luxury-brands",
    title: "E-Commerce for Luxury Brands",
    industry: "Luxury Brands",
    service: "E-Commerce Development",
    tagline: "Bespoke Luxury E-Commerce Platforms | Premium Online Shopping Experiences",
    description:
      "Fraga Technology builds sophisticated e-commerce platforms for luxury brands and premium products. Our luxury e-commerce sites deliver white-glove experiences that reflect brand prestige while driving sales.",
    metaTitle: "Luxury E-Commerce Development | Premium Online Shopping | Fraga Technology",
    metaDescription:
      "Bespoke luxury e-commerce platforms for premium brands. VIP customer experiences, exclusive product launches, sophisticated design.",
    keywords: [
      "luxury ecommerce development",
      "luxury brand ecommerce",
      "premium ecommerce platform",
      "high-end online store",
      "luxury product ecommerce",
      "bespoke ecommerce",
      "exclusive product platform",
      "luxury shopping experience",
    ],
    heroText:
      "Luxury brands trust Fraga Technology to build e-commerce platforms that match their prestigious positioning. From exclusive product launches to VIP customer experiences, we create shopping platforms worthy of luxury brands.",
    painPoints: [
      {
        title: "Maintaining Brand Prestige Online",
        description:
          "Generic e-commerce platforms don't reflect luxury positioning. Your online experience must equal physical store quality.",
      },
      {
        title: "Reaching Affluent Customers",
        description:
          "Mass-market e-commerce tactics don't work for luxury. You need sophisticated, targeted approaches.",
      },
      {
        title: "Exclusivity vs. Accessibility",
        description:
          "Balancing exclusive brand perception with sufficient accessibility to reach your target market.",
      },
      {
        title: "Premium Product Showcase",
        description:
          "Your products deserve exceptional presentation with high-quality imagery, detailed descriptions, and storytelling.",
      },
    ],
    solutions: [
      {
        title: "Bespoke Platform Design",
        description:
          "Custom-crafted e-commerce platform with meticulous attention to every detail reflecting brand prestige.",
      },
      {
        title: "White-Glove Checkout",
        description:
          "Premium checkout experience with concierge support, gift wrapping options, and exclusive delivery methods.",
      },
      {
        title: "VIP Customer Accounts",
        description:
          "Exclusive access for premium customers with early product launches, special pricing, and personalized service.",
      },
      {
        title: "High-Quality Product Presentation",
        description:
          "360-degree product views, zoom capabilities, styling guides, and detailed craftsmanship narratives.",
      },
      {
        title: "Exclusive Launch Campaigns",
        description:
          "Limited availability messaging, VIP early access, and waitlist systems creating exclusivity and urgency.",
      },
      {
        title: "Personalization Engine",
        description:
          "Curated recommendations and personalized product suggestions based on customer preferences and purchase history.",
      },
    ],
    features: [
      {
        title: "Premium Product Galleries",
        description: "High-resolution images, 360-degree views, zoom capabilities, and video content.",
      },
      {
        title: "VIP Account Tiers",
        description: "Multi-tier VIP programs with exclusive access, pricing, and services.",
      },
      {
        title: "Luxury Packaging Options",
        description: "Premium gift wrapping, personalization, and exclusive packaging choices.",
      },
      {
        title: "Exclusive Product Launches",
        description: "Limited availability products, pre-order systems, and VIP early access.",
      },
      {
        title: "Concierge Support",
        description: "Premium customer service options including personal shopping assistance.",
      },
      {
        title: "Sophisticated Analytics",
        description: "Track luxury customer behavior, preferences, and lifetime value.",
      },
    ],
    faqs: [
      {
        question: "How do you maintain brand prestige in e-commerce?",
        answer:
          "Every element—design, copy, imagery, checkout experience—reflects luxury positioning. We avoid discounting, mass-market tactics, and anything that dilutes brand prestige.",
      },
      {
        question: "How do you reach affluent customers online?",
        answer:
          "Through premium ad placements, luxury publication partnerships, affluent audience targeting, and exclusive marketing channels where high-net-worth individuals spend time.",
      },
      {
        question: "Can you handle exclusive product launches?",
        answer:
          "Yes, we build limited availability systems, VIP early access programs, waitlist functionality, and exclusive launch campaigns that create anticipation.",
      },
      {
        question: "What about luxury product presentation?",
        answer:
          "We obsess over details—high-resolution photography, 360-degree views, zoom capabilities, detailed craftsmanship descriptions, and brand storytelling.",
      },
      {
        question: "How much does a luxury e-commerce platform cost?",
        answer:
          "Luxury platforms start at $15,000+ depending on complexity, integrations, and custom features. Investment reflects the bespoke nature of luxury development.",
      },
    ],
    ctaText: "Build Your Luxury Platform",
  },
}

export function getIndustryServiceBySlug(slug: string): IndustryService | undefined {
  return industryServices[slug]
}

export function getAllIndustryServiceSlugs(): string[] {
  return Object.keys(industryServices)
}

export function getAllIndustryServices(): IndustryService[] {
  return Object.values(industryServices)
}

export function getIndustryServicesNavItems(): Array<{ title: string; slug: string; href: string }> {
  return Object.values(industryServices).map((is) => ({
    title: `${is.title}`,
    slug: is.slug,
    href: `/industry-services/${is.slug}`,
  }))
}
