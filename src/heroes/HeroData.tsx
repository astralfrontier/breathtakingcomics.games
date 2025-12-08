import type { BreathtakingAsset } from "../assets";
import Fractal, { frontmatter as fractalFrontmatter } from "./the-fractal.mdx";

const heroAssets: BreathtakingAsset[] = [
  {
    element: <Fractal />,
    metadata: fractalFrontmatter,
  },
];

export default heroAssets;
