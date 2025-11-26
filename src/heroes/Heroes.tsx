import { NavLink } from "react-router";

function Heroes() {
  return (
    <>
      <p>Heroes list goes here</p>
      <NavLink to="/heroes/radiance">Radiance</NavLink>
    </>
  );
}

export default Heroes;
