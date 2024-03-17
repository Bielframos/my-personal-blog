"use client"

import hljs from "highlight.js"
import "highlight.js/styles/ascetic.css"
import { useEffect } from "react"

export const Highlighter = ({
  content,
  language = "typescript",
}: {
  content: string
  language?: "typescript"
}) => {
  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
    <div className="border overflow-x-auto rounded-lg">
      <pre className="light dark:invert">
        <code className={`language-${language}`}>{content}</code>
      </pre>
    </div>
  )
}
