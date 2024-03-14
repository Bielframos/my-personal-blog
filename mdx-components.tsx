import type { MDXComponents } from "mdx/types"
import { mdx } from "@/components/modules/mdx"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdx,
    ...components,
  }
}
