import { Routes, Route, BrowserRouter } from "react-router";
import Navbar from "./Navbar";

import Beta from "./beta.mdx";
import RulesLayout from "./rules/RulesLayout";

import EicEdition from "./rules/eic-edition.mdx";
import MelvinEdition from "./rules/melvin-edition.mdx";

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
        <Route path="rules" element={<RulesLayout />}>
          <Route path="eic-edition" element={<EicEdition />} />
          <Route path="melvin-edition" element={<MelvinEdition />} />
        </Route>
        <Route index element={<HelloWorld />} />
        <Route path="beta" element={<Beta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default SiteRoutes;
