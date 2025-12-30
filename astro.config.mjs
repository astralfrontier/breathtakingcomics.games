// @ts-check
import yaml from '@rollup/plugin-yaml';
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import rehypeMdxToc from "rehype-mdx-toc";
import rehypeSlug from "rehype-slug";
import react from '@astrojs/react';

import playformCompress from '@playform/compress';

import compressor from 'astro-compressor';

import purgecss from 'astro-purgecss';

// https://astro.build/config
export default defineConfig({
  site: 'https://breathtakingcomics.games',
  integrations: [mdx({
    rehypePlugins: [rehypeSlug, rehypeMdxToc]
  }), react(), purgecss(), playformCompress(), compressor()],
  vite: {
    plugins: [yaml()]
  }
});