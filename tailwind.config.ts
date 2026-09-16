import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1220",
        anthracite: "#081227",
        signature: {
          DEFAULT: "#2158ff",
          dark: "#1743d8",
          light: "#6d97ff"
        },
        border: {
          DEFAULT: "#e6eaf2",
          soft: "#edf0f6"
        },
        muted: {
          DEFAULT: "#47536b",
          soft: "#8b97ab"
        },
        surface: {
          DEFAULT: "#ffffff",
          tint: "#f4f7fc"
        }
      },
      fontFamily: {
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        body: ["var(--font-instrument)", "system-ui", "sans-serif"]
      },
      maxWidth: {
        shell: "1680px"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-up": "fade-up .6s ease-out forwards"
      }
    }
  },
  plugins: []
};

export default config;
