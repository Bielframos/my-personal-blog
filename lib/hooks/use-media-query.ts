import { useEffect, useState } from "react"

function removeReservedMediaKeyWord(mediaQueryString: string) {
	return mediaQueryString.replace("@media", "").trim()
}

export const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState(false)

	useEffect(() => {
		const mediaQuery = window.matchMedia(removeReservedMediaKeyWord(query))
		const handler = (event: MediaQueryListEvent) => setMatches(event.matches)
		setMatches(mediaQuery.matches)

		mediaQuery.addEventListener("change", handler)

		return () => {
			mediaQuery.removeEventListener("change", handler)
		}
	}, [query])

	return matches
}
