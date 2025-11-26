import { useParams } from "react-router";
import type { BreathtakingAsset } from "./AssetTypes";

interface AssetViewProps {
  assets: BreathtakingAsset[];
}

function AssetView(props: AssetViewProps) {
  const { assets } = props;
  const { asset } = useParams();
  const assetLc = asset?.toLowerCase() ?? "";

  const foundAsset = assets.find(
    (assetData) => assetData.slug.toLowerCase() == assetLc
  );

  if (!foundAsset) {
    return (
      <>
        <h1>Not Found</h1>
      </>
    );
  }

  return foundAsset.element;
}

export default AssetView;
