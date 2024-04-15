export async function getImageDataURL(imageUrl: string) {
  const response = await fetch(imageUrl)
  const imageBuffer = await response.arrayBuffer()

  const base64Image = Buffer.from(imageBuffer).toString("base64")
  const dataUrl = `data:image/${imageUrl.split(".").pop()};base64,${base64Image}`

  return dataUrl
}
