"use client"

import { useState, useEffect, useCallback } from "react"
import { Loader2, LogOut, Plus, Pencil, Trash2, Eye, FileText, Search } from "lucide-react"
import Link from "next/link"

interface PostMeta {
  slug: string
  title: string
  description: string
  category: string
  publishDate: string
  author: string
  readingTime: string
}

interface FAQ {
  question: string
  answer: string
}

type View = "login" | "list" | "create" | "edit"

export default function AdminDashboard() {
  const [view, setView] = useState<View>("login")
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState<PostMeta[]>([])
  const [password, setPassword] = useState("")
  const [authError, setAuthError] = useState("")
  const [authLoading, setAuthLoading] = useState(false)

  // Form state
  const [formTitle, setFormTitle] = useState("")
  const [formDescription, setFormDescription] = useState("")
  const [formKeywords, setFormKeywords] = useState("")
  const [formAuthor, setFormAuthor] = useState("Fraga Technology")
  const [formCategory, setFormCategory] = useState("")
  const [formFeaturedImage, setFormFeaturedImage] = useState("")
  const [formContent, setFormContent] = useState("")
  const [formFaqs, setFormFaqs] = useState<FAQ[]>([])
  const [formSaving, setFormSaving] = useState(false)
  const [formError, setFormError] = useState("")
  const [editSlug, setEditSlug] = useState("")
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)

  const checkAuth = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/auth")
      if (res.ok) {
        setView("list")
        await fetchPosts()
      } else {
        setView("login")
      }
    } catch {
      setView("login")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  async function fetchPosts() {
    try {
      const res = await fetch("/api/admin/posts")
      if (res.ok) {
        const data = await res.json()
        setPosts(data.posts)
      }
    } catch {
      // silent
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setAuthLoading(true)
    setAuthError("")

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      })

      if (res.ok) {
        setView("list")
        setPassword("")
        await fetchPosts()
      } else {
        const data = await res.json()
        setAuthError(data.error || "Invalid credentials.")
      }
    } catch {
      setAuthError("Network error. Please try again.")
    } finally {
      setAuthLoading(false)
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" })
    setView("login")
    setPosts([])
  }

  function resetForm() {
    setFormTitle("")
    setFormDescription("")
    setFormKeywords("")
    setFormAuthor("Fraga Technology")
    setFormCategory("")
    setFormFeaturedImage("")
    setFormContent("")
    setFormFaqs([])
    setFormError("")
    setEditSlug("")
  }

  function openCreate() {
    resetForm()
    setView("create")
  }

  async function openEdit(slug: string) {
    try {
      const res = await fetch(`/api/admin/posts/${slug}`)
      if (res.ok) {
        const data = await res.json()
        const post = data.post
        setFormTitle(post.title)
        setFormDescription(post.description)
        setFormKeywords(post.keywords?.join(", ") || "")
        setFormAuthor(post.author)
        setFormCategory(post.category)
        setFormFeaturedImage(post.featuredImage || "")
        setFormContent(post.content)
        setFormFaqs(post.faqs || [])
        setEditSlug(slug)
        setFormError("")
        setView("edit")
      }
    } catch {
      // silent
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setFormSaving(true)
    setFormError("")

    const payload = {
      title: formTitle,
      description: formDescription,
      keywords: formKeywords,
      author: formAuthor,
      category: formCategory,
      featuredImage: formFeaturedImage,
      content: formContent,
      faqs: formFaqs,
    }

    try {
      const isEdit = view === "edit"
      const url = isEdit
        ? `/api/admin/posts/${editSlug}`
        : "/api/admin/posts"
      const method = isEdit ? "PUT" : "POST"

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setView("list")
        resetForm()
        await fetchPosts()
      } else {
        const data = await res.json()
        setFormError(data.error || "Failed to save post.")
      }
    } catch {
      setFormError("Network error. Please try again.")
    } finally {
      setFormSaving(false)
    }
  }

  async function handleDelete(slug: string) {
    try {
      const res = await fetch(`/api/admin/posts/${slug}`, { method: "DELETE" })
      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p.slug !== slug))
        setDeleteConfirm(null)
      }
    } catch {
      // silent
    }
  }

  function addFaq() {
    setFormFaqs((prev) => [...prev, { question: "", answer: "" }])
  }

  function updateFaq(index: number, field: "question" | "answer", value: string) {
    setFormFaqs((prev) =>
      prev.map((faq, i) => (i === index ? { ...faq, [field]: value } : faq))
    )
  }

  function removeFaq(index: number) {
    setFormFaqs((prev) => prev.filter((_, i) => i !== index))
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  // Login screen
  if (view === "login") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent">
              <span className="text-2xl font-bold text-primary-foreground">F</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Enter the admin password to continue.
            </p>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            {authError && (
              <div className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                {authError}
              </div>
            )}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin password"
              required
              className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button
              type="submit"
              disabled={authLoading}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg disabled:opacity-70"
            >
              {authLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>
      </div>
    )
  }

  // Blog editor form
  if (view === "create" || view === "edit") {
    return (
      <div className="min-h-screen bg-background px-6 py-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">
              {view === "create" ? "New Blog Post" : "Edit Blog Post"}
            </h1>
            <button
              onClick={() => {
                setView("list")
                resetForm()
              }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Cancel
            </button>
          </div>

          <form onSubmit={handleSave} className="flex flex-col gap-6">
            {formError && (
              <div className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                {formError}
              </div>
            )}

            <div>
              <label htmlFor="form-title" className="mb-2 block text-sm font-medium text-foreground">
                Title <span className="text-destructive">*</span>
              </label>
              <input
                id="form-title"
                type="text"
                required
                value={formTitle}
                onChange={(e) => setFormTitle(e.target.value)}
                placeholder="Blog post title"
                className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label htmlFor="form-description" className="mb-2 block text-sm font-medium text-foreground">
                Meta Description <span className="text-destructive">*</span>
              </label>
              <textarea
                id="form-description"
                rows={3}
                required
                value={formDescription}
                onChange={(e) => setFormDescription(e.target.value)}
                placeholder="SEO-friendly description for search results..."
                className="w-full resize-none rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="form-keywords" className="mb-2 block text-sm font-medium text-foreground">
                  Keywords
                </label>
                <input
                  id="form-keywords"
                  type="text"
                  value={formKeywords}
                  onChange={(e) => setFormKeywords(e.target.value)}
                  placeholder="keyword1, keyword2, keyword3"
                  className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="form-category" className="mb-2 block text-sm font-medium text-foreground">
                  Category
                </label>
                <input
                  id="form-category"
                  type="text"
                  value={formCategory}
                  onChange={(e) => setFormCategory(e.target.value)}
                  placeholder="e.g. Digital Strategy"
                  className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="form-author" className="mb-2 block text-sm font-medium text-foreground">
                  Author
                </label>
                <input
                  id="form-author"
                  type="text"
                  value={formAuthor}
                  onChange={(e) => setFormAuthor(e.target.value)}
                  placeholder="Fraga Technology"
                  className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="form-featured-image" className="mb-2 block text-sm font-medium text-foreground">
                  Featured Image URL
                </label>
                <input
                  id="form-featured-image"
                  type="text"
                  value={formFeaturedImage}
                  onChange={(e) => setFormFeaturedImage(e.target.value)}
                  placeholder="/images/blog-image.jpg"
                  className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div>
              <label htmlFor="form-content" className="mb-2 block text-sm font-medium text-foreground">
                Content (Markdown) <span className="text-destructive">*</span>
              </label>
              <textarea
                id="form-content"
                rows={16}
                required
                value={formContent}
                onChange={(e) => setFormContent(e.target.value)}
                placeholder="## Your Blog Content&#10;&#10;Write your content using Markdown formatting..."
                className="w-full rounded-xl border border-input bg-card px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* FAQ Section */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <label className="text-sm font-medium text-foreground">
                  FAQ Schema Fields
                </label>
                <button
                  type="button"
                  onClick={addFaq}
                  className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-accent"
                >
                  <Plus className="h-4 w-4" />
                  Add FAQ
                </button>
              </div>
              {formFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="mb-4 rounded-xl border border-border bg-card p-4"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-semibold text-muted-foreground">
                      FAQ {index + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeFaq(index)}
                      className="text-xs text-destructive hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                  <input
                    type="text"
                    value={faq.question}
                    onChange={(e) => updateFaq(index, "question", e.target.value)}
                    placeholder="Question"
                    className="mb-3 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                  <textarea
                    rows={2}
                    value={faq.answer}
                    onChange={(e) => updateFaq(index, "answer", e.target.value)}
                    placeholder="Answer"
                    className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>
              ))}
            </div>

            <button
              type="submit"
              disabled={formSaving}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg disabled:opacity-70"
            >
              {formSaving ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : view === "create" ? (
                "Publish Blog Post"
              ) : (
                "Update Blog Post"
              )}
            </button>
          </form>
        </div>
      </div>
    )
  }

  // Post listing
  return (
    <div className="min-h-screen bg-background px-6 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Blog Dashboard</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Manage your blog posts and SEO content.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/admin/seo"
              className="flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Search className="h-4 w-4" />
              SEO Dashboard
            </Link>
            <button
              onClick={openCreate}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg"
            >
              <Plus className="h-4 w-4" />
              New Post
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-12 text-center">
            <FileText className="mx-auto mb-4 h-12 w-12 text-muted-foreground/30" />
            <p className="text-lg font-medium text-foreground">No blog posts yet</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Create your first post to start building your content library.
            </p>
            <button
              onClick={openCreate}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg"
            >
              <Plus className="h-4 w-4" />
              Create First Post
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <div
                key={post.slug}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(post.publishDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className="truncate text-base font-bold text-foreground">
                    {post.title}
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {post.author} &middot; {post.readingTime}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={`View ${post.title}`}
                  >
                    <Eye className="h-4 w-4" />
                  </Link>
                  <button
                    onClick={() => openEdit(post.slug)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={`Edit ${post.title}`}
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  {deleteConfirm === post.slug ? (
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleDelete(post.slug)}
                        className="rounded-lg bg-destructive/10 px-3 py-1.5 text-xs font-medium text-destructive"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(null)}
                        className="rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setDeleteConfirm(post.slug)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-destructive"
                      aria-label={`Delete ${post.title}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
