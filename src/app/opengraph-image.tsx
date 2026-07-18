import { ImageResponse } from "next/og";

export const alt = "Mostefai Mounir Sofiane — AI & Front-end Engineer";
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
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          color: "#ffffff",
          background:
            "radial-gradient(circle at 20% 30%, rgba(0,242,254,0.2), transparent 45%), radial-gradient(circle at 80% 70%, rgba(157,78,221,0.22), transparent 45%), #070A12",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 4,
            color: "#00F2FE",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Mounir19000
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.05,
            maxWidth: 980,
            marginBottom: 20,
          }}
        >
          Mostefai Mounir Sofiane
        </div>
        <div
          style={{
            fontSize: 34,
            color: "#94A3B8",
            maxWidth: 980,
            lineHeight: 1.2,
          }}
        >
          AI & Front-end Engineer
        </div>
      </div>
    ),
    size,
  );
}
