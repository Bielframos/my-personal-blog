import cn from "@/lib/utils/cn"

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
      <div className="absolute inset-0 w-full h-full rounded-lg border border-dashed left-4 top-4 bg-texture-black dark:bg-texture-white -z-10" />
    </div>
  )
}
