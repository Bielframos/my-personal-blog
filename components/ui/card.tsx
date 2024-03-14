import cn from "@/lib/utils/cn"
import { Texture } from "./texture"

export const Card = ({
  children,
  center = true,
}: {
  children: React.ReactNode
  center?: boolean
}) => {
  return (
    <div
      className={cn(
        "relative w-full max-w-2xl border rounded-lg bg-white-12 dark:bg-black-12 h-fit",
        center && "mx-auto"
      )}
    >
      {children}
      <Texture />
    </div>
  )
}
