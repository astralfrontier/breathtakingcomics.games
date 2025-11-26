import { Routes, Route, BrowserRouter } from "react-router";
import Navbar from "./Navbar";

import RulesLayout from "./rules/RulesLayout";

import EicEdition from "./rules/eic-edition.mdx";
import MelvinEdition from "./rules/melvin-edition.mdx";
import HeroesLayout from "./heroes/HeroesLayout";
import Heroes from "./heroes/Heroes";
import Hero from "./heroes/Hero";

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
        <Route path="rules" element={<RulesLayout />}>
          <Route path="eic-edition" element={<EicEdition />} />
          <Route path="melvin-edition" element={<MelvinEdition />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default SiteRoutes;
