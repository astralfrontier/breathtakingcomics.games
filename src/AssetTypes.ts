export interface BreathtakingAsset {
  name: string;
  slug: string;
  groups: string[];
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
