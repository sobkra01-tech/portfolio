import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Same "KM" monogram and colors as icon.tsx, extended to the 1200x630
 * social-share format, with the real, already-validated name/title text
 * (profile.name/profile.title — identical across locales by convention,
 * so a single image serves both languages).
 */
export default function OpengraphImage() {
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
          background: "#0b1220",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            fontSize: 120,
            letterSpacing: -6,
            position: "relative"
          }}
        >
          KM
          <div
            style={{
              position: "absolute",
              left: "51%",
              top: "10%",
              width: 10,
              height: "80%",
              background: "#2158ff",
              borderRadius: 5,
              transform: "rotate(21deg)"
            }}
          />
        </div>
        <div style={{ marginTop: 32, fontSize: 44, fontWeight: 700 }}>{profile.name}</div>
        <div style={{ marginTop: 12, fontSize: 26, color: "#7aa0ff" }}>{profile.title}</div>
      </div>
    ),
    size
  );
}
