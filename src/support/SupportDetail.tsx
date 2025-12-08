import { NavLink } from "react-router";
import type { AssetListViewProps } from "../AssetList";
import slugify from "slugify";

const slug = (value: string) => slugify(value, { lower: true });

export default function SupportDetail(props: AssetListViewProps) {
  const { prefix, assets } = props;

  return (
    <>
      {assets.map((asset) => {
        if (!asset.metadata.name) {
          throw new Error(`Unnamed asset!`);
        }

        const assetName = asset.metadata.name;
        const assetSlug = slug(assetName);

        return (
          <>
            <p>
              <NavLink to={`/${prefix}/${assetSlug}`}>{assetName}</NavLink>
              {asset.metadata.description && (
                <>
                  <br />
                  {asset.metadata.description}
                </>
              )}
            </p>
          </>
        );
      })}
    </>
  );
}
