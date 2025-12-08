import { NavLink } from "react-router";
import type { BreathtakingAsset, BreathtakingAssetPackage } from "./assets";

import slugify from "slugify";

const slug = (value: string) => slugify(value, { lower: true });

export interface AssetListViewProps {
  prefix: string;
  assets: BreathtakingAsset[];
}

interface AssetListProps {
  prefix: string;
  assetPackage: BreathtakingAssetPackage;
  children?: React.ReactNode;
  view?: React.FC<AssetListViewProps>;
}

function DefaultAssetListView(props: AssetListViewProps) {
  const { prefix, assets } = props;

  return (
    <>
      <ul>
        {assets.map((asset) => {
          if (!asset.metadata.name) {
            throw new Error(`Unnamed asset!`);
          }

          const assetName = asset.metadata.name;
          const assetSlug = slug(assetName);

          return (
            <li>
              <NavLink to={`/${prefix}/${assetSlug}`}>{assetName}</NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function AssetList(props: AssetListProps) {
  const { prefix, assetPackage, view, children } = props;

  return (
    <>
      {children}
      {(view || DefaultAssetListView)({ prefix, assets: assetPackage.assets })}
    </>
  );
}

export default AssetList;
