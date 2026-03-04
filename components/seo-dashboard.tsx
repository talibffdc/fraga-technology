"use client"

import { useState, useEffect, useCallback } from "react"
import {
  Loader2,
  LogOut,
  Search,
  Globe,
  FileText,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  BarChart3,
  Map,
  Shield,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

interface SEOCheck {
  label: string
  passed: boolean
  message: string
}

interface PageData {
  type: "page" | "service" | "blog"
  title: string
  slug: string
  focusKeyword: string
  score: number
  status: "good" | "needs-improvement" | "poor"
  checks: SEOCheck[]
  lastModified: string
}

interface SEOOverview {
  totalPages: number
  averageScore: number
  goodCount: number
  needsImprovementCount: number
  poorCount: number
  sitemapUrl: string
  robotsUrl: string
}

interface SEOData {
  overview: SEOOverview
  pages: PageData[]
  siteConfig: {
    name: string
    url: string
    description: string
  }
}

function ScoreCircle({ score, size = "lg" }: { score: number; size?: "sm" | "lg" }) {
  const color =
    score >= 70
      ? "text-success"
      : score >= 40
        ? "text-warning"
        : "text-destructive"

  const bgColor =
    score >= 70
      ? "bg-success/10"
      : score >= 40
        ? "bg-warning/10"
        : "bg-destructive/10"

  const strokeColor =
    score >= 70
      ? "stroke-success"
      : score >= 40
        ? "stroke-warning"
        : "stroke-destructive"

  const radius = size === "lg" ? 45 : 18
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference
  const svgSize = size === "lg" ? 120 : 48

  return (
    <div className={`relative flex items-center justify-center ${bgColor} rounded-full`} style={{ width: svgSize, height: svgSize }}>
      <svg width={svgSize} height={svgSize} className="-rotate-90">
        <circle
          cx={svgSize / 2}
          cy={svgSize / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={size === "lg" ? 6 : 3}
          className="text-muted/30"
        />
        <circle
          cx={svgSize / 2}
          cy={svgSize / 2}
          r={radius}
          fill="none"
          strokeWidth={size === "lg" ? 6 : 3}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={`${strokeColor} transition-all duration-700`}
        />
      </svg>
      <span className={`absolute ${color} ${size === "lg" ? "text-2xl" : "text-xs"} font-bold`}>
        {score}
      </span>
    </div>
  )
}

function StatusBadge({ status }: { status: "good" | "needs-improvement" | "poor" }) {
  const config = {
    good: { bg: "bg-success/10", text: "text-success", label: "Good" },
    "needs-improvement": { bg: "bg-warning/10", text: "text-warning", label: "Needs Work" },
    poor: { bg: "bg-destructive/10", text: "text-destructive", label: "Poor" },
  }
  const c = config[status]
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${c.bg} ${c.text}`}>
      {c.label}
    </span>
  )
}

function PageRow({ page }: { page: PageData }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-secondary/50"
      >
        <ScoreCircle score={page.score} size="sm" />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="truncate text-sm font-semibold text-foreground">
              {page.title}
            </span>
            <span className="rounded-md bg-secondary px-1.5 py-0.5 text-[10px] font-medium uppercase text-muted-foreground">
              {page.type}
            </span>
          </div>
          <div className="flex items-center gap-3 mt-0.5">
            <span className="text-xs text-muted-foreground truncate">
              {page.slug}
            </span>
            {page.focusKeyword && (
              <span className="text-xs text-primary truncate">
                {page.focusKeyword}
              </span>
            )}
          </div>
        </div>
        <StatusBadge status={page.status} />
        {page.checks.length > 0 && (
          expanded ? (
            <ChevronUp className="h-4 w-4 shrink-0 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
          )
        )}
      </button>

      {expanded && page.checks.length > 0 && (
        <div className="border-t border-border bg-secondary/30 px-5 py-4">
          <div className="flex flex-col gap-2">
            {page.checks.map((check, i) => (
              <div key={i} className="flex items-start gap-3">
                {check.passed ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                ) : (
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                )}
                <div>
                  <span className="text-xs font-semibold text-foreground">
                    {check.label}
                  </span>
                  <p className="text-xs text-muted-foreground">{check.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function SEODashboard() {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [data, setData] = useState<SEOData | null>(null)
  const [password, setPassword] = useState("")
  const [authError, setAuthError] = useState("")
  const [authLoading, setAuthLoading] = useState(false)
  const [filter, setFilter] = useState<"all" | "good" | "needs-improvement" | "poor">("all")
  const [searchQuery, setSearchQuery] = useState("")

  const checkAuth = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/auth")
      if (res.ok) {
        setAuthenticated(true)
        await fetchData()
      }
    } catch {
      // not authenticated
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  async function fetchData() {
    try {
      const res = await fetch("/api/admin/seo")
      if (res.ok) {
        const d = await res.json()
        setData(d)
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
        setAuthenticated(true)
        setPassword("")
        await fetchData()
      } else {
        const d = await res.json()
        setAuthError(d.error || "Invalid credentials.")
      }
    } catch {
      setAuthError("Network error.")
    } finally {
      setAuthLoading(false)
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" })
    setAuthenticated(false)
    setData(null)
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent">
              <Search className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">SEO Control Center</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Enter the admin password to manage SEO settings.
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

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  const filteredPages = data.pages
    .filter((p) => filter === "all" || p.status === filter)
    .filter(
      (p) =>
        !searchQuery ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.focusKeyword.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <div className="min-h-screen bg-background px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <Link
                href="/admin/dashboard"
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Blog Dashboard
              </Link>
            </div>
            <h1 className="text-2xl font-bold text-foreground">SEO Control Center</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Monitor and optimize SEO performance across all pages.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchData()}
              className="flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <BarChart3 className="h-4 w-4" />
              Refresh
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

        {/* Overview cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
            <ScoreCircle score={data.overview.averageScore} size="lg" />
            <div>
              <p className="text-sm text-muted-foreground">Average SEO Score</p>
              <p className="text-2xl font-bold text-foreground">
                {data.overview.averageScore}
                <span className="text-sm font-normal text-muted-foreground">/100</span>
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="mb-3 flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              <p className="text-sm font-medium text-muted-foreground">Indexed Pages</p>
            </div>
            <p className="text-3xl font-bold text-foreground">{data.overview.totalPages}</p>
            <div className="mt-3 flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1 text-success">
                <CheckCircle2 className="h-3 w-3" />
                {data.overview.goodCount} Good
              </span>
              <span className="flex items-center gap-1 text-warning">
                <AlertTriangle className="h-3 w-3" />
                {data.overview.needsImprovementCount} Needs Work
              </span>
              <span className="flex items-center gap-1 text-destructive">
                <XCircle className="h-3 w-3" />
                {data.overview.poorCount} Poor
              </span>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="mb-3 flex items-center gap-2">
              <Map className="h-5 w-5 text-primary" />
              <p className="text-sm font-medium text-muted-foreground">Sitemap</p>
            </div>
            <p className="text-sm font-semibold text-foreground mb-1">Active</p>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-primary hover:underline"
            >
              View sitemap.xml
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="mb-3 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <p className="text-sm font-medium text-muted-foreground">Robots.txt</p>
            </div>
            <p className="text-sm font-semibold text-foreground mb-1">Configured</p>
            <a
              href="/robots.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-primary hover:underline"
            >
              View robots.txt
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* SEO Settings Summary */}
        <div className="mb-8 rounded-2xl border border-border bg-card p-6">
          <h2 className="mb-4 text-lg font-bold text-foreground">Global SEO Settings</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-1">Site Title</p>
              <p className="text-sm font-semibold text-foreground">{data.siteConfig.name}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-1">Site URL</p>
              <p className="text-sm font-semibold text-foreground">{data.siteConfig.url}</p>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <p className="text-xs font-medium text-muted-foreground mb-1">Meta Title Template</p>
              <p className="text-sm text-foreground">{"Page Title | Fraga Technology"}</p>
            </div>
            <div className="sm:col-span-2 lg:col-span-3">
              <p className="text-xs font-medium text-muted-foreground mb-1">Default Description</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{data.siteConfig.description}</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
            <div className="rounded-lg bg-success/10 px-3 py-1.5 text-xs font-medium text-success">
              Open Graph: Enabled
            </div>
            <div className="rounded-lg bg-success/10 px-3 py-1.5 text-xs font-medium text-success">
              Twitter Cards: Enabled
            </div>
            <div className="rounded-lg bg-success/10 px-3 py-1.5 text-xs font-medium text-success">
              Canonical URLs: Auto
            </div>
            <div className="rounded-lg bg-success/10 px-3 py-1.5 text-xs font-medium text-success">
              JSON-LD Schema: Active
            </div>
            <div className="rounded-lg bg-success/10 px-3 py-1.5 text-xs font-medium text-success">
              OG Image Generator: Active
            </div>
          </div>
        </div>

        {/* Page-level SEO analysis */}
        <div className="rounded-2xl border border-border bg-card">
          <div className="border-b border-border p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Page SEO Analysis
              </h2>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search pages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="rounded-lg border border-input bg-background pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 w-48"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {(["all", "good", "needs-improvement", "poor"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    filter === f
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f === "all" ? "All Pages" : f === "good" ? "Good" : f === "needs-improvement" ? "Needs Work" : "Poor"}
                </button>
              ))}
            </div>
          </div>

          <div>
            {filteredPages.length === 0 ? (
              <div className="p-12 text-center">
                <p className="text-sm text-muted-foreground">No pages matching the current filter.</p>
              </div>
            ) : (
              filteredPages.map((page, i) => <PageRow key={i} page={page} />)
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
