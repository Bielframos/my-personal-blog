"use client"

import hljs from "highlight.js"
import "highlight.js/styles/ascetic.css"
import { Copy } from "lucide-react"
import { useEffect, useState } from "react"

const Highlighter = ({
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
				<header className="relative pl-4 py-2 border-b flex items-center text-black-12 dark:text-white-12">
					{title}{" "}
					<button
						type="button"
						className="absolute right-1 flex gap-2 items-center p-2 h-8 rounded-md bg-black-2 dark:bg-white-2 hover:bg-black-3 dark:hover:bg-white-3 transition-all"
						onClick={handleCopy}
					>
						<Copy size={16} /> {copyCheck && "copiado"}
					</button>
				</header>
			)}
			<pre className="light dark:invert">
				<code className={`language-${language}`}>{content}</code>
			</pre>
		</div>
	)
}

export default Highlighter
