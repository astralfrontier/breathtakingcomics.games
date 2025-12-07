import mdx from "@mdx-js/rollup";
import ViteYaml from "@modyfi/vite-plugin-yaml";
import react from "@vitejs/plugin-react-swc";
import rehypeMdxToc from "rehype-mdx-toc";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    ViteYaml(),
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
        rehypePlugins: [rehypeSlug, rehypeMdxToc],
        /* jsxImportSource: …, otherOptions… */
      }),
    },
    react(),
  ],
});
