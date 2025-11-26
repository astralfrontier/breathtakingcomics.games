import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./Navbar";

import RulesLayout from "./rules/RulesLayout";

import HeroesLayout from "./heroes/HeroesLayout";
import EicEdition from "./rules/eic-edition.mdx";
import MelvinEdition from "./rules/melvin-edition.mdx";
import SupportsLayout from "./support/SupportsLayout";
import VillainsLayout from "./villains/VillainsLayout";

import HeroData from "./heroes/HeroData";
import SupportData from "./support/SupportData";
import VillainData from "./villains/VillainData";
import AssetList from "./AssetList";
import AssetView from "./AssetView";

function HelloWorld() {
  return (
    <>
      <Navbar />
      <main className="container">
        <h1>Hello World</h1>
      </main>
    </>
  );
}

function SiteRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HelloWorld />} />
        <Route path="heroes" element={<HeroesLayout />}>
          <Route
            index
            element={<AssetList assets={HeroData} prefix="heroes" />}
          />
          <Route path=":asset" element={<AssetView assets={HeroData} />} />
        </Route>
        <Route path="villains" element={<VillainsLayout />}>
          <Route
            index
            element={<AssetList assets={VillainData} prefix="villains" />}
          />
          <Route path=":asset" element={<AssetView assets={VillainData} />} />
        </Route>
        <Route path="support" element={<SupportsLayout />}>
          <Route
            index
            element={<AssetList assets={SupportData} prefix="support" />}
          />
          <Route path=":asset" element={<AssetView assets={SupportData} />} />
        </Route>
        <Route path="rules" element={<RulesLayout />}>
          <Route path="eic-edition" element={<EicEdition />} />
          <Route path="melvin-edition" element={<MelvinEdition />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default SiteRoutes;
