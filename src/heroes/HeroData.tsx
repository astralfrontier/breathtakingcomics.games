import type { BreathtakingAsset } from "../assets";
import HeroWithStatblock from "./HeroWithStatblock";
import Fractal, { frontmatter as fractalFrontmatter } from "./the-fractal.mdx";

const heroAssets: BreathtakingAsset[] = [
  {
    element: (
      <HeroWithStatblock hero={<Fractal />} frontmatter={fractalFrontmatter} />
    ),
    metadata: fractalFrontmatter,
  },
];

export default heroAssets;
