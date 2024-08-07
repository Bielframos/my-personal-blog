import { AnimatedPic } from "@/lib/components/modules"
import { style as buttonStyle } from "@/lib/components/ui/button"
import { Card } from "@/lib/components/ui"
import cn from "@/lib/utils/cn"
import { Mail, MessagesSquare } from "lucide-react"
import Link from "next/link"

export default function Home() {
	return (
		<Card>
			<article className="p-6 grid auto-rows-min gap-2 [&_p]:text-black-10 dark:[&_p]:text-white-10">
				<h2 className="text-2xl font-semibold">Hey there! 👋</h2>

				<p>
					Esse é meu blog pessoal e nele irei compartilhar bastante coisa legal.
					Meu objetivo é fazer deste site um hub central sobre mim, irei
					compartilhar um pouco de tudo que eu gosto.
				</p>

				<p>
					Aqui eu irei falar sobre mim, minhas vivências, experiências e
					assuntos que eu gosto muito como video games, esportes e muito mais.
				</p>
			</article>

			<hr />

			<article className="p-6 grid auto-rows-min gap-2 [&_p]:text-black-10 dark:[&_p]:text-white-10">
				<h2 className="text-lg font-semibold">Quem sou eu?</h2>
				<p>
					Eu sou Gabriel, tenho 24 anos e moro junto com minha esposa e filha
					(Kamala, uma dachshund), nossa família é 200% nordestina, somos
					nascidos e criados na cidade de Olinda no litoral Pernambucano.
				</p>

				<p>
					Eu sou graduado em Design Gráfico pela antiga AESO Barros Melo que é a
					atual Uniaeso, conclui o curso no ano de 2020 e logo após conheci e me
					apaixonei pela área que atuo que é Desenvolvimento Web.
				</p>

				<p>
					Como hobby eu amo programar (Embora também seja minha profissão),
					também sou apaixonado por jogar Video Games, acompanhar esportes como
					Futebol e MMA, entre outras coisas.
				</p>

				<div className="grid auto-rows-min md:grid-cols-2 gap-2 mt-4">
					<AnimatedPic
						src="/kamala.webp"
						alt="Foto da minha filha (Kamala, uma cadela da raça dachshund)"
					/>

					<AnimatedPic
						src="/my-marriage.webp"
						alt="Eu e minha esposa no nosso casamento"
					/>

					<AnimatedPic src="/me-and-my-wife.webp" alt="Eu e minha esposa" />

					<AnimatedPic
						src="/me-with-a-snake.webp"
						alt="Eu e minha esposa no nosso casamento"
					/>
				</div>
			</article>

			<hr />

			<article className="p-6 grid auto-rows-min gap-2 [&_p]:text-black-10 dark:[&_p]:text-white-10">
				<h2 className="text-lg font-semibold">
					Eu posso tirar suas ideias do papel 💫
				</h2>
				<p>
					Eu tenho experiência com Design Gráfico, UI/UX, Desenvolvimento
					Front-end e um pouco de Back-end e estou disponível para te ajudar a
					construir projetos incríveis.
				</p>

				<p>
					Pra falar comigo é facinho, basta clicar nesse botão aqui em baixo.
				</p>

				<div className="flex flex-wrap gap-4 mt-2">
					<Link
						href="https://wa.me/+5581993621938"
						target="_blank"
						className={cn(
							buttonStyle({ variant: "default", iconPos: "before" }),
						)}
					>
						<MessagesSquare /> Envie uma mensagem
					</Link>
					<Link
						href="mailto:contato@gabrielfr.dev"
						target="_blank"
						className={cn(
							buttonStyle({ variant: "default", iconPos: "before" }),
						)}
					>
						<Mail /> contato@gabrielfr.dev
					</Link>
				</div>
			</article>
		</Card>
	)
}
