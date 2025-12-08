import type { BreathtakingAsset } from "../assets";
import Handmaid, { frontmatter as handmaidMetadata } from "./handmaid.mdx";
import OaklandOgre, {
  frontmatter as oaklandOgreMetadata,
} from "./oakland-ogre.mdx";
import Stitches, { frontmatter as stitchesMetadata } from "./stitches.mdx";

const villainAssets: BreathtakingAsset[] = [
  {
    element: <Handmaid />,
    metadata: handmaidMetadata,
  },
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
