import fs from "fs"
import path from "path"

export interface BlogFAQ {
  question: string
  answer: string
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  keywords: string[]
  author: string
  publishDate: string
  updatedDate: string
  featuredImage: string
  category: string
  readingTime: string
  faqs: BlogFAQ[]
  content: string
}

export type BlogPostMeta = Omit<BlogPost, "content">

const BLOG_DIR = path.join(process.cwd(), "content", "blog")

function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true })
  }
}

function parseBlogFile(filename: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_DIR, filename)
    const raw = fs.readFileSync(filePath, "utf-8")
    const data = JSON.parse(raw) as BlogPost
    return data
  } catch {
    return null
  }
}

export function getAllPosts(): BlogPost[] {
  ensureBlogDir()
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".json"))
  const posts = files
    .map((f) => parseBlogFile(f))
    .filter((p): p is BlogPost => p !== null)
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    )
  return posts
}

export function getAllPostsMeta(): BlogPostMeta[] {
  return getAllPosts().map(({ content, ...meta }) => meta)
}

export function getPostBySlug(slug: string): BlogPost | null {
  ensureBlogDir()
  const filePath = path.join(BLOG_DIR, `${slug}.json`)
  if (!fs.existsSync(filePath)) return null
  try {
    const raw = fs.readFileSync(filePath, "utf-8")
    return JSON.parse(raw) as BlogPost
  } catch {
    return null
  }
}

export function savePost(post: BlogPost): void {
  ensureBlogDir()
  const filePath = path.join(BLOG_DIR, `${post.slug}.json`)
  fs.writeFileSync(filePath, JSON.stringify(post, null, 2), "utf-8")
}

export function deletePost(slug: string): boolean {
  ensureBlogDir()
  const filePath = path.join(BLOG_DIR, `${slug}.json`)
  if (!fs.existsSync(filePath)) return false
  fs.unlinkSync(filePath)
  return true
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function estimateReadingTime(content: string): string {
  const words = content.split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(words / 200))
  return `${minutes} min read`
}
