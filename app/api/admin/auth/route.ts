import { NextResponse } from "next/server"
import { cookies } from "next/headers"

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "fraga-admin-2026"
const SESSION_COOKIE = "admin_session"
const SESSION_TOKEN = "authenticated"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { password } = body

    if (!password) {
      return NextResponse.json({ error: "Password is required." }, { status: 400 })
    }

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Invalid password." }, { status: 401 })
    }

    const cookieStore = await cookies()
    cookieStore.set(SESSION_COOKIE, SESSION_TOKEN, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    )
  }
}

export async function DELETE() {
  try {
    const cookieStore = await cookies()
    cookieStore.delete(SESSION_COOKIE)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const cookieStore = await cookies()
    const session = cookieStore.get(SESSION_COOKIE)

    if (session?.value === SESSION_TOKEN) {
      return NextResponse.json({ authenticated: true })
    }

    return NextResponse.json({ authenticated: false }, { status: 401 })
  } catch {
    return NextResponse.json({ authenticated: false }, { status: 401 })
  }
}
