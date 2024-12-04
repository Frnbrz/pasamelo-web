import { defineCollection, z } from "astro:content"

const landing = defineCollection({
	schema: z.object({
		title: z.string(),
	}),
})

export const collections = { landing }
