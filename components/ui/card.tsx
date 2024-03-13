export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full max-w-2xl border rounded-lg bg-white-12 dark:bg-black-12 h-fit">
      {children}
      <div className="absolute inset-0 w-full h-full rounded-lg border border-dashed left-4 top-4 bg-texture-black dark:bg-texture-white -z-10" />
    </div>
  )
}
