import type { BreathtakingAsset } from "../assets";

import Handmaid, { frontmatter as handmaidMetadata } from "./handmaid.mdx";
import Malodoress, {
  frontmatter as malodoressMetadata,
} from "./malodoress.mdx";
import MrBig, { frontmatter as mrBigMetadata } from "./mr-big.mdx";
import OaklandOgre, {
  frontmatter as oaklandOgreMetadata,
} from "./oakland-ogre.mdx";
import SeaCzar, { frontmatter as seaCzarMetadata } from "./sea-czar.mdx";
import Stitches, { frontmatter as stitchesMetadata } from "./stitches.mdx";

const villainAssets: BreathtakingAsset[] = [
  {
    element: <Handmaid />,
    metadata: handmaidMetadata,
  },
  {
    element: <Malodoress />,
    metadata: malodoressMetadata,
  },
  {
    element: <MrBig />,
    metadata: mrBigMetadata,
  },
  {
    element: <OaklandOgre />,
    metadata: oaklandOgreMetadata,
  },
  {
    element: <SeaCzar />,
    metadata: seaCzarMetadata,
  },
  {
    element: <Stitches />,
    metadata: stitchesMetadata,
  },
];

export default villainAssets;
