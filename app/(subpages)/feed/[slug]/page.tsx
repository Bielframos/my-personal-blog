import mdx from "@/lib/components/modules/mdx"
import { style as buttonStyle } from "@/lib/components/ui/button"
import { Card } from "@/lib/components/ui"
import { cn, formatDate } from "@/lib/utils"
import { ChevronLeft } from "lucide-react"
import type { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import feed from "@/lib/services/feed-services"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug
  const post = await feed.getPost(slug)

  if (post) {
    const metadata = post.metadata
    return {
      title: `Gabrielfr.dev | ${metadata.title}`,
      description: metadata.description,
      keywords: metadata.keywords,
    }
  }

  return {
    title: "Gabrielfr.dev | O post não foi encontrado",
  }
}

export default async function RemoteMdxPage({ params }: Props) {
  const slug = (await params).slug
  const post = await feed.getPost(slug)

  if (post) {
    const { metadata, content } = post
    const date = formatDate(metadata.$createdAt)
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
            <div className="flex gap-2">
              <div className="uppercase text-sm rounded-full px-4 py-1 bg-black-2 dark:bg-white-2 h-fit w-fit font-mono border border-transparent">
                {date}
              </div>

              <div className="uppercase text-sm rounded-full px-4 py-1 h-fit w-fit font-mono dark:bg-texture-white bg-texture-black border border-dashed">
                {metadata.category}
              </div>
            </div>

            <h3 className="font-semibold text-3xl">{metadata.title}</h3>
            <p className="text-black-10 dark:text-white-10">{metadata.description}</p>
          </header>
          <div className="grid auto-rows-min gap-4 p-6 text-black-10 dark:text-white-10">
            <MDXRemote source={content} components={mdx} />
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

