import type {
  BreathtakingAsset,
  BreathtakingAssetGroup,
  BreathtakingAssetPackage,
} from "../AssetTypes";
import OaklandOgre, { frontmatter as oaklandOgreBio } from "./oakland-ogre.mdx";
import Stitches, { frontmatter as stitchesBio } from "./stitches.mdx";

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
