// @ts-check
import yaml from '@rollup/plugin-yaml';
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import rehypeMdxToc from "rehype-mdx-toc";
import rehypeSlug from "rehype-slug";
import rehypeExternalLinks from "rehype-external-links";
import react from '@astrojs/react';
import astroBrokenLinksChecker from 'astro-broken-links-checker';

import playformCompress from '@playform/compress';

import compressor from 'astro-compressor';

import purgecss from 'astro-purgecss';

// https://astro.build/config
export default defineConfig({
  site: 'https://breathtakingcomics.games',
  integrations: [
    mdx({
      rehypePlugins: [
        rehypeSlug,
        rehypeMdxToc, 
        [
          rehypeExternalLinks,
          {
            target: "\_blank",
            rel: ["noopener", "noreferrer", "external"],
          },
        ],
      ]
    }),
    react(),
    astroBrokenLinksChecker({
      checkExternalLinks: false,
      throwError: true
    }),
    purgecss(),
    playformCompress(),
    compressor()
  ],
  vite: {
    plugins: [yaml()]
  }
});