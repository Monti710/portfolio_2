import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite", // Animación existente
        glow: "glow 1.5s infinite alternate", // Nueva animación glow
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 10px rgba(255, 0, 0, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(255, 0, 0, 1)" },
          "100%": { boxShadow: "0 0 10px rgba(255, 0, 0, 0.5)" },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;