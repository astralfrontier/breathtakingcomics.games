import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const art = defineCollection({
  loader: file("./src/art.yaml"),
  schema: z.object({
    name: z.string(),
    credit: z.string(),
    url: z.string() // We can't use Zod's url() helper with path-only URLs
  })
})

const traits = defineCollection({
  loader: file("./src/traits/traits.yaml"),
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

const traitShape = z.object({
  value: z.string(),
  hooks: z.array(z.string())
})

const world = defineCollection({
  loader: glob({pattern: "**/*.md", base: "./src/world"}),
  schema: z.object({
    name: z.string(),
    path: z.string(),
    description: z.string().optional(),
    pitch: z.string().optional(), // For heroes & villains
    inspiration: z.string().optional(),
    motivation: z.string().optional(),
    origin: z.string().optional(),
    role: z.string().optional(),
    abilities: z.string().optional(),
    struggles: z.string().optional(),
    tier: z.string().optional(),
    traits: z.object({
      position: traitShape,
      past: traitShape,
      personality: traitShape,
      powers: traitShape,
      problems: traitShape,
    }).optional()
  })
})

export const collections = { art, traits, world };