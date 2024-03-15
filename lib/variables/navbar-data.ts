import { X, Zerei } from "@/components/ui/icons"
import { Cpu, Github, Home, Instagram, Network, Newspaper } from "lucide-react"

export const SUB_PAGES = [
  { icon: Home, title: "Início", href: "/", disabled: false },
  { icon: Newspaper, title: "Feed", href: "/feed", disabled: false },
  { icon: Network, title: "Network", href: "/network", disabled: false },
  { icon: Cpu, title: "Setup", href: "/setup", disabled: false },
  { icon: Zerei, title: "Zerei", href: "/zerei", disabled: true },
]

export const SOCIAL_MEDIA_LINKS = [
  { icon: Github, title: "Github", href: "https://github.com/Bielframos", disabled: false },
  {
    icon: X,
    title: "X (Twitter)",
    href: "https://twitter.com/GabrielFramos99",
    disabled: false,
  },
  {
    icon: Instagram,
    title: "Instagram",
    href: "https://www.instagram.com/framosgabriel/",
    disabled: false,
  },
]
