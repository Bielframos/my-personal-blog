import cn from "@/lib/utils/cn"
import { Texture } from "./texture"

export const Card = ({
  children,
  center = true,
  className,
}: {
  children: React.ReactNode
  center?: boolean
  className?: string
}) => {
  return (
    <div
      className={cn(
        "relative w-full max-w-3xl border rounded-lg bg-white-12 dark:bg-black-12 h-fit",
        center && "mx-auto",
        className
      )}
    >
      {children}
      <Texture />
    </div>
  )
}
