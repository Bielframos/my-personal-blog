import mdx from "@/lib/components/modules/mdx"
import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...mdx,
		...components,
	}
}
