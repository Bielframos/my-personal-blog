import { Card } from "@/lib/components/ui"

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return <Card className="p-6 grid auto-rows-min gap-4">{children}</Card>
}

