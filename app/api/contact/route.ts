import { NextResponse } from "next/server"
import { Resend } from "resend"

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
}

function sanitize(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

function validate(body: ContactFormData): string | null {
  const { firstName, email, phone, subject, message } = body

  if (!firstName || firstName.trim().length < 2) {
    return "First name must be at least 2 characters."
  }
  if (firstName.trim().length > 100) {
    return "First name is too long."
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email.trim())) {
    return "Please provide a valid email address."
  }

  if (phone && phone.trim().length > 0) {
    const phoneRegex = /^[+]?[\d\s\-().]{7,20}$/
    if (!phoneRegex.test(phone.trim())) {
      return "Please provide a valid phone number."
    }
  }

  if (!subject || subject.trim().length < 3) {
    return "Subject must be at least 3 characters."
  }
  if (subject.trim().length > 200) {
    return "Subject is too long."
  }

  if (!message || message.trim().length < 10) {
    return "Message must be at least 10 characters."
  }
  if (message.trim().length > 5000) {
    return "Message is too long (max 5000 characters)."
  }

  return null
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json()
    const validationError = validate(body)

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.")
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)
    const contactEmail = process.env.CONTACT_EMAIL || "talibffdc@gmail.com"
    const { firstName, lastName, email, phone, subject, message } = body

    const safeName = sanitize(`${firstName} ${lastName || ""}`.trim())
    const safeEmail = sanitize(email)
    const safePhone = sanitize(phone || "Not provided")
    const safeSubject = sanitize(subject)
    const safeMessage = sanitize(message)

    const { error } = await resend.emails.send({
      from: "Fraga Technology <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: email.trim(),
      subject: `New Contact: ${subject.trim()}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background-color: #f9fafb; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #0f172a, #1e293b); padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0;">New Contact Form Submission</h1>
          </div>
          <div style="background: #ffffff; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; width: 120px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 600;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 600;">
                  <a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: none;">${safeEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 600;">${safePhone}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Subject</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 600;">${safeSubject}</td>
              </tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="color: #6b7280; font-size: 14px; margin-bottom: 8px;">Message</p>
              <div style="background: #f9fafb; padding: 16px; border-radius: 8px; color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</div>
            </div>
          </div>
          <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 24px;">
            Sent from Fraga Technology Contact Form
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    )
  }
}
