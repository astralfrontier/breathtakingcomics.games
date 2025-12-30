import styles from "./Navbar.module.scss";
import { useCallback, useState } from "react";

function Navbar() {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = useCallback(
    () => setVisible((isVisible) => !isVisible),
    [setVisible]
  );

  return (
    <>
      <header className="container">
        <nav className={styles.responsive}>
          <ul>
            <li className={styles.burger}>
              <button onClick={toggleVisible}>&#8801;</button>
            </li>
            <li>
              <a href="/">
                <strong>Breathtaking Comics</strong>
              </a>
            </li>
          </ul>
          <ul className={visible ? styles.visible : styles.invisible}>
            <li>
              <a href="/rules/eic-edition">EIC Edition</a>
            </li>
            <li>
              <a href="/rules/melvin-edition">Melvin Edition</a>
            </li>
            <li>
              <a href="/rules/traits">Traits</a>
            </li>
            <li>
              <a href="/world">The Breathtaking World</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
