import { defineType, defineField } from 'sanity'
import { YouTubePreview } from '../components/youtubePreview'

export const youtubeType = defineType({
    name: 'youtube',
    type: 'object',
    title: 'YouTube Embed',
    fields: [
        defineField({
            name: 'url',
            type: 'url',
            title: 'YouTube video URL',
        }),
    ],
    preview: {
        select: { url: 'url' },
    },
    components: {
        preview: YouTubePreview,
    },
})