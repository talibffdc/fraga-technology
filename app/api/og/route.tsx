import { ImageResponse } from "next/og"
import { type NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get("title") || "Fraga Technology"
  const description =
    searchParams.get("description") ||
    "We Build the Future - Web Development, Mobile Apps, SEO & Digital Marketing"

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #0a0a0a 0%, #0d1b2a 50%, #1b2838 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #0066ff, #00c2ff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 700,
              color: "white",
            }}
          >
            F
          </div>
          <span
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            Fraga Technology
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "52px",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: "900px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.4,
              maxWidth: "700px",
            }}
          >
            {description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            fragatechnology.com
          </span>
          <div
            style={{
              width: "120px",
              height: "4px",
              borderRadius: "2px",
              background: "linear-gradient(90deg, #0066ff, #00c2ff)",
            }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
