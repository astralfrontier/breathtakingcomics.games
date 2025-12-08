import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./Home";

import ArticleWithToc from "./ArticleWithToc";
import AssetView from "./AssetView";

import RulesLayout from "./rules/RulesLayout";
import AssetLayout from "./AssetLayout";

import EicEdition, { toc as eicToc } from "./rules/eic-edition.mdx";
import MelvinEdition from "./rules/melvin-edition.mdx";
import SampleTraits from "./rules/SampleTraits";

import Heroes from "./heroes/heroes.mdx";
import Villains from "./villains/villains.mdx";
import Support from "./support/support.mdx";

import HeroData from "./heroes/HeroData";
import SupportData from "./support/SupportData";
import VillainData from "./villains/VillainData";

function SiteRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="heroes" element={<AssetLayout />}>
          <Route index element={<Heroes />} />
          <Route path=":asset" element={<AssetView assets={HeroData} />} />
        </Route>
        <Route path="villains" element={<AssetLayout />}>
          <Route index element={<Villains />} />
          <Route path=":asset" element={<AssetView assets={VillainData} />} />
        </Route>
        <Route path="support" element={<AssetLayout />}>
          <Route index element={<Support />} />
          <Route path=":asset" element={<AssetView assets={SupportData} />} />
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
