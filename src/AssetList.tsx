import { NavLink } from "react-router";
import type { BreathtakingAsset } from "./assets";

import slugify from "slugify";

const slug = (value: string) => slugify(value, { lower: true });

export interface AssetListViewProps {
  prefix: string;
  assets: BreathtakingAsset[];
}

interface AssetListProps {
  prefix: string;
  assets: BreathtakingAsset[];
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
  const { prefix, assets, view, children } = props;

  return (
    <>
      {children}
      {(view || DefaultAssetListView)({ prefix, assets })}
    </>
  );
}

export default AssetList;
