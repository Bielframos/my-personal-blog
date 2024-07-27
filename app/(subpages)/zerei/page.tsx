import { OG_IMAGES } from "@/lib/utils/variables"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Gabriel França | Zerei",
	description: "Um registro memorável de todos os jogos que já zerei na vida.",
	openGraph: {
		images: OG_IMAGES.zerei,
	},
}

export default async function Zerei() {
	return <></>
}
