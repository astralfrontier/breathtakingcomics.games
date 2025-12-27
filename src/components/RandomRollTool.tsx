import { useCallback, useState } from "react";
// TODO fix
// import { randomValue } from "../traits";

function randomValue(maxValue: number) {
  return Math.floor(Math.random() * maxValue);
}

function RandomRollTool() {
  const [roll, setRoll] = useState<number>(randomValue(6) + 1);

  function rollADie(dieSize: number) {
    setRoll((roll) => {
      let newRoll = randomValue(dieSize) + 1;
      while (newRoll == roll) {
        newRoll = randomValue(dieSize) + 1;
      }
      return newRoll;
    });
  }

  const rolld4 = useCallback(() => rollADie(4), []);
  const rolld6 = useCallback(() => rollADie(6), []);
  const rolld8 = useCallback(() => rollADie(8), []);
  const rolld10 = useCallback(() => rollADie(10), []);
  const rolld12 = useCallback(() => rollADie(12), []);

  return (
    <article>
      <p>
        <button onClick={rolld4}>d4</button>{" "}
        <button onClick={rolld6}>d6</button>{" "}
        <button onClick={rolld8}>d8</button>{" "}
        <button onClick={rolld10}>d10</button>{" "}
        <button onClick={rolld12}>d12</button>
      </p>
      <p>
        {roll == 0 && <p>Click on a die to roll it</p>}
        {roll > 0 && (
          <>
            <strong>You rolled:</strong> {roll} &mdash;{" "}
          </>
        )}
        {roll >= 1 && roll <= 2 && (
          <>
            On <strong>1-2</strong>, one Drive flips to Red - explain what went
            wrong!
          </>
        )}
        {roll >= 3 && roll <= 4 && (
          <>
            On <strong>3-4</strong>, one Drive flips to Red, another Drive flips
            to Green - mixed success
          </>
        )}
        {roll >= 5 && roll <= 9 && (
          <>
            On <strong>5-9</strong>, one Drive flips to Green - success!
          </>
        )}
        {roll >= 10 && (
          <>
            On <strong>10+</strong>, two Drives flip to Green - great success!
          </>
        )}
      </p>
      <p>After rolling, reduce the Trait die by one size, to a minimum of d4</p>
    </article>
  );
}

export default RandomRollTool;
