import { Outlet } from "react-router";
import Navbar from "./Navbar";

function AssetLayout() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default AssetLayout;
