import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import yaml from 'js-yaml';
import { z } from 'astro/zod';

const art = defineCollection({
  loader: file("./src/art.yaml", { parser: (text) => (yaml.load(text) as any).images }),
  schema: ({ image }) => z.object({
    name: z.string(),
    artist: reference('artists'),
    image: image(),
    url: z.string().url().optional()
  })
})

const artists = defineCollection({
  loader: file("./src/art.yaml", { parser: (text) => (yaml.load(text) as any).artists }),
  schema: z.object({
    name: z.string(),
    url: z.string().url().optional()
  })
})

const tags = defineCollection({
  loader: file("./src/tags.yaml"),
  schema: z.object({
    name: z.string()
  })
});

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

const world = defineCollection({
  loader: glob({pattern: ["**/*.(md|mdx)", "!**/_*.(md|mdx)"], base: "./src/world"}),
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
    tags: z.array(reference("tags")),
    art: z.array(reference("art")).optional(),
    members: z.array(reference("world")).optional()
  })
})

export const collections = { art, artists, tags, traits, world };