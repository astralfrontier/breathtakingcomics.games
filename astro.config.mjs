// @ts-check
import yaml from '@rollup/plugin-yaml';
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

import playformCompress from '@playform/compress';

import compressor from 'astro-compressor';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react(), playformCompress(), compressor()],
  vite: {
    plugins: [yaml()]
  }
});