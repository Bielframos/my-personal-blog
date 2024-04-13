"use client"

export const YouTubeEmbed = ({ videoId }: { videoId: string }) => {
  return (
    <iframe
      id="ytplayer"
      src={`https://www.youtube.com/embed/${videoId}?showinfo=0&rel=0`}
      className="aspect-video w-full border rounded-md overflow-hidden"
    />
  )
}
