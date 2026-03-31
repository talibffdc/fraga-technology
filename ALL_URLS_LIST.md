# FRAGA TECHNOLOGY - COMPLETE URL LIST

**Base Domain:** https://fraga-technology.com

---

## 1. CORE PAGES (3 URLs)

1. https://fraga-technology.com
2. https://fraga-technology.com/about
3. https://fraga-technology.com/contact

---

## 2. SERVICES PAGES (4 URLs)

**Service Index:**
1. https://fraga-technology.com/services

**Individual Service Pages:**
2. https://fraga-technology.com/services/website-development
3. https://fraga-technology.com/services/mobile-app-development
4. https://fraga-technology.com/services/seo-services

---

## 3. LOCATIONS - COUNTRY PAGES (6 URLs)

**Location Index:**
1. https://fraga-technology.com/locations

**Individual Country Pages:**
2. https://fraga-technology.com/locations/india
3. https://fraga-technology.com/locations/usa
4. https://fraga-technology.com/locations/uk
5. https://fraga-technology.com/locations/uae
6. https://fraga-technology.com/locations/canada

---

## 4. CITIES PAGES (6 URLs)

**Cities Index:**
1. https://fraga-technology.com/cities

**Individual City Pages:**
2. https://fraga-technology.com/cities/delhi
3. https://fraga-technology.com/cities/noida
4. https://fraga-technology.com/cities/bangalore
5. https://fraga-technology.com/cities/lucknow
6. https://fraga-technology.com/cities/kannauj

---

## 5. INDUSTRIES PAGES (5 URLs)

**Industries Index:**
1. https://fraga-technology.com/industries

**Individual Industry Pages:**
2. https://fraga-technology.com/industries/real-estate
3. https://fraga-technology.com/industries/healthcare
4. https://fraga-technology.com/industries/law-firms
5. https://fraga-technology.com/industries/saas

---

## 6. INDUSTRY + SERVICE COMBINATION PAGES (7 URLs)

**Industry-Services Index:**
1. https://fraga-technology.com/industry-services

**Individual Industry-Service Pages:**
2. https://fraga-technology.com/industry-services/web-development-real-estate
3. https://fraga-technology.com/industry-services/web-development-healthcare
4. https://fraga-technology.com/industry-services/seo-law-firms
5. https://fraga-technology.com/industry-services/ecommerce-shopify
6. https://fraga-technology.com/industry-services/web-development-saas
7. https://fraga-technology.com/industry-services/web-development-fintech

---

## 7. PRICING PAGES (3 URLs)

1. https://fraga-technology.com/pricing/website-development-cost
2. https://fraga-technology.com/pricing/ecommerce-website-cost
3. https://fraga-technology.com/pricing/mobile-app-development-cost

---

## 8. CASE STUDIES PAGES (10 URLs)

**Case Studies Index:**
1. https://fraga-technology.com/case-studies

**Individual Case Study Pages:**
2. https://fraga-technology.com/case-studies/ecommerce-fashion-brand
3. https://fraga-technology.com/case-studies/saas-startup-platform
4. https://fraga-technology.com/case-studies/real-estate-property-portal
5. https://fraga-technology.com/case-studies/healthcare-clinic-portal
6. https://fraga-technology.com/case-studies/law-firm-seo
7. https://fraga-technology.com/case-studies/fintech-mobile-app
8. https://fraga-technology.com/case-studies/ecommerce-b2b-marketplace
9. https://fraga-technology.com/case-studies/mobile-fitness-app
10. https://fraga-technology.com/case-studies/enterprise-crm-system

---

## 9. BLOG PAGES (DYNAMIC)

**Blog Index:**
1. https://fraga-technology.com/blog

**Individual Blog Posts:**
- https://fraga-technology.com/blog/[slug]
  - *Posts are stored in JSON format and dynamically generated*
  - *Add new posts by creating JSON files in /content/blog/ directory*

---

## 10. LEGAL & UTILITY PAGES (2 URLs)

