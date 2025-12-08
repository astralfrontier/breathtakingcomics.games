import { useParams } from "react-router";
import CcBy from "./CcBy";

import slugify from "slugify";
import type { BreathtakingAsset } from "./assets";

const slug = (value: string) => slugify(value, { lower: true });

interface AssetViewProps {
  assets: BreathtakingAsset[];
}

function AssetView(props: AssetViewProps) {
  const { assets } = props;
  const { asset } = useParams();
  const assetSlugFromUrl = asset?.toLowerCase() ?? "";

  const foundAsset = assets.find(
    (asset) => slug(asset.metadata.name) == assetSlugFromUrl
  );

  if (!foundAsset) {
    return (
      <>
        <h1>Not Found</h1>
      </>
    );
  }

  return (
    <>
      {foundAsset.element}

      <CcBy />
    </>
  );
}

export default AssetView;
