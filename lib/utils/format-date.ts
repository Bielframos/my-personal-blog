function formatDate(date: string) {
  const newDate = new Date(date).toLocaleDateString("pt-BR")
  return newDate
}

export default formatDate

