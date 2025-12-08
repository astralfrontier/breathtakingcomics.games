import { groupBy } from "ramda";

export interface BreathtakingAsset {
  element: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metadata: { [key: string]: any };
}

type GroupedAssets = { [bucket: string]: BreathtakingAsset[] };

// A helper to partition assets by some programmable rule
export function groupAssetsByMetadata(
  assets: BreathtakingAsset[],
  rule: (asset: BreathtakingAsset) => string
): GroupedAssets {
  return groupBy(rule, assets) as GroupedAssets;
}

// A specialized helper to look for a "group" frontmatter key
export function groupAssetsByGroup(
  assets: BreathtakingAsset[],
  groups: string[]
) {
  return groupAssetsByMetadata(assets, (asset: BreathtakingAsset) => {
    if (!asset.metadata.group || !groups.includes(asset.metadata.group)) {
      return "";
    } else {
      return asset.metadata.group;
    }
  });
}
