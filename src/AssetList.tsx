import { Link } from "react-router";
import type {
  BreathtakingAsset,
  BreathtakingAssetGroup,
  BreathtakingAssetPackage,
} from "./AssetTypes";

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

interface AssetListByGroupProps {
  prefix: string;
  group: BreathtakingAssetGroup | undefined;
  assets: BreathtakingAsset[];
  view: React.FC<AssetListViewProps>;
}

function AssetListView(props: AssetListViewProps) {
  const { prefix, assets } = props;
  return (
    <ul>
      {assets.map((asset) => (
        <li>
          <Link to={`/${prefix}/${asset.slug}`}>{asset.name}</Link>
        </li>
      ))}
    </ul>
  );
}

function AssetListByGroup(props: AssetListByGroupProps) {
  const { prefix, group, assets, view } = props;
  const isInGroup = (asset: BreathtakingAsset) =>
    group ? asset.groups.includes(group.slug) : asset.groups.length == 0;
  const groupedAssets = assets.filter(isInGroup);

  return groupedAssets ? (
    <>
      {group && <h1>{group.name}</h1>}
      {group && <p>{group.description}</p>}
      {view({ prefix, assets: groupedAssets })}
    </>
  ) : (
    <></>
  );
}

function AssetList(props: AssetListProps) {
  const { prefix, assetPackage, view, children } = props;

  return (
    <>
      {children}
      <AssetListByGroup
        prefix={prefix}
        group={undefined}
        assets={assetPackage.assets}
        view={view || AssetListView}
      />
      {assetPackage.groups.map((group) => (
        <AssetListByGroup
          prefix={prefix}
          group={group}
          assets={assetPackage.assets}
          view={view || AssetListView}
        />
      ))}
    </>
  );
}

export default AssetList;
