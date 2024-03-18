"use client"

import hljs from "highlight.js"
import "highlight.js/styles/ascetic.css"
import { Copy } from "lucide-react"
import { useEffect, useState } from "react"

export const Highlighter = ({
  title,
  content,
  language = "typescript",
}: {
  title?: string
  content: string
  language?: "typescript"
}) => {
  const [copyCheck, setCopyCheck] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(content)
    setCopyCheck(true)
    setInterval(() => {
      setCopyCheck(false)
    }, 3000)
  }

  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
    <div className="border overflow-x-auto rounded-lg">
      {title && (
        <header className="pl-6 pr-2 py-2 border-b flex items-center justify-between text-black-12 dark:text-white-12">
          {title}{" "}
          <button
            className="flex gap-2 items-center px-4 py-1 rounded-md bg-black-2 dark:bg-white-2 hover:bg-black-3 dark:hover:bg-white-3 transition-all"
            onClick={handleCopy}
          >
            <Copy size={16} /> {copyCheck ? "copiado" : "copiar"}
          </button>
        </header>
      )}
      <pre className="light dark:invert">
        <code className={`language-${language}`}>{content}</code>
      </pre>
    </div>
  )
}

