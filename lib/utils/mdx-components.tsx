import { MDXComponents } from "mdx/types"

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => <h2 className="text-3xl font-semibold">{children}</h2>,
}
