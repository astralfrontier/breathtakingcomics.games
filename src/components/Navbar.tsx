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
        <div className={styles.burger}>
          <button className={visible ? 'contrast' : ''} onClick={toggleVisible}>&#8801;</button>
        </div>

        <nav className={`${styles.responsive} ${visible ? styles.visible : styles.invisible}`}>
          <ul>
            <li>
              <a href="/">
                <strong>Breathtaking Comics</strong>
              </a>
            </li>
          </ul>
          <ul>
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
