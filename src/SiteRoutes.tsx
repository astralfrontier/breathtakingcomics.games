import { BrowserRouter, Route, Routes } from "react-router";

import RulesLayout from "./rules/RulesLayout";

import HeroesLayout from "./heroes/HeroesLayout";
import EicEdition from "./rules/eic-edition.mdx";
import MelvinEdition from "./rules/melvin-edition.mdx";
import SupportsLayout from "./support/SupportsLayout";
import VillainsLayout from "./villains/VillainsLayout";

import AssetList from "./AssetList";
import AssetView from "./AssetView";
import HeroData from "./heroes/HeroData";
import Home from "./Home";
import SupportData from "./support/SupportData";
import VillainData from "./villains/VillainData";
import SampleTraits from "./rules/SampleTraits";
import { VillainListView } from "./villains/VillainListView";

function SiteRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="heroes" element={<HeroesLayout />}>
          <Route
            index
            element={<AssetList assetPackage={HeroData} prefix="heroes" />}
          />
          <Route
            path=":asset"
            element={<AssetView assetPackage={HeroData} />}
          />
        </Route>
        <Route path="villains" element={<VillainsLayout />}>
          <Route
            index
            element={
              <AssetList
                assetPackage={VillainData}
                prefix="villains"
                view={VillainListView}
              />
            }
          />
          <Route
            path=":asset"
            element={<AssetView assetPackage={VillainData} />}
          />
        </Route>
        <Route path="support" element={<SupportsLayout />}>
          <Route
            index
            element={<AssetList assetPackage={SupportData} prefix="support" />}
          />
          <Route
            path=":asset"
            element={<AssetView assetPackage={SupportData} />}
          />
        </Route>
        <Route path="rules" element={<RulesLayout />}>
          <Route path="eic-edition" element={<EicEdition />} />
          <Route path="melvin-edition" element={<MelvinEdition />} />
          <Route path="traits" element={<SampleTraits />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default SiteRoutes;
