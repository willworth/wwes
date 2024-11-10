// src/content/config.ts
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()).default(["uncategorized"]),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
