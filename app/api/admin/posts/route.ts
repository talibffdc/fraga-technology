import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getAllPostsMeta, savePost, generateSlug, estimateReadingTime } from "@/lib/blog"
import type { BlogPost } from "@/lib/blog"

const SESSION_COOKIE = "admin_session"
const SESSION_TOKEN = "authenticated"

async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const session = cookieStore.get(SESSION_COOKIE)
  return session?.value === SESSION_TOKEN
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const posts = getAllPostsMeta()
  return NextResponse.json({ posts })
}

export async function POST(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const {
      title,
      description,
      keywords,
      author,
      publishDate,
      featuredImage,
      category,
      faqs,
      content,
    } = body

    if (!title || !description || !content) {
      return NextResponse.json(
        { error: "Title, description, and content are required." },
        { status: 400 }
      )
    }

    const slug = generateSlug(title)
    const readingTime = estimateReadingTime(content)
    const now = new Date().toISOString()

    const post: BlogPost = {
      slug,
      title,
      description,
      keywords: keywords
        ? keywords.split(",").map((k: string) => k.trim()).filter(Boolean)
        : [],
      author: author || "Fraga Technology",
      publishDate: publishDate || now,
      updatedDate: now,
      featuredImage: featuredImage || "",
      category: category || "General",
      readingTime,
      faqs: faqs || [],
      content,
    }

    savePost(post)
    return NextResponse.json({ success: true, slug })
  } catch {
    return NextResponse.json(
      { error: "Failed to save blog post." },
      { status: 500 }
    )
  }
}
