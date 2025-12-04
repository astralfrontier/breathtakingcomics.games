import type {
  BreathtakingAsset,
  BreathtakingAssetGroup,
  BreathtakingAssetPackage,
} from "../AssetTypes";
import OaklandOgre, { metadata as oaklandOgreBio } from "./oakland-ogre.mdx";
import Stitches, { metadata as stitchesBio } from "./stitches.mdx";

const villainAssets: BreathtakingAsset[] = [
  {
    name: oaklandOgreBio.name,
    slug: oaklandOgreBio.slug,
    groups: [],
    element: <OaklandOgre />,
  },
  {
    name: stitchesBio.name,
    slug: stitchesBio.slug,
    groups: [],
    element: <Stitches />,
  },
];

const villainGroups: BreathtakingAssetGroup[] = [];

const villainPackage = {
  assets: villainAssets,
  groups: villainGroups,
};

export default villainPackage as BreathtakingAssetPackage;
