import { MDXComponents } from "mdx/types"
import { ExternalLink } from "../ui/external-link"
import { Highlighter } from "./highlighter"
import { YouTubeEmbed } from "@/components/modules/embeds"
import { Fight } from "./fight"
import { Timeline } from "./timeline"
import Image from "next/image"
import { getImageDataURL } from "@/lib/utils/get-image-data-url"

export const mdx: MDXComponents = {
  h1: ({ children }) => (
    <h2 className="text-3xl font-semibold text-black-12 dark:text-white-12 -mb-3 leading-normal">
      {children}
    </h2>
  ),
  h2: ({ children }) => (
    <h3 className="text-2xl font-semibold text-black-12 dark:text-white-12 -mb-3 leading-normal">
      {children}
    </h3>
  ),
  h3: ({ children }) => (
    <h4 className="text-xl font-semibold text-black-12 dark:text-white-12 -mb-3 leading-normal">
      {children}
    </h4>
  ),
  a: ({ children }) => (
    <a
      target="_blank"
      className="text-blue-9 hover:underline visited:text-blue-10 dark:visited:text-blue-10 hover:cursor-pointer"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="list-inside list-disc marker:text-black-12 dark:marker:text-white-12">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ul className="list-inside list-decimal marker:text-black-12 dark:marker:text-white-12">
      {children}
    </ul>
  ),

  code: ({ children }) => (
    <code className="font-mono text-sm px-1.5 py-0.5 rounded-md bg-black-2 dark:bg-white-2 text-black-12 dark:text-white-12">
      `{children}`
    </code>
  ),
  Image: async ({ src, alt, height, width, thumbnailUrl }) => {
    const imageDataUrl = await getImageDataURL(thumbnailUrl)
    return (
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        placeholder="blur"
        blurDataURL={imageDataUrl}
        className="rounded-md border"
      />
    )
  },
  ExternalLink: ({ href, children }) => <ExternalLink href={href} children={children} />,
  Highlighter: ({ title, content, language }) => (
    <Highlighter title={title} content={content} language={language} />
  ),
  YoutubeEmbed: ({ videoId }) => <YouTubeEmbed videoId={videoId} />,
  Fight: ({ category, blueCorner, redCorner, blueCornerWins, redCornerWins }) => (
    <Fight
      category={category}
      blueCorner={blueCorner}
      redCorner={redCorner}
      blueCornerWins={blueCornerWins}
      redCornerWins={redCornerWins}
    />
  ),
  Timeline: ({ events }) => <Timeline events={events} />,
}
