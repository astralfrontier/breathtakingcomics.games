import { useCallback, useState } from "react";
import { randomTraitByType, type TraitData } from "../traits";

import styles from "./RandomCharacterTool.module.scss";

function RandomCharacterTool() {
  const [position, setPosition] = useState<TraitData>(
    randomTraitByType("position")
  );
  const [past, setPast] = useState<TraitData>(randomTraitByType("past"));
  const [personality, setPersonality] = useState<TraitData>(
    randomTraitByType("personality")
  );
  const [powers, setPowers] = useState<TraitData>(randomTraitByType("powers"));
  const [problems, setProblems] = useState<TraitData>(
    randomTraitByType("problems")
  );

  const onPositionCallback = useCallback(
    () => setPosition(randomTraitByType("position", position)),
    [position]
  );
  const onPastCallback = useCallback(
    () => setPast(randomTraitByType("past", past)),
    [past]
  );
  const onPersonalityCallback = useCallback(
    () => setPersonality(randomTraitByType("personality", personality)),
    [personality]
  );
  const onPowersCallback = useCallback(
    () => setPowers(randomTraitByType("powers", powers)),
    [powers]
  );
  const onProblemsCallback = useCallback(
    () => setProblems(randomTraitByType("problems", problems)),
    [problems]
  );

  return (
    <article>
      <p>
        Traits are randomly chosen. Click on a trait to select a new random
        value.
      </p>
      <div className="grid">
        <div>
          <p>
            <span className={styles.trait} onClick={onPositionCallback}>
              &#x1F504;
            </span>
            <strong>Position</strong>
            <br />
            {position.name}
          </p>
          <p>
            <small>{position.description}</small>
          </p>
        </div>
        <div>
          <p>
            <span className={styles.trait} onClick={onPastCallback}>
              &#x1F504;
            </span>
            <strong>Past</strong>
            <br />
            {past.name}
          </p>
          <p>
            <small>{past.description}</small>
          </p>
        </div>
        <div>
          <p>
            <span className={styles.trait} onClick={onPersonalityCallback}>
              &#x1F504;
            </span>
            <strong>Personality</strong>
            <br />
            {personality.name}
          </p>
          <p>
            <small>{personality.description}</small>
          </p>
        </div>
        <div>
          <p>
            <span className={styles.trait} onClick={onPowersCallback}>
              &#x1F504;
            </span>
            <strong>Powers</strong>
            <br />
            {powers.name}
          </p>
          <p>
            <small>{powers.description}</small>
          </p>
        </div>
        <div>
          <p>
            <span className={styles.trait} onClick={onProblemsCallback}>
              &#x1F504;
            </span>
            <strong>Problems</strong>
            <br />
            {problems.name}
          </p>
          <p>
            <small>{problems.description}</small>
          </p>
        </div>
      </div>
    </article>
  );
}

export default RandomCharacterTool;
