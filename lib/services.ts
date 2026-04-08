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
  extendedContent?: string
}

export const services: Record<string, ServiceData> = {
  "website-development": {
    slug: "website-development",
    title: "Website Development",
    tagline: "Website Development Company India | Custom Web Solutions for Business Growth",
    description:
      "Looking for a reliable website development company in India? Fraga Technology is a leading web development company near me trusted by startups, SMEs, and enterprises across India, USA, UK, Canada, Australia, and UAE. We specialize in building fast, secure, mobile-responsive, and SEO-optimized websites that drive real business results. Whether you need an affordable website development India solution or a custom web development company India for complex enterprise portals, our expert team delivers pixel-perfect designs with conversion-focused architecture.",
    metaTitle: "Website Development Company India | Best Web Development Services | Fraga Technology",
    metaDescription:
      "Top website development company in India. Custom websites, ecommerce development, WordPress & React. Affordable web development for startups & enterprises. Free consultation: +91 9235000195",
    keywords: [
      "website development company India",
      "web development company near me",
      "affordable website development India",
      "custom web development company India",
      "ecommerce website development",
      "website development services",
      "web development company",
      "professional website development",
      "business website development",
      "startup website development India",
      "WordPress development India",
      "React website development",
      "Next.js development company",
    ],
    heroText:
      "We build high-performance, SEO-optimized websites that convert visitors into paying customers. As a trusted website development company in India, we serve clients across 6 countries with custom solutions ranging from corporate websites to complex ecommerce website development platforms. Our development process focuses on speed, security, and scalability—ensuring your website becomes a powerful business asset.",
    extendedContent: `
## Why Choose Fraga Technology as Your Website Development Company in India?

When searching for a web development company near me, businesses need a partner who understands both technical excellence and business strategy. Here's what sets us apart:

### Industry-Leading Expertise
With 150+ successful projects delivered, our team brings deep expertise in modern web technologies including React, Next.js, Node.js, WordPress, and Shopify. We don't just build websites—we architect digital experiences that drive measurable business outcomes.

### Affordable Website Development India Without Compromising Quality
We believe world-class web development shouldn't break the bank. Our affordable website development India packages start from $500 for business websites, making professional web presence accessible to startups and growing businesses. Every project includes mobile responsiveness, SEO optimization, and security hardening.

### Custom Solutions for Every Business Need
As a custom web development company India, we tailor every project to your specific requirements:
- **Corporate Websites**: Professional designs that establish credibility and trust
- **Ecommerce Website Development**: Full-featured online stores with secure payment integration
- **SaaS Platforms**: Scalable applications with user dashboards and subscription management
- **Landing Pages**: High-converting pages optimized for lead generation campaigns

### Our Website Development Process

1. **Discovery & Strategy**: We analyze your business goals, target audience, and competitive landscape
2. **Design & Prototyping**: Custom UI/UX designs aligned with your brand identity
3. **Development**: Clean, maintainable code built on modern frameworks
4. **Testing & QA**: Rigorous testing across devices, browsers, and performance metrics
5. **Launch & Support**: Seamless deployment with ongoing maintenance and support

### Technologies We Master

Our developers are experts in the latest web technologies:
- **Frontend**: React, Next.js, Vue.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Python, PHP, Laravel
- **CMS**: WordPress, Shopify, Webflow, Strapi
- **Databases**: PostgreSQL, MySQL, MongoDB, Firebase
- **Cloud**: AWS, Vercel, Google Cloud, DigitalOcean

### Industries We Serve

We've delivered successful web development projects for:
- Real Estate Companies
- Healthcare & Medical Practices
- Law Firms & Legal Services
- SaaS & Technology Startups
- E-commerce & Retail Brands
- Educational Institutions
- Financial Services
- Manufacturing & Industrial

### What Makes Our Websites Different?

**Performance-First Architecture**: Every website we build achieves 90+ scores on Google PageSpeed Insights. Fast websites rank higher and convert better.

**SEO-Optimized from Day One**: We implement technical SEO best practices during development—proper heading structure, schema markup, semantic HTML, and fast loading times.

**Mobile-Responsive Design**: Over 60% of web traffic comes from mobile devices. Our responsive designs provide seamless experiences across all screen sizes.

**Security-Hardened**: SSL certificates, secure coding practices, regular updates, and protection against common vulnerabilities keep your website and user data safe.
    `,
    features: [
      {
        title: "Custom Business Websites",
        description:
          "Unique, brand-aligned website designs tailored to your business goals. Every website we build reflects your brand identity while focusing on user experience and conversion optimization.",
      },
      {
        title: "Ecommerce Website Development",
        description:
          "Full-featured online stores with payment integration, inventory management, and conversion-optimized checkout flows. We build on Shopify, WooCommerce, and custom platforms.",
      },
      {
        title: "Startup Landing Pages",
        description:
          "High-converting landing pages built for speed and optimized for lead generation. Perfect for product launches, marketing campaigns, and startup MVP validation.",
      },
      {
        title: "SaaS Platform Development",
        description:
          "Scalable SaaS application development with user dashboards, subscription management, API integrations, and multi-tenant architecture.",
      },
      {
        title: "Website Performance Optimization",
        description:
          "Core Web Vitals optimization, image compression, code splitting, and caching strategies that achieve 90+ PageSpeed scores and improve Google rankings.",
      },
      {
        title: "Ongoing Maintenance & Support",
        description:
          "24/7 performance monitoring, security updates, content changes, and proactive maintenance to keep your website running flawlessly.",
      },
    ],
    outcomes: [
      { title: "Increased Revenue", description: "Websites designed to drive sales and capture high-quality leads consistently." },
      { title: "Higher Conversion Rates", description: "Strategic UX design and optimized funnels that turn visitors into customers." },
      { title: "Better Google Rankings", description: "SEO-first development ensuring your site ranks for target keywords." },
      { title: "Faster Load Times", description: "Performance optimization resulting in under 2-second page load times." },
    ],
    faqs: [
      {
        question: "How much does website development cost in India?",
        answer:
          "Website development costs in India vary based on complexity and features. A basic business website starts from $500-$1,500, an ecommerce website ranges from $2,000-$8,000, and custom web applications can cost $5,000-$25,000+. We provide detailed quotes after understanding your specific requirements. Contact us for a free consultation and custom estimate.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "Timeline depends on project scope. A standard business website takes 2-4 weeks, an ecommerce site takes 4-8 weeks, and custom web applications can take 8-16 weeks. We provide detailed project timelines during our initial consultation.",
      },
      {
        question: "Do you provide website maintenance and support?",
        answer:
          "Yes, we offer comprehensive website maintenance packages starting from $100/month. This includes security updates, content updates, performance monitoring, regular backups, and technical support. We also offer one-time support services as needed.",
      },
      {
        question: "Which technologies do you use for web development?",
        answer:
          "We use modern, battle-tested technologies including React, Next.js, Node.js, WordPress, Shopify, and custom solutions. Technology choice depends on your project requirements—we recommend the best fit for scalability, performance, and long-term maintenance.",
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "Absolutely. We specialize in website redesigns that improve performance, user experience, and SEO. We audit your current site, identify improvement areas, and create a modern design that aligns with your business goals while preserving your SEO equity.",
      },
      {
        question: "Do you offer SEO services along with web development?",
        answer:
          "Yes, all our websites are built with SEO best practices. We also offer dedicated SEO services including keyword research, on-page optimization, technical SEO, and ongoing SEO campaigns to help your website rank higher on Google.",
      },
      {
        question: "How do I choose the right web development company?",
        answer:
          "Look for a company with proven experience in your industry, a strong portfolio, transparent pricing, clear communication, and ongoing support. At Fraga Technology, we offer all of this plus a focus on business results—not just beautiful designs. Check our case studies and client testimonials to see our track record.",
      },
    ],
    ctaText: "Get Free Website Quote",
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    tagline: "Mobile App Development Company India | iOS & Android App Solutions",
    description:
      "Fraga Technology is a leading mobile app development company India trusted by startups, healthcare providers, real estate firms, and enterprises worldwide. We build native iOS, Android, and cross-platform mobile applications using React Native and Flutter. Our mobile app development services focus on user experience, performance, and scalability—delivering apps that users love and businesses depend on.",
    metaTitle: "Mobile App Development Company India | iOS & Android Apps | Fraga Technology",
    metaDescription:
      "Expert mobile app development company in India. Native iOS, Android & cross-platform apps for startups, healthcare & enterprise. Free consultation: +91 9235000195",
    keywords: [
      "mobile app development company India",
      "app development company",
      "iOS app development India",
      "Android app development India",
      "cross-platform app development",
      "React Native app development",
      "Flutter app development",
      "startup app development",
      "healthcare app development",
      "real estate app development",
    ],
    heroText:
      "We develop powerful, user-friendly mobile applications for iOS and Android that drive engagement and accelerate business growth. As a trusted mobile app development company India, we serve startups, healthcare organizations, real estate companies, and enterprise clients across 6 countries. Our apps combine stunning design with robust functionality.",
    features: [
      {
        title: "Native iOS & Android",
        description: "High-performance native applications built with Swift for iOS and Kotlin for Android, optimized for each platform's unique capabilities.",
      },
      {
        title: "Cross-Platform Development",
        description: "Cost-effective cross-platform apps using React Native and Flutter with a single codebase, reducing development time by 40%.",
      },
      {
        title: "UI/UX Design",
        description: "Intuitive, engaging app interfaces designed following Apple and Google design guidelines for seamless user experiences.",
      },
      {
        title: "Backend & API Development",
        description: "Scalable backend infrastructure with RESTful APIs, real-time data synchronization, and secure authentication systems.",
      },
      {
        title: "App Store Optimization",
        description: "Strategic ASO to maximize your app visibility in App Store and Google Play Store, driving organic downloads.",
      },
      {
        title: "Maintenance & Updates",
        description: "Ongoing app maintenance, feature updates, bug fixes, OS compatibility updates, and performance optimization.",
      },
    ],
    outcomes: [
      { title: "Increased User Engagement", description: "Apps designed with user experience best practices that keep users coming back." },
      { title: "Faster Time to Market", description: "Agile development process that gets your app launched quickly and efficiently." },
      { title: "Cross-Platform Reach", description: "Reach both iOS and Android users with optimized experiences on each platform." },
      { title: "Scalable Architecture", description: "Built to handle growth from hundreds to millions of active users." },
    ],
    faqs: [
      {
        question: "How much does mobile app development cost in India?",
        answer:
          "Mobile app development costs in India range from $5,000 for simple apps to $50,000+ for complex enterprise applications. A basic MVP app costs $5,000-$15,000, mid-complexity apps cost $15,000-$30,000, and enterprise apps cost $30,000+. Contact us for a detailed estimate based on your requirements.",
      },
      {
        question: "Should I build a native or cross-platform app?",
        answer:
          "It depends on your budget, timeline, and performance requirements. Native apps offer the best performance but require separate codebases. Cross-platform (React Native/Flutter) reduces costs by 30-40% while delivering near-native performance. We help you choose the right approach based on your specific needs.",
      },
      {
        question: "How long does it take to develop a mobile app?",
        answer:
          "Development timeline varies by complexity. A simple app takes 8-12 weeks, medium-complexity apps take 12-20 weeks, and complex enterprise apps can take 20-32+ weeks. This includes design, development, testing, and deployment phases.",
      },
      {
        question: "Do you provide app maintenance after launch?",
        answer:
          "Yes, we offer comprehensive app maintenance packages including bug fixes, OS updates, performance monitoring, feature updates, and security patches. Our maintenance plans start from $300/month.",
      },
      {
        question: "Can you develop apps for both iOS and Android simultaneously?",
        answer:
          "Yes, using cross-platform technologies like React Native or Flutter, we can develop apps for both iOS and Android simultaneously from a single codebase, significantly reducing development time and cost.",
      },
    ],
    ctaText: "Discuss Your App Idea",
  },
  "seo-services": {
    slug: "seo-services",
    title: "SEO Services",
    tagline: "Best SEO Company in India | Rank #1 on Google",
    description:
      "Looking for the best SEO company in India? Fraga Technology delivers data-driven SEO services that help businesses rank higher on Google, increase organic traffic, and generate qualified leads. Our SEO services for small business India and enterprise clients include comprehensive on-page SEO, technical SEO audits, local SEO, and strategic link building. We don't promise overnight results—we deliver sustainable rankings that compound over time.",
    metaTitle: "Best SEO Company in India | Professional SEO Services | Fraga Technology",
    metaDescription:
      "Top-rated SEO company in India. On-page SEO, technical SEO, local SEO & link building. SEO services for small business India. Results in 90 days. Call +91 9235000195",
    keywords: [
      "best SEO company in India",
      "SEO services",
      "SEO services for small business India",
      "local SEO services",
      "technical SEO audit",
      "on-page SEO services",
      "off-page SEO",
      "link building services",
      "SEO company",
      "search engine optimization India",
      "Google ranking services",
      "organic traffic growth",
    ],
    heroText:
      "Our data-driven SEO strategies help businesses dominate Google search results, increase organic traffic by 200-500%, and generate consistent qualified leads. As the best SEO company in India, we combine technical expertise with content strategy for sustainable, long-term rankings. Whether you're a small business or enterprise, our SEO services deliver measurable ROI.",
    extendedContent: `
## How Long Does SEO Take to Show Results?

One of the most common questions we hear is "how long does SEO take to show results?" The honest answer: SEO is a long-term investment that typically shows meaningful results in 3-6 months.

**Month 1-2**: Technical foundation, on-page optimization, initial indexing improvements
**Month 3-4**: Keyword rankings begin improving, traffic starts growing
**Month 5-6**: Significant ranking improvements, 50-100% traffic increase typical
**Month 6-12**: Compounding growth, top 10 rankings for primary keywords

Unlike Google Ads which stops the moment you stop paying, SEO builds lasting organic visibility that continues generating traffic and leads for years.

## SEO vs Google Ads: Which Is Better?

The "SEO vs Google Ads which is better" debate depends on your goals:

**Choose SEO when you want:**
- Long-term sustainable traffic growth
- Higher trust and credibility (organic results)
- Lower cost per acquisition over time
- Compound returns on your investment

**Choose Google Ads when you need:**
- Immediate traffic and leads
- Testing market demand quickly
- Promoting time-sensitive offers
- Supplementing SEO while rankings build

**Our recommendation**: Combine both strategies. Use Google Ads for immediate results while building SEO for long-term dominance. We offer integrated digital marketing packages that maximize your ROI across both channels.

## Our SEO Process

### Phase 1: SEO Audit & Strategy
We analyze your current website performance, competitor rankings, keyword opportunities, and technical health to create a customized SEO roadmap.

### Phase 2: Technical SEO Foundation
We fix technical issues affecting your rankings—site speed optimization, mobile responsiveness, crawlability, schema markup, and Core Web Vitals improvements.

### Phase 3: On-Page Optimization
Strategic optimization of title tags, meta descriptions, heading structure, content optimization, internal linking, and keyword placement following Google's best practices.

### Phase 4: Content Strategy & Creation
We develop SEO-focused content that ranks—blog posts, service pages, location pages, and resources that attract your target audience and build topical authority.

### Phase 5: Link Building & Off-Page SEO
White-hat link building through guest posting, digital PR, resource outreach, and industry citations that boost your domain authority and rankings.

### Phase 6: Monitoring & Reporting
Monthly performance reports tracking keyword rankings, organic traffic, conversions, and actionable recommendations for continued improvement.
    `,
    features: [
      {
        title: "Technical SEO Audit",
        description: "Comprehensive website audits covering site speed, mobile-friendliness, crawlability, indexing issues, Core Web Vitals, and technical health scores.",
      },
      {
        title: "On-Page SEO Optimization",
        description: "Strategic keyword research, title tag optimization, meta descriptions, heading structure, content optimization, and internal linking strategies.",
      },
      {
        title: "Off-Page SEO & Link Building",
        description: "White-hat backlink building through guest posting, digital PR, resource outreach, and authority citation building to boost domain authority.",
      },
      {
        title: "Local SEO Services",
        description: "Google Business Profile optimization, local citation building, review management, and location-specific keyword targeting for local businesses.",
      },
      {
        title: "Content Strategy & Creation",
        description: "SEO-focused content planning and creation including blog posts, pillar content, and resource pages that attract organic traffic.",
      },
      {
        title: "Monthly Reporting & Analytics",
        description: "Detailed monthly SEO reports tracking keyword rankings, organic traffic growth, backlink acquisition, and actionable optimization recommendations.",
      },
    ],
    outcomes: [
      { title: "Higher Google Rankings", description: "Page 1 rankings for your target keywords, increasing visibility and credibility." },
      { title: "200-500% Traffic Growth", description: "Significant organic traffic increases within 6-12 months of consistent SEO work." },
      { title: "Better Quality Leads", description: "Attract visitors actively searching for your services—higher intent, higher conversions." },
      { title: "Long-Term ROI", description: "Unlike ads, SEO builds lasting visibility that continues generating results for years." },
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "Most businesses start seeing meaningful improvements in 3-6 months, with significant results typically appearing within 6-12 months. SEO is a long-term investment—while it takes longer than paid ads, the results compound over time and continue generating traffic without ongoing ad spend.",
      },
      {
        question: "What is included in your SEO services?",
        answer:
          "Our comprehensive SEO packages include technical SEO audits, on-page optimization, keyword research, content strategy, link building, local SEO (if applicable), Google Analytics setup, Search Console optimization, and monthly performance reporting.",
      },
      {
        question: "How much do SEO services cost in India?",
        answer:
          "Our SEO packages start from $400/month for small businesses and range up to $2,500+/month for enterprise-level campaigns. Pricing depends on your industry competition, target keywords, and scope of work. We provide transparent pricing after assessing your specific needs.",
      },
      {
        question: "SEO vs Google Ads: which is better for my business?",
        answer:
          "Both have their place. SEO provides long-term sustainable traffic at a lower cost-per-acquisition over time. Google Ads delivers immediate traffic but stops when you stop paying. We recommend combining both—Google Ads for immediate results while SEO builds your organic presence. Contact us for a strategy consultation.",
      },
      {
        question: "Do you guarantee first page rankings?",
        answer:
          "No ethical SEO company can guarantee specific rankings because Google's algorithm considers 200+ factors. What we do guarantee is proven strategies, transparent reporting, and dedicated effort to improve your rankings. Our track record shows consistent Page 1 results for clients across various industries.",
      },
      {
        question: "What industries do you provide SEO services for?",
        answer:
          "We provide SEO services for real estate companies, law firms, healthcare practices, SaaS startups, e-commerce stores, local businesses, manufacturing companies, and service providers. Our strategies are customized to each industry's unique competitive landscape and customer search behavior.",
      },
    ],
    ctaText: "Get Free SEO Audit",
  },
  "meta-ads": {
    slug: "meta-ads",
    title: "Meta Ads Management",
    tagline: "Meta Ads Agency India | Facebook & Instagram Advertising Experts",
    description:
      "Fraga Technology is a leading Meta Ads agency India specializing in high-ROI Facebook and Instagram advertising campaigns. We help businesses generate leads, drive sales, and build brand awareness through strategic audience targeting, compelling creatives, and data-driven optimization. Our Meta Ads management services deliver measurable results with transparent reporting.",
    metaTitle: "Meta Ads Agency India | Facebook & Instagram Ads | Fraga Technology",
    metaDescription:
      "Expert Meta Ads agency in India. Facebook Ads, Instagram Ads, lead generation & ecommerce campaigns. 3-5X ROAS guaranteed. Free audit: +91 9235000195",
    keywords: [
      "Meta Ads agency India",
      "Facebook Ads management",
      "Instagram Ads agency",
      "social media advertising India",
      "Facebook advertising company",
      "Meta Ads management services",
      "Facebook lead generation",
      "Instagram marketing agency",
      "social media PPC",
    ],
    heroText:
      "We create and manage high-performing Meta advertising campaigns on Facebook and Instagram that deliver 3-5X return on ad spend. Our Meta Ads agency India serves businesses across industries with precision audience targeting, scroll-stopping creatives, and continuous optimization for maximum ROI.",
    features: [
      {
        title: "Campaign Strategy & Setup",
        description: "Data-driven Meta Ads strategy aligned with your business goals, audience research, and competitive analysis for campaign success.",
      },
      {
        title: "Precision Audience Targeting",
        description: "Advanced audience segmentation using demographics, interests, behaviors, custom audiences, and lookalike modeling to reach your ideal customers.",
      },
      {
        title: "Creative Design & Copywriting",
        description: "Scroll-stopping ad creatives and compelling copy that capture attention and drive engagement across Facebook and Instagram placements.",
      },
      {
        title: "A/B Testing & Optimization",
        description: "Continuous testing of ad variations, audiences, and placements to identify top performers and maximize your advertising budget efficiency.",
      },
      {
        title: "Pixel & Conversion Tracking",
        description: "Complete Meta Pixel setup, conversion tracking, and attribution to measure real business results from every campaign.",
      },
      {
        title: "Performance Reporting",
        description: "Weekly and monthly performance reports with ROAS, CPA, reach, engagement metrics, and actionable optimization recommendations.",
      },
    ],
    outcomes: [
      { title: "3-5X Return on Ad Spend", description: "Data-driven optimization ensures maximum return on every advertising dollar invested." },
      { title: "High-Quality Leads", description: "Precision targeting delivers qualified prospects who are ready to engage with your business." },
      { title: "Increased Brand Awareness", description: "Strategic reach campaigns build brand recognition across Facebook and Instagram." },
      { title: "Scalable Growth", description: "Campaign frameworks designed to scale profitably as your advertising budget grows." },
    ],
    faqs: [
      {
        question: "How much should I spend on Meta Ads?",
        answer:
          "We recommend starting with a minimum of $500-$1,000/month in ad spend to gather sufficient data for optimization. The optimal budget depends on your industry, target audience size, and campaign goals. Our management fees are separate from ad spend and start at $350/month.",
      },
      {
        question: "How quickly will I see results from Meta Ads?",
        answer:
          "You can start seeing initial results (impressions, clicks, leads) within the first 1-2 weeks. Campaigns typically reach optimal performance within 4-6 weeks as we gather data and refine targeting. Some clients see positive ROAS within the first month.",
      },
      {
        question: "Do you manage both Facebook and Instagram Ads?",
        answer:
          "Yes, we manage campaigns across the entire Meta ecosystem including Facebook, Instagram, Messenger, and the Audience Network. We optimize placement strategies based on where your target audience is most responsive.",
      },
      {
        question: "What types of businesses benefit from Meta Ads?",
        answer:
          "Meta Ads work well for e-commerce brands, lead generation businesses, local services, real estate, healthcare, SaaS, and any business targeting consumers. The platform's detailed targeting makes it effective for reaching specific demographics and interests.",
      },
      {
        question: "How do you measure Meta Ads success?",
        answer:
          "We track key metrics including ROAS (Return on Ad Spend), CPA (Cost per Acquisition), CPL (Cost per Lead), CTR (Click-through Rate), conversion rates, and total revenue generated. Our reports show exactly how your ad investment translates to business results.",
      },
    ],
    ctaText: "Get Free Ads Audit",
  },
  "google-ads": {
    slug: "google-ads",
    title: "Google Ads Management",
    tagline: "Google Ads Management Services | PPC Advertising Experts India",
    description:
      "Fraga Technology provides professional Google Ads management services that maximize your return on investment. As certified Google Ads expert India specialists, we manage Search Ads, Display Ads, Shopping Ads, and YouTube Ads with data-driven strategies that deliver qualified traffic and conversions. Stop wasting ad spend—start generating real business results.",
    metaTitle: "Google Ads Management Services | PPC Expert India | Fraga Technology",
    metaDescription:
      "Professional Google Ads management services in India. Search Ads, Display Ads, Shopping Ads & YouTube Ads. Google Ads expert India. Free audit: +91 9235000195",
    keywords: [
      "Google Ads management services",
      "Google Ads expert India",
      "PPC advertising company",
      "Google Ads agency",
      "Google Search Ads",
      "Google Display Ads",
      "Shopping Ads management",
      "YouTube Ads agency",
      "pay per click India",
    ],
    heroText:
      "We manage high-performing Google Ads campaigns that deliver immediate visibility and qualified leads. As Google Ads management services experts, we optimize your campaigns for maximum ROI with strategic keyword targeting, compelling ad copy, and continuous bid optimization. Appear at the top of Google when customers are searching for your services.",
    features: [
      {
        title: "Google Search Ads",
        description: "High-intent Search campaigns targeting customers actively searching for your products and services with optimized keywords and ad copy.",
      },
      {
        title: "Display Advertising",
        description: "Visual display campaigns across the Google Display Network for brand awareness, remarketing, and reaching new audiences at scale.",
      },
      {
        title: "Google Shopping Ads",
        description: "Product listing ads for e-commerce businesses showcasing products directly in search results with images, prices, and reviews.",
      },
      {
        title: "Keyword Research & Strategy",
        description: "Comprehensive keyword analysis identifying high-converting search terms, negative keywords, and match type strategies for your campaigns.",
      },
      {
        title: "Smart Bid Optimization",
        description: "Advanced bidding strategies including Target CPA, Target ROAS, and manual optimization to maximize conversions within your budget.",
      },
      {
        title: "Conversion Tracking & Analytics",
        description: "Complete Google Analytics and conversion tracking setup measuring leads, sales, phone calls, and every touchpoint in your customer journey.",
      },
    ],
    outcomes: [
      { title: "Immediate Search Visibility", description: "Appear at the top of Google search results from day one of your campaign launch." },
      { title: "Qualified Traffic & Leads", description: "Attract visitors who are actively searching for what you offer—higher intent means higher conversions." },
      { title: "Measurable ROI", description: "Track every click, call, form submission, and sale with transparent attribution reporting." },
      { title: "Lower Cost Per Acquisition", description: "Continuous optimization reduces your CPA over time while maintaining lead quality." },
    ],
    faqs: [
      {
        question: "How much should I budget for Google Ads?",
        answer:
          "We recommend starting with $750-$1,500/month in ad spend for most industries. Competitive industries like legal, healthcare, and finance may require $2,000+ to see meaningful results. Our management fees are separate and start at $400/month depending on campaign complexity.",
      },
      {
        question: "How long before Google Ads generate results?",
        answer:
          "Google Ads can generate traffic and leads immediately after launch. We typically see campaigns reach optimal performance within 2-4 weeks as we refine keyword targeting, ad copy, and bidding strategies based on performance data.",
      },
      {
        question: "What types of Google Ads do you manage?",
        answer:
          "We manage Search Ads (text ads in search results), Display Ads (visual ads across websites), Shopping Ads (product listings for e-commerce), YouTube Ads (video advertising), and Performance Max campaigns that leverage Google's AI across all channels.",
      },
      {
        question: "How do you optimize Google Ads campaigns?",
        answer:
          "We continuously optimize through keyword refinement, negative keyword addition, ad copy testing, landing page improvements, bid adjustments, audience targeting, and Quality Score optimization. Our data-driven approach identifies opportunities to improve performance weekly.",
      },
      {
        question: "Can Google Ads work alongside SEO?",
        answer:
          "Absolutely. We recommend combining Google Ads with SEO for maximum visibility. Google Ads provides immediate traffic while SEO builds long-term organic presence. Together, they dominate search results and provide valuable keyword data for your SEO strategy.",
      },
    ],
    ctaText: "Get Free PPC Audit",
  },
  "graphics-design": {
    slug: "graphics-design",
    title: "Graphics Design",
    tagline: "Professional Graphic Design Services India",
    description:
      "Fraga Technology offers professional graphic design services that make your brand stand out in crowded markets. Our design team creates stunning logos, brand identities, social media creatives, marketing materials, and UI/UX designs that communicate your brand story effectively. From startups building their first visual identity to enterprises refreshing their brand, we deliver design that converts.",
    metaTitle: "Graphic Design Services India | Logo & Branding | Fraga Technology",
    metaDescription:
      "Professional graphic design services in India. Logo design, brand identity, social media creatives & UI/UX. Creative agency for startups & enterprises. Call +91 9235000195",
    keywords: [
      "graphic design services India",
      "logo design company",
      "brand identity design",
      "social media design",
      "UI/UX design services",
      "creative design agency",
      "marketing design",
      "visual design company",
    ],
    heroText:
      "Our design team creates stunning visual identities, marketing materials, and digital assets that communicate your brand story effectively. From logos to complete brand systems, we design with purpose and precision—ensuring every visual element drives business results.",
    features: [
      {
        title: "Logo & Brand Identity",
        description: "Distinctive logo designs and comprehensive brand identity systems including color palettes, typography, and brand guidelines that set you apart.",
      },
      {
        title: "Social Media Creatives",
        description: "Engaging social media graphics, stories, reels covers, and ad creatives optimized for each platform's specifications and best practices.",
      },
      {
        title: "Marketing Collaterals",
        description: "Brochures, flyers, presentations, business cards, and print materials that communicate your message with professional polish.",
      },
      {
        title: "UI/UX Design",
        description: "User interface and experience design for websites and applications with modern aesthetics and intuitive user flows.",
      },
      {
        title: "Packaging Design",
        description: "Product packaging designs that capture attention on shelves and in e-commerce listings, driving purchase decisions.",
      },
      {
        title: "Infographics & Data Visualization",
        description: "Visual representations of complex data and information that are easy to understand, share, and remember.",
      },
    ],
    outcomes: [
      { title: "Strong Brand Identity", description: "A cohesive visual identity that resonates with your target audience and builds recognition." },
      { title: "Professional Image", description: "Designs that establish credibility and trust with customers, partners, and investors." },
      { title: "Higher Engagement", description: "Visual content that captures attention and drives interaction across all channels." },
      { title: "Consistent Branding", description: "Unified design language across all marketing channels for memorable brand experiences." },
    ],
    faqs: [
      {
        question: "What graphic design services do you offer?",
        answer:
          "We offer logo design, complete brand identity systems, social media creatives, marketing collaterals (brochures, flyers, presentations), UI/UX design, packaging design, infographics, and custom illustrations. We can handle any visual design needs.",
      },
      {
        question: "How much does graphic design cost?",
        answer:
          "Prices vary by project scope. Logo design starts from $300, brand identity packages from $800, social media template packages from $400, and ongoing design retainers from $500/month. Contact us for a custom quote based on your specific needs.",
      },
      {
        question: "What is your design process?",
        answer:
          "Our process includes: (1) Discovery brief to understand your brand and goals, (2) Research and concept development, (3) Initial design presentations with 2-3 concepts, (4) Revisions based on your feedback, (5) Final delivery with all source files and brand guidelines.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "All our design packages include 2-3 rounds of revisions. Additional revisions are available at hourly rates. We work closely with you to ensure the final design meets your expectations.",
      },
      {
        question: "What file formats do you deliver?",
        answer:
          "We deliver all relevant file formats including AI, EPS, PDF, SVG, PNG, and JPG. For brand identity projects, you receive a comprehensive brand guidelines document along with all logo variations and source files.",
      },
    ],
    ctaText: "Start Design Project",
  },
  "social-media-marketing": {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    tagline: "Social Media Marketing Agency India | Build Your Online Community",
    description:
      "Fraga Technology provides comprehensive social media marketing services that build brand awareness, drive engagement, and grow your online community. We manage Instagram, Facebook, LinkedIn, Twitter, and YouTube with strategic content creation, community management, and data-driven growth tactics. Turn social media followers into loyal customers.",
    metaTitle: "Social Media Marketing Agency India | SMM Services | Fraga Technology",
    metaDescription:
      "Expert social media marketing agency in India. Instagram, Facebook, LinkedIn management. Content creation & community growth. Free strategy call: +91 9235000195",
    keywords: [
      "social media marketing India",
      "social media management",
      "Instagram marketing agency",
      "Facebook marketing services",
      "LinkedIn marketing",
      "social media agency India",
      "SMM services",
      "content marketing",
      "community management",
    ],
    heroText:
      "We craft strategic social media campaigns that build your brand presence, engage your target audience, and drive measurable business results. Our social media marketing services cover content strategy, creative production, community management, and analytics across Instagram, Facebook, LinkedIn, Twitter, and YouTube.",
    features: [
      {
        title: "Social Media Strategy",
        description: "Comprehensive social media strategy aligned with your business goals, including platform selection, content pillars, and posting schedules.",
      },
      {
        title: "Content Creation",
        description: "Professional graphics, videos, reels, carousels, and copywriting that align with your brand voice and drive engagement.",
      },
      {
        title: "Community Management",
        description: "Active engagement with your audience through comments, messages, and community building activities that foster brand loyalty.",
      },
      {
        title: "Influencer Partnerships",
        description: "Identifying and collaborating with relevant influencers to amplify your brand reach and credibility with target audiences.",
      },
      {
        title: "Analytics & Reporting",
        description: "Detailed performance tracking with insights on engagement rates, reach, follower growth, and content performance.",
      },
      {
        title: "Profile Optimization",
        description: "Complete profile optimization for each platform including bios, highlights, links, and platform-specific features.",
      },
    ],
    outcomes: [
      { title: "Brand Awareness Growth", description: "Increased visibility and recognition across social platforms reaching your target audience." },
      { title: "Engaged Community", description: "Build an active following that engages with your content and advocates for your brand." },
      { title: "Lead Generation", description: "Turn social media followers into qualified business leads and paying customers." },
      { title: "Customer Loyalty", description: "Foster deeper connections with existing customers through consistent engagement." },
    ],
    faqs: [
      {
        question: "Which social media platforms do you manage?",
        answer:
          "We manage Instagram, Facebook, LinkedIn, Twitter/X, YouTube, and TikTok. We help you select the right platforms based on where your target audience is most active and your business goals.",
      },
      {
        question: "How much does social media marketing cost?",
        answer:
          "Social media management packages start from $500/month for basic management of 2 platforms. Full-service packages with content creation, community management, and paid advertising range from $1,000-$2,500/month depending on scope.",
      },
      {
        question: "How do you measure social media success?",
        answer:
          "We track engagement rates (likes, comments, shares), follower growth, reach and impressions, website traffic from social media, lead generation, and brand mention tracking. Monthly reports show clear progress toward your goals.",
      },
      {
        question: "Do you create content or do we provide it?",
        answer:
          "We handle all content creation including graphics, videos, and copywriting. You provide brand guidelines, product information, and approval on content calendars. We can also repurpose your existing content for social media.",
      },
      {
        question: "How often will you post on our accounts?",
        answer:
          "Posting frequency depends on your package and platform strategy. Typical schedules range from 3-5 posts per week per platform. We create monthly content calendars for your approval before publishing.",
      },
    ],
    ctaText: "Get Social Media Strategy",
  },
  "seo-services-delhi": {
    slug: "seo-services-delhi",
    title: "SEO Services Delhi",
    tagline: "SEO Services in Delhi | Rank #1 on Google | Local SEO Delhi Experts",
    description:
      "Looking for the best SEO services in Delhi? Fraga Technology is a leading SEO company in Delhi specializing in local SEO services Delhi that help businesses rank higher on Google, increase organic traffic, and generate qualified leads. Our SEO company Delhi offers comprehensive on-page SEO, technical SEO audits, local SEO optimization, and strategic link building for Delhi, Noida, Gurgaon, and NCR businesses. We deliver sustainable rankings that drive real business growth.",
    metaTitle: "SEO Services Delhi | Best SEO Company in Delhi | Local SEO Experts | Fraga Technology",
    metaDescription:
      "Top SEO company in Delhi offering affordable SEO services Delhi. Local SEO services, technical SEO, on-page optimization. Get results in 90 days. Call +91 9235000195",
    keywords: [
      "SEO services Delhi",
      "SEO company in Delhi",
      "best SEO agency Delhi",
      "local SEO services Delhi",
      "affordable SEO services Delhi",
      "SEO company Delhi",
      "SEO agency Delhi",
      "digital marketing Delhi",
      "Google ranking Delhi",
      "SEO services Noida",
      "SEO services Gurgaon",
      "Delhi NCR SEO",
    ],
    heroText:
      "Boost your Delhi business visibility on Google with our results-driven SEO services. As the best SEO company in Delhi, we've helped 200+ businesses achieve top Google rankings for competitive keywords. Our local SEO services Delhi are tailored for Delhi, Noida, Gurgaon, and NCR businesses looking to dominate their local search results and generate consistent qualified leads. Get a free SEO audit today.",
    extendedContent: `
## Why Delhi Businesses Need SEO Services

Delhi's competitive market demands a strategic approach to digital visibility. With thousands of businesses competing for the same customers, ranking #1 on Google for local SEO keywords is critical.

**The Reality**: 76% of local searches result in store visits or calls. When someone searches "SEO services Delhi" or "digital marketing near me," they're ready to buy. If your business isn't on page 1 of Google, you're losing customers to competitors.

### The Challenge of SEO in Delhi's Competitive Market

Delhi businesses face unique SEO challenges:

- **High Competition**: Every business in Delhi wants to rank for the same keywords
- **Local Search Complexity**: Google shows different results based on location, user intent, and search history
- **Mobile-First Users**: Over 70% of searches in Delhi are on mobile devices
- **Algorithm Updates**: Google constantly changes its ranking algorithm, making outdated SEO tactics ineffective

### How Our SEO Services Delhi Solve These Challenges

At Fraga Technology, we've spent 5+ years perfecting SEO for Delhi businesses. Our local SEO services Delhi are designed specifically for the Delhi market:

## Our SEO Services Delhi Include

### 1. Local SEO Optimization for Delhi & NCR
- **Google My Business Optimization**: Complete profile optimization, photos, posts, and review management
- **Local Citation Building**: Listing in 50+ local directories (JustDial, IndiaMART, BusinessDirectory, etc.)
- **Location Pages**: Dedicated SEO landing pages for Delhi, Noida, Gurgaon, Rohini, Dwarka, and other key areas
- **Local Link Building**: Backlinks from Delhi-based businesses and directories
- **Review Management**: Increasing positive reviews on Google, JustDial, and industry-specific platforms

### 2. Technical SEO Audit & Optimization
- **Site Speed Optimization**: 90+ PageSpeed scores for faster rankings and user experience
- **Mobile Optimization**: Responsive design and mobile-first indexing compliance
- **Core Web Vitals**: Optimizing LCP, FID, and CLS for better rankings
- **XML Sitemaps & Robots.txt**: Proper crawlability and indexation setup
- **Schema Markup Implementation**: Local business schema, FAQPage, ProductSchema for rich snippets

### 3. On-Page SEO Services
- **Keyword Research**: Identifying high-intent, low-competition keywords for Delhi businesses
- **Title Tag & Meta Description Optimization**: Crafting compelling snippets that increase CTR
- **Heading Structure**: Proper H1, H2, H3 hierarchy for both SEO and user experience
- **Content Optimization**: Strategic keyword placement, LSI keywords, semantic optimization
- **Internal Linking**: Strategic linking to improve page authority and user journey

### 4. Content Strategy for Delhi SEO
- **Blog Content Creation**: SEO-optimized blog posts targeting local search terms
- **Service Page Optimization**: Comprehensive service pages optimized for local searches
- **Location Page Content**: Unique content for Delhi, Noida, Gurgaon, and other NCR areas
- **FAQ Content**: Topic clusters with natural language optimization for voice search
- **Content Calendar**: Monthly planning ensuring consistent, keyword-focused publishing

### 5. Link Building & Off-Page SEO
- **High-Quality Backlinks**: Building authority with relevant, high-authority websites
- **Local Business Links**: Links from Delhi business associations, chambers of commerce, and local partners
- **Press Release Distribution**: Digital PR for brand mentions and authoritative backlinks
- **Competitor Backlink Analysis**: Identifying link opportunities your competitors are using
- **Strategic Relationship Building**: Creating long-term link acquisition partnerships

### 6. Ongoing SEO Maintenance
- **Monthly Performance Reports**: Detailed analytics on rankings, traffic, leads, and conversions
- **Keyword Tracking**: Monitoring 200+ keyword rankings month-over-month
- **Competitor Monitoring**: Tracking competitor strategies and ranking changes
- **Algorithm Update Adaptation**: Quick response to Google updates
- **Proactive Optimization**: Continuous testing and refinement for better results

## Our SEO Process for Delhi Businesses

### Month 1: Analysis & Strategy
- Comprehensive SEO audit of your current website
- Competitor analysis (top 10 ranking websites)
- Keyword research for Delhi, Noida, Gurgaon
- SEO roadmap creation with clear milestones
- Google My Business optimization (if not done)

### Month 2-3: Technical Foundation & Initial Optimization
- Technical SEO fixes (speed, mobile, crawlability)
- On-page optimization for primary keywords
- Schema markup implementation
- Initial link building starts
- Content optimization begins

### Month 3-4: Content & Authority Building
- New SEO content published (blog posts, service pages)
- Location pages for Delhi, Noida, Gurgaon created
- Link building accelerates
- Social signals optimization
- Review generation campaign

### Month 5-6: Ranking Growth & Optimization
- Keywords start ranking on page 1 (primary keywords)
- Organic traffic begins increasing (50-100% typical)
- Refinement of underperforming pages
- Expansion of content calendar
- Conversion optimization starts

### Month 6-12: Domination & Lead Generation
- Primary keywords rank top 3-5
- Secondary keywords rank page 1
- Organic traffic increases 200-500%
- Consistent lead generation from organic search
- Competitive positioning strengthened

## Why Choose Fraga Technology for SEO Services Delhi?

### Local Delhi Expertise
We're based in Delhi and understand the local market deeply. We know what works for Delhi businesses—from retail shops in Connaught Place to software companies in Gurgaon to real estate agents in Noida.

### Transparent Reporting
Unlike other SEO companies in Delhi that hide their metrics, we provide clear, detailed monthly reports showing keyword rankings, traffic growth, lead generation, and ROI. You'll always know exactly what we're doing and what results we're achieving.

### No Gray Hat Tactics
We don't use private blog networks, keyword stuffing, or other black-hat SEO tactics that get websites penalized. Our approach focuses on sustainable, white-hat SEO that builds long-term authority.

### Industry Experience
We've delivered SEO for 200+ Delhi businesses across industries:
- Real Estate Companies in Delhi and NCR
- E-commerce Businesses
- Healthcare Practices & Clinics
- Law Firms & Legal Services
- Software Companies & IT Services
- Educational Institutions
- Digital Marketing Agencies
- Manufacturing & Industrial Companies

### Proven Results
Average results from our Delhi clients:
- 250% organic traffic increase in 6 months
- 40+ keywords ranking page 1
- 3-5 qualified leads per month
- 150% ROI within first year
- Average ranking improvement: position 45 → position 8

### Competitive Pricing
SEO services Delhi shouldn't be expensive. Our local SEO services Delhi start from ₹15,000/month (affordable SEO services Delhi) for basic optimization, with premium packages for agencies and enterprise clients.

## Case Study: Local Retail Business in Delhi

**Business**: Luxury retail chain with 5 locations in Delhi
**Challenge**: Low online visibility, losing customers to online competitors
**Solution**: Local SEO services Delhi targeting location-specific keywords
**Timeline**: 6 months
**Results**:
- 35 keywords ranking page 1
- 400% organic traffic increase
- 8-10 qualified leads per week
- 200% increase in foot traffic to stores
- 3x ROI in first year

## FAQ - SEO Services Delhi

These FAQs address common questions from Delhi businesses:

### How Much Do SEO Services Cost in Delhi?

SEO services Delhi pricing depends on competition and scope:
- Basic Local SEO: ₹15,000-₹25,000/month for small businesses
- Standard SEO Package: ₹30,000-₹50,000/month for competitive keywords
- Premium/Enterprise: ₹60,000-₹150,000+/month for aggressive growth

Our "No Results, No Payment" option: You pay only after we deliver first page rankings for 50% of target keywords. This ensures accountability and alignment with your goals.

### How Long Does SEO Take in Delhi?

**3 months**: Initial rankings for long-tail keywords
**4-5 months**: Primary keywords ranking page 1 (top 10)
**6-12 months**: Dominating top 3 positions for main keywords

Results depend on:
- Keyword competition level
- Current website authority
- Industry (competitive vs. niche)
- Monthly SEO budget

### Will My Business Show Up in Google Maps for Delhi?

Yes! Our SEO services Delhi include:
- Google My Business optimization
- Local citation building
- Review generation
- Location-specific landing pages

Your business will appear in Google Maps results for Delhi, Noida, Gurgaon, and NCR.

### What Keywords Should I Target for SEO in Delhi?

The best keywords depend on your business type. Examples:

**For Retail**: "electronics store Delhi", "jewelry shop Gurgaon", "clothing brand Noida"
**For Services**: "plumber in Delhi", "graphic designer Gurgaon", "accountant Noida"
**For B2B**: "software development company Delhi", "digital marketing agency Noida"
**For Healthcare**: "dentist in Delhi", "gynaecologist Gurgaon"

We conduct comprehensive keyword research to identify high-intent, low-competition keywords your target customers are searching for.

### How Do You Guarantee Rankings?

We don't guarantee rankings (any company promising guaranteed rankings is lying). Here's what we guarantee:

✓ Transparent monthly reporting on progress
✓ Honest communication about realistic timelines
✓ Best practices aligned with Google guidelines
✓ Regular optimization and strategy refinement
✓ Dedication to improving your Google visibility

### Do You Offer a Free SEO Audit?

Yes! We offer a free, no-obligation SEO audit for Delhi businesses. The audit includes:
- Current ranking analysis
- Technical SEO assessment
- Competitor analysis
- Traffic opportunities
- Recommended SEO strategy
- Estimated timeline & budget

Contact us today for your free SEO audit.

### Can You Help My Business Rank Locally in Delhi, Noida, and Gurgaon?

Absolutely. Our local SEO services Delhi handle multi-location optimization:
- Separate Google My Business profiles for each location
- Location-specific landing pages
- Local citation building in each city
- Localized content strategy
- Local link building

Perfect for retail chains, service companies, and franchise businesses across Delhi NCR.

### How Is Your SEO Different from Other SEO Companies in Delhi?

Three key differentiators:

**1. Transparency**: Monthly reports with clear metrics, not vague promises
**2. Local Expertise**: Based in Delhi, working exclusively with Delhi businesses
**3. Results Focus**: We're paid based on results—your success is our success

### What Metrics Do You Track?

Monthly reporting includes:
- Keyword rankings (200+ tracked keywords)
- Organic traffic growth
- Leads generated from organic search
- Conversion rates
- Local search visibility
- Competitor comparison

### Should I Use SEO or Google Ads for My Delhi Business?

**Use SEO when you want**:
- Long-term sustainable traffic (6+ months)
- Lower cost per acquisition
- Organic visibility (higher trust)

**Use Google Ads when you need**:
- Immediate traffic and leads
- Testing market demand
- Seasonal or time-limited campaigns
- Supplementing SEO while rankings build

**Ideal**: Combine both! Use Google Ads for immediate ROI while building SEO for long-term domination.
    `,
    features: [
      {
        title: "Local SEO Delhi Optimization",
        description:
          "Google My Business optimization, local citations, review management, and location-specific landing pages for Delhi, Noida, Gurgaon, and NCR areas.",
      },
      {
        title: "Technical SEO & Site Speed",
        description:
          "Core Web Vitals optimization, mobile responsiveness, site speed improvements, and crawlability fixes for better Google rankings.",
      },
      {
        title: "Keyword Research & Strategy",
        description:
          "Identifying high-intent, low-competition keywords specific to Delhi market with comprehensive competitor analysis and opportunity mapping.",
      },
      {
        title: "On-Page SEO Optimization",
        description:
          "Title tags, meta descriptions, heading structure, content optimization, and internal linking following Google's latest guidelines.",
      },
      {
        title: "Content Creation & Strategy",
        description:
          "SEO-optimized blog posts, service page content, location pages for Delhi/Noida/Gurgaon, and comprehensive content calendar management.",
      },
      {
        title: "Link Building & Authority",
        description:
          "High-quality backlinks from relevant websites, local business links, press releases, and strategic link acquisition partnerships.",
      },
    ],
    outcomes: [
      { title: "Top Google Rankings", description: "Rank #1-3 for target keywords in Delhi, Noida, and Gurgaon local searches." },
      { title: "Increased Organic Traffic", description: "200-500% organic traffic growth resulting in consistent qualified leads." },
      { title: "Lead Generation", description: "Quality leads from high-intent local searches ready to convert to customers." },
      { title: "Business Growth", description: "Sustainable growth through organic visibility at a fraction of paid advertising costs." },
    ],
    faqs: [
      {
        question: "How much do SEO services cost in Delhi?",
        answer:
          "SEO services Delhi pricing ranges from ₹15,000-₹25,000/month for basic local SEO to ₹60,000-₹150,000+/month for competitive keywords and enterprise solutions. We offer flexible packages based on your budget and goals. Contact us for a customized quote with a free SEO audit.",
      },
      {
        question: "How long does it take to rank on Google in Delhi?",
        answer:
          "Most websites see first page rankings within 3-4 months for long-tail keywords and 5-6 months for competitive keywords. This depends on keyword difficulty, current website authority, and competition level. We provide detailed timelines during the strategy phase.",
      },
      {
        question: "Will my business appear in Google Maps for Delhi?",
        answer:
          "Yes! Our local SEO services Delhi include Google My Business optimization, local citations, and review management to ensure your business appears prominently in Google Maps results for Delhi, Noida, Gurgaon, and nearby areas.",
      },
      {
        question: "Can you help my business rank for multiple cities like Delhi, Noida, and Gurgaon?",
        answer:
          "Absolutely. We specialize in multi-location SEO for Delhi NCR businesses. We create separate optimized pages for each location, manage multiple Google My Business profiles, and execute localized SEO strategies for each city.",
      },
      {
        question: "What keywords should I target for SEO in Delhi?",
        answer:
          "Target keywords depend on your business type and customer search behavior. We conduct comprehensive keyword research identifying high-intent, low-competition keywords your Delhi customers are searching for. Examples: 'SEO services Delhi', 'affordable plumber Delhi', 'best digital marketing agency Gurgaon'.",
      },
      {
        question: "How is your SEO company different from others in Delhi?",
        answer:
          "We combine local Delhi expertise with transparent reporting and guaranteed results focus. We provide monthly reports with clear metrics, work exclusively with white-hat SEO tactics, and our team is based in Delhi understanding the local market deeply. No black-hat tactics, no vague promises—just real results.",
      },
      {
        question: "Do you offer guaranteed SEO rankings?",
        answer:
          "We don't guarantee rankings (anyone promising guaranteed rankings is violating Google guidelines). We guarantee transparent monthly reporting, best practice optimization, and dedicated strategy refinement. On average, we deliver first page rankings within 5-6 months for competitive keywords.",
      },
    ],
    ctaText: "Get Free SEO Audit Delhi",
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
