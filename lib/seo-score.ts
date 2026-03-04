export interface SEOCheck {
  label: string
  passed: boolean
  message: string
}

export interface SEOScore {
  score: number
  status: "good" | "needs-improvement" | "poor"
  checks: SEOCheck[]
}

export function calculateSEOScore(data: {
  title: string
  description: string
  focusKeyword: string
  content: string
  slug: string
}): SEOScore {
  const checks: SEOCheck[] = []
  const { title, description, focusKeyword, content, slug } = data

  const keyword = focusKeyword.toLowerCase().trim()
  const titleLower = title.toLowerCase()
  const descLower = description.toLowerCase()
  const contentLower = content.toLowerCase()
  const slugLower = slug.toLowerCase()

  // 1. Keyword in title
  const keywordInTitle = keyword ? titleLower.includes(keyword) : false
  checks.push({
    label: "Keyword in Title",
    passed: keywordInTitle,
    message: keywordInTitle
      ? "Focus keyword found in the title."
      : "Focus keyword is missing from the title. Add it for better SEO.",
  })

  // 2. Keyword in description
  const keywordInDesc = keyword ? descLower.includes(keyword) : false
  checks.push({
    label: "Keyword in Description",
    passed: keywordInDesc,
    message: keywordInDesc
      ? "Focus keyword found in the meta description."
      : "Focus keyword is missing from the meta description.",
  })

  // 3. Keyword in first H1/heading (check if content starts with keyword-rich heading)
  const hasH1Keyword = keyword
    ? contentLower.includes(`## ${keyword}`) ||
      contentLower.includes(`# ${keyword}`) ||
      contentLower.substring(0, 200).includes(keyword)
    : false
  checks.push({
    label: "Keyword in Content Heading",
    passed: hasH1Keyword,
    message: hasH1Keyword
      ? "Focus keyword found in content headings."
      : "Include the focus keyword in your H1 or H2 headings.",
  })

  // 4. Keyword density (1-3% is ideal)
  const words = contentLower.split(/\s+/).filter(Boolean)
  const wordCount = words.length
  const keywordOccurrences = keyword
    ? (contentLower.match(new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi")) || []).length
    : 0
  const density = wordCount > 0 ? (keywordOccurrences / wordCount) * 100 : 0
  const goodDensity = density >= 0.5 && density <= 3
  checks.push({
    label: "Keyword Density",
    passed: goodDensity,
    message: goodDensity
      ? `Keyword density is ${density.toFixed(1)}% (ideal: 0.5-3%).`
      : density < 0.5
        ? `Keyword density is ${density.toFixed(1)}%. Try using the keyword more (aim for 0.5-3%).`
        : `Keyword density is ${density.toFixed(1)}%. Reduce keyword usage to avoid over-optimization.`,
  })

  // 5. Content length (300+ words is minimum, 1000+ is good)
  const goodLength = wordCount >= 300
  checks.push({
    label: "Content Length",
    passed: goodLength,
    message: goodLength
      ? `Content has ${wordCount} words (good length for SEO).`
      : `Content has only ${wordCount} words. Aim for at least 300 words for better SEO.`,
  })

  // 6. Meta title length (50-60 chars ideal)
  const goodTitleLength = title.length >= 30 && title.length <= 70
  checks.push({
    label: "Title Length",
    passed: goodTitleLength,
    message: goodTitleLength
      ? `Title length is ${title.length} characters (ideal: 30-70).`
      : `Title length is ${title.length} characters. Aim for 30-70 characters.`,
  })

  // 7. Meta description length (120-160 chars ideal)
  const goodDescLength = description.length >= 100 && description.length <= 170
  checks.push({
    label: "Description Length",
    passed: goodDescLength,
    message: goodDescLength
      ? `Description is ${description.length} characters (ideal: 100-170).`
      : `Description is ${description.length} characters. Aim for 100-170 characters.`,
  })

  // 8. Internal links check
  const hasInternalLinks =
    contentLower.includes("[") && contentLower.includes("](/") ||
    contentLower.includes("fragatechnology") ||
    contentLower.includes("/services/") ||
    contentLower.includes("/blog/")
  checks.push({
    label: "Internal Links",
    passed: hasInternalLinks,
    message: hasInternalLinks
      ? "Content includes internal links."
      : "Add internal links to other pages for better SEO and user experience.",
  })

  // 9. Keyword in slug
  const keywordInSlug = keyword ? slugLower.includes(keyword.replace(/\s+/g, "-")) : false
  checks.push({
    label: "Keyword in URL Slug",
    passed: keywordInSlug,
    message: keywordInSlug
      ? "Focus keyword found in the URL slug."
      : "Consider including the focus keyword in the URL slug.",
  })

  // 10. Has subheadings
  const hasSubheadings = content.includes("## ") || content.includes("### ")
  checks.push({
    label: "Subheadings",
    passed: hasSubheadings,
    message: hasSubheadings
      ? "Content uses subheadings for good structure."
      : "Add H2/H3 subheadings to improve readability and SEO.",
  })

  // Calculate score
  const passedCount = checks.filter((c) => c.passed).length
  const score = Math.round((passedCount / checks.length) * 100)

  let status: "good" | "needs-improvement" | "poor"
  if (score >= 70) status = "good"
  else if (score >= 40) status = "needs-improvement"
  else status = "poor"

  return { score, status, checks }
}
