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
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      black: {
        1: "hsla(0, 0%, 0%, 0.05)",
        2: "hsla(0, 0%, 0%, 0.1)",
        3: "hsla(0, 0%, 0%, 0.15)",
        4: "hsla(0, 0%, 0%, 0.2)",
        5: "hsla(0, 0%, 0%, 0.3)",
        6: "hsla(0, 0%, 0%, 0.4)",
        7: "hsla(0, 0%, 0%, 0.5)",
        8: "hsla(0, 0%, 0%, 0.6)",
        9: "hsla(0, 0%, 0%, 0.7)",
        10: "hsla(0, 0%, 0%, 0.8)",
        11: "hsla(0, 0%, 0%, 0.9)",
        12: "hsla(0, 0%, 0%, 1)",
      },
      white: {
        1: "hsla(0, 0%, 100%, 0.05)",
        2: "hsla(0, 0%, 100%, 0.1)",
        3: "hsla(0, 0%, 100%, 0.15)",
        4: "hsla(0, 0%, 100%, 0.2)",
        5: "hsla(0, 0%, 100%, 0.3)",
        6: "hsla(0, 0%, 100%, 0.4)",
        7: "hsla(0, 0%, 100%, 0.5)",
        8: "hsla(0, 0%, 100%, 0.6)",
        9: "hsla(0, 0%, 100%, 0.7)",
        10: "hsla(0, 0%, 100%, 0.8)",
        11: "hsla(0, 0%, 100%, 0.9)",
        12: "hsla(0, 0%, 100%, 1)",
      },
      sky: {
        1: "hsl(var(--blue-1) / <alpha-value>)",
        2: "hsl(var(--blue-2) / <alpha-value>)",
        3: "hsl(var(--blue-3) / <alpha-value>)",
        4: "hsl(var(--blue-4) / <alpha-value>)",
        5: "hsl(var(--blue-5) / <alpha-value>)",
        6: "hsl(var(--blue-6) / <alpha-value>)",
        7: "hsl(var(--blue-7) / <alpha-value>)",
        8: "hsl(var(--blue-8) / <alpha-value>)",
        9: "hsl(var(--blue-9) / <alpha-value>)",
        10: "hsl(var(--blue-10) / <alpha-value>)",
        11: "hsl(var(--blue-11) / <alpha-value>)",
        12: "hsl(var(--blue-12) / <alpha-value>)",
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

