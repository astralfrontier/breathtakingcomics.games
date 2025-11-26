import { Outlet } from "react-router";
import Navbar from "../Navbar";

function HeroesLayout() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default HeroesLayout;
