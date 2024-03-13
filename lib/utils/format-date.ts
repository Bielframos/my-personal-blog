export function formatDate(date: string) {
  const newDate = new Date(date)
    .toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })
    .replace(".", "")
  return newDate
}
