import { Link } from "react-router";
import type {
  BreathtakingAsset,
  BreathtakingAssetGroup,
  BreathtakingAssetPackage,
} from "./AssetTypes";

interface AssetListProps {
  prefix: string;
  assetPackage: BreathtakingAssetPackage;
  children?: React.ReactNode;
}

interface AssetListByGroupProps {
  prefix: string;
  group: BreathtakingAssetGroup | undefined;
  assets: BreathtakingAsset[];
}

function AssetListByGroup(props: AssetListByGroupProps) {
  const { prefix, group, assets } = props;
  const isInGroup = (asset: BreathtakingAsset) =>
    group ? asset.groups.includes(group.slug) : asset.groups.length == 0;
  const groupedAssets = assets.filter(isInGroup);

  return (
    <>
      {group && <h1>{group.name}</h1>}
      {group && <p>{group.description}</p>}
      {groupedAssets && (
        <ul>
          {groupedAssets.map((asset) => (
            <li>
              <Link to={`/${prefix}/${asset.slug}`}>{asset.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function AssetList(props: AssetListProps) {
  const { prefix, assetPackage, children } = props;

  return (
    <>
      {children}
      <AssetListByGroup
        prefix={prefix}
        group={undefined}
        assets={assetPackage.assets}
      />
      {assetPackage.groups.map((group) => (
        <AssetListByGroup
          prefix={prefix}
          group={group}
          assets={assetPackage.assets}
        />
      ))}
    </>
  );
}

export default AssetList;
