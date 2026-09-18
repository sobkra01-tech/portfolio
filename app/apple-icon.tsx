import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Same "KM" monogram as icon.tsx, just rendered at the size Apple devices expect for home-screen icons. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1220",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
          fontWeight: 800,
          fontSize: 84,
          letterSpacing: -6,
          position: "relative"
        }}
      >
        KM
        <div
          style={{
            position: "absolute",
            left: "51%",
            top: "16%",
            width: 8,
            height: "68%",
            background: "#2158ff",
            borderRadius: 4,
            transform: "rotate(21deg)"
          }}
        />
      </div>
    ),
    size
  );
}
