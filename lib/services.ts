import { siteConfig } from "@/lib/site-config"

export interface ServiceFeature {
  title: string
  description: string
}

export interface ServiceOutcome {
  title: string
  description: string
}

export interface ServiceData {
  slug: string
  title: string
  tagline: string
  description: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  heroText: string
  features: ServiceFeature[]
  outcomes: ServiceOutcome[]
  faqs: { question: string; answer: string }[]
  ctaText: string
}

export const services: Record<string, ServiceData> = {
  "website-development": {
    slug: "website-development",
    title: "Website Development",
    tagline: "Custom Website Development Services",
    description:
      "Fraga Technology builds modern, high-performance websites designed for startups, enterprises, and growing businesses. We develop fast, secure, and SEO-optimized websites that help companies attract customers and grow online.",
    metaTitle: "Website Development Company | Fraga Technology",
    metaDescription:
      "Fraga Technology provides professional website development services for startups and businesses worldwide. Fast, secure, SEO-optimized websites.",
    keywords: [
      "website development company",
      "web development services",
      "custom website development",
      "startup website development",
      "company website development",
      "responsive web design",
      "e-commerce website development",
      "web development India",
      "web development USA",
      "web development UK",
    ],
    heroText:
      "We build high-performance, SEO-optimized websites that convert visitors into customers. From corporate websites to complex e-commerce platforms, our web development team delivers pixel-perfect solutions.",
    features: [
      {
        title: "Custom Business Websites",
        description:
          "Unique, brand-aligned website designs tailored to your business goals, target audience, and industry standards.",
      },
      {
        title: "E-commerce Development",
        description:
          "Full-featured online stores with payment integration, inventory management, and conversion-optimized checkout flows.",
      },
      {
        title: "Startup Landing Pages",
        description:
          "High-converting landing pages built for speed and optimized for lead generation with modern design patterns.",
      },
      {
        title: "SaaS Platforms",
        description:
          "Scalable SaaS application development with user dashboards, subscription management, and API integrations.",
      },
      {
        title: "Website Optimization",
        description:
          "Performance audits, Core Web Vitals optimization, and SEO-friendly code architecture for maximum speed.",
      },
      {
        title: "Performance Monitoring",
        description:
          "Ongoing performance tracking, uptime monitoring, and proactive maintenance to keep your site running flawlessly.",
      },
    ],
    outcomes: [
      { title: "Business Growth", description: "Websites that drive revenue and attract new customers consistently." },
      { title: "Higher Conversion Rates", description: "Optimized funnels and user journeys that turn visitors into leads." },
      { title: "Better Online Visibility", description: "SEO-first development ensuring your site ranks on search engines." },
      { title: "Automated Business Systems", description: "Integrated workflows that save time and reduce manual effort." },
    ],
    faqs: [
      {
        question: "How much does website development cost?",
        answer:
          "Website development costs vary based on complexity, features, and design requirements. A basic business website starts from $500, while e-commerce and custom web applications can range from $2,000 to $15,000+. Contact us for a free quote tailored to your needs.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "A standard business website takes 2-4 weeks, an e-commerce site takes 4-8 weeks, and custom web applications can take 8-16 weeks depending on complexity.",
      },
      {
        question: "Do you provide website maintenance and support?",
        answer:
          "Yes, we offer ongoing website maintenance packages that include security updates, content updates, performance monitoring, backups, and technical support.",
      },
      {
        question: "Which technologies do you use for web development?",
        answer:
          "We use modern technologies including Next.js, React, Node.js, WordPress, Shopify, and other frameworks depending on your project requirements.",
      },
    ],
    ctaText: "Start Your Project",
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    tagline: "iOS & Android App Development Company",
    description:
      "Fraga Technology is a trusted mobile app development company building native and cross-platform mobile applications for iOS and Android. We serve startups, healthcare, real estate, SaaS, and enterprise clients worldwide.",
    metaTitle: "Mobile App Development Company | Fraga Technology",
    metaDescription:
      "Expert mobile app development services by Fraga Technology. We build native iOS, Android, and cross-platform apps for startups, healthcare, and enterprise clients.",
    keywords: [
      "mobile app development company",
      "app development company",
      "iOS app development",
      "Android app development",
      "cross-platform app development",
      "React Native app development",
      "mobile app development India",
      "app development USA",
      "startup app development",
    ],
    heroText:
      "We develop powerful, user-friendly mobile applications for iOS and Android that drive engagement and business growth. Our app development team builds solutions for startups, healthcare, real estate, and enterprise clients.",
    features: [
      {
        title: "Native iOS & Android",
        description: "High-performance native applications built with Swift for iOS and Kotlin for Android.",
      },
      {
        title: "Cross-Platform Development",
        description: "Cost-effective cross-platform apps using React Native and Flutter with a single codebase.",
      },
      {
        title: "UI/UX Design",
        description: "Intuitive, engaging app interfaces designed with user experience best practices.",
      },
      {
        title: "Backend & API Development",
        description: "Scalable backend infrastructure and RESTful APIs with real-time data and secure authentication.",
      },
      {
        title: "App Store Optimization",
        description: "Strategic ASO to maximize your app visibility in App Store and Google Play Store.",
      },
      {
        title: "Maintenance & Updates",
        description: "Ongoing app maintenance, feature updates, bug fixes, and performance optimization.",
      },
    ],
    outcomes: [
      { title: "Increased User Engagement", description: "Apps designed to keep users coming back with intuitive UX." },
      { title: "Faster Time to Market", description: "Agile development process that gets your app launched quickly." },
      { title: "Cross-Platform Reach", description: "Reach both iOS and Android users with a single development effort." },
      { title: "Scalable Architecture", description: "Built to handle growth from hundreds to millions of users." },
    ],
    faqs: [
      {
        question: "How much does mobile app development cost?",
        answer:
          "Mobile app development costs range from $3,000 for simple apps to $25,000+ for complex enterprise applications. Contact us for a detailed estimate.",
      },
      {
        question: "Should I build a native or cross-platform app?",
        answer:
          "It depends on your budget, timeline, and performance needs. We help you choose the right approach based on your specific requirements.",
      },
      {
        question: "How long does it take to develop a mobile app?",
        answer:
          "A simple app takes 6-10 weeks, medium-complexity apps take 10-16 weeks, and complex enterprise apps can take 16-24+ weeks.",
      },
    ],
    ctaText: "Start Your Project",
  },
  "seo-services": {
    slug: "seo-services",
    title: "SEO Services",
    tagline: "Data-Driven SEO That Delivers Results",
    description:
      "Fraga Technology provides comprehensive SEO services including on-page SEO, off-page SEO, technical SEO, and local SEO. We help businesses rank higher on Google and drive qualified organic traffic.",
    metaTitle: "SEO Services Company | Fraga Technology",
    metaDescription:
      "Professional SEO services by Fraga Technology. On-page SEO, off-page SEO, technical SEO, and local SEO strategies that improve rankings and drive organic traffic.",
    keywords: [
      "SEO services",
      "search engine optimization",
      "SEO company",
      "on-page SEO",
      "off-page SEO",
      "technical SEO",
      "local SEO",
      "SEO services India",
      "SEO company USA",
      "SEO services UK",
    ],
    heroText:
      "Our data-driven SEO strategies help businesses rank higher on Google, increase organic traffic, and generate more qualified leads. We combine technical expertise with creative content strategies for sustainable growth.",
    features: [
      {
        title: "Technical SEO Audit",
        description: "Comprehensive website audits covering site speed, mobile-friendliness, crawlability, and Core Web Vitals.",
      },
      {
        title: "On-Page SEO",
        description: "Keyword research, meta tag optimization, heading structure, internal linking, and content optimization.",
      },
      {
        title: "Off-Page SEO & Link Building",
        description: "High-quality backlink building through guest posting, digital PR, and authority outreach campaigns.",
      },
      {
        title: "Local SEO",
        description: "Google Business Profile optimization, local citation building, and location-specific keyword targeting.",
      },
      {
        title: "Content Strategy",
        description: "SEO-focused content planning and creation including blog posts, landing pages, and pillar content.",
      },
      {
        title: "Reporting & Analytics",
        description: "Monthly SEO performance reports with keyword rankings, traffic growth, and actionable recommendations.",
      },
    ],
    outcomes: [
      { title: "Higher Google Rankings", description: "Improved search engine positions for your target keywords." },
      { title: "Increased Organic Traffic", description: "More qualified visitors finding your website naturally." },
      { title: "Better Lead Quality", description: "Attract visitors who are actively searching for your services." },
      { title: "Long-Term Growth", description: "Sustainable traffic growth that compounds over time." },
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "Most businesses start seeing meaningful improvements in 3-6 months, with significant results typically appearing within 6-12 months.",
      },
      {
        question: "What is included in your SEO services?",
        answer:
          "Technical SEO audits, on-page optimization, keyword research, content strategy, link building, local SEO, and monthly reporting.",
      },
      {
        question: "How much do SEO services cost?",
        answer:
          "SEO packages start from $300/month for small businesses and can range up to $2,000+/month for enterprise-level campaigns.",
      },
    ],
    ctaText: "Start Your Project",
  },
  "meta-ads": {
    slug: "meta-ads",
    title: "Meta Ads Management",
    tagline: "Facebook & Instagram Advertising Experts",
    description:
      "Fraga Technology provides expert Meta Ads management services for Facebook and Instagram. We create high-converting ad campaigns with precise audience targeting, compelling creatives, and data-driven optimization.",
    metaTitle: "Meta Ads Management Company | Fraga Technology",
    metaDescription:
      "Professional Meta Ads (Facebook & Instagram) management by Fraga Technology. High-ROI ad campaigns with precise targeting and conversion optimization.",
    keywords: [
      "Meta Ads management",
      "Facebook Ads agency",
      "Instagram Ads management",
      "social media advertising",
      "Facebook advertising company",
      "Meta Ads India",
      "Facebook Ads USA",
      "Instagram advertising",
    ],
    heroText:
      "We create and manage high-performing Meta advertising campaigns on Facebook and Instagram with precise audience targeting, A/B testing, and conversion optimization for maximum return on ad spend.",
    features: [
      {
        title: "Campaign Strategy",
        description: "Data-driven Meta Ads strategy aligned with your business goals and target audience.",
      },
      {
        title: "Audience Targeting",
        description: "Precise audience segmentation using demographics, interests, behaviors, and lookalike audiences.",
      },
      {
        title: "Ad Creative Design",
        description: "Compelling visual creatives and ad copy that stop the scroll and drive engagement.",
      },
      {
        title: "A/B Testing",
        description: "Continuous testing of ad variations to identify top performers and optimize spend.",
      },
      {
        title: "Conversion Tracking",
        description: "Full pixel setup and conversion tracking to measure real business results from ad spend.",
      },
      {
        title: "Monthly Reporting",
        description: "Detailed performance reports with ROAS, CPA, and actionable optimization recommendations.",
      },
    ],
    outcomes: [
      { title: "Higher ROAS", description: "Maximize return on every dollar spent on Meta advertising." },
      { title: "Qualified Leads", description: "Reach the right audience with precision targeting capabilities." },
      { title: "Brand Awareness", description: "Build brand recognition across Facebook and Instagram platforms." },
      { title: "Scalable Growth", description: "Campaigns designed to scale as your budget and goals grow." },
    ],
    faqs: [
      {
        question: "How much should I spend on Meta Ads?",
        answer:
          "We recommend starting with a minimum of $500/month in ad spend. The optimal budget depends on your industry, goals, and target audience.",
      },
      {
        question: "How quickly will I see results from Meta Ads?",
        answer:
          "You can start seeing initial results within the first 1-2 weeks. Campaigns typically optimize fully within 4-6 weeks as we gather data.",
      },
      {
        question: "Do you manage both Facebook and Instagram Ads?",
        answer:
          "Yes, we manage campaigns across the entire Meta ecosystem including Facebook, Instagram, Messenger, and the Audience Network.",
      },
    ],
    ctaText: "Start Your Project",
  },
  "google-ads": {
    slug: "google-ads",
    title: "Google Ads Management",
    tagline: "Google Ads & PPC Advertising Experts",
    description:
      "Fraga Technology provides professional Google Ads management services including Search Ads, Display Ads, Shopping Ads, and YouTube Ads. We maximize your ROI with data-driven PPC strategies.",
    metaTitle: "Google Ads Management Company | Fraga Technology",
    metaDescription:
      "Professional Google Ads (PPC) management by Fraga Technology. Search Ads, Display Ads, Shopping Ads, and YouTube Ads with maximum ROI focus.",
    keywords: [
      "Google Ads management",
      "PPC advertising company",
      "Google Ads agency",
      "Google Search Ads",
      "Google Display Ads",
      "PPC management India",
      "Google Ads USA",
      "pay per click advertising",
    ],
    heroText:
      "We manage high-performing Google Ads campaigns including Search, Display, Shopping, and YouTube Ads. Our PPC experts maximize your return on investment with keyword research, bid optimization, and conversion tracking.",
    features: [
      {
        title: "Search Ads",
        description: "High-intent Google Search campaigns targeting customers actively searching for your services.",
      },
      {
        title: "Display Advertising",
        description: "Visual display campaigns across the Google Display Network for brand awareness and retargeting.",
      },
      {
        title: "Shopping Ads",
        description: "Product listing ads for e-commerce businesses to showcase products directly in search results.",
      },
      {
        title: "Keyword Research",
        description: "Comprehensive keyword analysis to identify high-converting search terms for your campaigns.",
      },
      {
        title: "Bid Optimization",
        description: "Smart bidding strategies that maximize conversions while maintaining optimal cost per acquisition.",
      },
      {
        title: "Conversion Tracking",
        description: "Full Google Analytics and conversion tracking setup to measure campaign effectiveness.",
      },
    ],
    outcomes: [
      { title: "Immediate Visibility", description: "Appear at the top of Google search results from day one." },
      { title: "Qualified Traffic", description: "Attract visitors who are actively searching for what you offer." },
      { title: "Measurable Results", description: "Track every click, conversion, and dollar of your ad spend." },
      { title: "Cost Efficiency", description: "Optimized campaigns that reduce cost per click and acquisition." },
    ],
    faqs: [
      {
        question: "How much should I budget for Google Ads?",
        answer:
          "We recommend starting with $500-$1,000/month in ad spend. The ideal budget depends on your industry competition and target keywords.",
      },
      {
        question: "How long before Google Ads generate results?",
        answer:
          "Google Ads can generate traffic immediately. We typically see optimized performance within 2-4 weeks as we refine targeting and bids.",
      },
      {
        question: "What types of Google Ads do you manage?",
        answer:
          "We manage Search Ads, Display Ads, Shopping Ads, YouTube Ads, and Performance Max campaigns across all Google platforms.",
      },
    ],
    ctaText: "Start Your Project",
  },
  "graphics-design": {
    slug: "graphics-design",
    title: "Graphics Design",
    tagline: "Professional Graphic Design Services",
    description:
      "Fraga Technology offers professional graphic design services including branding, logos, social media creatives, marketing collaterals, and UI/UX design that makes your brand stand out in the market.",
    metaTitle: "Graphics Design Company | Fraga Technology",
    metaDescription:
      "Professional graphic design services by Fraga Technology. Branding, logos, social media creatives, UI/UX design, and marketing materials for your business.",
    keywords: [
      "graphic design services",
      "logo design company",
      "branding design agency",
      "social media design",
      "UI/UX design services",
      "graphic design India",
      "graphic design USA",
      "brand identity design",
    ],
    heroText:
      "Our design team creates stunning visual identities, marketing materials, and digital assets that communicate your brand story effectively. From logos to complete brand systems, we design with purpose and precision.",
    features: [
      {
        title: "Logo & Brand Identity",
        description: "Distinctive logo designs and comprehensive brand identity systems that set you apart.",
      },
      {
        title: "Social Media Creatives",
        description: "Engaging social media graphics, stories, and ad creatives optimized for each platform.",
      },
      {
        title: "Marketing Collaterals",
        description: "Brochures, flyers, presentations, and print materials that communicate your message.",
      },
      {
        title: "UI/UX Design",
        description: "User interface and experience design for websites and applications with modern aesthetics.",
      },
      {
        title: "Packaging Design",
        description: "Product packaging designs that capture attention on shelves and in e-commerce listings.",
      },
      {
        title: "Infographics & Data Viz",
        description: "Visual representations of complex data and information that are easy to understand and share.",
      },
    ],
    outcomes: [
      { title: "Strong Brand Identity", description: "A cohesive visual identity that resonates with your audience." },
      { title: "Professional Image", description: "Designs that establish credibility and trust with customers." },
      { title: "Higher Engagement", description: "Visual content that captures attention and drives interaction." },
      { title: "Consistent Branding", description: "Unified design language across all marketing channels." },
    ],
    faqs: [
      {
        question: "What graphic design services do you offer?",
        answer:
          "We offer logo design, brand identity, social media creatives, marketing collaterals, UI/UX design, packaging design, and more.",
      },
      {
        question: "How much does graphic design cost?",
        answer:
          "Prices vary by project. Logo design starts from $200, brand identity packages from $500, and ongoing design retainers from $300/month.",
      },
      {
        question: "What is your design process?",
        answer:
          "We follow a structured process: discovery brief, concept development, initial designs, revisions, and final delivery with all source files.",
      },
    ],
    ctaText: "Start Your Project",
  },
  "social-media-marketing": {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    tagline: "Strategic Social Media Management",
    description:
      "Fraga Technology provides comprehensive social media marketing services across Instagram, Facebook, LinkedIn, and Twitter. We build brand awareness, drive engagement, and grow your online community.",
    metaTitle: "Social Media Marketing Company | Fraga Technology",
    metaDescription:
      "Strategic social media marketing services by Fraga Technology. Content creation, community management, and growth strategies across all major platforms.",
    keywords: [
      "social media marketing",
      "social media management",
      "Instagram marketing",
      "Facebook marketing",
      "LinkedIn marketing",
      "social media agency",
      "social media marketing India",
      "social media marketing USA",
    ],
    heroText:
      "We craft strategic social media campaigns that build your brand presence, engage your target audience, and drive measurable business results across Instagram, Facebook, LinkedIn, and Twitter.",
    features: [
      {
        title: "Content Strategy",
        description: "Strategic content planning and editorial calendars tailored to each platform and your audience.",
      },
      {
        title: "Content Creation",
        description: "Professional graphics, videos, reels, and copywriting that align with your brand voice.",
      },
      {
        title: "Community Management",
        description: "Active engagement with your audience through comments, messages, and community building.",
      },
      {
        title: "Influencer Partnerships",
        description: "Identifying and collaborating with relevant influencers to amplify your brand reach.",
      },
      {
        title: "Analytics & Reporting",
        description: "Detailed performance tracking with insights on engagement, reach, and follower growth.",
      },
      {
        title: "Platform Optimization",
        description: "Profile optimization and platform-specific strategies for maximum organic reach.",
      },
    ],
    outcomes: [
      { title: "Brand Awareness", description: "Increased visibility and recognition across social platforms." },
      { title: "Community Growth", description: "Build an engaged following that advocates for your brand." },
      { title: "Lead Generation", description: "Turn social media followers into qualified business leads." },
      { title: "Customer Loyalty", description: "Foster deeper connections with your existing customer base." },
    ],
    faqs: [
      {
        question: "Which social media platforms do you manage?",
        answer:
          "We manage Instagram, Facebook, LinkedIn, Twitter/X, YouTube, and TikTok based on where your target audience is most active.",
      },
      {
        question: "How much does social media marketing cost?",
        answer:
          "Social media management packages start from $400/month. The cost depends on the number of platforms, posting frequency, and services included.",
      },
      {
        question: "How do you measure social media success?",
        answer:
          "We track engagement rates, follower growth, reach, impressions, website traffic from social, and lead generation metrics with monthly reports.",
      },
    ],
    ctaText: "Start Your Project",
  },
}

/** Get all services as an ordered array for navigation */
export function getAllServices(): ServiceData[] {
  return Object.values(services)
}

/** Get all service slugs */
export function getAllServiceSlugs(): string[] {
  return Object.keys(services)
}

/** Get single service by slug */
export function getServiceBySlug(slug: string): ServiceData | null {
  return services[slug] || null
}

/** Navigation-friendly list of services */
export function getServiceNavItems(): { name: string; slug: string; href: string }[] {
  return Object.values(services).map((s) => ({
    name: s.title,
    slug: s.slug,
    href: `/services/${s.slug}`,
  }))
}
