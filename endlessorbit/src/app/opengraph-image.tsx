import { ImageResponse } from "next/og";
import { profile } from "@/data/social";

export const runtime = "edge";
export const alt = `${profile.name} — Endless Orbit`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(900px 600px at 70% -10%, #1b1140, #05060f 60%), linear-gradient(180deg, #03040a, #0a0e24)",
          color: "#eaf2ff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 8,
            color: "#22d3ee",
            textTransform: "uppercase",
          }}
        >
          Mission Log
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 800,
            marginTop: 18,
            lineHeight: 1.05,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            marginTop: 24,
            color: "#a9b6d6",
            maxWidth: 900,
          }}
        >
          This is not my destination. This is my orbit.
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            right: 80,
            bottom: 70,
            fontSize: 24,
            color: "#8b5cf6",
          }}
        >
          ✦ Endless Orbit
        </div>
      </div>
    ),
    { ...size },
  );
}
