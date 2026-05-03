import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Dynamic params
    const title = searchParams.get("title") || "Maninder Singh";
    const description = searchParams.get("description") || "Software Engineer & Builder";
    const category = searchParams.get("category") || "maninder.co.in";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            backgroundColor: "#09090b", // zinc-950
            padding: "80px",
            fontFamily: "sans-serif",
          }}
        >
          {/* Background grid pattern simulation */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: "radial-gradient(circle at 25px 25px, #27272a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #27272a 2%, transparent 0%)",
              backgroundSize: "100px 100px",
              opacity: 0.4,
            }}
          />

          {/* Accent glow */}
          <div
            style={{
              position: "absolute",
              top: "-20%",
              left: "-10%",
              width: "60%",
              height: "60%",
              background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)",
              borderRadius: "50%",
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: "#60a5fa", // blue-400
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {category}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              maxWidth: "800px",
            }}
          >
            <h1
              style={{
                fontSize: 64,
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.1,
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: 32,
                fontWeight: 400,
                color: "#a1a1aa", // zinc-400
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              {description}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "absolute",
              bottom: "80px",
              left: "80px",
            }}
          >
            <div
              style={{
                fontSize: 24,
                fontWeight: 500,
                color: "#e4e4e7", // zinc-200
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)", // blue to violet
                }}
              />
              Maninder.co.in
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.error("OG Image generation failed:", e);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
