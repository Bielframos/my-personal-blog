import { useEffect, useMemo, useState } from "react"

function removeReservedMediaKeyWord(mediaQueryString: string) {
  return mediaQueryString.replace("@media", "").trim()
}

export function useMediaQuery(mediaQueryString: string) {
  const queryString = removeReservedMediaKeyWord(mediaQueryString)
  const query = useMemo(() => window.matchMedia(queryString), [queryString])
  const [matches, setMatches] = useState(query.matches)

  useEffect(() => {
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches)
    query.addEventListener("change", listener)
    return () => query.removeEventListener("change", listener)
  }, [query])

  return matches
}
