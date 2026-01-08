import { urlFor } from "@/sanity/lib/image"
import { PortableTextComponents } from "next-sanity"

export const blocks: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const { width, height } = value.asset.metadata.dimensions
      const aspectRatio = width / height
      return (
        <img
          src={urlFor(value.asset).width(672).fit("max").auto("format").quality(80).url()}
          alt={value.alt || ""}
          loading="lazy"
          width={width}
          height={768 / aspectRatio}
          style={{
            aspectRatio,
          }}
          className="rounded-xl border"
        />
      )
    },
    // youtube: ({ value }) => {
    //   return (
    //     <YouTubeEmbed
    //       videoid={getYoutubeVideoId(value.url) || ""}
    //       width={672}
    //       style="border-radius:0.5rem;"
    //     />
    //   )
    // },
  },
  //   Exemplos de blocos personalizados:
  //   block: {
  //     h1: ({ children }) => <h2 className="text-4xl font-bold text-blue-5">{children}</h2>,
  //     h2: ({ children }) => <h2 className="text-3xl font-bold text-blue-5">{children}</h2>,
  //     h3: ({ children }) => <h3 className="text-2xl font-bold text-blue-5">{children}</h3>,
  //     h4: ({ children }) => <h4 className="text-xl font-bold text-blue-5">{children}</h4>,
  //     blockquote: ({ children }) => (
  //       <blockquote className="my-4 border-l-4 border-blue-5 pl-4 font-medium">
  //         {children}
  //       </blockquote>
  //     ),
  //   },
  //   list: {
  //     bullet: ({ children }) => <ul className="ml-4 list-disc">{children}</ul>,
  //     number: ({ children }) => <ol className="ml-4 list-decimal">{children}</ol>,
  //   },
  //   marks: {
  //     link: ({ value, children }) => {
  //       const target = (value?.href || "").startsWith("http") ? "_blank" : undefined
  //       return (
  //         <Link
  //           href={value?.href}
  //           target={target}
  //           className="text-blue-5 underline visited:text-blue-3 hover:text-radix-blue-9"
  //         >
  //           {children}
  //         </Link>
  //       )
  //     },
  //   },
}
