import { style as buttonStyle } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import cn from "@/lib/utils/cn"
import { formatDate } from "@/lib/utils/format-date"
import { mdxComponents } from "@/lib/utils/mdx-components"
import { POSTS_DIRECTORY } from "@/lib/variables/paths"
import { promises as fs } from "fs"
import matter from "gray-matter"
import { ChevronLeft } from "lucide-react"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import { Fragment } from "react"

async function getPostData(year?: string, slug?: string) {
  if (year && slug) {
    const filePath = `${POSTS_DIRECTORY}/${year}/${slug}.mdx`
    const fileContent = await fs.readFile(filePath, "utf8")
    const { data, content } = matter(fileContent)

    return { data, content }
  } else {
    return null
  }
}

export default async function RemoteMdxPage({
  params,
}: {
  params: { year?: string; slug?: string }
}) {
  const post = await getPostData(params.year, params.slug)

  if (post) {
    const postData = post.data as Post
    const date = formatDate(postData.publishedAt)
    return (
      <Fragment>
        <Link
          href={"/feed"}
          className={cn(buttonStyle({ variant: "secondary", className: "mb-4 self-start" }))}
        >
          <ChevronLeft /> Voltar para o feed
        </Link>
        <Card>
          <header className="p-6 border-b hover:bg-black-1 dark:hover:bg-white-1 grid auto-rows-min gap-2">
            <div className="uppercase text-sm rounded-full px-4 py-1 bg-black-2 dark:bg-white-2 w-fit">
              {date}
            </div>
            <h3 className="font-semibold text-3xl">{postData.title}</h3>
            <p className="text-black-10 dark:text-white-10">{postData.description}</p>
          </header>
          <div className="grid auto-rows-min gap-4 p-6">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </Card>
      </Fragment>
    )
  }
}
