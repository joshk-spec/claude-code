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
        seal: "0 10px 40px rgba(15, 30, 61, 0.25), 0 2px 6px rgba(15, 30, 61, 0.15)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-mid": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-fast": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-mid": "float-mid 7s ease-in-out infinite 0.4s",
        "float-fast": "float-fast 5s ease-in-out infinite 0.8s",
        "fade-in-up": "fade-in-up 0.6s ease-out both",
        "slide-in-right": "slide-in-right 0.3s ease-out both",
        "slide-out-right": "slide-out-right 0.3s ease-in both",
      },
    },
  },
  plugins: [],
};

export default config;
