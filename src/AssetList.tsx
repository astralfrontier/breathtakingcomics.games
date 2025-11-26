import { Link } from "react-router";
import type { BreathtakingAssetPackage } from "./AssetTypes";
import { groupBy } from "ramda";
import { useMemo } from "react";

interface AssetListProps {
  prefix: string;
  assetPackage: BreathtakingAssetPackage;
  children?: React.ReactNode;
}

function AssetList(props: AssetListProps) {
  const { prefix, assetPackage, children } = props;

  const groupedAssets = useMemo(
    () => groupBy((asset) => asset.group ?? "", assetPackage.assets),
    [assetPackage.assets]
  );

  return (
    <>
      {children}
      {[{ slug: "", name: "", description: "" }, ...assetPackage.groups].map(
        (group) => (
          <>
            {group.name && <h1>{group.name}</h1>}
            {group.description && <p>{group.description}</p>}
            {groupedAssets[group.slug] && (
              <ul>
                {groupedAssets[group.slug]?.map((asset) => (
                  <li>
                    <Link to={`/${prefix}/${asset.slug}`}>{asset.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        )
      )}
    </>
  );
}

export default AssetList;
