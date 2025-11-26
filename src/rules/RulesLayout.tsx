import { Outlet } from "react-router";
import Navbar from "../Navbar";

function SiteRoutes() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default SiteRoutes;
