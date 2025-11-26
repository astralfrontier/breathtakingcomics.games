import { useCallback, useState } from "react";
import { randomValue } from "../traits";

function RandomRollTool() {
  const [roll, setRoll] = useState<number>(0);

  const rolld4 = useCallback(() => setRoll(randomValue(4) + 1), []);
  const rolld6 = useCallback(() => setRoll(randomValue(6) + 1), []);
  const rolld8 = useCallback(() => setRoll(randomValue(8) + 1), []);
  const rolld10 = useCallback(() => setRoll(randomValue(10) + 1), []);

  return (
    <article>
      <p>
        <button onClick={rolld4}>d4</button>{" "}
        <button onClick={rolld6}>d6</button>{" "}
        <button onClick={rolld8}>d8</button>{" "}
        <button onClick={rolld10}>d10</button>
      </p>
      <p>
        {roll == 0 && <p>Click on a die to roll it</p>}
        {roll > 0 && <strong>Result: {roll}</strong>}
        {roll >= 1 && roll <= 2 && (
          <p>
            <strong>1-2</strong>: one Drive flips to Red - explain what went
            wrong!
          </p>
        )}
        {roll >= 3 && roll <= 4 && (
          <p>
            <strong>3-4</strong>: one Drive flips to Red, another Drive flips to
            Green - mixed success
          </p>
        )}
        {roll >= 5 && roll <= 9 && (
          <p>
            <strong>5-9</strong>: one Drive flips to Green - success!
          </p>
        )}
        {roll >= 10 && (
          <p>
            <strong>10+</strong>: two Drives flip to Green - great success!
          </p>
        )}
      </p>
    </article>
  );
}

export default RandomRollTool;
