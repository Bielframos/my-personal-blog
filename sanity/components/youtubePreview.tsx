import type { PreviewProps } from "sanity"
import { Flex, Text } from "@sanity/ui"
import ReactPlayer from "react-player"

interface PreviewYouTubeProps extends PreviewProps {
  url?: string
}

export function YouTubePreview(props: PreviewYouTubeProps) {
  const { url } = props
  return (
    <Flex padding={4} justify={"center"}>
      {url ? <ReactPlayer src={url} /> : <Text>Adicione a URL do seu vídeo no Youtube</Text>}
    </Flex>
  )
}
