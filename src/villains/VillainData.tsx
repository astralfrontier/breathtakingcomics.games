import type {
  BreathtakingAsset,
  BreathtakingAssetGroup,
  BreathtakingAssetPackage,
} from "../AssetTypes";
import Stitches from "./stitches.mdx";

const villainAssets: BreathtakingAsset[] = [
  {
    name: "Stitches",
    slug: "stitches",
    element: <Stitches />,
  },
];

const villainGroups: BreathtakingAssetGroup[] = [];

const villainPackage = {
  assets: villainAssets,
  groups: villainGroups,
};

export default villainPackage as BreathtakingAssetPackage;
