import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		articles: defineCollection({
			type: "page",
			source: "articles/**/*.md",
			schema: z.object({
				title: z.string(),
				description: z.string().optional(),
				date: z.coerce.date(),
				lastModified: z.coerce.date().optional(),
				status: z.enum(["draft", "published", "archived"]).default("published"),
				author: z.object({ name: z.string() }).optional(),
				category: z.string().optional(),
				tags: z.array(z.string()).default([]),
			}),
		}),
	},
});
