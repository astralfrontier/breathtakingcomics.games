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
            <li>
              <NavLink to="/rules/traits">Traits</NavLink>
            </li>
            <li>
              <NavLink to="/heroes">Heroes</NavLink>
            </li>
            <li>
              <NavLink to="/villains">Villains</NavLink>
            </li>
            <li>
              <NavLink to="/support">Supporting Cast</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
