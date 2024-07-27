import { AnimatedPic } from "@/lib/components/modules"
import { style as buttonStyle } from "@/lib/components/ui/button"
import { Texture } from "@/lib/components/ui"
import cn from "@/lib/utils/cn"
import Link from "next/link"

export default function NotFound() {
	return (
		<div className="mx-auto grid auto-rows-min gap-10 max-w-sm text-center">
			<div className="w-full relative">
				<AnimatedPic
					src="/star-trek-gif.webp"
					alt="Um gif da série de TV Star Trek"
				/>
				<Texture />
			</div>
			<div className=" flex flex-col gap-4 items-center">
				<div className="uppercase text-sm rounded-full px-4 py-1 bg-black-2 dark:bg-white-2 w-fit">
					Erro 404
				</div>
				<p className="text-black-10 dark:text-white-10">
					A página que você está tentando acessar não existe ou não foi
					encontrada.
				</p>
				<Link href="/" className={cn(buttonStyle({ variant: "default" }))}>
					Ir para o início
				</Link>
			</div>
		</div>
	)
}
