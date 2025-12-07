import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import ViteYaml from "@modyfi/vite-plugin-yaml";
import rehypeSlug from "rehype-slug";
import rehypeMdxToc from "rehype-mdx-toc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    ViteYaml(),
    {
      enforce: "pre",
      ...mdx({
        rehypePlugins: [rehypeSlug, rehypeMdxToc],
        /* jsxImportSource: …, otherOptions… */
      }),
    },
    react(),
  ],
});
