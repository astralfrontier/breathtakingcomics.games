import { Link } from "react-router";
import type { AssetListViewProps } from "../AssetList";

export function VillainListView(props: AssetListViewProps) {
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
