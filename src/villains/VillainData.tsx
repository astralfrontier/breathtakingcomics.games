import type { BreathtakingAsset } from "../assets";
import OaklandOgre, {
  frontmatter as oaklandOgreMetadata,
} from "./oakland-ogre.mdx";
import Stitches, { frontmatter as stitchesMetadata } from "./stitches.mdx";

const villainAssets: BreathtakingAsset[] = [
  {
    element: <OaklandOgre />,
    metadata: oaklandOgreMetadata,
  },
  {
    element: <Stitches />,
    metadata: stitchesMetadata,
  },
];

export default villainAssets;
