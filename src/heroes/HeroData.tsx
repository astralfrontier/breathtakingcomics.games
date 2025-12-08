import type {
  BreathtakingAsset,
  BreathtakingAssetGroup,
  BreathtakingAssetPackage,
} from "../assets";
import Fractal, { frontmatter as fractalFrontmatter } from "./the-fractal.mdx";

const heroAssets: BreathtakingAsset[] = [
  {
    element: <Fractal />,
    metadata: fractalFrontmatter,
  },
];

const heroGroups: BreathtakingAssetGroup[] = [];

const heroPackage = {
  assets: heroAssets,
  groups: heroGroups,
};

export default heroPackage as BreathtakingAssetPackage;
