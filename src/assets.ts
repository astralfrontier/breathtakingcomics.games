import { groupBy } from "ramda";

export interface BreathtakingAsset {
  element: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metadata: { [key: string]: any };
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

type GroupedAssets = { [bucket: string]: BreathtakingAsset[] };

export function groupAssetsByMetadata(
  assets: BreathtakingAsset[],
  rule: (asset: BreathtakingAsset) => string
): GroupedAssets {
  return groupBy(rule, assets) as GroupedAssets;
}
