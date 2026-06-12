import { ImageResponse } from "next/og";

export const alt = "ILoveHockey — Montreal Canadiens Fan Hub";
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
          background: "linear-gradient(135deg, #0a0e1a 0%, #003DA5 50%, #0a0e1a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "#C8102E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "48px",
              fontWeight: 900,
              color: "white",
            }}
          >
            H
          </div>
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 900,
            color: "white",
            display: "flex",
          }}
        >
          <span style={{ color: "#C8102E" }}>ILove</span>
          <span>Hockey</span>
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "rgba(255,255,255,0.7)",
            marginTop: "16px",
          }}
        >
          Montreal Canadiens — 24x Stanley Cup Champions
        </div>
        <div
          style={{
            display: "flex",
            gap: "32px",
            marginTop: "32px",
            fontSize: "18px",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          <span>Roster</span>
          <span>•</span>
          <span>History</span>
          <span>•</span>
          <span>Schedule</span>
          <span>•</span>
          <span>Playoffs</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
