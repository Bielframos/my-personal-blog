"use client"

import { useMediaQuery } from "@/lib/hooks/use-media-query"
import { cn } from "@/lib/utils"
import { SOCIAL_MEDIA_LINKS, SUB_PAGES } from "@/lib/utils/variables"
import { AnimatePresence, type Variants, motion } from "framer-motion"
import { ChevronLeft, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { createElement, useState } from "react"
import { ThemeSwitcher } from "../modules"
import { Button } from "../ui"

const ulAnimation: Variants = {
	hidden: { left: "-256px" },
	show: { left: "0px" },
}

const iconAnimation: Variants = {
	initial: { x: "-120%" },
	entrance: { x: "0%" },
	exit: { x: "120%", transition: { delay: 0.3 } },
}

const IconContainer = ({
	children,
}: { children: React.ReactNode; key: string }) => {
	return (
		<motion.div
			variants={iconAnimation}
			initial="initial"
			animate="entrance"
			exit="exit"
		>
			{children}
		</motion.div>
	)
}

const Navbar = ({ userTheme }: { userTheme?: Theme }) => {
	const path = usePathname()
	const isMobile = useMediaQuery("(max-width: 768px)")
	const [showMenu, setShowMenu] = useState(false)

	return (
		<motion.div
			variants={ulAnimation}
			initial="hidden"
			animate={showMenu ? "show" : "hidden"}
			className="fixed md:sticky md:top-0 w-full max-w-64 h-svh border-r bg-white-12 dark:bg-black-12 z-[999]"
		>
			<nav className="flex flex-col py-10 md:py-16 h-full overflow-y-auto">
				<header className="flex gap-3 px-6 pt-6 pb-6 md:pt-0 relative">
					<Image
						src="/my-profile-pic.webp"
						width={42}
						height={42}
						alt="Uma foto do Gabriel França"
						className="rounded-full border aspect-square flex-1"
					/>
					<div className="flex flex-col justify-center">
						<h1 className="font-lg font-semibold">Gabriel França</h1>
						<p className="text-black-10 dark:text-white-10 col-start-2 -mt-1">
							Desenvolvedor Web
						</p>
					</div>
				</header>

				<ul className="p-6 border-t">
					{SUB_PAGES.map((route) => (
						<li key={route.title}>
							<Link
								href={route.disabled ? "#" : route.href}
								className={cn(
									"flex gap-2 pl-3 pr-4 py-2 rounded-lg transition-colors w-full hover:bg-black-2 dark:hover:bg-white-2",
									path === route.href &&
										"bg-blue-3 hover:bg-blue-4 dark:bg-blue-dark-3 dark:hover:bg-blue-dark-4 text-blue-9",
									route.disabled && "pointer-events-none opacity-50",
								)}
							>
								{createElement(route.icon)} {route.title}
							</Link>
						</li>
					))}
				</ul>

				<hr />

				<ul className="p-6">
					<h6 className="text-sm text-black-10 dark:text-white-10 pl-4 pb-2">
						Minhas redes
					</h6>
					{SOCIAL_MEDIA_LINKS.map((route) => (
						<li key={route.title}>
							<Link
								href={route.href}
								className={cn(
									"flex gap-2 pl-3 pr-4 py-2 rounded-lg transition-colors w-full hover:bg-black-2 dark:hover:bg-white-2",
									path === route.href &&
										"bg-blue-3 hover:bg-blue-4 dark:bg-blue-dark-4 dark:hover:bg-blue-dark-4 text-blue-9",
									route.disabled && "pointer-events-none opacity-50",
								)}
							>
								{createElement(route.icon)} {route.title}
							</Link>
						</li>
					))}
				</ul>

				<hr className="mb-6" />

				<ThemeSwitcher userTheme={userTheme} />
			</nav>

			{isMobile && (
				<Button
					size="icon"
					variant="secondary"
					className="absolute -right-10 border top-6 bg-white-12 dark:bg-black-12 hover:bg-white-10 dark:hover:bg-black-10 backdrop-blur-sm overflow-hidden rounded-l-none"
					onClick={() => setShowMenu(!showMenu)}
				>
					<AnimatePresence mode="wait">
						{showMenu && (
							<IconContainer key="chevron-right">
								<ChevronLeft />
							</IconContainer>
						)}
						{!showMenu && (
							<IconContainer key="menu">
								<Menu />
							</IconContainer>
						)}
					</AnimatePresence>
				</Button>
			)}
		</motion.div>
	)
}

export default Navbar
