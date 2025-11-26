import { NavLink } from "react-router";

function Navbar() {
  return (
    <>
      <header className="container">
        <nav>
          <ul>
            <li>
              <strong>Breathtaking Comics</strong>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/rules/eic-edition">EIC Edition</NavLink>
            </li>
            <li>
              <NavLink to="/rules/melvin-edition">Melvin Edition</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
