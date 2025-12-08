import type {
  BreathtakingAsset,
  BreathtakingAssetGroup,
  BreathtakingAssetPackage,
} from "../assets";
import Action, { frontmatter as actionMetadata } from "./action.mdx";
import CaptainBurger, {
  frontmatter as captainBurgerMetadata,
} from "./captain-burger.mdx";
import ClarionHeights, {
  frontmatter as clarionHeightsMetadata,
} from "./clarion-heights.mdx";
import UniversalConsulting, {
  frontmatter as universalConsultingMetadata,
} from "./universal-consulting.mdx";
import Wavelength, {
  frontmatter as wavelengthMetadata,
} from "./wavelength.mdx";
import ZetaCity, { frontmatter as zetaCityMetadata } from "./zeta-city.mdx";

const supportAssets: BreathtakingAsset[] = [
  {
    element: <Action />,
    metadata: actionMetadata,
  },
  {
    element: <CaptainBurger />,
    metadata: captainBurgerMetadata,
  },
  {
    element: <ClarionHeights />,
    metadata: clarionHeightsMetadata,
  },
  {
    element: <UniversalConsulting />,
    metadata: universalConsultingMetadata,
  },
  {
    element: <Wavelength />,
    metadata: wavelengthMetadata,
  },
  {
    element: <ZetaCity />,
    metadata: zetaCityMetadata,
  },
];

const supportGroups: BreathtakingAssetGroup[] = [];

const supportPackage = {
  assets: supportAssets,
  groups: supportGroups,
};

export default supportPackage as BreathtakingAssetPackage;
