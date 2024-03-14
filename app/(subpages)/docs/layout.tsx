import { Card } from "@/components/ui/card"

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Card>
      <div className="p-6 grid auto-rows-min gap-4">{children}</div>
    </Card>
  )
}
