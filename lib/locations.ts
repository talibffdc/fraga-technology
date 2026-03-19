import { siteConfig } from "@/lib/site-config"

export interface LocationService {
  title: string
  description: string
}

export interface LocationData {
  slug: string
  title: string
  country: string
  tagline: string
  description: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  heroText: string
  whyChooseUs: string[]
  services: LocationService[]
  industries: string[]
  faqs: { question: string; answer: string }[]
  ctaText: string
}

export const locations: Record<string, LocationData> = {
  "india": {
    slug: "india",
    country: "India",
    title: "Web Development & Digital Marketing Company in India",
    tagline: "Your Trusted Technology Partner Across India",
    description:
      "Fraga Technology is a leading website development company in India offering end-to-end digital solutions including custom web development, mobile app development, SEO services, Google Ads management, and Meta Ads campaigns. Based in Kannauj, Uttar Pradesh, we serve clients across Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Pune, and all major Indian cities. Our team combines technical expertise with deep understanding of Indian business needs to deliver solutions that drive growth.",
    metaTitle: "Website Development Company India | Web Development Services | Fraga Technology",
    metaDescription:
      "Leading website development company in India. Custom websites, mobile apps, SEO & digital marketing for businesses across Delhi, Mumbai, Bangalore. Call +91 9235000195",
    keywords: [
      "website development company India",
      "web development company India",
      "best SEO company in India",
      "digital marketing agency India",
      "mobile app development company India",
      "web development services India",
      "affordable website development India",
      "custom web development company India",
      "IT company India",
      "software development company India"
    ],
    heroText:
      "As a premier website development company in India, we empower businesses across the nation with cutting-edge digital solutions. From startups in Bangalore to enterprises in Delhi, manufacturing companies in Gujarat to healthcare providers in Mumbai, our team delivers websites, mobile apps, and digital marketing campaigns that generate real business results. With competitive Indian pricing and world-class quality, we're your ideal technology partner.",
    whyChooseUs: [
      "Headquartered in India with deep understanding of local business landscape and consumer behavior",
      "Competitive pricing with transparent project quotes—no hidden costs or surprises",
      "Experienced team fluent in English and Hindi for seamless communication",
      "Proven track record with 150+ successful projects across diverse industries",
      "24/7 support availability aligned with Indian business hours",
      "Expertise in serving both Indian SMEs and international clients"
    ],
    services: [
      {
        title: "Website Development",
        description: "Custom business websites, corporate portals, ecommerce platforms, and web applications built with modern technologies. Starting from Rs 40,000 for business websites."
      },
      {
        title: "Mobile App Development",
        description: "Native iOS, Android, and cross-platform mobile applications for startups and enterprises. React Native and Flutter expertise for cost-effective multi-platform apps."
      },
      {
        title: "SEO Services",
        description: "Comprehensive search engine optimization for Indian businesses targeting local and national keywords. Local SEO, technical SEO, and content optimization."
      },
      {
        title: "Google Ads Management",
        description: "Strategic Google Ads campaigns targeting Indian audiences. Search ads, display advertising, and YouTube ads with Hindi and English targeting options."
      },
      {
        title: "Meta Ads Management",
        description: "Facebook and Instagram advertising campaigns optimized for Indian demographics. Lead generation, brand awareness, and ecommerce campaigns."
      },
      {
        title: "Social Media Marketing",
        description: "Social media management for Indian brands across Instagram, Facebook, LinkedIn, and Twitter. Content creation and community management."
      }
    ],
    industries: [
      "Real Estate & Property Development",
      "Healthcare & Hospitals",
      "Legal Services & Law Firms",
      "E-commerce & Retail",
      "Education & EdTech",
      "Manufacturing & Industrial",
      "Financial Services & Insurance",
      "Travel & Hospitality",
      "SaaS & Technology Startups"
    ],
    faqs: [
      {
        question: "What are your website development costs in India?",
        answer: "Our website development costs in India start from Rs 40,000 ($500) for basic business websites and range up to Rs 10,00,000+ ($12,000+) for complex enterprise solutions. We offer competitive Indian pricing without compromising on quality. Contact us for a detailed quote based on your specific requirements."
      },
      {
        question: "Do you work with clients across all Indian cities?",
        answer: "Yes, we work with clients across India including Delhi NCR, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, Jaipur, and all other cities. Our remote-first approach ensures seamless collaboration regardless of your location."
      },
      {
        question: "Can you handle projects in Hindi and regional languages?",
        answer: "Absolutely. Our team is fluent in Hindi and English. We can develop multilingual websites supporting Hindi, regional languages, and multiple Indian scripts. Our SEO services also cover Hindi and vernacular keyword optimization."
      },
      {
        question: "Do you provide ongoing support and maintenance?",
        answer: "Yes, we offer comprehensive maintenance packages starting from Rs 5,000/month including security updates, content changes, performance monitoring, and technical support. We understand Indian businesses need reliable, responsive support."
      },
      {
        question: "How do payments work for Indian clients?",
        answer: "We accept all Indian payment methods including bank transfers (NEFT/RTGS/IMPS), UPI, credit cards, and PayPal. We work on milestone-based payments with clear invoicing. GST-compliant invoices provided for all transactions."
      }
    ],
    ctaText: "Get Free Consultation"
  },
  "usa": {
    slug: "usa",
    country: "United States",
    title: "Web Development & Digital Marketing Agency USA",
    tagline: "India-Based Excellence for American Businesses",
    description:
      "Fraga Technology provides premium website development and digital marketing services to businesses across the United States. We offer the perfect combination of American work standards and competitive global pricing. Our team operates across US time zones to ensure responsive communication and timely project delivery. From Silicon Valley startups to New York enterprises, we deliver solutions that meet American business expectations.",
    metaTitle: "Web Development Company for US Businesses | Digital Marketing Agency | Fraga Technology",
    metaDescription:
      "Expert web development and digital marketing for US businesses. Quality American standards, competitive pricing. NYC, LA, Austin, Miami clients. Free consultation.",
    keywords: [
      "web development company USA",
      "website development for US businesses",
      "offshore web development USA",
      "digital marketing agency for US companies",
      "affordable web development United States",
      "Indian web development company for USA",
      "ecommerce development USA",
      "SEO services for American businesses"
    ],
    heroText:
      "American businesses choose Fraga Technology for world-class web development and digital marketing at competitive global rates. We understand US market dynamics, consumer behavior, and business expectations. Our team operates during US business hours (EST/PST) ensuring real-time collaboration. From San Francisco tech startups to Miami service businesses, we deliver results that drive American business growth.",
    whyChooseUs: [
      "US time zone alignment with team availability during EST and PST business hours",
      "40-60% cost savings compared to US-based agencies without quality compromise",
      "Native English communication and American business culture understanding",
      "Experience serving clients in NYC, LA, Austin, Miami, Seattle, and across the USA",
      "Proven expertise with US payment processors, compliance requirements, and integrations",
      "Same-day response guarantee for all client communications"
    ],
    services: [
      {
        title: "Website Development",
        description: "Modern, responsive websites built with React, Next.js, and enterprise technologies. ADA-compliant development, US hosting options, and American design aesthetics."
      },
      {
        title: "Ecommerce Development",
        description: "Full-featured online stores with US payment gateway integrations (Stripe, Square, PayPal). Shopify, WooCommerce, and custom ecommerce platforms."
      },
      {
        title: "Mobile App Development",
        description: "iOS and Android applications meeting Apple App Store and Google Play guidelines. US market launch support and app store optimization."
      },
      {
        title: "SEO Services",
        description: "Search engine optimization targeting US audiences and American search patterns. Local SEO for city-specific rankings and national SEO campaigns."
      },
      {
        title: "Google Ads Management",
        description: "PPC campaigns optimized for American consumers. Search ads, display advertising, and YouTube campaigns with US audience targeting."
      },
      {
        title: "Digital Strategy Consulting",
        description: "Comprehensive digital strategy for US market entry, growth, and optimization. Competitive analysis and market positioning guidance."
      }
    ],
    industries: [
      "Technology & SaaS Startups",
      "E-commerce & DTC Brands",
      "Healthcare & Medical",
      "Legal Services",
      "Real Estate",
      "Financial Services",
      "Professional Services",
      "Hospitality & Tourism",
      "Education & EdTech"
    ],
    faqs: [
      {
        question: "How do you handle time zone differences with US clients?",
        answer: "We maintain team availability during US business hours (9 AM - 6 PM EST/PST). Daily standups, real-time Slack communication, and scheduled calls ensure seamless collaboration. Many US clients find our responsiveness exceeds local agencies."
      },
      {
        question: "What are your rates compared to US agencies?",
        answer: "Our rates are typically 40-60% lower than US-based agencies. A project that costs $15,000-$20,000 with a US agency typically costs $7,000-$10,000 with us. You get the same quality output with significant cost savings."
      },
      {
        question: "Do you understand American business and consumer expectations?",
        answer: "Yes. We've worked with 50+ US clients across various industries. Our team understands American design preferences, UX expectations, compliance requirements (ADA, CCPA), and payment integrations specific to the US market."
      },
      {
        question: "How do payments work for US clients?",
        answer: "We accept wire transfers, PayPal, and Stripe payments in USD. We provide W-8BEN forms for tax documentation. Milestone-based payments with clear SOWs and contracts protect both parties."
      },
      {
        question: "Can you work with our existing US-based team?",
        answer: "Absolutely. We regularly collaborate with in-house teams, other agencies, and freelancers. We use standard tools like Slack, Jira, Asana, Figma, and GitHub for seamless integration with your workflow."
      }
    ],
    ctaText: "Schedule US Consultation"
  },
  "uk": {
    slug: "uk",
    country: "United Kingdom",
    title: "Web Development & Digital Marketing Agency UK",
    tagline: "Quality Digital Solutions for British Businesses",
    description:
      "Fraga Technology delivers expert website development and digital marketing services to businesses across the United Kingdom. We combine British quality standards with competitive global pricing. Our team understands UK business requirements, GDPR compliance, and British consumer expectations. From London startups to Manchester enterprises, we provide solutions tailored to the UK market.",
    metaTitle: "Web Development Company UK | Digital Marketing Agency | Fraga Technology",
    metaDescription:
      "Expert web development and digital marketing for UK businesses. GDPR-compliant websites, UK hosting options. London, Manchester, Birmingham clients. Free consultation.",
    keywords: [
      "web development company UK",
      "website development United Kingdom",
      "digital marketing agency UK",
      "SEO company UK",
      "offshore web development UK",
      "ecommerce development UK",
      "London web development",
      "UK business website development"
    ],
    heroText:
      "British businesses partner with Fraga Technology for premium web development and digital marketing at competitive rates. We understand UK market dynamics, GDPR compliance requirements, and British business culture. Our overlapping work hours with GMT ensure efficient communication. From London's financial district to tech hubs in Manchester, we deliver results that British businesses trust.",
    whyChooseUs: [
      "GMT-friendly working hours with significant daily overlap for real-time collaboration",
      "Deep understanding of UK business culture, consumer behavior, and market expectations",
      "GDPR-compliant development practices and privacy-first approach",
      "40-50% cost savings compared to UK agencies without quality compromise",
      "Experience serving London, Manchester, Birmingham, Leeds, and UK-wide clients",
      "UK hosting options and local payment gateway integrations (Stripe UK, GoCardless)"
    ],
    services: [
      {
        title: "Website Development",
        description: "Responsive, GDPR-compliant websites built with modern technologies. UK hosting options, cookie consent management, and British design sensibilities."
      },
      {
        title: "Ecommerce Development",
        description: "Online stores with UK payment integrations, VAT handling, and Royal Mail shipping integration. Shopify UK, WooCommerce, and custom platforms."
      },
      {
        title: "Mobile App Development",
        description: "iOS and Android applications meeting UK App Store guidelines. GDPR-compliant data handling and UK market optimization."
      },
      {
        title: "SEO Services",
        description: "Search engine optimization targeting UK audiences. Local SEO for city-specific rankings, Google UK optimization, and British English content."
      },
      {
        title: "Google Ads Management",
        description: "PPC campaigns optimized for UK audiences. Search, display, and YouTube advertising with British pound budgeting."
      },
      {
        title: "Digital Consultancy",
        description: "Strategic digital guidance for UK market growth. Competitor analysis, digital transformation, and technology roadmapping."
      }
    ],
    industries: [
      "Financial Services & FinTech",
      "Legal Services",
      "Healthcare & NHS Partners",
      "E-commerce & Retail",
      "Professional Services",
      "Technology & Startups",
      "Education",
      "Hospitality & Travel",
      "Real Estate & Property"
    ],
    faqs: [
      {
        question: "How do you ensure GDPR compliance?",
        answer: "All our websites include GDPR-compliant cookie consent, privacy policies, data processing agreements, and secure data handling. We understand UK data protection requirements and build compliance into every project."
      },
      {
        question: "What are your working hours relative to UK time?",
        answer: "We maintain team availability from 7 AM - 4 PM GMT (overlap with UK business hours). This provides 6+ hours of real-time collaboration daily. We also accommodate early morning and evening calls when needed."
      },
      {
        question: "Can you integrate with UK payment providers?",
        answer: "Yes, we integrate with Stripe UK, GoCardless, PayPal UK, Worldpay, and other British payment processors. We handle VAT calculations, UK-specific checkout requirements, and local payment preferences."
      },
      {
        question: "Do you offer UK hosting options?",
        answer: "Yes, we can deploy websites on UK-based servers (AWS London, Google Cloud London, UK-based hosts) for optimal performance and data residency compliance."
      },
      {
        question: "How do payments work for UK clients?",
        answer: "We accept bank transfers (SWIFT/IBAN), PayPal, and Stripe payments in GBP. We provide proper invoicing and documentation for UK accounting requirements."
      }
    ],
    ctaText: "Schedule UK Consultation"
  },
  "uae": {
    slug: "uae",
    country: "UAE",
    title: "Web Development & Digital Marketing Company UAE",
    tagline: "Digital Excellence for Gulf Region Businesses",
    description:
      "Fraga Technology provides premium website development and digital marketing services to businesses across the UAE and GCC region. We understand Middle Eastern business culture, Arabic language requirements, and regional market dynamics. From Dubai enterprises to Abu Dhabi government projects, our team delivers world-class digital solutions tailored for the Gulf market.",
    metaTitle: "Web Development Company UAE | Dubai Digital Marketing Agency | Fraga Technology",
    metaDescription:
      "Expert web development and digital marketing for UAE businesses. Arabic websites, Dubai & Abu Dhabi clients. GCC market expertise. Free consultation.",
    keywords: [
      "web development company UAE",
      "website development Dubai",
      "digital marketing agency UAE",
      "Abu Dhabi web development",
      "Arabic website development",
      "ecommerce development UAE",
      "SEO company Dubai",
      "GCC digital marketing"
    ],
    heroText:
      "UAE businesses choose Fraga Technology for world-class web development and digital marketing that understands Gulf region requirements. We deliver bilingual Arabic-English websites, culturally appropriate designs, and marketing campaigns optimized for Middle Eastern audiences. From Dubai's bustling business districts to Abu Dhabi's corporate centers, we power digital growth across the Emirates.",
    whyChooseUs: [
      "Experience serving Dubai, Abu Dhabi, and GCC-based businesses",
      "Arabic language expertise for bilingual website development and RTL design",
      "Understanding of UAE business culture and regional consumer behavior",
      "Competitive pricing compared to UAE-based agencies with premium quality",
      "Overlapping working hours with Gulf Standard Time (GST)",
      "Expertise with regional payment gateways and UAE compliance requirements"
    ],
    services: [
      {
        title: "Website Development",
        description: "Bilingual Arabic-English websites with RTL support. Modern, luxurious designs aligned with UAE business aesthetics. Mobile-first development for smartphone-heavy market."
      },
      {
        title: "Ecommerce Development",
        description: "Online stores with UAE payment gateway integrations (PayTabs, Network International). Arabic product catalogs, COD support, and Emirates delivery integration."
      },
      {
        title: "Mobile App Development",
        description: "iOS and Android applications for UAE market. Arabic interface support, regional app store optimization, and GCC user behavior optimization."
      },
      {
        title: "SEO Services",
        description: "Search engine optimization for UAE and GCC audiences. Arabic SEO, local Dubai/Abu Dhabi rankings, and regional keyword targeting."
      },
      {
        title: "Social Media Marketing",
        description: "Instagram, Facebook, and TikTok marketing for UAE audiences. Arabic content creation and influencer partnership facilitation."
      },
      {
        title: "Google & Meta Ads",
        description: "Paid advertising campaigns targeting UAE demographics. Arabic ad copy, regional audience targeting, and Ramadan campaign optimization."
      }
    ],
    industries: [
      "Real Estate & Property Development",
      "Luxury & Retail",
      "Hospitality & Tourism",
      "Healthcare & Medical Tourism",
      "Financial Services",
      "Government & Semi-Government",
      "Education",
      "E-commerce",
      "Professional Services"
    ],
    faqs: [
      {
        question: "Can you develop Arabic websites with RTL support?",
        answer: "Yes, we have extensive experience building bilingual Arabic-English websites with proper RTL (right-to-left) design. Our designers understand Arabic typography, cultural design preferences, and UAE market aesthetics."
      },
      {
        question: "Do you understand UAE business culture?",
        answer: "Yes. We've worked with multiple UAE clients and understand Gulf business practices, communication styles, and regional expectations. We're respectful of cultural considerations in design and content."
      },
      {
        question: "Can you integrate with UAE payment gateways?",
        answer: "Absolutely. We integrate with PayTabs, Network International, Checkout.com, Telr, and other UAE-popular payment processors. We also support Cash on Delivery (COD) which is popular in the region."
      },
      {
        question: "What are your working hours relative to UAE time?",
        answer: "Our working hours (IST) overlap significantly with GST (Gulf Standard Time). We're available during UAE business hours and can accommodate calls during your working day."
      },
      {
        question: "How do payments work for UAE clients?",
        answer: "We accept international wire transfers (SWIFT), PayPal, and Stripe payments in AED or USD. We provide proper invoicing and documentation for UAE accounting requirements."
      }
    ],
    ctaText: "Schedule UAE Consultation"
  },
  "canada": {
    slug: "canada",
    country: "Canada",
    title: "Web Development & Digital Marketing Company for Canadian Businesses",
    tagline: "Quality Digital Solutions for Canadian Enterprises",
    description:
      "Fraga Technology delivers expert website development and digital marketing services to businesses across Canada. We understand Canadian market requirements, bilingual English-French needs, and North American business expectations. From Toronto tech startups to Vancouver enterprises, Montreal agencies to Calgary businesses, we provide solutions tailored for Canadian success.",
    metaTitle: "Web Development Company Canada | Digital Marketing Services | Fraga Technology",
    metaDescription:
      "Expert web development and digital marketing for Canadian businesses. Bilingual websites, Toronto, Vancouver, Montreal clients. Free consultation.",
    keywords: [
      "web development company Canada",
      "website development Toronto",
      "digital marketing agency Canada",
      "Vancouver web development",
      "Montreal website development",
      "Canadian business websites",
      "bilingual website development",
      "SEO services Canada"
    ],
    heroText:
      "Canadian businesses partner with Fraga Technology for exceptional web development and digital marketing at competitive global rates. We understand Canadian market dynamics, bilingual requirements, and North American business standards. Our team operates during Eastern and Pacific time zones ensuring seamless collaboration across Canada. From Bay Street to Granville Street, we deliver digital solutions that Canadian businesses trust.",
    whyChooseUs: [
      "North American time zone alignment with EST and PST business hour availability",
      "Experience with bilingual English-French website development",
      "Understanding of Canadian business culture and consumer expectations",
      "40-50% cost savings compared to Canadian agencies with quality assurance",
      "Experience serving Toronto, Vancouver, Montreal, Calgary, and Ottawa clients",
      "Familiarity with Canadian payment processors and compliance requirements"
    ],
    services: [
      {
        title: "Website Development",
        description: "Bilingual English-French websites for Canadian compliance. Modern, accessible development meeting AODA/ACA standards. Canadian hosting options available."
      },
      {
        title: "Ecommerce Development",
        description: "Online stores with Canadian payment integrations (Stripe Canada, Moneris). Multi-currency CAD support and Canada Post shipping integration."
      },
      {
        title: "Mobile App Development",
        description: "iOS and Android applications for Canadian market. Bilingual app support and Canadian App Store optimization."
      },
      {
        title: "SEO Services",
        description: "Search engine optimization for Canadian audiences. Local SEO for city rankings, Google.ca optimization, and English/French keyword targeting."
      },
      {
        title: "Google Ads Management",
        description: "PPC campaigns optimized for Canadian audiences. Search, display, and YouTube advertising with CAD budgeting."
      },
      {
        title: "Social Media Marketing",
        description: "Social media management for Canadian brands. Bilingual content creation and Canadian influencer partnerships."
      }
    ],
    industries: [
      "Technology & SaaS",
      "E-commerce & Retail",
      "Financial Services",
      "Healthcare",
      "Real Estate",
      "Professional Services",
      "Education",
      "Manufacturing",
      "Hospitality & Tourism"
    ],
    faqs: [
      {
        question: "Can you develop bilingual English-French websites?",
        answer: "Yes, we build bilingual websites for Canadian compliance requirements. We implement proper language switching, French content management, and ensure both language versions are equally optimized for SEO."
      },
      {
        question: "What are your working hours relative to Canadian time?",
        answer: "We maintain team availability during EST and PST business hours (9 AM - 6 PM). This ensures real-time collaboration with clients across Canada from Halifax to Vancouver."
      },
      {
        question: "Can you integrate with Canadian payment processors?",
        answer: "Yes, we integrate with Stripe Canada, Moneris, PayPal Canada, and other Canadian payment processors. We handle CAD transactions and Canadian tax calculations."
      },
      {
        question: "Do you understand Canadian accessibility requirements?",
        answer: "Yes, we develop websites meeting AODA (Ontario) and ACA standards. We ensure proper accessibility compliance for Canadian government and enterprise requirements."
      },
      {
        question: "How do payments work for Canadian clients?",
        answer: "We accept wire transfers, PayPal, and Stripe payments in CAD or USD. We provide proper invoicing compatible with Canadian accounting practices."
      }
    ],
    ctaText: "Schedule Canada Consultation"
  },
  "australia": {
    slug: "australia",
    country: "Australia",
    title: "Web Development & Digital Marketing for Australian Businesses",
    tagline: "Quality Digital Solutions for Australian Enterprises",
    description:
      "Fraga Technology provides expert website development and digital marketing services to businesses across Australia. We understand Australian market requirements, APAC business dynamics, and Aussie consumer expectations. From Sydney tech startups to Melbourne enterprises, Brisbane agencies to Perth businesses, we deliver solutions tailored for Australian success.",
    metaTitle: "Web Development Company Australia | Digital Marketing Services | Fraga Technology",
    metaDescription:
      "Expert web development and digital marketing for Australian businesses. Sydney, Melbourne, Brisbane clients. APAC expertise. Free consultation.",
    keywords: [
      "web development company Australia",
      "website development Sydney",
      "digital marketing agency Australia",
      "Melbourne web development",
      "Brisbane website development",
      "Australian business websites",
      "SEO services Australia",
      "Perth web development"
    ],
    heroText:
      "Australian businesses choose Fraga Technology for world-class web development and digital marketing at competitive global rates. We understand Australian business culture, APAC market dynamics, and Aussie consumer expectations. Our overlapping work hours with AEST ensure efficient daily collaboration. From Sydney's CBD to Melbourne's tech scene, we deliver digital solutions that Australian businesses trust.",
    whyChooseUs: [
      "AEST-friendly working hours with significant daily overlap for real-time collaboration",
      "Understanding of Australian business culture and consumer expectations",
      "Experience serving Sydney, Melbourne, Brisbane, Perth, and Adelaide clients",
      "40-50% cost savings compared to Australian agencies without quality compromise",
      "Familiarity with Australian payment processors and compliance requirements",
      "APAC market expertise and regional technology understanding"
    ],
    services: [
      {
        title: "Website Development",
        description: "Modern, responsive websites meeting Australian standards. Local hosting options (AWS Sydney), Australian-style design, and accessibility compliance."
      },
      {
        title: "Ecommerce Development",
        description: "Online stores with Australian payment integrations (Stripe AU, Afterpay, Zip Pay). AUD support and Australia Post shipping integration."
      },
      {
        title: "Mobile App Development",
        description: "iOS and Android applications for Australian market. APAC app store optimization and Australian user behavior insights."
      },
      {
        title: "SEO Services",
        description: "Search engine optimization for Australian audiences. Local SEO for city rankings, Google.com.au optimization, and Australian keyword targeting."
      },
      {
        title: "Google Ads Management",
        description: "PPC campaigns optimized for Australian audiences. Search, display, and YouTube advertising with AUD budgeting."
      },
      {
        title: "Social Media Marketing",
        description: "Social media management for Australian brands. Content creation aligned with Aussie culture and regional trends."
      }
    ],
    industries: [
      "Technology & SaaS",
      "E-commerce & Retail",
      "Financial Services",
      "Healthcare",
      "Real Estate & Property",
      "Professional Services",
      "Education",
      "Mining & Resources",
      "Hospitality & Tourism"
    ],
    faqs: [
      {
        question: "What are your working hours relative to Australian time?",
        answer: "We have significant overlap with AEST. Our team is available from early morning Australian time, providing 4-5 hours of real-time collaboration daily. We also accommodate calls during Australian business hours."
      },
      {
        question: "Can you integrate with Australian payment systems?",
        answer: "Yes, we integrate with Stripe Australia, Afterpay, Zip Pay, PayPal Australia, and other Australian payment processors. We handle AUD transactions and GST calculations."
      },
      {
        question: "Do you offer Australian hosting?",
        answer: "Yes, we can deploy websites on AWS Sydney, Google Cloud Sydney, or other Australian-based hosting for optimal performance and data residency requirements."
      },
      {
        question: "What are your rates compared to Australian agencies?",
        answer: "Our rates are typically 40-50% lower than Australian agencies. A project costing $15,000-$25,000 AUD with a local agency typically costs $8,000-$15,000 AUD with us, with equivalent quality."
      },
      {
        question: "How do payments work for Australian clients?",
        answer: "We accept international wire transfers (SWIFT), PayPal, and Stripe payments in AUD or USD. We provide proper invoicing compatible with Australian tax requirements."
      }
    ],
    ctaText: "Schedule Australia Consultation"
  },
  "delhi": {
    slug: "delhi",
    country: "India",
    title: "Website Development & Digital Marketing Company in Delhi",
    tagline: "Premier Digital Agency Serving Delhi NCR Businesses",
    description:
      "Fraga Technology is a trusted website development company serving businesses across Delhi NCR including Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad. We provide comprehensive digital solutions including custom web development, mobile app development, SEO services, Google Ads, and social media marketing. Our expertise helps Delhi businesses establish powerful online presence and generate qualified leads.",
    metaTitle: "Website Development Company Delhi | Digital Marketing Agency Delhi NCR | Fraga Technology",
    metaDescription:
      "Leading website development company in Delhi NCR. Custom websites, SEO, Google Ads & digital marketing for Delhi, Gurgaon, Noida businesses. Call +91 9235000195",
    keywords: [
      "website development company Delhi",
      "web development company Delhi NCR",
      "digital marketing agency Delhi",
      "SEO company Delhi",
      "web development Gurgaon",
      "website design Noida",
      "Delhi NCR web development",
      "affordable website development Delhi",
      "best website company Delhi"
    ],
    heroText:
      "Delhi NCR businesses trust Fraga Technology for exceptional web development and digital marketing. From Connaught Place corporate offices to Gurgaon tech startups, Noida IT companies to Faridabad manufacturing units, we deliver digital solutions that drive business growth across the National Capital Region. Our team understands the competitive Delhi market and creates strategies that help you stand out.",
    whyChooseUs: [
      "Deep understanding of Delhi NCR business landscape and competitive dynamics",
      "Experience serving clients across Delhi, Gurgaon, Noida, and surrounding areas",
      "Competitive pricing with transparent quotes—no hidden costs",
      "Fast communication and project delivery with Indian business hour alignment",
      "Local SEO expertise for Delhi NCR geographic targeting",
      "Track record with Delhi-based startups, SMEs, and enterprise clients"
    ],
    services: [
      {
        title: "Website Development",
        description: "Custom business websites, corporate portals, and ecommerce platforms for Delhi NCR businesses. Fast, responsive, and SEO-optimized."
      },
      {
        title: "Mobile App Development",
        description: "iOS and Android apps for Delhi startups and enterprises. React Native and Flutter development for cost-effective multi-platform apps."
      },
      {
        title: "SEO Services",
        description: "Local SEO for Delhi NCR rankings. Target customers searching for services in Delhi, Gurgaon, Noida, and surrounding areas."
      },
      {
        title: "Google Ads Management",
        description: "PPC campaigns targeting Delhi NCR audiences. Location-specific advertising for maximum local reach and lead generation."
      },
      {
        title: "Social Media Marketing",
        description: "Instagram, Facebook, and LinkedIn marketing for Delhi brands. Content creation and paid campaigns for local engagement."
      },
      {
        title: "Graphics Design",
        description: "Logo design, branding, and marketing collaterals for Delhi businesses. Professional visual identity development."
      }
    ],
    industries: [
      "IT & Software Companies",
      "Real Estate & Property",
      "Healthcare & Clinics",
      "Legal Services",
      "E-commerce & Retail",
      "Education & Coaching",
      "Manufacturing",
      "Financial Services",
      "Hospitality & Restaurants"
    ],
    faqs: [
      {
        question: "Do you have an office in Delhi?",
        answer: "We operate remotely with our headquarters in Kannauj, UP. However, we serve numerous Delhi NCR clients and can arrange in-person meetings when needed. Our remote-first approach keeps costs competitive while maintaining quality."
      },
      {
        question: "How much does website development cost in Delhi?",
        answer: "Our website development for Delhi clients starts from Rs 40,000 for basic business websites. Ecommerce sites range from Rs 1,50,000-5,00,000. Custom web applications vary based on complexity. Contact us for a detailed quote."
      },
      {
        question: "Can you help with local SEO for Delhi?",
        answer: "Absolutely. We specialize in local SEO targeting Delhi NCR. We optimize for location-specific keywords, Google Business Profile optimization, local citations, and map pack rankings to help you appear in 'near me' searches."
      },
      {
        question: "What industries do you serve in Delhi NCR?",
        answer: "We serve diverse industries in Delhi NCR including IT companies, real estate firms, healthcare providers, legal services, e-commerce brands, educational institutions, and manufacturing companies."
      }
    ],
    ctaText: "Get Delhi Quote"
  },
  "kannauj": {
    slug: "kannauj",
    country: "India",
    title: "Website Development Company in Kannauj, Uttar Pradesh",
    tagline: "Local Digital Agency Serving Kannauj & Surrounding Districts",
    description:
      "Fraga Technology is a Kannauj-based website development and digital marketing company serving businesses across Kannauj district and surrounding UP regions including Farrukhabad, Kanpur, Lucknow, and Unnao. As a local company with global expertise, we help Kannauj businesses establish professional online presence at affordable rates. From perfume manufacturers to local retailers, we deliver digital solutions that grow your business.",
    metaTitle: "Website Development Company Kannauj | Digital Marketing Uttar Pradesh | Fraga Technology",
    metaDescription:
      "Kannauj's leading website development company. Affordable websites, SEO & digital marketing for Kannauj, Farrukhabad, Kanpur businesses. Call +91 9235000195",
    keywords: [
      "website development company Kannauj",
      "web development Kannauj",
      "digital marketing Kannauj",
      "Kannauj web design",
      "IT company Kannauj",
      "website company Uttar Pradesh",
      "SEO services Kannauj",
      "affordable website Kannauj",
      "Farrukhabad web development",
      "Kanpur website company"
    ],
    heroText:
      "Kannauj businesses deserve world-class digital presence. As a homegrown Kannauj company with international expertise, we bring global standards to local businesses. From the famous perfume manufacturers of Kannauj to emerging local startups, retailers to service providers, we help build digital presence that attracts customers from across India and beyond. Support local—choose Kannauj's own digital agency.",
    whyChooseUs: [
      "Kannauj-based company—support local business while getting global quality",
      "Deep understanding of Kannauj business community and local market dynamics",
      "Most affordable rates in the region without compromising quality",
      "Hindi and English communication for comfortable collaboration",
      "Personal attention and relationship-focused service",
      "Track record with Kannauj perfume industry, local retailers, and service providers"
    ],
    services: [
      {
        title: "Website Development",
        description: "Professional business websites for Kannauj businesses. Mobile-responsive, fast-loading, and designed to attract customers. Starting from Rs 25,000."
      },
      {
        title: "Ecommerce Development",
        description: "Online stores for Kannauj perfume sellers, retailers, and manufacturers. Sell products across India with secure payment integration."
      },
      {
        title: "Local SEO",
        description: "Rank in Google for Kannauj searches. Google Business Profile optimization, local citations, and location-specific keyword targeting."
      },
      {
        title: "Social Media Marketing",
        description: "Facebook and Instagram marketing for local businesses. Build following and attract customers from Kannauj and surrounding areas."
      },
      {
        title: "Google Ads",
        description: "Targeted advertising for Kannauj businesses. Reach customers searching for products and services in your area."
      },
      {
        title: "Graphics Design",
        description: "Logo design, branding, and marketing materials for local businesses. Professional visual identity at affordable rates."
      }
    ],
    industries: [
      "Perfume & Attar Industry",
      "Retail & Local Shops",
      "Healthcare & Clinics",
      "Education & Coaching",
      "Real Estate",
      "Manufacturing",
      "Professional Services",
      "Agriculture & Trading",
      "Hospitality"
    ],
    faqs: [
      {
        question: "Why should I choose a local Kannauj company?",
        answer: "Choosing Fraga Technology means supporting local business while getting international-quality work. We understand Kannauj's business environment, can meet in person when needed, and provide the personal attention that big-city agencies can't match."
      },
      {
        question: "How affordable are your services for local businesses?",
        answer: "We offer the most competitive rates in the region. Basic business websites start from Rs 25,000. We understand local budget constraints and create packages that deliver value without breaking the bank."
      },
      {
        question: "Can you help Kannauj perfume businesses sell online?",
        answer: "Absolutely! We've helped Kannauj perfume manufacturers create online stores to sell attar and perfumes across India. We understand the industry's unique requirements and create ecommerce solutions that showcase your products beautifully."
      },
      {
        question: "Do you provide services in Hindi?",
        answer: "Yes, our team is fluent in Hindi and English. We can communicate, provide documentation, and create content in Hindi as needed. We make the process comfortable for local business owners."
      }
    ],
    ctaText: "Get Local Quote"
  }
}

/** Get all locations as an ordered array */
export function getAllLocations(): LocationData[] {
  return Object.values(locations)
}

/** Get all location slugs */
export function getAllLocationSlugs(): string[] {
  return Object.keys(locations)
}

/** Get single location by slug */
export function getLocationBySlug(slug: string): LocationData | null {
  return locations[slug] || null
}

/** Get locations by country */
export function getLocationsByCountry(country: string): LocationData[] {
  return Object.values(locations).filter(loc => loc.country === country)
}

/** Navigation-friendly list of locations */
export function getLocationNavItems(): { name: string; slug: string; href: string; country: string }[] {
  return Object.values(locations).map((loc) => ({
    name: loc.title,
    slug: loc.slug,
    href: `/locations/${loc.slug}`,
    country: loc.country,
  }))
}
