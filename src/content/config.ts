import { defineCollection, z } from 'astro:content';

const researchCollection = defineCollection({
  type: 'content', // v2.5.0 y posteriores
  schema: z.object({
    title: z.string(),
    date: z.date(), // Reverted to z.date()
    summary: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  'research': researchCollection,
};
