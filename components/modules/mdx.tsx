import { MDXComponents } from "mdx/types"

export const mdx: MDXComponents = {
  h1: ({ children }) => <h2 className="text-3xl font-semibold">{children}</h2>,
  h2: ({ children }) => <h3 className="text-2xl font-semibold">{children}</h3>,
  a: ({ children }) => (
    <a
      target="_blank"
      className="text-blue-9 hover:underline visited:text-blue-10 dark:visited:text-blue-10 hover:cursor-pointer"
    >
      {children}
    </a>
  ),
}
