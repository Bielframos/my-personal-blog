import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: [
    "variant",
    ["@media_(prefers-color-scheme:dark)_{&:not(.light_*)}", "&:is(.dark_*)"],
  ],
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
        "texture-white": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='white' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
        "texture-black": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='black' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
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
      blue: {
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
