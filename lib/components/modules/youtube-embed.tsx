"use client"

const YouTubeEmbed = ({ videoId }: { videoId: string }) => {
	return (
		<iframe
			title="Embed do YouTube"
			id="ytplayer"
			src={`https://www.youtube.com/embed/${videoId}?showinfo=0&rel=0`}
			className="aspect-video w-full border rounded-md overflow-hidden"
		/>
	)
}

export default YouTubeEmbed
