import { style as buttonStyle } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import cn from "@/lib/utils/cn"
import { formatDate } from "@/lib/utils/format-date"
import { OG_IMAGES } from "@/lib/variables/og-images"
import { POSTS_DIRECTORY } from "@/lib/variables/paths"
import { promises as fs } from "fs"
import matter from "gray-matter"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import path from "path"

export const metadata: Metadata = {
  title: "Gabriel França | Feed",
  description:
    "Um pouco sobre tudo o que gosto, tecnologia, esporte, vídeo games e troca de conhecimento.",
  openGraph: {
    images: OG_IMAGES.feed,
  },
}

async function getPosts(
  { year, page }: { year: string; page: number } = { year: "2024", page: 1 }
) {
  const pageSize = 5
  const startIndex = (page - 1) * pageSize

  const postDirectories = await fs.readdir(POSTS_DIRECTORY)
  const yearDirectory = path.join(POSTS_DIRECTORY, year)
  const fileNames = await fs.readdir(yearDirectory)

  const sortedFiles = fileNames
    .map((fileName) => {
      const fileArr = fileName.split("&")
      return { position: parseInt(fileArr[0]), fileName }
    })
    .sort((a, b) => b.position - a.position)

  const posts = await Promise.all(
    sortedFiles.slice(startIndex, startIndex + pageSize).map(async (file) => {
      const filePath = path.join(yearDirectory, file.fileName)
      const fileContent = await fs.readFile(filePath, "utf8")
      const { data } = matter(fileContent)
      return { id: file.position, ...data } as PostFrontmatter
    })
  )

  const postsCount = fileNames.length
  const pagesCount = Math.ceil(postsCount / pageSize)

  return { years: postDirectories, postsCount, pagesCount, posts }
}

export default async function Feed({
  searchParams,
}: {
  searchParams: { y: string; p: string }
}) {
  const currentYear = searchParams.y || "2024"
  const currentPage = searchParams.p ? parseInt(searchParams.p) : 1

  const { years, postsCount, pagesCount, posts } = await getPosts({
    year: currentYear,
    page: currentPage,
  })

  return (
    <Card>
      <div className="text-black-11 dark:text-white-11">
        <header className="p-6">
          <h2 className="font-semibold text-2xl text-black-12 dark:text-white-12">
            Bem-vindo ao meu feed!
          </h2>
          <p className="text-black-10 dark:text-white-10">
            Aqui você irá encontrar conteúdos sobre tudo que eu gosto.
          </p>
        </header>

        <nav className="border-y flex">
          {years.map((year) => {
            return (
              <Link
                key={year}
                href={`?y=` + year}
                className="px-4 py-2 hover:bg-black-1 dark:hover:bg-white-1 border-r"
              >
                {year}
              </Link>
            )
          })}
        </nav>

        <div className="grid auto-rows-min divide-y">
          {posts.map(({ id, slug, title, description, publishedAt }) => {
            const date = formatDate(publishedAt)

            return (
              <Link key={slug} href={`/feed/${currentYear}/${id}&${slug}`}>
                <article className="p-6 hover:bg-black-1 dark:hover:bg-white-1 grid md:grid-cols-[auto,1fr,1fr] auto-rows-min gap-2 md:gap-4">
                  <div className="uppercase text-sm rounded-full px-4 py-1 bg-black-2 dark:bg-white-2 h-fit w-fit font-mono">
                    {date}
                  </div>
                  <h3 className="font-semibold text-xl">{title}</h3>
                  <p className="text-black-10 dark:text-white-10">{description}</p>
                </article>
              </Link>
            )
          })}
        </div>

        <footer className="px-6 py-4 flex justify-between items-center border-t">
          <p>
            {postsCount} {postsCount > 1 ? "posts" : "post"}
          </p>
          <div className="flex gap-2">
            <Link
              href={`?y=${currentYear}&p=${currentPage - 1}`}
              className={cn(
                buttonStyle({ variant: "secondary", size: "icon" }),
                currentPage === 1 && "pointer-events-none opacity-50"
              )}
            >
              <ChevronLeft />
            </Link>
            <Link
              href={`?y=${currentYear}&p=${currentPage - 1}`}
              className={cn(
                buttonStyle({ variant: "secondary", size: "icon" }),
                currentPage === pagesCount && "pointer-events-none opacity-50"
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
