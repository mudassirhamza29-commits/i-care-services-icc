import { ImageResponse } from "next/og";

export const alt = "I-Care Services CIC community support";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #1A1A2E 0%, #242844 55%, #2A7F6F 100%)",
          color: "white",
          display: "flex",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          justifyContent: "space-between",
          overflow: "hidden",
          padding: "72px 80px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "54px solid rgba(244, 162, 97, 0.18)",
            borderRadius: "999px",
            height: "330px",
            position: "absolute",
            right: "-100px",
            top: "-90px",
            width: "330px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "720px" }}>
          <div
            style={{
              color: "#F4A261",
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 4,
              marginBottom: 28,
              textTransform: "uppercase",
            }}
          >
            Community support
          </div>
          <div style={{ display: "flex", fontSize: 70, fontWeight: 800, letterSpacing: -3, lineHeight: 1.05 }}>
            Everyone deserves support.
          </div>
          <div style={{ color: "rgba(255,255,255,0.78)", display: "flex", fontSize: 28, lineHeight: 1.45, marginTop: 28 }}>
            Practical guidance across health, housing, welfare, family and mental wellbeing.
          </div>
          <div style={{ color: "#F4A261", display: "flex", fontSize: 25, fontWeight: 700, marginTop: 34 }}>
            I-Care Services CIC
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            background: "rgba(255,255,255,0.10)",
            border: "2px solid rgba(255,255,255,0.16)",
            borderRadius: 56,
            display: "flex",
            height: 310,
            justifyContent: "center",
            position: "relative",
            width: 310,
          }}
        >
          <div style={{ background: "#F4A261", borderRadius: 34, height: 80, position: "absolute", width: 218 }} />
          <div style={{ background: "#F4A261", borderRadius: 34, height: 218, position: "absolute", width: 80 }} />
          <div style={{ background: "#2A7F6F", border: "13px solid #1A1A2E", borderRadius: 999, height: 76, left: 32, position: "absolute", top: 34, width: 76 }} />
          <div style={{ background: "#F4A261", border: "13px solid #1A1A2E", borderRadius: 999, bottom: 32, height: 76, position: "absolute", right: 32, width: 76 }} />
        </div>
      </div>
    ),
    size,
  );
}