1. https://fraga-technology.com/privacy
2. https://fraga-technology.com/terms

---

## 11. ADMIN PAGES (2 URLs) - Internal Only

1. https://fraga-technology.com/admin/dashboard
   - Password: fraga-admin-2026
   - Function: Blog management, content editing

2. https://fraga-technology.com/admin/seo
   - Password: fraga-admin-2026
   - Function: SEO monitoring, analytics

---

## 12. API ROUTES (1 URL)

1. https://fraga-technology.com/api/og
   - Function: Dynamic Open Graph image generation

---

## 13. SITEMAP & ROBOTS (2 URLs)

1. https://fraga-technology.com/sitemap.xml
2. https://fraga-technology.com/robots.txt

---

## TOTAL URL COUNT SUMMARY

| Category | Count |
|----------|-------|
| Core Pages | 3 |
| Services | 4 |
| Locations (Countries) | 6 |
| Cities | 6 |
| Industries | 5 |
| Industry-Services | 7 |
| Pricing | 3 |
| Case Studies | 10 |
| Blog | Dynamic (Unlimited) |
| Legal/Utility | 2 |
| Admin | 2 |
| API | 1 |
| Sitemap/Robots | 2 |
| **TOTAL STATIC** | **51** |
| **+ Dynamic Blog Posts** | **Unlimited** |

---

## SCALABILITY NOTES

### Cities (Currently 5, Expandable to 50+)
- Add more cities by updating `/lib/cities.ts`
- No code changes needed
- Each city gets: landing page, local SEO, services listing, FAQs

### Countries (Currently 5)
- Add more countries by updating `/lib/locations.ts`
- Framework supports unlimited countries
- When USA, UK, UAE, Canada get cities, those cities will auto-link from country pages

### Industries (Currently 4)
- Add more industries by updating `/lib/industries.ts`
- Scalable to 10-15+ industries

### Industry-Services (Currently 6)
- Add more combinations by updating `/lib/industry-services.ts`
- Supports unlimited combinations

### Blog Posts
- Add new blog posts by creating JSON files in `/content/blog/`
- Each JSON file auto-generates a blog post page
- Unlimited scalability

---

## URL STRUCTURE PATTERNS

### Dynamic Routes Pattern:
```
/[section]/[slug]
```

Examples:
- `/services/[service-slug]`
- `/cities/[city-slug]`
- `/locations/[country-slug]`
- `/industries/[industry-slug]`
- `/industry-services/[combination-slug]`
- `/case-studies/[case-slug]`
- `/blog/[post-slug]`

---

## SEO KEYWORDS BY CATEGORY

### Services
- Website development, mobile app development, SEO services

### Locations
- Web development in [country], software services in [country]

### Cities
- Web development in [city], website design [city], SEO [city]

### Industries
- [Industry] digital solutions, website development for [industry]

### Industry-Services
- Web development for [industry], SEO for [industry]

### Pricing
- Website cost, app development pricing, SEO cost

### Case Studies
- Portfolio, project showcase, client success stories

---

## INTERNAL LINKING HIERARCHY

**Conversion Hub Pages:**
- Contact (/contact)
- Services (/services)
- Case Studies (/case-studies)

**Authority Pillar Pages:**
- Service detail pages
- Location/Country pages
- Industry pages

**Cluster Content:**
- City pages → link to country
- Industry-services → link to services
- Blog posts → link to services & case studies

---

## MOBILE & RESPONSIVE

All URLs are fully responsive and optimized for:
- Mobile (320px - 767px)
- Tablet (768px - 1023px)
- Desktop (1024px+)

---

## CONVERSION ELEMENTS ON ALL PAGES

- Sticky WhatsApp button (bottom-right)
- Floating call button (bottom-left)
- Mid-page CTA sections
- Contact form CTAs

---

**Last Updated:** 2026
**Total Unique URLs (Static):** 51
**Total Unique URLs (Including Blog):** 51+ (scalable to 100+)
