import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getPostBySlug, savePost, deletePost, estimateReadingTime, generateSlug } from "@/lib/blog"
import type { BlogPost } from "@/lib/blog"

const SESSION_COOKIE = "admin_session"
const SESSION_TOKEN = "authenticated"

async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const session = cookieStore.get(SESSION_COOKIE)
  return session?.value === SESSION_TOKEN
}

interface Params {
  params: Promise<{ slug: string }>
}

export async function GET(_request: Request, { params }: Params) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) {
    return NextResponse.json({ error: "Post not found." }, { status: 404 })
  }

  return NextResponse.json({ post })
}

export async function PUT(request: Request, { params }: Params) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { slug } = await params
  const existing = getPostBySlug(slug)
  if (!existing) {
    return NextResponse.json({ error: "Post not found." }, { status: 404 })
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

    const newSlug = title ? generateSlug(title) : slug
    const readingTime = content
      ? estimateReadingTime(content)
      : existing.readingTime

    const updated: BlogPost = {
      slug: newSlug,
      title: title || existing.title,
      description: description || existing.description,
      keywords: keywords
        ? keywords.split(",").map((k: string) => k.trim()).filter(Boolean)
        : existing.keywords,
      author: author || existing.author,
      publishDate: publishDate || existing.publishDate,
      updatedDate: new Date().toISOString(),
      featuredImage:
        featuredImage !== undefined ? featuredImage : existing.featuredImage,
      category: category || existing.category,
      readingTime,
      faqs: faqs !== undefined ? faqs : existing.faqs,
      content: content || existing.content,
    }

    // If slug changed, delete old file
    if (newSlug !== slug) {
      deletePost(slug)
    }

    savePost(updated)
    return NextResponse.json({ success: true, slug: newSlug })
  } catch {
    return NextResponse.json(
      { error: "Failed to update blog post." },
      { status: 500 }
    )
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { slug } = await params
  const deleted = deletePost(slug)
  if (!deleted) {
    return NextResponse.json({ error: "Post not found." }, { status: 404 })
  }

  return NextResponse.json({ success: true })
}
