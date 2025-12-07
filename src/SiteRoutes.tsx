import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./Home";

import ArticleWithToc from "./ArticleWithToc";
import AssetList from "./AssetList";
import AssetView from "./AssetView";

import RulesLayout from "./rules/RulesLayout";
import HeroesLayout from "./heroes/HeroesLayout";
import SupportsLayout from "./support/SupportsLayout";
import VillainsLayout from "./villains/VillainsLayout";

import EicEdition, { toc as eicToc } from "./rules/eic-edition.mdx";
import MelvinEdition from "./rules/melvin-edition.mdx";
import SampleTraits from "./rules/SampleTraits";

import HeroData from "./heroes/HeroData";
import SupportData from "./support/SupportData";
import VillainData from "./villains/VillainData";
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
          <Route
            path="eic-edition"
            element={<ArticleWithToc article={<EicEdition />} toc={eicToc} />}
          />
          <Route path="melvin-edition" element={<MelvinEdition />} />
          <Route path="traits" element={<SampleTraits />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default SiteRoutes;
