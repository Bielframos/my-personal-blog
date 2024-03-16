import { mdx } from "@/components/modules/mdx"
import { style as buttonStyle } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import cn from "@/lib/utils/cn"
import { formatDate } from "@/lib/utils/format-date"
import { POSTS_DIRECTORY } from "@/lib/variables/paths"
import { promises as fs } from "fs"
import matter from "gray-matter"
import { ChevronLeft } from "lucide-react"
import { Metadata, ResolvingMetadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"

type Props = {
  params: { year?: string; slug?: string }
}

async function getPostData(year?: string, slug?: string) {
  if (year && slug) {
    const filePath = `${POSTS_DIRECTORY}/${year}/${slug}.mdx`
    const fileContent = await fs
      .readFile(filePath, "utf8")
      .then((file) => file)
      .catch(() => null)

    if (fileContent) {
      const { data, content } = matter(fileContent)
      return { data, content }
    }

    return null
  } else {
    return null
  }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPostData(params.year, params.slug)

  if (post) {
    const frontmetter = post.data as PostFrontmatter
    return {
      title: `GF | ${frontmetter.title}`,
      description: frontmetter.description,
      keywords: frontmetter.keywords,
    }
  }

  return {
    title: `GF | O post não foi encontrado`,
  }
}

export default async function RemoteMdxPage({ params }: Props) {
  const post = await getPostData(params.year, params.slug)

  if (post) {
    const frontmetter = post.data as PostFrontmatter
    const date = formatDate(frontmetter.publishedAt)
    return (
      <div className="grid auto-rows-min gap-4 mx-auto">
        <Link
          href={"/feed"}
          className={cn(
            buttonStyle({
              variant: "secondary",
              iconPos: "before",
            })
          )}
        >
          <ChevronLeft /> Voltar para o feed
        </Link>
        <Card center={false}>
          <header className="p-6 border-b grid auto-rows-min gap-2">
            <div className="uppercase text-sm rounded-full px-4 py-1 bg-black-2 dark:bg-white-2 w-fit">
              {date}
            </div>
            <h3 className="font-semibold text-3xl">{frontmetter.title}</h3>
            <p className="text-black-10 dark:text-white-10">{frontmetter.description}</p>
          </header>
          <div className="grid auto-rows-min gap-4 p-6">
            <MDXRemote source={post.content} components={mdx} />
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="grid auto-rows-min gap-4 w-full max-w-2xl mx-auto">
      <Link
        href={"/feed"}
        className={cn(
          buttonStyle({
            variant: "secondary",
            iconPos: "before",
          })
        )}
      >
        <ChevronLeft /> Ir para o feed
      </Link>
      <Card center={false}>
        <div className="p-6 grid gap-2 auto-rows-min">
          <div className="uppercase text-sm rounded-full px-4 py-1 bg-black-2 dark:bg-white-2 w-fit font-mono">
            Erro 404
          </div>
          <h2 className="text-2xl font-semibold">O post não foi encontrado</h2>
          <p className="text-black-10 dark:text-white-10">
            O post que você está tentando acessar não foi econtrado, retorne para o feed e tente
            visualizar ele mais uma vez.
          </p>
        </div>
      </Card>
    </div>
  )
}
