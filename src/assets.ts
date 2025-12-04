import { groupBy } from "ramda";

export interface BreathtakingAsset {
  name: string;
  slug: string;
  group?: string;
  element: React.ReactNode;
}

export interface BreathtakingAssetGroup {
  name: string;
  slug: string;
  description: string;
}

export interface BreathtakingAssetPackage {
  assets: BreathtakingAsset[];
  groups: BreathtakingAssetGroup[];
}

export const NULL_GROUP: BreathtakingAssetGroup = {
  slug: "NULL_GROUP",
  name: "",
  description: "",
};

// Only return the asset's group if it exists and also exists in the list of groups
const assetIsInGroups = (groups: BreathtakingAssetGroup[]) => {
  const groupSlugs = groups.map((group) => group.slug);
  return (asset: BreathtakingAsset): string => {
    if (!asset.group) {
      return "";
    } else if (!groupSlugs.includes(asset.group)) {
      return "";
    } else {
      return asset.group;
    }
  };
};

export function groupedAssets(
  assetPackage: BreathtakingAssetPackage
): Record<string, BreathtakingAsset[]> {
  return groupBy(assetIsInGroups(assetPackage.groups), assetPackage.assets);
}
