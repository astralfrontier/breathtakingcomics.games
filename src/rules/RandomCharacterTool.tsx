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
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setPosition(randomTraitByType("position", position));
      e.stopPropagation();
    },
    [position]
  );
  const onPastCallback = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setPast(randomTraitByType("past", past));
      e.stopPropagation();
    },
    [past]
  );
  const onPersonalityCallback = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setPersonality(randomTraitByType("personality", personality));
      e.stopPropagation();
    },
    [personality]
  );
  const onPowersCallback = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setPowers(randomTraitByType("powers", powers));
      e.stopPropagation();
    },
    [powers]
  );
  const onProblemsCallback = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setProblems(randomTraitByType("problems", problems));
      e.stopPropagation();
    },
    [problems]
  );

  return (
    <article>
      <p>
        Here's a collection of randomly-chosen traits. Click on the button to
        select a new trait. Look at the combination of traits to see what kind
        of character you got.
      </p>
      <div>
        {[
          { name: "Position", value: position, onClick: onPositionCallback },
          { name: "Past", value: past, onClick: onPastCallback },
          {
            name: "Personality",
            value: personality,
            onClick: onPersonalityCallback,
          },
          { name: "Powers", value: powers, onClick: onPowersCallback },
          { name: "Problems", value: problems, onClick: onProblemsCallback },
        ].map((trait) => (
          <>
            <div className={styles.traitblock}>
              <div className={styles.traitbutton}>
                <button className={styles.trait} onClick={trait.onClick}>
                  &#8635;
                </button>
              </div>
              <div className={styles.traitname}>
                <strong>{trait.name}</strong>
                <br />
                {trait.value.name}
              </div>
              <div className={styles.traitdescription}>
                <p>
                  <small>{trait.value.description}</small>
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </article>
  );
}

export default RandomCharacterTool;
