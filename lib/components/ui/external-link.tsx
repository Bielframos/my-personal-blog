import { SquareArrowOutUpRight } from "lucide-react"
import Link from "next/link"

const ExternalLink = ({
	href,
	children,
}: {
	href: string
	children: React.ReactNode
}) => {
	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="inline-flex gap-1 items-center text-blue-9 w-fit hover:underline"
		>
			{children} <SquareArrowOutUpRight size={16} />
		</Link>
	)
}

export default ExternalLink
