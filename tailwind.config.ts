import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./lib/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: [
		"variant",
		[
			"@media (prefers-color-scheme: dark) { &:not(.light *) }",
			"&:is(.dark *)",
		],
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
			transparent: "transparent",
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
				1: "#fbfdff",
				2: "#f4faff",
				3: "#e6f4fe",
				4: "#d5efff",
				5: "#c2e5ff",
				6: "#acd8fc",
				7: "#8ec8f6",
				8: "#5eb1ef",
				9: "#0090ff",
				10: "#0588f0",
				11: "#0d74ce",
				12: "#113264",
			},
			"blue-dark": {
				1: "#0d1520",
				2: "#111927",
				3: "#0d2847",
				4: "#003362",
				5: "#004074",
				6: "#104d87",
				7: "#205d9e",
				8: "#2870bd",
				9: "#0090ff",
				10: "#3b9eff",
				11: "#70b8ff",
				12: "#c2e6ff",
			},
		},
	},
	plugins: [],
}
export default config
