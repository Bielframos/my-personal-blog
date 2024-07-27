import cn from "@/lib/utils/cn"
import { X } from "lucide-react"
import Image from "next/image"

type Corner = {
	imgUrl: string
	name: string
	cartel: [number, number, number, number]
}

const FightCard = ({
	category,
	blueCorner,
	redCorner,
	blueCornerWins,
	redCornerWins,
}: {
	category: string
	blueCorner: Corner
	redCorner: Corner
	blueCornerWins?: boolean
	redCornerWins?: boolean
}) => {
	return (
		<div className="w-full border rounded-md overflow-hidden">
			<header className="w-full px-4 py-2 border-b">{category}</header>
			<div className="flex flex-col md:flex-row gap-4 md:gap-0 px-4 py-6 md:justify-between md:items-center bg-texture-black dark:bg-texture-white">
				<div className="flex items-center gap-2 self-start">
					<Image
						src={blueCorner.imgUrl}
						alt={`Foto do atleta: ${blueCorner.name}`}
						height={56}
						width={56}
						className={cn(
							"border-2 rounded-full bg-white-12 dark:bg-black-12",
							blueCornerWins && "border-blue-9 bg-blue-2 dark:bg-blue-dark-2",
						)}
					/>
					<div>
						<p className="text-black-12 dark:text-white-12">
							{blueCorner.name}
						</p>
						<span className="font-mono text-sm">
							{blueCorner.cartel[0]}-{blueCorner.cartel[1]}-
							{blueCorner.cartel[2]}
							{blueCorner.cartel[3] !== 0 && `-${blueCorner.cartel[3]}SR`}
						</span>
					</div>
				</div>
				<X className="self-center" />
				<div className="flex items-center gap-2 self-end">
					<div className="text-end">
						<p className="text-black-12 dark:text-white-12">{redCorner.name}</p>
						<span className="font-mono text-sm">
							{redCorner.cartel[0]}-{redCorner.cartel[1]}-{redCorner.cartel[2]}
							{redCorner.cartel[3] !== 0 && `-${redCorner.cartel[3]}SR`}
						</span>
					</div>
					<Image
						src={redCorner.imgUrl}
						alt={`Foto do atleta: ${redCorner.name}`}
						height={56}
						width={56}
						className={cn(
							"border-2 rounded-full bg-white-12 dark:bg-black-12",
							redCornerWins && "border-blue-9 bg-blue-2 dark:bg-blue-dark-2",
						)}
					/>
				</div>
			</div>
		</div>
	)
}

export default FightCard
