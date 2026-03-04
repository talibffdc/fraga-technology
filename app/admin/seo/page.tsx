import type { Metadata } from "next"
import SEODashboard from "@/components/seo-dashboard"

export const metadata: Metadata = {
  title: "SEO Control Center",
  robots: { index: false, follow: false },
}

export default function SEOPage() {
  return <SEODashboard />
}
