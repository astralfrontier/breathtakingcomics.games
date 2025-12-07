import { NavLink } from "react-router";

import styles from "./Navbar.module.scss";
import { useCallback, useState } from "react";

function Navbar() {
  const [visible, setVisible] = useState<boolean>(true);

  const toggleVisible = useCallback(
    () => setVisible((isVisible) => !isVisible),
    [setVisible]
  );

  return (
    <>
      <header className="container">
        <nav className={styles.responsive}>
          <ul>
            <li className={styles.burger} onClick={toggleVisible}>
              &#8801;
            </li>
            <li>
              <NavLink to="/">
                <strong>Breathtaking Comics</strong>
              </NavLink>
            </li>
          </ul>
          <ul className={visible ? styles.visible : styles.invisible}>
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
