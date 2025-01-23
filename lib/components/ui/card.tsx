import cn from "@/lib/utils/cn"
import { Texture } from "./index"

const Card = ({
  children,
  center = true,
  height = "fit",
  className,
}: {
  children: React.ReactNode
  center?: boolean
  className?: string
  height?: "fit" | "fill"
}) => {
  return (
    <div
      className={cn(
        "relative isolate w-fit",
        center && "mx-auto",
        height === "fill" ? "h-full" : "h-fit"
      )}
    >
      <Texture />
      <div
        className={cn(
          "relative w-full max-w-3xl border rounded-lg bg-white-12 dark:bg-black-12",
          height === "fill" ? "h-full" : "h-fit",
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default Card

