import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Solutions from "@/components/solutions"
import StrategyCards from "@/components/strategy-cards"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schemas"
import { siteConfig } from "@/lib/site-config"

export default function Page() {
  const homeBreadcrumb = breadcrumbSchema([
    { name: "Home", url: siteConfig.url },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeBreadcrumb),
        }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <StrategyCards />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
