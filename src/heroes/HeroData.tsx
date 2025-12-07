import type {
  BreathtakingAsset,
  BreathtakingAssetGroup,
  BreathtakingAssetPackage,
} from "../AssetTypes";
import Fractal, { frontmatter as fractalBio } from "./the-fractal.mdx";

const heroAssets: BreathtakingAsset[] = [
  {
    name: fractalBio.name,
    slug: fractalBio.slug,
    groups: [],
    element: <Fractal />,
  },
];

const heroGroups: BreathtakingAssetGroup[] = [];

const heroPackage = {
  assets: heroAssets,
  groups: heroGroups,
};

export default heroPackage as BreathtakingAssetPackage;
