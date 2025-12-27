import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const traits = defineCollection({
  loader: file("src/traits/traits.yaml"),
  schema: z.object({
    type: z.enum(['past', 'position', 'personality', 'powers', 'problems']),
    name: z.string(),
    examples: z.array(z.string()),
    catchphrase: z.string(),
    description: z.string(),
    hooks: z.array(z.string()),
    drives: z.array(z.string())
  })
});

export const collections = { traits };