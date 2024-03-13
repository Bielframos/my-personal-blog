import { Fragment } from "react"
import { promises as fs } from "fs"
import matter from "gray-matter"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import cn from "@/lib/utils/cn"

async function getPosts(
  { year, page }: { year: string; page: number } = { year: "2024", page: 1 }
) {
  const pageSize = 5
  const startIndex = (page - 1) * pageSize

  const postsDirectory = process.cwd() + "/posts"
  const postDirectories = await fs.readdir(postsDirectory)
  const yearDirectory = postsDirectory + "/" + year
  const fileNames = await fs.readdir(yearDirectory)

  const posts = await Promise.all(
    fileNames.slice(startIndex, startIndex + pageSize).map(async (file) => {
      const filePath = yearDirectory + "/" + file
      const fileContent = await fs.readFile(filePath, "utf8")
      const { data } = matter(fileContent)
      return data
    })
  )

  const postsCount = fileNames.length
  const pagesCount = Math.ceil(postsCount / pageSize)

  return { years: postDirectories, posts, postsCount, pagesCount }
}

export default async function Feed({
  searchParams,
}: {
  searchParams: { y: string; p: string }
}) {
  const currentYear = searchParams.y || "2024"
  const currentPage = searchParams.p ? parseInt(searchParams.p) : 1

  const { years, posts, postsCount, pagesCount } = await getPosts({
    year: currentYear,
    page: currentPage,
  })

  return (
    <Fragment>
      <div className="text-black-11 dark:text-white-11">
        <header className="p-6">
          <h1 className="font-semibold text-2xl text-black-12 dark:text-white-12">
            Bem-vindo ao meu feed!
          </h1>
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

        <footer className="px-6 py-4 flex justify-between items-center">
          <p>
            {postsCount} {postsCount > 1 ? "posts" : "post"}
          </p>
          <div className="flex gap-2">
            <Link
              href={`?y=${currentYear}&p=${currentPage - 1}`}
              className={cn(currentPage === 1 && "pointer-events-none")}
            >
              <Button disabled={currentPage === 1}>Página anterior</Button>
            </Link>
            <Link
              href={`?y=${currentYear}&p=${currentPage + 1}`}
              className={cn(currentPage === pagesCount && "pointer-events-none")}
            >
              <Button disabled={currentPage === pagesCount}>Próxima página</Button>
            </Link>
          </div>
        </footer>
      </div>
    </Fragment>
  )
}
