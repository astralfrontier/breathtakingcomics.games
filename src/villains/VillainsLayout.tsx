import { Outlet } from "react-router";
import Navbar from "../Navbar";

function VillainsLayout() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default VillainsLayout;
