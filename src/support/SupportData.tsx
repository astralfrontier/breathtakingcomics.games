import type {
  BreathtakingAsset,
  BreathtakingAssetGroup,
  BreathtakingAssetPackage,
} from "../AssetTypes";

import Action from "./action.mdx";
import CaptainBurger from "./captain-burger.mdx";
import ClarionHeights from "./clarion-heights.mdx";
import UniversalConsulting from "./universal-consulting.mdx";
import Wavelength from "./wavelength.mdx";
import ZetaCity from "./zeta-city.mdx";

const SETTINGS_GROUP = "settings";
const ORGANIZATIONS_GROUP = "organizations";

const supportAssets: BreathtakingAsset[] = [
  {
    name: "A.C.T.I.O.N.",
    slug: "action",
    groups: [ORGANIZATIONS_GROUP],
    element: <Action />,
  },
  {
    name: "Captain Burger",
    slug: "captain-burger",
    groups: [],
    element: <CaptainBurger />,
  },
  {
    name: "Clarion Heights Academy and Miller Mountain Corrections",
    slug: "clarion-heights",
    groups: [SETTINGS_GROUP],
    element: <ClarionHeights />,
  },
  {
    name: "Universal Consulting",
    slug: "universal-consulting",
    groups: [ORGANIZATIONS_GROUP],
    element: <UniversalConsulting />,
  },
  {
    name: "Wavelength",
    slug: "wavelength",
    groups: [ORGANIZATIONS_GROUP],
    element: <Wavelength />,
  },
  {
    name: "Zeta City",
    slug: "zeta-city",
    groups: [SETTINGS_GROUP],
    element: <ZetaCity />,
  },
];

const supportGroups: BreathtakingAssetGroup[] = [
  {
    name: "Organizations",
    slug: ORGANIZATIONS_GROUP,
    description:
      "Teams, groups, or factions that can make appearances, independent of the overall setting.",
  },
  {
    name: "Settings",
    slug: SETTINGS_GROUP,
    description:
      "Places, times, or situations where you can set a story arc, or an entire game.",
  },
];

const supportPackage = {
  assets: supportAssets,
  groups: supportGroups,
};

export default supportPackage as BreathtakingAssetPackage;
