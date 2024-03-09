import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Geist Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      sky: {
        1: "hsl(var(--sky-1) / <alpha-value>)",
        2: "hsl(var(--sky-2) / <alpha-value>)",
        3: "hsl(var(--sky-3) / <alpha-value>)",
        4: "hsl(var(--sky-4) / <alpha-value>)",
        5: "hsl(var(--sky-5) / <alpha-value>)",
        6: "hsl(var(--sky-6) / <alpha-value>)",
        7: "hsl(var(--sky-7) / <alpha-value>)",
        8: "hsl(var(--sky-8) / <alpha-value>)",
        9: "hsl(var(--sky-9) / <alpha-value>)",
        10: "hsl(var(--sky-10) / <alpha-value>)",
        11: "hsl(var(--sky-11) / <alpha-value>)",
        12: "hsl(var(--sky-12) / <alpha-value>)",
      },
      orange: {
        1: "hsl(var(--orange-1) / <alpha-value>)",
        2: "hsl(var(--orange-2) / <alpha-value>)",
        3: "hsl(var(--orange-3) / <alpha-value>)",
        4: "hsl(var(--orange-4) / <alpha-value>)",
        5: "hsl(var(--orange-5) / <alpha-value>)",
        6: "hsl(var(--orange-6) / <alpha-value>)",
        7: "hsl(var(--orange-7) / <alpha-value>)",
        8: "hsl(var(--orange-8) / <alpha-value>)",
        9: "hsl(var(--orange-9) / <alpha-value>)",
        10: "hsl(var(--orange-10) / <alpha-value>)",
        11: "hsl(var(--orange-11) / <alpha-value>)",
        12: "hsl(var(--orange-12) / <alpha-value>)",
      },
    },
  },
  plugins: [],
}
export default config

