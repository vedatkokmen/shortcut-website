import { ImageResponse } from "next/og";
import { siteConfig } from "./site-config";

export const alt = "Shortcut social discovery app";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f2ec",
          color: "#1f1a14",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 34,
            fontWeight: 700,
          }}
        >
          <span>{siteConfig.name}</span>
          <span
            style={{
              color: "#c7572c",
              fontFamily: "Arial, sans-serif",
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Social discovery, curated
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              maxWidth: 830,
              display: "flex",
              flexDirection: "column",
              fontSize: 104,
              fontWeight: 700,
              letterSpacing: "-0.05em",
              lineHeight: 0.9,
            }}
          >
            <div style={{ display: "flex" }}>Skip the swipe.</div>
            <div style={{ display: "flex" }}>
              Take the <span style={{ color: "#c7572c" }}>shortcut.</span>
            </div>
          </div>
          <div
            style={{
              marginTop: 34,
              maxWidth: 650,
              color: "#3f3830",
              fontFamily: "Arial, sans-serif",
              fontSize: 30,
              lineHeight: 1.32,
            }}
          >
            Intentional connections for dating, friendship and networking.
          </div>
        </div>
      </div>
    ),
    size
  );
}
