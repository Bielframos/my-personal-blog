import { promises as fs } from "node:fs"
import path from "node:path"
import { Card } from "@/lib/components/ui"
import { style as buttonStyle } from "@/lib/components/ui/button"
import { cn, formatDate } from "@/lib/utils"
import { POSTS_DIRECTORY } from "@/lib/utils/paths"
import { FEED_CATEGORIES, OG_IMAGES } from "@/lib/utils/variables"
import matter from "gray-matter"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
	title: "Gabriel França | Feed",
	description:
		"Um pouco sobre tudo o que gosto, tecnologia, esporte, vídeo games e troca de conhecimento.",
	openGraph: {
		images: OG_IMAGES.feed,
	},
}

async function getPosts(category = "conhecimento", page = 1) {
	const pageSize = 5
	const startIndex = (page - 1) * pageSize

	const fileNames = await fs.readdir(POSTS_DIRECTORY)

	const sortedFiles = fileNames
		.map((fileName) => {
			const fileArr = fileName.split("&")
			return {
				position: Number.parseInt(fileArr[0]),
				category: fileArr[1],
				fileName,
			}
		})
		.sort((a, b) => b.position - a.position)
		.filter((file) => file.category === category)

	const posts = await Promise.all(
		sortedFiles.slice(startIndex, startIndex + pageSize).map(async (file) => {
			const filePath = path.join(POSTS_DIRECTORY, file.fileName)
			const fileContent = await fs.readFile(filePath, "utf8")
			const { data } = matter(fileContent)
			return { id: file.position, ...data } as PostFrontmatter
		}),
	)

	const postsCount = sortedFiles.length
	const pagesCount = Math.ceil(postsCount / pageSize)

	return { postsCount, pagesCount, posts }
}

export default async function Feed({
	searchParams,
}: {
	searchParams: { category?: string; page?: string }
}) {
	const currentCategory = searchParams.category || "conhecimento"
	const currentPage = searchParams.page ? Number.parseInt(searchParams.page) : 1

	const { postsCount, pagesCount, posts } = await getPosts(
		currentCategory,
		currentPage,
	)

	return (
		<Card>
			<div className="text-black-11 dark:text-white-11">
				<header className="border-b">
					<div className="p-6 pb-0">
						<h2 className="font-semibold text-2xl text-black-12 dark:text-white-12">
							Bem-vindo ao meu feed!
						</h2>
						<p className="text-black-10 dark:text-white-10">
							Aqui você irá encontrar conteúdos sobre tudo que eu gosto.
						</p>
					</div>

					<nav className="flex gap-2 mt-4 px-6 pb-6 overflow-hidden overflow-x-auto">
						{FEED_CATEGORIES.map((category) => {
							return (
								<Link
									key={category}
									href={`?category=${category}`}
									className={cn(
										"flex px-4 py-1 border hover:bg-black-1 dark:hover:bg-white-1 rounded-full",
										currentCategory === category &&
											"bg-blue-3 dark:bg-blue-dark-3 border-blue-6 dark:border-blue-dark-6 text-blue-9 hover:bg-blue-4 dark:hover:bg-blue-dark-4",
									)}
								>
									{category}
								</Link>
							)
						})}
					</nav>
				</header>

				<div className="grid auto-rows-min divide-y">
					{posts.map(
						({ id, category, slug, title, description, publishedAt }) => {
							const date = formatDate(publishedAt)

							return (
								<Link key={slug} href={`/feed/${id}&${category}&${slug}`}>
									<article className="p-6 hover:bg-black-1 dark:hover:bg-white-1 grid md:grid-cols-[auto,1fr,1fr] auto-rows-min gap-2 md:gap-4">
										<div className="uppercase text-sm rounded-full px-4 py-1 bg-black-2 dark:bg-white-2 h-fit w-fit font-mono">
											{date}
										</div>
										<h3 className="font-semibold text-xl">{title}</h3>
										<p className="text-black-10 dark:text-white-10">
											{description}
										</p>
									</article>
								</Link>
							)
						},
					)}
				</div>

				<footer className="px-6 py-4 flex justify-between items-center border-t">
					<p>
						{postsCount} {postsCount > 1 ? "posts" : "post"}
					</p>
					<div className="flex gap-2">
						<Link
							href={`?page=${currentPage - 1}&category=${currentCategory}`}
							className={cn(
								buttonStyle({ variant: "secondary", size: "icon" }),
								currentPage === 1 && "pointer-events-none opacity-50",
							)}
						>
							<ChevronLeft />
						</Link>
						<Link
							href={`?page=${currentPage + 1}&category=${currentCategory}`}
							className={cn(
								buttonStyle({ variant: "secondary", size: "icon" }),
								currentPage === pagesCount && "pointer-events-none opacity-50",
							)}
						>
							<ChevronRight />
						</Link>
					</div>
				</footer>
			</div>
		</Card>
	)
}
