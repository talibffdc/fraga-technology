"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SafeImage from "@/components/safe-image"
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

type FormStatus = "idle" | "submitting" | "success" | "error"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus("error")
        setErrorMessage(data.error || "Something went wrong.")
        return
      }

      setStatus("success")
      setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" })
    } catch {
      setStatus("error")
      setErrorMessage("Network error. Please check your connection and try again.")
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg viewBox="0 0 1200 600" className="h-full w-full" aria-hidden="true">
          <ellipse cx="600" cy="300" rx="500" ry="250" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <ellipse cx="600" cy="300" rx="350" ry="250" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <ellipse cx="600" cy="300" rx="180" ry="250" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <line x1="100" y1="300" x2="1100" y2="300" stroke="currentColor" strokeWidth="0.5" />
          <line x1="600" y1="50" x2="600" y2="550" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Get In Touch
          </h2>
          <h3 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">{"Let's build something great together"}</span>
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Contact Fraga Technology for a free consultation on web development,
            mobile app development, SEO, or digital marketing.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="overflow-hidden rounded-2xl">
              <SafeImage
                src="/images/contact.jpg"
                alt="Fraga Technology office - ready to discuss your web development project"
                width={600}
                height={400}
                fallbackText="Contact Us"
                style={{ width: "100%", height: "auto" }}
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Phone</p>
                  <a href="tel:+919235000195" className="text-base font-semibold text-foreground hover:text-primary transition-colors">
                    +91 9235000195
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <a href="mailto:contact@fragatechnology.com" className="text-base font-semibold text-foreground hover:text-primary transition-colors">
                    contact@fragatechnology.com
                  </a>
                  <br />
                  <a href="mailto:fragatechnology@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    fragatechnology@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Office</p>
                  <p className="text-base font-semibold text-foreground">
                    F.F.D.C Kannauj, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              className="rounded-2xl bg-card p-8 shadow-lg md:p-10"
              onSubmit={handleSubmit}
            >
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-accent/10">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">Message Sent!</h4>
                    <p className="max-w-sm text-sm text-muted-foreground">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-4 rounded-full border border-primary px-6 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-6"
                  >
                    {status === "error" && (
                      <div className="flex items-center gap-3 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-foreground">
                          First Name <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-foreground">
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9235000195"
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
                        Subject <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="I need a website for my business"
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                        Message <span className="text-destructive">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project requirements..."
                        className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.02] disabled:opacity-70 disabled:pointer-events-none flex items-center justify-center gap-2"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
