import { AnimatedPic } from "@/components/modules/animated-pic"
import { Button } from "@/components/ui/button"
import { MessagesSquare } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="py-16 min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <section className="relative w-full ml-8 mr-16 max-w-2xl border rounded-lg bg-white-12 dark:bg-black-12">
        <header className="grid grid-cols-[auto,1fr] auto-rows-min p-6">
          <Image
            src="/my-profile-pic.webp"
            width={48}
            height={48}
            alt="Uma foto do Gabriel França"
            className="rounded-full row-span-2 mr-3"
          />
          <h1 className="font-lg font-semibold">Gabriel França</h1>
          <p className="text-white-10 col-start-2">Desenvolvedor Web</p>
        </header>

        <hr />

        <article className="p-6 grid auto-rows-min gap-2 [&_p]:text-black-10 dark:[&_p]:text-white-10">
          <h2 className="text-lg font-semibold">Hey there! 👋</h2>

          <p>
            Esse é meu blog pessoal e nele irei compartilhar bastante coisa legal. Meu objetivo
            é fazer deste site um hub central sobre mim, irei compartilhar um pouco de tudo que
            eu gosto.
          </p>

          <p>
            Aqui eu irei falar sobre mim, minhas vivências, experiências e assuntos que eu gosto
            muito como video games, esportes e muito mais.
          </p>
        </article>

        <hr />

        <article className="p-6 grid auto-rows-min gap-2 [&_p]:text-black-10 dark:[&_p]:text-white-10">
          <h2 className="text-lg font-semibold">Quem sou eu?</h2>
          <p>
            Eu sou Gabriel, tenho 24 anos e moro junto com minha esposa e filha (Kamala, uma
            dachshund), nossa família é 200% nordestina, somos nascidos e criados na cidade de
            Olinda no litoral Pernambucano.
          </p>

          <p>
            Eu sou graduado em Design Gráfico pela antiga AESO Barros Melo que é a atual
            Uniaeso, conclui o curso no ano de 2020 e logo após conheci e me apaixonei pela área
            que atuo que é Desenvolvimento Web.
          </p>

          <p>
            Como hobby eu amo programar (Embora também seja minha profissão), também sou
            apaixonado por jogar Video Games, acompanhar esportes como Futebol e MMA, entre
            outras coisas.
          </p>

          <div className="grid auto-rows-min md:grid-cols-2 gap-2 mt-4">
            <AnimatedPic
              src="/kamala.webp"
              alt="Foto da minha filha (Kamala, uma cadela da raça dachshund)"
            />

            <AnimatedPic src="/my-marriage.webp" alt="Eu e minha esposa no nosso casamento" />

            <AnimatedPic src="/me-and-my-wife.webp" alt="Eu e minha esposa" />

            <AnimatedPic
              src="/me-with-a-snake.webp"
              alt="Eu e minha esposa no nosso casamento"
            />
          </div>
        </article>

        <hr />

        <article className="p-6 grid auto-rows-min gap-2 [&_p]:text-black-10 dark:[&_p]:text-white-10">
          <h2 className="text-lg font-semibold">Eu posso tirar suas ideias do papel 💫</h2>
          <p>
            Eu tenho experiência com Design Gráfico, UI/UX, Desenvolvimento Front-end e um pouco
            de Back-end e estou disponível para te ajudar a construir projetos incríveis.
          </p>

          <p>Pra falar comigo é facinho, basta clicar nesse botão aqui em baixo.</p>

          <Link href="https://wa.me/+5581985898807" target="_blank" className="mt-2">
            <Button iconPos="before">
              <MessagesSquare /> Fale comigo
            </Button>
          </Link>
        </article>

        <div className="absolute inset-0 w-full h-full rounded-lg border border-dashed left-4 top-4 bg-texture-black dark:bg-texture-white -z-10" />
      </section>
    </main>
  )
}

