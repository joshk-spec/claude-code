import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0f1e3d",
          light: "#1a2d52",
          dark: "#081530",
        },
        brass: {
          DEFAULT: "#c9a961",
          dark: "#a8893f",
          light: "#e0c890",
        },
        cream: {
          DEFAULT: "#faf6ef",
          dark: "#f2ebdc",
        },
        ink: {
          DEFAULT: "#1a1a1a",
          muted: "#5a5a5a",
        },
        "border-soft": "#e5dfd1",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15, 30, 61, 0.04), 0 4px 16px rgba(15, 30, 61, 0.06)",
        brass: "0 1px 2px rgba(168, 137, 63, 0.2), 0 4px 12px rgba(168, 137, 63, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
