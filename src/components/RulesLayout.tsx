import { Outlet } from "react-router";
import Navbar from "../Navbar";

function RulesLayout() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default RulesLayout;
