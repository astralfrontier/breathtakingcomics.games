import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const art = defineCollection({
  loader: file("./src/art.yaml"),
  schema: ({ image }) => z.object({
    name: z.string(),
    artist: reference('artists'),
    image: image(),
    url: z.string().url().optional()
  })
})

const artists = defineCollection({
  loader: file("./src/artists.yaml"),
  schema: z.object({
    name: z.string(),
    url: z.string().url().optional()
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

const tags = defineCollection({
  loader: file("./src/tags.yaml"),
  schema: z.object({
    name: z.string()
  })
})

const traitShape = z.object({
  value: z.string(),
  hooks: z.array(z.string())
})

const world = defineCollection({
  loader: glob({pattern: ["**/*.(md|mdx)", "!**/_*.(md|mdx)"], base: "./src/world"}),
  schema: z.object({
    name: z.string(),
    tags: z.array(reference("tags")),
    description: z.string().optional(),
    inspiration: z.string().optional(),
    motivation: z.string().optional(),
    traits: z.object({
      position: traitShape,
      past: traitShape,
      personality: traitShape,
      powers: traitShape,
      problems: traitShape,
    }).optional(),
    dialogue: z.array(z.string()).optional(),
    art: z.array(z.string()).optional()
  })
})

export const collections = { art, artists, traits, world };