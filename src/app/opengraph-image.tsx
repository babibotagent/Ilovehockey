import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PaixaoBR - A Seleção Brasileira";
export const size = { width: 1200, height: 630 };
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #071a0e 0%, #006B2D 50%, #071a0e 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFDF00"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 19.24 7 20h10c0-.76-.85-1.25-2.03-1.79C14.47 17.98 14 17.55 14 17v-2.34" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 900,
            marginTop: 20,
            letterSpacing: "-2px",
          }}
        >
          <span style={{ color: "#FFDF00" }}>Paixao</span>
          <span style={{ color: "#ffffff" }}>BR</span>
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.6)",
            marginTop: 12,
          }}
        >
          A Seleção Brasileira
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 24,
            fontSize: 20,
            color: "#FFDF00",
          }}
        >
          <span>⭐ 1958</span>
          <span>⭐ 1962</span>
          <span>⭐ 1970</span>
          <span>⭐ 1994</span>
          <span>⭐ 2002</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
