import { Outlet } from "react-router";
import Navbar from "../Navbar";

function SupportsLayout() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default SupportsLayout;
