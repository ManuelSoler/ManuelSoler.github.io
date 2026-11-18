import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    tagline: z.string(),
    summary: z.string(),
    cardImage: z.string(),
    people: z.array(z.object({ name: z.string(), role: z.string() })).default([]),
    projects: z
      .array(
        z.object({
          name: z.string(),
          description: z.string(),
          funding: z.string(),
          url: z.string().optional(),
        }),
      )
      .default([]),
  }),
});

// Pages migrated unchanged from the previous WordPress site.
const legacy = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/legacy' }),
  schema: z.object({ title: z.string(), path: z.string() }),
});

export const collections = { research, legacy };
