import mdx from "@/lib/components/modules/mdx"
import { style as buttonStyle } from "@/lib/components/ui/button"
import { cn, formatDate } from "@/lib/utils"
import { ChevronLeft } from "lucide-react"
import type { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import feed from "@/lib/services/feed.service"
import { urlFor } from "@/sanity/lib/image"
import { PortableText } from "next-sanity"
import { blocks } from "./blocks"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug
  const post = await feed.getPost(slug)

  if (post) {
    return {
      title: `Gabrielfr.dev | ${post.title}`,
      description: post.subtitle,
    }
  }

  return {
    title: "Gabrielfr.dev | O post não foi encontrado",
  }
}

export default async function Post({ params }: Props) {
  const slug = (await params).slug
  const post = await feed.getPost(slug)
  const postImageUrl = post.mainImage ? urlFor(post.mainImage)?.quality(100).url() : null

  if (post) {
    const date = formatDate(post.publishedAt)
    return (
      <div className="w-full max-w-2xl max-md:pl-8 max-md:pt-10 mx-auto">
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

        <header className="py-6 border-b grid auto-rows-min gap-2">
          <div className="flex gap-2">
            <div className="uppercase text-xs rounded-full px-2 py-0.5 bg-black-2 dark:bg-white-2 h-fit w-fit font-mono border border-transparent">
              {date}
            </div>

            {post.categories.map((category) => (
              <span
                key={category.slug.current}
                className="uppercase text-xs rounded-full px-2 py-0.5 border h-fit w-fit font-mono text-black-0 dark:text-white-9"
              >
                {category.title}
              </span>
            ))}
          </div>

          {postImageUrl && (
            <img
              src={postImageUrl}
              alt={post.title}
              className="rounded-xl border my-6 w-full bg-cover"
              width={post.mainImage?.asset?.metadata?.dimensions?.width || 672}
              height={post.mainImage?.asset?.metadata?.dimensions?.height || 378}
            />
          )}

          <h3 className="font-semibold text-3xl">{post.title}</h3>
          <p className="text-black-10 dark:text-white-10">{post.subtitle}</p>
        </header>

        <div className="prose my-10 dark:prose-invert">
          <PortableText value={post.body} components={blocks} />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto pl-8 max-md:pt-10">
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

      <div className="w-full">
        <div className="pt-6 grid gap-2 auto-rows-min">
          <div className="uppercase text-sm rounded-full px-4 py-1 bg-black-2 dark:bg-white-2 w-fit font-mono">
            Erro 404
          </div>
          <h2>O post não foi encontrado</h2>
          <p className="text-black-9 dark:text-white-9">
            O post que você está tentando acessar não foi econtrado, retorne para o feed e tente
            visualizar ele mais uma vez.
          </p>
        </div>
      </div>
    </div>
  )
}

