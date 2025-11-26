import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./Navbar";

import RulesLayout from "./rules/RulesLayout";

import Hero from "./heroes/Hero";
import Heroes from "./heroes/Heroes";
import HeroesLayout from "./heroes/HeroesLayout";
import EicEdition from "./rules/eic-edition.mdx";
import MelvinEdition from "./rules/melvin-edition.mdx";
import Support from "./support/Support";
import Supports from "./support/Supports";
import SupportsLayout from "./support/SupportsLayout";
import Villain from "./villains/Villain";
import Villains from "./villains/Villains";
import VillainsLayout from "./villains/VillainsLayout";

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
          <Route index element={<Heroes />} />
          <Route path=":hero" element={<Hero />} />
        </Route>
        <Route path="villains" element={<VillainsLayout />}>
          <Route index element={<Villains />} />
          <Route path=":villain" element={<Villain />} />
        </Route>
        <Route path="support" element={<SupportsLayout />}>
          <Route index element={<Supports />} />
          <Route path=":support" element={<Support />} />
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
