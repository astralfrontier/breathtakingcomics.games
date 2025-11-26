import { Link } from "react-router";
import type { BreathtakingAsset } from "./AssetTypes";

interface AssetListProps {
  prefix: string;
  assets: BreathtakingAsset[];
  children?: React.ReactNode;
}

function AssetList(props: AssetListProps) {
  const { prefix, assets, children } = props;

  return (
    <>
      {children}
      <ul>
        {assets.map((asset) => (
          <li>
            <Link to={`/${prefix}/${asset.slug}`}>{asset.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default AssetList;
