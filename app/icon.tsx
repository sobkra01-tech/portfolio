import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Icon() {
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
          borderRadius: 14,
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
          fontWeight: 800,
          fontSize: 30,
          letterSpacing: -2,
          position: "relative"
        }}
      >
        KM
        <div
          style={{
            position: "absolute",
            left: "51%",
            top: "16%",
            width: 3,
            height: "68%",
            background: "#2158ff",
            borderRadius: 2,
            transform: "rotate(21deg)"
          }}
        />
      </div>
    ),
    size
  );
}
