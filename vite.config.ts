import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import ViteYaml from "@modyfi/vite-plugin-yaml";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    ViteYaml(),
    {
      enforce: "pre",
      ...mdx({
        /* jsxImportSource: …, otherOptions… */
      }),
    },
    react(),
  ],
});
